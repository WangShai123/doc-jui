# View Layer

The JUI view layer connects reactive state to the DOM. Its key requirement is: keep the root node stable, and update local content when state changes.

`createOwnedView()` is the base tool for this requirement. It creates a view inside an independent `vanilla-signal` owner and releases that owner on disposal.

## Import

```js
import { createOwnedView, defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## Stable Root Node

A stable root node means that after a component is built, the root element object is not replaced by normal state changes.

```js
const state = createDeepStore({ count: 0 });

const view = createOwnedView(() =>
  jsx('button', {
    type: 'button',
    children: () => `Count: ${state.count}`,
  })
);

const first = view.element;
state.count += 1;

console.log(view.element === first); // true
```

The button text updates, but the button node itself stays the same. Events, focus, external references, and parent-container relationships remain more stable.

## Basic Usage

```js
const state = createDeepStore({
  value: 'ready',
});

const owned = createOwnedView(
  () =>
    jsx('output', {
      children: () => state.value,
    }),
  { removeOnDispose: true }
);

document.body.append(owned.element);

state.value = 'done';

owned.dispose();
```

Return value:

| Member      | Description                                      |
| ----------- | ------------------------------------------------ |
| `element`   | Root element returned by `factory`               |
| `dispose()` | Releases the owner and removes the root element according to options |

`removeOnDispose` defaults to `true`. When set to `false`, disposal only releases reactive bindings and does not remove the node.

## factory Runs Once

`createOwnedView(factory)` runs `factory` only once. Dynamic children, attribute bindings, and effects created inside `factory` still work.

```js
let builds = 0;
const state = createDeepStore({ active: false });

const owned = createOwnedView(() => {
  builds += 1;
  return jsx('section', {
    'data-active': () => (state.active ? 'true' : 'false'),
  });
});

state.active = true;

console.log(builds); // 1
```

This is different from rerunning `view` and replacing nodes on every state change. JUI components need one creation, local bindings, and one cleanup boundary.

## In defineComponent

`defineComponent()` uses `createOwnedView()` internally. Normal components do not need to call it directly. Just return the root node from `view()`.

```js
const badge = defineComponent({
  name: 'Badge',
  props: {},
  state: createDeepStore({ text: 'New' }),
  view: ({ state }) =>
    jsx('span', {
      className: 'j-badge',
      children: () => state.text,
    }),
});

badge.build();
document.body.append(badge.element);
```

When `badge.destroy()` runs, the internal owner is released and the root node is removed according to component ownership rules.

## Independent Child Views

Some nodes are not component roots but still need their own lifecycle. Use `createOwnedView()` directly for them.

For example, a floating-layer component may have a main root node and an extra overlay node:

```js
const state = createDeepStore({ visible: false });

const overlay = createOwnedView(() =>
  jsx('div', {
    className: 'overlay',
    'data-visible': () => (state.visible ? 'true' : 'false'),
  })
);

document.body.append(overlay.element);

// When the component is destroyed
overlay.dispose();
```

This keeps the overlay's reactive bindings in one place and avoids forgotten cleanup.

## External Nodes

If a view binds to an existing node passed in by the business side, it usually should not remove that node when disposed.

```js
const host = document.querySelector('#host');
const state = createDeepStore({ selected: false });

const owned = createOwnedView(
  () => {
    host.dataset.selected = state.selected ? 'true' : 'false';
    return host;
  },
  { removeOnDispose: false }
);

owned.dispose(); // Releases bindings, does not remove #host
```

The matching component option is `defineComponent({ ownsElement: false, ... })`.

## List Views

Lists should use stable business keys. This lets unchanged items keep their original nodes during insertion, deletion, and sorting.

```js
import { For, createDeepStore, jsx } from 'vanilla-signal';

const state = createDeepStore({
  items: [
    { id: 'a', title: 'Alpha' },
    { id: 'b', title: 'Beta' },
  ],
});

const owned = createOwnedView(() =>
  jsx('ul', {
    children: For({
      each: () => state.items,
      key: (item) => item.id,
      children: (item) =>
        jsx('li', {
          children: () => item().title,
        }),
    }),
  })
);
```

Do not sync a list by doing `container.textContent = ''` and rebuilding all child nodes. That loses internal item state and makes updates larger than needed.

## Dynamic Content

Use functions for dynamic text and attributes:

```js
jsx('button', {
  disabled: () => state.loading,
  'aria-busy': () => (state.loading ? 'true' : 'false'),
  children: () => (state.loading ? 'Loading' : 'Submit'),
});
```

Dynamic structure can return a node, array, or `null`:

```js
jsx('div', {
  children: () =>
    state.error ? jsx('p', { role: 'alert', children: state.error }) : null,
});
```

If content comes from an array, prefer `For`. Do not put a mutable array directly into a static children array.

## Cleanup Boundary

`dispose()` releases reactive bindings under the current owner and cleanup registered with `onCleanup()`.

```js
import { createEffect, onCleanup } from 'vanilla-signal';

const owned = createOwnedView(() => {
  const element = jsx('div', { children: 'Box' });

  createEffect(() => {
    const controller = new AbortController();
    element.addEventListener('click', handleClick, {
      signal: controller.signal,
    });
    onCleanup(() => controller.abort());
  });

  return element;
});
```

After the view is disposed, the event listener is released too.

## Usage Advice

- `factory` only describes the initial structure and bindings.
- State changes should update local content through accessors.
- Do not store large amounts of DOM state outside `factory` when it can be derived from state.
- Use refs when DOM references are needed, but do not infer business state from DOM.
- Use an independent `OwnedView` for extra nodes with their own lifecycle.
