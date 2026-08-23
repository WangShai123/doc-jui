# Define Component

`defineComponent()` is the base tool for defining stateful JUI components. It unifies shared lifecycle, state updates, events, plugins, and cleanup rules. It does not design the component template for you, and it does not decide business behavior for you.

It is suitable for components with these traits:

- A stable root node.
- A set of `state` values that drive view changes.
- Lifecycle methods such as `build()`, `mount()`, `unmount()`, and `destroy()`.
- Events, timers, Observers, plugins, and other resources that should share one cleanup entry.

In JUI, components are divided into two kinds:

- Stateful components defined with `defineComponent()`, such as `Modal` and `Swiper`.
- Pure `UI Primitive` tools, which do not contain state or lifecycle. They provide simple DOM behavior and simple UI primitives, such as `Drop`.

## Import

```js
import { defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## Basic Structure

```js
const state = createDeepStore({
  count: 0,
});

const counter = defineComponent({
  name: 'Counter',
  props: {
    step: 1,
  },
  state,
  actions: {
    increase() {
      counter.setState('count', counter.state.count + counter.props.step);
      return counter;
    },
    reset() {
      counter.setState({ count: 0 });
      return counter;
    },
  },
  view: ({ state }) =>
    jsx('button', {
      type: 'button',
      children: () => `Count: ${state.count}`,
      onClick: () => counter.increase(),
    }),
});

counter.mount(document.querySelector('#app'));
```

In this code:

- `props` stores creation options.
- `state` stores runtime state.
- `actions` are public methods.
- `view` creates the root node and binds `state.count` to the button text.
- `mount()` automatically calls `build()` and inserts the root node into the container.

## Definition Fields

`defineComponent()` receives a definition object:

| Field                 | Description |
| --------------------- | ----------- |
| `name`                | Component name, used in error messages |
| `props`               | Creation options object |
| `state`               | Reactive state object, usually from `createDeepStore()` |
| `view(context)`       | Creates the root node, runs only during build |
| `actions`             | Public methods merged onto the component instance |
| `ownsElement`         | Whether to remove the root node on destroy. Removed by default |
| `normalizeStatePatch` | Optional, converts an incoming state patch into the internal format |
| `validateStatePatch`  | Optional, validates a state patch |
| `onBuild`             | Runs after build |
| `onMount`             | Runs after mount |
| `onUnmount`           | Runs before unmount |
| `onDestroy`           | Runs when destroy starts |

The `context` passed to `view(context)` contains:

| Member                    | Description |
| ------------------------- | ----------- |
| `props`                   | Current props |
| `state`                   | Current state |
| `runtime`                 | `built`, `mounted`, and `destroyed` flags |
| `element`                 | Current root node. `null` before build |
| `own(cleanup)`            | Registers a cleanup function or an object with `destroy()` |
| `assertActive(operation)` | Throws when called after destroy |
| `emit(event, ...args)`    | Emits a component event |

## Returned Instance

The returned instance contains public control methods and the `actions` you defined:

| Public method          | Description |
| ---------------------- | ----------- |
| `build()`              | Creates the view without inserting it into the document. Can be called repeatedly |
| `mount(container)`     | Automatically builds and inserts the root node into the container |
| `unmount()`            | Removes the root node from the document while keeping state and owner |
| `setState(patch)`      | Merges state updates |
| `setState(key, value)` | Updates one state field |
| `own(cleanup)`         | Registers cleanup to run on destroy |
| `use(plugin, options)` | Installs a plugin |
| `on(event, listener)`  | Listens to a component event |
| `off(event, listener)` | Removes a component event listener |
| `emit(event, ...args)` | Emits a component event |
| `destroy()`            | Releases resources, view, and events. The instance cannot be used after destroy |

`element` is a readonly getter. It is `null` before the component is built, and points to the stable root node after build.

## Lifecycle Flow

```text
create -> build -> mount -> unmount -> mount -> destroy
```

Common rules:

- `build()` creates the root view only once.
- `mount()` can automatically build when the component is not built yet.
- `unmount()` only removes the node and does not destroy reactive bindings.
- `destroy()` releases the reactive owner, resources, plugins, events, and root node.
- After `destroy()`, calling `build()`, `mount()`, or `setState()` throws.

## State Updates

`setState()` only accepts a plain object patch or a single key/value:

```js
counter.setState({ count: 10 });
counter.setState('count', 11);
```

If `validateStatePatch` is not provided, `defineComponent()` checks whether keys in the patch exist in the initial `state`. This prevents accidentally writing unknown fields.

Use `normalizeStatePatch` when external input needs conversion:

```js
const menu = defineComponent({
  name: 'Menu',
  props,
  state,
  normalizeStatePatch(patch) {
    const next = { ...patch };
    if (Object.hasOwn(next, 'data')) {
      next.data = cloneMenuData(next.data);
    }
    return next;
  },
  view: () => jsx('nav', { children: 'Menu' }),
});
```

Use `validateStatePatch` for strict validation:

```js
const panel = defineComponent({
  name: 'Panel',
  props: {},
  state: createDeepStore({ open: false }),
  validateStatePatch(patch) {
    if (Object.hasOwn(patch, 'open') && typeof patch.open !== 'boolean') {
      throw new Error('Panel.setState: open must be boolean.');
    }
  },
  view: ({ state }) =>
    jsx('section', {
      'data-open': () => (state.open ? 'true' : 'false'),
    }),
});
```

## Resource Cleanup

Events, timers, Observers, and extra DOM nodes created inside a component should register cleanup through `own()`.

```js
const box = defineComponent({
  name: 'ResizeBox',
  props: {},
  state: createDeepStore({ width: 0 }),
  view: ({ state, own }) => {
    const element = jsx('div', {
      children: () => `Width: ${state.width}`,
    });

    const observer = new ResizeObserver(([entry]) => {
      state.width = entry.contentRect.width;
    });
    observer.observe(element);
    own(() => observer.disconnect());

    return element;
  },
});
```

When `box.destroy()` is called, the Observer is released together with the view.

## Events

Component events are useful for lifecycle states or completed business actions:

```js
const popup = defineComponent({
  name: 'Popup',
  props: {},
  state: createDeepStore({ visible: false }),
  actions: {
    show() {
      popup.setState('visible', true);
      popup.emit('show', popup);
      return popup;
    },
  },
  view: ({ state }) =>
    jsx('div', {
      hidden: () => !state.visible,
    }),
});

