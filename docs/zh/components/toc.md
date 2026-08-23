# 目录

Toc 是页面目录组件，用于扫描数据源中的标题，自动生成信息目录。

<Badge text="defineComponent" theme="primary"/>

## 示例

见当前文档右侧目录。

## 导入

```js
import { createToc } from 'vanilla-jui';
```

## 基础用法

```js
createToc({
  target: '.article-content',
  headings: 'h2, h3',
  offset: 80,
}).mount(q('.article-sidebar'));
```

## 参数

| 字段        | 类型                                | 默认值        | 说明                                             |
| ----------- | ----------------------------------- | ------------- | ------------------------------------------------ |
| `target`    | `string \| Element \| Node \| null` | `'.j-editor'` | 扫描标题的单一内容区域                           |
| `headings`  | `string`                            | `'h2, h3'`    | 标题选择器                                       |
| `offset`    | `number`                            | `80`          | 定位当前标题的顶部偏移，单位 px                  |
| `reactive`  | `boolean`                           | `false`       | 是否观察目标 DOM 变化并自动同步 `state.items`    |
| `className` | `object`                            | 见下表        | 自定义样式类                                     |
| `onChange`  | `Function \| null`                  | `null`        | active 项变化后触发，参数为 `(item, index, toc)` |

## 实例属性

| 属性      | 类型                  | 说明                     |
| --------- | --------------------- | ------------------------ |
| `props`   | `object`              | 归一化后的配置对象       |
| `state`   | `DeepStore`           | 响应式状态               |
| `runtime` | `object`              | 生命周期标记             |
| `element` | `HTMLElement \| null` | build 后的稳定目录根节点 |

### state

| 属性            | 类型                                                 | 说明                                    |
| --------------- | ---------------------------------------------------- | --------------------------------------- |
| `items`         | `Array<{ id: string, text: string, level: number }>` | 标题数据                                |
| `current.index` | `number`                                             | 当前 active 项索引，无 active 时为 `-1` |
| `current.item`  | `object \| null`                                     | 当前 active 项数据                      |

### runtime

| 属性        | 类型      | 说明       |
| ----------- | --------- | ---------- |
| `built`     | `boolean` | 是否已构建 |
| `mounted`   | `boolean` | 是否已挂载 |
| `destroyed` | `boolean` | 是否已销毁 |

### onChange

`onChange(item, index, toc)`

| 参数    | 类型     | 说明               |
| ------- | -------- | ------------------ |
| `item`  | `object` | 当前 active 项数据 |
| `index` | `number` | 当前 active 项索引 |
| `toc`   | `Toc`    | 当前目录实例       |

## 实例方法

| 方法              | 默认值   | 说明               |
| ----------------- | -------- | ------------------ |
| `build()`         |          | 构建目录视图       |
| `mount()`         |          | 挂载目录视图       |
| `activate(index)` | `number` | 设置 active 项索引 |
| `unmount()`       |          | 取消挂载目录视图   |
| `destroy()`       |          | 销毁目录视图       |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。
