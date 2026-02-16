import {
  copy,
  theme,
  accordion,
  offcanvas,
  toast,
  modal,
  tabs,
  drop,
  tooltip,
  parabola,
  validator,
  on,
  q,
  newEl,
  manager as cm,
  t as ts,
  ref,
  effect,
  lazyRender,
} from "./jui.module.js";
import menuItems from "./menus.js";
import locales from "./locales.js";
const { show, success, error, lite } = toast;
const path = window.location.pathname;
/** 显示/隐藏抽屉菜单 */
const toggle = (x) => {
  return x.isVisible ? x.hide() : x.show();
};
const t = (key) => {
  return ts(key, locales);
};

/**
 * 生成抽屉菜单
 * @param {*} menuItems 菜单项数组
 * @return {string} menuContent 抽屉菜单的HTML字符串
 */
const generateMenu = (menuItems) => {
  let menuContent = "";
  const stack = [...menuItems];
  const hash = location.hash;
  while (stack.length > 0) {
    const item = stack.shift();
    if (item.children) {
      menuContent += `<div class="pl-5 pr-4 py-1 text-xs bg-gray-3 text-gray-9">${item.title}</div>`;
      stack.unshift(...item.children);
    }
    if (item.link) {
      const isCurrent = hash && item.link === hash;
      if (isCurrent) {
        menuContent += `<a href="${item.link}" class="doc-menu-item is-current py-2 px-4 no-underline text-current flex justify-between align-center"><span>${item.title.zh}</span><span>${item.title.en}</span></a>`;
      } else {
        menuContent += `<a href="${item.link}" class="doc-menu-item py-2 px-4 no-underline text-current flex justify-between align-center"><span>${item.title.zh}</span><span>${item.title.en}</span></a>`;
      }
    }
  }
  return menuContent;
};

/**
 * 菜单按钮交互
 */
const __menu = () => {
  return cm.get("menu", () => {
    const menuContainer = newEl("section", {
      className:
        "flex flex-col items-center justify-center pt-5 menu-container",
      style: {
        "padding-bottom": "3rem",
      },
      html: generateMenu(menuItems),
    });
    const menuOffcanvas = new offcanvas({
      content: menuContainer,
      overlay: true,
      id: "menu-offcanvas",
    });
    const currentAnchor = ref(window.location.hash);
    const setCurrentMenuItem = () => {
      const menuLinks = menuContainer.querySelectorAll("a");
      menuLinks.forEach((link) => {
        link.classList.remove("is-current");
        if (link.getAttribute("href") === currentAnchor.value) {
          link.classList.add("is-current");
        }
      });
    };

    effect(
      () => {
        setCurrentMenuItem();
      },
      { currentAnchor },
    );

    setCurrentMenuItem();

    on(document.body, "click", (e) => {
      const target = e.target.closest("a.doc-menu-item");
      if (target && target.getAttribute("href")) {
        const anchor = target.getAttribute("href");
        currentAnchor.value = anchor;
      }
    });

    on(document.body, "click", (e) => {
      if (e.target.closest(".dashboard-menu")) {
        toggle(menuOffcanvas);
      }
    });
    menuContainer.after(
      newEl("div", {
        style: {
          "text-align": "center",
          padding: "1rem 0",
          color: "var(--gray-9)",
        },
        html: "@JEALER",
      }),
    );
  });
};
__menu();

/**
 * 主题按钮交互
 */
const __theme = () => {
  return cm.get("theme", () => {
    const themeInstance = new theme();
    const themePanel = themeInstance.createPanel();
    const themeOffcanvas = new offcanvas({
      overlay: true,
      direction: "right",
      content: themePanel,
      filter: false,
    });
    on(document.body, "click", (e) => {
      if (e.target.closest(".theme-palette")) {
        toggle(themeOffcanvas);
      }
    });
  });
};
__theme();

