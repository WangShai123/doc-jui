# Pagination

## Basic Structure

```html
<div class="j-pagination">
  <ul class="pagination">
    <li class="item">
      <a class="j-button is-icon is-ghost">{previous icon}</a>
    </li>
    <li class="item">
      <a class="j-button is-icon is-ghost">1</a>
    </li>
    <li class="item">
      <a class="j-button is-icon is-ghost">2</a>
    </li>
    <li class="item more">
      <span class="j-button is-icon is-ghost">{more icon}</span>
    </li>
    <li class="item">
      <a class="j-button is-icon is-ghost">{next icon}</a>
    </li>
  </ul>
</div>
```

## Example

<div id="demo-pagination-container">
    <div class="j-pagination">
        <ul class="pagination">
        <li class="item">
            <a class="j-button is-icon is-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
            </a>
        </li>
        <li class="item">
            <a class="j-button is-icon is-ghost">1</a>
        </li>
        <li class="item">
            <a class="j-button is-icon is-ghost">2</a>
        </li>
        <li class="item">
            <span class="j-button is-icon is-active">3</span>
        </li>
        <li class="item">
            <a class="j-button is-icon is-ghost">4</a>
        </li>
        <li class="item more">
            <span class="j-button is-icon is-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
            </span>
        </li>
        <li class="item">
            <a class="j-button is-icon is-ghost">8</a>
        </li>
        <li class="item">
            <a class="j-button is-icon is-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
            </a>
        </li>
        </ul>
    </div>
</div>

## Different Separators

@todo
