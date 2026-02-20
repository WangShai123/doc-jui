# Card

Create card components by combining card-related child element containers.

## Basic Structure

```html
<div class="j-card {is-vertical}">
  <div class="card-header">
    <div class="header-title">...</div>
    <div class="header-icon">...</div>
  </div>
  <div class="card-media">...</div>
  <div class="card-content">...</div>
  <footer class="card-footer">...</footer>
</div>
```

## Example

<div class="grid-container grid-col-1 grid-col-sm-2">
    <div class="block-center">
    <div class="j-card is-vertical" style="max-width: 300px">
        <div class="card-header">
        <div class="header-title">Default Card</div>
        <div class="header-description">The is-vertical type card with des.</div>
        </div>
        <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer">
        <button class="j-button is-default w-full" type="button">Action Button</button>
        </footer>
    </div>
    </div>
    <div class="block-center">
    <div class="j-card" style="max-width: 300px">
        <div class="card-header">
        <div class="header-title">Default Card</div>
        <span class="pr-4">
            <button class="j-button is-default is-sm" aria-label="more-actions">
            <span class="button-c">Action</span>
            </button>
        </span>
        </div>
        <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer px-4 pb-4 pt-1 border-t-transparent">
        <button class="j-button is-default w-full" type="button">Action Button</button>
        </footer>
    </div>
    </div>
    <div class="block-center">
    <div class="j-card is-vertical" style="max-width: 300px">
        <div class="card-header">
        <div class="header-title">Default Card</div>
        </div>
        <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer">
        <button class="j-button is-text" type="button">
            <span class="button-content">See our guildeline</span>
            <div class="el-suffix el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path></svg>
            </div>
        </button>
        </footer>
    </div>
    </div>
    <div class="block-center">
    <div class="j-card" style="max-width: 300px">
        <div class="card-header">
        <div class="header-title">Card Title</div>
        <span class="header-icon">
            <button class="j-button is-ghost is-icon is-sm" aria-label="more-options">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
            </button>
        </span>
        </div>
        <div class="card-media">
        <figure class="image aspect-video">
            <img src="https://placehold.co/600x400/lightgray/gray?text=Loading..." alt="card-image">
        </figure>
        </div>
        <div class="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer px-3 py-2">
        <div class="j-button-group w-full">
            <button class="j-button is-ghost w-full" type="button">Action 1</button>
            <button class="j-button is-ghost w-full" type="button">Action 2</button>
            <button class="j-button is-ghost w-full" type="button">Action 3</button>
        </div>
        </footer>
    </div>
    </div>
    <div class="block-center">
    <div class="j-card" style="max-width: 300px">
        <div class="card-media">
        <figure class="image aspect-video">
            <img src="https://placehold.co/600x400/lightgray/gray?text=Loading..." alt="card-image">
        </figure>
        </div>
        <div class="card-content">
        <div class="mb-3 flex justify-between">
            <button class="j-button is-default is-sm">
            <span class="el-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
            </span>
            <span class="button-content">notification</span>
            </button>
            <button class="j-button is-ghost is-sm">
            <span class="el-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path></svg>
            </span>
            <span class="button-content">magic</span>
            </button>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer px-4 pb-4 pt-1 border-t-transparent">
        <button class="j-button is-default w-full" type="button">Action Button</button>
        </footer>
    </div>
    </div>
    <div class="block-center">
    <div class="j-card" style="max-width: 300px">
        <div class="card-content">
        <figure class="image aspect-video border-radius">
            <img src="https://placehold.co/600x400/lightgray/gray?text=Loading..." alt="card-image">
        </figure>
        <div class="my-3 flex justify-between">
            <button class="j-tag is-default is-sm">
            <span class="el-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
            </span>
            <span class="tag-content">notification</span>
            </button>
            <button class="j-tag is-ghost is-sm">
            <span class="el-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.6144 17.7956C10.277 18.5682 9.20776 18.5682 8.8704 17.7956L7.99275 15.7854C7.21171 13.9966 5.80589 12.5726 4.0523 11.7942L1.63658 10.7219C.868536 10.381.868537 9.26368 1.63658 8.92276L3.97685 7.88394C5.77553 7.08552 7.20657 5.60881 7.97427 3.75892L8.8633 1.61673C9.19319.821767 10.2916.821765 10.6215 1.61673L11.5105 3.75894C12.2782 5.60881 13.7092 7.08552 15.5079 7.88394L17.8482 8.92276C18.6162 9.26368 18.6162 10.381 17.8482 10.7219L15.4325 11.7942C13.6789 12.5726 12.2731 13.9966 11.492 15.7854L10.6144 17.7956ZM4.53956 9.82234C6.8254 10.837 8.68402 12.5048 9.74238 14.7996 10.8008 12.5048 12.6594 10.837 14.9452 9.82234 12.6321 8.79557 10.7676 7.04647 9.74239 4.71088 8.71719 7.04648 6.85267 8.79557 4.53956 9.82234ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899ZM18.3745 19.0469 18.937 18.4883 19.4878 19.0469 18.937 19.5898 18.3745 19.0469Z"></path></svg>
            </span>
            <span class="tag-content">magic</span>
            </button>
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis
        mauris....
        </div>
        <footer class="card-footer px-4 pb-4 pt-1 border-t-transparent gap-2">
        <button class="j-button is-default w-full" type="button">Action 1</button>
        <button class="j-button is-default w-full" type="button">Action 2</button>
        </footer>
    </div>
    </div>
</div>
