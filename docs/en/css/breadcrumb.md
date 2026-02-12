# Breadcrumb

Breadcrumb is a simple navigation that is commonly used to display the path of the current page, making it easy for users to quickly understand their current location.

## Basic Structure

```html
<div class="j-breadcrumb is-{direction} is-{size}" aria-label="breadcrumbs">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>
```

## Different Sizes

Set class `is-{size}` to change breadcrumb size.

- `is-sm`
- `is-md`
- `is-lg`

<div class="j-breadcrumb is-sm" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-md" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-lg" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

## Different Directions

Set class `is-{direction}` to change the display direction of breadcrumbs.

- `is-left`
- `is-center`
- `is-right`

<div class="j-breadcrumb is-sm" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-sm is-center" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-sm is-right" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

## Different Separators

- `is-dot`
- `is-arrow`
- `is-dash`

<div class="j-breadcrumb is-sm is-dot" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-sm is-arrow" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

<div class="j-breadcrumb is-sm is-dash" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2"><a href="#">Home</a></li>
        <li><a href="#">Level 1</a></li>
        <li><a href="#">Level 2</a></li>
        <li class="is-active"><a href="#" aria-current="page">Current</a></li>
    </ul>
</div>

## Icons

<div class="j-breadcrumb is-sm" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2">
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>
                </span>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2.4578V4.58152C6.06817 5.76829 4 8.64262 4 12C4 16.4183 7.58172 20 12 20C15.3574 20 18.2317 17.9318 19.4185 15H21.5422C20.2679 19.0571 16.4776 22 12 22C6.47715 22 2 17.5228 2 12C2 7.52236 4.94289 3.73207 9 2.4578ZM12 2C17.5228 2 22 6.47715 22 12C22 12.3375 21.9833 12.6711 21.9506 13H11V2.04938C11.3289 2.01672 11.6625 2 12 2ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189Z"></path></svg>
                </span>
                <span>Level 1</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>
                </span>
                <span>Level 2</span>
            </a>
        </li>
        <li class="is-active">
            <a href="#" aria-current="page">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22L7.29117 20.8242C8.6944 21.5746 10.2975 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7025 2.42544 15.3056 3.17581 16.7088L2 22ZM8.23428 19.0605L7.58075 18.711L4.63416 19.3658L5.28896 16.4192L4.93949 15.7657C4.32549 14.6175 4 13.3345 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.6655 20 9.38248 19.6745 8.23428 19.0605ZM15.4487 7H13.4411L13.2661 9.00024H11.2584L11.4334 7H9.42577L9.25077 9.00024H7V11.0002H9.0758L8.90082 13.0002H7V15.0002H8.72584L8.55089 17H10.5585L10.7335 15.0002H12.7411L12.5662 17H14.5738L14.7488 15.0002H17V13.0002H14.9237L15.0987 11.0002H17V9.00024H15.2737L15.4487 7ZM11.0834 11.0002H13.0911L12.9161 13.0002H10.9085L11.0834 11.0002Z"></path></svg>
                </span>
                <span>Current</span>
            </a>
        </li>
    </ul>
</div>

