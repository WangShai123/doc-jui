# Editor

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS editor preview classes in the default stylesheet.

## Basic DOM

```html
<div class="j-editor is-{size}">...</div>
```

## Sizes

- `is-sm` small, default
- `is-md` medium
- `is-lg` large
- `is-xl` extra large

## Example

<p>This paragraph carries the main content. It supports many inline semantic tags, such as <strong>strong text (strong)</strong>, <b>bold text (b)</b>, <em>emphasis (em)</em>, <i>italic (i)</i>, <u>underline (u)</u>, <s>strikethrough (s)</s>, <del>deleted text (del)</del>, and <ins>inserted text (ins)</ins>.</p>

<h3>Heading Level 3</h3>
<p>Examples of special text types:</p>
<ul>
    <li><mark>Highlighted text (mark)</mark>: used for emphasis</li>
    <li><small>Secondary note text (small)</small>: such as copyright notes</li>
    <li>Superscript: E = mc<sup>2</sup>; subscript: H<sub>2</sub>O</li>
    <li>Abbreviation: <abbr title="Cascading Style Sheets">CSS</abbr> is a styling language for the Web</li>
    <li>
    Definition term: <dfn>Artificial intelligence</dfn> (AI) means technology that lets machines simulate human intelligent behavior
    </li>
    <li>Variable: <var>x</var> = 10</li>
    <li>Program output: <samp>File not found.</samp></li>
    <li>Keyboard input: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></li>
    <li>
    Time mark: <time datetime="2026-02-08T14:30:00+08:00"
        >February 8, 2026 14:30</time
    >
    </li>
</ul>

<h4>Heading Level 4: Lists and Definitions</h4>
<dl>
<dt>HTML</dt>
<dd>HyperText Markup Language, used to build web page structure.</dd>
<dt>CSS</dt>
<dd>Cascading Style Sheets, used to control web page presentation.</dd>
<dt>JavaScript</dt>
<dd>A scripting language used to build web page interactions.</dd>
</dl>

<h5>Heading Level 5: Quote and Code</h5>
<blockquote>
<p>"Code is read far more often than it is written."</p>
<cite>Code Complete</cite>
</blockquote>
<p>Inline quote: <q>what you see is what you get</q> is a core idea in <code>rich text editing</code>.</p>

<pre
          class="code-block"
        ><code class="language-html">&lt;!-- Regular pre code --&gt;
&lt;div class="j-content"&gt;
  &lt;h1&gt;Title&lt;/h1&gt;
  &lt;p&gt;Paragraph content...&lt;/p&gt;
&lt;/div&gt;
</code></pre>

```html
<!-- highlight pre code -->
<div class="j-content">
  <h1>Title</h1>
  <p>Paragraph content...</p>
</div>
```

<h6>Heading Level 6: Media and Embedded Content</h6>
<figure>
    <img
    src="https://placehold.co/600x400/lightgray/gray?text=Loading..."
    alt="Example image"
    />
    <figcaption>
    Figure 1: This is a placeholder image. The alt text fully describes its purpose.
    </figcaption>
</figure>

<figure>
    <video
    controls=""
    width="100%"
    poster="https://placehold.co/600x300/lightgray/gray?text=Loading..."
    >
    <source src="../../public/sample.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    <figcaption>Figure 2: Embedded video example</figcaption>
</figure>

<figure>
    <audio controls="">
    <source src="../../public/new_order.mp3" type="audio/mpeg" />
    Your browser does not support the audio tag.
    </audio>
    <figcaption>Audio playback control</figcaption>
</figure>

<figure>
    <iframe
    src="https://www.example.com"
    width="100%"
    height="300"
    frameborder="0"
    title="Embedded page"
    ></iframe>
    <figcaption>Embedded third-party content, such as maps or documents</figcaption>
</figure>

<h3>Tables and Data Display</h3>
<table>
    <caption>
    User Information Table
    </caption>
    <thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Status</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>001</td>
        <td>Alex Zhang</td>
        <td>alex@example.com</td>
        <td>Active</td>
    </tr>
    <tr>
        <td>002</td>
        <td>Nina Lee</td>
        <td>nina@example.com</td>
        <td>Idle</td>
    </tr>
    </tbody>
</table>

<h3>Interaction and Metadata</h3>
<details>
    <summary>Click to expand technical stack details</summary>
    <p>This project uses the following technologies:</p>
    <ul>
    <li>Frontend: React + TypeScript</li>
    <li>Styles: CSS Modules + PostCSS</li>
    <li>Build: Vite</li>
    </ul>
    <p>Database: MongoDB</p>
</details>

<address>
    Contact us:<br />
    Email: <a href="mailto:contact@example.com">contact@example.com</a
    ><br />
    Address: 100 Century Avenue, Pudong New Area, Shanghai, China
</address>

<h3>Less Common Semantic Elements</h3>
<p>Ruby annotation example, useful for teaching uncommon words:</p>
<p>
    <ruby> kan<rt>かん</rt> ji<rt>じ</rt> </ruby>
</p>

<p>Bidirectional isolation text, useful for mixed languages: <bdi>Username: Zhang San</bdi></p>
<p>Right-to-left text, such as Arabic: <bdo dir="rtl">مرحبا بالعالم</bdo></p>

<p>Progress indicator, display only: <progress value="70" max="100">70%</progress>
</p>
<p>Meter value: <meter value="0.8" min="0" max="1">Good</meter></p>

<h3>Separators and Line Breaks</h3>
<p>
    This is a normal paragraph. &gt;&gt;
    Before anything took shape, all was vast and undefined. From emptiness came space, from space came the world, and from the world came breath. Light breath rose and became the sky; heavy breath settled and became the earth. The sky formed first, then the earth found its place. From their joined essence came yin and yang, from yin and yang came the four seasons, and from the four seasons came all things.
</p>
<hr />
<p>New content below the horizontal rule (hr).</p>
<p>Forced<br />line break example.</p>

<h3>Readonly Form Controls, for Display</h3>
<p>
    Input (readonly):<input
    class="j-input"
    id="test-input-readonly"
    type="text"
    value="Example text"
    readonly=""
    size="20"
    />
</p>
<p>
    Select:<select class="j-select" name="test-select">
    <option value="">test 1</option>
    <option value="">test 2</option>
    </select>
</p>
<p>Textarea (readonly):</p>
<p>
    <textarea
    class="j-textarea"
    id="test-textarea-readonly"
    readonly=""
    rows="3"
    cols="24"
    >
This is prefilled readonly multiline text for style display.
</textarea>
</p>

<h3>Other</h3>
<p>Empty element example: <wbr />(no visible rendering; allows long words to wrap)</p>
<p>Data attribute display, visually hidden but structurally present: <data value="CN">China</data></p>

<hr />

<footer>
    <p>This content is an automated test sample. All data is fictional.</p>
</footer>
