# Container

The container is a component used to wrap and layout other elements.

## Page Container

Use the utility class `.container` to create a basic page container.

```css
.container {
  width: 100%;
  max-width: var(--screen-xl);
  margin-inline: auto;
  padding-inline: 1rem;
}
```

Use the utility class `.block-center` to create a centered block-level element.

```css
.block-center {
  margin-inline: auto;
}
```

Use the utility class `.auto-container` to create a container that automatically overflows horizontally with scrolling.

```css
.auto-container {
  max-width: 100%;
  overflow: auto;
  overflow-y: hidden;
  padding: 1px;
}
```

## Safe Area

For `iPhones` and newer models with notches and rounded corners, use the utility class `.ios-safe-{direction}` to adapt to the safe area.

| Class Name       | Description                  | Property Values                                                                       |
| ---------------- | ---------------------------- | ------------------------------------------------------------------------------------- |
| .ios-safe-x      | horizontal safe area padding | padding-left: env(safe-area-inset-left);<br>padding-right: env(safe-area-inset-right) |
| .ios-safe-y      | vertical safe area padding   | padding-top: env(safe-area-inset-top);<br>padding-bottom: env(safe-area-inset-bottom) |
| .ios-safe-top    | top safe area padding        | padding-top: env(safe-area-inset-top)                                                 |
| .ios-safe-right  | right safe area padding      | padding-right: env(safe-area-inset-right)                                             |
| .ios-safe-bottom | bottom safe area padding     | padding-bottom: env(safe-area-inset-bottom)                                           |
| .ios-safe-left   | left safe area padding       | padding-left: env(safe-area-inset-left)                                               |

## Aspect Ratio

Use the utility class `.aspect-{ratio}` to set the aspect ratio.

| Class Name     | Description | Property Value       |
| -------------- | ----------- | -------------------- |
| .aspect-square | 1:1         | aspect-ratio: 1 / 1  |
| .aspect-video  | 16:9        | aspect-ratio: 16 / 9 |
| .aspect-auto   | Auto        | aspect-ratio: auto   |

## Column Width

Use the utility class `.columns-{width}` to set the column width.

| Class Name    | Description       | Property Value                  |
| ------------- | ----------------- | ------------------------------- |
| .columns-auto | Auto column width | width: auto                     |
| .columns-3xs  | 3xs column width  | width: var(--columns-3xs,16rem) |
| .columns-2xs  | 2xs column width  | width: var(--columns-2xs,18rem) |
| .columns-xs   | xs column width   | width: var(--columns-xs,20rem)  |
| .columns-sm   | sm column width   | width: var(--columns-sm,24rem)  |
| .columns-md   | md column width   | width: var(--columns-md,28rem)  |
| .columns-lg   | lg column width   | width: var(--columns-lg,32rem)  |
| .columns-xl   | xl column width   | width: var(--columns-xl,36rem)  |
| .columns-2xl  | 2xl column width  | width: var(--columns-2xl,42rem) |
| .columns-3xl  | 3xl column width  | width: var(--columns-3xl,48rem) |
| .columns-4xl  | 4xl column width  | width: var(--columns-4xl,56rem) |
| .columns-5xl  | 5xl column width  | width: var(--columns-5xl,64rem) |
| .columns-6xl  | 6xl column width  | width: var(--columns-6xl,72rem) |
| .columns-7xl  | 7xl column width  | width: var(--columns-7xl,80rem) |
