import {
  copy,
  manager as cm,
  accordion,
  drop,
  modal,
  toast,
  offcanvas,
  tooltip,
  tabs,
  parabola,
  newEl,
  validator,
  on,
  q,
  t as ts,
} from "./jui.module.js";
import locales from "./locales.js";
const { show, success, error, lite } = toast;
const t = (key) => {
  return ts(key, locales);
};

export const __colorSystem = () => {
  const palette = q(".color-palette");
  if (!palette) return;
  const colors = [
    "gray",
    "olive",
    "tomato",
    "red",
    "ruby",
    "pink",
    "violet",
    "indigo",
    "blue",
    "teal",
    "green",
    "grass",
    "gold",
    "orange",
    "amber",
    "yellow",
    "lime",
    "mint",
  ];
  const usage = [
    t("background"),
    t("background"),
    t("interactiveComponent"),
    t("interactiveComponent"),
    t("interactiveComponent"),
    t("borderAndSeparator"),
    t("borderAndSeparator"),
    t("borderAndFocusRingAndDisabledText"),
    t("solidBackgroundColorDisabledText"),
    t("solidBackgroundColorDisabledText"),
    t("secondaryTextAndLink"),
    t("highContrastText"),
  ];

  let currentModal = null;
  let currentTimer = null;

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < 13; j++) {
      const div = newEl("div", {
        className: "palette-block",
      });

      if (j === 0) {
        div.classList.add("palette-block-text");
        div.innerHTML = `<span>${t(colors[i])}</span>`;
      } else {
        div.classList.add("palette-block-item");
        div.style.background = `var(--${colors[i]}-${j})`;
        div.dataset.usage = usage[j - 1];

        on(div, "click", () => {
          let pairsWith = "";
          if (j === 1 || j === 2) {
            pairsWith = t("step11-12TextColor");
          } else if (j === 3) {
            pairsWith = t("step11labelsStep12TextColor");
          } else if (j === 4) {
            pairsWith = t("step11-12labelColors");
          } else if (j === 5) {
            pairsWith = t("step12labelColors");
          } else if (j === 6 || j === 7 || j === 8) {
            pairsWith = t("step1-5BackgroundColors");
          } else if (j === 9 || j === 10) {
            pairsWith = t("white");
          } else if (j === 11 || j === 12) {
            pairsWith = t("backgroundColors");
          }

          const modalContent = `
                        <div style="width:100%;min-width:300px;height:240px;background-color: var(--${
                          colors[i]
                        }-${j}); ${(j === 1) | (j === 2) ? "border: 1px solid var(--gray-a3);" : ""}" id="copyCssColor"></div>
                        <div>
                            <h3>${t(colors[i])}</h3>
                            <p>
                                <span style="width:120px;display:inline-block;">${t("variantCode")}</span>
                                <span>${colors[i]}-${j}</span>
                            </p>
                            <p style="margin:.5rem 0">
                                <span style="width:120px;display:inline-block;">${t("suggestedUsage")}</span>
                                <span>${usage[j - 1]}</span>
                            </p>
                            <p style="margin:.5rem 0">
                                <span style="width:120px;display:inline-block;">${t("suggestedPairsWith")}</span>
                                <span>${pairsWith}</span>
                            </p>
                            <p style="margin:.5rem 0">
                                <span style="width:120px;display:inline-block;">${t("colorValue")}</span>
                                <span>${getComputedStyle(div).backgroundColor}</span>
                            </p>
                            <p>
                                <span style="width:120px;display:inline-block;">css var</span>
                                <span>var(--${colors[i]}-${j})</span>
                            </p>
                        </div>
                        `;

          if (currentModal) {
            currentModal.destroy();
          }
          currentModal = new modal({
            content: modalContent,
            id: "colorPaletteModal",
            header: false,
            footer: false,
            bgClose: true,
            escClose: true,
            lazy: true,
            style:
              "width:95%;max-width:600px;min-width:310px;background-color:var(--white)",
            onShown: () => {
              const bg = q("#copyCssColor");
              if (bg) {
                currentTimer = setTimeout(() => {
                  copy(bg.style.backgroundColor);
                  success(t("ColorVarCopied"));
                }, 500);
              }
            },
            onHide: () => {
              if (currentTimer) {
                clearTimeout(currentTimer);
                currentTimer = null;
              }
            },
          });
          currentModal.show();
        });
      }
      palette.appendChild(div);
    }
  }
};

export const __modal = () => {
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

export const __toast = () => {
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

export const __offcanvas = () => {
  const o1 = new offcanvas({
    direction: "top",
    content: '<h2 class="text-center">Slide Offcanvas</h2>',
  });
  on(q(".example-offcanvas-slide"), "click", () => {
    o1.show();
  });

  const o2 = new offcanvas({
    direction: "top",
    animation: "push",
    content: '<h2 class="text-center">Push Offcanvas</h2>',
  });
  on(q(".example-offcanvas-push"), "click", () => {
    o2.show();
  });

  const o3 = new offcanvas({
    direction: "left",
    content: '<h2 class="text-center">Left Offcanvas</h2>',
  });
  on(q(".example-offcanvas-left"), "click", () => {
    o3.show();
  });

  const o4 = new offcanvas({
    direction: "bottom",
    content: '<h2 class="text-center">Bottom Offcanvas</h2>',
  });
  on(q(".example-offcanvas-bottom"), "click", () => {
    o4.show();
  });

  const o5 = new offcanvas({
    filter: false,
    direction: "right",
    content: '<h2 class="text-center">Right Offcanvas</h2>',
  });
  on(q(".example-offcanvas-right"), "click", () => {
    o5.show();
  });
};

export const __drop = () => {
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

export const __tooltip = () => {
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

export const __tabs = () => {
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
      toast.warning("Change to: " + "index " + index + ", name " + name);
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

export const __accordion = () => {
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

export const __parabola = () => {
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

export const __form = () => {
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

export const __content = () => {
  const radioGroup = q("#radio");
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
