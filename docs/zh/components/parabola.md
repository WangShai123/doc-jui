# 抛物线

`parabola` 用于构建2个元素之间的抛物线动画。

## 应用场景

如：点击商品添加到购物车的动画。

## 应用示例

<div style="width:280px">
    <div class="flex justify-between" style="margin-bottom:120px">
        <button type="button" class="j-button is-default" id="from-point">起点 1</button>
        <button type="button" class="j-button is-outline" id="end-point-2">终点 2</button>
    </div>
    <div class="flex justify-between">
        <button type="button" class="j-button is-default" id="from-point-2">起点 2</button>
        <button type="button" class="j-button is-outline" id="end-point">终点 1</button>
    </div>
</div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { parabola, q, on } = jui;

const from = q("#from-point");
const to = q("#end-point");
on(from, "click", () => {
  const ball = new parabola({
    from,
    to,
    direction: "top-right",
  });
  ball.start();
});
```

:::

## 参数说明

```js
/**
 * @description 创建一个抛物线动画
 * @param {Object} options 配置项
 *  - @property {HTMLElement|String} from 起点元素 或 起点元素的选择器特征字符串
 *  - @property {HTMLElement|String} to 终点元素 或 终点元素的选择器特征字符串
 *  - @property {String} direction 抛物线方向，可选: top-right, top-left, bottom-right, bottom-left, center
 *  - @property {Number} showDelay 抛物线显示延迟时间，默认0
 *  - @property {Number} hideDelay 抛物线消失延迟时间，默认0
 *  - @property {Function} onShow 抛物线显示回调
 *  - @property {Function} onHidden 抛物线消失后回调
 *  - @property {Object} ball 抛物线小球参数
 *      - @property {String} color 小球颜色，默认 var(--primary) 继承主题色
 *      - @property {String} size 小球直径，默认 10px
 */
new parabola(options);
```

## 实例方法

```js
/**
 * @description 启动抛物线
 * @method start
 * @return {void}
 */
start();

/**
 * @description 销毁抛物线
 * @method destroy
 * @return {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 抛物线消失状态
 * @property {Boolean} hidden
 * @default false
 */
hidden;
```

## 注意事项

抛物线默认自动消失，且移除DOM元素，并自动销毁。
