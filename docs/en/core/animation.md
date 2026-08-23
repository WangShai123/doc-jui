# Animation Controller

The JUI animation controller is responsible for two things:

1. Describing how an animation plays.
2. Coordinating when animated nodes mount and unmount.

These often appear together. For example, Modal needs to be inserted into the document before its enter animation plays. When closing, it should play the leave animation first and then be removed from the document. An Accordion panel stays in the document and only needs expand/collapse animation, so it does not need unmounting.

## Import

```js
import {
  createCollapseTransition,
  createMotionGroup,
  createPresence,
  createTransition,
  waitForMotion,
} from 'vanilla-jui';
```

## Tool Responsibilities

| Tool                         | Good for |
| ---------------------------- | -------- |
| `createTransition()`         | Normal enter and leave animations |
| `createMotionGroup()`        | Playing multiple node animations together |
| `createCollapseTransition()` | Expanding and collapsing stable mounted nodes |
| `createPresence()`           | Mount before enter, leave before unmount |
| `waitForMotion()`            | Waiting for existing CSS animation or transition to finish |

Think of them as different tools in the same animation-controller layer: `createTransition()` handles the playback process, and `createPresence()` handles how long the node stays in the document.

## createTransition

`createTransition(target, definition)` creates an enter/leave animation with the Web Animations API.

```js
const motion = createTransition(() => panel, {
  keyframes: [
    { opacity: 0, transform: 'translateY(12px)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: {
    duration: 200,
    easing: 'ease-out',
  },
});

await motion.enter();
await motion.leave();
```

`target` is a function, not the element itself. This lets you create the controller before the element exists and read the real node only when playing.

### definition

| Field                  | Description |
| ---------------------- | ----------- |
| `keyframes`            | Keyframes from the hidden side to the visible side |
| `options`              | Web Animations options, such as `duration` and `easing` |
| `respectReducedMotion` | Whether to respect the system "reduce motion" setting. Defaults to `true` |

`enter()` plays keyframes forward. `leave()` plays array keyframes in reverse.

### Returned Methods

| Method           | Description |
| ---------------- | ----------- |
| `enter(signal?)` | Plays enter animation and returns a Promise |
| `leave(signal?)` | Plays leave animation and returns a Promise |
| `cancel()`       | Cancels the current animation and releases the internal animation reference |

If `element.animate()` is unavailable, `enter()` and `leave()` complete directly without throwing.

## createMotionGroup

`createMotionGroup(...motions)` combines multiple animation controllers into one.

```js
const backdropMotion = createTransition(() => backdrop, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 200 },
});

const dialogMotion = createTransition(() => dialog, {
  keyframes: [
    { opacity: 0, transform: 'scale(0.96)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  options: { duration: 200, easing: 'ease-out' },
});

const motion = createMotionGroup(backdropMotion, dialogMotion);
```

`enter()` / `leave()` play all animations in parallel and wait for all to finish. Components such as Modal and Offcanvas, which animate an overlay plus a panel, fit this pattern.

## createCollapseTransition

`createCollapseTransition(target, definition?)` is used for expanding and collapsing stable mounted nodes, such as Accordion panels.

```js
const panelMotion = createCollapseTransition(() => panel, {
  axis: 'vertical',
  options: {
    duration: 250,
    easing: 'ease',
  },
});

panelMotion.setExpanded(false); // Initially closed, without animation

await panelMotion.enter(); // Expand
await panelMotion.leave(); // Collapse
```

It reads the current size and the expanded size, then restores the original inline style after animation finishes so later content changes can still be calculated by normal layout.

### definition

| Field                  | Default                             | Description |
| ---------------------- | ----------------------------------- | ----------- |
| `axis`                 | `'vertical'`                        | `vertical` controls height, `horizontal` controls width |
| `fade`                 | `true`                              | Whether to control opacity at the same time |
| `options`              | `{ duration: 250, easing: 'ease' }` | Web Animations options |
| `respectReducedMotion` | `true`                              | Whether to respect the system "reduce motion" setting |

### Extra Method

The controller returned by `createCollapseTransition()` has one more method than a normal animation controller:

| Method                   | Description |
| ------------------------ | ----------- |
| `setExpanded(expanded)`  | Immediately sets the expanded/collapsed boundary without animation |

This method is useful for initialization. For example, when Accordion first renders, inactive panels should be in the collapsed boundary but should not play a collapse animation.

## createPresence

`createPresence(options)` coordinates "mount before enter, leave before unmount."

```js
const motion = createTransition(() => panel, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 200 },
});

const presence = createPresence({
  elements: () => [panel],
  mount: () => document.body.append(panel),
  activate: () => {
    state.visible = true;
  },
  deactivate: () => {
    state.visible = false;
  },
  unmount: () => panel.remove(),
  motion,
});

await presence.enter();
await presence.leave();
```

Good use cases for `createPresence()`:

- Modal.
- Offcanvas.
- Toast.
- Temporary floating layers.

Poor use cases:

- Accordion panels that stay mounted.
- Normal list items.
- Stateful components that only need text, attribute, or class updates.

## createPresence Order

Enter:

```text
enter:
  mount
  -> commit initial style
  -> activate
  -> await motion
  -> phase = visible
```

