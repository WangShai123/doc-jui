# Component Design Standard

The goal of a JUI component is simple: users give data, state, and behavior to the component, and the component is responsible for presenting them in the DOM in a stable way.

This document explains the design expectations, organization, performance requirements, and testing requirements for writing a JUI component. It does not require every component to look the same, but it does require clear boundaries, controlled updates, and clean destruction.

## Design Goals

JUI is based on the fine-grained reactivity of `vanilla-signal`, so component updates should be driven by state as much as possible. They should not rely on manually finding DOM nodes, clearing DOM, and recreating DOM.

Component design should follow these priorities:

1. `state` is the main source for component behavior.
2. `view` derives the UI from `state` and does not keep another copy of DOM state.
3. The root node stays stable after one `build()`. Normal state updates do not replace the root node.
4. List items use stable keys. Items that are not deleted should keep their original DOM nodes.
5. Browser capabilities such as measurement, scroll, focus, and animation are kept in clear methods or tools.
6. Reactive bindings, events, timers, and plugins can all be cleaned up through one cleanup path.
7. Add shared utilities only when they truly reduce duplication and complexity.

## One-Way Data Flow

A state-driven component usually runs in this direction:

```text
user event / component method
  -> action
  -> state
  -> memo / selector
  -> view
  -> DOM
```

For example, when a button is clicked, do not decide whether the panel is expanded by reading a DOM class. Call `toggle()`, let `toggle()` update `state.activeNames`, and let the view update button and panel state from `state.activeNames`.

Do not use the DOM as the source of business state:

```text
DOM dataset -> calculate current item
DOM children.length -> calculate data count
DOM class -> decide disabled state
clear root node -> rebuild whole component
```

These patterns make components hard to reason about during data updates, layout changes, animation, and destroy/rebuild cycles. Put business values in `state`, then derive results such as `active`, `disabled`, `count`, and `visible` from `state`.

## Component Layers

A component usually contains these parts:

| Part      | Responsibility |
| --------- | -------------- |
| `props`   | Creation options, such as className, callbacks, default behavior, and slot content |
| `state`   | Runtime data that changes and needs to drive the UI |
| `memo`    | Results derived from state, such as visible list, current item, and disabled state |
| `refs`    | Required DOM references for measurement, focus, scroll, and animation |
| `actions` | Public methods such as `show()`, `hide()`, and `activate()` |
| `view`    | Creates a stable root node and establishes reactive bindings |
| `effects` | Side effects related to browser capabilities, such as ResizeObserver and event delegation |

These parts can live in the closure of the same factory function. Class inheritance is not required to share state. Keep private data in the closure and expose only the public methods the component truly needs.

## props and state

`props` means creation options. It is suitable for:

- `className`, `id`, and `style`.
- Text, slots, and callbacks.
- Behavior options that are not expected to change often after creation.

`state` means runtime state. It is suitable for:

- Component data, such as `data`, `items`, and `content`.
- Interaction state, such as `active`, `visible`, `disabled`, and `loading`.
- Layout state observed by the view, such as `dragging`, `width`, and `offset`.

Do not put these in `state`:

- DOM nodes.
- `setTimeout`, RAF IDs, `AbortController`, or Observer instances.
- Duplicate fields that can be calculated directly from other state.
- Temporary values used only inside one function call.

If a value can be calculated from existing state, prefer `createMemo()` or a normal function instead of writing another state field.

## View Standard

`view()` runs once during component `build()` and returns the component root node. Its job is to build the template and reactive bindings, not to recreate the whole DOM tree on every state change.

Rules for views:

- Use function bindings for dynamic text, attributes, class, and style.
- Use local dynamic children or `Show` for conditional content.
- Use keyed `For` for arrays, with keys from stable business fields.
- Render strings as text. Do not parse HTML strings as node structure.
- Event handlers call actions or public methods. They should not manually maintain large DOM blocks.
- Do not use `render(() => view(), host)` to create a component root node, because it makes the whole view replaceable.

Example:

```js
import { For, createDeepStore, createMemo, jsx } from 'vanilla-signal';

const state = createDeepStore({
  keyword: '',
  items: [
    { id: 1, title: 'Intro', enabled: true },
    { id: 2, title: 'API', enabled: false },
  ],
});

const visibleItems = createMemo(() =>
  state.items.filter((item) => item.title.includes(state.keyword))
);

const view = () =>
  jsx('section', {
    children: [
      jsx('input', {
        value: () => state.keyword,
        onInput: (event) => {
          state.keyword = event.currentTarget.value;
        },
      }),
      jsx('ul', {
        children: For({
          each: visibleItems,
          key: (item) => item.id,
          children: (item) =>
            jsx('li', {
              children: () => item().title,
            }),
        }),
      }),
    ],
  });
```

## DOM Operation Boundary

DOM updates that can be expressed declaratively should be handled by `vanilla-signal` bindings:

| Scenario                 | Recommended way |
| ------------------------ | --------------- |
| Element structure        | `jsx` |
| Text, attributes, class, style | accessor bindings |
| Conditional content      | dynamic children / `Show` |
| Lists                    | keyed `For` |
| Events                   | JSX events or event delegation on a stable root node |
| Mount and destroy        | `build()`, `mount()`, `unmount()`, `destroy()` |

When direct DOM operations are necessary, keep them in separate methods or effects and provide cleanup:

| Scenario         | Handling |
| ---------------- | -------- |
| Size and position measurement | Handle in layout effects, ResizeObserver, or scheduled tasks |
| Focus and scroll | Handle in explicit actions |
| pointer capture  | Handle at input event boundaries and release when finished |
| Enter and leave  | Use the animation controller |
| Portal nodes     | Record on creation and remove on destroy |

