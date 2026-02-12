# 文本域

## 基础结构

```html
<textarea name="" id="" class="j-textarea" rows="" cols="" placeholder="请输入..."></textarea>
```

## 应用示例

<textarea class="j-textarea resize-none" placeholder="请输入..."></textarea>

## 属性

设置 `rows` 和 `cols` 属性，定义默认宽高尺寸。

```html
<textarea name="" id="" class="j-textarea" rows="5" cols="30"></textarea>
```

`readonly` 属性定义文本域只读状态。

```html
<textarea name="" id="" class="j-textarea" readonly></textarea>
```

`disabled` 属性定义文本域禁用状态。

```html
<textarea name="" id="" class="j-textarea" disabled></textarea>
```

## 调整尺寸

通过 `CSS` 工具类 `.resize-{value}` 定义文本域可调整尺寸的方向。

- `.resize-none`：禁止调整尺寸
- `.resize`：可调整双向尺寸
- `.resize-x`：可调整水平尺寸
- `.resize-y`：可调整垂直尺寸

```html
<textarea name="" id="" class="j-textarea resize"></textarea>
```