const svg = (name) => {
  const prefix = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">';
  const suffix = "</svg>";
  let path;
  switch (name) {
    case "menu":
      path =
        '<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>';
      break;
    case "palette":
      path =
        '<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path>';
      break;
    case "arrow-up":
      path =
        '<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>';
      break;
    case "arrow-down":
      path =
        '<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>';
      break;
    default:
      path = "";
      break;
  }
  return prefix + path + suffix;
};
const __auto = () => {
  const header = document.querySelector("header");
  if (!header) return;
  const div = newEl("div", {
    className: "dashboard-addon",
    style: {
      display: "flex",
      "flex-direction": "column",
      gap: ".25rem",
      position: "fixed",
      right: "1.25rem",
      bottom: "20%",
      "z-index": 2,
    },
    children: [
      newEl("button", {
        className: "j-button is-icon is-primary dashboard-menu",
        html: `<span class="el-icon">${svg("menu")}</span>`,
      }),
      newEl("button", {
        className: "j-button is-icon is-outline theme-palette",
        html: `<span class="el-icon">${svg("palette")}</span>`,
      }),
      newEl("button", {
        className: "j-button is-icon is-default to-top",
        html: `<span class="el-icon">${svg("arrow-up")}</span>`,
      }),
      newEl("button", {
        className: "j-button is-icon is-default to-bottom",
        html: `<span class="el-icon">${svg("arrow-down")}</span>`,
      }),
    ],
  });

  // const observer = new IntersectionObserver(
  //   entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         if (document.body.contains(div)) {
  //           document.body.removeChild(div)
  //         }
  //       } else {
  //         if (!document.body.contains(div)) {
  //           document.body.appendChild(div)
  //         }
  //       }
  //     })
  //   },
  //   {
  //     root: null,
  //     threshold: 0,
  //   }
  // )
  // observer.observe(header)
  // window.addEventListener('beforeunload', () => {
  //   observer.disconnect()
  // })
  document.body.appendChild(div);
  on(document.body, "click", (e) => {
    if (e.target.closest(".to-top")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (e.target.closest(".to-bottom")) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  });
};
__auto();

const __content = () => {
  const radioGroup = q("#content-radio");
  on(radioGroup, "change", (e) => {
    const target = e.target;
    if (target.tagName === "INPUT" && target.type === "radio") {
      const value = target.value;
      const content = q("#demo");
      if (value) {
        content.className = `j-content is-${value}`;
      } else {
        content.classList.remove("is-sm", "is-md", "is-lg");
      }
    }
  });
};
__content();

/**
 * 生成文档页脚
 */
const __footer = () => {
  const footer = newEl("div", {
    className: "contaienr py-4 flex justify-center align-center",
    style: {
      "border-top": "1px solid var(--border-color)",
    },
    text: `Copyright © ${new Date().getFullYear()} JEALER`,
  });
  document.body.appendChild(footer);
};
__footer();

const __modal = () => {
  const basic = q(".example-modal-basic");
  const fullscreen = q(".example-modal-fullscreen");
  const form = q(".example-modal-form");

  if (basic) {
    const basicModal = cm.get("basicModal", () => {
      return new modal({
        title: t("tip"),
        content: t("thisIsAModal"),
        confirmText: t("confirm"),
        cancelText: t("cancel"),
        bgClose: true,
        escClose: true,
        onShow: function () {
          show(t("showModal"), 2000, "info");
        },
        onShown: function () {
          show(t("modalShown"), 2000, "success");
        },
        onHide: function () {
          show(t("closeModal"), 2000, "info");
        },
        onHidden: function () {
          show(t("modalHidden"), 2000, "warning");
        },
        onConfirm: function () {
          show(t("modalConfirmed"), 2000, "success");
        },
      });
    });
    on(basic, "click", () => {
      basicModal.show();
    });
  }

  if (fullscreen) {
    const fullscreenModal = cm.get("fullscreenModal", () => {
      return new modal({
        title: t("tip"),
        content: t("thisIsAFullWidthModal"),
        confirmText: t("confirm"),
        cancelText: t("cancel"),
        fullscreen: true,
        escClose: true,
        onShow: function () {
          show(t("showModal"), 2000, "info");
        },
        onShown: function () {
          show(t("modalShown"), 2000, "success");
        },
        onHide: function () {
          show(t("closeModal"), 2000, "info");
        },
        onHidden: function () {
          show(t("modalHidden"), 2000, "warning");
        },
        onConfirm: function () {
          show(t("modalConfirmed"), 2000, "success");
        },
      });
    });
    on(fullscreen, "click", () => {
      fullscreenModal.show();
    });
  }

  if (form) {
    const formModal = cm.get("formModal", () => {
      return new modal({
        title: t("edit"),
        confirmText: t("submit"),
        cancelText: t("cancel"),
        fields: [
          {
            label: t("username"),
            name: "username",
            id: "_username",
            type: "text",
            placeholder: t("pleaseEnterUsername"),
            required: true,
          },
          {
            label: t("password"),
            name: "password",
            id: "_password",
            type: "password",
            placeholder: t("pleaseEnterPassword"),
            required: true,
          },
          {
            label: t("country"),
            name: "country",
            id: "_country",
            type: "select",
            options: [
              { value: "", text: "" },
              { value: "cn", text: t("china") },
              { value: "us", text: t("us") },
              { value: "uk", text: t("uk") },
            ],
            required: true,
          },
          {
            label: t("description"),
            name: "description",
            id: "_description",
            type: "textarea",
            placeholder: t("pleaseEnterDescription"),
          },
        ],
        onSubmit: function (data) {
          formModal.showLoading();
          // 模拟异步请求
          setTimeout(() => {
            formModal.hideLoading();
            if (!data.username) {
              error(t("usernameRequired"));
              return;
            }
            if (!data.password) {
              error(t("passwordRequired"));
              return;
            }
            if (!data.country) {
              error(t("countryRequired"));
              return;
            }
            success(t("FormDataUpdated"));
            console.table(data);
            formModal.hide();
          }, 1000);
        },
      });
    });
    on(form, "click", () => {
      formModal.show();
    });
  }
};
__modal();

let themeBoxObserver = null;
const __background = () => {
  if (themeBoxObserver) {
    themeBoxObserver.disconnect();
  }
  let themeBox = null;
  const ensureThemeBox = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      if (!themeBox) {
        themeBox = newEl("div", {
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "60vh",
            minHeight: "480px",
            pointerEvents: "none",
            opacity: "0.6",
          },
        });
        document.body.prepend(themeBox);
      }

      const themeValues = Array.from(document.documentElement.classList)
        .filter((cls) => cls.startsWith("j-theme-"))
        .map((cls) => cls.replace("j-theme-", ""));

      if (themeValues.length) {
        const themeName = themeValues[0];
        themeBox.style.background = `linear-gradient(to bottom, var(--${themeName}-4), transparent)`;
      }
    } else {
      // 非 dark 直接移除元素
      if (themeBox && themeBox.parentNode) {
        themeBox.parentNode.removeChild(themeBox);
        themeBox = null;
      }
    }
  };

  // 初始化
  ensureThemeBox();

  // 监听 html.classList 的变化
  const localObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        ensureThemeBox();
      }
    }
  });

  localObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  themeBoxObserver = localObserver;
};
// __background()

