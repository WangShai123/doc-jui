# 表单

## 基础结构

```html
<!-- 表单 显示模式 -->
<form class="j-form is-{vertical|horizontal} is-item-{vertical|horizontal} {customClass}" id="{id}" data-form="{name}">
    <!-- 表单 项 -->
    <div class="form-item">
        <!-- 表单 标签 -->
        <label for="email" class="item-label is-{required}">邮箱</label>
        <!-- 表单 控制器 -->
        <div class="form-control">
            <!-- 表单 输入元素 -->
            <input type="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email" required />
            <!-- 表单 帮助块 -->
            <div class="help-block is-{valid|invalid}">{帮助块消息}</div>
        </div>
    </div>
    <div class="form-item">{ ... }</div>
    <!-- 表单 操作按钮 -->
    <div class="form-buttons">
        <button type="submit" class="j-button is-primary">提交</button>
        <button type="reset" class="j-button is-ghost">重置</button>
    </div>
</form>
```

## 应用示例

### 垂直表单

<form class="j-form is-vertical is-item-vertical w-2xs my-4">
    <div class="form-item">
        <label for="email" class="item-label is-required">Email address</label>
        <div class="form-control">
            <input type="email" name="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password" class="j-input" id="password" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label for="file" class="item-label">File input</label>
        <div class="form-control">
            <input type="file" id="file" class="j-input">
            <div class="help-block">Example block-level help text here.</div>
        </div>
    </div>
    <div class="form-item">
        <label class="item-label"> <input type="checkbox" class="j-input"> 同意...</label>
    </div>
    <div class="form-buttons flex gap-2">
        <button type="submit" class="j-button is-primary">提交</button>
        <button type="reset" class="j-button is-ghost">重置</button>
    </div>
</form>

### 水平表单

<form class="j-form is-horizontal is-item-horizontal my-4">
    <div class="form-item">
        <label for="email-horizontal" class="item-label is-required">Email</label>
        <div class="form-control">
            <input type="email" class="j-input" id="email-horizontal" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password-horizontal" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" class="j-input" id="password-horizontal" placeholder="Password" autocomplete="current-password">
            <div class="help-block">Example block-level help text here.</div>
        </div>
    </div>
    <div class="form-buttons flex gap-1">
        <button type="submit" class="j-button is-primary">提交</button>
        <button type="reset" class="j-button is-ghost">重置</button>
    </div>
</form>
