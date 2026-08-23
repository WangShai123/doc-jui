# Scheduler

When handling microtask scheduling, `createScheduledTask()` merges multiple requests in the same turn into one execution. It is suitable for expensive side effects that do not need to run repeatedly right away, such as layout measurement, scroll-position sync, and centralized refresh for legacy components.

Normal reactive view updates do not need it. `vanilla-signal` already updates local bindings based on dependencies.

## Import

```js
import { createScheduledTask, defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## Basic Usage

```js
const refresh = createScheduledTask(() => {
  measureLayout();
});

refresh.schedule();
refresh.schedule();
refresh.schedule();

// After this synchronous turn ends, measureLayout runs only once.
```

Multiple `schedule()` calls are merged. Before the queue is flushed, the same task is not queued again.

## Returned Methods

| Method       | Description                                      |
| ------------ | ------------------------------------------------ |
| `schedule()` | Runs in the next microtask; ignored when already queued or disposed |
| `flush()`    | Runs once immediately and clears the queued state |
| `cancel()`   | Cancels this turn's queue; `schedule()` can be called again later |
| `dispose()`  | Permanently disables the task                    |

```js
const task = createScheduledTask(() => {
  console.log('run');
});

task.schedule();
task.cancel(); // Does not run this turn

task.schedule();
task.flush(); // Prints run immediately

task.dispose();
task.schedule(); // Disposed, no longer runs
```

## Good Use Cases

### Merge Layout Measurement

Some components may request measurement from multiple entry points after one state update. Measurement itself may trigger layout calculation, so it should be merged.

```js
const state = createDeepStore({
  width: 0,
  left: 0,
});

const refresh = createScheduledTask(() => {
  const rect = element.getBoundingClientRect();
  state.width = rect.width;
  state.left = rect.left;
});

window.addEventListener('resize', () => refresh.schedule());
observer.observe(element);
```

Even when resize and observer fire in the same turn, measurement only runs once.

### Merge Sync After Data Changes

Components such as Tabs and Swiper may need to sync indicators, drag bounds, or scroll positions after data changes. That sync should wait until this turn's data changes are complete.

```js
const syncAfterData = createScheduledTask(() => {
  updateActiveOffset();
  updateDragBounds();
});

function appendItem(item) {
  state.data.push(item);
  syncAfterData.schedule();
}

function removeItem(index) {
  state.data.splice(index, 1);
  syncAfterData.schedule();
}
```

This prevents repeated measurement across continuous `push()` / `splice()` calls.

### Stop Tasks on Destroy

Queued tasks should not run after a component is destroyed.

```js
const component = defineComponent({
  name: 'MeasuredBox',
  props: {},
  state,
  view: () => jsx('div', { ref: setElement }),
  onBuild({ own }) {
    const refresh = createScheduledTask(measure);
    own(() => refresh.dispose());
  },
});
```

## Poor Use Cases

Do not use the scheduler for:

- Normal text, attribute, or class updates.
- Continuous animation on every frame.
- Read/write layout work that needs `requestAnimationFrame` phases.
- Hiding a full DOM rebuild problem.
- Delaying business state in a way that makes execution order hard to reason about.

If you only want text to update after `state.title` changes, use a reactive binding directly:

```js
jsx('h2', {
  children: () => state.title,
});
```

Do not do this:

```js
const updateTitle = createScheduledTask(() => {
  heading.textContent = state.title;
});
```

## Difference from batch

`batch()` merges multiple reactive writes into one commit. `createScheduledTask()` delays one side effect.

```js
import { batch } from 'vanilla-signal';

batch(() => {
  state.loading = false;
  state.value = nextValue;
});

refresh.schedule();
```

The first solves "apply multiple state writes together"; the second solves "run an expensive side effect only once."

## Timing

Tasks run in a microtask, usually after the current synchronous call stack ends and before the browser's next paint.

```text
synchronous code
  -> schedule()
  -> current call stack ends
  -> flush queued tasks
  -> browser continues later work
```

Use `requestAnimationFrame` if you need to wait for a browser paint. Use the animation controller or Web Animations API if you need to play an animation.

## Usage Advice

- One task should do one kind of side effect, such as measuring or syncing position.
- Do not unconditionally deep-traverse the whole component inside a task.
- Call `dispose()` when destroying the component.
- Use `flush()` when you need the result immediately. Do not manually call the original function and cause it to run twice.
- The task function should still check whether the element exists and whether the component has been destroyed.