const __toast = () => {
  if (!path.includes("toast.html") && !path.includes("dashboard.html")) return;

  on(q(".example-toast-info"), "click", () => {
    show(t("infoToastMessage"));
  });
  on(q(".example-toast-success"), "click", () => {
    success(t("successToastMessage"));
  });
  on(q(".example-toast-warning"), "click", () => {
    show(t("warningToastMessage"), 3000, "warning");
  });
  on(q(".example-toast-error"), "click", () => {
    error(t("errorToastMessage"));
  });
  on(q(".example-toast-lite"), "click", () => {
    lite(t("liteToastMessage"));
  });
};
__toast();

const __tabs = () => {
  const basicTabs = new tabs(q("#basic-tabs"), {
    onChange: (index, name, tabEl, panelEl) => {
      toast.info("Change to: " + "index " + index);
    },
  });
  const addTabBtn = q(".add-tab-btn");
  const removeTabBtn = q(".remove-tab-btn");
  const dynamicTabs = new tabs(false, {
    active: 0,
    disabled: ["tab-4"],
    tabs: [
      { title: t("monday"), content: t("MondayIsTheFirstDay"), name: "tab-1" },
      {
        title: t("tuesday"),
        content: t("TuesdayIsTheSecondDay"),
        name: "tab-2",
      },
      {
        title: t("wednesday"),
        content: t("WednesdayIsTheThirdDay"),
        name: "tab-3",
      },
      { title: t("disabledItem"), content: "disabled content", name: "tab-4" },
    ],
    onChange: (index, name) => {
      toast.info("Change to: " + "index " + index + ", name " + name);
    },
    onAdd: (index, tabConfig) => {
      success("Added tab at index: " + index + ", name " + tabConfig.name);
      if (dynamicTabs.tabs.length > 1) {
        removeTabBtn.disabled = false;
      }
    },
    onRemove: (index, tabName) => {
      error("Deleted tab at index: " + index + ", name " + tabName);
      if (dynamicTabs.tabs.length === 1) {
        removeTabBtn.disabled = true;
      }
    },
  });
  q("#dynamic-tabs").appendChild(dynamicTabs.root);
  on(addTabBtn, "click", () => {
    const num = dynamicTabs.tabs.length + 1;
    dynamicTabs.addTab({
      title: `新选项卡${num}`,
      content: `新选项卡${num}的内容`,
    });
  });
  on(removeTabBtn, "click", () => {
    dynamicTabs.deleteTab(dynamicTabs.tabs.length - 1);
  });
};
__tabs();

