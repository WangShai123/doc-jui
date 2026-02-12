# Animation

Animation effects are sequences of animations defined through keyframes that allow smooth transitions between different states of elements. By using animation classes, you can easily add animation effects to elements, thereby enhancing user experience and interface interactivity.

## CSS Classes

| Class Name | Description | Example | Property Value |
| ---- | ---- | ---- | ---- |
| .animate-none | No animation | <svg class="size-5 animate-none fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: none; |
| .animate-spin | Spin animation | <svg class="size-5 animate-spin fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-spin 1s linear infinite |
| .animate-ping | Ping animation (strong) | <svg class="size-5 animate-ping fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite |
| .animate-pulse | Pulse animation (weak) | <svg class="size-5 animate-pulse fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite |
| .animate-bounce | Bounce animation | <svg class="size-5 animate-bounce fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-bounce 1s infinite |
| .animate-fade-in | Fade in animation | <svg class="size-5 animate-fade-in fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-fade-in 0.3s ease-in-out |
| .animate-fade-out | Fade out animation | <svg class="size-5 animate-fade-out fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-fade-out 0.3s ease-in-out |
| .animate-shake | Shake animation | <svg class="size-5 animate-shake fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-shake 0.3s ease-in-out |
| .animate-slide-to-top | Slide from top animation | <svg class="size-5 animate-slide-to-top fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-top 0.3s ease-in-out |
| .animate-slide-to-bottom | Slide from bottom animation | <svg class="size-5 animate-slide-to-bottom fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-bottom 0.3s ease-in-out |
| .animate-slide-to-left | Slide from left animation | <svg class="size-5 animate-slide-to-left fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-left 0.3s ease-in-out |
| .animate-slide-to-right | Slide from right animation | <svg class="size-5 animate-slide-to-right fill-primary" viewBox="0 0 84 84"><path d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"></path></svg> | animation: animate-slide-to-right 0.3s ease-in-out |
