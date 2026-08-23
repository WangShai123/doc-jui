# 编辑器

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 编辑器预览样式类。

## 基础 DOM

```html
<div class="j-editor is-{size}">...</div>
```

## 不同尺寸

- `is-sm` 小尺寸，默认
- `is-md` 中尺寸
- `is-lg` 大尺寸
- `is-xl` 超大尺寸

## 示例

<p>这是段落文本，用于承载主要信息。支持多种内联语义标签，例如：<strong>加粗（strong）</strong>、<b>加粗（b）</b>、<em>强调（em）</em>、<i>斜体（i）</i>、<u>下划线（u）</u>、<s>删除线（s）</s>、<del>删除（del）</del>、<ins>插入（ins）</ins>。</p>

<h3>三级标题</h3>
<p>特殊文本类型示例：</p>
<ul>
    <li><mark>高亮文本（mark）</mark>：用于突出显示</li>
    <li><small>次要说明文字（small）</small>：如版权信息</li>
    <li>上标：E = mc<sup>2</sup>；下标：H<sub>2</sub>O</li>
    <li>缩写：<abbr title="层叠样式表">CSS</abbr> 是网页样式语言</li>
    <li>
    定义术语：<dfn>人工智能</dfn>（AI）指由机器模拟人类智能行为的技术
    </li>
    <li>变量：<var>x</var> = 10</li>
    <li>程序输出：<samp>File not found.</samp></li>
    <li>键盘输入：<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></li>
    <li>
    时间标记：<time datetime="2026-02-08T14:30:00+08:00"
        >2026年2月8日 14:30</time
    >
    </li>
</ul>

<h4>四级标题：列表与定义</h4>
<dl>
<dt>HTML</dt>
<dd>超文本标记语言，用于构建网页结构。</dd>
<dt>CSS</dt>
<dd>层叠样式表，用于控制网页外观。</dd>
<dt>JavaScript</dt>
<dd>一种脚本语言，用于实现网页交互功能。</dd>
</dl>

<h5>五级标题：引用与代码</h5>
<blockquote>
<p>“代码是写给人看的，附带能在机器上运行。”</p>
<cite>《代码大全》</cite>
</blockquote>
<p>行内引用：<q>所见即所得</q> 是 <code>富文本编辑</code> 的核心理念。</p>

<pre
          class="code-block"
        ><code class="language-html">&lt;!-- 常规 pre code --&gt;
&lt;div class="j-content"&gt;
  &lt;h1&gt;标题&lt;/h1&gt;
  &lt;p&gt;段落内容...&lt;/p&gt;
&lt;/div&gt;
</code></pre>

```html
<!-- highlight pre code -->
<div class="j-content">
  <h1>标题</h1>
  <p>段落内容...</p>
</div>
```

<h6>六级标题：媒体与嵌入内容</h6>
<figure>
    <img
    src="https://placehold.co/600x400/lightgray/gray?text=Loading..."
    alt="示例图片"
    />
    <figcaption>
    图1：这是一张占位图片，alt 文本完整Description其用途。
    </figcaption>
</figure>

<figure>
    <video
    controls=""
    width="100%"
    poster="https://placehold.co/600x300/lightgray/gray?text=Loading..."
    >
    <source src="../../public/sample.mp4" type="video/mp4" />
    您的浏览器不支持 video 标签。
    </video>
    <figcaption>图2：视频嵌入示例</figcaption>
</figure>

<figure>
    <audio controls="">
    <source src="../../public/new_order.mp3" type="audio/mpeg" />
    您的浏览器不支持 audio 标签。
    </audio>
    <figcaption>音频播放控件</figcaption>
</figure>

<figure>
    <iframe
    src="https://www.example.com"
    width="100%"
    height="300"
    frameborder="0"
    title="嵌入网页"
    ></iframe>
    <figcaption>嵌入的第三方内容（如地图或文档）</figcaption>
</figure>

<h3>表格与数据展示</h3>
<table>
    <caption>
    用户信息表
    </caption>
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">姓名</th>
        <th scope="col">邮箱</th>
        <th scope="col">Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>001</td>
        <td>张伟</td>
        <td>zhangwei@example.com</td>
        <td>活跃</td>
    </tr>
    <tr>
        <td>002</td>
        <td>李娜</td>
        <td>lina@example.com</td>
        <td>休眠</td>
    </tr>
    </tbody>
</table>

<h3>交互与元信息</h3>
<details>
    <summary>点击展开技术栈详情</summary>
    <p>本项目使用以下技术：</p>
    <ul>
    <li>前端：React + TypeScript</li>
    <li>样式：CSS Modules + PostCSS</li>
    <li>构建：Vite</li>
    </ul>
    <p>数据库：MongoDB</p>
</details>

<address>
    联系我们：<br />
    邮箱：<a href="mailto:contact@example.com">contact@example.com</a
    ><br />
    地址：中国上海市浦东新区世纪大道 100 号
</address>

<h3>低频语义元素</h3>
<p>中文注音示例（适用于生僻字教学）：</p>
<p>
    <ruby> 麒<rt>qí</rt> 麟<rt>lín</rt> </ruby>
</p>

<p>双向隔离文本（用于混合语言）：<bdi>用户名：张三</bdi></p>
<p>从右向左文本（如阿拉伯语）：<bdo dir="rtl">مرحبا بالعالم</bdo></p>

<p>进度指示（仅展示，非交互）：<progress value="70" max="100">70%</progress>
</p>
<p>计量值：<meter value="0.8" min="0" max="1">良好</meter></p>

<h3>分隔与换行</h3>
<p>
    此处为普通段落。&gt;&gt;
    天墬未形，冯冯翼翼，洞洞灟灟，故曰太昭。道始生虚廓，虚廓生宇宙，宇宙生气。气有涯垠，清阳者薄靡而为天，重浊者凝滞而为地。清妙之合专易，重浊之凝竭难，故天先成而地后定。天地之袭精为阴阳，阴阳之专精为四时，四时之散精为万物。积阳之热气生火，火气之精者为日；积阴之寒气为水，水气之精者为月；日月之淫为精者为星辰，天受日月星辰，地受水潦尘埃。
</p>
<hr />
<p>水平线（hr）下方的新内容区块。</p>
<p>强制<br />换行示例。</p>

<h3>只读表单控件（用于展示）</h3>
<p>
    输入框（只读）：<input
    class="j-input"
    id="test-input-readonly"
    type="text"
    value="示例文本"
    readonly=""
    size="20"
    />
</p>
<p>
    选择器：<select class="j-select" name="test-select">
    <option value="">test 1</option>
    <option value="">test 2</option>
    </select>
</p>
<p>多行文本（只读）：</p>
<p>
    <textarea
    class="j-textarea"
    id="test-textarea-readonly"
    readonly=""
    rows="3"
    cols="24"
    >
这是预填充的只读多行文本内容，用于展示样式。
</textarea>
</p>

<h3>其他</h3>
<p>空元素示例：<wbr />（无实际渲染，用于允许长单词换行）</p>
<p>数据属性展示（视觉不可见，但结构存在）：<data value="CN">中国</data></p>

<hr />

<footer>
    <p>本内容为自动化测试样本，所有数据均为虚构。</p>
</footer>