const __offcanvas = () => {
  const o1 = new offcanvas({
    overlay: true,
    content: '<h2 class="text-center">Slide Offcanvas</h2>',
  });
  on(q(".example-offcanvas-slide"), "click", () => {
    o1.show();
  });

  const o2 = new offcanvas({
    overlay: true,
    animation: "push",
    content: '<h2 class="text-center">Push Offcanvas</h2>',
  });
  on(q(".example-offcanvas-push"), "click", () => {
    o2.show();
  });

  const o3 = new offcanvas({
    overlay: true,
    direction: "top",
    content: '<h2 class="text-center">Top Offcanvas</h2>',
  });
  on(q(".example-offcanvas-top"), "click", () => {
    o3.show();
  });

  const o4 = new offcanvas({
    overlay: true,
    direction: "bottom",
    content: '<h2 class="text-center">Bottom Offcanvas</h2>',
  });
  on(q(".example-offcanvas-bottom"), "click", () => {
    o4.show();
  });

  const o5 = new offcanvas({
    overlay: true,
    animation: "push",
    direction: "right",
    content: '<h2 class="text-center">Right Offcanvas</h2>',
  });
  on(q(".example-offcanvas-right"), "click", () => {
    o5.show();
  });
};
__offcanvas();

const __accordion = () => {
  const ins = new accordion(false, {
    collapsible: true,
    items: [
      {
        title: t("firstItem"),
        content: t("firstItemContent"),
        name: "first-item",
      },
      {
        title: t("secondItem"),
        content: t("secondItemContent"),
        name: "second-item",
      },
      {
        title: t("thirdItem"),
        content: t("thirdItemContent"),
        name: "third-item",
      },
    ],
    onChange: (index, name, headerEl, panelEl) => {
      toast.lite(`${headerEl.textContent}`);
    },
  });
  q(".example-accordion").appendChild(ins.root);
};
__accordion();