popup.on('show', (instance) => {
  console.log(instance.element);
});
```

Errors thrown by listeners do not interrupt the component's internal lifecycle.

## Plugins

A plugin can be a function or an object with `install()`. Cleanup returned by the plugin runs on `destroy()`.

```js
const logPlugin = (component) => {
  const onMount = () => console.log(`${component.props.id} mounted`);
  component.on('mount', onMount);
  return () => component.off('mount', onMount);
};

counter.use(logPlugin);
```

You can also register a global plugin with `useComponentPlugin(name, plugin)`. Newly created components install it automatically.

## ownsElement

By default, the root node is removed when a component is destroyed.

If a component binds to an existing node passed from outside, set `ownsElement: false`:

```js
const host = document.querySelector('#existing-panel');

const panel = defineComponent({
  name: 'ExternalPanel',
  ownsElement: false,
  props: {},
  state: createDeepStore({ active: false }),
  view: ({ state }) => {
    host.dataset.active = state.active ? 'true' : 'false';
    return host;
  },
});
```

In this case, `destroy()` releases bindings and resources added by the component, but does not remove the node owned by the business side.

## Usage Advice

- Update state in actions. Do not directly rewrite large DOM regions.
- Build bindings in view. Do not repeatedly rebuild the root node in effects.
- Keep private refs, caches, and timers in closures, not in state.
- Expose a small set of stable methods with clear business meaning.
- Before writing async action results back to state, check whether the component is destroyed, or use a token to prevent old results from overwriting new results.
- All `RenderableContent` `content` values support async functions and reactive bindings.
