# 动画

动画效果（Animations）是指通过关键帧（Keyframes）定义的动画序列，可以在元素的不同状态之间平滑过渡。通过使用动画类，可以轻松地为元素添加动画效果，从而提升用户体验和界面交互性。

## CSS 类

| 类名 | 描述 | 示例 | 属性值 |
| ---- | ---- | ---- | ---- |
| .animate-none | 无动画效果 | <svg class="size-5 animate-none fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: none; |
| .animate-spin | 旋转动画效果 | <svg class="size-5 animate-spin fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-spin 1s linear infinite |
| .animate-ping | 脉冲动画效果(强) | <svg class="size-5 animate-ping fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite |
| .animate-pulse | 脉冲动画效果(弱) | <svg class="size-5 animate-pulse fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite |
| .animate-bounce | 弹跳动画效果 | <svg class="size-5 animate-bounce fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-bounce 1s infinite |
| .animate-fade-in | 渐显动画效果 | <svg class="size-5 animate-fade-in fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-fade-in 0.3s ease-in-out |
| .animate-fade-out | 渐隐动画效果 | <svg class="size-5 animate-fade-out fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-fade-out 0.3s ease-in-out |
| .animate-shake | 抖动动画效果 | <svg class="size-5 animate-shake fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-shake 0.3s ease-in-out |
| .animate-slide-to-top | 从顶部滑动动画效果 | <svg class="size-5 animate-slide-to-top fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-top 0.3s ease-in-out |
| .animate-slide-to-bottom | 从底部滑动动画效果 | <svg class="size-5 animate-slide-to-bottom fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-bottom 0.3s ease-in-out |
| .animate-slide-to-left | 从左侧滑动动画效果 | <svg class="size-5 animate-slide-to-left fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-left 0.3s ease-in-out |
| .animate-slide-to-right | 从右侧滑动动画效果 | <svg class="size-5 animate-slide-to-right fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-right 0.3s ease-in-out |