<div class="j-breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2">
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>
                </span>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2.4578V4.58152C6.06817 5.76829 4 8.64262 4 12C4 16.4183 7.58172 20 12 20C15.3574 20 18.2317 17.9318 19.4185 15H21.5422C20.2679 19.0571 16.4776 22 12 22C6.47715 22 2 17.5228 2 12C2 7.52236 4.94289 3.73207 9 2.4578ZM12 2C17.5228 2 22 6.47715 22 12C22 12.3375 21.9833 12.6711 21.9506 13H11V2.04938C11.3289 2.01672 11.6625 2 12 2ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189Z"></path></svg>
                </span>
                <span>Level 1</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>
                </span>
                <span>Level 2</span>
            </a>
        </li>
        <li class="is-active">
            <a href="#" aria-current="page">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22L7.29117 20.8242C8.6944 21.5746 10.2975 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7025 2.42544 15.3056 3.17581 16.7088L2 22ZM8.23428 19.0605L7.58075 18.711L4.63416 19.3658L5.28896 16.4192L4.93949 15.7657C4.32549 14.6175 4 13.3345 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.6655 20 9.38248 19.6745 8.23428 19.0605ZM15.4487 7H13.4411L13.2661 9.00024H11.2584L11.4334 7H9.42577L9.25077 9.00024H7V11.0002H9.0758L8.90082 13.0002H7V15.0002H8.72584L8.55089 17H10.5585L10.7335 15.0002H12.7411L12.5662 17H14.5738L14.7488 15.0002H17V13.0002H14.9237L15.0987 11.0002H17V9.00024H15.2737L15.4487 7ZM11.0834 11.0002H13.0911L12.9161 13.0002H10.9085L11.0834 11.0002Z"></path></svg>
                </span>
                <span>Current</span>
            </a>
        </li>
    </ul>
</div>

<div class="j-breadcrumb is-lg" aria-label="breadcrumbs">
    <ul>
        <li class="mt-2">
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19H18V9.15745L12 3.7029L6 9.15745V19ZM19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM7.5 13H9.5C9.5 14.3807 10.6193 15.5 12 15.5C13.3807 15.5 14.5 14.3807 14.5 13H16.5C16.5 15.4853 14.4853 17.5 12 17.5C9.51472 17.5 7.5 15.4853 7.5 13Z"></path></svg>
                </span>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2.4578V4.58152C6.06817 5.76829 4 8.64262 4 12C4 16.4183 7.58172 20 12 20C15.3574 20 18.2317 17.9318 19.4185 15H21.5422C20.2679 19.0571 16.4776 22 12 22C6.47715 22 2 17.5228 2 12C2 7.52236 4.94289 3.73207 9 2.4578ZM12 2C17.5228 2 22 6.47715 22 12C22 12.3375 21.9833 12.6711 21.9506 13H11V2.04938C11.3289 2.01672 11.6625 2 12 2ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189Z"></path></svg>
                </span>
                <span>Level 1</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>
                </span>
                <span>Level 2</span>
            </a>
        </li>
        <li class="is-active">
            <a href="#" aria-current="page">
                <span class="el-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22L7.29117 20.8242C8.6944 21.5746 10.2975 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7025 2.42544 15.3056 3.17581 16.7088L2 22ZM8.23428 19.0605L7.58075 18.711L4.63416 19.3658L5.28896 16.4192L4.93949 15.7657C4.32549 14.6175 4 13.3345 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.6655 20 9.38248 19.6745 8.23428 19.0605ZM15.4487 7H13.4411L13.2661 9.00024H11.2584L11.4334 7H9.42577L9.25077 9.00024H7V11.0002H9.0758L8.90082 13.0002H7V15.0002H8.72584L8.55089 17H10.5585L10.7335 15.0002H12.7411L12.5662 17H14.5738L14.7488 15.0002H17V13.0002H14.9237L15.0987 11.0002H17V9.00024H15.2737L15.4487 7ZM11.0834 11.0002H13.0911L12.9161 13.0002H10.9085L11.0834 11.0002Z"></path></svg>
                </span>
                <span>Current</span>
            </a>
        </li>
    </ul>
</div>

```html
<!-- dom structure -->
<div class="j-breadcrumb" aria-label="breadcrumbs">
    <ul>
        <li>
            <a href="#">
                <span class="el-icon">{...svg element...}</span>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">{...svg element...}</span>
                <span>Level 1</span>
            </a>
        </li>
        <li>
            <a href="#">
                <span class="el-icon">{...svg element...}</span>
                <span>Level 2</span>
            </a>
        </li>
        <li class="is-active">
            <a href="#" aria-current="page">
                <span class="el-icon">{...svg element...}</span>
                <span>Level 3</span>
            </a>
        </li>
    </ul>
</div>
```
