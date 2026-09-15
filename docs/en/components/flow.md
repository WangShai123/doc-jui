---
client:
  entry:
    - flow
---

# Flow

Flow is a process state controller. It provides step switching, data caching, async hooks, error rollback, busy re-entry prevention, and more. It is mainly used headlessly, and it also provides a default basic UI for common lightweight process scenarios.

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::tabs
@tab Example
<div class="demo"></div>
@tab Code

```ts
const baseSteps = () => [
  {
    id: 'account',
    title: 'Account Info',
    content: () =>
      jsx('p', {
        children: [
          'Fill in the basic account information. The current step content is only rendered in ',
          jsx('code', { children: 'flow-body' }),
          '.',
        ],
      }),
    data: { email: 'demo@example.com' },
  },
  {
    id: 'profile',
    title: 'Complete Profile',
    content: ({ data }) => {
      const email = typeof data.email === 'string' ? data.email : 'Not filled';
      return jsx('p', {
        children: ['Global cached email: ', jsx('strong', { children: email })],
      });
    },
  },
  {
    id: 'confirm',
    title: 'Confirm Submit',
    content: () =>
      jsx('p', { children: 'The last step shows the Next button as Finish.' }),
  },
];
createFlow({
  id: 'flow-default-demo',
  steps: baseSteps(),
  showReset: true,
}).mount(q('.demo'));
```

:::