## Content Safety Boundary

Component content should follow `vanilla-signal` children semantics:

- `string`, `number`, and `boolean` are text.
- `Node`, `Element`, `DocumentFragment`, arrays, and function return values are structured content.
- HTML strings are not parsed automatically.

This avoids two problems:

1. Treating strings as HTML creates security risk.
2. Implicit parsing makes node identity and update scope unclear.

If rich text is needed later, design a separate API with a clear sanitization policy. Do not turn normal content parameters into HTML entry points.

## Lifecycle Standard

Components using `defineComponent()` should satisfy:

- `build()` creates the view but does not insert it into the document automatically.
- `mount(container)` automatically calls `build()` and inserts the root node into the container.
- `unmount()` removes the node but keeps component state and the reactive owner.
- `destroy()` releases owner, events, plugins, timers, and nodes.
- `build()`, `unmount()`, and `destroy()` can be called repeatedly with predictable results.
- After `destroy()`, the component cannot update state, mount, or rebuild.

For components such as Modal and Offcanvas whose mounting is managed by `show()` / `hide()`, callers usually call `build()` first and then control display through methods. They do not manually `mount()` into a business container.

## Animation Standard

Keep three things separate:

- State: whether the component is visible, expanded, or loading.
- Timeline: how it plays from hidden to visible or expanded to collapsed.
- Appearance: color, shadow, spacing, theme, hover/focus styles.

In JUI:

- `state` expresses state.
- `view` binds state to `data-*`, `aria-*`, class, or style.
- `createTransition()` controls how animation plays.
- `createPresence()` controls "mount before enter, leave before unmount".
- CSS controls static appearance and local visual changes.

Do not let Web Animations and CSS transition control the same CSS property at the same time. For example, if `opacity` is already controlled by `createTransition()`, do not also add a CSS `transition: opacity ...` on the same node for the same purpose.

## Scheduler Standard

Normal state updates do not need extra scheduling. `vanilla-signal` already handles dependency tracking, batching, and effect scheduling.

The shared scheduler is only for:

- Merging expensive measurements in the same turn.
- Merging multiple layout writes.
- Coordinating ResizeObserver, pointer move, scroll, and animation frame.
- Temporarily wrapping legacy structure-sync code that is still being migrated.

Do not use the scheduler to hide view design problems. If a deep data change rebuilds a whole DOM block, "delay it a little" is not the solution. Use keyed lists and local bindings instead.

## Performance Standard

Components should meet these goals:

- A single field change updates only the bindings that depend on it.
- Keyed list items keep DOM identity when not deleted.
- List updates do not repeatedly bind stable root-node events.
- High-frequency input performs layout writes at most once per frame.
- Layout reads and layout writes are separated to avoid alternating reads and writes.
- Do not unconditionally deep-copy, deep-traverse, or query the whole tree in view or effects.
- Async content uses a token or `AbortController` to avoid writing stale results back to state.
- For continuous input such as search terms, filter conditions, and window size, prefer deriving delayed values with `createDebounced()` before triggering requests or expensive calculations.
- For constantly changing input such as scroll position, drag position, and pointer movement, prefer deriving time-windowed values with `createThrottled()` so downstream work is not driven by every raw event.

Only introduce more complex list algorithms or task priorities when real interaction or benchmark data proves the need.

`createDebounced()` and `createThrottled()` both come from `vanilla-signal` and are suitable at reactive data entry points:

```js
import { createDebounced, createSignal, createThrottled } from 'vanilla-signal';

const [keyword, setKeyword] = createSignal('');
const debouncedKeyword = createDebounced(keyword, 300);

const [scrollTop, setScrollTop] = createSignal(0);
const throttledScrollTop = createThrottled(scrollTop, 100);
```

Usage advice:

- `createDebounced()` is for "wait until the user stops" cases, such as search, filtering, and autosave.
- `createThrottled()` is for "keep responding, but lower the frequency" cases, such as scroll, drag, and window size.
- They control reactive input frequency. Layout measurement merging and internal component refresh should still use the scheduler described above or `requestAnimationFrame`.
- Do not delay the component's real state just to reduce updates. Real state should be written immediately. Delayed values are for requests, calculations, or result display.

## Testing Standard

State-driven components should at least cover:

1. `build()` does not mount automatically, and `mount()` mounts correctly.
2. The root node identity stays the same after state updates.
3. Replacing arrays, mutating arrays, and mutating nested fields all update the view.
4. Keyed items keep node identity after unrelated updates.
5. Business state does not depend on DOM dataset, class, or node count.
6. The component can `mount()` again after `unmount()`.
7. After `destroy()`, effects, events, timers, and async results no longer take effect.
8. Components with measurement cover zero size, hidden state, reconnection, and rapid continuous interaction.
9. Components with enter/leave cover initial style commit, reverse operation, and unmount after leave.

Tests should not only check method return values. Components involving DOM, animation, focus, Portal, drag, and real layout also need visual verification in a browser.

## Review Checklist

Before submitting a component, check:

- Is it still replacing the whole root view?
- Does it clear a list container and rebuild all list items?
- Does it infer business state from DOM?
- Does each list have a stable business key?
- Are DOM nodes, timers, or controllers accidentally stored in state?
- Does an effect read state that should not become a dependency?
- Can the reactive owner be released on destroy?
- Do events, Observers, timers, and plugins all have cleanup?
- Is each animation controlled by one source, either the animation controller or CSS?
- Is any fixed timeout still guessing when animation ends?
