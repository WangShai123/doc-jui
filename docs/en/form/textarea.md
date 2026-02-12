# Textarea

## Basic Structure

```html
<textarea name="" id="" class="j-textarea" rows="" cols="" placeholder="Please enter..."></textarea>
```

## Examples

<textarea class="j-textarea resize-none" placeholder="Please enter..."></textarea>

## Attributes

Set `rows` and `cols` attributes to define default width and height dimensions.

```html
<textarea name="" id="" class="j-textarea" rows="5" cols="30"></textarea>
```

The `readonly` attribute defines the textarea read-only state.

```html
<textarea name="" id="" class="j-textarea" readonly></textarea>
```

The `disabled` attribute defines the textarea disabled state.

```html
<textarea name="" id="" class="j-textarea" disabled></textarea>
```

## Resize

Define the resize direction of textarea through `CSS` utility class `.resize-{value}`.

- `.resize-none`: Prohibit resizing
- `.resize`: Bidirectional resizing allowed
- `.resize-x`: Horizontal resizing allowed
- `.resize-y`: Vertical resizing allowed

```html
<textarea name="" id="" class="j-textarea resize"></textarea>
```
