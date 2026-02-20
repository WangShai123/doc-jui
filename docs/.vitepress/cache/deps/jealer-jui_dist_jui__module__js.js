// node_modules/jealer-jui/dist/jui.module.js
var t = Object.defineProperty;
var e = (e2, i2, s2) => ((e3, i3, s3) => i3 in e3 ? t(e3, i3, { enumerable: true, configurable: true, writable: true, value: s3 }) : e3[i3] = s3)(e2, "symbol" != typeof i2 ? i2 + "" : i2, s2);
var i = { info: '<path d="M12 22C6.47715 22 2 17.5228 2 12 2 6.47715 6.47715 2 12 2 17.5228 2 22 6.47715 22 12 22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12 20 7.58172 16.4183 4 12 4 7.58172 4 4 7.58172 4 12 4 16.4183 7.58172 20 12 20ZM13 10.5V15H14V17H10V15H11V12.5H10V10.5H13ZM13.5 8C13.5 8.82843 12.8284 9.5 12 9.5 11.1716 9.5 10.5 8.82843 10.5 8 10.5 7.17157 11.1716 6.5 12 6.5 12.8284 6.5 13.5 7.17157 13.5 8Z"></path>', success: '<path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path>', warning: '<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>', error: '<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>', "arrow-left": '<path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>', "arrow-down": '<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>' };
var s = /* @__PURE__ */ new Map();
var n = /* @__PURE__ */ new Map();
var o = {};
function r(t12) {
  if (!(t12 in i)) throw new Error(`Icon "${t12}" not found.`);
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">' + i[t12] + "</svg>";
}
function a(t12) {
  if ("object" != typeof t12 || null === t12) throw new Error("Icons must be a valid object.");
  for (const [e2, i2] of Object.entries(t12)) {
    if ("string" != typeof i2) throw new Error(`Invalid SVG path for icon "${e2}".`);
    svg[e2] = i2;
  }
}
var l = null;
var h = /* @__PURE__ */ new WeakMap();
var c = /* @__PURE__ */ new WeakMap();
function u(t12, e2) {
  let i2 = h.get(t12);
  i2 || (i2 = /* @__PURE__ */ new Map(), h.set(t12, i2));
  let s2 = i2.get(e2);
  s2 || (s2 = /* @__PURE__ */ new Set(), i2.set(e2, s2)), l && (s2.add(l), l.deps.push(s2));
}
function d(t12, e2) {
  const i2 = h.get(t12);
  if (!i2) return;
  const s2 = i2.get(e2);
  if (s2) {
    const t13 = new Set(s2);
    for (const e3 of t13) e3.scheduler ? e3.scheduler() : e3();
  }
}
function f(t12) {
  if ("object" != typeof t12 || null === t12) return t12;
  if (c.has(t12)) return c.get(t12);
  const e2 = new Proxy(t12, { get(t13, e3, i2) {
    const s2 = Reflect.get(t13, e3, i2);
    return u(t13, e3), "object" == typeof s2 && null !== s2 ? f(s2) : s2;
  }, set(t13, e3, i2, s2) {
    const n2 = t13[e3], o2 = Reflect.set(t13, e3, i2, s2);
    return n2 !== i2 && d(t13, e3), o2;
  } });
  return c.set(t12, e2), e2;
}
function m(t12) {
  const e2 = { i: t12, get value() {
    return u(e2, "value"), this.i;
  }, set value(t13) {
    t13 !== this.i && (this.i = t13, d(e2, "value"));
  } };
  return e2;
}
function p(t12, e2 = {}) {
  const i2 = (...e3) => {
    if (l !== i2) {
      !(function(t13) {
        for (const e4 of t13.deps) e4.delete(t13);
        t13.deps.length = 0;
      })(i2), l = i2;
      try {
        return t12(...e3);
      } finally {
        l = null;
      }
    }
  };
  return i2.deps = [], i2.scheduler = e2.scheduler, e2.lazy || i2(), i2;
}
function b(t12) {
  let e2, i2 = true;
  const s2 = { o: true, get value() {
    return u(s2, "value"), i2 && (e2 = t12(), i2 = false), e2;
  } };
  return p(() => {
    t12();
  }, { scheduler: () => {
    i2 || (i2 = true, d(s2, "value"));
  } }), s2;
}
var w = (t12) => null === t12 ? "null" : t12 instanceof HTMLElement ? "HTMLElement" : Array.isArray(t12) ? "array" : typeof t12;
var v = (t12) => "function" == typeof t12 && null !== t12.prototype && t12.prototype.constructor === t12;
var y = (t12, e2, i2, s2 = []) => {
  const n2 = Array.isArray(i2) ? i2 : [i2], o2 = Array.isArray(s2) ? s2 : s2 ? [s2] : [], r2 = w(e2);
  if (!n2.some((t13) => t13 === r2)) {
    const e3 = n2.join(", ");
    throw new Error(`Validator: ${t12} expects ${e3}, but got ${r2}.`);
  }
  for (const a2 of o2) {
    let i3, s3;
    if ("function" == typeof a2) i3 = a2, s3 = "does not satisfy the required condition.";
    else {
      if (!a2 || "function" != typeof a2.test) throw new Error("Validator: Condition must be a function or { test, message }.");
      i3 = a2.test, s3 = a2.message || "condition failed.";
    }
    if (!i3(e2)) throw new Error(`Validator: ${t12} ${s3}`);
  }
};
var g = (t12) => "function" == typeof t12 && /^class\s/.test(Function.prototype.toString.call(t12));
var k = (t12, e2 = [], i2 = "", o2 = false, r2 = null) => {
  if (!v(t12)) throw new Error("First argument expects a class/constructor function.");
  if (!Array.isArray(e2)) throw new Error("Second argument must be an array of arguments.");
  if ("string" != typeof i2) throw new Error("Third argument expects a string.");
  if ("boolean" != typeof o2) throw new Error("Fourth argument expects a boolean.");
  if ("number" != typeof r2 && null !== r2) throw new Error("Fifth argument expects a number or null.");
  const a2 = "" === i2.trim() ? N() : i2;
  if (s.has(a2) && !o2) return s.get(a2).proxy;
  const l2 = new t12(...e2), h2 = new Proxy(l2, { get: (t13, e3, i3) => (r2 && (function(t14, e4) {
    n.has(t14) && clearTimeout(n.get(t14));
    const i4 = setTimeout(() => {
      x(t14);
    }, e4);
    n.set(t14, i4);
  })(a2, r2), Reflect.get(t13, e3, i3)), set: (t13, e3, i3, s2) => Reflect.set(t13, e3, i3, s2) });
  return s.set(a2, { instance: l2, proxy: h2 }), h2;
};
function x(t12) {
  if (s.has(t12)) {
    const { instance: i2 } = s.get(t12);
    if ("function" == typeof i2.destroy) try {
      i2.destroy();
    } catch (e2) {
      throw new Error(`release(): destroy() failed on instance with key "${t12}".`);
    }
    s.delete(t12);
  }
  n.has(t12) && (clearTimeout(n.get(t12)), n.delete(t12));
}
function $() {
  for (const { instance: e2 } of s.values()) if ("function" == typeof e2.destroy) try {
    e2.destroy();
  } catch (t12) {
  }
  s.clear();
  for (const e2 of n.values()) clearTimeout(e2);
  n.clear();
}
var _ = { instances: /* @__PURE__ */ new Map(), get(t12, e2) {
  return this.instances.has(t12) || this.instances.set(t12, e2()), this.instances.get(t12);
}, destroy(t12) {
  if (this.instances.has(t12)) {
    const e2 = this.instances.get(t12);
    e2.destroy && e2.destroy(), this.instances.delete(t12);
  }
}, destroyAll() {
  for (const t12 of this.instances.values()) t12.destroy && t12.destroy();
  this.instances.clear();
} };
function E(t12) {
  o = t12;
}
function C() {
  return o;
}
function S() {
  const t12 = document.documentElement.getAttribute("lang");
  if (t12) {
    switch (t12.substring(0, 2).toLowerCase()) {
      case "en":
      default:
        return "en";
      case "zh":
        return "zh";
    }
  }
  return j();
}
function j() {
  return "undefined" == typeof navigator || navigator.language.toLowerCase().startsWith("en") ? "en" : "zh";
}
function T(t12, e2 = o, i2 = null) {
  var s2;
  return null === i2 && (i2 = S()), (null == (s2 = e2[i2]) ? void 0 : s2[t12]) || t12;
}
function M() {
  if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
  const t12 = new Uint8Array(16);
  if ("function" != typeof crypto.getRandomValues) throw new Error("Your browser is too old to support secure login.");
  crypto.getRandomValues(t12), t12[6] = 15 & t12[6] | 64, t12[8] = 63 & t12[8] | 128;
  const e2 = Array.from(t12).map((t13) => t13.toString(16).padStart(2, "0")).join("");
  return [e2.slice(0, 8), e2.slice(8, 12), e2.slice(12, 16), e2.slice(16, 20), e2.slice(20, 32)].join("-");
}
function N(t12 = 8) {
  if (!Number.isInteger(t12) || t12 < 1 || t12 > 32) throw new Error("Length must be an integer between 1 and 32");
  const e2 = new Uint8Array(t12);
  crypto.getRandomValues(e2);
  let i2 = "";
  for (let s2 = 0; s2 < t12; s2++) i2 += "abcdefghijkmnpqrstuvwxyz23456789"[31 & e2[s2]];
  return i2;
}
function A(t12) {
  const e2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(t12).replace(/[&<>"']/g, (t13) => e2[t13]);
}
function L() {
  if ("undefined" == typeof navigator) return false;
  if (navigator.userAgentData) return navigator.userAgentData.mobile;
  const t12 = navigator.userAgent;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(t12);
}
function I(t12) {
  const e2 = `; ${document.cookie}`.split(`; ${t12}=`);
  return 2 === e2.length ? e2.pop().split(";").shift() : null;
}
function H(t12, e2, i2 = 86400) {
  const s2 = new Date(Date.now() + 1e3 * i2).toUTCString();
  return document.cookie = [`${t12}=${e2}`, `expires=${s2}`, "path=/", "sameSite=strict"].join("; "), I(t12) === e2;
}
function O(t12) {
  return document.cookie = `${t12}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`, !I(t12);
}
async function D(t12, e2) {
  return (await fetch(t12, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e2) })).json();
}
async function P(t12) {
  return "undefined" == typeof window || "undefined" == typeof document ? Promise.resolve(false) : ("string" != typeof t12 && (t12 = String(t12)), navigator.clipboard && "function" == typeof navigator.clipboard.writeText ? navigator.clipboard.writeText(t12).then(() => true).catch(() => q(t12)) : Promise.resolve(q(t12)));
}
function q(t12) {
  let e2 = null;
  try {
    e2 = document.createElement("textarea"), e2.value = t12, e2.setAttribute("readonly", ""), e2.style.position = "absolute", e2.style.left = "-9999px", e2.style.opacity = "0", document.body.appendChild(e2), e2.select(), e2.setSelectionRange(0, t12.length);
    return !!document.execCommand("copy");
  } catch (i2) {
    return false;
  } finally {
    e2 && e2.parentNode && e2.parentNode.removeChild(e2);
  }
}
function F(t12, e2, i2, s2) {
  if (!t12) throw new Error("on(): element is required");
  t12.addEventListener(e2, i2, s2);
}
function R(t12, e2, i2, s2) {
  if (!t12) throw new Error("off(): element is required");
  t12.removeEventListener(e2, i2, s2);
}
function z(t12, e2 = document) {
  return e2.querySelector(t12);
}
function B(t12) {
  return t12 instanceof Element ? t12 : "string" == typeof t12 ? z(t12) : null;
}
function V(t12, e2 = {}) {
  if ("undefined" == typeof document) throw new Error("newEl() can only be used in browser environment.");
  if (false === e2.dependency || "function" == typeof e2.dependency && !e2.dependency()) return "";
  const { is: i2, className: s2, id: n2, attrs: o2, style: r2, events: a2, text: l2, html: h2, children: c2 } = e2, u2 = i2 ? document.createElement(t12, { is: i2 }) : document.createElement(t12);
  if (s2 && (u2.className = s2), n2 && (u2.id = n2), o2 && "object" == typeof o2) for (const [d2, f2] of Object.entries(o2)) null != f2 && u2.setAttribute(d2, String(f2));
  if (r2 && "object" == typeof r2) for (const [d2, f2] of Object.entries(r2)) null != f2 && (u2.style[d2] = f2);
  if (a2 && "object" == typeof a2) for (const [d2, f2] of Object.entries(a2)) "function" == typeof f2 && F(u2, d2, f2);
  return void 0 !== c2 ? Array.isArray(c2) ? u2.append(...c2) : "string" == typeof c2 ? u2.innerHTML = c2 : c2 instanceof Node && u2.appendChild(c2) : void 0 !== h2 ? u2.innerHTML = h2 : void 0 !== l2 && (u2.textContent = l2), u2;
}
function Z(t12, e2, i2 = {}) {
  const { threshold: s2 = 0.1, rootMargin: n2 = "0px", root: o2 = null, waitForDOM: r2 = true } = i2, a2 = { threshold: s2, rootMargin: n2, root: o2 };
  let l2 = null;
  if ("string" == typeof t12) l2 = document.querySelector(t12);
  else {
    if (!(t12 instanceof Element)) return void console.warn("lazyRender: target 必须是 CSS 选择器字符串或 DOM 元素");
    l2 = t12;
  }
  if (l2 && document.body.contains(l2)) return void U(l2, e2, a2);
  if (!r2) return void e2();
  const h2 = new MutationObserver((i3) => {
    let s3 = false;
    if ("string" == typeof t12) {
      const e3 = document.querySelector(t12);
      e3 && document.body.contains(e3) && (s3 = true, l2 = e3);
    } else document.body.contains(t12) && (s3 = true, l2 = t12);
    s3 && (h2.disconnect(), U(l2, e2, a2));
  });
  h2.observe(document.documentElement, { childList: true, subtree: true });
}
function U(t12, e2, i2) {
  if (!window.IntersectionObserver) return void e2();
  const s2 = new IntersectionObserver((i3) => {
    for (const n2 of i3) if (n2.isIntersecting) {
      s2.unobserve(t12), s2.disconnect(), e2();
      break;
    }
  }, i2);
  s2.observe(t12);
}
var J = "undefined" != typeof window ? `${window.location.origin}/wp-json/` : "";
function W(t12 = "info", ...e2) {
  "undefined" != typeof window && console[t12](...e2);
}
var G = class t2 {
  constructor() {
    this.bindings = /* @__PURE__ */ new Map(), this.instances = /* @__PURE__ */ new Map(), this.serviceData = /* @__PURE__ */ new Map();
  }
  static run() {
    return t2.l || (t2.l = new t2()), t2.l;
  }
  bind(t12, e2, i2 = {}) {
    var s2, n2, o2;
    if ("function" == typeof e2) {
      return /^[A-Z]/.test(e2.name) || e2.prototype && Object.getOwnPropertyNames(e2.prototype).length > 1 ? this.bindClass(t12, e2, null != (s2 = i2.singleton) && s2, null != (n2 = i2.deps) ? n2 : []) : this.bindFactory(t12, e2, null != (o2 = i2.singleton) && o2);
    }
    return this.bindValue(t12, e2);
  }
  bindClass(t12, e2, i2 = false, s2 = []) {
    if ("function" != typeof e2) throw new TypeError("bindClass expects a constructor, got " + typeof e2);
    return this.bindings.set(t12, { type: "class", Class: e2, singleton: i2, deps: Array.isArray(s2) ? s2 : [] }), this;
  }
  bindValue(t12, e2) {
    return this.bindings.set(t12, { type: "value", value: e2 }), this.instances.set(t12, e2), this;
  }
  bindFactory(t12, e2, i2 = false) {
    if ("function" != typeof e2) throw new TypeError("bindFactory expects a function, got " + typeof e2);
    return this.bindings.set(t12, { type: "factory", factory: e2, singleton: i2 }), this;
  }
  get(t12, ...e2) {
    const i2 = this.bindings.get(t12);
    if (!i2) throw new Error(`Service "${t12}" is not bound in the container.`);
    if ("value" === i2.type) return i2.value;
    if ("factory" === i2.type) {
      const s2 = i2.singleton && 0 === e2.length;
      if (s2 && this.instances.has(t12)) return this.instances.get(t12);
      const n2 = i2.factory(this, ...e2);
      return s2 && this.instances.set(t12, n2), n2;
    }
    if ("class" === i2.type) {
      const s2 = i2.singleton && 0 === e2.length;
      if (s2 && this.instances.has(t12)) return this.instances.get(t12);
      const n2 = [];
      for (const e3 of i2.deps) {
        if (!this.bindings.has(e3)) throw new Error(`Dependency "${e3}" required by "${t12}" is not bound in the container.`);
        n2.push(this.get(e3));
      }
      const o2 = [...n2, ...e2], r2 = new i2.Class(...o2);
      return s2 && this.instances.set(t12, r2), r2;
    }
    throw new Error(`Unknown binding type for service "${t12}".`);
  }
  has(t12) {
    return this.bindings.has(t12);
  }
  unbind(t12) {
    return !!this.bindings.has(t12) && (this.bindings.delete(t12), this.instances.delete(t12), this.serviceData.has(t12) && this.serviceData.delete(t12), true);
  }
  destroy(t12) {
    return !!this.instances.has(t12) && (this.instances.delete(t12), true);
  }
  destroyAll() {
    this.instances.clear();
  }
  reset() {
    this.bindings.clear(), this.instances.clear();
  }
  setData(t12, e2, i2) {
    if (!this.serviceData.has(t12)) throw new Error(`Service [${t12}] does not exist.`);
    this.serviceData.get(t12).set(e2, i2);
  }
  getData(t12, e2) {
    if (!this.serviceData.has(t12)) throw new Error(`Service [${t12}] does not exist.`);
    return this.serviceData.get(t12).get(e2);
  }
  hasData(t12, e2) {
    if (!this.serviceData.has(t12)) throw new Error(`Service [${t12}] does not exist.`);
    return this.serviceData.get(t12).has(e2);
  }
  removeData(t12, e2) {
    if (!this.serviceData.has(t12)) throw new Error(`Service [${t12}] does not exist.`);
    this.serviceData.get(t12).delete(e2);
  }
};
e(G, "_instance", null), e(G, "PARAM", /* @__PURE__ */ Symbol("PARAM"));
var X = G;
var Y = class {
  constructor(t12 = "localStorage") {
    this.driver = this.h(t12);
  }
  h(t12) {
    switch (t12) {
      case "cookie":
        return new K();
      case "localStorage":
        return "undefined" != typeof localStorage ? new Q() : (console.warn("localStorage not supported, falling back to cookie."), new K());
      case "indexedDB":
        return "undefined" != typeof indexedDB ? new tt() : (console.warn("indexedDB not supported, falling back to localStorage."), this.h("localStorage"));
      default:
        throw new Error(`Unsupported driver: ${t12}`);
    }
  }
  set(t12, e2, i2) {
    this.driver.setItem(t12, e2, i2);
  }
  get(t12) {
    return this.driver.getItem(t12);
  }
  remove(t12) {
    this.driver.removeItem(t12);
  }
  clear() {
    this.driver.clear();
  }
  has(t12) {
    return this.driver.hasItem(t12);
  }
};
var K = class {
  constructor() {
    this.options = {};
  }
  setOptions(t12) {
    this.options = { ...this.options, ...t12 };
  }
  setItem(t12, e2, i2) {
    let s2 = `${encodeURIComponent(t12)}=${encodeURIComponent(e2)}`;
    if (i2) {
      const t13 = /* @__PURE__ */ new Date();
      t13.setTime(t13.getTime() + 1e3 * i2), s2 += `; expires=${t13.toUTCString()}`;
    }
    for (const [n2, o2] of Object.entries(this.options)) true === o2 ? s2 += `; ${n2}` : false !== o2 && null != o2 && (s2 += `; ${n2}=${o2}`);
    document.cookie = s2;
  }
  getItem(t12) {
    const e2 = document.cookie.split(";");
    for (const i2 of e2) {
      const [e3, s2] = i2.trim().split("=");
      if (e3 === encodeURIComponent(t12)) return decodeURIComponent(s2);
    }
    return null;
  }
  removeItem(t12) {
    this.setItem(t12, "", -1);
  }
  clear() {
    const t12 = document.cookie.split(";");
    for (const e2 of t12) {
      const t13 = e2.split("=")[0].trim();
      this.removeItem(decodeURIComponent(t13));
    }
  }
  hasItem(t12) {
    return null !== this.getItem(t12);
  }
};
var Q = class {
  setItem(t12, e2) {
    localStorage.setItem(t12, JSON.stringify(e2));
  }
  getItem(t12) {
    const e2 = localStorage.getItem(t12);
    try {
      return JSON.parse(e2);
    } catch (i2) {
      return e2;
    }
  }
  removeItem(t12) {
    localStorage.removeItem(t12);
  }
  clear() {
    localStorage.clear();
  }
  hasItem(t12) {
    return null !== localStorage.getItem(t12);
  }
};
var tt = class {
  constructor() {
    this.options = { dbName: "StoreDB", version: 1, storeName: "data" }, this.db = null, this.u();
  }
  setOptions(t12) {
    this.options = { ...this.options, ...t12 }, this.db && (this.db.close(), this.u());
  }
  u() {
    const { dbName: t12, version: e2, storeName: i2 } = this.options, s2 = indexedDB.open(t12, e2);
    s2.onupgradeneeded = (t13) => {
      this.db = t13.target.result, this.db.objectStoreNames.contains(i2) || this.db.createObjectStore(i2, { keyPath: "key" });
    }, s2.onsuccess = (t13) => {
      this.db = t13.target.result;
    }, s2.onerror = (t13) => {
      console.error("Failed to open IndexedDB:", t13.target.error);
    };
  }
  m(t12, e2) {
    if (!this.db) throw new Error("IndexedDB is not initialized.");
    const { storeName: i2 } = this.options;
    e2(this.db.transaction([i2], t12).objectStore(i2));
  }
  setItem(t12, e2, i2) {
    const s2 = { key: t12, value: e2, expire: i2 ? Date.now() + 1e3 * i2 : null };
    this.m("readwrite", (t13) => {
      t13.put(s2);
    });
  }
  getItem(t12) {
    return new Promise((e2, i2) => {
      this.m("readonly", (s2) => {
        const n2 = s2.get(t12);
        n2.onsuccess = () => {
          const t13 = n2.result;
          t13 && (!t13.expire || t13.expire > Date.now()) ? e2(t13.value) : e2(null);
        }, n2.onerror = () => {
          i2(new Error("Failed to get item from IndexedDB."));
        };
      });
    });
  }
  removeItem(t12) {
    this.m("readwrite", (e2) => {
      e2.delete(t12);
    });
  }
  clear() {
    this.m("readwrite", (t12) => {
      t12.clear();
    });
  }
  hasItem(t12) {
    return new Promise((e2, i2) => {
      this.m("readonly", (s2) => {
        const n2 = s2.get(t12);
        n2.onsuccess = () => {
          e2(!!n2.result);
        }, n2.onerror = () => {
          i2(new Error("Failed to check item existence in IndexedDB."));
        };
      });
    });
  }
};
var et = null;
var it = null;
function st() {
  return it;
}
var nt = "undefined" != typeof window && window.__SIGNAL_DEVTOOLS__ || null;
function ot(t12, e2) {
  var i2;
  null == (i2 = null == nt ? void 0 : nt.emit) || i2.call(nt, t12, e2);
}
var rt = /* @__PURE__ */ new Set();
var at = /* @__PURE__ */ new Set();
var lt = /* @__PURE__ */ new Set();
var ht = false;
var ct = false;
var ut = false;
function dt(t12) {
  t12.disposed || (ct ? lt.add(t12) : (ut ? at.add(t12) : rt.add(t12), ht || (ht = true, queueMicrotask(ft))));
}
function ft() {
  let t12 = new Set(rt);
  for (rt.clear(); t12.size > 0; ) t12.forEach((t13) => {
    t13.disposed || t13.run();
  }), t12 = new Set(rt), rt.clear();
  ht = false;
}
function mt(t12) {
  if (ct) t12();
  else {
    ct = true;
    try {
      t12();
    } finally {
      ct = false;
      const t13 = new Set(lt);
      lt.clear(), t13.forEach(dt);
    }
  }
}
function pt(t12) {
  const e2 = ht;
  ht = false;
  try {
    t12(), ft();
  } finally {
    ht = e2;
  }
}
function bt(t12) {
  if (ut) t12();
  else {
    ut = true;
    try {
      t12();
    } finally {
      ut = false;
      const t13 = new Set(at);
      at.clear(), t13.forEach(dt);
    }
  }
}
function wt(t12, e2 = {}) {
  let i2 = t12;
  const s2 = /* @__PURE__ */ new Set(), n2 = e2.equals || Object.is;
  function o2() {
    return et && s2.add(et), i2;
  }
  return o2.peek = () => i2, [o2, function(t13) {
    if (n2(i2, t13)) return;
    const e3 = i2;
    i2 = t13, s2.forEach(dt), ot("signal:update", { prev: e3, next: t13 });
  }];
}
function vt(t12) {
  return t12;
}
function yt(t12, e2 = {}) {
  return Mt(t12, e2);
}
function gt(t12, e2 = {}) {
  var i2;
  const s2 = e2.priority || 0, n2 = { fn: t12, priority: s2, cleanups: [], disposed: false, run() {
    if (n2.disposed) return;
    kt(n2);
    const e3 = et, i3 = it;
    et = n2, it = n2, ot("effect:run", { effect: n2 });
    try {
      t12();
    } catch (s3) {
      throw ot("effect:error", { effect: n2, error: s3 }), s3;
    } finally {
      et = e3, it = i3;
    }
  } };
  return null == (i2 = null == it ? void 0 : it.cleanups) || i2.push(() => (function(t13) {
    if (t13.disposed) return;
    t13.disposed = true, kt(t13), ot("effect:dispose", { effect: t13 });
  })(n2)), n2.run(), n2;
}
function kt(t12) {
  t12.cleanups.forEach((e2) => {
    try {
      e2();
    } catch (i2) {
      ot("cleanup:error", { effect: t12, error: i2 }), console.error("Cleanup error:", i2);
    }
  }), t12.cleanups.length = 0;
}
function xt(t12) {
  var e2;
  null == (e2 = null == it ? void 0 : it.cleanups) || e2.push(t12);
}
function $t(t12) {
  xt(t12);
}
function _t(t12) {
  it && queueMicrotask(t12);
}
function Et(t12) {
  const e2 = { cleanups: [] }, i2 = it;
  it = e2;
  try {
    t12();
  } catch (s2) {
    throw ot("scope:error", { scope: e2, error: s2 }), s2;
  } finally {
    it = i2;
  }
  return { dispose() {
    e2.cleanups.forEach((t13) => {
      try {
        t13();
      } catch (s2) {
        console.error("Scope cleanup error:", s2);
      }
    }), e2.cleanups.length = 0;
  } };
}
function Ct(t12) {
  return Et(t12);
}
function St(t12) {
  const e2 = et;
  et = null;
  try {
    return t12();
  } finally {
    et = e2;
  }
}
function jt(t12, e2) {
  const [i2, s2] = wt(null);
  let n2 = null;
  function o2() {
    n2 = Et(() => {
      try {
        t12();
      } catch (e3) {
        s2(e3), ot("error-boundary:catch", { error: e3 });
      }
    });
  }
  return o2(), { error: i2, hasError: () => null !== i2(), reset() {
    n2 && n2.dispose(), s2(null), o2();
  }, dispose() {
    n2 && n2.dispose(), s2(null), n2 = null;
  } };
}
function Tt(t12, e2) {
  try {
    return t12();
  } catch (i2) {
    return ot("catch-error", { error: i2 }), "function" == typeof e2 ? e2(i2) : e2;
  }
}
function Mt(t12, e2 = {}) {
  const i2 = e2.equals || Object.is;
  let s2, n2 = false, o2 = false;
  const [r2, a2] = wt(void 0);
  return gt(() => {
    if (o2) throw new Error("Circular dependency detected in createMemo");
    o2 = true;
    try {
      const e3 = t12();
      n2 ? i2(s2, e3) || (s2 = e3, a2(e3)) : (n2 = true, s2 = e3, a2(e3));
    } finally {
      o2 = false;
    }
  }), r2;
}
function Nt(t12, e2, i2 = {}) {
  const s2 = Array.isArray(t12) ? t12 : [t12];
  let n2, o2 = false;
  gt(() => {
    const t13 = s2.map((t14) => t14());
    o2 || (o2 = true, !i2.defer) ? (e2(1 === s2.length ? t13[0] : t13, n2), n2 = t13) : n2 = t13;
  });
}
var At = /* @__PURE__ */ new WeakMap();
var Lt = /* @__PURE__ */ new WeakMap();
function It(t12) {
  if (Lt.has(t12)) return Lt.get(t12);
  function e2(t13, e3) {
    let i3 = At.get(t13);
    return i3 || (i3 = /* @__PURE__ */ new Map(), At.set(t13, i3)), i3.has(e3) || i3.set(e3, wt(t13[e3])), i3.get(e3);
  }
  const i2 = new Proxy(t12, { get(t13, i3) {
    if ("symbol" == typeof i3) return t13[i3];
    const [s2] = e2(t13, i3);
    return s2();
  }, set(t13, i3, s2) {
    t13[i3] = s2;
    const [, n2] = e2(t13, i3);
    return n2(s2), true;
  }, deleteProperty(t13, e3) {
    var i3, s2;
    return null == (s2 = null == (i3 = At.get(t13)) ? void 0 : i3.get(e3)) || s2[1](void 0), delete t13[e3];
  } });
  return Lt.set(t12, i2), i2;
}
var Ht = /* @__PURE__ */ new WeakMap();
function Ot(t12) {
  return "object" != typeof t12 || null === t12 ? t12 : Array.isArray(t12) ? (function(t13) {
    if (Ht.has(t13)) return Ht.get(t13);
    const e2 = It(t13);
    let i2 = null, s2 = 0;
    const n2 = new Proxy(e2, { get(t14, e3) {
      const n3 = t14[e3];
      if ("function" == typeof n3) {
        return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse", "fill", "copyWithin"].includes(e3) ? function(...o2) {
          const r2 = t14.length, a2 = n3.apply(t14, o2), l2 = t14.length;
          return mt(() => {
            if (r2 !== l2) {
              const e4 = At.get(t14);
              if (e4 && e4.has("length")) {
                const [, t15] = e4.get("length");
                t15(l2);
              }
            }
            if (["sort", "reverse", "fill", "copyWithin"].includes(e3)) {
              i2 || (i2 = wt(0));
              const [, t15] = i2;
              t15(++s2);
            }
          }), a2;
        } : n3.bind(t14);
      }
      return "__version__" === e3 && i2 ? i2[0]() : "object" == typeof n3 && null !== n3 ? Ot(n3) : n3;
    }, set(t14, i3, s3) {
      if ("string" == typeof i3 && /^\d+$/.test(i3)) {
        if (parseInt(i3, 10) >= t14.length) {
          const e3 = At.get(t14);
          if (e3 && e3.has("length")) {
            const [, n3] = e3.get("length");
            return t14[i3] = s3, n3(t14.length), true;
          }
        }
      }
      return e2[i3] = s3, true;
    } });
    return Ht.set(t13, n2), n2;
  })(t12) : (function(t13) {
    if (Ht.has(t13)) return Ht.get(t13);
    const e2 = It(t13), i2 = new Proxy(e2, { get(t14, e3) {
      const i3 = t14[e3];
      return "object" == typeof i3 && null !== i3 ? Ot(i3) : i3;
    } });
    return Ht.set(t13, i2), i2;
  })(t12);
}
function Dt(t12, e2 = {}) {
  const i2 = It({ loading: true, error: null, data: null, isStale: false });
  let s2, n2 = 0, o2 = null;
  function r2(r3, a2 = false) {
    const l2 = ++n2;
    o2 && (clearTimeout(o2), o2 = null);
    if (null === i2.data && null === i2.error || a2) {
      const t13 = e2.loadingDelay || 0;
      t13 > 0 ? o2 = setTimeout(() => {
        l2 === n2 && (i2.loading = true);
      }, t13) : i2.loading = true;
    } else i2.isStale = true;
    return i2.error = null, s2 = Promise.resolve(t12(r3)).then((t13) => {
      if (l2 === n2) return i2.data = t13, i2.loading = false, i2.isStale = false, o2 && (clearTimeout(o2), o2 = null), t13;
      throw new Error("Stale fetch response ignored");
    }).catch((t13) => {
      throw l2 === n2 && (i2.error = t13, i2.loading = false, i2.isStale = false, o2 && (clearTimeout(o2), o2 = null)), t13;
    }), s2;
  }
  if (e2.source) {
    let t13 = true;
    gt(() => {
      const i3 = e2.source();
      t13 ? (t13 = false, r2(i3)) : bt(() => {
        r2(i3);
      });
    });
  } else r2();
  return [function() {
    if (i2.loading && !i2.data) throw s2;
    if (i2.error) throw i2.error;
    return i2.data;
  }, { state: i2, reload: () => {
    var t13;
    return r2(null == (t13 = e2.source) ? void 0 : t13.call(e2), true);
  }, refetch: () => {
    var t13;
    return r2(null == (t13 = e2.source) ? void 0 : t13.call(e2), false);
  } }];
}
function Pt(t12, e2) {
  try {
    return t12();
  } catch (i2) {
    if (i2 instanceof Promise) return i2.then(() => dt({ run: t12, disposed: false })), e2;
    throw i2;
  }
}
function qt(t12, e2) {
  gt(() => {
    t12.textContent = e2();
  });
}
function Ft(t12, e2, i2) {
  gt(() => {
    const s2 = i2();
    null == s2 ? t12.removeAttribute(e2) : t12.setAttribute(e2, s2);
  });
}
function Rt(t12, e2, i2) {
  gt(() => {
    t12.style[e2] = i2();
  });
}
function zt(t12, e2) {
  gt(() => {
    t12.style.display = e2() ? "" : "none";
  });
}
function Bt(t12, e2, i2) {
  let s2 = null;
  gt(() => {
    e2() ? s2 || (s2 = i2(), t12.after(s2)) : (null == s2 || s2.remove(), s2 = null);
  });
}
function Vt(t12, e2, i2, s2 = {}) {
  const n2 = s2.key || ((t13, e3) => e3);
  let o2 = [];
  gt(() => {
    const s3 = e2(), r2 = [], a2 = new Map(o2.map((t13) => [t13.key, t13])), l2 = /* @__PURE__ */ new Set();
    s3.forEach((e3, s4) => {
      const o3 = n2(e3, s4);
      l2.has(o3) && console.warn(`[bindList] Duplicate key detected: "${o3}". This may cause rendering issues. Please provide a unique key function via options.key`), l2.add(o3);
      let h2 = a2.get(o3);
      if (h2) h2.setIndex(s4), a2.delete(o3);
      else {
        const [n3, r3] = wt(s4), a3 = i2(e3, n3);
        h2 = { key: o3, item: e3, index: n3, setIndex: r3, node: a3 }, t12.before(a3);
      }
      r2.push(h2);
    }), a2.forEach((t13) => t13.node.remove()), o2 = r2;
  });
}
function Zt(t12) {
  return (e2, i2) => e2[t12];
}
function Ut(...t12) {
  return (e2, i2) => t12.map((t13) => e2[t13]).join("_");
}
function Jt() {
  return (t12, e2) => e2;
}
function Wt() {
  return (t12, e2) => t12;
}
var Gt = class t3 {
  constructor(e2) {
    this.options = Object.assign({ title: "Tip", content: "", position: "center", confirmText: "Confirm", cancelText: "Cancel", showCancel: true, showClose: true, fullscreen: false, onShow: null, onShown: null, onHide: null, onHidden: null, onConfirm: null, onSubmit: null, fields: null, header: true, footer: true, style: null, id: null, escClose: false, bgClose: false, lazy: false }, e2), this.p(this.options), this.u(this.options), t3.instances.add(this);
  }
  u(t12) {
    this.isVisible = false, this.fields = null, this.v = {}, this.root = null, this.$ = null, this._ = t12.fields ? JSON.parse(JSON.stringify(t12.fields)) : [], t12.lazy || this.C(t12);
  }
  get modal() {
    return this.root ? z(".j-modal", this.root) : null;
  }
  get form() {
    return this.modal ? z(".j-form", this.modal) : null;
  }
  get confirmBtn() {
    return this.modal ? z(".modal-confirm", this.modal) : null;
  }
  get cancelBtn() {
    return this.modal ? z(".modal-cancel", this.modal) : null;
  }
  C(t12) {
    if (this.root) return;
    const { header: e2, id: i2, title: s2, position: n2 } = t12, o2 = e2 ? "aria-labelledby" : "aria-label", r2 = e2 ? `${i2}_title` : s2 || "Modal", a2 = V("div", { className: `j-popup-layout is-${n2}`, attrs: { role: "dialog", "aria-modal": "true", [o2]: r2 }, children: [this.S(t12)] });
    return this.root = a2, a2;
  }
  S(t12) {
    const { fullscreen: e2, style: i2, id: s2 } = t12;
    return V("div", { className: e2 ? "j-modal is-fullscreen" : "j-modal", id: s2, attrs: { role: "document", style: i2 || null }, children: [this.j(t12), this.T(t12), this.M(t12)] });
  }
  j(t12) {
    const { id: e2, title: i2, header: s2, showClose: n2 } = t12;
    return V("div", { className: "modal-header", html: `<div class="modal-title" id="${e2}_title">${i2}</div>${n2 ? '<button class="is-reset modal-close" data-action="close" aria-label="close">×</button>' : ""}`, dependency: () => s2 });
  }
  M(t12) {
    const { showCancel: e2, cancelText: i2, confirmText: s2, footer: n2 } = t12;
    return V("div", { className: "modal-footer", html: `${e2 ? `<button type="button" class="j-button is-ghost modal-cancel" data-action="close" aria-label="close">${i2}</button>` : ""}<button type="button" class="j-button is-primary modal-confirm" data-action="confirm">${s2}</button>`, dependency: () => n2 });
  }
  T(t12) {
    const { fields: e2, content: i2 } = t12;
    return V("div", { className: "modal-body", html: `${e2 ? `<div class="modal-form-container">${this.N(t12).outerHTML}</div>` : i2}` });
  }
  N(t12) {
    return V("form", { className: "j-form is-vertical is-item-vertical", children: [...this.A(t12.fields)] });
  }
  A(t12) {
    const e2 = [];
    for (const i2 of t12) {
      const t13 = V("div", { className: "form-item", html: this.L(i2) });
      e2.push(t13);
    }
    return e2;
  }
  L(t12) {
    switch (t12.type) {
      case "textarea":
        return this.I(t12);
      case "select":
        return this.H(t12);
      default:
        return this.O(t12);
    }
  }
  O(t12) {
    let e2 = "";
    const { type: i2, required: s2, id: n2, label: o2, name: r2, placeholder: a2, value: l2, disabled: h2 } = t12, c2 = n2 || N();
    switch (i2) {
      case "password":
        e2 = "current-password";
        break;
      case "email":
        e2 = "email";
        break;
      default:
        e2 = "on";
    }
    return `<label class="item-label ${s2 ? "is-required" : ""}" for="${c2}">${o2}</label><div class="form-control"><input type="${i2 || "text"}" class="j-input" name="${r2}" id="${c2}" placeholder="${a2 || ""}" value="${l2 || ""}" ${s2 ? "required" : ""} ${h2 ? "disabled" : ""} autocomplete="${e2}"/></div>`;
  }
  I(t12) {
    const { required: e2, id: i2, label: s2, name: n2, placeholder: o2, value: r2, disabled: a2 } = t12, l2 = i2 || N();
    return `<label class="item-label ${e2 ? "is-required" : ""}" for="${l2}">${s2}</label><div class="form-control"><textarea class="j-textarea" name="${n2}" id="${l2}" placeholder="${o2 || ""}" ${e2 ? "required" : ""} ${a2 ? "disabled" : ""}>${r2 || ""}</textarea></div>`;
  }
  H(t12) {
    let e2 = "";
    const { options: i2, required: s2, id: n2, label: o2, name: r2, disabled: a2 } = t12, l2 = n2 || N();
    if (i2) for (const h2 of i2) e2 += `<option value="${h2.value}" ${h2.selected ? "selected" : ""} ${h2.disabled ? "disabled" : ""}>${h2.text}</option>`;
    return `<label class="item-label ${s2 ? "is-required" : ""}" for="${l2}">${o2}</label><div class="form-control"><select class="j-select" name="${r2}" id="${l2}" autocomplete="off" ${s2 ? "required" : ""} ${a2 ? "disabled" : ""}>${e2}</select></div>`;
  }
  p(t12) {
    const { title: e2, content: i2, position: s2, confirmText: n2, cancelText: o2, showCancel: r2, showClose: a2, fullscreen: l2, header: h2, footer: c2, escClose: u2, bgClose: d2, style: f2, id: m2, onShow: p2, onShown: b2, onHide: w2, onHidden: v2, onConfirm: g2, onSubmit: k2, fields: x2, lazy: $2 } = t12;
    y("title", e2, "string"), y("content", i2, ["string", "HTMLElement"]), y("position", s2, "string"), y("confirmText", n2, "string"), y("cancelText", o2, "string"), y("showCancel", r2, "boolean"), y("showClose", a2, "boolean"), y("fullscreen", l2, "boolean"), y("header", h2, "boolean"), y("footer", c2, "boolean"), y("escClose", u2, "boolean"), y("bgClose", d2, "boolean"), y("style", f2, ["string", "null"]), y("id", m2, ["string", "null"]), y("onShow", p2, ["function", "null"]), y("onShown", b2, ["function", "null"]), y("onHide", w2, ["function", "null"]), y("onHidden", v2, ["function", "null"]), y("onConfirm", g2, ["function", "null"]), y("onSubmit", k2, ["function", "null"]), y("fields", x2, ["array", "null"]), y("lazy", $2, "boolean"), m2 && m2.trim() || (this.options.id = N());
  }
  D(t12) {
    if (!(t12 instanceof Element)) return;
    const e2 = z(".modal-close", t12);
    e2 && (e2.style.transform = `translateX(${e2.clientHeight / 3}px)`);
  }
  P(t12, e2) {
    this.q(t12, e2), this.F(t12, e2), this.R(e2);
  }
  q(t12, e2) {
    t12 && e2.bgClose && (this.v.bg = (e3) => {
      e3.target === t12 && this.hide();
    }, F(t12, "click", this.v.bg));
  }
  F(t12, e2) {
    t12 && e2.escClose && (this.v.esc = (t13) => {
      "Escape" === t13.key && this.isVisible && this.hide();
    }, F(document, "keydown", this.v.esc));
  }
  R(t12) {
    this.v.inside = (e2) => {
      const i2 = e2.target.dataset.action;
      "confirm" === i2 || "submit" === i2 ? this.B(t12) : ("cancel" === i2 || "close" === i2 || e2.target.classList.contains("modal-close")) && this.hide();
    }, this.modal.addEventListener("click", this.v.inside);
  }
  B(t12) {
    if (this.form && t12.fields.length > 0) {
      this.form.dispatchEvent(new Event("submit"));
      const e2 = new FormData(this.form), i2 = {};
      for (const [t13, s2] of e2.entries()) i2[t13] = s2;
      this.fields = i2, null !== this.$ && "object" == typeof this.$ && this.fields && (this.fields = Object.assign(this.fields, this.$)), this.V(t12, this.fields);
    } else this.Z(t12);
  }
  U() {
    this.form && this._ && (z(".modal-form-container", this.modal).innerHTML = this.N({ fields: this._ }).outerHTML);
  }
  async Z(t12) {
    t12.onConfirm && await Promise.resolve(t12.onConfirm()), this.hide();
  }
  async V(t12, e2) {
    t12.onSubmit && (await Promise.resolve(this.options.onSubmit(e2)), this.$ = null);
  }
  J() {
    const t12 = [{ k: "esc", t: document, e: "keydown" }, { k: "bg", t: this.root, e: "click" }, { k: "inside", t: this.modal, e: "click" }];
    for (const { k: e2, t: i2, e: s2 } of t12) this.v[e2] && (R(i2, s2, this.v[e2]), delete this.v[e2]);
  }
  show() {
    if (!t3.instances.has(this)) throw new Error("Modal: The current instance has been destroyed.");
    if (this.isVisible) return;
    const { lazy: e2, onShow: i2, onShown: s2 } = this.options;
    e2 && !this.root && this.C(this.options), i2 && i2(), document.body.appendChild(this.root), document.body.style.overflow = "hidden", this.D(this.modal), this.isVisible = true, this.P(this.root, this.options);
    const n2 = z('input, select, textarea, [tabindex]:not([tabindex="-1"])', this.modal);
    n2 && n2.focus(), s2 && s2();
  }
  hide() {
    if (!this.isVisible || !this.root) return;
    const { onHide: t12, onHidden: e2 } = this.options;
    t12 && t12();
    this.modal.style.transition = "opacity 0.3s ease, transform 0.3s ease", this.modal.style.opacity = "0", this.modal.style.transform = "scale(0)", this.isVisible = false, this.$ = null, this.fields = null, this.U(), setTimeout(() => {
      this.root.parentNode.removeChild(this.root), document.body.style.overflow = "", this.modal.style.cssText = "", this.J(), e2 && e2();
    }, 300);
  }
  setFields(t12) {
    if (this.form) for (const e2 of Object.keys(t12)) {
      const i2 = z(`[name="${e2}"]`, this.form);
      i2 && ("checkbox" === i2.type || "radio" === i2.type ? i2.checked = t12[e2] : i2.value = t12[e2]);
    }
  }
  addFields(t12) {
    if ("object" != typeof t12) throw new Error("Modal: The data expects an object");
    this.$ = t12;
  }
  setContent(t12) {
    if (!this.modal) return;
    if (this.options.fields) throw new Error("Modal.setContent: Cannot setContent when fields are defined.");
    const e2 = z(".modal-body", this.modal);
    e2 && ("string" == typeof t12 ? e2.innerHTML = t12 : t12 instanceof HTMLElement && (e2.innerHTML = "", e2.appendChild(t12)), this.options.content = t12);
  }
  showLoading() {
    if (z(".j-loading", this.modal)) return;
    const t12 = V("div", { className: "j-loading is-active", html: '<div class="loading-spinner"></div>' });
    this.modal.insertAdjacentHTML("beforeend", t12.outerHTML), this.confirmBtn && (this.confirmBtn.disabled = true), this.cancelBtn && (this.cancelBtn.disabled = true);
  }
  hideLoading() {
    const t12 = z(".j-loading", this.modal);
    t12 && (t12.parentNode && t12.parentNode.removeChild(t12), this.confirmBtn && (this.confirmBtn.disabled = false), this.cancelBtn && (this.cancelBtn.disabled = false));
  }
  destroy() {
    this.isVisible ? this.hide() : this.root && this.root.parentNode && (this.root.parentNode.removeChild(this.root), document.body.style.overflow = "", this.modal.style.cssText = ""), this.J(), this.root = null, this.fields = null, this.$ = null, this.v = {}, this.options = null, this.isVisible = null, t3.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t3.instances)) e2.destroy();
    t3.instances.clear();
  }
};
e(Gt, "instances", /* @__PURE__ */ new Set());
var Xt = Gt;
var Yt = class _Yt {
  W() {
  }
  static show(t12 = "", e2 = 3e3, i2 = "info") {
    _Yt.G(t12, e2, i2);
    let s2 = document.querySelector(".j-toast-container");
    s2 || (s2 = V("div", { className: "j-toast-container" }), document.body.appendChild(s2));
    const n2 = r(i2), o2 = V("div", { className: `j-toast is-${i2}`, attrs: { "data-toast": N() }, html: `<span class="toast-icon">${n2}</span>
        <span class="toast-message">${t12}</span>` });
    return s2.appendChild(o2), setTimeout(() => {
      o2.classList.add("toast-show");
    }, 10), e2 > 0 && setTimeout(() => {
      _Yt.hide(o2);
    }, e2), F(o2, "click", () => {
      _Yt.hide(o2);
    }), o2;
  }
  static success(t12 = "", e2 = 3e3) {
    return _Yt.show(t12, e2, "success");
  }
  static info(t12 = "", e2 = 3e3) {
    return _Yt.show(t12, e2, "info");
  }
  static warning(t12 = "", e2 = 3e3) {
    return _Yt.show(t12, e2, "warning");
  }
  static error(t12 = "", e2 = 3e3) {
    return _Yt.show(t12, e2, "error");
  }
  static hide(t12) {
    t12 && (t12.classList.remove("toast-show"), t12.classList.add("toast-hide"), setTimeout(() => {
      t12.parentNode && t12.parentNode.removeChild(t12);
      const e2 = document.querySelector(".j-toast-container");
      e2 && 0 === e2.children.length && e2.parentNode.removeChild(e2);
    }, 300));
  }
  static lite(t12 = "", e2 = 2e3) {
    if ("string" != typeof t12) throw new Error("Lite toast message expects a string");
    if ("number" != typeof e2 || e2 <= 0) throw new Error("Lite toast duration expects a number greater than 0");
    const i2 = document.querySelector(".j-toast-lite");
    i2 && i2.remove();
    const s2 = V("div", { className: "j-toast-lite", text: t12 });
    return document.body.appendChild(s2), setTimeout(() => s2.classList.add("is-shown"), 10), setTimeout(() => {
      s2.classList.remove("is-shown"), s2.classList.add("is-hidden"), setTimeout(() => s2.remove(), 300);
    }, e2), s2;
  }
  static G(t12, e2, i2) {
    if ("string" != typeof t12) throw new Error("Toast message expects a string");
    if ("number" != typeof e2 || e2 <= 0) throw new Error("Toast duration expects a positive number or 0.");
    if (!["info", "success", "warning", "error"].includes(i2)) throw new Error("Toast type expects one of [info, success, warning, error]");
  }
};
var Kt = class t4 {
  constructor(t12) {
    this.options = Object.assign({ content: "", overlay: true, filter: true, direction: "left", animation: "slide", bgClose: true, escClose: true, id: null, onShow: null, onShown: null, onHide: null, onHidden: null }, t12), this.X(this.options), this.u(this.options);
  }
  X(t12) {
    const { content: e2, overlay: i2, filter: s2, direction: n2, animation: o2, bgClose: r2, escClose: a2, id: l2, onShow: h2, onShown: c2, onHide: u2, onHidden: d2 } = t12;
    y("content", e2, ["string", "HTMLElement"]), y("overlay", i2, "boolean"), y("filter", s2, "boolean"), y("direction", n2, "string", [{ test: (t13) => ["top", "right", "bottom", "left"].includes(t13), message: "expects one of [top, right, bottom, left]" }]), y("animation", o2, "string", [{ test: (t13) => ["slide", "push", "none"].includes(t13), message: "expects one of [slide, push, none]" }]), y("bgClose", r2, "boolean"), y("escClose", a2, "boolean"), y("id", l2, ["string", "null"]), y("onShow", h2, ["function", "null"]), y("onShown", c2, ["function", "null"]), y("onHide", u2, ["function", "null"]), y("onHidden", d2, ["function", "null"]), l2 && l2.trim() || (this.options.id = N());
  }
  u(t12) {
    this.isVisible = false, t12.overlay && (this.Y = this.K(t12)), this.root = this.C(t12), this.v = {};
  }
  tt(t12) {
    "Escape" === t12.key && this.isVisible && this.hide();
  }
  P() {
    const { bgClose: t12, escClose: e2 } = this.options;
    this.v = { overlay: this.hide.bind(this), esc: (t13) => this.tt(t13), close: (t13) => {
      const e3 = t13.target.dataset.action;
      "close" !== e3 && "cancel" !== e3 || this.hide();
    } }, this.Y && t12 && F(this.Y, "click", this.v.overlay), e2 && F(document, "keydown", this.v.esc), F(this.root, "click", this.v.close);
  }
  et() {
    this.Y && this.v.overlay && (R(this.Y, "click", this.v.overlay), delete this.v.overlay), this.v.esc && (R(document, "keydown", this.v.esc), delete this.v.esc), this.v.close && (R(this.root, "click", this.v.close), delete this.v.close);
  }
  K(t12) {
    const e2 = t12.filter, i2 = e2 ? "backdropFilter" : "", s2 = e2 ? "blur(2px)" : "";
    return V("div", { className: "j-offcanvas-overlay", style: { [i2]: s2 } });
  }
  C(t12) {
    const { id: e2, direction: i2, animation: s2, content: n2 } = t12;
    return V("div", { className: `j-offcanvas ${i2 ? `is-${i2}` : ""} ${s2 ? `is-${s2}` : ""}`, id: e2, children: V("div", { className: "offcanvas-content", children: n2 }) });
  }
  it() {
    const { overlay: t12, animation: e2, direction: i2 } = this.options;
    if (t12 && document.body.appendChild(this.Y), document.body.appendChild(this.root), document.body.style.overflow = "hidden", "push" === e2) {
      document.body.classList.add("offcanvas-push-body");
      const t13 = window.scrollY;
      this.Y.style.top = `${t13}px`, this.root.style.top = `${t13}px`;
    }
    setTimeout(() => {
      this.Y && this.Y.classList.add("is-active"), "push" === e2 && document.body.classList.add(`offcanvas-push-${i2}`), this.root.classList.add("is-active");
    }, 10);
  }
  st() {
    const { animation: t12, direction: e2 } = this.options;
    this.Y && this.Y.classList.remove("is-active"), this.root.classList.remove("is-active"), "push" === t12 && document.body.classList.remove(`offcanvas-push-${e2}`), setTimeout(() => {
      this.Y && this.Y.parentNode && this.Y.parentNode.removeChild(this.Y), this.root && this.root.parentNode && this.root.parentNode.removeChild(this.root), "push" === t12 && document.body.classList.remove("offcanvas-push-body"), document.body.style.overflow = "";
    }, 100);
  }
  async show() {
    const { onShow: t12, onShown: e2 } = this.options;
    this.isVisible || (t12 && await Promise.resolve(t12()), this.it(), this.P(), this.isVisible = true, setTimeout(() => {
      e2 && e2();
    }, 100));
  }
  async hide() {
    const { onHide: t12, onHidden: e2 } = this.options;
    this.isVisible && (t12 && await Promise.resolve(t12()), this.et(), this.st(), this.isVisible = false, e2 && e2());
  }
  destroy() {
    this.hide(), this.options = null, this.root = null, this.v = {}, t4.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t4.instances)) e2.destroy();
    t4.instances.clear();
  }
};
e(Kt, "instances", /* @__PURE__ */ new Set());
var Qt = Kt;
var te = class t5 {
  constructor(t12 = {}) {
    this.options = Object.assign({ mode: "dark", render: "dark", theme: "indigo", radius: "sm", shadow: "sm", font: "sm", key: "jui-theme" }, t12), this.languages = { en: { b: "Back", t: "Customize", d: "Customize your UI experience.", theme: "Theme", radius: "Radius", shadow: "Shadow", font: "Font", mode: "Mode", gray: "Gray", olive: "Olive", tomato: "Tomato", ruby: "Ruby", pink: "Pink", violet: "Violet", indigo: "Indigo", blue: "Blue", teal: "Teal", grass: "Grass", mint: "Mint", lime: "Lime", yellow: "Yellow", orange: "Orange", gold: "Gold", n: "None", sm: "Small", md: "Medium", lg: "Large", xl: "XL", round: "Round", light: "Light", dark: "Dark", auto: "Auto" }, zh: { b: "返回", t: "自定义主题", d: "自定义您的UI体验。", theme: "主题", radius: "圆角", shadow: "阴影", font: "字号", mode: "模式", gray: "灰色", olive: "橄榄绿", tomato: "番茄红", ruby: "红宝石", pink: "粉红", violet: "紫罗兰", indigo: "靛蓝", blue: "蓝色", teal: "青色", grass: "草绿", mint: "薄荷绿", lime: "酸橙绿", yellow: "黄色", orange: "橙色", gold: "金色", n: "无", sm: "小", md: "中", lg: "大", xl: "更大", round: "圆角", light: "浅色", dark: "深色", auto: "自动" } }, this.u();
  }
  u() {
    this.v = {}, this.mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"), this.nt(), this.ot(this.options), this.rt(), this.lt(document);
  }
  ht(t12) {
    return T(t12, this.languages);
  }
  nt() {
    try {
      const t12 = localStorage.getItem(this.options.key);
      if (t12) {
        const e2 = JSON.parse(t12);
        this.options = Object.assign({}, this.options, e2);
      }
    } catch (t12) {
    }
  }
  ct(t12) {
    const e2 = this.mq && this.mq.matches ? "dark" : "light";
    this.options.render = "auto" === this.options.mode ? e2 : this.options.mode;
    const i2 = JSON.stringify(t12);
    localStorage.setItem(this.options.key, i2);
  }
  ut() {
    const t12 = [], e2 = document.documentElement;
    for (const i2 of e2.classList) "light" !== i2 && "dark" !== i2 || t12.push(i2), (i2.startsWith("j-theme-") || i2.startsWith("j-radius-") || i2.startsWith("j-shadow-") || i2.startsWith("j-font-")) && t12.push(i2);
    t12.length && e2.classList.remove(...t12);
  }
  dt() {
    const t12 = document.documentElement, { mode: e2 } = this.options;
    if ("auto" === e2) {
      const e3 = this.mq && this.mq.matches ? "dark" : "light";
      t12.classList.remove("light", "dark"), t12.classList.add(e3);
    } else t12.classList.remove("light", "dark"), t12.classList.add("dark" === e2 ? "dark" : "light");
  }
  ot(t12) {
    this.ut(), this.dt();
    document.documentElement.classList.add(`j-theme-${t12.theme}`, `j-radius-${t12.radius}`, `j-shadow-${t12.shadow}`, `j-font-${t12.font}`);
  }
  lt(t12 = document) {
    const e2 = t12.querySelectorAll(".palette-item");
    for (const i2 of e2) {
      const t13 = i2.dataset.palette, e3 = this.options[t13], s2 = i2.querySelectorAll("button[data-palette]");
      for (const i3 of s2) {
        const t14 = i3.dataset.palette === (void 0 === e3 ? null : e3);
        i3.classList.toggle("is-active", t14);
      }
    }
  }
  rt() {
    this.v.click = (t12) => {
      const e2 = t12.target.closest(".palette-item .items > button[data-palette]");
      if (!e2) return;
      const i2 = e2.closest(".palette-item");
      if (!i2) return;
      const s2 = i2.dataset.palette, n2 = e2.dataset.palette;
      e2.classList.contains("is-active") || (this.options[s2] = n2, this.ot(this.options), this.ct(this.options), this.lt());
    }, F(document.body, "click", this.v.click);
  }
  ft() {
    R(document.body, "click", this.v.click);
  }
  createPanel(t12 = "j-theme-palette", e2 = null) {
    const i2 = e2 || [{ title: this.ht("theme"), type: "theme", buttons: [["gray", this.ht("gray")], ["olive", this.ht("olive")], ["tomato", this.ht("tomato")], ["ruby", this.ht("ruby")], ["pink", this.ht("pink")], ["violet", this.ht("violet")], ["indigo", this.ht("indigo")], ["blue", this.ht("blue")], ["teal", this.ht("teal")], ["grass", this.ht("grass")], ["mint", this.ht("mint")], ["lime", this.ht("lime")], ["yellow", this.ht("yellow")], ["orange", this.ht("orange")], ["gold", this.ht("gold")]] }, { title: this.ht("radius"), type: "radius", buttons: [["none", this.ht("n")], ["sm", this.ht("sm")], ["md", this.ht("md")], ["lg", this.ht("lg")], ["xl", this.ht("xl")], ["round", this.ht("round")]] }, { title: this.ht("shadow"), type: "shadow", buttons: [["none", this.ht("n")], ["sm", this.ht("sm")], ["md", this.ht("md")], ["lg", this.ht("lg")]] }, { title: this.ht("font"), type: "font", buttons: [["sm", this.ht("sm")], ["md", this.ht("md")]] }, { title: this.ht("mode"), type: "mode", buttons: [["light", this.ht("light")], ["dark", this.ht("dark")], ["auto", this.ht("auto")]] }], s2 = [], n2 = `<div class="text-center"><button class="j-button is-text" data-action="close">${this.ht("b")}</button></div><h3>${this.ht("t")}</h3><p class="mt-0 text-sm">${this.ht("d")}</p><div class="palette-container">`;
    s2.push(n2);
    for (const o2 of i2) {
      s2.push(`<div class="palette-item" data-palette="${o2.type}"><div class="item-title">${o2.title}</div><div class="items">`);
      for (const [t13, e3] of o2.buttons) {
        const i3 = String(this.options[o2.type]) === String(t13) ? " is-active" : "", n3 = "theme" === o2.type ? `<span class="el-prefix item-hex bg-${t13}-10"></span>` : "";
        s2.push(`<button class="j-button is-default${i3}" data-palette="${t13}">${n3}<span class="button-text">${e3}</span></button>`);
      }
      s2.push("</div></div>");
    }
    s2.push("</div>");
    return V("div", { className: t12, html: s2.join("") });
  }
  setConfig(t12) {
    this.options = Object.assign({}, this.options, t12), this.ot(this.options), this.ct(this.options), this.lt(document);
  }
  destroy() {
    this.ft(), this.options = {}, this.languages = {}, this.v = {}, this.mq = null, t5.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t5.instances)) e2.destroy();
    t5.instances.clear();
  }
};
e(te, "instances", /* @__PURE__ */ new Set());
var ee = te;
var ie = class t6 {
  constructor(t12, e2 = {}) {
    if (false !== t12 && !(t12 instanceof HTMLElement)) throw new Error("Element expects a valid HTMLElement or false.");
    this.options = Object.assign({ id: null, direction: "top", active: 0, disabled: [], onChange: null, tabs: [], onAdd: null, onRemove: null }, e2), this.p(this.options), this.u(t12);
  }
  u(t12) {
    this.root = t12, this.current = null, this.v = {}, this.bt = [];
    const { tabs: e2, disabled: i2, active: s2 } = this.options;
    if (false === this.root && (this.root = this.C(e2)), 0 === this.tabs.length || 0 === this.panels.length) throw new Error(".tab-item or .panel-item not found.");
    this.bt = this.wt(i2), this.vt(), this.P(), this.yt(s2, false), this.gt();
  }
  get tabs() {
    return this.root ? Array.from(this.root.querySelectorAll(".tab-item")) : [];
  }
  get panels() {
    return this.root ? Array.from(this.root.querySelectorAll(".panel-item")) : [];
  }
  get kt() {
    return this.root ? this.root.querySelector(".tab-wrap") : null;
  }
  get xt() {
    return this.root ? this.root.querySelector(".tab-list") : null;
  }
  p(t12) {
    const { id: e2, direction: i2, active: s2, disabled: n2, onChange: o2, tabs: r2, onAdd: a2, onRemove: l2 } = t12;
    y("id", e2, ["string", "null"]), y("direction", i2, "string", [{ test: (t13) => ["top", "bottom", "left", "right"].includes(t13), message: "direction expects one of [top, bottom, left, right]" }]), y("active", s2, ["number", "string"]), y("disabled", n2, ["number", "string", "array"]), y("tabs", r2, ["array"]), y("onChange", o2, ["function", "null"]), y("onAdd", a2, ["function", "null"]), y("onRemove", l2, ["function", "null"]), e2 && e2.trim() || (this.options.id = N());
  }
  C(t12) {
    const { id: e2, direction: i2 } = this.options, s2 = V("nav", { className: "tab-list" }), n2 = V("div", { className: "tab-wrap", children: s2 }), o2 = V("div", { className: "tab-panel" });
    for (const r2 of t12) {
      const t13 = V("div", { className: "tab-item", attrs: { "data-tab": r2.name || N() }, html: `<span>${r2.title}</span>` });
      s2.appendChild(t13);
      const e3 = V("div", { className: "panel-item", html: `<div>${r2.content}</div>` });
      o2.appendChild(e3);
    }
    return V("div", { className: "j-tabs", id: e2, direction: `is-${i2}`, children: [n2, o2] });
  }
  wt(t12) {
    if (null == t12) return [];
    const e2 = (t13) => "number" == typeof t13 ? t13 : "string" == typeof t13 ? this.tabs.findIndex((e3) => e3.dataset.tab === t13) : -1;
    if (Array.isArray(t12)) return t12.map(e2).filter((t13) => t13 >= 0);
    {
      const i2 = e2(t12);
      return i2 >= 0 ? [i2] : [];
    }
  }
  vt() {
    for (const [t12, e2] of this.tabs.entries()) this.bt.includes(t12) ? (e2.setAttribute("disabled", "true"), e2.classList.add("is-disabled")) : (e2.removeAttribute("disabled"), e2.classList.remove("is-disabled"));
  }
  P() {
    this.et(), this.xt && (this.v.tabClick = (t12) => {
      const e2 = t12.target.closest(".tab-item");
      if (!e2 || !this.tabs.includes(e2)) return;
      const i2 = this.tabs.indexOf(e2);
      i2 >= 0 && !this.bt.includes(i2) && this.activate(i2);
    }, F(this.xt, "click", this.v.tabClick));
  }
  et() {
    this.xt && this.v.tabClick && R(this.xt, "click", this.v.tabClick), this.v.tabClick = null;
  }
  async yt(t12, e2 = true) {
    const { onChange: i2 } = this.options, s2 = this.$t(t12);
    if (!(s2 < 0 || s2 >= this.tabs.length || this.bt.includes(s2) || this.current === s2)) {
      this.current = s2;
      for (const [t13, e3] of this.tabs.entries()) e3.classList.toggle("is-active", t13 === s2);
      for (const [t13, e3] of this.panels.entries()) e3.classList.toggle("is-active", t13 === s2);
      if (e2 && i2) {
        const t13 = this.tabs[s2], e3 = this.panels[s2], n2 = t13 && t13.dataset.tab || s2;
        await Promise.resolve(i2(s2, n2, t13, e3));
      }
    }
  }
  $t(t12) {
    return "number" == typeof t12 ? t12 : "string" == typeof t12 ? this.tabs.findIndex((e2) => e2.dataset.tab === t12) : -1;
  }
  gt() {
    const { direction: t12 } = this.options;
    this.kt && this.xt && (this.isVertical = "left" === t12 || "right" === t12, this.draggable = this._t(), this.draggable ? (this.Et(), this.v.resize = () => {
      cancelAnimationFrame(this.Ct), this.Ct = requestAnimationFrame(() => {
        this.St();
      });
    }, F(window, "resize", this.v.resize)) : this.jt());
  }
  _t() {
    if (this.isVertical) {
      return this.xt.scrollHeight > this.kt.clientHeight + 5;
    }
    return this.xt.scrollWidth > this.kt.clientWidth + 5;
  }
  Et() {
    this.jt();
    const t12 = this.kt, e2 = this.xt, i2 = this.isVertical;
    let s2 = 0, n2 = 0, o2 = 0, r2 = false;
    const a2 = (t13) => i2 ? t13.touches ? t13.touches[0].pageY : t13.pageY : t13.touches ? t13.touches[0].pageX : t13.pageX, l2 = (r3) => {
      this.isDragging = true, e2.classList.add("dragging"), s2 = a2(r3), o2 = s2, n2 = i2 ? t12.scrollTop : t12.scrollLeft, this.Tt = 0, cancelAnimationFrame(this.raf);
    }, h2 = (e3) => {
      if (!this.isDragging) return;
      e3.preventDefault();
      const l3 = a2(e3), h3 = s2 - l3;
      this.Tt = o2 - l3, o2 = l3, r2 || (r2 = true, requestAnimationFrame(() => {
        r2 = false, i2 ? t12.scrollTop = n2 + h3 : t12.scrollLeft = n2 + h3;
      }));
    }, c2 = () => {
      this.isDragging && (this.isDragging = false, e2.classList.remove("dragging"), this.Mt());
    };
    this.v.drag = { onDragStart: l2, onDragMove: h2, onDragEnd: c2 }, F(e2, "mousedown", l2), F(e2, "touchstart", l2, { passive: true }), F(window, "mousemove", h2, { passive: false }), F(window, "touchmove", h2, { passive: false }), F(window, "mouseup", c2), F(window, "touchend", c2);
  }
  Mt() {
    const t12 = this.kt;
    let e2 = this.Tt;
    const i2 = this.isVertical;
    let s2 = performance.now();
    const n2 = (o2) => {
      const r2 = o2 - s2;
      s2 = o2, e2 *= 0.92, Math.abs(e2) < 0.3 || (i2 ? t12.scrollTop += e2 * r2 * 0.05 : t12.scrollLeft += e2 * r2 * 0.05, this.raf = requestAnimationFrame(n2));
    };
    this.raf = requestAnimationFrame(n2);
  }
  jt() {
    if (!this.v.drag) return;
    const { onDragStart: t12, onDragMove: e2, onDragEnd: i2 } = this.v.drag;
    R(this.xt, "mousedown", t12), R(this.xt, "touchstart", t12), R(window, "mousemove", e2), R(window, "touchmove", e2), R(window, "mouseup", i2), R(window, "touchend", i2), this.v.drag = null;
  }
  St() {
    this.gt();
  }
  async activate(t12) {
    await this.yt(t12, true);
  }
  async reInit(t12 = {}) {
    this.options = Object.assign({}, this.options, t12);
    const { disabled: e2, active: i2 } = this.options;
    this.bt = this.wt(e2), this.vt(), this.P(), await this.yt(i2, false), this.St();
  }
  async addTab(t12) {
    const { title: e2, name: i2, content: s2 } = t12;
    if (!t12 || !e2) return;
    const n2 = this.root.querySelector(".tab-panel");
    t12.name = i2 || N();
    const o2 = V("div", { className: "tab-item", attrs: { "data-tab": t12.name }, html: `<span>${e2}</span>` });
    this.xt && this.xt.appendChild(o2);
    const r2 = V("div", { className: "panel-item", html: `<div>${s2}</div>` });
    n2.appendChild(r2), this.vt(), this.P();
    const { onAdd: a2 } = this.options;
    a2 && await Promise.resolve(a2(this.tabs.length - 1, t12, o2, r2)), this.St();
  }
  async deleteTab(t12) {
    if (this.tabs.length <= 1) return;
    const e2 = this.$t(t12);
    if (e2 < 0 || e2 >= this.tabs.length) return;
    const i2 = this.tabs[e2], s2 = this.panels[e2], n2 = i2.dataset.tab || e2;
    i2 && i2.parentNode && i2.parentNode.removeChild(i2), s2 && s2.parentNode && s2.parentNode.removeChild(s2), this.vt(), this.P();
    const { onRemove: o2 } = this.options;
    o2 && await Promise.resolve(o2(e2, n2)), i2.classList.contains("is-active") && await this.yt(this.tabs.length - 1, false), this.St();
  }
  disableTab(t12) {
    const e2 = this.$t(t12);
    e2 >= 0 && !this.bt.includes(e2) && (this.bt.push(e2), this.vt(), this.P());
  }
  enableTab(t12) {
    const e2 = this.$t(t12), i2 = this.bt.indexOf(e2);
    i2 >= 0 && (this.bt.splice(i2, 1), this.vt(), this.P());
  }
  destroy() {
    this.et();
    for (const t12 of this.tabs) t12.classList.remove("is-active", "is-disabled"), t12.removeAttribute("disabled");
    for (const t12 of this.panels) t12.classList.remove("is-active");
    const e2 = this.xt;
    e2 && (R(e2.inner, "mousedown", this.Nt), R(e2.inner, "touchstart", this.Nt), R(e2.inner, "mousemove", this.At), R(e2.inner, "touchmove", this.At), R(window, "mouseup", this.Lt), R(window, "touchend", this.Lt)), this.v.resize && R(window, "resize", this.v.resize), this.root = null, this.options = {}, this.isVertical = false, this.v = {}, t6.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t6.instances)) e2.destroy();
    t6.instances.clear();
  }
};
e(ie, "instances", /* @__PURE__ */ new Set());
var se = ie;
var ne = class t7 {
  constructor(e2, i2 = {}) {
    if (false !== e2 && !(e2 instanceof HTMLElement)) throw new Error("Accordion: element expects a valid HTMLElement or false.");
    this.options = Object.assign({ id: null, active: 0, collapsible: false, multiple: false, onChange: null, items: [] }, i2), this.p(this.options), this.u(e2, this.options), t7.instances.add(this);
  }
  p(t12) {
    const { id: e2, active: i2, collapsible: s2, multiple: n2, onChange: o2, items: r2 } = t12;
    y("id", e2, ["string", "null"]), y("active", i2, ["number", "string"]), y("collapsible", s2, "boolean"), y("multiple", n2, "boolean"), y("onChange", o2, ["function", "null"]), y("items", r2, "array"), e2 && e2.trim() || (this.options.id = N());
  }
  u(t12, e2) {
    if (this.root = t12, this.v = {}, false === this.root && (this.root = this.C(e2)), 0 === this.headers.length || 0 === this.panels.length) throw new Error("Accordion: .accordion-header or .accordion-panel not found.");
    this.P(), null != e2.active && this.yt(e2.active, false);
  }
  C(t12) {
    return V("div", { className: "j-accordion", id: t12.id, children: this.It(t12.items) });
  }
  It(t12) {
    if (!Array.isArray(t12) || 0 === t12.length) throw new Error("Accordion: items must be a non-empty array.");
    const e2 = document.createDocumentFragment();
    for (const i2 of t12) {
      if (i2.name && "string" != typeof i2.name) throw new Error("Accordion: item name expects a string.");
      const t13 = V("div", { className: "accordion-header", attrs: { "data-item": i2.name || N() }, html: `<span class="header-title">${i2.title}</span><span class="header-arrow">${r("arrow-down")}</span>` }), s2 = V("div", { className: "accordion-panel" }), n2 = V("div", { className: "panel-content", children: i2.content });
      s2.appendChild(n2), e2.appendChild(t13), e2.appendChild(s2);
    }
    return e2;
  }
  P() {
    this.et();
    const t12 = (t13) => {
      const e2 = t13.target.closest(".accordion-header");
      e2 && this.headers.includes(e2) && this.active(this.headers.indexOf(e2));
    };
    F(this.root, "click", t12), this.v.root = t12;
  }
  et() {
    const t12 = [{ k: "root", t: this.root, e: "click" }];
    for (const { k: e2, t: i2, e: s2 } of t12) this.v[e2] && (R(i2, s2, this.v[e2]), delete this.v[e2]);
  }
  async yt(t12, e2 = true) {
    const i2 = this.$t(t12);
    if (i2 < 0 || i2 >= this.headers.length) return;
    const s2 = this.headers[i2], n2 = this.panels[i2], o2 = s2 && s2.dataset.item || i2, r2 = s2.classList.contains("is-active");
    if (!r2 || this.options.multiple || this.options.collapsible) {
      if (this.options.multiple) r2 ? (s2.classList.remove("is-active"), n2.classList.remove("is-active")) : (s2.classList.add("is-active"), n2.classList.add("is-active"));
      else if (r2) this.options.collapsible && (s2.classList.remove("is-active"), n2.classList.remove("is-active"));
      else {
        for (const t13 of this.headers) t13.classList.remove("is-active");
        for (const t13 of this.panels) t13.classList.remove("is-active");
        s2.classList.add("is-active"), n2.classList.add("is-active");
      }
      e2 && this.options.onChange && await Promise.resolve(this.options.onChange(i2, o2, s2, n2));
    }
  }
  $t(t12) {
    return "number" == typeof t12 ? t12 : "string" == typeof t12 ? this.headers.findIndex((e2) => e2.dataset.item === t12) : -1;
  }
  get headers() {
    return this.root ? Array.from(this.root.querySelectorAll(".accordion-header")) : [];
  }
  get panels() {
    return this.root ? Array.from(this.root.querySelectorAll(".accordion-panel")) : [];
  }
  get current() {
    const t12 = this.headers.find((t13) => t13.classList.contains("is-active"));
    return t12 ? this.headers.indexOf(t12) : null;
  }
  async active(t12) {
    return this.yt(t12, true), Promise.resolve();
  }
  setItems(t12, e2 = 0) {
    if (!Array.isArray(t12) || 0 === t12.length) throw new Error("Accordion.setItems: items expects a non-empty array.");
    if ("number" != typeof e2 && e2 < 0) throw new Error("Accordion.setItems: active expects a positive number or 0.");
    this.options.items = [...t12], this.options.active = e2, this.et(), this.root.innerHTML = "", this.root.append(this.It(t12)), this.P(), this.yt(this.options.active);
  }
  destroy() {
    this.et();
    for (const t12 of this.headers) t12.classList.remove("is-active");
    for (const t12 of this.panels) t12.classList.remove("is-active");
    this.root = null, this.options = {}, this.Ht = {}, t7.instances.delete(this);
  }
  destroyAll() {
    for (const e2 of Array.from(t7.instances)) e2.destroy();
    t7.instances.clear();
  }
};
e(ne, "instances", /* @__PURE__ */ new Set());
var oe = ne;
var re = class t8 {
  constructor(t12, e2 = {}) {
    if (!(t12 instanceof HTMLElement)) throw new Error("Drop: element expects a valid HTMLElement.");
    this.target = t12, this.options = Object.assign({ name: null, mode: "click", position: "auto", offset: 10, content: "", className: null, id: null, containerClassName: null, delay: 0, hoverIntent: true, onShown: null, onHidden: null }, e2), this.p(this.options), this.u(this.options);
  }
  p(t12) {
    y("name", t12.name, ["string", "null"]), y("mode", t12.mode, ["string"]), y("position", t12.position, ["string"], [{ test: (t13) => ["auto", "top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right", "left", "right"].includes(t13), message: "expects one of [auto, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right]" }]), y("offset", t12.offset, "number", [{ test: (t13) => t13 >= 0, message: "offset expects a positive number or 0." }]), y("content", t12.content, ["string", "HTMLElement"]), y("className", t12.className, ["string", "null"]), y("id", t12.id, ["string", "null"]), y("containerClassName", t12.containerClassName, ["string", "null"]), y("delay", t12.delay, ["number", "object"]), y("hoverIntent", t12.hoverIntent, "boolean"), y("onShown", t12.onShown, ["function", "null"]), y("onHidden", t12.onHidden, ["function", "null"]), t12.id && t12.id.trim() || (this.options.id = N());
  }
  u(e2) {
    this.isVisible = false, this.root = null, this.v = {}, this.Ot = { show: null, hide: null }, this.Dt = { x: 0, y: 0, lastMoveTime: 0 };
    const { delay: i2 } = e2;
    "number" == typeof i2 && i2 >= 0 ? (this.delayShow = i2, this.delayHide = i2) : "object" == typeof i2 && null !== i2 ? (this.delayShow = Number(i2.show) || 0, this.delayHide = Number(i2.hide) || 0) : (this.delayShow = 0, this.delayHide = 0), this.v = { show: this.show.bind(this), hide: this.hide.bind(this), toggle: this.toggle.bind(this), mouseMove: this.Pt.bind(this), docClick: this.qt.bind(this), startIntent: this.Ft.bind(this), cancelIntent: this.Rt.bind(this) }, this.zt(e2), this.P(e2), t8.instances.add(this);
  }
  zt(t12) {
    const { className: e2, content: i2, id: s2, name: n2, containerClassName: o2 } = t12, r2 = e2 || "", a2 = i2 instanceof HTMLElement ? i2 : V("div", { className: o2 ? `drop-container ${o2}` : "drop-container", html: i2 }), l2 = V("div", { className: r2 ? `j-drop ${r2}` : "j-drop", id: s2, attrs: { "data-drop": n2 || N() }, children: a2 });
    this.root = l2, document.body.appendChild(l2);
  }
  P(t12) {
    const { mode: e2, hoverIntent: i2 } = t12;
    "hover" === e2 ? (i2 ? (F(this.target, "mouseenter", this.v.startIntent), F(this.target, "mouseleave", this.v.cancelIntent)) : (F(this.target, "mouseenter", this.v.show), F(this.target, "mouseleave", this.v.hide)), F(this.root, "mouseenter", this.v.show), F(this.root, "mouseleave", this.v.hide)) : "click" === e2 && (F(this.target, "click", this.v.toggle), F(document, "click", this.v.docClick));
  }
  et() {
    const { mode: t12, hoverIntent: e2 } = this.options;
    "hover" === t12 ? (e2 ? (R(this.target, "mouseenter", this.v.startIntent), R(this.target, "mouseleave", this.v.cancelIntent)) : (R(this.target, "mouseenter", this.v.show), R(this.target, "mouseleave", this.v.hide)), R(this.root, "mouseenter", this.v.show), R(this.root, "mouseleave", this.v.hide)) : "click" === t12 && (R(this.target, "click", this.v.toggle), R(document, "click", this.v.docClick)), R(document, "mousemove", this.v.mouseMove);
  }
  Ft() {
    F(document, "mousemove", this.v.mouseMove), clearTimeout(this.Ot.show), this.Ot.show = setTimeout(() => {
      const t12 = Date.now() - this.Dt.lastMoveTime;
      Math.abs(this.Dt.x - this.Bt || 0) + Math.abs(this.Dt.y - this.Vt || 0) < 5 || t12 > 100 ? (this.show(), R(document, "mousemove", this.v.mouseMove)) : this.Ft();
    }, this.delayShow);
  }
  Rt() {
    clearTimeout(this.Ot.show), R(document, "mousemove", this.v.mouseMove), this.hide();
  }
  Pt(t12) {
    this.Bt = t12.clientX, this.Vt = t12.clientY, this.Dt.lastMoveTime = Date.now(), this.Dt.x = t12.clientX, this.Dt.y = t12.clientY;
  }
  Zt() {
    const t12 = this.target.getBoundingClientRect(), e2 = this.root, { offset: i2, position: s2 } = this.options;
    e2.style.visibility = "hidden", e2.style.display = "block";
    const n2 = e2.getBoundingClientRect();
    let o2 = 0, r2 = 0, a2 = s2;
    if ("auto" === a2) {
      a2 = window.innerHeight - t12.bottom > n2.height + i2 ? "top-center" : "bottom-center";
    }
    switch (a2) {
      case "top-left":
        o2 = t12.top - n2.height - i2, r2 = t12.left;
        break;
      case "top-center":
        o2 = t12.top - n2.height - i2, r2 = t12.left + t12.width / 2 - n2.width / 2;
        break;
      case "top-right":
        o2 = t12.top - n2.height - i2, r2 = t12.right - n2.width;
        break;
      case "bottom-left":
        o2 = t12.bottom + i2, r2 = t12.left;
        break;
      case "bottom-center":
        o2 = t12.bottom + i2, r2 = t12.left + t12.width / 2 - n2.width / 2;
        break;
      case "bottom-right":
        o2 = t12.bottom + i2, r2 = t12.right - n2.width;
        break;
      case "left":
        o2 = t12.top + t12.height / 2 - n2.height / 2, r2 = t12.left - n2.width - i2;
        break;
      case "right":
        o2 = t12.top + t12.height / 2 - n2.height / 2, r2 = t12.right + i2;
    }
    o2 = Math.max(8, Math.min(o2, window.innerHeight - n2.height - 8)), r2 = Math.max(8, Math.min(r2, window.innerWidth - n2.width - 8)), e2.style.top = `${o2 + window.scrollY}px`, e2.style.left = `${r2 + window.scrollX}px`, e2.style.visibility = "", e2.style.display = "";
  }
  qt(t12) {
    this.root.contains(t12.target) || this.target.contains(t12.target) || this.hide();
  }
  Ut(t12) {
    t12 ? this.Zt() : (this.root.style.top = "", this.root.style.left = ""), this.root.classList.toggle("is-active", t12), this.isVisible = t12;
  }
  show(t12 = true) {
    clearTimeout(this.Ot.hide), this.isVisible || (t12 && this.delayShow > 0 ? (clearTimeout(this.Ot.show), this.Ot.show = setTimeout(this.Ut(true), this.delayShow)) : this.Ut(true), this.options.onShown && this.options.onShown());
  }
  hide(t12 = true) {
    clearTimeout(this.Ot.show), this.isVisible && (t12 && this.delayHide > 0 ? (clearTimeout(this.Ot.hide), this.Ot.hide = setTimeout(this.Ut(false), this.delayHide)) : this.Ut(false), this.options.onHidden && this.options.onHidden());
  }
  toggle() {
    this.isVisible ? this.hide() : this.show();
  }
  destroy() {
    var e2;
    clearTimeout(this.Ot.show), clearTimeout(this.Ot.hide), this.hide(false), this.et(), (null == (e2 = this.root) ? void 0 : e2.parentNode) && this.root.parentNode.removeChild(this.root), this.options = null, this.root = null, this.target = null, t8.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t8.instances)) e2.destroy();
    t8.instances.clear();
  }
};
e(re, "instances", /* @__PURE__ */ new Set());
var ae = re;
var le = class t9 {
  constructor(t12, e2 = {}) {
    if (!(t12 instanceof HTMLElement)) throw new Error("Tooltip: element expects a valid HTMLElement.");
    const i2 = Object.assign({ name: null, mode: "hover", position: "auto", offset: 8, message: "", className: null, id: null, delay: 100, hoverIntent: true }, e2), s2 = this.Jt(i2);
    this.drop = new ae(t12, { name: i2.name, mode: i2.mode, position: i2.position, offset: i2.offset, content: s2, className: i2.className, id: i2.id, delay: i2.delay, hoverIntent: i2.hoverIntent });
  }
  Jt(t12) {
    if ("string" != typeof t12.message || "" === t12.message.trim()) throw new Error("Tooltip: message expects a string.");
    const e2 = V("div", { className: "tooltip-message", text: t12.message });
    return V("div", { className: t12.className ? `j-tooltip ${t12.className}` : "j-tooltip", children: e2 });
  }
  show(t12 = true) {
    this.drop.show(t12);
  }
  hide(t12 = true) {
    this.drop.hide(t12);
  }
  toggle() {
    this.drop.toggle();
  }
  destroy() {
    this.drop.destroy(), this.drop = null, t9.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t9.instances)) e2.destroy();
    t9.instances.clear();
  }
};
e(le, "instances", /* @__PURE__ */ new Set());
var he = le;
var ce = class t10 {
  constructor(t12, e2 = {}, i2 = false) {
    this.options = { rules: {}, messages: {}, onSubmit: null, ...e2 }, this.p(t12, this.options, i2), this.u(t12), i2 && this.P();
  }
  p(t12, e2, i2) {
    y("element", t12, ["HTMLElement", "string"]), y("rules", e2.rules, "object"), y("messages", e2.messages, "object"), y("onSubmit", e2.onSubmit, ["function", "null"]), y("bindEvents", i2, "boolean");
  }
  u(t12) {
    this.root = t12, this.valid = true;
  }
  P() {
    F(this.root, "submit", (t12) => {
      t12.preventDefault(), this.validate();
    }), F(this.root, "reset", () => {
      this.reset();
    });
  }
  validate() {
    for (const t12 of this.root.elements) {
      const e2 = t12.name;
      if (this.options.rules[e2] && (this.valid = this.Wt(t12, e2), !this.valid)) break;
    }
    return this.valid && this.options.onSubmit && this.options.onSubmit(), this.valid;
  }
  Wt(t12, e2) {
    const i2 = this.options.rules[e2];
    if (t12.hasAttribute("required") || t12.hasAttribute("minlength") || t12.hasAttribute("maxlength") || t12.hasAttribute("pattern") || t12.hasAttribute("min") || t12.hasAttribute("max") || t12.hasAttribute("step")) return this.valid;
    for (const s2 in i2) {
      switch (s2) {
        case "required":
          this.valid = this.Gt(t12, i2[s2]);
          break;
        case "minLength":
          this.valid = this.Xt(t12, i2[s2]);
          break;
        case "maxLength":
          this.valid = this.Yt(t12, i2[s2]);
          break;
        case "equalTo":
          this.valid = this.Kt(t12, i2[s2]);
          break;
        case "email":
          this.valid = this.Qt(t12);
          break;
        case "checked":
          this.valid = this.te(t12, i2[s2]);
          break;
        case "noSpace":
          this.valid = this.ee(t12, i2[s2]);
          break;
        case "noChinese":
          this.valid = !/[\u4e00-\u9fa5]/.test(t12.value);
          break;
        case "noSpecial":
          this.valid = !/[@#$%^&*]+/g.test(t12.value);
          break;
        case "pattern":
          this.valid = new RegExp(i2[s2]).test(t12.value);
      }
      if (!this.valid) {
        this.ie(t12, e2, s2);
        break;
      }
      this.se(t12);
    }
    return this.valid;
  }
  Gt(t12, e2) {
    return t12.value.trim().length >= 1 && true === e2;
  }
  Xt(t12, e2) {
    return t12.value.length >= e2;
  }
  Yt(t12, e2) {
    return t12.value.length <= e2;
  }
  Qt(t12) {
    return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t12.value);
  }
  Kt(t12, e2) {
    const i2 = this.root.elements[e2];
    if (null == i2) throw new Error(`Validator: target element "${e2}" not found.`);
    return t12.value === i2.value;
  }
  te(t12, e2) {
    if ("checkbox" !== t12.type) throw new Error(`Validator: element expects a checkbox input, but ${t12.type} given.`);
    return t12.checked === e2;
  }
  ee(t12, e2) {
    return !/\s/.test(t12.value) || true !== e2;
  }
  ie(t12, e2, i2) {
    "checkbox" !== t12.type && (t12.classList.remove("is-valid"), t12.classList.add("is-invalid"));
    const s2 = this.options.messages[e2] && this.options.messages[e2][i2];
    if (s2) {
      this.message = s2;
      const e3 = t12.closest(".form-control");
      let i3 = z(".help-block", e3);
      i3 || (i3 = V("div", { className: "help-block is-invalid", text: s2 }), e3.appendChild(i3));
    }
  }
  se(t12) {
    this.message = "";
    const e2 = t12.closest(".form-control"), i2 = z(".help-block", e2);
    i2 && e2.removeChild(i2), "checkbox" !== t12.type && (t12.classList.remove("is-invalid"), t12.classList.add("is-valid"));
  }
  reset() {
    this.root.reset();
    for (const e2 of this.root.elements) e2.classList.remove("is-valid"), e2.classList.remove("is-invalid");
    const t12 = this.root.querySelectorAll(".help-block");
    for (const e2 of t12) e2.remove();
    this.valid = true, this.message = "";
  }
  destroy() {
    this.reset(), this.root = null, this.options = null, this.message = null, this.valid = null, t10.instances.delete(this);
  }
  static destroyAll() {
    for (const e2 of Array.from(t10.instances)) e2.destroy();
    t10.instances.clear();
  }
};
e(ce, "instances", /* @__PURE__ */ new Set());
var ue = ce;
var de = class {
  constructor(t12) {
    this.options = Object.assign({ ball: { color: "var(--primary, #3e63dd)", size: "10px" }, from: null, to: null, direction: "center", showDelay: 0, hideDelay: 0, onShow: null, onHidden: null }, t12), this.p(this.options), this.u(this.options);
  }
  p(t12) {
    const { ball: e2, from: i2, to: s2, direction: n2, showDelay: o2, hideDelay: r2, onShow: a2, onHidden: l2 } = t12;
    y("ball", e2, "object", [{ test: (t13) => "object" == typeof t13 && 2 === Object.keys(t13).length && "string" == typeof t13.color && "string" == typeof t13.size, message: 'ball expects an object with two string properties: "color" and "size".' }]), y("from", i2, ["HTMLElement", "string"]), y("to", s2, ["HTMLElement", "string"]), y("direction", n2, "string", [{ test: (t13) => ["center", "top-right", "top-left", "bottom-right", "bottom-left"].includes(t13), message: "direction expects one of [center, top-right, top-left, bottom-right, bottom-left]" }]), y("showDelay", o2, "number"), y("hideDelay", r2, "number"), y("onShow", a2, ["function", "null"]), y("onHide", l2, ["function", "null"]);
  }
  u(t12) {
    if (this.hidden = false, this.ne = null, this.oe = null, this.re = null, this.ae = null, this.hidden) return;
    const e2 = B(t12.from), i2 = B(t12.to);
    if (!e2 || !i2) throw this.destroy(), new Error("Parabola: from or to element not found.");
    this.le(t12);
  }
  le(t12) {
    if (this.hidden || this.ne) return;
    const { color: e2, size: i2 } = t12.ball;
    this.ne = V("div", { className: "parabola-ball", style: { backgroundColor: e2, width: i2, height: i2, position: "fixed", borderRadius: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: "9999", opacity: "1" } }), document.body.appendChild(this.ne);
  }
  he(t12) {
    var e2, i2;
    const s2 = null == (e2 = B(t12.from)) ? void 0 : e2.getBoundingClientRect(), n2 = null == (i2 = B(t12.to)) ? void 0 : i2.getBoundingClientRect();
    if (!s2 || !n2) return null;
    const { left: o2, top: r2, width: a2, height: l2 } = s2, { left: h2, top: c2, width: u2, height: d2 } = n2;
    let f2, m2;
    switch (t12.direction) {
      case "top-left":
        f2 = o2 + 0.2 * a2, m2 = r2 + 0.2 * l2;
        break;
      case "top-right":
        f2 = o2 + 0.8 * a2, m2 = r2 + 0.2 * l2;
        break;
      case "bottom-left":
        f2 = o2 + 0.2 * a2, m2 = r2 + 0.8 * l2;
        break;
      case "bottom-right":
        f2 = o2 + 0.8 * a2, m2 = r2 + 0.8 * l2;
        break;
      default:
        f2 = o2 + a2 / 2, m2 = r2 + l2 / 2;
    }
    return { startX: f2, startY: m2, endX: h2 + u2 / 2, endY: c2 + d2 / 2 };
  }
  ce(t12) {
    return 1 - (1 - t12) ** 3;
  }
  ue(t12, e2, i2, s2, n2 = 800) {
    if (this.hidden) return;
    const o2 = performance.now(), r2 = i2 - t12, a2 = s2 - e2, l2 = (i3) => {
      if (this.hidden) return;
      const s3 = i3 - o2, h2 = Math.min(s3 / n2, 1), c2 = this.ce(h2), u2 = t12 + r2 * c2, d2 = e2 + -100 * Math.sin(Math.PI * c2) + a2 * c2, f2 = 1 - h2;
      this.ne.style.left = `${u2}px`, this.ne.style.top = `${d2}px`, this.ne.style.opacity = `${f2}`, this.ne.style.transform = `translate(-50%, -50%) scale(${1 - 0.3 * c2})`, h2 < 1 ? this.oe = requestAnimationFrame(l2) : this.destroy();
    };
    this.oe = requestAnimationFrame(l2);
  }
  async show() {
    return !this.hidden && new Promise((t12) => {
      this.re = setTimeout(() => {
        if (this.hidden) return void t12(false);
        const e2 = this.he(this.options);
        if (!e2) return this.destroy(), void t12(false);
        this.ne.style.left = `${e2.startX}px`, this.ne.style.top = `${e2.startY}px`, this.options.onShow && this.options.onShow(), this.ue(e2.startX, e2.startY, e2.endX, e2.endY), t12(true);
      }, this.options.showDelay);
    });
  }
  destroy() {
    var t12;
    (null == (t12 = this.ne) ? void 0 : t12.parentNode) && this.ne.parentNode.removeChild(this.ne), this.re && clearTimeout(this.re), this.ae && clearTimeout(this.ae), this.oe && cancelAnimationFrame(this.oe), this.ne = null, this.hidden = true, this.options.onHidden && this.options.onHidden();
  }
  start() {
    return this.show();
  }
};
var fe = class t11 {
  constructor(e2, i2 = {}) {
    this.de = e2, this.options = { id: "", items: [], backText: "Back", ...i2 }, this.root = null, this.v = null, this.fe = false, this.p(), t11.instances.add(this);
  }
  get menu() {
    return this.root;
  }
  p() {
    const { items: t12, backText: e2, id: i2 } = this.options;
    false !== this.de && y("element", this.de, ["HTMLElement", "string"]), this.me(t12), y("textBack", e2, ["string"]), y("id", i2, ["string"]), "" === i2.trim() && (this.options.id = N());
  }
  me(t12) {
    y("items", t12, ["array"], [{ test: (t13) => {
      const e2 = ["id", "title", "url", "target", "classes", "menu_item_parent", "children"];
      return t13.every((t14) => "object" == typeof t14 && null !== t14 && Object.keys(t14).every((t15) => e2.includes(t15)));
    }, message: "items expects an array of objects with the following keys: id, title, url, target, classes, menu_item_parent, children" }]);
  }
  build() {
    if (this.fe) return this;
    if (false === this.de) this.root = this.C(), this.fe = true;
    else {
      const t12 = "string" == typeof this.de ? z(this.de) : this.de;
      if (!t12) throw new Error("Element not found");
      this.root = t12, this.fe = true;
    }
    return this.P(), this;
  }
  C() {
    const { items: t12, id: e2 } = this.options;
    return V("nav", { className: "j-mobile-menu", children: V("ul", { className: "menu", id: e2, children: t12.map((t13) => this.pe(t13)) }) });
  }
  pe(t12) {
    const e2 = t12.children && t12.children.length > 0, i2 = ["menu-item"];
    e2 && i2.push("menu-item-has-children"), t12.classes && Array.isArray(t12.classes) && i2.push(...t12.classes);
    const s2 = [V("a", { className: "menu-link", attrs: { href: t12.url || "#", ...t12.target && { target: t12.target } }, text: t12.title })];
    return e2 && s2.push(V("ul", { className: "sub-menu", children: t12.children.map((t13) => this.pe(t13)) })), V("li", { className: i2.join(" "), id: `menu-item-${t12.id || N()}`, children: s2 });
  }
  P() {
    this.root && (this.v = (t12) => {
      const e2 = t12.target;
      if (e2.closest(".menu-item.back")) return t12.preventDefault(), void this.be(e2);
      const i2 = e2.closest(".menu-item.menu-item-has-children");
      if (i2) {
        const s2 = z(":scope > a", i2);
        s2 && (e2 === s2 || s2.contains(e2)) && (t12.preventDefault(), this.we(i2));
      }
    }, F(this.root, "click", this.v));
  }
  we(t12) {
    t12.classList.add("is-active");
    const e2 = z(":scope > .sub-menu", t12);
    if (!e2) return;
    if (z(":scope > .menu-item.back", e2)) return;
    const i2 = V("li", { className: "menu-item back", children: V("a", { className: "menu-link", children: [V("icon", { className: "el-icon el-prefix", html: r("arrow-left") }), V("span", { className: "menu-text", text: this.options.backText })] }) });
    e2.insertBefore(i2, e2.firstChild);
  }
  be(t12) {
    const e2 = t12.closest(".menu-item.back");
    if (!e2) return;
    const i2 = e2.parentElement.parentElement;
    i2 && i2.classList.contains("menu-item-has-children") && i2.classList.remove("is-active"), e2.remove();
  }
  setItems(t12) {
    return this.me(t12), this.options.items = t12, this.fe && (this.destroy(), this.build()), this;
  }
  removeItem(t12) {
    if (!this.root) return this;
    const e2 = z(`[id^="menu-item-${t12}"]`, this.root);
    if (e2 && e2.remove(), this.options.items) {
      const e3 = (i2) => {
        for (let s2 = i2.length - 1; s2 >= 0; s2--) i2[s2].id === t12 ? i2.splice(s2, 1) : i2[s2].children && e3(i2[s2].children);
      };
      e3(this.options.items);
    }
    return this;
  }
  destroy() {
    this.fe && (this.root && this.v && R(this.root, "click", this.v), false === this.de && this.root && this.root.parentElement && this.root.remove(), this.de = null, this.root = null, this.v = null, this.fe = false, t11.instances.delete(this));
  }
  static destroyAll() {
    for (const e2 of t11.instances) e2.destroy();
    t11.instances.clear();
  }
};
e(fe, "instances", /* @__PURE__ */ new Set());
var me = fe;
export {
  oe as accordion,
  a as addIcons,
  mt as batch,
  Ft as bindAttr,
  Bt as bindIf,
  Vt as bindList,
  zt as bindShow,
  Rt as bindStyle,
  qt as bindText,
  Tt as catchError,
  b as computed,
  X as container,
  P as copy,
  Ut as createCompositeKey,
  yt as createComputed,
  Ot as createDeepStore,
  gt as createEffect,
  jt as createErrorBoundary,
  Jt as createIndexKey,
  Zt as createListKey,
  Mt as createMemo,
  vt as createReadonly,
  Dt as createResource,
  Ct as createRoot,
  Et as createScope,
  wt as createSignal,
  It as createStore,
  Pt as createSuspense,
  Wt as createValueKey,
  Nt as createWatch,
  $ as destroyAll,
  ae as drop,
  p as effect,
  A as escapeHtml,
  pt as flushSync,
  I as getCookie,
  B as getEl,
  j as getLang,
  C as getLanguages,
  S as getLocale,
  st as getOwner,
  w as getType,
  r as icon,
  g as isClass,
  v as isFunction,
  L as isMobile,
  Z as lazyRender,
  W as log,
  me as menu,
  Xt as modal,
  V as newEl,
  R as off,
  Qt as offcanvas,
  F as on,
  xt as onCleanup,
  $t as onDispose,
  _t as onMount,
  de as parabola,
  D as postJson,
  z as q,
  N as randomId,
  f as reactive,
  m as ref,
  x as release,
  O as removeCookie,
  J as restUrl,
  _ as service,
  H as setCookie,
  E as setLanguages,
  k as singleton,
  bt as startTransition,
  Y as store,
  T as t,
  se as tabs,
  ee as theme,
  Yt as toast,
  he as tooltip,
  u as track,
  d as trigger,
  St as untrack,
  M as uuid,
  y as validate,
  ue as validator
};
//# sourceMappingURL=jealer-jui_dist_jui__module__js.js.map
