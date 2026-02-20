// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import {
  __colorSystem,
  __modal,
  __toast,
  __offcanvas,
  __drop,
  __tooltip,
  __tabs,
  __accordion,
  __parabola,
  __form,
  __content,
  __mobileMenu,
} from "./old.js";
import "../../../node_modules/jealer-jui/dist/jui.min.css";
import "./style.css";
import { onMounted, onUnmounted, nextTick, watch } from "vue";
import { useRoute } from "vitepress";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const route = useRoute();

    const classesToAdd = [
      "j-theme-indigo",
      "j-radius-sm",
      "j-shadow-none",
      "j-font-sm",
    ];
    const colorPage = () => {
      if (!route.path.includes("color/palette")) return;
      nextTick(() => {
        __colorSystem();
      });
    };
    const modalPage = () => {
      if (!route.path.includes("components/modal")) return;
      nextTick(() => {
        __modal();
      });
    };
    const toastPage = () => {
      if (!route.path.includes("components/toast")) return;
      nextTick(() => {
        __toast();
      });
    };
    const offcanvasPage = () => {
      if (!route.path.includes("components/offcanvas")) return;
      nextTick(() => {
        __offcanvas();
      });
    };
    const dropPage = () => {
      if (!route.path.includes("components/drop")) return;
      nextTick(() => {
        __drop();
      });
    };
    const tooltipPage = () => {
      if (!route.path.includes("components/tooltip")) return;
      nextTick(() => {
        __tooltip();
      });
    };
    const tabsPage = () => {
      if (!route.path.includes("components/tabs")) return;
      nextTick(() => {
        __tabs();
      });
    };
    const accordionPage = () => {
      if (!route.path.includes("components/accordion")) return;
      nextTick(() => {
        __accordion();
      });
    };
    const parabolaPage = () => {
      if (!route.path.includes("components/parabola")) return;
      nextTick(() => {
        __parabola();
      });
    };
    const formPage = () => {
      if (!route.path.includes("components/validator")) return;
      nextTick(() => {
        __form();
      });
    };
    // const contentPage = () => {
    //   if (!route.path.includes('css/content')) return
    //    nextTick(() => {__content()})
    // }
    const menuPage = () => {
      if (!route.path.includes("components/menu")) return;
      nextTick(() => {
        __mobileMenu();
      });
    };

    onMounted(() => {
      document.documentElement.classList.add(...classesToAdd);
      colorPage();
      modalPage();
      toastPage();
      offcanvasPage();
      dropPage();
      tooltipPage();
      tabsPage();
      accordionPage();
      parabolaPage();
      formPage();
      // contentPage()
      menuPage();
    });

    onUnmounted(() => {
      document.documentElement.classList.remove(...classesToAdd);
    });

    watch(
      () => route.path,
      () => {
        colorPage();
        modalPage();
        toastPage();
        offcanvasPage();
        dropPage();
        tooltipPage();
        tabsPage();
        accordionPage();
        parabolaPage();
        formPage();
        // contentPage()
        menuPage();
      },
    );
  },
};
