# 定时器

## 导入

```ts
import { timer } from 'vanilla-jui';
```

## timer

`timer` 是模块级、按字符串 key 管理的 timeout 注册表。

- 同 key 再次 `start()` 会先清除旧 timeout；
- 回调执行后记录自动删除。

```ts
timer.start('toast:42', 3000, () => closeToast(42));
timer.start('toast:42', 5000, () => closeToast(42)); // 替换前一次
timer.cancel('toast:42');
```

### 静态方法

| 成员                                   | 说明                             |
| -------------------------------------- | -------------------------------- |
| `timer.start(key, duration, callback)` | 创建或替换 timeout               |
| `timer.cancel(key)`                    | 清除指定 timeout；不存在时无操作 |
| `timer.timers`                         | 底层可变记录，仅用于诊断         |

注册表由所有调用方共享，key 应包含组件/实例命名空间以避免碰撞。