For more complex examples, see [More Examples](#more-examples) below.

## Import

```ts
import { createFlow } from 'vanilla-jui';
```

## Basic Usage

```ts
const flow = createFlow({
  steps: [
    { id: 'account', title: 'Account', content: 'Account content' },
    { id: 'profile', title: 'Profile', content: 'Profile content' },
    { id: 'confirm', title: 'Confirm', content: 'Confirm content' },
  ],
});
flow.mount(q('.demo'));
```

## Design Model

Flow splits a complex process into four layers:

| Layer      | Purpose                                                    |
| ---------- | ---------------------------------------------------------- |
| `steps`    | Static step definitions, including `id/title/content/data/modal` and hooks |
| `state`    | Reactive runtime state, including current step, history, data, loading, and error |
| `snapshot` | Immutable snapshot for external use, suitable for rendering, logs, and hook checks |
| `element`  | Root node of the default UI. It is `null` when `render: false` or before build |

The internal organization follows the project's reactive rules: `state` stores the facts of the process; the current step, current step data, button states, and snapshot base structure are derived by memo; the default UI and slot context consume the derived results. Each step's content is one business UI block. Flow does not split step content into list items for rendering; local list reuse should be handled by business code inside its own content.

`next(payload)`, `back(payload)`, and `goTo(target, payload)` write payload into "the current step being left". When `cache: true`, payload is also merged into global `data`, which is suitable for final unified submission in multi-step forms.

## Parameters

`createFlow(props)`

| Parameter         | Type                        | Default    | Description                                      |
| ----------------- | --------------------------- | ---------- | ------------------------------------------------ |
| `id`              | `string \| null`            | Auto-generated | Default UI root node id                      |
| `steps`           | `FlowStep[]`                | `[]`       | Step list. It cannot be empty                    |
| `initial`         | `string \| number \| null`  | `null`     | Initial step id or index                         |
| `cache`           | `boolean`                   | `true`     | Whether to merge step payload into global `data` |
| `linear`          | `boolean`                   | `true`     | Whether the default step bar prevents jumping to future steps |
| `render`          | `boolean`                   | `true`     | Whether to enable the default UI                 |
| `rollbackOnError` | `boolean`                   | `true`     | Whether to roll back state when transition fails |
| `busyStrategy`    | `'ignore' \| 'throw'`       | `'ignore'` | How repeated actions are handled during loading  |
| `showBack`        | `boolean`                   | `true`     | Whether the default footer shows the back button |
| `showNext`        | `boolean`                   | `true`     | Whether the default footer shows the next/finish button |
| `showReset`       | `boolean`                   | `false`    | Whether the default footer shows the reset button |
| `text`            | `object`                    | `{}`       | Text configuration for `back/next/finish/reset` |
| `className`       | `object \| string`          | See table below | Custom style classes                         |
| `renderHeader`    | `Function \| false \| null` | `null`     | Custom header content                            |
| `renderBody`      | `Function \| false \| null` | `null`     | Custom body content                              |
| `renderFooter`    | `Function \| false \| null` | `null`     | Custom footer content                            |
| `onChange`        | `Function \| null`          | `null`     | Triggered after state changes                    |
| `onNext`          | `Function \| null`          | `null`     | Global next hook                                 |
| `onBack`          | `Function \| null`          | `null`     | Global back hook                                 |
| `onFinish`        | `Function \| null`          | `null`     | Triggered on finish                              |
| `onError`         | `Function \| null`          | `null`     | Triggered when a hook or guard errors            |
| `onBusy`          | `Function \| null`          | `null`     | Triggered when a repeated action is blocked      |

### busyStrategy

| Value    | Behavior                                 |
| -------- | ---------------------------------------- |
| `ignore` | Default value. Directly returns the current snapshot |
| `throw`  | Throws an error whose `code` is `FLOW_BUSY` |

### className

| Field        | Default                |
| ------------ | ---------------------- |
| `root`       | `j-flow`               |
| `header`     | `flow-header`          |
| `steps`      | `flow-steps`           |
| `step`       | `flow-step`            |
| `active`     | `is-active`            |
| `complete`   | `is-complete`          |
| `stepButton` | `flow-step-button`     |
| `stepIndex`  | `flow-step-index`      |
| `stepTitle`  | `flow-step-title`      |
| `body`       | `flow-body`            |
| `footer`     | `flow-footer`          |
| `button`     | `j-button`             |
| `reset`      | `is-ghost flow-reset`  |
| `back`       | `is-ghost flow-back`   |
| `next`       | `is-primary flow-next` |

## Instance Properties

| Property      | Description                                      |
| ------------- | ------------------------------------------------ |
| `props`       | Normalized initialization configuration          |
| `steps`       | Cloned step list                                 |
| `state`       | Reactive state object                            |
| `runtime`     | Runtime flags, including `built/destroyed` and others |
| `element`     | Default UI root node. It is `null` when `render: false` |
| `currentStep` | Current step configuration                       |
| `currentData` | Current step cached data                         |
| `canBack`     | Whether the current step can go back             |
| `canNext`     | Whether the current step can go forward          |
| `isLast`      | Whether the current step is the last step        |

## Instance Methods

| Method                                | Description                                      |
| ------------------------------------- | ------------------------------------------------ |
| `build()`                             | Build the instance. In default UI mode, this creates `flow.element` |
| `mount(container)`                    | Build and mount the default UI. Headless mode does not create DOM |
| `unmount()`                           | Remove the default UI root node and keep process state |
| `next(payload?)`                      | Move forward one step. The last step calls `finish()` |
| `back(payload?)`                      | Go back one step                                 |
| `goTo(target, payload?, options?)`    | Jump to a specified step id or index. `options.direction` can specify direction |
| `setData(data)`                       | Merge global data                                |
| `setStepData(stepId, data, options?)` | Merge cached data for a specified step. Throws if the step does not exist. When `silent` is true, change notifications are not triggered |
| `getStepData(stepId)`                 | Get a copy of cached data for a specified step   |
| `snapshot()`                          | Get the current immutable snapshot               |
| `subscribe(handler)`                  | Subscribe to snapshot changes and return an unsubscribe function |
| `reset()`                             | Reset to the initial step and initial data, and cancel the current action |
| `finish(payload?)`                    | Finish the process and trigger `onFinish`        |
| `destroy()`                           | Destroy the instance, remove the default UI, cancel actions, and run cleanup |

Common controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html) for their meaning.

### Snapshot

`snapshot()` returns the current immutable snapshot. It includes all state and data, and is suitable for rendering, logs, hook checks, and more.

| Field           | Description                              |
| --------------- | ---------------------------------------- |
| `id`            | Flow id                                  |
| `currentId`     | Current step id                          |
| `currentIndex`  | Current step index                       |
| `previousId`    | Previous step id                         |
| `previousIndex` | Previous step index                      |
| `direction`     | Direction of the latest switch           |
| `history`       | Visit history                            |
| `data`          | Copy of global data                      |
| `stepData`      | Copy of all step data                    |
| `currentData`   | Copy of current step data                |
| `currentStep`   | Public configuration of the current step, excluding hooks |
| `canBack`       | Whether it can go back                   |
| `canNext`       | Whether it can go forward                |
| `isLast`        | Whether it is the last step              |
| `loading`       | Whether an action is running             |
| `busyAction`    | Current running action                   |
| `error`         | Latest error                             |

## More Examples

### Nonlinear Flow

<div class="linear-demo"></div>

### Custom Header and Footer

<div class="custom-demo"></div>

### Async Hook

<div class="async-demo"></div>

### Headless

<div class="headless-demo"></div>