const __drop = () => {
  const auto = new drop(q(".drop-auto"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: hover to show</h4>',
  });
  const click = new drop(q(".drop-click"), {
    content: '<h4 class="m-2">Drop: click to show</h4>',
  });
  const topLeft = new drop(q(".drop-top-left"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: top-left</h4>',
    position: "top-left",
  });
  const topCenter = new drop(q(".drop-top-center"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: top-center</h4>',
    position: "top-center",
  });
  const topRight = new drop(q(".drop-top-right"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: top-right</h4>',
    position: "top-right",
  });
  const bottomLeft = new drop(q(".drop-bottom-left"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: bottom-left</h4>',
    position: "bottom-left",
  });
  const bottomCenter = new drop(q(".drop-bottom-center"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: bottom-center</h4>',
    position: "bottom-center",
  });
  const bottomRight = new drop(q(".drop-bottom-right"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-2">Drop: bottom-right</h4>',
    position: "bottom-right",
  });
  const left = new drop(q(".drop-left"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-1">Drop: left</h4>',
    position: "left",
  });
  const right = new drop(q(".drop-right"), {
    mode: "hover",
    delay: 100,
    content: '<h4 class="m-1">Drop: right</h4>',
    position: "right",
  });
};
__drop();

const __tooltip = () => {
  const auto = new tooltip(q(".tooltip-auto"), {
    message: "Message",
  });
  const click = new tooltip(q(".tooltip-click"), {
    message: "Message",
    mode: "click",
  });
  const topLeft = new tooltip(q(".tooltip-top-left"), {
    message: "Message",
    position: "top-left",
  });
  const topCenter = new tooltip(q(".tooltip-top-center"), {
    message: "Message",
    position: "top-center",
  });
  const topRight = new tooltip(q(".tooltip-top-right"), {
    message: "Message",
    position: "top-right",
  });
  const bottomLeft = new tooltip(q(".tooltip-bottom-left"), {
    message: "Message",
    position: "bottom-left",
  });
  const bottomCenter = new tooltip(q(".tooltip-bottom-center"), {
    message: "Message",
    position: "bottom-center",
  });
  const bottomRight = new tooltip(q(".tooltip-bottom-right"), {
    message: "Message",
    position: "bottom-right",
  });
  const left = new tooltip(q(".tooltip-left"), {
    message: "Message",
    position: "left",
  });
  const right = new tooltip(q(".tooltip-right"), {
    message: "Message",
    position: "right",
  });
};
__tooltip();

/**
 * test: Parabola, validator
 */
const __parabola = () => {
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
  // on(window, 'unbeforeunload', ()=>{})
  const from2 = q("#from-point-2");
  const to2 = q("#end-point-2");
  on(from2, "click", () => {
    const ball = new parabola({
      from: from2,
      to: to2,
    });
    ball.start();
  });
};
__parabola();

const __form = () => {
  const form = q("form#form-validator");
  const test = new validator(form, {
    rules: {
      email: {
        required: true,
        email: true,
        minLength: 8,
        maxLength: 10,
        noChinese: true,
      },
      password: {
        required: true,
        minLength: 6,
        maxLength: 8,
        noSpace: true,
        noSpecial: true,
        pattern: /^[A-Z].*$/,
      },
      password_repeat: {
        required: true,
        equalTo: "password",
      },
      agreement: {
        checked: true,
      },
    },
    messages: {
      email: {
        required: t("emailRequired"),
        email: t("invalidEmail"),
        minLength: t("emailMinLength"),
        maxLength: t("emailMaxLength"),
        noChinese: t("noChinese"),
      },
      password: {
        required: t("passwordRequired"),
        minLength: t("passwordMinLength"),
        maxLength: t("passwordMaxLength"),
        noSpace: t("noSpace"),
        noSpecial: t("noSpecial"),
        pattern: t("FirstLetterCaps"),
      },
      password_repeat: {
        required: t("passwordRequired"),
        equalTo: t("equalToRequired"),
      },
      agreement: {
        checked: t("agreenmentRequired"),
      },
    },
  });
  on(form, "submit", (e) => {
    e.preventDefault();
    const result = test.validate();
    if (!result && test.message) {
      error(test.message);
    } else {
      success(t("formValidated"));
    }
  });
  on(form, "reset", (e) => {
    test.reset();
  });
};
__form();