Leave:

```text
leave:
  deactivate
  -> await motion
  -> unmount
  -> phase = hidden
```

After mounting, the controller reads the size of connected elements once so the browser commits the initial style first. Otherwise the browser may only see the final state and the enter animation may not play.

`activate` and `deactivate` commit synchronously through `flushSync`, so direct state writes are enough:

```js
activate: () => {
  state.visible = true;
},
deactivate: () => {
  state.visible = false;
},
```

Do not add timeout, RAF, or manual `flushSync` inside these functions.

## createPresence Options

| Option         | Description |
| -------------- | ----------- |
| `elements()`   | Returns root nodes that should be waited on for animation |
| `mount()`      | Places nodes into the document |
| `activate()`   | Synchronously writes visible state |
| `deactivate()` | Synchronously writes hidden state |
| `unmount()`    | Removes nodes after leave finishes |
| `motion`       | Optional animation controller. When provided, CSS animation detection is not used |

`elements()` should return only the root nodes that need waiting. Do not scan the whole subtree. This prevents infinite animations such as loading icons from blocking unmount.

## createPresence Returned Controller

| Member     | Description |
| ---------- | ----------- |
| `phase`    | Current phase: `hidden`, `entering`, `visible`, `leaving` |
| `enter()`  | Runs an effective enter and returns `true` after completion |
| `leave()`  | Runs an effective leave and returns `true` after completion |
| `cancel()` | Cancels the current wait, cancels animations, and sets phase to `hidden` |

If already visible, calling `enter()` returns `false`. If already hidden, calling `leave()` returns `false`.

When the same direction is already running, the same Promise is returned. The opposite direction invalidates the old operation.

## Fast Reverse Operations

A user may close while the enter animation is still running, or reopen while the leave animation is still running. `createPresence()` invalidates old operations so old flows do not affect new state.

```js
const open = presence.enter();
const close = presence.leave();
const reopen = presence.enter();

await Promise.all([open, close, reopen]);
```

Old operations may finish naturally, but they will not commit stale results:

- An old enter will not incorrectly set phase to `visible`.
- An old leave will not remove a node that has reopened.
- Old callbacks should not run business completion logic.

Components can use the return value to decide whether to run later callbacks:

```js
const completed = await presence.leave();
if (completed && !modal.runtime.destroyed) {
  props.onHidden?.(modal);
}
```

## Combined Example

Offcanvas-like components usually have a panel and an overlay. The panel slides in, the overlay fades in, and both animations belong to one show/hide flow.

```js
const panelMotion = createTransition(() => drawer.element, {
  keyframes: [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(0)' },
  ],
  options: { duration: 300, easing: 'ease' },
});

const overlayMotion = createTransition(() => overlay, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 300, easing: 'ease' },
});

const presence = createPresence({
  elements: () => [overlay, drawer.element],
  mount: () => {
    document.body.append(overlay);
    drawer.mount(document.body);
  },
  activate: () => {
    state.visible = true;
  },
  deactivate: () => {
    state.visible = false;
  },
  unmount: () => {
    overlay.remove();
    drawer.unmount();
  },
  motion: createMotionGroup(panelMotion, overlayMotion),
});
```

`mount()` can do multiple things, such as inserting the overlay, mounting the panel, and locking scroll. The matching `unmount()` should restore those operations.

## CSS Animation Fallback

When `motion` is not provided, `createPresence()` calls `waitForMotion(elements, signal?)`.

Wait order:

1. If the element supports `getAnimations()`, wait for the `finished` Promise of current finite animations.
2. If not, calculate transition/animation duration and delay from computed style.
3. If there is no finite animation, finish immediately.

```js
await waitForMotion([panel, backdrop], abortController.signal);
```

The CSS fallback is suitable when callers define transitions themselves or need compatibility with existing components. New behavior animations inside JUI should prefer animation controllers such as `createTransition()`.

## Relationship with CSS

CSS is still responsible for static appearance:

- Color, border, shadow, spacing.
- Theme variables.
- Local visual feedback such as hover and focus.
- Simple transitions that do not affect lifecycle.

The animation controller is responsible for behavior animations:

- Modal enter and leave.
- Offcanvas slide in and out.
- Accordion expand and collapse.
- Animations that JavaScript needs to wait for.

Do not control the same property in both places. For example, if the animation controller already controls `transform`, CSS should not add a `transition: transform ...` for the same purpose on the same node.

## Responsibility on Destroy

`presence.cancel()` only cancels waits and animations and sets `phase` to `hidden`. It does not call `unmount()`.

The component is still responsible for final cleanup on destroy:

```js
component.own(() => {
  presence.cancel();
  panel.remove();
  overlay.remove();
});
```

This ensures no DOM remains and no old callback continues, regardless of the animation phase.

## Usage Advice

- Keyframes describe "hidden side -> visible side"; `leave()` handles reverse playback.
- Use a getter as `target` so you do not read a missing element before it is created.
- Call `cancel()` when destroying the component.
- Use `createPresence()` when DOM should be removed after leave.
- Use `createCollapseTransition()` for expanding and collapsing stable nodes.
- Drag, scroll, and continuous motion are not good fits for `enter()` / `leave()`.
