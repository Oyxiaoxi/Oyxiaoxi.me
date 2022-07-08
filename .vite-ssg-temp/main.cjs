"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var head = require("@vueuse/head");
var viteSsg = require("vite-ssg");
var NProgress = require("nprogress");
var dayjs = require("dayjs");
var LocalizedFormat = require("dayjs/plugin/localizedFormat.js");
var vue$1 = require("@formkit/auto-animate/vue");
var vueRouter = require("vue-router");
var core = require("@vueuse/core");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var NProgress__default = /* @__PURE__ */ _interopDefaultLegacy(NProgress);
var dayjs__default = /* @__PURE__ */ _interopDefaultLegacy(dayjs);
var LocalizedFormat__default = /* @__PURE__ */ _interopDefaultLegacy(LocalizedFormat);
var tailwind = "";
var main = "";
var navbar = "";
var prose$1 = "";
var markdown = "";
var __uno = "";
var Firefly_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$L = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[-->`);
  serverRenderer.ssrRenderList(14, (item, index2) => {
    _push(`<div class="firefly" data-v-228b906f></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Firefly.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var __unplugin_components_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-228b906f"]]);
const isDark = core.useDark();
const englishOnly = core.useStorage("oyxiaoxi-english-only", false);
function formatDate(d) {
  const date = dayjs__default["default"](d);
  if (date.year() === dayjs__default["default"]().year())
    return date.format("MMM D");
  return date.format("MMM D, YYYY");
}
const _sfc_main$K = /* @__PURE__ */ vue.defineComponent({
  name: "Post",
  __ssrInlineRender: true,
  props: {
    frontmatter: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const router = vueRouter.useRouter();
    const route = vueRouter.useRoute();
    const content = vue.ref();
    const base = "https://oyxiaoxi.me";
    const tweetUrl = vue.computed(() => `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Reading @Oyxiaoxi's ${base}${route.path}

I think...`)}`);
    vue.onMounted(() => {
      const navigate = () => {
        var _a;
        if (location.hash) {
          (_a = document.querySelector(decodeURIComponent(location.hash))) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        }
      };
      const handleAnchors = (event) => {
        const link = event.target.closest("a");
        if (!event.defaultPrevented && link && event.button === 0 && link.target !== "_blank" && link.rel !== "external" && !link.download && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          const url = new URL(link.href);
          if (url.origin !== window.location.origin)
            return;
          event.preventDefault();
          const { pathname, hash } = url;
          if (hash && (!pathname || pathname === location.pathname)) {
            window.history.replaceState({}, "", hash);
            navigate();
          } else {
            router.push({ path: pathname, hash });
          }
        }
      };
      core.useEventListener(window, "hashchange", navigate);
      core.useEventListener(content.value, "click", handleAnchors, { passive: false });
      navigate();
      setTimeout(navigate, 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<!--[-->`);
      if ((_a = __props.frontmatter.display) != null ? _a : __props.frontmatter.title) {
        _push(`<div class="prose mt-12 m-auto mb-8"><h1 class="mb-0">${serverRenderer.ssrInterpolate((_b = __props.frontmatter.display) != null ? _b : __props.frontmatter.title)}</h1>`);
        if (__props.frontmatter.date) {
          _push(`<p class="opacity-50 !-mt-2">${serverRenderer.ssrInterpolate(vue.unref(formatDate)(__props.frontmatter.date))} `);
          if (__props.frontmatter.duration) {
            _push(`<span>\xB7 ${serverRenderer.ssrInterpolate(__props.frontmatter.duration)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.frontmatter.subtitle) {
          _push(`<p class="opacity-50 !-mt-6 italic">${serverRenderer.ssrInterpolate(__props.frontmatter.subtitle)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<article>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
      if (vue.unref(route).path !== "/") {
        _push(`<div class="prose m-auto mt-8 mb-8">`);
        if (__props.frontmatter.duration) {
          _push(`<a${serverRenderer.ssrRenderAttr("href", vue.unref(tweetUrl))} target="_blank" op50>comment on twitter</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br>`);
        _push(serverRenderer.ssrRenderComponent(_component_router_link, {
          to: vue.unref(route).path.split("/").slice(0, -1).join("/") || "/",
          class: "font-mono no-underline opacity-50 hover:opacity-75"
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` cd .. `);
            } else {
              return [
                vue.createTextVNode(" cd .. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Post.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<hr${_scopeId}><p${_scopeId}>Hi there, I am Oyxiaoxi, a Chinese freelance Full Stack Developer.</p><p${_scopeId}>He has deep knowledge and years of practical experience in Swift, C and web programming. Using these skills to create solutions such as applications and common frameworks.</p><p${_scopeId}>He also loves travelling, reading and photography. He is always willing to try new things and continues to learn from them.</p><hr${_scopeId}><p${_scopeId}>Find me on <a href="https://github.com/oyxiaoxi" target="_blank" rel="noopener"${_scopeId}>GitHub</a>, <a href="https://www.twitter.com/oyxiaoxi" target="_blank" rel="noopener"${_scopeId}>Twitter</a> or <a href="https://weibo.com/AmOyxiaoxi" target="_blank" rel="noopener"${_scopeId}>WeiBo</a><br${_scopeId}> Mail me at <a href="mailto:hi@oyxiaoxi.me"${_scopeId}>hi@oyxiaoxi.me</a>.<br${_scopeId}></p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("hr"),
                vue.createVNode("p", null, "Hi there, I am Oyxiaoxi, a Chinese freelance Full Stack Developer."),
                vue.createVNode("p", null, "He has deep knowledge and years of practical experience in Swift, C and web programming. Using these skills to create solutions such as applications and common frameworks."),
                vue.createVNode("p", null, "He also loves travelling, reading and photography. He is always willing to try new things and continues to learn from them."),
                vue.createVNode("hr"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Find me on "),
                  vue.createVNode("a", {
                    href: "https://github.com/oyxiaoxi",
                    target: "_blank",
                    rel: "noopener"
                  }, "GitHub"),
                  vue.createTextVNode(", "),
                  vue.createVNode("a", {
                    href: "https://www.twitter.com/oyxiaoxi",
                    target: "_blank",
                    rel: "noopener"
                  }, "Twitter"),
                  vue.createTextVNode(" or "),
                  vue.createVNode("a", {
                    href: "https://weibo.com/AmOyxiaoxi",
                    target: "_blank",
                    rel: "noopener"
                  }, "WeiBo"),
                  vue.createVNode("br"),
                  vue.createTextVNode(" Mail me at "),
                  vue.createVNode("a", { href: "mailto:hi@oyxiaoxi.me" }, "hi@oyxiaoxi.me"),
                  vue.createTextVNode("."),
                  vue.createVNode("br")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/index.md");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const routes$1 = [{ "name": "bookmarks", "path": "/bookmarks", "component": () => Promise.resolve().then(function() {
  return bookmarks;
}), "props": true, "meta": { "frontmatter": { "title": "Bookmarks - Oyxiaoxi", "display": "Bookmarks", "subtitle": "Some of My favorite websites/tools with excellent design and UX that I highly recommend" } } }, { "name": "index", "path": "/", "component": _sfc_main$J, "props": true, "meta": { "frontmatter": { "title": "Oyxiaoxi" } } }, { "name": "notes", "path": "/notes", "component": () => Promise.resolve().then(function() {
  return notes;
}), "props": true, "meta": { "frontmatter": { "title": "Notes - Oyxiaoxi", "display": "" } } }, { "name": "photos", "path": "/photos", "component": () => Promise.resolve().then(function() {
  return photos;
}), "props": true, "meta": { "frontmatter": { "title": "Wallpaper - Oyxiaoxi", "display": "Photos", "subtitle": "Some images taken on the computer wallpaper and while travelling", "description": "Some images taken on the computer wallpaper and while travelling", "photos": [{ "title": "", "source": "", "size": "", "desc": "" }] } } }, { "name": "projects", "path": "/projects", "component": () => Promise.resolve().then(function() {
  return projects;
}), "props": true }, { "name": "prose", "path": "/prose", "component": () => Promise.resolve().then(function() {
  return prose;
}), "props": true, "meta": { "frontmatter": { "title": "Prose - Oyxiaoxi", "display": "" } } }, { "name": "reviews", "path": "/reviews", "component": () => Promise.resolve().then(function() {
  return reviews;
}), "props": true, "meta": { "frontmatter": { "title": "Reviews - Oyxiaoxi", "display": "Reviews", "subtitle": "Some comments from friends", "description": "Some comments from friends", "comments": [{ "name": "Calvin", "desc": "\u6653\u9521\u505A\u4E8B\u6709geek\u7CBE\u795E\uFF0C\u5584\u4E8E\u94BB\u7814\uFF0C\u6027\u683C\u7A0D\u663E\u56FA\u6267\uFF0C\u4E13\u4E00\uFF0C\u5C3D\u91CF\u878D\u5165\u96C6\u4F53\uFF0C\u6709\u65F6\u7231\u94BB\u725B\u89D2\u5C16\u3002", "imageUrl": "//cdn.3333120.com/friends/calvin.png" }, { "name": "Lin", "desc": "\u4E3A\u4EBA\u5904\u4E8B\u4F4E\u8C03\uFF0C\u611F\u6027\u6280\u672F\u5927\u4F6C\u3002", "imageUrl": "//cdn.3333120.com/friends/Lin.png" }, { "name": "C", "desc": "Sincere", "imageUrl": "//cdn.3333120.com/friends/Chen.png" }, { "name": "Sun", "desc": "\u662F\u4E2A\u6280\u672F\u5927\u725B\uFF0C\u51FA\u53BB\u73A9\u53D1\u7684\u670B\u53CB\u5708\u7167\u7247\u4E5F\u5F88\u68D2\uFF0C\u4EBA\u5F88\u7EC6\u5FC3\uFF0C\u5728\u7FA4\u91CC\u804A\u5929\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u6709\u4EBA\u8BF4\u8BDD\u6CA1\u4EBA\u63A5\u832C\uFF0C\u4F60\u603B\u662F\u51FA\u6765\u8BF4\u8BDD\uFF0C\u611F\u89C9\u5F88\u6E29\u6696\uFF0C\u5BF9\u8001\u5A46\u4E5F\u5F88\u597D\uFF0C\u4F5C\u4E3A\u672A\u66FE\u8C0B\u9762\u7684\u7F51\u53CB\uFF0C\u7ED9\u6211\u4EEC\u5BC4\u8FC7\u51E0\u6B21\u6C34\u679C\uFF0C\u5F88\u8BA4\u771F\u7684\u628A\u6211\u4EEC\u5F53\u670B\u53CB\uFF0C\u6211\u6709\u65F6\u5019\u6709\u5565\u52A8\u6001\u7684\u65F6\u5019\uFF0C\u4F60\u4E5F\u603B\u662F\u79C1\u4FE1\u5173\u5FC3\uFF0C\u5C31\u5F88\u68D2\uFF01", "imageUrl": "//cdn.3333120.com/friends/Sun.png" }, { "name": "Yang", "desc": "\u4E00\u4E2A\u6E29\u67D4\u7684\u7537\u4EBA\uFF0C\u5728\u5F00\u53D1\u6280\u672F\u65B9\u9762\u662F\u4E2A\u5927\u725B\uFF1B \u5728\u6E38\u620F\u73A9\u5BB6\u4E2D\u4E5F\u662F\u4F18\u79C0\u7684\u597D\u4F19\u4F34\uFF1B \u5728\u751F\u6D3B\u4E2D\u4E5F\u662F\u4E00\u4E2A\u559C\u6B22\u5206\u4EAB\u7684\u597D\u670B\u53CB\uFF1B \u603B\u5F97\u6765\u8BF4\u5C31\u662F\u975E\u5E38\u6E29\u67D4\u3001\u70ED\u7231\u751F\u6D3B\u7684\u4EBA\u513F\u5427\u3002", "imageUrl": "//cdn.3333120.com/friends/Yang.png" }, { "name": "Liu", "desc": "\u4F4E\u8C03\u591A\u91D1\u7684\u6709\u5FD7\u9752\u5E74\uFF0C\u5BF9\u4EBA\u5BF9\u4E8B\u90FD\u4EE5\u8BA4\u771F\u3001\u771F\u8BDA\u7684\u6001\u5EA6\uFF0C\u65F6\u5E38\u4E5F\u4F1A\u800D\u4E00\u4E9B\u5C0F\u5E7D\u9ED8\uFF0C\u559C\u6B22\u6444\u5F71\uFF0C\u5BF9\u65B0\u9C9C\u4E8B\u7269\u5145\u6EE1\u7740\u63A2\u7D22\u597D\u5947\u4E4B\u5FC3\uFF0C\u662F\u4E2A\u5C0F\u679C\u7C89\u3002", "imageUrl": "//cdn.3333120.com/friends/Liu.png" }, { "name": "Man", "desc": "\u5173\u4E8E\u6653\u9521\uFF0C\u633A\u6709\u8DA3\u7684\u662F\u6211\u4EEC\u662F\u5728\u8BBE\u8BA1\u5E08\u7FA4\u91CC\u7ED3\u8BC6\u7684\uFF0C\u5F88\u4E45\u4EE5\u540E\u5927\u5BB6\u624D\u77E5\u9053\u4ED6\u672C\u884C\u662F\u5F00\u53D1\u8005\uFF0C\u5F88\u591A\u5916\u884C\u559C\u6B22\u5728\u5634\u4E0A\u8C08\u8BBE\u8BA1\uFF0C\u8FD8\u662F\u6BD4\u8F83\u5C11\u4EBA\u613F\u610F\u66F4\u6DF1\u5165\u7684\u63A5\u89E6\u5230\u8BBE\u8BA1\u5E08\u7FA4\u4F53\u3002 \u5F88\u957F\u65F6\u95F4\u91CC\u4EE5\u4E3A\u4ED6\u7684\u8A00\u8BED\u548C\u58F0\u97F3\u662F\u4E2A\u5C0F\u6B63\u592A\u7684\u5F62\u8C61\uFF0C\u5927\u5BB6\u89C6\u9891\u4E4B\u540E\u6211\u89C9\u5F97\u81EA\u5DF1\u89C1\u8FC7\u7684\u4EBA\u592A\u5C11\u4E86\u54C8\u54C8\u{1F602}\u3002 \u5C3D\u7BA1\u5982\u6B64\uFF0C\u5728\u89C1\u4E0D\u7740\u9762\u7684\u7FA4\u91CC\uFF0C\u5927\u5BB6\u8FD8\u662F\u5F53\u4ED6\u662F\u4E2A\u5C0F\u6B63\u592A\u6765\u5BF9\u5F85\u5427\u3002\u6709\u4E00\u70B9\u51B2\u52A8\uFF0C\u6709\u4E00\u70B9\u60C5\u7EEA\uFF0C\u6709\u8BA9\u5927\u5BB6\u7FA1\u6155\u7684\u751F\u6D3B\uFF0C\u4E5F\u6709\u5927\u5BB6\u611F\u53D7\u4E0D\u5230\u7684\u538B\u529B\u2026\u4E5F\u8BB8\u662F\u6211\u8EAB\u8FB9\u8FD9\u6837\u7684\u670B\u53CB\u592A\u5C11\uFF0C\u6709\u70B9\u50CF\u98D8\u5728\u7A7A\u4E2D\u7684\u6728\u68C9\u82B1\uFF0C\u677E\u8F6F\u3001\u6613\u788E\uFF0C\u6293\u4E0D\u4F4F\uFF0C\u4E0D\u77E5\u9053\u4ECE\u54EA\u98D8\u6765\u7684\uFF0C\u53C8\u80FD\u5728\u4E00\u4E9B\u65F6\u523B\u611F\u52A8\u5230\u4F60\u3002", "imageUrl": "//cdn.3333120.com/friends/xiaoman.png" }, { "name": "Li", "desc": "\u813E\u6C14\u6709\u70B9\u5927\uFF0C\u9700\u6539\u6B63\uFF0C\u6C14\u5927\u4F24\u8EAB! \u6027\u683C\u5F00\u6717\uFF0C\u7EE7\u7EED\u4FDD\u6301! \u5F85\u4EBA\u771F\u8BDA\u53CB\u5584\uFF0C\u503C\u5F97\u53D1\u626C\u5149\u5927\uFF0C\u4EE5\u540E\u4E5F\u8981\u8FD9\u6837\u6559\u80B2\u4E0B\u4E00\u4EE3!  \u4E3A\u4EBA\u4E0D\u5351\u4E0D\u4EA2\uFF0C\u6BD4\u8F83\u4E2D\u6B63!  \u9047\u4E8B\u6709\u70B9\u60B2\u89C2\uFF0C\u5E94\u8BE5\u655E\u5F00\u5FC3\u6249\uFF0C\u5411\u4ED6\u4EBA\u503E\u8BC9!  \u7231\u5403\uFF0C\u4E0D\u7231\u7761\uFF0C\u7231\u5B66\u4E60\u3001\u4E0D\u7231\u8FD0\u52A8\u3001\u7231\u5E72\u51C0\u3001\u4E0D\u7231\u52B3\u52A8\uFF0C\u5C11\u5403\u591A\u52A8\uFF0C\u5C11\u73A9\u591A\u7761\uFF0C\u6CE8\u610F\u51CF\u80A5\uFF0C\u8EAB\u4F53\u624D\u80FD\u5065\u5EB7!  \u662F\u4E2A\u597D\u5B69\u5B50\uFF0C\u597D\u670B\u53CB\uFF0C\u597D\u7537\u670B\u53CB\uFF0C\u4EE5\u540E\u4E5F\u4F1A\u662F\u4E2A\u6709\u8D23\u4EFB\u7684\u597D\u7238\u7238!  \u5584\u826F\u7684\u5C0F\u670B\u53CB\uFF0C\u5E0C\u671B\u4F60\u80FD\u52C7\u6562\u8FFD\u6C42\u81EA\u5DF1\u60F3\u8981\u7684\uFF0C\u4E0D\u8981\u77BB\u524D\u987E\u540E\uFF0C\u8003\u8651\u592A\u591A\u5F80\u5F80\u4F1A\u5931\u53BB\u5F88\u591A\u673A\u4F1A\uFF0C\u8FC7\u53BB\u7684\u4E8B\u60C5\u4E0D\u8981\u60F3\u592A\u591A\uFF0C\u5F80\u524D\u770B\uFF0C\u52A0\u6CB9!", "imageUrl": "//cdn.3333120.com/friends/Li.png" }] } } }, { "name": "travel", "path": "/travel", "component": () => Promise.resolve().then(function() {
  return travel;
}), "props": true, "meta": { "frontmatter": { "title": "Travel - Oyxiaoxi", "display": "" } } }, { "name": "posts-2021-Annual-Report-zh", "path": "/posts/2021-annual-report-zh", "component": () => Promise.resolve().then(function() {
  return _2021AnnualReportZh;
}), "props": true, "meta": { "frontmatter": { "title": "2021 Annual Report", "date": "2021-12-28T15:40:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 15min", "description": "2021 Annual Report\u3002" } } }, { "name": "posts-File-synchronisation-between-servers", "path": "/posts/file-synchronisation-between-servers", "component": () => Promise.resolve().then(function() {
  return FileSynchronisationBetweenServers;
}), "props": true, "meta": { "frontmatter": { "title": "File synchronisation between servers", "date": "2019-08-19T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "File synchronisation between servers\u3002" } } }, { "name": "posts-Flush-MAC-Dns-cache", "path": "/posts/flush-mac-dns-cache", "component": () => Promise.resolve().then(function() {
  return FlushMACDnsCache;
}), "props": true, "meta": { "frontmatter": { "title": "Find Files", "date": "2022-05-16T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002" } } }, { "name": "posts-How-long-can-we-dream", "path": "/posts/how-long-can-we-dream", "component": () => Promise.resolve().then(function() {
  return HowLongCanWeDream;
}), "props": true, "meta": { "frontmatter": { "title": "\u8FD8\u80FD\u68A6\u591A\u4E45 ...", "date": "2015-09-26T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 3min", "description": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002" } } }, { "name": "posts-If-the-heart-does-not-move", "path": "/posts/if-the-heart-does-not-move", "component": () => Promise.resolve().then(function() {
  return IfTheHeartDoesNotMove;
}), "props": true, "meta": { "frontmatter": { "title": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002", "date": "2013-10-14T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 3min", "description": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002" } } }, { "name": "posts-Laravel-Common-Extension-Packages", "path": "/posts/laravel-common-extension-packages", "component": () => Promise.resolve().then(function() {
  return LaravelCommonExtensionPackages;
}), "props": true, "meta": { "frontmatter": { "title": "Larvel Common Extension Packages", "date": "2021-11-18T18:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 8min", "description": "HLarvel Common Extension Packages\u3002" } } }, { "name": "posts-P.A.R.A-zh", "path": "/posts/p.a.r.a-zh", "component": () => Promise.resolve().then(function() {
  return P_A_R_AZh;
}), "props": true, "meta": { "frontmatter": { "title": "P.A.R.A", "date": "2021-05-28T08:13:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 15min", "description": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002" } } }, { "name": "posts-Quietly-keeping-the-flowers-in-bloom", "path": "/posts/quietly-keeping-the-flowers-in-bloom", "component": () => Promise.resolve().then(function() {
  return QuietlyKeepingTheFlowersInBloom;
}), "props": true, "meta": { "frontmatter": { "title": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00", "date": "2015-08-21T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002" } } }, { "name": "posts-domain-eamil", "path": "/posts/domain-eamil", "component": () => Promise.resolve().then(function() {
  return domainEamil;
}), "props": true, "meta": { "frontmatter": { "title": "Domain Email", "date": "2020-06-05T13:29:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 2min", "description": "Domain Name Custom Mailboxes\u3002" } } }, { "name": "posts-find-files", "path": "/posts/find-files", "component": () => Promise.resolve().then(function() {
  return findFiles;
}), "props": true, "meta": { "frontmatter": { "title": "Flush MAC Dns cache", "date": "2019-08-19T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "Flush MAC Dns cache\u3002" } } }, { "name": "posts-forced-cross-domain", "path": "/posts/forced-cross-domain", "component": () => Promise.resolve().then(function() {
  return forcedCrossDomain;
}), "props": true, "meta": { "frontmatter": { "title": "Forced Cross Domain", "date": "2022-05-16T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002" } } }, { "name": "posts-france", "path": "/posts/france", "component": () => Promise.resolve().then(function() {
  return france;
}), "props": true, "meta": { "frontmatter": { "title": "France", "date": "2018-04-10T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "France Travel itineraries\u3002" } } }, { "name": "posts-game-theory-zh", "path": "/posts/game-theory-zh", "component": () => Promise.resolve().then(function() {
  return gameTheoryZh;
}), "props": true, "meta": { "frontmatter": { "title": "\u535A\u5F08\u8BBA", "date": "2021-06-28T11:02:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002" } } }, { "name": "posts-germany", "path": "/posts/germany", "component": () => Promise.resolve().then(function() {
  return germany;
}), "props": true, "meta": { "frontmatter": { "title": "Germany", "date": "2017-11-13T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Germany Travel itineraries\u3002" } } }, { "name": "posts-github-copilot", "path": "/posts/github-copilot", "component": () => Promise.resolve().then(function() {
  return githubCopilot;
}), "props": true, "meta": { "frontmatter": { "title": "Github Copilot", "date": "2022-03-30T16:00:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 7min", "description": "Github Copilot\u3002" } } }, { "name": "posts-golang-gin-cors-policy-zh", "path": "/posts/golang-gin-cors-policy-zh", "component": () => Promise.resolve().then(function() {
  return golangGinCorsPolicyZh;
}), "props": true, "meta": { "frontmatter": { "title": "GoLang Gin CORS Policy ", "date": "2022-04-10T16:00:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 2min", "description": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002" } } }, { "name": "posts-homestead-change-php-version", "path": "/posts/homestead-change-php-version", "component": () => Promise.resolve().then(function() {
  return homesteadChangePhpVersion;
}), "props": true, "meta": { "frontmatter": { "title": "Homestead Change PhP Version", "date": "2022-04-02T18:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Homestead Change PhP Version\u3002" } } }, { "name": "posts-i-still-like-you-a-lot", "path": "/posts/i-still-like-you-a-lot", "component": () => Promise.resolve().then(function() {
  return iStillLikeYouALot;
}), "props": true, "meta": { "frontmatter": { "title": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60 ...", "date": "2017-11-11T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 7min", "description": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002" } } }, { "name": "posts", "path": "/posts", "component": () => Promise.resolve().then(function() {
  return index;
}), "props": true, "meta": { "frontmatter": { "title": "Blog - Oyxiaoxi", "display": "" } } }, { "name": "posts-iptables-block-user-ip", "path": "/posts/iptables-block-user-ip", "component": () => Promise.resolve().then(function() {
  return iptablesBlockUserIp;
}), "props": true, "meta": { "frontmatter": { "title": "Iptables Block User IP", "date": "2017-03-06T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002" } } }, { "name": "posts-japan", "path": "/posts/japan", "component": () => Promise.resolve().then(function() {
  return japan;
}), "props": true, "meta": { "frontmatter": { "title": "Japan", "date": "2018-10-02T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Japan Travel itineraries\u3002" } } }, { "name": "posts-json-related-small-requirements-solution-process-and-deas", "path": "/posts/json-related-small-requirements-solution-process-and-deas", "component": () => Promise.resolve().then(function() {
  return jsonRelatedSmallRequirementsSolutionProcessAndDeas;
}), "props": true, "meta": { "frontmatter": { "title": "JSON \u76F8\u5173\u5C0F\u9700\u6C42\u7684\u89E3\u51B3\u8FC7\u7A0B\u4E0E\u601D\u8DEF", "date": "2021-07-01T12:36:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 18min", "description": "JSON related small requirements solution process and ideas\u3002" } } }, { "name": "posts-northern-europe", "path": "/posts/northern-europe", "component": () => Promise.resolve().then(function() {
  return northernEurope;
}), "props": true, "meta": { "frontmatter": { "title": "Northern Europe", "date": "2017-05-03T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Northern Europe Travel itineraries\u3002" } } }, { "name": "posts-s.o.l.i.d.principles-around-you", "path": "/posts/s.o.l.i.d.principles-around-you", "component": () => Promise.resolve().then(function() {
  return s_o_l_i_d_principlesAroundYou;
}), "props": true, "meta": { "frontmatter": { "title": "S.O.L.I.D. Principles Around You", "date": "2021-07-02T17:05:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 5min", "description": "S.O.L.I.D. Principles Around You\u3002" } } }, { "name": "posts-sometime", "path": "/posts/sometime", "component": () => Promise.resolve().then(function() {
  return sometime;
}), "props": true, "meta": { "frontmatter": { "title": "SomeTime", "date": "2021-06-30T13:48:00.000Z", "draft": false, "lang": "en", "type": "prose", "duration": "Read \xB7 5min", "description": "SomeTime\u3002" } } }, { "name": "posts-store-the-sunshine-and-there-will-be-a-faraway-place-zh", "path": "/posts/store-the-sunshine-and-there-will-be-a-faraway-place-zh", "component": () => Promise.resolve().then(function() {
  return storeTheSunshineAndThereWillBeAFarawayPlaceZh;
}), "props": true, "meta": { "frontmatter": { "title": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002", "date": "2022-04-09T15:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" } } }, { "name": "posts-tailwindcss-ui-zh", "path": "/posts/tailwindcss-ui-zh", "component": () => Promise.resolve().then(function() {
  return tailwindcssUiZh;
}), "props": true, "meta": { "frontmatter": { "title": "TailWindCss & TailWind UI", "date": "2022-04-02T16:00:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 4min", "description": "TailWind CSS & TailWind UI\u3002" } } }, { "name": "posts-traceroute", "path": "/posts/traceroute", "component": () => Promise.resolve().then(function() {
  return traceroute;
}), "props": true, "meta": { "frontmatter": { "title": "Traceroute", "date": "2017-03-29T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "Traceroute\u3002" } } }, { "name": "posts-zshrc-alias", "path": "/posts/zshrc-alias", "component": () => Promise.resolve().then(function() {
  return zshrcAlias;
}), "props": true, "meta": { "frontmatter": { "title": "Zshrc Alias", "date": "2022-05-29T15:41:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 3min", "description": "Zshrc Alias\u3002" } } }];
const _sfc_main$I = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mt-10 mb-6 prose m-auto opacity-50 flex" }, _attrs))}><span class="text-sm"><a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="${serverRenderer.ssrRenderStyle({ "color": "inherit" })}">CC BY-NC-SA 4.0</a> 2022-PRESENT \xA9 Oyxiaoxi</span><div class="flex-auto"></div></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$H = /* @__PURE__ */ vue.defineComponent({
  name: "ToggleTheme",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "w-8 text-center py-9 lt-md:hidden" }, _attrs))}><a class="select-none" title="Toggle Color Scheme"><div style="${serverRenderer.ssrRenderStyle(vue.unref(isDark) ? null : { display: "none" })}" i-emojione-v1:waxing-gibbous-moon></div><div style="${serverRenderer.ssrRenderStyle(!vue.unref(isDark) ? null : { display: "none" })}" i-fxemoji:sunwithface></div></a></div>`);
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ToggleTheme.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ vue.defineComponent({
  name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const inactiveStyle = "opacity-50 hover:opacity-50";
    const route = vueRouter.useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_toggle_theme = _sfc_main$H;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "nav flex items-center" }, _attrs))}><nav class="nav__content">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        class: "nav__logo w-8 h-8 lg:fixed select-none outline-none",
        to: "/",
        focusable: "false"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img style="${serverRenderer.ssrRenderStyle(vue.unref(isDark) ? null : { display: "none" })}" src="//cdn.3333120.com/static/logo-dark.svg" alt="logo"${_scopeId}><img style="${serverRenderer.ssrRenderStyle(!vue.unref(isDark) ? null : { display: "none" })}" src="//cdn.3333120.com/static/logo.svg" alt="logo"${_scopeId}>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("img", {
                src: "//cdn.3333120.com/static/logo-dark.svg",
                alt: "logo"
              }, null, 512), [
                [vue.vShow, vue.unref(isDark)]
              ]),
              vue.withDirectives(vue.createVNode("img", {
                src: "//cdn.3333120.com/static/logo.svg",
                alt: "logo"
              }, null, 512), [
                [vue.vShow, !vue.unref(isDark)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="nav__list sm:20 all:transition-400">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/posts",
        title: "Posts",
        class: ["w-8 text-center", vue.unref(route).path === "/posts" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-fa-solid:blog${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-fa-solid:blog": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/notes",
        title: "Notes",
        class: ["w-8 text-center", vue.unref(route).path === "/notes" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-emojione-v1:note-pad${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-emojione-v1:note-pad": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/travel",
        title: "Travel",
        class: ["w-8 text-center lt-md:hidden", vue.unref(route).path === "/travel" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-twemoji:small-airplane${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-twemoji:small-airplane": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/prose",
        title: "Travel",
        class: ["w-8 text-center lt-md:hidden", vue.unref(route).path === "/prose" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-emojione:rosette${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-emojione:rosette": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/projects",
        title: "Projects",
        class: ["w-8 text-center", vue.unref(route).path === "/projects" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-logos:producthunt${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-logos:producthunt": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/bookmarks",
        title: "Bookmarks",
        class: ["w-8 text-center", vue.unref(route).path === "/bookmarks" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-noto-v1:bookmark-tabs${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-noto-v1:bookmark-tabs": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/photos",
        title: "Photo",
        class: ["w-8 text-center", vue.unref(route).path === "/photos" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-logos:google-photos${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-logos:google-photos": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/reviews",
        title: "Reviews",
        class: ["w-8 text-center lt-md:hidden", vue.unref(route).path === "/reviews" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div i-icon-park-outline:safe-retrieval${_scopeId}></div>`);
          } else {
            return [
              vue.createVNode("div", { "i-icon-park-outline:safe-retrieval": "" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://oyxiaoxi.me/feed.xml" target="_blank" title="RSS" class="${serverRenderer.ssrRenderClass([_ctx.Rss ? "" : inactiveStyle, "w-8 text-center lt-md:hidden"])}"><div i-carbon:rss></div></a></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_toggle_theme, null, null, _parent));
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = /* @__PURE__ */ vue.defineComponent({
  name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    head.useHead({
      meta: [
        { property: "og:title", content: "Oyxiaoxi" },
        { property: "og:image", content: "http://cdn.3333120.com/static/avatar.jpeg" },
        { name: "description", content: "Oyxiaoxi's Portfolio" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "@Oyxiaoxi" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = _sfc_main$G;
      const _component_router_view = vue.resolveComponent("router-view");
      const _component_Footer = __unplugin_components_1;
      const _directive_auto_animate = vue.resolveDirective("auto-animate");
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "container px-10 py-10" }, serverRenderer.ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const routes = routes$1.map((i) => {
  return __spreadProps(__spreadValues({}, i), {
    alias: i.path.endsWith("/") ? `${i.path}index.html` : `${i.path}.html`
  });
});
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition)
    return savedPosition;
  else
    return { top: 0 };
};
const createApp = viteSsg.ViteSSG(_sfc_main$F, { routes, scrollBehavior }, ({ app, router, isClient }) => {
  app.use(vue$1.autoAnimatePlugin);
  dayjs__default["default"].extend(LocalizedFormat__default["default"]);
  if (isClient) {
    router.beforeEach(() => {
      NProgress__default["default"].start();
    });
    router.afterEach(() => {
      NProgress__default["default"].done();
    });
  }
});
const _sfc_main$E = {
  name: "bookmarks",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Bookmarks - Oyxiaoxi", "display": "Bookmarks", "subtitle": "Some of My favorite websites/tools with excellent design and UX that I highly recommend", "meta": [{ "property": "og:title", "content": "Bookmarks - Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Bookmarks - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Bookmarks - Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 id="design" tabindex="-1"${_scopeId}>Design <a class="header-anchor" href="#design" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://play.typedetail.com/" target="_blank" rel="noopener"${_scopeId}>Font Playground</a></li></ul><h4 id="color" tabindex="-1"${_scopeId}>Color <a class="header-anchor" href="#color" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}><a href="https://hihayk.github.io/scale/" target="_blank" rel="noopener"${_scopeId}>Scale</a></li><li${_scopeId}><a href="https://hihayk.github.io/wheel/" target="_blank" rel="noopener"${_scopeId}>Wheel</a></li><li${_scopeId}><a href="https://color.adobe.com/" target="_blank" rel="noopener"${_scopeId}>Adobe Color</a></li><li${_scopeId}><a href="https://nipponcolors.com/" target="_blank" rel="noopener"${_scopeId}>NIPPON COLORS - \u65E5\u672C\u306E\u4F1D\u7D71\u8272</a></li><li${_scopeId}><a href="https://terminal.sexy/" target="_blank" rel="noopener"${_scopeId}>terminal.sexy</a></li></ul><h3 id="fm" tabindex="-1"${_scopeId}>FM <a class="header-anchor" href="#fm" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://anyway.fm/" target="_blank" rel="noopener"${_scopeId}>AnyWay</a> - \u8BBE\u8BA1\u6742\u8C08</li><li${_scopeId}><a href="https://talk.swift.gg/" target="_blank" rel="noopener"${_scopeId}>Talk Swift</a> - \u7A0B\u5E8F\u5458\u95F2\u804A\u8282\u76EE</li></ul><h4 id="ui-ux" tabindex="-1"${_scopeId}>UI/UX <a class="header-anchor" href="#ui-ux" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}><a href="https://tailwind-gradient-designer.csspost.com/" target="_blank" rel="noopener"${_scopeId}>Tailwind Gradient Designer</a></li><li${_scopeId}><a href="https://open-ui.org/" target="_blank" rel="noopener"${_scopeId}>Open UI</a> - Comparison between different component frameworks</li><li${_scopeId}><a href="http://www.infoier.com/" target="_blank" rel="noopener"${_scopeId}>Infoier</a></li></ul><h3 id="content" tabindex="-1"${_scopeId}>Content <a class="header-anchor" href="#content" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="http://www.hemingwayapp.com/" target="_blank" rel="noopener"${_scopeId}>Hemingway</a> - Text Editor</li><li${_scopeId}><a href="https://rxresu.me/" target="_blank" rel="noopener"${_scopeId}>Reactive Resume</a></li></ul><h3 id="dev" tabindex="-1"${_scopeId}>Dev <a class="header-anchor" href="#dev" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://devhints.io/" target="_blank" rel="noopener"${_scopeId}>Rico\u2019s cheatsheets</a></li><li${_scopeId}><a href="https://perf.link/" target="_blank" rel="noopener"${_scopeId}>Perflink</a> - JS Benchmarks</li><li${_scopeId}><a href="https://regex101.com/" target="_blank" rel="noopener"${_scopeId}>Regex 101</a></li><li${_scopeId}><a href="https://regexper.com/" target="_blank" rel="noopener"${_scopeId}>RegExper</a> - Regex Visualizer</li><li${_scopeId}><a href="https://regexlearn.com/zh-cn" target="_blank" rel="noopener"${_scopeId}>Regex Learn</a></li><li${_scopeId}><a href="https://bundlephobia.com/" target="_blank" rel="noopener"${_scopeId}>Bundle Phobia</a> - Check your npm package size</li><li${_scopeId}><a href="https://transform.tools/" target="_blank" rel="noopener"${_scopeId}>transform</a> - Collection of code transformers</li><li${_scopeId}><a href="https://vue3.chengpeiquan.com/" target="_blank" rel="noopener"${_scopeId}>Vue3 \u5165\u95E8\u6307\u5357\u4E0E\u5B9E\u6218\u6848\u4F8B</a></li><li${_scopeId}><a href="https://jkchao.github.io/typescript-book-chinese/" target="_blank" rel="noopener"${_scopeId}>\u6DF1\u5165\u7406\u89E3 TypeScript</a></li><li${_scopeId}><a href="http://ts.xcatliu.com/" target="_blank" rel="noopener"${_scopeId}>TypeScript \u5165\u95E8\u6559\u7A0B</a></li><li${_scopeId}><a href="https://sqlbolt.com" target="_blank" rel="noopener"${_scopeId}>SQLBolt</a> - Learn SQL with simple, interactive exercises.</li></ul><h4 id="css" tabindex="-1"${_scopeId}>CSS <a class="header-anchor" href="#css" aria-hidden="true"${_scopeId}>#</a></h4><ul${_scopeId}><li${_scopeId}><a href="https://adamschwartz.co/magic-of-css/" target="_blank" rel="noopener"${_scopeId}>Magic of CSS</a></li><li${_scopeId}><a href="http://apps.workflower.fi/vocabs/css/en" target="_blank" rel="noopener"${_scopeId}>CSS Vocabulary</a></li><li${_scopeId}><a href="http://1linelayouts.glitch.me/" target="_blank" rel="noopener"${_scopeId}>1-Line Layouts</a></li><li${_scopeId}><a href="https://easings.net/" target="_blank" rel="noopener"${_scopeId}>Easing functions</a></li></ul><h3 id="resources" tabindex="-1"${_scopeId}>Resources <a class="header-anchor" href="#resources" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://worldvectorlogo.com/" target="_blank" rel="noopener"${_scopeId}>World Vector Logo</a></li><li${_scopeId}><a href="http://icones.js.org/" target="_blank" rel="noopener"${_scopeId}>Ic\xF4nes</a></li></ul><h3 id="naming" tabindex="-1"${_scopeId}>Naming <a class="header-anchor" href="#naming" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://remarkablemark.org/npm-package-name-checker/" target="_blank" rel="noopener"${_scopeId}>npm name check</a></li><li${_scopeId}><a href="https://smodin.me/translate-one-text-into-multiple-languages" target="_blank" rel="noopener"${_scopeId}>translate to multiple languages</a></li></ul><h3 id="computer-graphic" tabindex="-1"${_scopeId}>Computer Graphic <a class="header-anchor" href="#computer-graphic" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://www.clicktorelease.com/code/polygon-shredder/" target="_blank" rel="noopener"${_scopeId}>The Polygon Shredder</a></li></ul><h3 id="diagram" tabindex="-1"${_scopeId}>Diagram <a class="header-anchor" href="#diagram" aria-hidden="true"${_scopeId}>#</a></h3><ul${_scopeId}><li${_scopeId}><a href="https://isoflow.io/" target="_blank" rel="noopener"${_scopeId}>Isoflow</a></li></ul></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("h3", {
                  id: "design",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Design "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#design",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://play.typedetail.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Font Playground")
                  ])
                ]),
                vue.createVNode("h4", {
                  id: "color",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Color "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#color",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://hihayk.github.io/scale/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Scale")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://hihayk.github.io/wheel/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Wheel")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://color.adobe.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Adobe Color")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://nipponcolors.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "NIPPON COLORS - \u65E5\u672C\u306E\u4F1D\u7D71\u8272")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://terminal.sexy/",
                      target: "_blank",
                      rel: "noopener"
                    }, "terminal.sexy")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "fm",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("FM "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#fm",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://anyway.fm/",
                      target: "_blank",
                      rel: "noopener"
                    }, "AnyWay"),
                    vue.createTextVNode(" - \u8BBE\u8BA1\u6742\u8C08")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://talk.swift.gg/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Talk Swift"),
                    vue.createTextVNode(" - \u7A0B\u5E8F\u5458\u95F2\u804A\u8282\u76EE")
                  ])
                ]),
                vue.createVNode("h4", {
                  id: "ui-ux",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("UI/UX "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#ui-ux",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://tailwind-gradient-designer.csspost.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Tailwind Gradient Designer")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://open-ui.org/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Open UI"),
                    vue.createTextVNode(" - Comparison between different component frameworks")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://www.infoier.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Infoier")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "content",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Content "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#content",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://www.hemingwayapp.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Hemingway"),
                    vue.createTextVNode(" - Text Editor")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://rxresu.me/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Reactive Resume")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "dev",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Dev "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#dev",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://devhints.io/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Rico\u2019s cheatsheets")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://perf.link/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Perflink"),
                    vue.createTextVNode(" - JS Benchmarks")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://regex101.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Regex 101")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://regexper.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "RegExper"),
                    vue.createTextVNode(" - Regex Visualizer")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://regexlearn.com/zh-cn",
                      target: "_blank",
                      rel: "noopener"
                    }, "Regex Learn")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://bundlephobia.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Bundle Phobia"),
                    vue.createTextVNode(" - Check your npm package size")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://transform.tools/",
                      target: "_blank",
                      rel: "noopener"
                    }, "transform"),
                    vue.createTextVNode(" - Collection of code transformers")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://vue3.chengpeiquan.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Vue3 \u5165\u95E8\u6307\u5357\u4E0E\u5B9E\u6218\u6848\u4F8B")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://jkchao.github.io/typescript-book-chinese/",
                      target: "_blank",
                      rel: "noopener"
                    }, "\u6DF1\u5165\u7406\u89E3 TypeScript")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://ts.xcatliu.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "TypeScript \u5165\u95E8\u6559\u7A0B")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://sqlbolt.com",
                      target: "_blank",
                      rel: "noopener"
                    }, "SQLBolt"),
                    vue.createTextVNode(" - Learn SQL with simple, interactive exercises.")
                  ])
                ]),
                vue.createVNode("h4", {
                  id: "css",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("CSS "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#css",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://adamschwartz.co/magic-of-css/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Magic of CSS")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://apps.workflower.fi/vocabs/css/en",
                      target: "_blank",
                      rel: "noopener"
                    }, "CSS Vocabulary")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://1linelayouts.glitch.me/",
                      target: "_blank",
                      rel: "noopener"
                    }, "1-Line Layouts")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://easings.net/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Easing functions")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "resources",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Resources "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#resources",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://worldvectorlogo.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "World Vector Logo")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "http://icones.js.org/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Ic\xF4nes")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "naming",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Naming "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#naming",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://remarkablemark.org/npm-package-name-checker/",
                      target: "_blank",
                      rel: "noopener"
                    }, "npm name check")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://smodin.me/translate-one-text-into-multiple-languages",
                      target: "_blank",
                      rel: "noopener"
                    }, "translate to multiple languages")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "computer-graphic",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Computer Graphic "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#computer-graphic",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://www.clicktorelease.com/code/polygon-shredder/",
                      target: "_blank",
                      rel: "noopener"
                    }, "The Polygon Shredder")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "diagram",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Diagram "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#diagram",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("a", {
                      href: "https://isoflow.io/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Isoflow")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/bookmarks.md");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var bookmarks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
  name: "AppLink",
  __ssrInlineRender: true,
  props: {
    to: null
  },
  setup(__props) {
    const props = __props;
    const isExternalLink = vue.computed(() => {
      return typeof props.to === "string" && props.to.startsWith("http");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      if (vue.unref(isExternalLink)) {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps(_ctx.$attrs, {
          href: __props.to,
          target: "_blank"
        }, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(serverRenderer.ssrRenderComponent(_component_router_link, vue.mergeProps(_ctx.$props, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/AppLink.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = vue.defineComponent({
  name: "ListPosts",
  __ssrInlineRender: true,
  props: {
    type: null,
    posts: null
  },
  setup(__props) {
    const props = __props;
    const router = vueRouter.useRouter();
    const routes2 = router.getRoutes().filter((i) => i.path.startsWith("/posts") && i.meta.frontmatter.date).sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date)).filter((i) => !i.path.endsWith(".html") && i.meta.frontmatter.type === props.type).map((i) => ({
      path: i.path,
      title: i.meta.frontmatter.title,
      date: i.meta.frontmatter.date,
      lang: i.meta.frontmatter.lang,
      duration: i.meta.frontmatter.duration
    }));
    const posts = vue.computed(() => (props.posts || routes2).filter((i) => !englishOnly.value || i.lang !== "zh"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_app_link = _sfc_main$D;
      _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (!vue.unref(posts).length) {
        _push(`<div py2 op50> { nothing here yet } </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (route) => {
        _push(serverRenderer.ssrRenderComponent(_component_app_link, {
          key: route.path,
          class: "item block font-normal mb-6 mt-2 no-underline",
          to: route.path
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<li class="no-underline"${_scopeId}><div class="title text-lg"${_scopeId}>${serverRenderer.ssrInterpolate(route.title)} `);
              if (route.lang === "zh") {
                _push2(`<sup class="text-xs border border-current rounded px-1 pb-0.2"${_scopeId}>\u4E2D\u6587</sup>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="time opacity-50 text-sm -mt-1"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(formatDate)(route.date))} - `);
              if (route.duration) {
                _push2(`<span class="opacity-50"${_scopeId}>${serverRenderer.ssrInterpolate(route.duration)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></li>`);
            } else {
              return [
                vue.createVNode("li", { class: "no-underline" }, [
                  vue.createVNode("div", { class: "title text-lg" }, [
                    vue.createTextVNode(vue.toDisplayString(route.title) + " ", 1),
                    route.lang === "zh" ? (vue.openBlock(), vue.createBlock("sup", {
                      key: 0,
                      class: "text-xs border border-current rounded px-1 pb-0.2"
                    }, "\u4E2D\u6587")) : vue.createCommentVNode("", true)
                  ]),
                  vue.createVNode("div", { class: "time opacity-50 text-sm -mt-1" }, [
                    vue.createTextVNode(vue.toDisplayString(vue.unref(formatDate)(route.date)) + " - ", 1),
                    route.duration ? (vue.openBlock(), vue.createBlock("span", {
                      key: 0,
                      class: "opacity-50"
                    }, vue.toDisplayString(route.duration), 1)) : vue.createCommentVNode("", true)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ListPosts.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
  name: "SubNav",
  __ssrInlineRender: true,
  setup(__props) {
    const inactiveStyle = "opacity-20 hover:opacity-50";
    const route = vueRouter.useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "prose m-auto mb-8 select-none" }, _attrs))}><button flex="~ gap1" items-center mb2 op30 text-xs><div${serverRenderer.ssrRenderAttr("i", vue.unref(englishOnly) ? "carbon-checkbox-checked" : "carbon-checkbox")}></div> English Only </button><div mb-0 flex="~ gap-3" text-2xl>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/posts",
        class: ["!border-none !font-400", vue.unref(route).path === "/posts" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Blog `);
          } else {
            return [
              vue.createTextVNode(" Blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/notes",
        class: ["!border-none !font-400", vue.unref(route).path === "/notes" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Notes `);
          } else {
            return [
              vue.createTextVNode(" Notes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/travel",
        class: ["!border-none !font-400", vue.unref(route).path === "/travel" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Travel `);
          } else {
            return [
              vue.createTextVNode(" Travel ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/prose",
        class: ["!border-none !font-400", vue.unref(route).path === "/prose" ? "" : inactiveStyle]
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Prose `);
          } else {
            return [
              vue.createTextVNode(" Prose ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SubNav.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  name: "notes",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Notes - Oyxiaoxi", "display": "", "meta": [{ "property": "og:title", "content": "Notes - Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Notes - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Notes - Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_SubNav = _sfc_main$B;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListPosts = _sfc_main$C;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}><p${_scopeId}><a href="https://oyxiaoxi.me/notes/feed.xml" target="_blank" rel="noopener"${_scopeId}>RSS Feed</a></p>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SubNav, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListPosts, { type: "notes" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode("p", null, [
                  vue.createVNode("a", {
                    href: "https://oyxiaoxi.me/notes/feed.xml",
                    target: "_blank",
                    rel: "noopener"
                  }, "RSS Feed")
                ]),
                vue.createVNode(_component_SubNav),
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListPosts, { type: "notes" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/notes.md");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var notes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  name: "photos",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Wallpaper - Oyxiaoxi", "display": "Photos", "subtitle": "Some images taken on the computer wallpaper and while travelling", "description": "Some images taken on the computer wallpaper and while travelling", "photos": [{ "title": "", "source": "", "size": "", "desc": "" }], "meta": [{ "property": "og:title", "content": "Wallpaper - Oyxiaoxi" }, { "property": "og:description", "content": "Some images taken on the computer wallpaper and while travelling" }, { "name": "description", "content": "Some images taken on the computer wallpaper and while travelling" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Wallpaper - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Wallpaper - Oyxiaoxi" }, { "property": "og:description", "content": "Some images taken on the computer wallpaper and while travelling" }, { "name": "description", "content": "Some images taken on the computer wallpaper and while travelling" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/photos.md");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var photos = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
var ListProjects_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
  name: "ListProjects",
  __ssrInlineRender: true,
  props: {
    projects: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Slidev = vue.resolveComponent("Slidev");
      const _component_VueUse = vue.resolveComponent("VueUse");
      const _component_VueReactivity = vue.resolveComponent("VueReactivity");
      const _component_VueDemi = vue.resolveComponent("VueDemi");
      const _component_Unocss = vue.resolveComponent("Unocss");
      const _component_Vitest = vue.resolveComponent("Vitest");
      _push(`<!--[-->`);
      serverRenderer.ssrRenderList(Object.keys(__props.projects), (key) => {
        _push(`<!--[--><h4 class="mt-10 font-bold" data-v-7ddf64c7>${serverRenderer.ssrInterpolate(key)}</h4><div class="project-grid py-2 -mx-3 gap-2" data-v-7ddf64c7><!--[-->`);
        serverRenderer.ssrRenderList(__props.projects[key], (item, idx) => {
          _push(`<a${serverRenderer.ssrRenderAttr("href", item.link)} target="_blank" class="${serverRenderer.ssrRenderClass([!item.link ? "opacity-0 pointer-events-none h-0 -mt-8 -mb-4" : "", "item relative flex items-center"])}"${serverRenderer.ssrRenderAttr("title", item.name)} data-v-7ddf64c7>`);
          if (item.icon) {
            _push(`<div class="pt-2 pr-5" data-v-7ddf64c7>`);
            if (item.icon === "slidev") {
              _push(serverRenderer.ssrRenderComponent(_component_Slidev, { class: "text-4xl opacity-50" }, null, _parent));
            } else if (item.icon === "vueuse") {
              _push(serverRenderer.ssrRenderComponent(_component_VueUse, { class: "text-4xl opacity-50" }, null, _parent));
            } else if (item.icon === "vue-reactivity") {
              _push(serverRenderer.ssrRenderComponent(_component_VueReactivity, { class: "text-4xl opacity-50" }, null, _parent));
            } else if (item.icon === "vue-demi") {
              _push(serverRenderer.ssrRenderComponent(_component_VueDemi, { class: "text-4xl opacity-50" }, null, _parent));
            } else if (item.icon === "unocss") {
              _push(serverRenderer.ssrRenderComponent(_component_Unocss, { class: "text-4xl opacity-50" }, null, _parent));
            } else if (item.icon === "vitest") {
              _push(serverRenderer.ssrRenderComponent(_component_Vitest, { class: "text-4xl opacity-50" }, null, _parent));
            } else {
              _push(`<div class="${serverRenderer.ssrRenderClass([item.icon || "i-carbon-unknown", "text-3xl opacity-50"])}" data-v-7ddf64c7></div>`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex-auto" data-v-7ddf64c7><div cla ss="text-normal" data-v-7ddf64c7>${serverRenderer.ssrInterpolate(item.name)}</div><div class="desc text-sm opacity-50 font-normal" data-v-7ddf64c7>${item.desc}</div></div></a>`);
        });
        _push(`<!--]--></div><!--]-->`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ListProjects.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-7ddf64c7"]]);
const _sfc_main$x = {
  name: "projects",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Projects - Oyxiaoxi", "display": "Projects", "subtitle": "List of projects that I am proud of", "description": "List of projects that I am proud of", "projects": { "Vue Ecosystem": [{ "name": "Vue Composables", "link": "https://github.com/Oyxiaoxi/Vue-Composables", "desc": "Vue3 Composition Api", "icon": "i-mdi:vuejs" }, { "name": "Nestjs", "link": "https://github.com/Oyxiaoxi/nestjs-practice", "desc": "NestJs \u5B9E\u8DF5", "icon": "i-logos:nestjs" }], "Api Docs": [{ "name": "King Glory", "link": "https://github.com/Oyxiaoxi/King-Glory", "desc": "\u4E00\u4E2A\u57FA\u4E8E node.js \u7684 Api \u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF", "icon": "i-vscode-icons:file-type-node2" }, { "name": "GoHub Service", "link": "https://github.com/Oyxiaoxi/GoHub-Service", "desc": "\u4E00\u4E2A\u57FA\u4E8E GoLang \u7684 Api \u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF", "icon": "i-fa6-brands:golang" }], "Starter Templates": [{ "name": "DeDeCMS", "link": "https://github.com/Oyxiaoxi/DeDeCMS", "desc": "Opinionated DeDeCms Starter Template", "icon": "i-simple-icons:civicrm" }], "Utilities": [{ "name": "KeyWords Replace", "link": "https://github.com/Oyxiaoxi/KeyWords-Replace", "desc": "Website keyword replacement tool", "icon": "i-logos:php" }, { "name": "Find Broken Picture", "link": "https://github.com/Oyxiaoxi/Find-broken-picture", "desc": "Find damaged images on the website", "icon": "i-logos:php" }], "Games": [{ "name": "Minesweeper", "link": "https://github.com/Oyxiaoxi/vue-minesweeper", "desc": "A Vue-based minesweeper game", "icon": "i-arcticons:minesweeper" }], "TypeScript": [{ "name": "TypeScript-Tips", "link": "https://github.com/Oyxiaoxi/TypeScript-Tips", "desc": "A collection of TypeScript tips", "icon": "i-vscode-icons:file-type-typescript-official" }, { "name": "Code Example", "link": "https://github.com/Oyxiaoxi/Code-Tips", "desc": "Some examples of the mess", "icon": "i-logos:html-5" }], "Configurations": [{ "name": "MAC-Configuration", "link": "https://github.com/Oyxiaoxi/MAC-Configuration", "desc": "MAC Configuration", "icon": "i-mdi:laptop-mac" }, { "name": "Script", "link": "https://github.com/Oyxiaoxi/script", "desc": "Unusual Linux commands and scripts", "icon": "i-vscode-icons:file-type-shell" }], "Documentation / Practice": [{ "name": "Flutter", "link": "https://github.com/Oyxiaoxi/Flutter", "desc": "A new Flutter project. (Practice)", "icon": "i-vscode-icons:file-type-flutter" }, { "name": "MySQL", "link": "https://github.com/Oyxiaoxi/MySQL", "desc": "MySQL Learning Notes. (Practice)", "icon": "i-vscode-icons:folder-type-light-mysql-opened" }, { "name": "Adwords", "link": "https://github.com/Oyxiaoxi/ToMu", "desc": "Some of the advertisements collected", "icon": "i-ri:advertisement-fill" }] }, "meta": [{ "property": "og:title", "content": "Projects - Oyxiaoxi" }, { "property": "og:description", "content": "List of projects that I am proud of" }, { "name": "description", "content": "List of projects that I am proud of" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Projects - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Projects - Oyxiaoxi" }, { "property": "og:description", "content": "List of projects that I am proud of" }, { "name": "description", "content": "List of projects that I am proud of" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListProjects = __unplugin_components_2;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListProjects, {
              projects: frontmatter.projects
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListProjects, {
                  projects: frontmatter.projects
                }, null, 8, ["projects"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/projects.md");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var projects = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$x
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  name: "prose",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Prose - Oyxiaoxi", "display": "", "meta": [{ "property": "og:title", "content": "Prose - Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Prose - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Prose - Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_SubNav = _sfc_main$B;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListPosts = _sfc_main$C;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SubNav, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListPosts, { type: "prose" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_SubNav),
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListPosts, { type: "prose" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/prose.md");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var prose = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
  name: "ListReviews",
  __ssrInlineRender: true,
  props: {
    comments: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "grid grid-cols-1 gap-4 sm:grid-cols-1" }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(__props.comments, (person) => {
        _push(`<div class="relative rounded-lg px-2 py-2 shadow-sm flex items-center space-x-3"><div class="flex-shrink-0"><img class="h-15 w-15 rounded-full"${serverRenderer.ssrRenderAttr("src", person.imageUrl)} alt=""></div><div class="flex-1 min-w-0"><span class="absolute inset-0" aria-hidden="true"></span><p class="text-sm font-medium text-gray-600">${serverRenderer.ssrInterpolate(person.name)}</p><p class="text-sm text-gray-500 text-ellipsis">${serverRenderer.ssrInterpolate(person.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ListReviews.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  name: "reviews",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Reviews - Oyxiaoxi", "display": "Reviews", "subtitle": "Some comments from friends", "description": "Some comments from friends", "comments": [{ "name": "Calvin", "desc": "\u6653\u9521\u505A\u4E8B\u6709geek\u7CBE\u795E\uFF0C\u5584\u4E8E\u94BB\u7814\uFF0C\u6027\u683C\u7A0D\u663E\u56FA\u6267\uFF0C\u4E13\u4E00\uFF0C\u5C3D\u91CF\u878D\u5165\u96C6\u4F53\uFF0C\u6709\u65F6\u7231\u94BB\u725B\u89D2\u5C16\u3002", "imageUrl": "//cdn.3333120.com/friends/calvin.png" }, { "name": "Lin", "desc": "\u4E3A\u4EBA\u5904\u4E8B\u4F4E\u8C03\uFF0C\u611F\u6027\u6280\u672F\u5927\u4F6C\u3002", "imageUrl": "//cdn.3333120.com/friends/Lin.png" }, { "name": "C", "desc": "Sincere", "imageUrl": "//cdn.3333120.com/friends/Chen.png" }, { "name": "Sun", "desc": "\u662F\u4E2A\u6280\u672F\u5927\u725B\uFF0C\u51FA\u53BB\u73A9\u53D1\u7684\u670B\u53CB\u5708\u7167\u7247\u4E5F\u5F88\u68D2\uFF0C\u4EBA\u5F88\u7EC6\u5FC3\uFF0C\u5728\u7FA4\u91CC\u804A\u5929\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u6709\u4EBA\u8BF4\u8BDD\u6CA1\u4EBA\u63A5\u832C\uFF0C\u4F60\u603B\u662F\u51FA\u6765\u8BF4\u8BDD\uFF0C\u611F\u89C9\u5F88\u6E29\u6696\uFF0C\u5BF9\u8001\u5A46\u4E5F\u5F88\u597D\uFF0C\u4F5C\u4E3A\u672A\u66FE\u8C0B\u9762\u7684\u7F51\u53CB\uFF0C\u7ED9\u6211\u4EEC\u5BC4\u8FC7\u51E0\u6B21\u6C34\u679C\uFF0C\u5F88\u8BA4\u771F\u7684\u628A\u6211\u4EEC\u5F53\u670B\u53CB\uFF0C\u6211\u6709\u65F6\u5019\u6709\u5565\u52A8\u6001\u7684\u65F6\u5019\uFF0C\u4F60\u4E5F\u603B\u662F\u79C1\u4FE1\u5173\u5FC3\uFF0C\u5C31\u5F88\u68D2\uFF01", "imageUrl": "//cdn.3333120.com/friends/Sun.png" }, { "name": "Yang", "desc": "\u4E00\u4E2A\u6E29\u67D4\u7684\u7537\u4EBA\uFF0C\u5728\u5F00\u53D1\u6280\u672F\u65B9\u9762\u662F\u4E2A\u5927\u725B\uFF1B \u5728\u6E38\u620F\u73A9\u5BB6\u4E2D\u4E5F\u662F\u4F18\u79C0\u7684\u597D\u4F19\u4F34\uFF1B \u5728\u751F\u6D3B\u4E2D\u4E5F\u662F\u4E00\u4E2A\u559C\u6B22\u5206\u4EAB\u7684\u597D\u670B\u53CB\uFF1B \u603B\u5F97\u6765\u8BF4\u5C31\u662F\u975E\u5E38\u6E29\u67D4\u3001\u70ED\u7231\u751F\u6D3B\u7684\u4EBA\u513F\u5427\u3002", "imageUrl": "//cdn.3333120.com/friends/Yang.png" }, { "name": "Liu", "desc": "\u4F4E\u8C03\u591A\u91D1\u7684\u6709\u5FD7\u9752\u5E74\uFF0C\u5BF9\u4EBA\u5BF9\u4E8B\u90FD\u4EE5\u8BA4\u771F\u3001\u771F\u8BDA\u7684\u6001\u5EA6\uFF0C\u65F6\u5E38\u4E5F\u4F1A\u800D\u4E00\u4E9B\u5C0F\u5E7D\u9ED8\uFF0C\u559C\u6B22\u6444\u5F71\uFF0C\u5BF9\u65B0\u9C9C\u4E8B\u7269\u5145\u6EE1\u7740\u63A2\u7D22\u597D\u5947\u4E4B\u5FC3\uFF0C\u662F\u4E2A\u5C0F\u679C\u7C89\u3002", "imageUrl": "//cdn.3333120.com/friends/Liu.png" }, { "name": "Man", "desc": "\u5173\u4E8E\u6653\u9521\uFF0C\u633A\u6709\u8DA3\u7684\u662F\u6211\u4EEC\u662F\u5728\u8BBE\u8BA1\u5E08\u7FA4\u91CC\u7ED3\u8BC6\u7684\uFF0C\u5F88\u4E45\u4EE5\u540E\u5927\u5BB6\u624D\u77E5\u9053\u4ED6\u672C\u884C\u662F\u5F00\u53D1\u8005\uFF0C\u5F88\u591A\u5916\u884C\u559C\u6B22\u5728\u5634\u4E0A\u8C08\u8BBE\u8BA1\uFF0C\u8FD8\u662F\u6BD4\u8F83\u5C11\u4EBA\u613F\u610F\u66F4\u6DF1\u5165\u7684\u63A5\u89E6\u5230\u8BBE\u8BA1\u5E08\u7FA4\u4F53\u3002 \u5F88\u957F\u65F6\u95F4\u91CC\u4EE5\u4E3A\u4ED6\u7684\u8A00\u8BED\u548C\u58F0\u97F3\u662F\u4E2A\u5C0F\u6B63\u592A\u7684\u5F62\u8C61\uFF0C\u5927\u5BB6\u89C6\u9891\u4E4B\u540E\u6211\u89C9\u5F97\u81EA\u5DF1\u89C1\u8FC7\u7684\u4EBA\u592A\u5C11\u4E86\u54C8\u54C8\u{1F602}\u3002 \u5C3D\u7BA1\u5982\u6B64\uFF0C\u5728\u89C1\u4E0D\u7740\u9762\u7684\u7FA4\u91CC\uFF0C\u5927\u5BB6\u8FD8\u662F\u5F53\u4ED6\u662F\u4E2A\u5C0F\u6B63\u592A\u6765\u5BF9\u5F85\u5427\u3002\u6709\u4E00\u70B9\u51B2\u52A8\uFF0C\u6709\u4E00\u70B9\u60C5\u7EEA\uFF0C\u6709\u8BA9\u5927\u5BB6\u7FA1\u6155\u7684\u751F\u6D3B\uFF0C\u4E5F\u6709\u5927\u5BB6\u611F\u53D7\u4E0D\u5230\u7684\u538B\u529B\u2026\u4E5F\u8BB8\u662F\u6211\u8EAB\u8FB9\u8FD9\u6837\u7684\u670B\u53CB\u592A\u5C11\uFF0C\u6709\u70B9\u50CF\u98D8\u5728\u7A7A\u4E2D\u7684\u6728\u68C9\u82B1\uFF0C\u677E\u8F6F\u3001\u6613\u788E\uFF0C\u6293\u4E0D\u4F4F\uFF0C\u4E0D\u77E5\u9053\u4ECE\u54EA\u98D8\u6765\u7684\uFF0C\u53C8\u80FD\u5728\u4E00\u4E9B\u65F6\u523B\u611F\u52A8\u5230\u4F60\u3002", "imageUrl": "//cdn.3333120.com/friends/xiaoman.png" }, { "name": "Li", "desc": "\u813E\u6C14\u6709\u70B9\u5927\uFF0C\u9700\u6539\u6B63\uFF0C\u6C14\u5927\u4F24\u8EAB! \u6027\u683C\u5F00\u6717\uFF0C\u7EE7\u7EED\u4FDD\u6301! \u5F85\u4EBA\u771F\u8BDA\u53CB\u5584\uFF0C\u503C\u5F97\u53D1\u626C\u5149\u5927\uFF0C\u4EE5\u540E\u4E5F\u8981\u8FD9\u6837\u6559\u80B2\u4E0B\u4E00\u4EE3!  \u4E3A\u4EBA\u4E0D\u5351\u4E0D\u4EA2\uFF0C\u6BD4\u8F83\u4E2D\u6B63!  \u9047\u4E8B\u6709\u70B9\u60B2\u89C2\uFF0C\u5E94\u8BE5\u655E\u5F00\u5FC3\u6249\uFF0C\u5411\u4ED6\u4EBA\u503E\u8BC9!  \u7231\u5403\uFF0C\u4E0D\u7231\u7761\uFF0C\u7231\u5B66\u4E60\u3001\u4E0D\u7231\u8FD0\u52A8\u3001\u7231\u5E72\u51C0\u3001\u4E0D\u7231\u52B3\u52A8\uFF0C\u5C11\u5403\u591A\u52A8\uFF0C\u5C11\u73A9\u591A\u7761\uFF0C\u6CE8\u610F\u51CF\u80A5\uFF0C\u8EAB\u4F53\u624D\u80FD\u5065\u5EB7!  \u662F\u4E2A\u597D\u5B69\u5B50\uFF0C\u597D\u670B\u53CB\uFF0C\u597D\u7537\u670B\u53CB\uFF0C\u4EE5\u540E\u4E5F\u4F1A\u662F\u4E2A\u6709\u8D23\u4EFB\u7684\u597D\u7238\u7238!  \u5584\u826F\u7684\u5C0F\u670B\u53CB\uFF0C\u5E0C\u671B\u4F60\u80FD\u52C7\u6562\u8FFD\u6C42\u81EA\u5DF1\u60F3\u8981\u7684\uFF0C\u4E0D\u8981\u77BB\u524D\u987E\u540E\uFF0C\u8003\u8651\u592A\u591A\u5F80\u5F80\u4F1A\u5931\u53BB\u5F88\u591A\u673A\u4F1A\uFF0C\u8FC7\u53BB\u7684\u4E8B\u60C5\u4E0D\u8981\u60F3\u592A\u591A\uFF0C\u5F80\u524D\u770B\uFF0C\u52A0\u6CB9!", "imageUrl": "//cdn.3333120.com/friends/Li.png" }], "meta": [{ "property": "og:title", "content": "Reviews - Oyxiaoxi" }, { "property": "og:description", "content": "Some comments from friends" }, { "name": "description", "content": "Some comments from friends" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Reviews - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Reviews - Oyxiaoxi" }, { "property": "og:description", "content": "Some comments from friends" }, { "name": "description", "content": "Some comments from friends" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListReviews = _sfc_main$v;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListReviews, {
              comments: frontmatter.comments
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListReviews, {
                  comments: frontmatter.comments
                }, null, 8, ["comments"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/reviews.md");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var reviews = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  name: "travel",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Travel - Oyxiaoxi", "display": "", "meta": [{ "property": "og:title", "content": "Travel - Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Travel - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Travel - Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_SubNav = _sfc_main$B;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListPosts = _sfc_main$C;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SubNav, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListPosts, { type: "travel" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_SubNav),
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListPosts, { type: "travel" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/travel.md");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var travel = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  name: "2021-Annual-Report-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "2021 Annual Report", "date": "2021-12-28T15:40:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 15min", "description": "2021 Annual Report\u3002", "meta": [{ "property": "og:title", "content": "2021 Annual Report" }, { "property": "og:description", "content": "2021 Annual Report\u3002" }, { "name": "description", "content": "2021 Annual Report\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "2021 Annual Report", "meta": [{ "property": "og:title", "content": "2021 Annual Report" }, { "property": "og:description", "content": "2021 Annual Report\u3002" }, { "name": "description", "content": "2021 Annual Report\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u65E9\u6668\u62C9\u5F00\u7A97\u5E18\uFF0C\u88AB\u6321\u4F4F\u7684\u9633\u5149\u7EC8\u4E8E\u50CF\u662F\u51B2\u5F00\u4E86\u58C1\u969C\u4E00\u822C\uFF0C\u8086\u610F\u94FA\u5728\u684C\u9762\u4E0A\u3002\u4F46\u662F\u7A97\u5916\u88AB\u98CE\u5439\u5F97\u6447\u6447\u6643\u6643\u7684\u6811\u679D\uFF0C\u4FE8\u7136\u662F\u5728\u8BC9\u8BF4\u7740\u521A\u521A\u8FC7\u53BB\u7684\u8FD9\u4E2A\u591C\u665A\u662F\u4F55\u7B49\u96BE\u71AC\u3002\u5BF9\u5B83\u4EEC\uFF0C\u5BF9\u6211\u4EEC\uFF0C\u8FD9\u4E2A\u51AC\u5929\u4F3C\u4E4E\u6BD4\u4EE5\u5F80\u90FD\u8981\u5BD2\u51B7\uFF0C\u5927\u5BB6\u90FD\u76FC\u671B\u7740\u6625\u5929\u5FEB\u70B9\u5230\u6765\u3002</p><p${_scopeId}>\u4E60\u60EF\u6027\u5730\u6253\u5F00\u7535\u8111\uFF0C\u4E60\u60EF\u6027\u5730\u6CE1\u4E0A\u5496\u5561\uFF0C\u7A81\u7136\u60F3\u8D77\u5DF2\u7ECF\u5B9E\u5728\u662F\u5230\u5E74\u5E95\u4E86\u3002\u53BB\u5E74\u7684\u5E74\u7EC8\u603B\u7ED3\u88AB\u6211\u786C\u751F\u751F\u62D6\u5230\u4E86\u4ECA\u5E74\uFF0C\u800C\u4ECA\u5E74\u6211\u4E5F\u4E0D\u60F3\u518D\u5982\u6545\u8E49\u8DCE\u3002\u5728\u5C4B\u5B50\u91CC\u4E45\u4E86\uFF0C\u8111\u5B50\u663E\u7136\u4F1A\u4E0D\u6E05\u9192\uFF0C\u4E8E\u662F\u6211\u51B3\u5B9A\u62AB\u4E0A\u5916\u5957\uFF0C\u51FA\u95E8\u5230\u9662\u5B50\u91CC\uFF0C\u547C\u5438\u4E00\u70B9\u65B0\u9C9C\u7A7A\u6C14\u3002\u987A\u4FBF\u9876\u7740\u8FD9\u51AC\u65E5\u7684\u5BD2\u98CE\u7684\u6E05\u9192\uFF0C\u6765\u634B\u4E00\u634B\u4ECA\u5E74\u7684\u601D\u7EEA\u3002\u5F53\u7136\uFF0C\u5728\u6700\u540E\u6211\u4E5F\u4F1A\u6574\u7406\u4E00\u4E0B\u4ECA\u5E74\u770B\u8FC7\u7684\u4E66\u5355\u3001\u52A8\u6F2B\u548C\u73A9\u8FC7\u7684\u6E38\u620F\uFF0C\u7B97\u662F\u5386\u6765\u5E74\u7EC8\u603B\u7ED3\u7684\u4F20\u7EDF\u8282\u76EE\u3002</p><h3 id="\u5173\u4E8E\u751F\u6D3B" tabindex="-1"${_scopeId}>\u5173\u4E8E\u751F\u6D3B <a class="header-anchor" href="#\u5173\u4E8E\u751F\u6D3B" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u75AB\u60C5\u867D\u7136\u4E0D\u50CF\u53BB\u5E74\u90A3\u4E48\u70ED\u4E86\uFF0C\u4F46\u4E5F\u9003\u4E0D\u51FA\u751F\u6D3B\u7684\u4E3B\u65CB\u5F8B\u4E4B\u4E00\u3002</p><p${_scopeId}>\u4ECE\u4E2D\u7F8E\u8D38\u6613\u6218\u5F00\u6253\uFF0C\u201C\u4E16\u754C\u6751\u201D\u5C31\u5F00\u59CB\u574D\u584C\u4E86\uFF0C\u52A0\u4E0A\u534A\u8DEF\u6740\u51FA\u65B0\u51A0\u75AB\u60C5\u8FD9\u4E2A\u7A0B\u54AC\u91D1\uFF0C\u9006\u5168\u7403\u5316\u7684\u8D8B\u52BF\u66F4\u662F\u65E0\u6BD4\u660E\u663E\u3002\u5404\u79CD\u53D8\u5F02\u682A\u201C\u4F60\u65B9\u5531\u7F62\u6211\u767B\u573A\u201D\uFF0C\u4F46\u770B\u8D77\u6765\u90FD\u662F\u5728\u5F80\u9AD8\u4F20\u67D3\u4F4E\u81F4\u547D\u7684\u65B9\u5411\u6F14\u53D8\u3002\u4E0D\u8FC7\u65E0\u8BBA\u662F\u5FB7\u5C14\u5854\u3001\u5965\u5BC6\u514B\u620E\u7684\u6BD2\u6027\u591A\u4E48\u4E0D\u582A\uFF0C\u4F46\u8089\u773C\u9884\u8BA1\u8FD9\u79CD\u5168\u7403\u95ED\u9501\u7684\u60C5\u51B5\uFF0C\u81F3\u5C11\u8FD8\u8981\u6301\u7EED\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\u3002\u53EA\u80FD\u8BF4\u5E0C\u671B\u4E00\u5207\u5B89\u597D\uFF0C\u5E0C\u671B\u80FD\u5C3D\u65E9\u6062\u590D\u76DB\u51B5\u3002</p><p${_scopeId}>\u5176\u4ED6\u65B9\u9762\u5C31\u4E4F\u5584\u53EF\u9648\u4E86\u3002\u6211\u4F3C\u4E4E\u56DE\u5230\u4E86\u4EE5\u524D\u6559\u5BA4\u98DF\u5802\u5BBF\u820D\u4E09\u70B9\u4E00\u7EBF\u7684\u751F\u6D3B\u4E2D\uFF0C\u6BCF\u5929\u9017\u9017\u6155\u741B\u3001\u601D\u73E9\u5979\u4EEC\u4FE9\uFF0C\u5076\u5C14\u53BB\u8D85\u5E02\u5C6F\u4E0B\u8D27\uFF0C\u7136\u540E\u5C31\u56DE\u5BB6\u5B85\u8D77\u6765\u3002\u4E5F\u8BB8\u8FD9\u5C31\u53EB\u5E73\u5E73\u51E1\u51E1\u624D\u662F\u771F\uFF1F\u6211\u81EA\u8BA4\u662F\u8010\u5F97\u4F4F\u5BC2\u5BDE\u7684\u4EBA\uFF0C\u4F46\u5076\u5C14\u4E5F\u4F1A\u5E0C\u671B\u8DEF\u8FB9\u4E0D\u8FDC\u5904\u7684\u91CE\u732B\u80FD\u6765\u9662\u5B50\u91CC\u6652\u6652\u592A\u9633\uFF0C\u9694\u58C1\u7684\u90BB\u5C45\u80FD\u6765\u4E00\u8D77\u5410\u69FD\u4E00\u4E0B\u65F6\u4E8B\u3002\u4F46\u73B0\u4EE3\u793E\u4F1A\u5C31\u662F\u8FD9\u6837\u6B8B\u9177\uFF0C\u522B\u8BF4\u4EBA\u4E86\uFF0C\u5C31\u7B97\u662F\u732B\uFF0C\u90FD\u8981\u5FD9\u7740\u53BB\u6328\u5BB6\u6328\u6237\u5DE1\u67E5\u5730\u76D8\uFF0C\u5B8C\u5168\u6CA1\u6709\u610F\u613F\u505C\u4E0B\u5B83\u90A3\u5FD9\u788C\u7684\u811A\u6B65\uFF0C\u4E5F\u6839\u672C\u61D2\u5F97\u770B\u4F60\u4E00\u773C\u3002\u4E8E\u662F\uFF0C\u6211\u4E5F\u53EA\u597D\u6536\u8D77\u90A3\u671F\u76FC\u7684\u773C\u795E\uFF0C\u9000\u56DE\u5230\u81EA\u5DF1\u6E29\u6696\u7684\u5DE2\u91CC\uFF0C\u7136\u540E\u7528\u539A\u539A\u7684\u8327\u628A\u81EA\u5DF1\u5305\u88F9\u8D77\u6765\uFF1A\u53EF\u80FD\u8FD9\u5C31\u662F\u6027\u683C\u4F7F\u7136\uFF0C\u5927\u6982\u672C\u6027\u4E5F\u5F88\u96BE\u6539\u53D8\u4E86\u5427\u3002</p><p${_scopeId}>\u65E0\u6BD4\u611F\u8C22\u8001\u5A46\u5927\u4EBA\uFF0C\u8BA9\u6211\u6709\u4E86 \u201C<strong${_scopeId}>\u6155\u741B</strong>\u3001<strong${_scopeId}>\u601D\u73E9\u201D</strong> \u4E24\u4E2A\u5C0F\u5BB6\u4F19\u3002</p><h3 id="\u5173\u4E8E\u5DE5\u4F5C" tabindex="-1"${_scopeId}>\u5173\u4E8E\u5DE5\u4F5C <a class="header-anchor" href="#\u5173\u4E8E\u5DE5\u4F5C" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u4E00\u5207\u987A\u5229\u3002\u4ECA\u5E74\u867D\u7136\u8D1F\u8D23\u4E8B\u60C5\u7684\u603B\u91CF\u4E5F\u6CA1\u53D8\u591A\uFF0C\u4F46\u5347\u804C\u52A0\u85AA\u4F3C\u4E4E\u5012\u4E5F\u6CA1\u5C11\u3002\u76F8\u5BF9\u4E8E\u5B9E\u9645\u7684\u4EE3\u7801\u5DE5\u4F5C\u6765\u8BF4\uFF0C\u7531\u4E8E\u56E2\u961F\u7F3A\u4EBA\uFF0C\u4ECA\u5E74\u6709\u66F4\u591A\u7684\u673A\u4F1A\u9762\u8BD5\u4E86\u4E00\u4E9B\u4EBA\uFF0C\u4E8E\u662F\u5BF9\u56FD\u5185\u7684 IT \u548C\u804C\u573A\u7684\u60C5\u51B5\u6709\u4E86\u66F4\u591A\u7684\u7406\u89E3 (\u6280\u672F\u662F\u771F\u7684\u5F31\u4E5F\u66F4\u6709\u5B9E\u611F\u4E86)\u3002\u5728\u7EBF\u9762\u8BD5\u548C\u4F20\u7EDF\u7684 onsite \u786E\u5B9E\u6709\u5F88\u5927\u7684\u533A\u522B\uFF0C\u9762\u5BF9\u5C4F\u5E55\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u97F3\u50CF\u5EF6\u8FDF\u4EE5\u53CA\u6444\u50CF\u5934\u4E00\u822C\u53EA\u80FD\u62CD\u5230\u9762\u90E8\uFF0C\u6240\u4EE5\u5F88\u96BE\u5BDF\u89C9\u5230\u4E00\u4E9B\u7EC6\u8282\uFF1A\u6211\u613F\u610F\u628A\u8FD9\u4E9B\u7EC6\u8282\u53EB\u505A\u9762\u8BD5\u4E2D\u7A7A\u6C14\u7684\u53D8\u5316 (\u4F60\u61C2\u7684)\u3002\u8FD9\u79CD\u7EC6\u8282\u7684\u7F3A\u5931\uFF0C\u5BF9\u4E8E\u53CC\u65B9\u6765\u8BF4\u90FD\u6709\u4E00\u70B9\u635F\u5931\uFF1A\u672C\u6765\u5149\u9760\u4E00\u4E24\u6B21\u9762\u8BD5\uFF0C\u5019\u9009\u8005\u548C\u516C\u53F8\u5C31\u5DF2\u7ECF\u5F88\u96BE\u5B8C\u6210\u5BF9\u5F7C\u6B64\u5168\u9762\u826F\u597D\u7684\u5224\u65AD\u4E86\uFF0Conline \u9762\u8BD5\u66F4\u662F\u96EA\u4E0A\u52A0\u971C\u3002\u5E78\u597D\u5BF9\u4E8E\u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u66F4\u591A\u65F6\u5019\u5F7C\u6B64\u9762\u5BF9\u7684\u90FD\u662F\u4EE3\u7801\u800C\u975E\u4EBA\uFF0C\u6240\u4EE5\u53EA\u8981\u7B14\u8BD5\u4EE3\u7801\u5E72\u51C0\u6F02\u4EAE\uFF0C\u603B\u8FD8\u662F\u613F\u610F\u591A\u7ED9\u4E00\u4E9B\u673A\u4F1A\u3002\u964D\u4F4E\u4E86\u5B9E\u9645\u9762\u8BD5\u7684\u8981\u6C42\u548C\u671F\u671B\uFF0C\u8F6C\u800C\u589E\u52A0\u7B14\u8BD5\u65F6\u5019\u7684\u6BD4\u91CD (\u6216\u8005\u8BF4\u9009\u62E9\u5728\u7B14\u8BD5\u5173\u66F4\u52A0\u4E25\u683C)\uFF0C\u5927\u6982\u662F\u6700\u8FD1\u9762\u8BD5\u65F6\u5019\u7684\u4E00\u4E2A\u91CD\u8981\u8F6C\u53D8\u5427\u3002</p><p${_scopeId}>\u5176\u4ED6\u5DE5\u4F5C\u90FD\u6709\u6761\u4E0D\u7D0A\u5730\u8FDB\u884C\u7740\uFF0C\u65E5\u590D\u4E00\u65E5\u7684\u7248\u672C\u8FED\u4EE3\uFF0C\u5728\u7A7A\u95F2\u65F6\u95F4\u627E\u673A\u4F1A\u91CD\u6784\u70C2\u6389\u7684\u90E8\u5206\uFF0C\u5076\u5C14\u8FDB\u884C\u4E00\u4E9B\u6280\u672F\u8BC4\u4F30\u548C\u65B9\u5411\u4E0A\u7684\u628A\u63A7\uFF0C\u4FDD\u8BC1\u9879\u76EE\u80FD\u591F\u957F\u4E45\u6301\u7EED\u505A\u4E0B\u53BB\uFF0C\u4E0D\u62D6\u56E2\u961F\u540E\u817F\uFF0C\u540C\u65F6\u4E5F\u80FD\u8BA9\u540C\u4E8B\u4EEC\u4E8B\u534A\u529F\u500D\uFF0C\u5927\u5BB6\u5F00\u5F00\u5FC3\u5FC3\uFF1A\u8FD9\u4E9B\u5C31\u662F\u6211\u73B0\u5728\u5DE5\u4F5C\u7684\u91CD\u5FC3\u3002</p><p${_scopeId}>\u56FD\u5185\u7684\u4E92\u8054\u7F51\u5E02\u573A\u771F\u662F\u5343\u53D8\u4E07\u5316\uFF0C\u9B44\u529B\u65E0\u7A77\uFF0C\u524D\u811A\u53CC\u51CF\u6559\u57F9\u5927\u6574\u6539\uFF0C\u540E\u811A\u8FDE\u7EED\u7EA6\u8C08\u5404\u79CD\u5927\u5382\u53CD\u5784\u65AD\uFF0C\u51E0\u4E2A\u5927\u9524\u4E0B\u6765\u4E1A\u754C\u5F62\u6001\u5C31\u5B8C\u5168\u6539\u53D8\u3002\u6211\u90FD\u80FD\u591F\u975E\u5E38\u660E\u663E\u5730\u611F\u53D7\u5230\uFF0C\u56FD\u5185\u6B63\u5904\u4E8E\u4E00\u4E2A\u6781\u7AEF\u91CD\u8981\u7684\u8F6C\u578B\u671F\u3002\u6700\u8FD1\u51E0\u5E74\u7684\u653F\u7B56\u65B9\u5411\uFF0C\u80AF\u5B9A\u4F1A\u7ED9\u540E\u7EED\u5341\u5E74\u751A\u81F3\u4E8C\u5341\u5E74\u7684\u793E\u4F1A\u7ED3\u6784\u5E26\u6765\u60F3\u8C61\u4E0D\u5230\u7684\u5F71\u54CD\u3002\u5BF9\u4E8E\u6211\u8FD9\u6837\u6DF7\u65E5\u5B50\u7684\u5E95\u5C42\u767D\u9886\u6765\u8BF4\uFF0C\u8FD9\u5931\u53BB\u4E86\u5F88\u591A\u673A\u4F1A\uFF1B\u4E0D\u8FC7\u53E6\u4E00\u65B9\u9762\uFF0C\u8FD9\u79CD\u7F3A\u4E4F\u53EF\u80FD\u6027\u7684\u5B89\u5B9A\uFF0C\u4E5F\u8BA9\u751F\u6D3B\u76F8\u5BF9\u5E73\u7A33\uFF0C\u7109\u77E5\u975E\u798F\u5427\u3002</p><p${_scopeId}>\u4E5F\u611F\u8C22\u5B57\u8282\uFF0C\u7ED9\u6211 Work For Home \u7684\u673A\u4F1A\uFF01\uFF08\u5927\u516C\u53F8\u60F3\u8BA9\u4F60\u628A\u516C\u53F8\u5F53\u6210\u5BB6\uFF0C\u6211\u60F3\u7684\u662F\u56DE\u81EA\u5DF1\u5BB6 ~ \uFF09\u8C22\u8C22 HRD \u7ED9\u63D0\u4F9B\u7684\u5404\u79CD\u4FBF\u5229\u53CA\u5E2E\u52A9\u3002</p><h3 id="\u5173\u4E8E\u5B66\u4E60" tabindex="-1"${_scopeId}>\u5173\u4E8E\u5B66\u4E60 <a class="header-anchor" href="#\u5173\u4E8E\u5B66\u4E60" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u6BCF\u5E74\u5145\u7535\u8FD8\u662F\u8981\u5145\u7684\u3002</p><p${_scopeId}>\u5728\u7A0B\u5E8F\u8BBE\u8BA1\u65B9\u9762\uFF0C\u4ECA\u5E74\u4E3B\u8981\u7528 GoLang \u5B9E\u9645\u5199\u4E86\u4E00\u70B9\u5DE5\u5177\u7C7B\u7684\u4E1C\u897F\uFF0C\u5927\u6982\u4E5F\u5C31\u4E24\u4E09\u5343\u884C\u7684\u73A9\u5177\uFF0C\u6765\u6539\u5584\u5F00\u53D1\u6D41\u7A0B\u3002\u5B9E\u9645\u4E0A\u9009\u62E9\u66F4\u62FF\u624B\u7684\u8BED\u8A00\uFF0C\u6BD4\u5982 Swift\uFF0C\u6765\u505A\u8FD9\u4EF6\u4E8B\u60C5\u4F1A\u66F4\u597D\u4E00\u4E9B\uFF0C\u4F46\u662F\u65E2\u7136\u53BB\u5E74\u5B66\u4E86\u4E9B GoLang\uFF0C\u90A3\u6709\u660E\u663E\u7684\u9489\u5B50\uFF0C\u81EA\u7136\u662F\u7528\u65B0\u9524\u5B50\u6BD4\u8F83\u5F00\u5FC3\u3002</p><p${_scopeId}>\u5B9E\u9645\u4F7F\u7528\u65F6\u5927\u6982\u6709\u4E00\u5927\u534A\u7684\u65F6\u95F4\u90FD\u82B1\u5728\u4E86\u7814\u7A76 Go Modules \u548C GORM\uFF0C\u4EE3\u7801 refactor \u4EE5\u53CA feat \u5B66\u4E60\u4E0A\u3002\u5E94\u8BE5\u662F\u6211\u5F88\u4E0D\u719F\u7EC3\uFF0C\u6240\u4EE5\u4F1A\u6709\u8FD9\u6837\u7684\u56F0\u60D1\u3002\u867D\u7136\u80FD\u76F4\u89C2\u611F\u53D7\u5230\u5185\u5B58\u4F7F\u7528\u4E0A\u7684\u5C0F\u5FC3\u8C28\u614E\uFF0C\u4F46\u662F\u5B9E\u9645\u7684\u5F00\u53D1\u4F53\u9A8C\u786E\u5B9E\u6709\u4E9B\u75DB\u82E6\u3002\u9664\u975E\u6709\u5BF9\u6027\u80FD\u548C\u5185\u5B58\u5B89\u5168\u975E\u5E38\u654F\u611F\u7684\u9700\u6C42\uFF0C\u5426\u5219 GoLang \u7684\u725B\u5200\u7528\u6765\u6740\u9E21\uFF0C\u4E2A\u4EBA\u611F\u89C9\u662F\u4E0D\u592A\u5408\u9002\u7684\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53C2\u4E0E\u4E86\u56FD\u5185 GoLang \u793E\u533A\u7684\u6587\u7AE0\u7FFB\u8BD1\u5DE5\u4F5C\uFF0C\u4E5F\u7B97\u662F\u5BF9\u5176\u4ED6 Go \u505A\u4E86\u4E9B\u4E9B\u8D21\u732E\u5427\u3002</p><p${_scopeId}>Swift \u4E5F\u63D0\u51FA\u4E86\u5173\u4E8E ARC \u6539\u8FDB\u548C ownership \u7684<a href="https://forums.swift.org/t/a-roadmap-for-improving-swift-performance-predictability-arc-improvements-and-ownership-control/54206" target="_blank" rel="noopener"${_scopeId}>\u8DEF\u7EBF\u56FE</a>\u3002\u7B2C\u4E00\u611F\u53D7\u5C31\u662F\uFF0C\u867D\u7136\u8868\u9762\u4E0A\u5199\u7684\u662F Swift\uFF0C\u4F46\u9AA8\u5B50\u91CC\u771F\u5168\u662F Go\u3002\u6682\u65F6\u73B0\u5728\u5F88\u96BE\u5BF9\u8FD9\u6837\u7684\u6539\u52A8\u53D1\u8868\u4EC0\u4E48\u770B\u6CD5\uFF0C\u53EA\u5E0C\u671B Swift \u56E2\u961F\u80FD\u5728\u6613\u7528\u6027\u548C\u5B89\u5168\u6027\u4E4B\u95F4\u627E\u5230\u5E73\u8861\u5427\u3002</p><p${_scopeId}>\u5728\u7F16\u7A0B\u4E4B\u5916\uFF0C\u6211\u4E5F\u5F00\u59CB\u4E86\u4E00\u4E9B Blender \u7684\u5B66\u4E60\u3002\u8D81\u7740\u9ED1\u4E94\u7528\u4F18\u60E0\u4EF7\u4E70\u4E86\xA0<a href="https://polygonrunway.com/" target="_blank" rel="noopener"${_scopeId}>polygon runway \u7684\u89C6\u9891\u6559\u7A0B</a>\uFF0C\u5E76\u6CA1\u6709\u6253\u7B97\u56DE\u5230\u6E38\u620F\u884C\u4E1A\uFF0C\u53EA\u662F\u5E0C\u671B\u80FD\u591F\u5728\u9700\u8981\u7684\u65F6\u5019\u81F3\u5C11\u80FD\u5728\u81EA\u5DF1\u529B\u6240\u80FD\u53CA\u7684\u8303\u56F4\u5185\uFF0C\u505A\u4E00\u4E9B logo \u6216\u8005 3D \u89C6\u89C9\u6E32\u67D3\u56FE\u3002\u6211\u81EA\u5DF1\u6709\u51E0\u5E74\u524D\u7684\u4E00\u4E9B Unity \u7ECF\u9A8C\uFF0C\u5BF9\u4E8E\u5927\u90E8\u5206 3D \u548C\u56FE\u5F62\u6E32\u67D3\u7684\u6982\u5FF5\u4E5F\u90FD\u6709\u6240\u4E86\u89E3\uFF0C\u6240\u4EE5\u4E0A\u624B\u901F\u5EA6\u8FD8\u4E0D\u9519\u3002\u89C6\u9891\u6559\u7A0B\u867D\u7136\u662F\u5168\u82F1\u6587\uFF0C\u4E5F\u6CA1\u6709\u5B57\u5E55\u4EC0\u4E48\u7684\uFF0C\u4E0D\u8FC7\u5C31\u7B97\u5F53\u4F5C\u5DE5\u4F5C\u4E4B\u4F59\u8F6C\u6362\u8111\u7B4B\uFF0C\u4E5F\u8FD8\u662F\u5F88\u4E0D\u9519\u7684\u3002</p><p${_scopeId}>\u4ECA\u5E74\u7684\u8BED\u8A00\u5B66\u4E60\u4E22\u4E86\u597D\u591A\uFF0C\u4EE5\u81F3\u4E8E French \u8001\u5E08\uFF0C\u4E00\u76F4\u6253\u7535\u8BDD\u95EE\u6211\uFF0C\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u5269\u4F59\u7684\u79C1\u6559\u8BFE\u7A0B\u3002\uFF08\u66FF\u6211\u82B1\u7684\u94B1\u4E0D\u503C ~\uFF09</p><h3 id="\u5173\u4E8E\u9605\u8BFB" tabindex="-1"${_scopeId}>\u5173\u4E8E\u9605\u8BFB <a class="header-anchor" href="#\u5173\u4E8E\u9605\u8BFB" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u4ECA\u5E74\u4EBA\u6175\u61D2\u4E86\uFF0C\u8BFB\u7684\u4E66\u4E0D\u591A\uFF0C\u9700\u8981\u53CD\u7701\u3002\u6280\u672F\u7C7B\u7684\u4E66\u7C4D\u90FD\u5F88\u65E0\u804A\uFF0C\u5927\u591A\u90FD\u662F\u6559\u7A0B\u7EA7\u522B\u7684\u5C31\u4E0D\u5199\u4E86\uFF1B\u79D1\u666E\u7C7B\u3001\u89C6\u91CE\u5F00\u62D3\uFF08iDaily\uFF09\u7684\u6742\u5FD7\u8BA2\u9605\u4E86\u4E00\u4E9B (\u725B\u987F\u79D1\u5B66\u4E16\u754C\u548C\u56FD\u5BB6\u5730\u7406\u4EC0\u4E48\u7684)\uFF0C\u5185\u5BB9\u4E5F\u90FD\u96F6\u96F6\u6563\u6563\u3002\u8FD8\u662F\u591A\u4ECB\u7ECD\u4E00\u4E9B\u4ECA\u5E74\u770B\u8FC7\u7684\u4EBA\u6587\u793E\u79D1\u7684\u4E66\u5427\u3002</p><h4 id="\u672A\u6765\u7B80\u53F2-\u4ECE\u667A\u4EBA\u5230\u667A\u795E" tabindex="-1"${_scopeId}><strong${_scopeId}>\u672A\u6765\u7B80\u53F2 \u4ECE\u667A\u4EBA\u5230\u667A\u795E</strong> <a class="header-anchor" href="#\u672A\u6765\u7B80\u53F2-\u4ECE\u667A\u4EBA\u5230\u667A\u795E" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u968F\u7740\u7B97\u6CD5\u5C06\u4EBA\u7C7B\u6324\u51FA\u5C31\u4E1A\u5E02\u573A\uFF0C\u8D22\u5BCC\u548C\u6743\u529B\u53EF\u80FD\u4F1A\u96C6\u4E2D\u5728\u62E5\u6709\u5F3A\u5927\u7B97\u6CD5\u7684\u6781\u5C11\u6570\u7CBE\u82F1\u624B\u4E2D\uFF0C\u9020\u6210\u524D\u6240\u672A\u6709\u7684\u793E\u4F1A\u53CA\u653F\u6CBB\u4E0D\u5E73\u7B49\u3002 \u5230\u4E8621\u4E16\u7EAA\uFF0C\u6211\u4EEC\u53EF\u80FD\u770B\u5230\u7684\u662F\u4E00\u4E2A\u5168\u65B0\u800C\u5E9E\u5927\u7684\u9636\u7EA7\uFF1A\u8FD9\u4E00\u7FA4\u4EBA\u6CA1\u6709\u4EFB\u4F55\u7ECF\u6D4E\u3001\u653F\u6CBB\u6216\u827A\u672F\u4EF7\u503C\uFF0C\u5BF9\u793E\u4F1A\u7684\u7E41\u8363\u3001\u529B\u91CF\u548C\u8363\u8000\u4E5F\u6CA1\u6709\u4EFB\u4F55\u8D21\u732E\u3002 \u4F20\u7EDF\u4E0A\uFF0C\u4EBA\u751F\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u65F6\u671F\uFF1A\u5B66\u4E60\u671F\uFF0C\u518D\u52A0\u4E0A\u4E4B\u540E\u7684\u5DE5\u4F5C\u671F\u3002\u4F46\u8FD9\u79CD\u4F20\u7EDF\u6A21\u5F0F\u5F88\u5FEB\u5C31\u4F1A\u5F7B\u5E95\u8FC7\u65F6\uFF0C\u60F3\u8981\u4E0D\u88AB\u6DD8\u6C70\u53EA\u6709\u4E00\u6761\u8DEF\uFF1A\u4E00\u8F88\u5B50\u4E0D\u65AD\u5B66\u4E60\uFF0C\u4E0D\u65AD\u6253\u9020\u5168\u65B0\u7684\u81EA\u5DF1\u3002\u53EA\u4E0D\u8FC7\uFF0C\u8BB8\u591A\u4EBA\uFF0C\u751A\u81F3\u662F\u5927\u591A\u6570\u4EBA\uFF0C\u5927\u6982\u90FD\u505A\u4E0D\u5230\u8FD9\u4E00\u70B9\u3002</p><h4 id="seeing-through-statistics" tabindex="-1"${_scopeId}><strong${_scopeId}>Seeing Through Statistics</strong> <a class="header-anchor" href="#seeing-through-statistics" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>The fourth edition of this popular book by Jessica Utts develops statistical literacy and critical thinking through real-world applications, with an emphasis on ideas, not calculations. This text focuses on the key concepts that educated citizens need to know about statistics. These ideas are introduced in interesting applied and real contexts, without using an abundance of tec \u2026</p><h4 id="\u597D\u597D\u5B66\u4E60" tabindex="-1"${_scopeId}><strong${_scopeId}>\u597D\u597D\u5B66\u4E60</strong> <a class="header-anchor" href="#\u597D\u597D\u5B66\u4E60" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u7B2C\u4E00\u4E2A\u662F\u6570\u636E\u7BA1\u7406\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u6240\u8C08\u8BBA\u7684\u77E5\u8BC6\u7BA1\u7406\u66F4\u591A\u662F\u5177\u4F53\u7684\u6570\u636E\u5C42\u9762\u6280\u5DE7\u3002\u6BD4\u5982\uFF0C\u4E0B\u8F7D\u7684\u6587\u4EF6\u600E\u4E48\u4FDD\u5B58\uFF1F\u5B66\u5230\u7684\u77E5\u8BC6\u70B9\u600E\u4E48\u5F52\u7C7B\uFF1F\u5982\u4F55\u5FEB\u901F\u641C\u7D22\u6587\u4EF6\uFF1F\u5982\u4F55\u7ED9\u6587\u4EF6\u8D34\u6807\u7B7E\uFF1F\u600E\u6837\u6574\u7406\u6587\u4EF6\u5939\uFF1F\u5728\u54EA\u91CC\u627E\u5230\u5408\u9002\u7684\u4E66\u5355\uFF1F\u7B49\u7B49\u3002 \u7B2C\u4E8C\u4E2A\u662F\u4FE1\u606F\u7BA1\u7406\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u5173\u6CE8\u7684\u662F\u600E\u6837\u66F4\u597D\u5730\u7406\u89E3\u3001\u6D88\u5316\u548C\u5E94\u7528\u83B7\u5F97\u7684\u5404\u4E2A\u77E5\u8BC6\u70B9\u3002\u6709\u5F88\u591A\u975E\u5E38\u6709\u7528\u7684\u65B9\u6CD5\u53EF\u4EE5\u7EC4\u7EC7\u8D77\u6765\u5F3A\u5316\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u6BD4\u5982\uFF1A\u5982\u4F55\u505A\u8BFB\u4E66\u7B14\u8BB0\uFF1F\u5982\u4F55\u7528\u601D\u7EF4\u5BFC\u56FE\u589E\u5F3A\u7406\u89E3\uFF1F\u5B66\u4E60\u4E2D\u7CBE\u8BFB\u548C\u6CDB\u8BFB\u7684\u533A\u522B\u3001\u884C\u52A8\u5B66\u4E60\u6CD5\u3001\u523B\u610F\u7EC3\u4E60\u7B49\u7B49\u3002\u800C\u80FD\u591F\u6709\u6548\u5229\u7528\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5B66\u4E60\u8005\u8FDB\u9636\u7684\u6807\u5FD7\u2014\u2014\u80FD\u591F\u6709\u6548\u5730\u628A\u5B66\u5230\u7684\u77E5\u8BC6\u7528\u4E8E\u89E3\u51B3\u95EE\u9898\u3002 \u7B2C\u4E09\u4E2A\u662F\u5E95\u5C42\u89C4\u5F8B\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u5173\u5FC3\u7684\u4E0D\u4EC5\u4EC5\u662F\u5177\u4F53\u7684\u65B9\u6CD5\u548C\u6280\u5DE7\uFF0C\u66F4\u5173\u5FC3\u81EA\u5DF1\u7684\u8BA4\u77E5\u6DF1\u5EA6\uFF1A\u6211\u4EEC\u5FC5\u987B\u5728\u5927\u91CF\u5177\u4F53\u77E5\u8BC6\u79EF\u6DC0\u7684\u57FA\u7840\u4E0A\uFF0C\u5F62\u6210\u66F4\u5B8F\u89C2\u548C\u62BD\u8C61\u7684\u7406\u89E3\uFF0C\u5728\u6DF1\u5C42\u6B21\u4E0A\u638C\u63E1\u666E\u904D\u89C4\u5F8B\uFF0C\u4ECE\u800C\u5C06\u4E4B\u524D\u5B66\u5230\u7684\u7E41\u6742\u7684\u77E5\u8BC6\u7528\u4E00\u6839\u7EBF\u4E32\u8D77\u6765\uFF0C\u5728\u5177\u4F53\u77E5\u8BC6\u4E4B\u5916\u627E\u5230\u65B0\u7684\u7B54\u6848\uFF0C\u5C06\u6709\u5F62\u5316\u4E3A\u65E0\u5F62\uFF0C\u53C8\u5C06\u65E0\u5F62\u7528\u4E8E\u6709\u5F62\u3002</p><h4 id="\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE" tabindex="-1"${_scopeId}><strong${_scopeId}>\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE</strong> <a class="header-anchor" href="#\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE" aria-hidden="true"${_scopeId}>#</a></h4><ol${_scopeId}><li${_scopeId}>\u5E94\u5BF9\u7A81\u53D1\u60C5\u51B5\uFF0C\u91CD\u70B9\u5728\u4E8E\u201C\u5148\u601D\u8003\u518D\u884C\u52A8\u201D\u3002</li><li${_scopeId}>\u4EC0\u4E48\u662F\u201C\u6279\u5224\u6027\u601D\u8003\u201C \u2014 \u6709\u201D\u6839\u636E\u201C\u7684\u8BF4\u8BDD\u89C4\u5219\u3002 <ol${_scopeId}><li${_scopeId}>\u601D\u8003\u4FE1\u606F\u3001\u610F\u89C1\u548C\u60F3\u6CD5\u7684\u5BF9\u9519\uFF0C\u4ECE\u4E2D\u6478\u7D22\u51FA\u66F4\u597D\u201D\u7B54\u6848\u201C\uFF0C\u5373\u662F\u6279\u5224\u6027\u601D\u8003\uFF08Critcal thinking\uFF09\u3002</li></ol></li><li${_scopeId}>\u589E\u52A0\u89C2\u70B9\uFF0C\u601D\u8003\u201D\u76F8\u53CD\u7684\u610F\u89C1\u201C\u3002</li></ol><h4 id="\u4EBA\u6027\u7684\u5F31\u70B9" tabindex="-1"${_scopeId}><strong${_scopeId}>\u4EBA\u6027\u7684\u5F31\u70B9</strong> <a class="header-anchor" href="#\u4EBA\u6027\u7684\u5F31\u70B9" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u6211\u4EEC\u5E94\u8BE5\u5173\u5FC3\u81EA\u5DF1\u7684\u95EE\u9898\uFF0C\u800C\u975E\u62C5\u5FE7\u3002 \u5173\u6CE8\u610F\u5473\u7740\u8981\u8BA4\u6E05\u95EE\u9898\uFF0C\u5E76\u51B7\u9759\u5730\u91C7\u53D6\u6B65\u9AA4\u5904\u7406\u5B83\uFF0C\u5FE7\u8651\u53EA\u662F\u614C\u4E71\u5730\u515C\u5708\u5B50\u3002 \u4F24\u5BB3\u4EBA\u7684\u5E76\u975E\u4E8B\u4EF6\u672C\u8EAB\uFF0C\u800C\u662F\u4ED6\u5BF9\u4E8B\u4EF6\u7684\u770B\u6CD5\u3002</p><h4 id="\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E" tabindex="-1"${_scopeId}><strong${_scopeId}>\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E</strong> <a class="header-anchor" href="#\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u5E74\u7EAA\u6E10\u957F\u548C\u5728\u5BB6\u529E\u516C\u7684\u53CC\u91CD\u66B4\u51FB\u4E0B\uFF0C\u6700\u8FD1\u8170\u5DF2\u7ECF\u5230\u6781\u9650\u4E86\u3002\u867D\u7136\u4E70\u4E86\u201C\u94B1\u6240\u80FD\u53CA\u201D\u7684\u6700\u597D\u7684\u6905\u5B50\u548C\u6700\u597D\u7684\u5E8A\uFF0C\u4E5F\u5728\u5B9E\u8DF5\u5404\u79CD\u7AD9\u7ACB\u529E\u516C\u548C\u4FDD\u6301\u8FD0\u52A8\uFF08~\uFF09\uFF0C\u4F46\u662F\u6D51\u8EAB\u4E0D\u8212\u670D\u7684\u60C5\u51B5\u8FD8\u662F\u5728\u6301\u7EED\u3002\u8FD9\u672C\u4E66\u5206\u6210\u9888\u8170\u819D\u4E09\u4E2A\u90E8\u5206\uFF0C\u5BF9\u5E38\u89C1\u7684\u75BC\u6CD5\u548C\u539F\u56E0\u505A\u4E86\u89E3\u91CA\uFF0C\u5E76\u7528\u56FE\u793A\u79D1\u666E\u4E86\u4E00\u4E9B\u5BF9\u5E94\u65B9\u6CD5\u3002</p><p${_scopeId}>\u4E13\u4E1A\u533B\u751F\u7684\u8C06\u8C06\u6559\u8BF2\uFF0C\u4E0D\u6562\u4E0D\u94ED\u523B\u4E8E\u5FC3\u554A\u3002</p><h3 id="\u5173\u4E8E\u6E38\u620F" tabindex="-1"${_scopeId}>\u5173\u4E8E\u6E38\u620F <a class="header-anchor" href="#\u5173\u4E8E\u6E38\u620F" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u53BB\u5E74\u5E74\u5E95\u5929\u771F\u5730\u60F3\u7740\u4E70 PS5\uFF0C\u4E8E\u662F\u5C31\u65E9\u65E9\u628A PS4 Pro \u62FF\u53BB\u4E8C\u624B\u5E97\u5356\u6389\u4E86\u3002\u54EA\u91CC\u60F3\u5230\u76F4\u5230\u4E00\u5E74\u540E\u7684\u4ECA\u5929\uFF0CPS5 \u90FD\u8FD8\u4E00\u673A\u96BE\u6C42\u3002\u4E8E\u662F\u5E72\u8106\u5F7B\u5E95\u8EBA\u5E73\u653E\u5F03\uFF0C\u8FDE\u5E26\u7740\u6362\u65B0\u7684\u7D22\u5C3C\u5927\u6CD5\u7535\u89C6\u7684\u8BA1\u5212\u4E5F\u65E0\u9650\u671F\u63A8\u5EF6\u4E86\u3002\u611F\u89C9\u7D22\u5C3C\u4ECE\u6211\u8FD9\u513F\u5C11\u8D5A\u4E86\u4E00\u4E2A\u4EBF\u3002</p><p${_scopeId}>\u6240\u4EE5\u4ECA\u5E74\u4E3B\u8981\u7684\u6E38\u620F\u5E73\u53F0\u5C31\u53EA\u6709 NS \u548C PC \u4E86\uFF0CPS \u518D\u89C1\u3002(\u6392\u540D\u4E0D\u5206\u5148\u540E\uFF0C\u63A8\u8350\u6307\u6570\u4EC5\u4EE3\u8868\u4E2A\u4EBA\u610F\u89C1\uFF09</p><p${_scopeId}>Switch</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6807\u9898</th><th${_scopeId}>\u6E38\u620F\u72B6\u6001</th><th${_scopeId}>\u77ED\u8BC4</th><th${_scopeId}>\u63A8\u8350\u6307\u6570</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>\u8D85\u7EA7\u9A6C\u529B\u6B273D\u4E16\u754C+\u72C2\u6012\u4E16\u754C</td><td${_scopeId}>10\u5C0F\u65F6\uFF0C\u6401\u7F6E</td><td${_scopeId}>3D \u5176\u5B9E\u6CA1\u600E\u4E48\u73A9\uFF0C\u72C2\u6012\u4E16\u754C\u662F\u6253\u901A\u4E86\u3002\u5982\u679C\u9A6C\u529B\u6B27\u5965\u5FB7\u8D5B\u627E\u6708\u4EAE\u8FD8\u6CA1\u8FC7\u763E\u7684\u8BDD\uFF0C\u53EF\u4EE5\u628A\u72C2\u6012\u4E16\u754C\u770B\u505A\u4E00\u4E2A DLC\uFF0C\u8FD8\u633A\u6709\u610F\u601D\u7684\u3002</td><td${_scopeId}>4/5</td></tr><tr${_scopeId}><td${_scopeId}>\u585E\u5C14\u8FBE\u4F20\u8BF4 \u5FA1\u5929\u4E4B\u5251 HD</td><td${_scopeId}>40\u5C0F\u65F6\uFF0C\u901A\u5173</td><td${_scopeId}>\u867D\u7136\u662F\u51B7\u996D\u91CD\u7F6E\u7248\uFF0C\u4F46\u662F\u89E3\u5BC6\u90E8\u5206\u7684\u8BBE\u8BA1\u5728\u4ECA\u5929\u770B\u6765\u4E5F\u4F9D\u7136\u51FA\u8272\u3002\u5982\u679C\u6CA1\u6709\u73A9\u8FC7\u539F\u7248\u7684\u8BDD\uFF0C\u8FD8\u662F\u975E\u5E38\u63A8\u8350\u3002</td><td${_scopeId}>4.5/5</td></tr><tr${_scopeId}><td${_scopeId}>\u706B\u5F71\u5FCD\u8005\u7A76\u6781\u98CE\u66B44</td><td${_scopeId}>10\u5C0F\u65F6\uFF0C\u6401\u7F6E</td><td${_scopeId}>\u5404\u79CD\u706B\u5F71\u7EA7\u7684\u4EBA\u7269\u5BF9\u6253\uFF0C\u91CA\u653E\u5927\u62DB\uFF0CPK\uFF0C\u9002\u5408\u805A\u4F1A\u4EBA\u591A\u7684\u65F6\u5019\u73A9</td><td${_scopeId}>3/5</td></tr></tbody></table><p${_scopeId}>PC</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u6807\u9898</th><th${_scopeId}>\u6E38\u620F\u72B6\u6001</th><th${_scopeId}>\u77ED\u8BC4</th><th${_scopeId}>\u63A8\u8350\u6307\u6570</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>Dota2</td><td${_scopeId}>\u51E0\u767E\u5C0F\u65F6\uFF0C\u4E00\u76F4\u73A9</td><td${_scopeId}>\u81EA\u4ECE LGD Ti 10 \u8F93\u7ED9 Team Spirit \u4E4B\u540E\uFF0C\u8D8A\u53D1\u89C9\u5185\u56FD\u5185\u81EA Wings \u4E4B\u540E\u593A\u51A0\u65E0\u671B\u3002</td><td${_scopeId}>4.5/5</td></tr><tr${_scopeId}><td${_scopeId}>CS Go</td><td${_scopeId}>10\u5C0F\u65F6\uFF0C\u6401\u7F6E</td><td${_scopeId}>\u5076\u5C14\u548C\u670B\u53CB\u6253\u6253\u67AA</td><td${_scopeId}>1/5</td></tr><tr${_scopeId}><td${_scopeId}>\u6CF0\u62C9\u745E\u4E9A</td><td${_scopeId}>10\u5C0F\u65F6\uFF0C\u6401\u7F6E</td><td${_scopeId}>Man\uFF0C\u8001\u7F8A\u4E00\u8D77\u73A9\u8FC7\u7684\u6E38\u620F</td><td${_scopeId}>3/5</td></tr></tbody></table><p${_scopeId}>\u5199\u5B8C\u8FD9\u4E2A\uFF0C\u4ECA\u5E74\u540E\u9762\u4E5F\u5C31\u53EA\u5269\u5047\u671F\u4E86\u3002\u6211\u4EEC\u660E\u5E74\u518D\u89C1\uFF01</p><p${_scopeId}>\u501F\u7528\u4EBA\u6C11\u65E5\u62A5\u7684\u6587\u6848\uFF0C\u7ED3\u675F 2021 \u5E74\u7684 Annual Report ~</p><p${_scopeId}>\u8FD9\u4E00\u5E74\uFF0C\u53E3\u7F69 36.5 \u6444\u6C0F\u5EA6\uFF0C\u9047\u89C1\u3001\u83B7\u5F97\u3001\u5931\u53BB\u3001\u6210\u957F\u3001\u91CA\u6000\u3001\u7F13\u89E3\uFF0C\u6211\u4E0E\u65E7\u4E8B\u5F52\u4E8E\u5E86\uFF0C\u6765\u5E74\u4F9D\u65E7\u8FCE\u82B1\u5F00\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u65E9\u6668\u62C9\u5F00\u7A97\u5E18\uFF0C\u88AB\u6321\u4F4F\u7684\u9633\u5149\u7EC8\u4E8E\u50CF\u662F\u51B2\u5F00\u4E86\u58C1\u969C\u4E00\u822C\uFF0C\u8086\u610F\u94FA\u5728\u684C\u9762\u4E0A\u3002\u4F46\u662F\u7A97\u5916\u88AB\u98CE\u5439\u5F97\u6447\u6447\u6643\u6643\u7684\u6811\u679D\uFF0C\u4FE8\u7136\u662F\u5728\u8BC9\u8BF4\u7740\u521A\u521A\u8FC7\u53BB\u7684\u8FD9\u4E2A\u591C\u665A\u662F\u4F55\u7B49\u96BE\u71AC\u3002\u5BF9\u5B83\u4EEC\uFF0C\u5BF9\u6211\u4EEC\uFF0C\u8FD9\u4E2A\u51AC\u5929\u4F3C\u4E4E\u6BD4\u4EE5\u5F80\u90FD\u8981\u5BD2\u51B7\uFF0C\u5927\u5BB6\u90FD\u76FC\u671B\u7740\u6625\u5929\u5FEB\u70B9\u5230\u6765\u3002"),
                vue.createVNode("p", null, "\u4E60\u60EF\u6027\u5730\u6253\u5F00\u7535\u8111\uFF0C\u4E60\u60EF\u6027\u5730\u6CE1\u4E0A\u5496\u5561\uFF0C\u7A81\u7136\u60F3\u8D77\u5DF2\u7ECF\u5B9E\u5728\u662F\u5230\u5E74\u5E95\u4E86\u3002\u53BB\u5E74\u7684\u5E74\u7EC8\u603B\u7ED3\u88AB\u6211\u786C\u751F\u751F\u62D6\u5230\u4E86\u4ECA\u5E74\uFF0C\u800C\u4ECA\u5E74\u6211\u4E5F\u4E0D\u60F3\u518D\u5982\u6545\u8E49\u8DCE\u3002\u5728\u5C4B\u5B50\u91CC\u4E45\u4E86\uFF0C\u8111\u5B50\u663E\u7136\u4F1A\u4E0D\u6E05\u9192\uFF0C\u4E8E\u662F\u6211\u51B3\u5B9A\u62AB\u4E0A\u5916\u5957\uFF0C\u51FA\u95E8\u5230\u9662\u5B50\u91CC\uFF0C\u547C\u5438\u4E00\u70B9\u65B0\u9C9C\u7A7A\u6C14\u3002\u987A\u4FBF\u9876\u7740\u8FD9\u51AC\u65E5\u7684\u5BD2\u98CE\u7684\u6E05\u9192\uFF0C\u6765\u634B\u4E00\u634B\u4ECA\u5E74\u7684\u601D\u7EEA\u3002\u5F53\u7136\uFF0C\u5728\u6700\u540E\u6211\u4E5F\u4F1A\u6574\u7406\u4E00\u4E0B\u4ECA\u5E74\u770B\u8FC7\u7684\u4E66\u5355\u3001\u52A8\u6F2B\u548C\u73A9\u8FC7\u7684\u6E38\u620F\uFF0C\u7B97\u662F\u5386\u6765\u5E74\u7EC8\u603B\u7ED3\u7684\u4F20\u7EDF\u8282\u76EE\u3002"),
                vue.createVNode("h3", {
                  id: "\u5173\u4E8E\u751F\u6D3B",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5173\u4E8E\u751F\u6D3B "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5173\u4E8E\u751F\u6D3B",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u75AB\u60C5\u867D\u7136\u4E0D\u50CF\u53BB\u5E74\u90A3\u4E48\u70ED\u4E86\uFF0C\u4F46\u4E5F\u9003\u4E0D\u51FA\u751F\u6D3B\u7684\u4E3B\u65CB\u5F8B\u4E4B\u4E00\u3002"),
                vue.createVNode("p", null, "\u4ECE\u4E2D\u7F8E\u8D38\u6613\u6218\u5F00\u6253\uFF0C\u201C\u4E16\u754C\u6751\u201D\u5C31\u5F00\u59CB\u574D\u584C\u4E86\uFF0C\u52A0\u4E0A\u534A\u8DEF\u6740\u51FA\u65B0\u51A0\u75AB\u60C5\u8FD9\u4E2A\u7A0B\u54AC\u91D1\uFF0C\u9006\u5168\u7403\u5316\u7684\u8D8B\u52BF\u66F4\u662F\u65E0\u6BD4\u660E\u663E\u3002\u5404\u79CD\u53D8\u5F02\u682A\u201C\u4F60\u65B9\u5531\u7F62\u6211\u767B\u573A\u201D\uFF0C\u4F46\u770B\u8D77\u6765\u90FD\u662F\u5728\u5F80\u9AD8\u4F20\u67D3\u4F4E\u81F4\u547D\u7684\u65B9\u5411\u6F14\u53D8\u3002\u4E0D\u8FC7\u65E0\u8BBA\u662F\u5FB7\u5C14\u5854\u3001\u5965\u5BC6\u514B\u620E\u7684\u6BD2\u6027\u591A\u4E48\u4E0D\u582A\uFF0C\u4F46\u8089\u773C\u9884\u8BA1\u8FD9\u79CD\u5168\u7403\u95ED\u9501\u7684\u60C5\u51B5\uFF0C\u81F3\u5C11\u8FD8\u8981\u6301\u7EED\u5F88\u957F\u4E00\u6BB5\u65F6\u95F4\u3002\u53EA\u80FD\u8BF4\u5E0C\u671B\u4E00\u5207\u5B89\u597D\uFF0C\u5E0C\u671B\u80FD\u5C3D\u65E9\u6062\u590D\u76DB\u51B5\u3002"),
                vue.createVNode("p", null, "\u5176\u4ED6\u65B9\u9762\u5C31\u4E4F\u5584\u53EF\u9648\u4E86\u3002\u6211\u4F3C\u4E4E\u56DE\u5230\u4E86\u4EE5\u524D\u6559\u5BA4\u98DF\u5802\u5BBF\u820D\u4E09\u70B9\u4E00\u7EBF\u7684\u751F\u6D3B\u4E2D\uFF0C\u6BCF\u5929\u9017\u9017\u6155\u741B\u3001\u601D\u73E9\u5979\u4EEC\u4FE9\uFF0C\u5076\u5C14\u53BB\u8D85\u5E02\u5C6F\u4E0B\u8D27\uFF0C\u7136\u540E\u5C31\u56DE\u5BB6\u5B85\u8D77\u6765\u3002\u4E5F\u8BB8\u8FD9\u5C31\u53EB\u5E73\u5E73\u51E1\u51E1\u624D\u662F\u771F\uFF1F\u6211\u81EA\u8BA4\u662F\u8010\u5F97\u4F4F\u5BC2\u5BDE\u7684\u4EBA\uFF0C\u4F46\u5076\u5C14\u4E5F\u4F1A\u5E0C\u671B\u8DEF\u8FB9\u4E0D\u8FDC\u5904\u7684\u91CE\u732B\u80FD\u6765\u9662\u5B50\u91CC\u6652\u6652\u592A\u9633\uFF0C\u9694\u58C1\u7684\u90BB\u5C45\u80FD\u6765\u4E00\u8D77\u5410\u69FD\u4E00\u4E0B\u65F6\u4E8B\u3002\u4F46\u73B0\u4EE3\u793E\u4F1A\u5C31\u662F\u8FD9\u6837\u6B8B\u9177\uFF0C\u522B\u8BF4\u4EBA\u4E86\uFF0C\u5C31\u7B97\u662F\u732B\uFF0C\u90FD\u8981\u5FD9\u7740\u53BB\u6328\u5BB6\u6328\u6237\u5DE1\u67E5\u5730\u76D8\uFF0C\u5B8C\u5168\u6CA1\u6709\u610F\u613F\u505C\u4E0B\u5B83\u90A3\u5FD9\u788C\u7684\u811A\u6B65\uFF0C\u4E5F\u6839\u672C\u61D2\u5F97\u770B\u4F60\u4E00\u773C\u3002\u4E8E\u662F\uFF0C\u6211\u4E5F\u53EA\u597D\u6536\u8D77\u90A3\u671F\u76FC\u7684\u773C\u795E\uFF0C\u9000\u56DE\u5230\u81EA\u5DF1\u6E29\u6696\u7684\u5DE2\u91CC\uFF0C\u7136\u540E\u7528\u539A\u539A\u7684\u8327\u628A\u81EA\u5DF1\u5305\u88F9\u8D77\u6765\uFF1A\u53EF\u80FD\u8FD9\u5C31\u662F\u6027\u683C\u4F7F\u7136\uFF0C\u5927\u6982\u672C\u6027\u4E5F\u5F88\u96BE\u6539\u53D8\u4E86\u5427\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u65E0\u6BD4\u611F\u8C22\u8001\u5A46\u5927\u4EBA\uFF0C\u8BA9\u6211\u6709\u4E86 \u201C"),
                  vue.createVNode("strong", null, "\u6155\u741B"),
                  vue.createTextVNode("\u3001"),
                  vue.createVNode("strong", null, "\u601D\u73E9\u201D"),
                  vue.createTextVNode(" \u4E24\u4E2A\u5C0F\u5BB6\u4F19\u3002")
                ]),
                vue.createVNode("h3", {
                  id: "\u5173\u4E8E\u5DE5\u4F5C",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5173\u4E8E\u5DE5\u4F5C "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5173\u4E8E\u5DE5\u4F5C",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u4E00\u5207\u987A\u5229\u3002\u4ECA\u5E74\u867D\u7136\u8D1F\u8D23\u4E8B\u60C5\u7684\u603B\u91CF\u4E5F\u6CA1\u53D8\u591A\uFF0C\u4F46\u5347\u804C\u52A0\u85AA\u4F3C\u4E4E\u5012\u4E5F\u6CA1\u5C11\u3002\u76F8\u5BF9\u4E8E\u5B9E\u9645\u7684\u4EE3\u7801\u5DE5\u4F5C\u6765\u8BF4\uFF0C\u7531\u4E8E\u56E2\u961F\u7F3A\u4EBA\uFF0C\u4ECA\u5E74\u6709\u66F4\u591A\u7684\u673A\u4F1A\u9762\u8BD5\u4E86\u4E00\u4E9B\u4EBA\uFF0C\u4E8E\u662F\u5BF9\u56FD\u5185\u7684 IT \u548C\u804C\u573A\u7684\u60C5\u51B5\u6709\u4E86\u66F4\u591A\u7684\u7406\u89E3 (\u6280\u672F\u662F\u771F\u7684\u5F31\u4E5F\u66F4\u6709\u5B9E\u611F\u4E86)\u3002\u5728\u7EBF\u9762\u8BD5\u548C\u4F20\u7EDF\u7684 onsite \u786E\u5B9E\u6709\u5F88\u5927\u7684\u533A\u522B\uFF0C\u9762\u5BF9\u5C4F\u5E55\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u97F3\u50CF\u5EF6\u8FDF\u4EE5\u53CA\u6444\u50CF\u5934\u4E00\u822C\u53EA\u80FD\u62CD\u5230\u9762\u90E8\uFF0C\u6240\u4EE5\u5F88\u96BE\u5BDF\u89C9\u5230\u4E00\u4E9B\u7EC6\u8282\uFF1A\u6211\u613F\u610F\u628A\u8FD9\u4E9B\u7EC6\u8282\u53EB\u505A\u9762\u8BD5\u4E2D\u7A7A\u6C14\u7684\u53D8\u5316 (\u4F60\u61C2\u7684)\u3002\u8FD9\u79CD\u7EC6\u8282\u7684\u7F3A\u5931\uFF0C\u5BF9\u4E8E\u53CC\u65B9\u6765\u8BF4\u90FD\u6709\u4E00\u70B9\u635F\u5931\uFF1A\u672C\u6765\u5149\u9760\u4E00\u4E24\u6B21\u9762\u8BD5\uFF0C\u5019\u9009\u8005\u548C\u516C\u53F8\u5C31\u5DF2\u7ECF\u5F88\u96BE\u5B8C\u6210\u5BF9\u5F7C\u6B64\u5168\u9762\u826F\u597D\u7684\u5224\u65AD\u4E86\uFF0Conline \u9762\u8BD5\u66F4\u662F\u96EA\u4E0A\u52A0\u971C\u3002\u5E78\u597D\u5BF9\u4E8E\u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u66F4\u591A\u65F6\u5019\u5F7C\u6B64\u9762\u5BF9\u7684\u90FD\u662F\u4EE3\u7801\u800C\u975E\u4EBA\uFF0C\u6240\u4EE5\u53EA\u8981\u7B14\u8BD5\u4EE3\u7801\u5E72\u51C0\u6F02\u4EAE\uFF0C\u603B\u8FD8\u662F\u613F\u610F\u591A\u7ED9\u4E00\u4E9B\u673A\u4F1A\u3002\u964D\u4F4E\u4E86\u5B9E\u9645\u9762\u8BD5\u7684\u8981\u6C42\u548C\u671F\u671B\uFF0C\u8F6C\u800C\u589E\u52A0\u7B14\u8BD5\u65F6\u5019\u7684\u6BD4\u91CD (\u6216\u8005\u8BF4\u9009\u62E9\u5728\u7B14\u8BD5\u5173\u66F4\u52A0\u4E25\u683C)\uFF0C\u5927\u6982\u662F\u6700\u8FD1\u9762\u8BD5\u65F6\u5019\u7684\u4E00\u4E2A\u91CD\u8981\u8F6C\u53D8\u5427\u3002"),
                vue.createVNode("p", null, "\u5176\u4ED6\u5DE5\u4F5C\u90FD\u6709\u6761\u4E0D\u7D0A\u5730\u8FDB\u884C\u7740\uFF0C\u65E5\u590D\u4E00\u65E5\u7684\u7248\u672C\u8FED\u4EE3\uFF0C\u5728\u7A7A\u95F2\u65F6\u95F4\u627E\u673A\u4F1A\u91CD\u6784\u70C2\u6389\u7684\u90E8\u5206\uFF0C\u5076\u5C14\u8FDB\u884C\u4E00\u4E9B\u6280\u672F\u8BC4\u4F30\u548C\u65B9\u5411\u4E0A\u7684\u628A\u63A7\uFF0C\u4FDD\u8BC1\u9879\u76EE\u80FD\u591F\u957F\u4E45\u6301\u7EED\u505A\u4E0B\u53BB\uFF0C\u4E0D\u62D6\u56E2\u961F\u540E\u817F\uFF0C\u540C\u65F6\u4E5F\u80FD\u8BA9\u540C\u4E8B\u4EEC\u4E8B\u534A\u529F\u500D\uFF0C\u5927\u5BB6\u5F00\u5F00\u5FC3\u5FC3\uFF1A\u8FD9\u4E9B\u5C31\u662F\u6211\u73B0\u5728\u5DE5\u4F5C\u7684\u91CD\u5FC3\u3002"),
                vue.createVNode("p", null, "\u56FD\u5185\u7684\u4E92\u8054\u7F51\u5E02\u573A\u771F\u662F\u5343\u53D8\u4E07\u5316\uFF0C\u9B44\u529B\u65E0\u7A77\uFF0C\u524D\u811A\u53CC\u51CF\u6559\u57F9\u5927\u6574\u6539\uFF0C\u540E\u811A\u8FDE\u7EED\u7EA6\u8C08\u5404\u79CD\u5927\u5382\u53CD\u5784\u65AD\uFF0C\u51E0\u4E2A\u5927\u9524\u4E0B\u6765\u4E1A\u754C\u5F62\u6001\u5C31\u5B8C\u5168\u6539\u53D8\u3002\u6211\u90FD\u80FD\u591F\u975E\u5E38\u660E\u663E\u5730\u611F\u53D7\u5230\uFF0C\u56FD\u5185\u6B63\u5904\u4E8E\u4E00\u4E2A\u6781\u7AEF\u91CD\u8981\u7684\u8F6C\u578B\u671F\u3002\u6700\u8FD1\u51E0\u5E74\u7684\u653F\u7B56\u65B9\u5411\uFF0C\u80AF\u5B9A\u4F1A\u7ED9\u540E\u7EED\u5341\u5E74\u751A\u81F3\u4E8C\u5341\u5E74\u7684\u793E\u4F1A\u7ED3\u6784\u5E26\u6765\u60F3\u8C61\u4E0D\u5230\u7684\u5F71\u54CD\u3002\u5BF9\u4E8E\u6211\u8FD9\u6837\u6DF7\u65E5\u5B50\u7684\u5E95\u5C42\u767D\u9886\u6765\u8BF4\uFF0C\u8FD9\u5931\u53BB\u4E86\u5F88\u591A\u673A\u4F1A\uFF1B\u4E0D\u8FC7\u53E6\u4E00\u65B9\u9762\uFF0C\u8FD9\u79CD\u7F3A\u4E4F\u53EF\u80FD\u6027\u7684\u5B89\u5B9A\uFF0C\u4E5F\u8BA9\u751F\u6D3B\u76F8\u5BF9\u5E73\u7A33\uFF0C\u7109\u77E5\u975E\u798F\u5427\u3002"),
                vue.createVNode("p", null, "\u4E5F\u611F\u8C22\u5B57\u8282\uFF0C\u7ED9\u6211 Work For Home \u7684\u673A\u4F1A\uFF01\uFF08\u5927\u516C\u53F8\u60F3\u8BA9\u4F60\u628A\u516C\u53F8\u5F53\u6210\u5BB6\uFF0C\u6211\u60F3\u7684\u662F\u56DE\u81EA\u5DF1\u5BB6 ~ \uFF09\u8C22\u8C22 HRD \u7ED9\u63D0\u4F9B\u7684\u5404\u79CD\u4FBF\u5229\u53CA\u5E2E\u52A9\u3002"),
                vue.createVNode("h3", {
                  id: "\u5173\u4E8E\u5B66\u4E60",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5173\u4E8E\u5B66\u4E60 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5173\u4E8E\u5B66\u4E60",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u6BCF\u5E74\u5145\u7535\u8FD8\u662F\u8981\u5145\u7684\u3002"),
                vue.createVNode("p", null, "\u5728\u7A0B\u5E8F\u8BBE\u8BA1\u65B9\u9762\uFF0C\u4ECA\u5E74\u4E3B\u8981\u7528 GoLang \u5B9E\u9645\u5199\u4E86\u4E00\u70B9\u5DE5\u5177\u7C7B\u7684\u4E1C\u897F\uFF0C\u5927\u6982\u4E5F\u5C31\u4E24\u4E09\u5343\u884C\u7684\u73A9\u5177\uFF0C\u6765\u6539\u5584\u5F00\u53D1\u6D41\u7A0B\u3002\u5B9E\u9645\u4E0A\u9009\u62E9\u66F4\u62FF\u624B\u7684\u8BED\u8A00\uFF0C\u6BD4\u5982 Swift\uFF0C\u6765\u505A\u8FD9\u4EF6\u4E8B\u60C5\u4F1A\u66F4\u597D\u4E00\u4E9B\uFF0C\u4F46\u662F\u65E2\u7136\u53BB\u5E74\u5B66\u4E86\u4E9B GoLang\uFF0C\u90A3\u6709\u660E\u663E\u7684\u9489\u5B50\uFF0C\u81EA\u7136\u662F\u7528\u65B0\u9524\u5B50\u6BD4\u8F83\u5F00\u5FC3\u3002"),
                vue.createVNode("p", null, "\u5B9E\u9645\u4F7F\u7528\u65F6\u5927\u6982\u6709\u4E00\u5927\u534A\u7684\u65F6\u95F4\u90FD\u82B1\u5728\u4E86\u7814\u7A76 Go Modules \u548C GORM\uFF0C\u4EE3\u7801 refactor \u4EE5\u53CA feat \u5B66\u4E60\u4E0A\u3002\u5E94\u8BE5\u662F\u6211\u5F88\u4E0D\u719F\u7EC3\uFF0C\u6240\u4EE5\u4F1A\u6709\u8FD9\u6837\u7684\u56F0\u60D1\u3002\u867D\u7136\u80FD\u76F4\u89C2\u611F\u53D7\u5230\u5185\u5B58\u4F7F\u7528\u4E0A\u7684\u5C0F\u5FC3\u8C28\u614E\uFF0C\u4F46\u662F\u5B9E\u9645\u7684\u5F00\u53D1\u4F53\u9A8C\u786E\u5B9E\u6709\u4E9B\u75DB\u82E6\u3002\u9664\u975E\u6709\u5BF9\u6027\u80FD\u548C\u5185\u5B58\u5B89\u5168\u975E\u5E38\u654F\u611F\u7684\u9700\u6C42\uFF0C\u5426\u5219 GoLang \u7684\u725B\u5200\u7528\u6765\u6740\u9E21\uFF0C\u4E2A\u4EBA\u611F\u89C9\u662F\u4E0D\u592A\u5408\u9002\u7684\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53C2\u4E0E\u4E86\u56FD\u5185 GoLang \u793E\u533A\u7684\u6587\u7AE0\u7FFB\u8BD1\u5DE5\u4F5C\uFF0C\u4E5F\u7B97\u662F\u5BF9\u5176\u4ED6 Go \u505A\u4E86\u4E9B\u4E9B\u8D21\u732E\u5427\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Swift \u4E5F\u63D0\u51FA\u4E86\u5173\u4E8E ARC \u6539\u8FDB\u548C ownership \u7684"),
                  vue.createVNode("a", {
                    href: "https://forums.swift.org/t/a-roadmap-for-improving-swift-performance-predictability-arc-improvements-and-ownership-control/54206",
                    target: "_blank",
                    rel: "noopener"
                  }, "\u8DEF\u7EBF\u56FE"),
                  vue.createTextVNode("\u3002\u7B2C\u4E00\u611F\u53D7\u5C31\u662F\uFF0C\u867D\u7136\u8868\u9762\u4E0A\u5199\u7684\u662F Swift\uFF0C\u4F46\u9AA8\u5B50\u91CC\u771F\u5168\u662F Go\u3002\u6682\u65F6\u73B0\u5728\u5F88\u96BE\u5BF9\u8FD9\u6837\u7684\u6539\u52A8\u53D1\u8868\u4EC0\u4E48\u770B\u6CD5\uFF0C\u53EA\u5E0C\u671B Swift \u56E2\u961F\u80FD\u5728\u6613\u7528\u6027\u548C\u5B89\u5168\u6027\u4E4B\u95F4\u627E\u5230\u5E73\u8861\u5427\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5728\u7F16\u7A0B\u4E4B\u5916\uFF0C\u6211\u4E5F\u5F00\u59CB\u4E86\u4E00\u4E9B Blender \u7684\u5B66\u4E60\u3002\u8D81\u7740\u9ED1\u4E94\u7528\u4F18\u60E0\u4EF7\u4E70\u4E86\xA0"),
                  vue.createVNode("a", {
                    href: "https://polygonrunway.com/",
                    target: "_blank",
                    rel: "noopener"
                  }, "polygon runway \u7684\u89C6\u9891\u6559\u7A0B"),
                  vue.createTextVNode("\uFF0C\u5E76\u6CA1\u6709\u6253\u7B97\u56DE\u5230\u6E38\u620F\u884C\u4E1A\uFF0C\u53EA\u662F\u5E0C\u671B\u80FD\u591F\u5728\u9700\u8981\u7684\u65F6\u5019\u81F3\u5C11\u80FD\u5728\u81EA\u5DF1\u529B\u6240\u80FD\u53CA\u7684\u8303\u56F4\u5185\uFF0C\u505A\u4E00\u4E9B logo \u6216\u8005 3D \u89C6\u89C9\u6E32\u67D3\u56FE\u3002\u6211\u81EA\u5DF1\u6709\u51E0\u5E74\u524D\u7684\u4E00\u4E9B Unity \u7ECF\u9A8C\uFF0C\u5BF9\u4E8E\u5927\u90E8\u5206 3D \u548C\u56FE\u5F62\u6E32\u67D3\u7684\u6982\u5FF5\u4E5F\u90FD\u6709\u6240\u4E86\u89E3\uFF0C\u6240\u4EE5\u4E0A\u624B\u901F\u5EA6\u8FD8\u4E0D\u9519\u3002\u89C6\u9891\u6559\u7A0B\u867D\u7136\u662F\u5168\u82F1\u6587\uFF0C\u4E5F\u6CA1\u6709\u5B57\u5E55\u4EC0\u4E48\u7684\uFF0C\u4E0D\u8FC7\u5C31\u7B97\u5F53\u4F5C\u5DE5\u4F5C\u4E4B\u4F59\u8F6C\u6362\u8111\u7B4B\uFF0C\u4E5F\u8FD8\u662F\u5F88\u4E0D\u9519\u7684\u3002")
                ]),
                vue.createVNode("p", null, "\u4ECA\u5E74\u7684\u8BED\u8A00\u5B66\u4E60\u4E22\u4E86\u597D\u591A\uFF0C\u4EE5\u81F3\u4E8E French \u8001\u5E08\uFF0C\u4E00\u76F4\u6253\u7535\u8BDD\u95EE\u6211\uFF0C\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u5269\u4F59\u7684\u79C1\u6559\u8BFE\u7A0B\u3002\uFF08\u66FF\u6211\u82B1\u7684\u94B1\u4E0D\u503C ~\uFF09"),
                vue.createVNode("h3", {
                  id: "\u5173\u4E8E\u9605\u8BFB",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5173\u4E8E\u9605\u8BFB "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5173\u4E8E\u9605\u8BFB",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u4ECA\u5E74\u4EBA\u6175\u61D2\u4E86\uFF0C\u8BFB\u7684\u4E66\u4E0D\u591A\uFF0C\u9700\u8981\u53CD\u7701\u3002\u6280\u672F\u7C7B\u7684\u4E66\u7C4D\u90FD\u5F88\u65E0\u804A\uFF0C\u5927\u591A\u90FD\u662F\u6559\u7A0B\u7EA7\u522B\u7684\u5C31\u4E0D\u5199\u4E86\uFF1B\u79D1\u666E\u7C7B\u3001\u89C6\u91CE\u5F00\u62D3\uFF08iDaily\uFF09\u7684\u6742\u5FD7\u8BA2\u9605\u4E86\u4E00\u4E9B (\u725B\u987F\u79D1\u5B66\u4E16\u754C\u548C\u56FD\u5BB6\u5730\u7406\u4EC0\u4E48\u7684)\uFF0C\u5185\u5BB9\u4E5F\u90FD\u96F6\u96F6\u6563\u6563\u3002\u8FD8\u662F\u591A\u4ECB\u7ECD\u4E00\u4E9B\u4ECA\u5E74\u770B\u8FC7\u7684\u4EBA\u6587\u793E\u79D1\u7684\u4E66\u5427\u3002"),
                vue.createVNode("h4", {
                  id: "\u672A\u6765\u7B80\u53F2-\u4ECE\u667A\u4EBA\u5230\u667A\u795E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u672A\u6765\u7B80\u53F2 \u4ECE\u667A\u4EBA\u5230\u667A\u795E"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u672A\u6765\u7B80\u53F2-\u4ECE\u667A\u4EBA\u5230\u667A\u795E",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u968F\u7740\u7B97\u6CD5\u5C06\u4EBA\u7C7B\u6324\u51FA\u5C31\u4E1A\u5E02\u573A\uFF0C\u8D22\u5BCC\u548C\u6743\u529B\u53EF\u80FD\u4F1A\u96C6\u4E2D\u5728\u62E5\u6709\u5F3A\u5927\u7B97\u6CD5\u7684\u6781\u5C11\u6570\u7CBE\u82F1\u624B\u4E2D\uFF0C\u9020\u6210\u524D\u6240\u672A\u6709\u7684\u793E\u4F1A\u53CA\u653F\u6CBB\u4E0D\u5E73\u7B49\u3002 \u5230\u4E8621\u4E16\u7EAA\uFF0C\u6211\u4EEC\u53EF\u80FD\u770B\u5230\u7684\u662F\u4E00\u4E2A\u5168\u65B0\u800C\u5E9E\u5927\u7684\u9636\u7EA7\uFF1A\u8FD9\u4E00\u7FA4\u4EBA\u6CA1\u6709\u4EFB\u4F55\u7ECF\u6D4E\u3001\u653F\u6CBB\u6216\u827A\u672F\u4EF7\u503C\uFF0C\u5BF9\u793E\u4F1A\u7684\u7E41\u8363\u3001\u529B\u91CF\u548C\u8363\u8000\u4E5F\u6CA1\u6709\u4EFB\u4F55\u8D21\u732E\u3002 \u4F20\u7EDF\u4E0A\uFF0C\u4EBA\u751F\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u65F6\u671F\uFF1A\u5B66\u4E60\u671F\uFF0C\u518D\u52A0\u4E0A\u4E4B\u540E\u7684\u5DE5\u4F5C\u671F\u3002\u4F46\u8FD9\u79CD\u4F20\u7EDF\u6A21\u5F0F\u5F88\u5FEB\u5C31\u4F1A\u5F7B\u5E95\u8FC7\u65F6\uFF0C\u60F3\u8981\u4E0D\u88AB\u6DD8\u6C70\u53EA\u6709\u4E00\u6761\u8DEF\uFF1A\u4E00\u8F88\u5B50\u4E0D\u65AD\u5B66\u4E60\uFF0C\u4E0D\u65AD\u6253\u9020\u5168\u65B0\u7684\u81EA\u5DF1\u3002\u53EA\u4E0D\u8FC7\uFF0C\u8BB8\u591A\u4EBA\uFF0C\u751A\u81F3\u662F\u5927\u591A\u6570\u4EBA\uFF0C\u5927\u6982\u90FD\u505A\u4E0D\u5230\u8FD9\u4E00\u70B9\u3002"),
                vue.createVNode("h4", {
                  id: "seeing-through-statistics",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "Seeing Through Statistics"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#seeing-through-statistics",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "The fourth edition of this popular book by Jessica Utts develops statistical literacy and critical thinking through real-world applications, with an emphasis on ideas, not calculations. This text focuses on the key concepts that educated citizens need to know about statistics. These ideas are introduced in interesting applied and real contexts, without using an abundance of tec \u2026"),
                vue.createVNode("h4", {
                  id: "\u597D\u597D\u5B66\u4E60",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u597D\u597D\u5B66\u4E60"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u597D\u597D\u5B66\u4E60",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u7B2C\u4E00\u4E2A\u662F\u6570\u636E\u7BA1\u7406\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u6240\u8C08\u8BBA\u7684\u77E5\u8BC6\u7BA1\u7406\u66F4\u591A\u662F\u5177\u4F53\u7684\u6570\u636E\u5C42\u9762\u6280\u5DE7\u3002\u6BD4\u5982\uFF0C\u4E0B\u8F7D\u7684\u6587\u4EF6\u600E\u4E48\u4FDD\u5B58\uFF1F\u5B66\u5230\u7684\u77E5\u8BC6\u70B9\u600E\u4E48\u5F52\u7C7B\uFF1F\u5982\u4F55\u5FEB\u901F\u641C\u7D22\u6587\u4EF6\uFF1F\u5982\u4F55\u7ED9\u6587\u4EF6\u8D34\u6807\u7B7E\uFF1F\u600E\u6837\u6574\u7406\u6587\u4EF6\u5939\uFF1F\u5728\u54EA\u91CC\u627E\u5230\u5408\u9002\u7684\u4E66\u5355\uFF1F\u7B49\u7B49\u3002 \u7B2C\u4E8C\u4E2A\u662F\u4FE1\u606F\u7BA1\u7406\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u5173\u6CE8\u7684\u662F\u600E\u6837\u66F4\u597D\u5730\u7406\u89E3\u3001\u6D88\u5316\u548C\u5E94\u7528\u83B7\u5F97\u7684\u5404\u4E2A\u77E5\u8BC6\u70B9\u3002\u6709\u5F88\u591A\u975E\u5E38\u6709\u7528\u7684\u65B9\u6CD5\u53EF\u4EE5\u7EC4\u7EC7\u8D77\u6765\u5F3A\u5316\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u6BD4\u5982\uFF1A\u5982\u4F55\u505A\u8BFB\u4E66\u7B14\u8BB0\uFF1F\u5982\u4F55\u7528\u601D\u7EF4\u5BFC\u56FE\u589E\u5F3A\u7406\u89E3\uFF1F\u5B66\u4E60\u4E2D\u7CBE\u8BFB\u548C\u6CDB\u8BFB\u7684\u533A\u522B\u3001\u884C\u52A8\u5B66\u4E60\u6CD5\u3001\u523B\u610F\u7EC3\u4E60\u7B49\u7B49\u3002\u800C\u80FD\u591F\u6709\u6548\u5229\u7528\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u4E5F\u662F\u4E00\u4E2A\u5B66\u4E60\u8005\u8FDB\u9636\u7684\u6807\u5FD7\u2014\u2014\u80FD\u591F\u6709\u6548\u5730\u628A\u5B66\u5230\u7684\u77E5\u8BC6\u7528\u4E8E\u89E3\u51B3\u95EE\u9898\u3002 \u7B2C\u4E09\u4E2A\u662F\u5E95\u5C42\u89C4\u5F8B\u7684\u7EF4\u5EA6\u3002\u5728\u8FD9\u4E2A\u7EF4\u5EA6\u4E0A\uFF0C\u6211\u4EEC\u5173\u5FC3\u7684\u4E0D\u4EC5\u4EC5\u662F\u5177\u4F53\u7684\u65B9\u6CD5\u548C\u6280\u5DE7\uFF0C\u66F4\u5173\u5FC3\u81EA\u5DF1\u7684\u8BA4\u77E5\u6DF1\u5EA6\uFF1A\u6211\u4EEC\u5FC5\u987B\u5728\u5927\u91CF\u5177\u4F53\u77E5\u8BC6\u79EF\u6DC0\u7684\u57FA\u7840\u4E0A\uFF0C\u5F62\u6210\u66F4\u5B8F\u89C2\u548C\u62BD\u8C61\u7684\u7406\u89E3\uFF0C\u5728\u6DF1\u5C42\u6B21\u4E0A\u638C\u63E1\u666E\u904D\u89C4\u5F8B\uFF0C\u4ECE\u800C\u5C06\u4E4B\u524D\u5B66\u5230\u7684\u7E41\u6742\u7684\u77E5\u8BC6\u7528\u4E00\u6839\u7EBF\u4E32\u8D77\u6765\uFF0C\u5728\u5177\u4F53\u77E5\u8BC6\u4E4B\u5916\u627E\u5230\u65B0\u7684\u7B54\u6848\uFF0C\u5C06\u6709\u5F62\u5316\u4E3A\u65E0\u5F62\uFF0C\u53C8\u5C06\u65E0\u5F62\u7528\u4E8E\u6709\u5F62\u3002"),
                vue.createVNode("h4", {
                  id: "\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u54C8\u4F5B\u76846\u5802\u72EC\u7ACB\u601D\u8003\u8BFE",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u5E94\u5BF9\u7A81\u53D1\u60C5\u51B5\uFF0C\u91CD\u70B9\u5728\u4E8E\u201C\u5148\u601D\u8003\u518D\u884C\u52A8\u201D\u3002"),
                  vue.createVNode("li", null, [
                    vue.createTextVNode("\u4EC0\u4E48\u662F\u201C\u6279\u5224\u6027\u601D\u8003\u201C \u2014 \u6709\u201D\u6839\u636E\u201C\u7684\u8BF4\u8BDD\u89C4\u5219\u3002 "),
                    vue.createVNode("ol", null, [
                      vue.createVNode("li", null, "\u601D\u8003\u4FE1\u606F\u3001\u610F\u89C1\u548C\u60F3\u6CD5\u7684\u5BF9\u9519\uFF0C\u4ECE\u4E2D\u6478\u7D22\u51FA\u66F4\u597D\u201D\u7B54\u6848\u201C\uFF0C\u5373\u662F\u6279\u5224\u6027\u601D\u8003\uFF08Critcal thinking\uFF09\u3002")
                    ])
                  ]),
                  vue.createVNode("li", null, "\u589E\u52A0\u89C2\u70B9\uFF0C\u601D\u8003\u201D\u76F8\u53CD\u7684\u610F\u89C1\u201C\u3002")
                ]),
                vue.createVNode("h4", {
                  id: "\u4EBA\u6027\u7684\u5F31\u70B9",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u4EBA\u6027\u7684\u5F31\u70B9"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u4EBA\u6027\u7684\u5F31\u70B9",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u6211\u4EEC\u5E94\u8BE5\u5173\u5FC3\u81EA\u5DF1\u7684\u95EE\u9898\uFF0C\u800C\u975E\u62C5\u5FE7\u3002 \u5173\u6CE8\u610F\u5473\u7740\u8981\u8BA4\u6E05\u95EE\u9898\uFF0C\u5E76\u51B7\u9759\u5730\u91C7\u53D6\u6B65\u9AA4\u5904\u7406\u5B83\uFF0C\u5FE7\u8651\u53EA\u662F\u614C\u4E71\u5730\u515C\u5708\u5B50\u3002 \u4F24\u5BB3\u4EBA\u7684\u5E76\u975E\u4E8B\u4EF6\u672C\u8EAB\uFF0C\u800C\u662F\u4ED6\u5BF9\u4E8B\u4EF6\u7684\u770B\u6CD5\u3002"),
                vue.createVNode("h4", {
                  id: "\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u6211\u771F\u7684\u5750\u4E0D\u4F4F\u4E86\uFF1A\u9AA8\u79D1\u533B\u751F\u8BA9\u4F60\u4E0A\u73ED\u66F4\u8F7B\u677E",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u5E74\u7EAA\u6E10\u957F\u548C\u5728\u5BB6\u529E\u516C\u7684\u53CC\u91CD\u66B4\u51FB\u4E0B\uFF0C\u6700\u8FD1\u8170\u5DF2\u7ECF\u5230\u6781\u9650\u4E86\u3002\u867D\u7136\u4E70\u4E86\u201C\u94B1\u6240\u80FD\u53CA\u201D\u7684\u6700\u597D\u7684\u6905\u5B50\u548C\u6700\u597D\u7684\u5E8A\uFF0C\u4E5F\u5728\u5B9E\u8DF5\u5404\u79CD\u7AD9\u7ACB\u529E\u516C\u548C\u4FDD\u6301\u8FD0\u52A8\uFF08~\uFF09\uFF0C\u4F46\u662F\u6D51\u8EAB\u4E0D\u8212\u670D\u7684\u60C5\u51B5\u8FD8\u662F\u5728\u6301\u7EED\u3002\u8FD9\u672C\u4E66\u5206\u6210\u9888\u8170\u819D\u4E09\u4E2A\u90E8\u5206\uFF0C\u5BF9\u5E38\u89C1\u7684\u75BC\u6CD5\u548C\u539F\u56E0\u505A\u4E86\u89E3\u91CA\uFF0C\u5E76\u7528\u56FE\u793A\u79D1\u666E\u4E86\u4E00\u4E9B\u5BF9\u5E94\u65B9\u6CD5\u3002"),
                vue.createVNode("p", null, "\u4E13\u4E1A\u533B\u751F\u7684\u8C06\u8C06\u6559\u8BF2\uFF0C\u4E0D\u6562\u4E0D\u94ED\u523B\u4E8E\u5FC3\u554A\u3002"),
                vue.createVNode("h3", {
                  id: "\u5173\u4E8E\u6E38\u620F",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5173\u4E8E\u6E38\u620F "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5173\u4E8E\u6E38\u620F",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u53BB\u5E74\u5E74\u5E95\u5929\u771F\u5730\u60F3\u7740\u4E70 PS5\uFF0C\u4E8E\u662F\u5C31\u65E9\u65E9\u628A PS4 Pro \u62FF\u53BB\u4E8C\u624B\u5E97\u5356\u6389\u4E86\u3002\u54EA\u91CC\u60F3\u5230\u76F4\u5230\u4E00\u5E74\u540E\u7684\u4ECA\u5929\uFF0CPS5 \u90FD\u8FD8\u4E00\u673A\u96BE\u6C42\u3002\u4E8E\u662F\u5E72\u8106\u5F7B\u5E95\u8EBA\u5E73\u653E\u5F03\uFF0C\u8FDE\u5E26\u7740\u6362\u65B0\u7684\u7D22\u5C3C\u5927\u6CD5\u7535\u89C6\u7684\u8BA1\u5212\u4E5F\u65E0\u9650\u671F\u63A8\u5EF6\u4E86\u3002\u611F\u89C9\u7D22\u5C3C\u4ECE\u6211\u8FD9\u513F\u5C11\u8D5A\u4E86\u4E00\u4E2A\u4EBF\u3002"),
                vue.createVNode("p", null, "\u6240\u4EE5\u4ECA\u5E74\u4E3B\u8981\u7684\u6E38\u620F\u5E73\u53F0\u5C31\u53EA\u6709 NS \u548C PC \u4E86\uFF0CPS \u518D\u89C1\u3002(\u6392\u540D\u4E0D\u5206\u5148\u540E\uFF0C\u63A8\u8350\u6307\u6570\u4EC5\u4EE3\u8868\u4E2A\u4EBA\u610F\u89C1\uFF09"),
                vue.createVNode("p", null, "Switch"),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "\u6807\u9898"),
                      vue.createVNode("th", null, "\u6E38\u620F\u72B6\u6001"),
                      vue.createVNode("th", null, "\u77ED\u8BC4"),
                      vue.createVNode("th", null, "\u63A8\u8350\u6307\u6570")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "\u8D85\u7EA7\u9A6C\u529B\u6B273D\u4E16\u754C+\u72C2\u6012\u4E16\u754C"),
                      vue.createVNode("td", null, "10\u5C0F\u65F6\uFF0C\u6401\u7F6E"),
                      vue.createVNode("td", null, "3D \u5176\u5B9E\u6CA1\u600E\u4E48\u73A9\uFF0C\u72C2\u6012\u4E16\u754C\u662F\u6253\u901A\u4E86\u3002\u5982\u679C\u9A6C\u529B\u6B27\u5965\u5FB7\u8D5B\u627E\u6708\u4EAE\u8FD8\u6CA1\u8FC7\u763E\u7684\u8BDD\uFF0C\u53EF\u4EE5\u628A\u72C2\u6012\u4E16\u754C\u770B\u505A\u4E00\u4E2A DLC\uFF0C\u8FD8\u633A\u6709\u610F\u601D\u7684\u3002"),
                      vue.createVNode("td", null, "4/5")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "\u585E\u5C14\u8FBE\u4F20\u8BF4 \u5FA1\u5929\u4E4B\u5251 HD"),
                      vue.createVNode("td", null, "40\u5C0F\u65F6\uFF0C\u901A\u5173"),
                      vue.createVNode("td", null, "\u867D\u7136\u662F\u51B7\u996D\u91CD\u7F6E\u7248\uFF0C\u4F46\u662F\u89E3\u5BC6\u90E8\u5206\u7684\u8BBE\u8BA1\u5728\u4ECA\u5929\u770B\u6765\u4E5F\u4F9D\u7136\u51FA\u8272\u3002\u5982\u679C\u6CA1\u6709\u73A9\u8FC7\u539F\u7248\u7684\u8BDD\uFF0C\u8FD8\u662F\u975E\u5E38\u63A8\u8350\u3002"),
                      vue.createVNode("td", null, "4.5/5")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "\u706B\u5F71\u5FCD\u8005\u7A76\u6781\u98CE\u66B44"),
                      vue.createVNode("td", null, "10\u5C0F\u65F6\uFF0C\u6401\u7F6E"),
                      vue.createVNode("td", null, "\u5404\u79CD\u706B\u5F71\u7EA7\u7684\u4EBA\u7269\u5BF9\u6253\uFF0C\u91CA\u653E\u5927\u62DB\uFF0CPK\uFF0C\u9002\u5408\u805A\u4F1A\u4EBA\u591A\u7684\u65F6\u5019\u73A9"),
                      vue.createVNode("td", null, "3/5")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, "PC"),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "\u6807\u9898"),
                      vue.createVNode("th", null, "\u6E38\u620F\u72B6\u6001"),
                      vue.createVNode("th", null, "\u77ED\u8BC4"),
                      vue.createVNode("th", null, "\u63A8\u8350\u6307\u6570")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Dota2"),
                      vue.createVNode("td", null, "\u51E0\u767E\u5C0F\u65F6\uFF0C\u4E00\u76F4\u73A9"),
                      vue.createVNode("td", null, "\u81EA\u4ECE LGD Ti 10 \u8F93\u7ED9 Team Spirit \u4E4B\u540E\uFF0C\u8D8A\u53D1\u89C9\u5185\u56FD\u5185\u81EA Wings \u4E4B\u540E\u593A\u51A0\u65E0\u671B\u3002"),
                      vue.createVNode("td", null, "4.5/5")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "CS Go"),
                      vue.createVNode("td", null, "10\u5C0F\u65F6\uFF0C\u6401\u7F6E"),
                      vue.createVNode("td", null, "\u5076\u5C14\u548C\u670B\u53CB\u6253\u6253\u67AA"),
                      vue.createVNode("td", null, "1/5")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "\u6CF0\u62C9\u745E\u4E9A"),
                      vue.createVNode("td", null, "10\u5C0F\u65F6\uFF0C\u6401\u7F6E"),
                      vue.createVNode("td", null, "Man\uFF0C\u8001\u7F8A\u4E00\u8D77\u73A9\u8FC7\u7684\u6E38\u620F"),
                      vue.createVNode("td", null, "3/5")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, "\u5199\u5B8C\u8FD9\u4E2A\uFF0C\u4ECA\u5E74\u540E\u9762\u4E5F\u5C31\u53EA\u5269\u5047\u671F\u4E86\u3002\u6211\u4EEC\u660E\u5E74\u518D\u89C1\uFF01"),
                vue.createVNode("p", null, "\u501F\u7528\u4EBA\u6C11\u65E5\u62A5\u7684\u6587\u6848\uFF0C\u7ED3\u675F 2021 \u5E74\u7684 Annual Report ~"),
                vue.createVNode("p", null, "\u8FD9\u4E00\u5E74\uFF0C\u53E3\u7F69 36.5 \u6444\u6C0F\u5EA6\uFF0C\u9047\u89C1\u3001\u83B7\u5F97\u3001\u5931\u53BB\u3001\u6210\u957F\u3001\u91CA\u6000\u3001\u7F13\u89E3\uFF0C\u6211\u4E0E\u65E7\u4E8B\u5F52\u4E8E\u5E86\uFF0C\u6765\u5E74\u4F9D\u65E7\u8FCE\u82B1\u5F00\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/2021-Annual-Report-zh.md");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var _2021AnnualReportZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  name: "File-synchronisation-between-servers",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "File synchronisation between servers", "date": "2019-08-19T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "File synchronisation between servers\u3002", "meta": [{ "property": "og:title", "content": "File synchronisation between servers" }, { "property": "og:description", "content": "File synchronisation between servers\u3002" }, { "name": "description", "content": "File synchronisation between servers\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "File synchronisation between servers", "meta": [{ "property": "og:title", "content": "File synchronisation between servers" }, { "property": "og:description", "content": "File synchronisation between servers\u3002" }, { "name": "description", "content": "File synchronisation between servers\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># \u67E5\u770B\u670D\u52A1\u5668\u7CFB\u7EDF\u7248\u672C</span>
<span class="token function"${_scopeId}>cat</span> /proc/version 

<span class="token comment"${_scopeId}># \u4E0B\u8F7D syncthing</span>
<span class="token function"${_scopeId}>wget</span> https://github.com/syncthing/syncthing/releases/download/v0.14.5/syncthing-linux-amd64-v0.14.5.tar.gz

<span class="token comment"${_scopeId}># \u89E3\u538B</span>
<span class="token builtin class-name"${_scopeId}>cd</span> ~
<span class="token function"${_scopeId}>tar</span> xzvf syncthing-linux-amd64-v0.14.5
<span class="token builtin class-name"${_scopeId}>cd</span> syncthing-linux-amd64-v0.14.51
./syncthing

<span class="token comment"${_scopeId}># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BA9\u5176\u53EF\u8FDC\u7A0B\u8BBF\u95EE</span>
<span class="token function"${_scopeId}>vim</span> /root/.config/syncthing/config.xml

<span class="token operator"${_scopeId}>&lt;</span>gui <span class="token assign-left variable"${_scopeId}>enabled</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&quot;true&quot;</span> <span class="token assign-left variable"${_scopeId}>tls</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&quot;false&quot;</span> <span class="token assign-left variable"${_scopeId}>debugging</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&quot;false&quot;</span><span class="token operator"${_scopeId}>&gt;</span>
    <span class="token operator"${_scopeId}>&lt;</span>address<span class="token operator"${_scopeId}>&gt;</span><span class="token number"${_scopeId}>127.0</span>.0.1:838<span class="token operator"${_scopeId}><span class="token file-descriptor important"${_scopeId}>4</span>&lt;</span>/address<span class="token operator"${_scopeId}>&gt;</span>
    <span class="token operator"${_scopeId}>&lt;</span>user<span class="token operator"${_scopeId}>&gt;</span>administrator<span class="token operator"${_scopeId}>&lt;</span>/user<span class="token operator"${_scopeId}>&gt;</span>
    <span class="token operator"${_scopeId}>&lt;</span>password<span class="token operator"${_scopeId}>&gt;</span><span class="token variable"${_scopeId}>$2a</span><span class="token variable"${_scopeId}>$10</span><span class="token variable"${_scopeId}>$OGJCfTrVPHDmPwrBQHxubuaKyXvd6233rnPnuIQ9GCbNWxp5DiMMu</span><span class="token operator"${_scopeId}>&lt;</span>/password<span class="token operator"${_scopeId}>&gt;</span>
    <span class="token operator"${_scopeId}>&lt;</span>apikey<span class="token operator"${_scopeId}>&gt;</span>xhgYWNrtQTjQe6jXAiioWWgZYxXKRSPn<span class="token operator"${_scopeId}>&lt;</span>/apikey<span class="token operator"${_scopeId}>&gt;</span>
    <span class="token operator"${_scopeId}>&lt;</span>theme<span class="token operator"${_scopeId}>&gt;</span>default<span class="token operator"${_scopeId}>&lt;</span>/theme<span class="token operator"${_scopeId}>&gt;</span>
<span class="token operator"${_scopeId}>&lt;</span>/gui<span class="token operator"${_scopeId}>&gt;</span>

<span class="token comment"${_scopeId}># \u5C06 127.0.0.1:8384 \u4FEE\u6539\u4E3A 0.0.0.0:8384</span>
<span class="token operator"${_scopeId}>&lt;</span>address<span class="token operator"${_scopeId}>&gt;</span><span class="token number"${_scopeId}>127.0</span>.0.1:838<span class="token operator"${_scopeId}><span class="token file-descriptor important"${_scopeId}>4</span>&lt;</span>/address<span class="token operator"${_scopeId}>&gt;</span>

<span class="token comment"${_scopeId}># \u653E\u884C 8384 \u7AEF\u53E3 (\u6CE8\u610F\uFF1A\u5982\u82E5\u662F\u963F\u91CC\u4E91\u7684\u670D\u52A1\u5668\u9700\u8981\u586B\u52A0\u4F8B\u5916\u89C4\u5219)</span>
/sbin/iptables -I INPUT -p tcp --dport <span class="token number"${_scopeId}>8384</span> -j ACCEPT
/etc/init.d/iptables save
<span class="token function"${_scopeId}>service</span> iptables restart

<span class="token comment"${_scopeId}># bin</span>
<span class="token function"${_scopeId}>cp</span> syncthing /usr/local/bin

<span class="token comment"${_scopeId}># \u540E\u53F0\u6267\u884C</span>
<span class="token function"${_scopeId}>which</span> syncthing 
<span class="token function"${_scopeId}>nohup</span> syncthing <span class="token operator"${_scopeId}>&amp;</span> \u6216\u8005 <span class="token function"${_scopeId}>nohup</span> /usr/local/binsyncthing
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# \u67E5\u770B\u670D\u52A1\u5668\u7CFB\u7EDF\u7248\u672C"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "cat"),
                    vue.createTextVNode(" /proc/version \n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u4E0B\u8F7D syncthing"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "wget"),
                    vue.createTextVNode(" https://github.com/syncthing/syncthing/releases/download/v0.14.5/syncthing-linux-amd64-v0.14.5.tar.gz\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u89E3\u538B"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "cd"),
                    vue.createTextVNode(" ~\n"),
                    vue.createVNode("span", { class: "token function" }, "tar"),
                    vue.createTextVNode(" xzvf syncthing-linux-amd64-v0.14.5\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "cd"),
                    vue.createTextVNode(" syncthing-linux-amd64-v0.14.51\n./syncthing\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BA9\u5176\u53EF\u8FDC\u7A0B\u8BBF\u95EE"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "vim"),
                    vue.createTextVNode(" /root/.config/syncthing/config.xml\n\n"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("gui "),
                    vue.createVNode("span", { class: "token assign-left variable" }, "enabled"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, '"true"'),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "tls"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, '"false"'),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "debugging"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, '"false"'),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("address"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createVNode("span", { class: "token number" }, "127.0"),
                    vue.createTextVNode(".0.1:838"),
                    vue.createVNode("span", { class: "token operator" }, [
                      vue.createVNode("span", { class: "token file-descriptor important" }, "4"),
                      vue.createTextVNode("<")
                    ]),
                    vue.createTextVNode("/address"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("user"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("administrator"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("/user"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("password"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createVNode("span", { class: "token variable" }, "$2a"),
                    vue.createVNode("span", { class: "token variable" }, "$10"),
                    vue.createVNode("span", { class: "token variable" }, "$OGJCfTrVPHDmPwrBQHxubuaKyXvd6233rnPnuIQ9GCbNWxp5DiMMu"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("/password"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("apikey"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("xhgYWNrtQTjQe6jXAiioWWgZYxXKRSPn"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("/apikey"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("theme"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("default"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("/theme"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("/gui"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5C06 127.0.0.1:8384 \u4FEE\u6539\u4E3A 0.0.0.0:8384"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode("address"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createVNode("span", { class: "token number" }, "127.0"),
                    vue.createTextVNode(".0.1:838"),
                    vue.createVNode("span", { class: "token operator" }, [
                      vue.createVNode("span", { class: "token file-descriptor important" }, "4"),
                      vue.createTextVNode("<")
                    ]),
                    vue.createTextVNode("/address"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u653E\u884C 8384 \u7AEF\u53E3 (\u6CE8\u610F\uFF1A\u5982\u82E5\u662F\u963F\u91CC\u4E91\u7684\u670D\u52A1\u5668\u9700\u8981\u586B\u52A0\u4F8B\u5916\u89C4\u5219)"),
                    vue.createTextVNode("\n/sbin/iptables -I INPUT -p tcp --dport "),
                    vue.createVNode("span", { class: "token number" }, "8384"),
                    vue.createTextVNode(" -j ACCEPT\n/etc/init.d/iptables save\n"),
                    vue.createVNode("span", { class: "token function" }, "service"),
                    vue.createTextVNode(" iptables restart\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# bin"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "cp"),
                    vue.createTextVNode(" syncthing /usr/local/bin\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u540E\u53F0\u6267\u884C"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "which"),
                    vue.createTextVNode(" syncthing \n"),
                    vue.createVNode("span", { class: "token function" }, "nohup"),
                    vue.createTextVNode(" syncthing "),
                    vue.createVNode("span", { class: "token operator" }, "&"),
                    vue.createTextVNode(" \u6216\u8005 "),
                    vue.createVNode("span", { class: "token function" }, "nohup"),
                    vue.createTextVNode(" /usr/local/binsyncthing\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/File-synchronisation-between-servers.md");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var FileSynchronisationBetweenServers = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  name: "Flush-MAC-Dns-cache",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Find Files", "date": "2022-05-16T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002", "meta": [{ "property": "og:title", "content": "Find Files" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Find Files", "meta": [{ "property": "og:title", "content": "Find Files" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}>\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4EE5tar.gz\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> -name <span class="token string"${_scopeId}>&#39;*tar.gz&#39;</span>

\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u4E0B\u6240\u6709\u4EE5.txt\u548C.pdf\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> -name <span class="token string"${_scopeId}>&quot;*.txt&quot;</span> -o -name <span class="token string"${_scopeId}>&quot;*.pdf&quot;</span>

\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4E0D\u4EE5txt\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> <span class="token operator"${_scopeId}>!</span> -name <span class="token string"${_scopeId}>&quot;*.txt&quot;</span>

\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4EE5.txt\u7ED3\u5C3E\u7684\u6587\u4EF6\u5E76\u5220\u9664\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> -type f -name <span class="token string"${_scopeId}>&quot;*.txt&quot;</span> -delete

\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u6743\u9650\u4E0D\u662F644\u7684php\u6587\u4EF6\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> -type f -name <span class="token string"${_scopeId}>&quot;*.php&quot;</span> <span class="token operator"${_scopeId}>!</span> -perm <span class="token number"${_scopeId}>644</span>

\u67E5\u627E\u957F\u5EA6\u4E3A0\u7684\u6587\u4EF6\uFF1Afind <span class="token builtin class-name"${_scopeId}>.</span> -empty

*.html:\u8868\u793A\u67E5\u627E\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6269\u5C55\u540D\u4E3Ahtml\u7684\u6587\u4EF6<span class="token punctuation"${_scopeId}>;</span>
SEARCHSTRING:\u8981\u67E5\u627E\u641C\u7D22\u7684\u5B57\u7B26<span class="token punctuation"${_scopeId}>;</span>
REPLACESTRING:\u66FF\u6362\u540E\u7684\u5B57\u7B26\u3002
\u8BB0\u4F4F: \u5982\u679C\u66FF\u6362\u7684\u5B57\u7B26\u5305\u62EC <span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>[</span><span class="token punctuation"${_scopeId}>]</span>/<span class="token string"${_scopeId}>&quot;&#39;!? \u7B49\u7B49\u8FD9\u6837\u7684\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F60\u5FC5\u987B\u5728\u5B57\u7B26\u524D\u52A0\u4E0A\u53CD\u659C\u6760 \\ \u3002

find .|xargs grep -ri &quot;</span>SEARCHSTRING<span class="token string"${_scopeId}>&quot;
find . -name &#39;*.html,*.htm,*.js&#39; -print0 | xargs -0 perl -pi -e &#39;s/SEARCHSTRING/REPLACESTRING/g&#39;

// \u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 .DS_Store \u6587\u4EF6\u5E76\u5220\u9664
sudo find ./ -name &quot;</span>.DS_Store&quot; -depth -exec <span class="token function"${_scopeId}>rm</span> <span class="token punctuation"${_scopeId}>{</span><span class="token punctuation"${_scopeId}>}</span> <span class="token punctuation"${_scopeId}>\\</span><span class="token punctuation"${_scopeId}>;</span>
// \u5173\u95ED\u5728\u8F6C\u79FB\u4FDD\u5B58\u6587\u4EF6\u65F6\u751F\u6210\u7684 .DS_Store \u6587\u4EF6
defaults <span class="token function"${_scopeId}>write</span> com.apple.desktopservices DSDontWriteNetworkStores <span class="token boolean"${_scopeId}>true</span>
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createTextVNode("\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4EE5tar.gz\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(" -name "),
                    vue.createVNode("span", { class: "token string" }, "'*tar.gz'"),
                    vue.createTextVNode("\n\n\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u4E0B\u6240\u6709\u4EE5.txt\u548C.pdf\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(" -name "),
                    vue.createVNode("span", { class: "token string" }, '"*.txt"'),
                    vue.createTextVNode(" -o -name "),
                    vue.createVNode("span", { class: "token string" }, '"*.pdf"'),
                    vue.createTextVNode("\n\n\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4E0D\u4EE5txt\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createTextVNode(" -name "),
                    vue.createVNode("span", { class: "token string" }, '"*.txt"'),
                    vue.createTextVNode("\n\n\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u4EE5.txt\u7ED3\u5C3E\u7684\u6587\u4EF6\u5E76\u5220\u9664\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(" -type f -name "),
                    vue.createVNode("span", { class: "token string" }, '"*.txt"'),
                    vue.createTextVNode(" -delete\n\n\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u6743\u9650\u4E0D\u662F644\u7684php\u6587\u4EF6\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(" -type f -name "),
                    vue.createVNode("span", { class: "token string" }, '"*.php"'),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createTextVNode(" -perm "),
                    vue.createVNode("span", { class: "token number" }, "644"),
                    vue.createTextVNode("\n\n\u67E5\u627E\u957F\u5EA6\u4E3A0\u7684\u6587\u4EF6\uFF1Afind "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "."),
                    vue.createTextVNode(" -empty\n\n*.html:\u8868\u793A\u67E5\u627E\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6269\u5C55\u540D\u4E3Ahtml\u7684\u6587\u4EF6"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\nSEARCHSTRING:\u8981\u67E5\u627E\u641C\u7D22\u7684\u5B57\u7B26"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\nREPLACESTRING:\u66FF\u6362\u540E\u7684\u5B57\u7B26\u3002\n\u8BB0\u4F4F: \u5982\u679C\u66FF\u6362\u7684\u5B57\u7B26\u5305\u62EC "),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode("/"),
                    vue.createVNode("span", { class: "token string" }, `"'!? \u7B49\u7B49\u8FD9\u6837\u7684\u7279\u6B8A\u5B57\u7B26\uFF0C\u4F60\u5FC5\u987B\u5728\u5B57\u7B26\u524D\u52A0\u4E0A\u53CD\u659C\u6760 \\ \u3002

find .|xargs grep -ri "`),
                    vue.createTextVNode("SEARCHSTRING"),
                    vue.createVNode("span", { class: "token string" }, `"
find . -name '*.html,*.htm,*.js' -print0 | xargs -0 perl -pi -e 's/SEARCHSTRING/REPLACESTRING/g'

// \u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 .DS_Store \u6587\u4EF6\u5E76\u5220\u9664
sudo find ./ -name "`),
                    vue.createTextVNode('.DS_Store" -depth -exec '),
                    vue.createVNode("span", { class: "token function" }, "rm"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "\\"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n// \u5173\u95ED\u5728\u8F6C\u79FB\u4FDD\u5B58\u6587\u4EF6\u65F6\u751F\u6210\u7684 .DS_Store \u6587\u4EF6\ndefaults "),
                    vue.createVNode("span", { class: "token function" }, "write"),
                    vue.createTextVNode(" com.apple.desktopservices DSDontWriteNetworkStores "),
                    vue.createVNode("span", { class: "token boolean" }, "true"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/Flush-MAC-Dns-cache.md");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var FlushMACDnsCache = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  name: "How-long-can-we-dream",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u8FD8\u80FD\u68A6\u591A\u4E45 ...", "date": "2015-09-26T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 3min", "description": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002", "meta": [{ "property": "og:title", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45 ..." }, { "property": "og:description", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002" }, { "name": "description", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u8FD8\u80FD\u68A6\u591A\u4E45 ...", "meta": [{ "property": "og:title", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45 ..." }, { "property": "og:description", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002" }, { "name": "description", "content": "\u8FD8\u80FD\u68A6\u591A\u4E45\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u6BCF\u5929\u90FD\u62D6\u7740\u75B2\u60EB\u7684\u8EAB\u5FC3\uFF0C\u8D70\u5728\u82E5\u5927\u8857\u9053\u4E2D\uFF0C\u4E0D\u77E5\u9053\u8FD9\u4EFD\u575A\u6301\u80FD\u652F\u6491\u6211\u591A\u4E45\u3002</p><p${_scopeId}>\u65F6\u4EE3\u7684\u8F66\u8F70\u8F70\u5730\u5F80\u524D\u5F00\uFF0C\u6211\u4EEC\u5750\u5728\u8F66\u4E0A\uFF0C\u7ECF\u8FC7\u7684\u4E5F\u8BB8\u4E0D\u8FC7\u662F\u51E0\u6761\u719F\u6089\u7684\u8857\u8862\uFF0C\u53EF\u5728\u6F2B\u5929\u7684\u706B\u5149\u4E2D\u4E5F\u81EA\u60CA\u5FC3\u52A8\u9B44\u3002 \u53EF\u60DC\u6211\u4EEC\u53EA\u987E\u5FD9\u7740\u5728\u4E00\u77A5\u5373\u901D\u7684\u5E97\u94FA\u6A71\u7A97\u91CC\uFF0C\u627E\u5BFB\u6211\u4EEC\u81EA\u5DF1\u7684\u5F71\u5B50\u2014\u2014\u6211\u4EEC\u53EA\u770B\u89C1\u81EA\u5DF1\u7684\u8138\u82CD\u767D\u6E3A\u5C0F\uFF0C\u6211\u4EEC\u7684\u81EA\u79C1\u4E0E\u7A7A\u865A\uFF0C\u6211\u4EEC\u606C\u4E0D\u77E5\u803B\u7684\u611A\u8822\u3002 \u8C01\u90FD\u4E00\u6837\uFF0C\u6211\u4EEC\u6BCF\u4E2A\u4EBA\u90FD\u662F\u5B64\u72EC\u7684\u3002</p><p${_scopeId}>\u662F\u8BE5\u5B89\u9038\u7684\u751F\u6D3B\uFF0C\u8FD8\u662F\u8981\u6254\u6389\u8FD9\u4E48\u5B89\u9038\uFF0C\u52AA\u529B\u5954\u8DD1\u5462\uFF1F</p><p${_scopeId}>\u7528\u4E2A\u5047\u671F\uFF0C\u60F3\u6E05\u695A\uFF1F\u53BB\u65C5\u6E38\uFF1F\u53BB\u653E\u9010\u2026</p><p${_scopeId}>\u8FF7\u5931\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u6BCF\u5929\u90FD\u62D6\u7740\u75B2\u60EB\u7684\u8EAB\u5FC3\uFF0C\u8D70\u5728\u82E5\u5927\u8857\u9053\u4E2D\uFF0C\u4E0D\u77E5\u9053\u8FD9\u4EFD\u575A\u6301\u80FD\u652F\u6491\u6211\u591A\u4E45\u3002"),
                vue.createVNode("p", null, "\u65F6\u4EE3\u7684\u8F66\u8F70\u8F70\u5730\u5F80\u524D\u5F00\uFF0C\u6211\u4EEC\u5750\u5728\u8F66\u4E0A\uFF0C\u7ECF\u8FC7\u7684\u4E5F\u8BB8\u4E0D\u8FC7\u662F\u51E0\u6761\u719F\u6089\u7684\u8857\u8862\uFF0C\u53EF\u5728\u6F2B\u5929\u7684\u706B\u5149\u4E2D\u4E5F\u81EA\u60CA\u5FC3\u52A8\u9B44\u3002 \u53EF\u60DC\u6211\u4EEC\u53EA\u987E\u5FD9\u7740\u5728\u4E00\u77A5\u5373\u901D\u7684\u5E97\u94FA\u6A71\u7A97\u91CC\uFF0C\u627E\u5BFB\u6211\u4EEC\u81EA\u5DF1\u7684\u5F71\u5B50\u2014\u2014\u6211\u4EEC\u53EA\u770B\u89C1\u81EA\u5DF1\u7684\u8138\u82CD\u767D\u6E3A\u5C0F\uFF0C\u6211\u4EEC\u7684\u81EA\u79C1\u4E0E\u7A7A\u865A\uFF0C\u6211\u4EEC\u606C\u4E0D\u77E5\u803B\u7684\u611A\u8822\u3002 \u8C01\u90FD\u4E00\u6837\uFF0C\u6211\u4EEC\u6BCF\u4E2A\u4EBA\u90FD\u662F\u5B64\u72EC\u7684\u3002"),
                vue.createVNode("p", null, "\u662F\u8BE5\u5B89\u9038\u7684\u751F\u6D3B\uFF0C\u8FD8\u662F\u8981\u6254\u6389\u8FD9\u4E48\u5B89\u9038\uFF0C\u52AA\u529B\u5954\u8DD1\u5462\uFF1F"),
                vue.createVNode("p", null, "\u7528\u4E2A\u5047\u671F\uFF0C\u60F3\u6E05\u695A\uFF1F\u53BB\u65C5\u6E38\uFF1F\u53BB\u653E\u9010\u2026"),
                vue.createVNode("p", null, "\u8FF7\u5931\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/How-long-can-we-dream.md");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var HowLongCanWeDream = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  name: "If-the-heart-does-not-move",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002", "date": "2013-10-14T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 3min", "description": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002", "meta": [{ "property": "og:title", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002" }, { "property": "og:description", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002" }, { "name": "description", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002", "meta": [{ "property": "og:title", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002" }, { "property": "og:description", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002" }, { "name": "description", "content": "\u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u4E45\u8FDD\u4E86\u3002\u964C\u751F\u4E4B\u4EBA\uFF0C\u4F60\u8FD8\u8BB0\u5F97\u5417\uFF1F</p><p${_scopeId}>\u603B\u662F\u5728\u8FFD\u4E00\u76F4\u5728\u8FFD\uFF0C\u90FD\u5FD8\u8BB0\u505C\u4E0B\u6765\u770B\u4E00\u770B\uFF0C\u770B\u4E00\u770B\u8EAB\u8FB9\u7684\u4EBA\uFF0C\u770B\u4E00\u770B\u5468\u56F4\u7684\u4E8B\u3002</p><p${_scopeId}>\u56DE\u5934\u671B\u53BB\uFF0C\u8C01\u4E0D\u662F\u4E00\u8DEF\u7684\u8840\u8FF9\u6591\u6591\u3002</p><p${_scopeId}>\u8D8A\u662F\u957F\u5927\u8D8A\u662F\u770B\u5230\u4EBA\u4E4B\u4E3A\u4EBA\u7684\u5351\u5FAE\u4E0E\u8270\u96BE\uFF0C\u8D8A\u662F\u770B\u5230\u4EBA\u751F\u7684\u79CD\u79CD\u4E0D\u582A\u4E0E\u65E0\u5948\u3002</p><p${_scopeId}>\u6162\u6162\u4F1A\u77E5\u9053\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u62E5\u6709\u4EC0\u4E48\uFF0C\u820D\u5F03\u4EC0\u4E48\uFF0C\u770B\u8F7B\u4EC0\u4E48\uFF0C\u76F8\u4FE1\u4EC0\u4E48\u3002 \u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002</p><p${_scopeId}>\u4F60\u8BF4\uFF1A\u53EA\u8981\u66FE\u7ECF\u62E5\u6709\uFF0C\u672A\u6765\u65E0\u6240\u754F\u60E7\uFF01 \u6211\u8BDD\u5728\u5634\u8FB9\uFF0C\u6700\u7EC8\u6C89\u9ED8\u3002 \u6709\u65F6\u5019\u6C89\u9ED8\uFF0C\u662F\u56E0\u4E3A\u6709\u592A\u591A\u7684\u8BDD\u60F3\u8BF4\u5374\u8BF4\u4E0D\u51FA\u6765\u3002 \u73B0\u5B9E\u7ADF\u53EF\u4EE5\u5C06\u611F\u60C5\u84B8\u998F\u7684\u5982\u6B64\u7EAF\u7CB9\uFF0C\u4E07\u822C\u65E0\u5948\u3002 \u6211\u4EEC\u7684\u5173\u7CFB\u591A\u8106\u5F31\u5462\uFF0C\u53EA\u8981\u5173\u6389\u7535\u8111\u5173\u6389\u624B\u673A\uFF0C\u53EF\u80FD\u8FD9\u8F88\u5B50\u5C31\u518D\u4E5F\u8054\u7CFB\u4E0D\u5230\u4E86\u3002 \u660E\u671D\u5373\u957F\u8DEF\uFF0C\u60DC\u53D6\u6B64\u65F6\u5FC3\uFF0C\u5FD8\u8BB0\u5F00\u59CB\uFF0C\u63A5\u53D7\u7ED3\u675F\u3002 \u4E45\u672A\u8D77\u6CE2\u6F9C\u7684\u5FC3\u72C2\u653E\u7684\u98A4\u6296\u7740\uFF0C \u542C\u4E0D\u5230\u81EA\u5DF1\u7684\u5FC3\u8DF3\uFF0C\u597D\u50CF\u6709\u53CC\u624B\u4E00\u76F4\u538B\u5728\u6211\u7684\u5FC3\u53E3\u3002</p><p${_scopeId}>\u9AA8\u5B50\u91CC\u7684\u8106\u5F31\u771F\u4E0D\u662F\u4E00\u5473\u7684\u504F\u6267\u5C31\u80FD\u6539\u53D8\u7684\u3002 \u4EBA\u751F\u6700\u5E78\u798F\u662F\u4F60\u7684\u672A\u6765\u6709\u4E2A\u6211\uFF0C\u800C\u5927\u6C14\u7684\u662F\u6211\u613F\u653E\u5F00\u8BB0\u5FC6\u91CC\u7684\u4F60\u3002 \u5373\u4E3A\u8FC7\u5BA2\uFF0C\u4F55\u4E0D\u6D12\u8131\uFF0C\u7559\u4E0D\u4F4F\uFF0C\u5E26\u4E0D\u8D70\uFF0C\u5948\u4F55\uFF1F so, the finally end \u2026</p><p${_scopeId}>\u6709\u4E9B\u4EBA\u603B\u89C9\u5F97\u5BF9\u65B9\u5FC3\u91CC\u5DF2\u7ECF\u6CA1\u6709\u81EA\u5DF1\u4E86\u3002 \u6709\u4E9B\u4EBA\u77E5\u9053\u5F7C\u6B64\u5FC3\u91CC\u90FD\u6709\u5BF9\u65B9\uFF0C\u53EF\u73B0\u5B9E\u4E0D\u5141\u8BB8\u4E86\u3002 \u6709\u4E9B\u4EBA\u5BB3\u6015\u653E\u4E0B\u59FF\u6001\u633D\u56DE\u5374\u6362\u4E0D\u56DE\u81EA\u5DF1\u60F3\u8981\u7684\u7ED3\u679C\u3002 \u6709\u4E9B\u4E1C\u897F\u6E10\u884C\u6E10\u8FDC\uFF0C\u6DF1\u6C89\u7684\u611F\u60C5\u8FD8\u662F\u8981\u59A5\u5E16\u73CD\u85CF\u4E8E\u5FC3\u5E95\u3002 \u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002</p><p${_scopeId}>\u5173\u4E8E\u611F\u60C5\uFF0C\u81F3\u6B64\u5706\u6EE1\uFF0C\u4E00\u79CD\u5931\u65E0\u6240\u5931\u7684\u201C\u5706\u6EE1\u201D\uFF0C\u81EA\u5F03\u800C\u7B11 \u2026 \u56DE\u5934\u671B\u53BB\uFF0C\u8C01\u4E0D\u662F\u4E00\u8DEF\u7684\u8840\u8FF9\u6591\u6591\u3002</p><p${_scopeId}>\u8D8A\u662F\u957F\u5927\u8D8A\u662F\u770B\u5230\u4EBA\u4E4B\u4E3A\u4EBA\u7684\u5351\u5FAE\u4E0E\u8270\u96BE\uFF0C\u8D8A\u662F\u770B\u5230\u4EBA\u751F\u7684\u79CD\u79CD\u4E0D\u582A\u4E0E\u65E0\u5948\u3002 \u6162\u6162\u4F1A\u77E5\u9053\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u62E5\u6709\u4EC0\u4E48\uFF0C\u820D\u5F03\u4EC0\u4E48\uFF0C\u770B\u8F7B\u4EC0\u4E48\uFF0C\u76F8\u4FE1\u4EC0\u4E48\u3002</p><p${_scopeId}>\u6709\u4EBA\u8BF4\uFF1A\u5C81\u6708\u5BF9\u4E00\u4E2A\u5973\u4EBA\u7684\u771F\u6B63\u610F\u4E49\u662F\u5979\u4EEC\u5EA6\u8FC7\u6F2B\u957F\u7684\u81EA\u6211\u6551\u8D4E\u4E0E\u6210\u957F\u4E4B\u540E\uFF0C\u6C89\u6DC0\u4E0B\u6765\u7684\u90A3\u4EFD\u53EF\u4EE5\u4FEF\u89C6\u751F\u547D\u7684\u5C0A\u4E25\u4E0E\u5E73\u548C\u3002 \u5F53\u8EAB\u8FB9\u7684\u540C\u5B66\u5F00\u59CB\u5DE5\u4F5C\uFF0C\u5F00\u59CB\u7ED3\u5A5A\uFF0C\u5F00\u59CB\u751F\u5C0F\u5B69\uFF0C \u6211\u77E5\u9053\uFF0C\u66FE\u7ECF\u5F15\u4EE5\u4E3A\u50B2\u7684\u9752\u6625\u6563\u573A\u4E86\uFF0C\u800C\u80FD\u966A\u4F34\u81F3\u6B64\u7684\u4EBA\uFF0C\u4E00\u5343\u4E00\u4E07\u4E2A\u611F\u6FC0\u3002 \u751F\u6D3B\u767E\u5E9F\u5F85\u5174\uFF0C\u8981\u9762\u5BF9\u60E8\u6DE1\u7684\u4EBA\u751F\uFF0C\u8981\u4E0D\u7559\u9057\u61BE\uFF0C\u8981\u62FC\u5C3D\u5168\u529B\uFF0C\u5176\u4ED6\u51ED\u5929\u610F\u3002</p><p${_scopeId}>\u4E0D\u4E45\u7684\u5C06\u6765\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u6709\u4E00\u4E2A\u6E29\u6696\u7684\u5BB6\uFF0C\u5C0F\u5BCC\u5373\u5B89\u7684\u6EE1\u8DB3\uFF0C\u5C81\u6708\u9759\u597D\uFF01</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u4E45\u8FDD\u4E86\u3002\u964C\u751F\u4E4B\u4EBA\uFF0C\u4F60\u8FD8\u8BB0\u5F97\u5417\uFF1F"),
                vue.createVNode("p", null, "\u603B\u662F\u5728\u8FFD\u4E00\u76F4\u5728\u8FFD\uFF0C\u90FD\u5FD8\u8BB0\u505C\u4E0B\u6765\u770B\u4E00\u770B\uFF0C\u770B\u4E00\u770B\u8EAB\u8FB9\u7684\u4EBA\uFF0C\u770B\u4E00\u770B\u5468\u56F4\u7684\u4E8B\u3002"),
                vue.createVNode("p", null, "\u56DE\u5934\u671B\u53BB\uFF0C\u8C01\u4E0D\u662F\u4E00\u8DEF\u7684\u8840\u8FF9\u6591\u6591\u3002"),
                vue.createVNode("p", null, "\u8D8A\u662F\u957F\u5927\u8D8A\u662F\u770B\u5230\u4EBA\u4E4B\u4E3A\u4EBA\u7684\u5351\u5FAE\u4E0E\u8270\u96BE\uFF0C\u8D8A\u662F\u770B\u5230\u4EBA\u751F\u7684\u79CD\u79CD\u4E0D\u582A\u4E0E\u65E0\u5948\u3002"),
                vue.createVNode("p", null, "\u6162\u6162\u4F1A\u77E5\u9053\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u62E5\u6709\u4EC0\u4E48\uFF0C\u820D\u5F03\u4EC0\u4E48\uFF0C\u770B\u8F7B\u4EC0\u4E48\uFF0C\u76F8\u4FE1\u4EC0\u4E48\u3002 \u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002"),
                vue.createVNode("p", null, "\u4F60\u8BF4\uFF1A\u53EA\u8981\u66FE\u7ECF\u62E5\u6709\uFF0C\u672A\u6765\u65E0\u6240\u754F\u60E7\uFF01 \u6211\u8BDD\u5728\u5634\u8FB9\uFF0C\u6700\u7EC8\u6C89\u9ED8\u3002 \u6709\u65F6\u5019\u6C89\u9ED8\uFF0C\u662F\u56E0\u4E3A\u6709\u592A\u591A\u7684\u8BDD\u60F3\u8BF4\u5374\u8BF4\u4E0D\u51FA\u6765\u3002 \u73B0\u5B9E\u7ADF\u53EF\u4EE5\u5C06\u611F\u60C5\u84B8\u998F\u7684\u5982\u6B64\u7EAF\u7CB9\uFF0C\u4E07\u822C\u65E0\u5948\u3002 \u6211\u4EEC\u7684\u5173\u7CFB\u591A\u8106\u5F31\u5462\uFF0C\u53EA\u8981\u5173\u6389\u7535\u8111\u5173\u6389\u624B\u673A\uFF0C\u53EF\u80FD\u8FD9\u8F88\u5B50\u5C31\u518D\u4E5F\u8054\u7CFB\u4E0D\u5230\u4E86\u3002 \u660E\u671D\u5373\u957F\u8DEF\uFF0C\u60DC\u53D6\u6B64\u65F6\u5FC3\uFF0C\u5FD8\u8BB0\u5F00\u59CB\uFF0C\u63A5\u53D7\u7ED3\u675F\u3002 \u4E45\u672A\u8D77\u6CE2\u6F9C\u7684\u5FC3\u72C2\u653E\u7684\u98A4\u6296\u7740\uFF0C \u542C\u4E0D\u5230\u81EA\u5DF1\u7684\u5FC3\u8DF3\uFF0C\u597D\u50CF\u6709\u53CC\u624B\u4E00\u76F4\u538B\u5728\u6211\u7684\u5FC3\u53E3\u3002"),
                vue.createVNode("p", null, "\u9AA8\u5B50\u91CC\u7684\u8106\u5F31\u771F\u4E0D\u662F\u4E00\u5473\u7684\u504F\u6267\u5C31\u80FD\u6539\u53D8\u7684\u3002 \u4EBA\u751F\u6700\u5E78\u798F\u662F\u4F60\u7684\u672A\u6765\u6709\u4E2A\u6211\uFF0C\u800C\u5927\u6C14\u7684\u662F\u6211\u613F\u653E\u5F00\u8BB0\u5FC6\u91CC\u7684\u4F60\u3002 \u5373\u4E3A\u8FC7\u5BA2\uFF0C\u4F55\u4E0D\u6D12\u8131\uFF0C\u7559\u4E0D\u4F4F\uFF0C\u5E26\u4E0D\u8D70\uFF0C\u5948\u4F55\uFF1F so, the finally end \u2026"),
                vue.createVNode("p", null, "\u6709\u4E9B\u4EBA\u603B\u89C9\u5F97\u5BF9\u65B9\u5FC3\u91CC\u5DF2\u7ECF\u6CA1\u6709\u81EA\u5DF1\u4E86\u3002 \u6709\u4E9B\u4EBA\u77E5\u9053\u5F7C\u6B64\u5FC3\u91CC\u90FD\u6709\u5BF9\u65B9\uFF0C\u53EF\u73B0\u5B9E\u4E0D\u5141\u8BB8\u4E86\u3002 \u6709\u4E9B\u4EBA\u5BB3\u6015\u653E\u4E0B\u59FF\u6001\u633D\u56DE\u5374\u6362\u4E0D\u56DE\u81EA\u5DF1\u60F3\u8981\u7684\u7ED3\u679C\u3002 \u6709\u4E9B\u4E1C\u897F\u6E10\u884C\u6E10\u8FDC\uFF0C\u6DF1\u6C89\u7684\u611F\u60C5\u8FD8\u662F\u8981\u59A5\u5E16\u73CD\u85CF\u4E8E\u5FC3\u5E95\u3002 \u5FC3\u82E5\u4E0D\u52A8\uFF0C\u98CE\u53C8\u5948\u4F55\uFF1F\u4F60\u82E5\u4E0D\u4F24\uFF0C\u5C81\u6708\u65E0\u6059\u3002"),
                vue.createVNode("p", null, "\u5173\u4E8E\u611F\u60C5\uFF0C\u81F3\u6B64\u5706\u6EE1\uFF0C\u4E00\u79CD\u5931\u65E0\u6240\u5931\u7684\u201C\u5706\u6EE1\u201D\uFF0C\u81EA\u5F03\u800C\u7B11 \u2026 \u56DE\u5934\u671B\u53BB\uFF0C\u8C01\u4E0D\u662F\u4E00\u8DEF\u7684\u8840\u8FF9\u6591\u6591\u3002"),
                vue.createVNode("p", null, "\u8D8A\u662F\u957F\u5927\u8D8A\u662F\u770B\u5230\u4EBA\u4E4B\u4E3A\u4EBA\u7684\u5351\u5FAE\u4E0E\u8270\u96BE\uFF0C\u8D8A\u662F\u770B\u5230\u4EBA\u751F\u7684\u79CD\u79CD\u4E0D\u582A\u4E0E\u65E0\u5948\u3002 \u6162\u6162\u4F1A\u77E5\u9053\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u62E5\u6709\u4EC0\u4E48\uFF0C\u820D\u5F03\u4EC0\u4E48\uFF0C\u770B\u8F7B\u4EC0\u4E48\uFF0C\u76F8\u4FE1\u4EC0\u4E48\u3002"),
                vue.createVNode("p", null, "\u6709\u4EBA\u8BF4\uFF1A\u5C81\u6708\u5BF9\u4E00\u4E2A\u5973\u4EBA\u7684\u771F\u6B63\u610F\u4E49\u662F\u5979\u4EEC\u5EA6\u8FC7\u6F2B\u957F\u7684\u81EA\u6211\u6551\u8D4E\u4E0E\u6210\u957F\u4E4B\u540E\uFF0C\u6C89\u6DC0\u4E0B\u6765\u7684\u90A3\u4EFD\u53EF\u4EE5\u4FEF\u89C6\u751F\u547D\u7684\u5C0A\u4E25\u4E0E\u5E73\u548C\u3002 \u5F53\u8EAB\u8FB9\u7684\u540C\u5B66\u5F00\u59CB\u5DE5\u4F5C\uFF0C\u5F00\u59CB\u7ED3\u5A5A\uFF0C\u5F00\u59CB\u751F\u5C0F\u5B69\uFF0C \u6211\u77E5\u9053\uFF0C\u66FE\u7ECF\u5F15\u4EE5\u4E3A\u50B2\u7684\u9752\u6625\u6563\u573A\u4E86\uFF0C\u800C\u80FD\u966A\u4F34\u81F3\u6B64\u7684\u4EBA\uFF0C\u4E00\u5343\u4E00\u4E07\u4E2A\u611F\u6FC0\u3002 \u751F\u6D3B\u767E\u5E9F\u5F85\u5174\uFF0C\u8981\u9762\u5BF9\u60E8\u6DE1\u7684\u4EBA\u751F\uFF0C\u8981\u4E0D\u7559\u9057\u61BE\uFF0C\u8981\u62FC\u5C3D\u5168\u529B\uFF0C\u5176\u4ED6\u51ED\u5929\u610F\u3002"),
                vue.createVNode("p", null, "\u4E0D\u4E45\u7684\u5C06\u6765\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u6709\u4E00\u4E2A\u6E29\u6696\u7684\u5BB6\uFF0C\u5C0F\u5BCC\u5373\u5B89\u7684\u6EE1\u8DB3\uFF0C\u5C81\u6708\u9759\u597D\uFF01")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/If-the-heart-does-not-move.md");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var IfTheHeartDoesNotMove = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  name: "Laravel-Common-Extension-Packages",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Larvel Common Extension Packages", "date": "2021-11-18T18:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 8min", "description": "HLarvel Common Extension Packages\u3002", "meta": [{ "property": "og:title", "content": "Larvel Common Extension Packages" }, { "property": "og:description", "content": "HLarvel Common Extension Packages\u3002" }, { "name": "description", "content": "HLarvel Common Extension Packages\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Larvel Common Extension Packages", "meta": [{ "property": "og:title", "content": "Larvel Common Extension Packages" }, { "property": "og:description", "content": "HLarvel Common Extension Packages\u3002" }, { "name": "description", "content": "HLarvel Common Extension Packages\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}><img src="//cdn.3333120.com/article/laravel-package/400x400.png" alt="Laravel Package"${_scopeId}></p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Name</th><th${_scopeId}>Note</th><th${_scopeId}>URL</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>parsedown-extra</td><td${_scopeId}>\u89E3\u6790 markdown\uFF0C\u8F6C\u6362\u6210\u5BF9\u5E94\u7684 html \u5143\u7D20</td><td${_scopeId}><a href="https://github.com/erusev/parsedown-extra" target="_blank" rel="noopener"${_scopeId}>https://github.com/erusev/parsedown-extra</a></td></tr><tr${_scopeId}><td${_scopeId}>prestissimo</td><td${_scopeId}>Composer \u52A0\u901F</td><td${_scopeId}><a href="https://github.com/hirak/prestissimo" target="_blank" rel="noopener"${_scopeId}>https://github.com/hirak/prestissimo</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-backup</td><td${_scopeId}>\u6570\u636E\u5907\u4EFD</td><td${_scopeId}><a href="https://github.com/spatie/laravel-backup" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-backup</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-filesystem-qiniu</td><td${_scopeId}>\u4E03\u725B\u6587\u4EF6\u7CFB\u7EDF\u9A71\u52A8</td><td${_scopeId}><a href="https://github.com/overtrue/laravel-filesystem-qiniu" target="_blank" rel="noopener"${_scopeId}>https://github.com/overtrue/laravel-filesystem-qiniu</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-hashids</td><td${_scopeId}>\u54C8\u5E0C\u6570\u636E ID</td><td${_scopeId}><a href="https://github.com/vinkla/laravel-hashids" target="_blank" rel="noopener"${_scopeId}>https://github.com/vinkla/laravel-hashids</a></td></tr><tr${_scopeId}><td${_scopeId}>Laravel-Phone</td><td${_scopeId}>\u624B\u673A\u53F7\u9A8C\u8BC1</td><td${_scopeId}><a href="https://github.com/Propaganistas/Laravel-Phone" target="_blank" rel="noopener"${_scopeId}>https://github.com/Propaganistas/Laravel-Phone</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-log-viewer</td><td${_scopeId}>\u65E5\u5FD7\u67E5\u770B\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/rap2hpoutre/laravel-log-viewer" target="_blank" rel="noopener"${_scopeId}>https://github.com/rap2hpoutre/laravel-log-viewer</a></td></tr><tr${_scopeId}><td${_scopeId}>EloquentFilter</td><td${_scopeId}>Eloquent \u6761\u4EF6\u67E5\u8BE2</td><td${_scopeId}><a href="https://github.com/Tucker-Eric/EloquentFilter" target="_blank" rel="noopener"${_scopeId}>https://github.com/Tucker-Eric/EloquentFilter</a></td></tr><tr${_scopeId}><td${_scopeId}>clockwork</td><td${_scopeId}>\u8C03\u8BD5\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/itsgoingd/clockwork" target="_blank" rel="noopener"${_scopeId}>https://github.com/itsgoingd/clockwork</a></td></tr><tr${_scopeId}><td${_scopeId}>iseed</td><td${_scopeId}>\u9006\u5411 Seed \u751F\u6210\u5668</td><td${_scopeId}><a href="https://github.com/orangehill/iseed" target="_blank" rel="noopener"${_scopeId}>https://github.com/orangehill/iseed</a></td></tr><tr${_scopeId}><td${_scopeId}>rememberable</td><td${_scopeId}>\u6570\u636E\u67E5\u8BE2\u7F13\u5B58</td><td${_scopeId}><a href="https://github.com/dwightwatson/rememberable" target="_blank" rel="noopener"${_scopeId}>https://github.com/dwightwatson/rememberable</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-snappy</td><td${_scopeId}>\u5FEB\u901F\u751F\u6210 PDF \u4EE5\u53CA\u56FE\u7247</td><td${_scopeId}><a href="https://github.com/barryvdh/laravel-snappy" target="_blank" rel="noopener"${_scopeId}>https://github.com/barryvdh/laravel-snappy</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-cors</td><td${_scopeId}>\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF08 CORS \uFF09</td><td${_scopeId}><a href="https://github.com/fruitcake/laravel-cors" target="_blank" rel="noopener"${_scopeId}>https://github.com/fruitcake/laravel-cors</a></td></tr><tr${_scopeId}><td${_scopeId}>Zipper</td><td${_scopeId}>Zip \u6253\u5305\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/Chumper/Zipper" target="_blank" rel="noopener"${_scopeId}>https://github.com/Chumper/Zipper</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-nestedset</td><td${_scopeId}>\u5D4C\u5957\u96C6\u5408\u6A21\u578B</td><td${_scopeId}><a href="https://github.com/lazychaser/laravel-nestedset" target="_blank" rel="noopener"${_scopeId}>https://github.com/lazychaser/laravel-nestedset</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-geoip</td><td${_scopeId}>\u901A\u8FC7 IP \u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F</td><td${_scopeId}><a href="https://github.com/Torann/laravel-geoip" target="_blank" rel="noopener"${_scopeId}>https://github.com/Torann/laravel-geoip</a></td></tr><tr${_scopeId}><td${_scopeId}>simple-qrcode</td><td${_scopeId}>\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/SimpleSoftwareIO/simple-qrcode" target="_blank" rel="noopener"${_scopeId}>https://github.com/SimpleSoftwareIO/simple-qrcode</a></td></tr><tr${_scopeId}><td${_scopeId}>barcode</td><td${_scopeId}>\u6761\u5F62\u7801\u751F\u6210\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/milon/barcode" target="_blank" rel="noopener"${_scopeId}>https://github.com/milon/barcode</a></td></tr><tr${_scopeId}><td${_scopeId}>Laravel-Excel</td><td${_scopeId}>Excel \u5904\u7406\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/Maatwebsite/Laravel-Excel" target="_blank" rel="noopener"${_scopeId}>https://github.com/Maatwebsite/Laravel-Excel</a></td></tr><tr${_scopeId}><td${_scopeId}>Sitemap</td><td${_scopeId}>Sitemap \u751F\u6210\u5DE5\u5177</td><td${_scopeId}><a href="https://gitlab.com/Laravelium/Sitemap" target="_blank" rel="noopener"${_scopeId}>https://gitlab.com/Laravelium/Sitemap</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-visits</td><td${_scopeId}>\u9875\u9762\u8BBF\u95EE\u7EDF\u8BA1\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/awssat/laravel-visits" target="_blank" rel="noopener"${_scopeId}>https://github.com/awssat/laravel-visits</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-er-diagram-generator</td><td${_scopeId}>\u6A21\u578B\u5173\u7CFB\u56FE\u751F\u6210\u5668</td><td${_scopeId}><a href="https://github.com/beyondcode/laravel-er-diagram-generator" target="_blank" rel="noopener"${_scopeId}>https://github.com/beyondcode/laravel-er-diagram-generator</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-query-detector</td><td${_scopeId}>N+1 \u95EE\u9898\u6355\u6740\u795E\u5668</td><td${_scopeId}><a href="https://github.com/beyondcode/laravel-query-detector" target="_blank" rel="noopener"${_scopeId}>https://github.com/beyondcode/laravel-query-detector</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-soft-cascade</td><td${_scopeId}>\u7EA7\u8054\u5904\u7406\u8F6F\u5220\u9664\u5173\u7CFB</td><td${_scopeId}><a href="https://github.com/Askedio/laravel-soft-cascade" target="_blank" rel="noopener"${_scopeId}>https://github.com/Askedio/laravel-soft-cascade</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-self-diagnosis</td><td${_scopeId}>\u5E94\u7528\u81EA\u6211\u8BCA\u65AD\u6D4B\u8BD5</td><td${_scopeId}><a href="https://github.com/beyondcode/laravel-self-diagnosis" target="_blank" rel="noopener"${_scopeId}>https://github.com/beyondcode/laravel-self-diagnosis</a></td></tr><tr${_scopeId}><td${_scopeId}>collision</td><td${_scopeId}>\u4F18\u5316 Cli \u9519\u8BEF\u63D0\u793A</td><td${_scopeId}><a href="https://github.com/nunomaduro/collision" target="_blank" rel="noopener"${_scopeId}>https://github.com/nunomaduro/collision</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-responsecache</td><td${_scopeId}>\u7F13\u5B58\u5B8C\u6574\u7684\u54CD\u5E94\u52A0\u901F\u5E94\u7528</td><td${_scopeId}><a href="https://github.com/spatie/laravel-responsecache" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-responsecache</a></td></tr><tr${_scopeId}><td${_scopeId}>revisionable</td><td${_scopeId}>\u6A21\u578B\u64CD\u4F5C\u65E5\u5FD7</td><td${_scopeId}><a href="https://github.com/VentureCraft/revisionable" target="_blank" rel="noopener"${_scopeId}>https://github.com/VentureCraft/revisionable</a></td></tr><tr${_scopeId}><td${_scopeId}>jwt-auth</td><td${_scopeId}>\u5FEB\u901F\u63A5\u5165 JWT \u7528\u6237\u8BA4\u8BC1\uFF08\u591A\u7528\u6237\u8BA4\u8BC1\uFF09</td><td${_scopeId}><a href="https://github.com/tymondesigns/jwt-auth" target="_blank" rel="noopener"${_scopeId}>https://github.com/tymondesigns/jwt-auth</a></td></tr><tr${_scopeId}><td${_scopeId}>migrations-generator</td><td${_scopeId}>\u9006\u5411 Migration \u751F\u6210\u5668</td><td${_scopeId}><a href="https://github.com/Xethron/migrations-generator" target="_blank" rel="noopener"${_scopeId}>https://github.com/Xethron/migrations-generator</a></td></tr><tr${_scopeId}><td${_scopeId}>eloquent-sortable</td><td${_scopeId}>\u4E3A eloquent \u6A21\u578B\u589E\u52A0\u6392\u5E8F\u529F\u80FD</td><td${_scopeId}><a href="https://github.com/spatie/eloquent-sortable" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/eloquent-sortable</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-activitylog</td><td${_scopeId}>\u7528\u6237\u6D3B\u52A8\u4EE5\u53CA\u6A21\u578B\u53D8\u52A8\u65E5\u5FD7</td><td${_scopeId}><a href="https://github.com/spatie/laravel-activitylog" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-activitylog</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-page-speed</td><td${_scopeId}>\u538B\u7F29 HTML \u52A0\u901F\u7F51\u9875\u54CD\u5E94</td><td${_scopeId}><a href="https://github.com/renatomarinho/laravel-page-speed" target="_blank" rel="noopener"${_scopeId}>https://github.com/renatomarinho/laravel-page-speed</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-translatable</td><td${_scopeId}>\u6570\u636E\u5E93\u7684\u591A\u8BED\u8A00\u7FFB\u8BD1\u65B9\u6848</td><td${_scopeId}><a href="https://github.com/spatie/laravel-translatable" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-translatable</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-translatable</td><td${_scopeId}>\u6570\u636E\u5E93\u7684\u591A\u8BED\u8A00\u7FFB\u8BD1\u65B9\u6848</td><td${_scopeId}><a href="https://github.com/dimsav/laravel-translatable" target="_blank" rel="noopener"${_scopeId}>https://github.com/dimsav/laravel-translatable</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-permission</td><td${_scopeId}>\u89D2\u8272\u6743\u9650\u63A7\u5236\u7EC4\u4EF6</td><td${_scopeId}><a href="https://github.com/spatie/laravel-permission" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-permission</a></td></tr><tr${_scopeId}><td${_scopeId}>larecipe</td><td${_scopeId}>Markdown \u6587\u6863</td><td${_scopeId}><a href="https://github.com/saleem-hadad/larecipe" target="_blank" rel="noopener"${_scopeId}>https://github.com/saleem-hadad/larecipe</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-translation-manager</td><td${_scopeId}>\u7FFB\u8BD1\u8F85\u52A9\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/barryvdh/laravel-translation-manager" target="_blank" rel="noopener"${_scopeId}>https://github.com/barryvdh/laravel-translation-manager</a></td></tr><tr${_scopeId}><td${_scopeId}>laroute</td><td${_scopeId}>JavaScript \u8BFB\u53D6\u8DEF\u7531\u4FE1\u606F</td><td${_scopeId}><a href="https://github.com/aaronlord/laroute" target="_blank" rel="noopener"${_scopeId}>https://github.com/aaronlord/laroute</a></td></tr><tr${_scopeId}><td${_scopeId}>PHP-Vars-To-Js-Transformer</td><td${_scopeId}>\u5C06 PHP \u53D8\u91CF\u8F6C\u6362\u4E3A JavaScript \u53D8\u91CF</td><td${_scopeId}><a href="https://github.com/laracasts/PHP-Vars-To-Js-Transformer" target="_blank" rel="noopener"${_scopeId}>https://github.com/laracasts/PHP-Vars-To-Js-Transformer</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-tagging</td><td${_scopeId}>\u4E3A Eloquent \u6A21\u578B\u589E\u52A0\u6253\u6807\u7B7E\u529F\u80FD</td><td${_scopeId}><a href="https://github.com/rtconner/laravel-tagging" target="_blank" rel="noopener"${_scopeId}>https://github.com/rtconner/laravel-tagging</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-relationship-events</td><td${_scopeId}>\u589E\u52A0\u6A21\u578B\u5173\u7CFB\u4E8B\u4EF6</td><td${_scopeId}><a href="https://github.com/chelout/laravel-relationship-events" target="_blank" rel="noopener"${_scopeId}>https://github.com/chelout/laravel-relationship-events</a></td></tr><tr${_scopeId}><td${_scopeId}>Api</td><td${_scopeId}>Api \u5F00\u53D1\u5DE5\u5177\u5305</td><td${_scopeId}><a href="https://github.com/dingo/api" target="_blank" rel="noopener"${_scopeId}>https://github.com/dingo/api</a></td></tr><tr${_scopeId}><td${_scopeId}>fractal</td><td${_scopeId}>API \u6570\u636E\u8F6C\u6362\u5C42</td><td${_scopeId}><a href="https://github.com/thephpleague/fractal" target="_blank" rel="noopener"${_scopeId}>https://github.com/thephpleague/fractal</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-imageup</td><td${_scopeId}>\u56FE\u7247\u4E0A\u4F20\u8F85\u52A9\u5DE5\u5177</td><td${_scopeId}><a href="https://github.com/qcod/laravel-imageup" target="_blank" rel="noopener"${_scopeId}>https://github.com/qcod/laravel-imageup</a></td></tr><tr${_scopeId}><td${_scopeId}>laravel-medialibrary</td><td${_scopeId}>\u6587\u4EF6\u4E0E\u6A21\u578B\u5173\u8054</td><td${_scopeId}><a href="https://github.com/spatie/laravel-medialibrary" target="_blank" rel="noopener"${_scopeId}>https://github.com/spatie/laravel-medialibrary</a></td></tr><tr${_scopeId}><td${_scopeId}>packagit</td><td${_scopeId}>php artisan make:controller =&gt; p make:controller</td><td${_scopeId}><a href="https://github.com/packagit/packagit/" target="_blank" rel="noopener"${_scopeId}>https://github.com/packagit/packagit/</a></td></tr></tbody></table></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/laravel-package/400x400.png",
                    alt: "Laravel Package"
                  })
                ]),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "Name"),
                      vue.createVNode("th", null, "Note"),
                      vue.createVNode("th", null, "URL")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "parsedown-extra"),
                      vue.createVNode("td", null, "\u89E3\u6790 markdown\uFF0C\u8F6C\u6362\u6210\u5BF9\u5E94\u7684 html \u5143\u7D20"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/erusev/parsedown-extra",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/erusev/parsedown-extra")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "prestissimo"),
                      vue.createVNode("td", null, "Composer \u52A0\u901F"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/hirak/prestissimo",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/hirak/prestissimo")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-backup"),
                      vue.createVNode("td", null, "\u6570\u636E\u5907\u4EFD"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-backup",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-backup")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-filesystem-qiniu"),
                      vue.createVNode("td", null, "\u4E03\u725B\u6587\u4EF6\u7CFB\u7EDF\u9A71\u52A8"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/overtrue/laravel-filesystem-qiniu",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/overtrue/laravel-filesystem-qiniu")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-hashids"),
                      vue.createVNode("td", null, "\u54C8\u5E0C\u6570\u636E ID"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/vinkla/laravel-hashids",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/vinkla/laravel-hashids")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Laravel-Phone"),
                      vue.createVNode("td", null, "\u624B\u673A\u53F7\u9A8C\u8BC1"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Propaganistas/Laravel-Phone",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Propaganistas/Laravel-Phone")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-log-viewer"),
                      vue.createVNode("td", null, "\u65E5\u5FD7\u67E5\u770B\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/rap2hpoutre/laravel-log-viewer",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/rap2hpoutre/laravel-log-viewer")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "EloquentFilter"),
                      vue.createVNode("td", null, "Eloquent \u6761\u4EF6\u67E5\u8BE2"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Tucker-Eric/EloquentFilter",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Tucker-Eric/EloquentFilter")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "clockwork"),
                      vue.createVNode("td", null, "\u8C03\u8BD5\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/itsgoingd/clockwork",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/itsgoingd/clockwork")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "iseed"),
                      vue.createVNode("td", null, "\u9006\u5411 Seed \u751F\u6210\u5668"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/orangehill/iseed",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/orangehill/iseed")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "rememberable"),
                      vue.createVNode("td", null, "\u6570\u636E\u67E5\u8BE2\u7F13\u5B58"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/dwightwatson/rememberable",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/dwightwatson/rememberable")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-snappy"),
                      vue.createVNode("td", null, "\u5FEB\u901F\u751F\u6210 PDF \u4EE5\u53CA\u56FE\u7247"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/barryvdh/laravel-snappy",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/barryvdh/laravel-snappy")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-cors"),
                      vue.createVNode("td", null, "\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF08 CORS \uFF09"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/fruitcake/laravel-cors",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/fruitcake/laravel-cors")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Zipper"),
                      vue.createVNode("td", null, "Zip \u6253\u5305\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Chumper/Zipper",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Chumper/Zipper")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-nestedset"),
                      vue.createVNode("td", null, "\u5D4C\u5957\u96C6\u5408\u6A21\u578B"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/lazychaser/laravel-nestedset",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/lazychaser/laravel-nestedset")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-geoip"),
                      vue.createVNode("td", null, "\u901A\u8FC7 IP \u83B7\u53D6\u5230\u5BF9\u5E94\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Torann/laravel-geoip",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Torann/laravel-geoip")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "simple-qrcode"),
                      vue.createVNode("td", null, "\u4E8C\u7EF4\u7801\u751F\u6210\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/SimpleSoftwareIO/simple-qrcode",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/SimpleSoftwareIO/simple-qrcode")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "barcode"),
                      vue.createVNode("td", null, "\u6761\u5F62\u7801\u751F\u6210\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/milon/barcode",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/milon/barcode")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Laravel-Excel"),
                      vue.createVNode("td", null, "Excel \u5904\u7406\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Maatwebsite/Laravel-Excel",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Maatwebsite/Laravel-Excel")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Sitemap"),
                      vue.createVNode("td", null, "Sitemap \u751F\u6210\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://gitlab.com/Laravelium/Sitemap",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://gitlab.com/Laravelium/Sitemap")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-visits"),
                      vue.createVNode("td", null, "\u9875\u9762\u8BBF\u95EE\u7EDF\u8BA1\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/awssat/laravel-visits",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/awssat/laravel-visits")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-er-diagram-generator"),
                      vue.createVNode("td", null, "\u6A21\u578B\u5173\u7CFB\u56FE\u751F\u6210\u5668"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/beyondcode/laravel-er-diagram-generator",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/beyondcode/laravel-er-diagram-generator")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-query-detector"),
                      vue.createVNode("td", null, "N+1 \u95EE\u9898\u6355\u6740\u795E\u5668"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/beyondcode/laravel-query-detector",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/beyondcode/laravel-query-detector")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-soft-cascade"),
                      vue.createVNode("td", null, "\u7EA7\u8054\u5904\u7406\u8F6F\u5220\u9664\u5173\u7CFB"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Askedio/laravel-soft-cascade",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Askedio/laravel-soft-cascade")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-self-diagnosis"),
                      vue.createVNode("td", null, "\u5E94\u7528\u81EA\u6211\u8BCA\u65AD\u6D4B\u8BD5"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/beyondcode/laravel-self-diagnosis",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/beyondcode/laravel-self-diagnosis")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "collision"),
                      vue.createVNode("td", null, "\u4F18\u5316 Cli \u9519\u8BEF\u63D0\u793A"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/nunomaduro/collision",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/nunomaduro/collision")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-responsecache"),
                      vue.createVNode("td", null, "\u7F13\u5B58\u5B8C\u6574\u7684\u54CD\u5E94\u52A0\u901F\u5E94\u7528"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-responsecache",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-responsecache")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "revisionable"),
                      vue.createVNode("td", null, "\u6A21\u578B\u64CD\u4F5C\u65E5\u5FD7"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/VentureCraft/revisionable",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/VentureCraft/revisionable")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "jwt-auth"),
                      vue.createVNode("td", null, "\u5FEB\u901F\u63A5\u5165 JWT \u7528\u6237\u8BA4\u8BC1\uFF08\u591A\u7528\u6237\u8BA4\u8BC1\uFF09"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/tymondesigns/jwt-auth",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/tymondesigns/jwt-auth")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "migrations-generator"),
                      vue.createVNode("td", null, "\u9006\u5411 Migration \u751F\u6210\u5668"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/Xethron/migrations-generator",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/Xethron/migrations-generator")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "eloquent-sortable"),
                      vue.createVNode("td", null, "\u4E3A eloquent \u6A21\u578B\u589E\u52A0\u6392\u5E8F\u529F\u80FD"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/eloquent-sortable",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/eloquent-sortable")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-activitylog"),
                      vue.createVNode("td", null, "\u7528\u6237\u6D3B\u52A8\u4EE5\u53CA\u6A21\u578B\u53D8\u52A8\u65E5\u5FD7"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-activitylog",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-activitylog")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-page-speed"),
                      vue.createVNode("td", null, "\u538B\u7F29 HTML \u52A0\u901F\u7F51\u9875\u54CD\u5E94"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/renatomarinho/laravel-page-speed",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/renatomarinho/laravel-page-speed")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-translatable"),
                      vue.createVNode("td", null, "\u6570\u636E\u5E93\u7684\u591A\u8BED\u8A00\u7FFB\u8BD1\u65B9\u6848"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-translatable",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-translatable")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-translatable"),
                      vue.createVNode("td", null, "\u6570\u636E\u5E93\u7684\u591A\u8BED\u8A00\u7FFB\u8BD1\u65B9\u6848"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/dimsav/laravel-translatable",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/dimsav/laravel-translatable")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-permission"),
                      vue.createVNode("td", null, "\u89D2\u8272\u6743\u9650\u63A7\u5236\u7EC4\u4EF6"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-permission",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-permission")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "larecipe"),
                      vue.createVNode("td", null, "Markdown \u6587\u6863"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/saleem-hadad/larecipe",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/saleem-hadad/larecipe")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-translation-manager"),
                      vue.createVNode("td", null, "\u7FFB\u8BD1\u8F85\u52A9\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/barryvdh/laravel-translation-manager",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/barryvdh/laravel-translation-manager")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laroute"),
                      vue.createVNode("td", null, "JavaScript \u8BFB\u53D6\u8DEF\u7531\u4FE1\u606F"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/aaronlord/laroute",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/aaronlord/laroute")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "PHP-Vars-To-Js-Transformer"),
                      vue.createVNode("td", null, "\u5C06 PHP \u53D8\u91CF\u8F6C\u6362\u4E3A JavaScript \u53D8\u91CF"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/laracasts/PHP-Vars-To-Js-Transformer",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/laracasts/PHP-Vars-To-Js-Transformer")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-tagging"),
                      vue.createVNode("td", null, "\u4E3A Eloquent \u6A21\u578B\u589E\u52A0\u6253\u6807\u7B7E\u529F\u80FD"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/rtconner/laravel-tagging",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/rtconner/laravel-tagging")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-relationship-events"),
                      vue.createVNode("td", null, "\u589E\u52A0\u6A21\u578B\u5173\u7CFB\u4E8B\u4EF6"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/chelout/laravel-relationship-events",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/chelout/laravel-relationship-events")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "Api"),
                      vue.createVNode("td", null, "Api \u5F00\u53D1\u5DE5\u5177\u5305"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/dingo/api",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/dingo/api")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "fractal"),
                      vue.createVNode("td", null, "API \u6570\u636E\u8F6C\u6362\u5C42"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/thephpleague/fractal",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/thephpleague/fractal")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-imageup"),
                      vue.createVNode("td", null, "\u56FE\u7247\u4E0A\u4F20\u8F85\u52A9\u5DE5\u5177"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/qcod/laravel-imageup",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/qcod/laravel-imageup")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "laravel-medialibrary"),
                      vue.createVNode("td", null, "\u6587\u4EF6\u4E0E\u6A21\u578B\u5173\u8054"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/spatie/laravel-medialibrary",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/spatie/laravel-medialibrary")
                      ])
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "packagit"),
                      vue.createVNode("td", null, "php artisan make:controller => p make:controller"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", {
                          href: "https://github.com/packagit/packagit/",
                          target: "_blank",
                          rel: "noopener"
                        }, "https://github.com/packagit/packagit/")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/Laravel-Common-Extension-Packages.md");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var LaravelCommonExtensionPackages = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  name: "P.A.R.A-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "P.A.R.A", "date": "2021-05-28T08:13:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 15min", "description": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002", "meta": [{ "property": "og:title", "content": "P.A.R.A" }, { "property": "og:description", "content": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002" }, { "name": "description", "content": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "P.A.R.A", "meta": [{ "property": "og:title", "content": "P.A.R.A" }, { "property": "og:description", "content": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002" }, { "name": "description", "content": "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u5148\u4ECB\u7ECD\u4E00\u4E2A\u8BCD\u6C47\u2014\u2014\u300CInfovores \xB7 \u98DF\u77E5\u52A8\u7269\u300D</p><p${_scopeId}>\u800C\u5F53\u9047\u5230 Notion \u4E4B\u540E\u53D1\u73B0\u4F20\u7EDF\u7684\u6587\u4EF6\u5939\u601D\u8DEF + tag \u7684\u601D\u7EF4\u65B9\u5F0F\uFF0C\u5DF2\u7ECF\u4E0D\u5408\u9002\u8FD9\u79CD\u66F4\u52A0\u7075\u6D3B\u5F3A\u5927\u7684\u601D\u7EF4\u5DE5\u5177\u4E86\u3002\u5982\u4F55\u4FDD\u8BC1\u81EA\u5DF1\u6536\u96C6\u7684\u4FE1\u606F\u548C\u521B\u9020\u7684\u5185\u5BB9\uFF0C\u66F4\u597D\u5730\u88AB\u7EC4\u7EC7\u548C\u7BA1\u7406\uFF0C\u4E0D\u81F3\u4E8E\u6CA6\u4E3A\u4E00\u4E2A\u5783\u573E\u5806\u4E4B\u540E\u6362\u53E6\u4E00\u4E2A\u5DE5\u5177\uFF1F\u8FD9\u4E5F\u6566\u4FC3\u6211\u53BB\u5BFB\u627E\u65B0\u7684\u7BA1\u7406\u65B9\u6CD5\uFF0C\u6070\u597D\u9047\u5230\u4E86 P.A.R.A \u4FE1\u606F\u7EC4\u7EC7\u65B9\u6CD5\uFF0C<strong${_scopeId}>\u6216\u8BB8\u4ED6\u4E0D\u662F\u6700\u597D\u6700\u5B8C\u7F8E\u7684\uFF0C\u4F46\u81F3\u5C11\u6BD4\u6CA1\u6709\u6846\u67B6\u65F6\u6765\u8BF4\uFF0C\u5DF2\u7ECF\u662F\u4E00\u4E2A\u8D28\u7684\u98DE\u8DC3\u3002</strong></p><p${_scopeId}>\u4F46\u5728\u5F00\u59CB\u5177\u4F53\u4E86\u89E3 P.A.R.A \u4E4B\u524D\uFF0C@George Hale \u5728\u300C\u4EA7\u54C1\u6C89\u601D\u5F55\u4FF1\u4E50\u90E8\u300D\u91CC\u5206\u4EAB\u7684\uFF0C\u5BF9\u6B64\u7C7B\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u548C\u65B9\u6CD5\u7684\u89C2\u70B9\u5F88\u503C\u5F97\u5148\u4E86\u89E3\u4E00\u4E0B\uFF0C\u56E0\u4E3A\u8FD9\u6837\u624D\u80FD\u8BA9\u6211\u4EEC\u660E\u767D\u505A\u8FD9\u4E9B\u4E8B\u60C5\u7684\u521D\u8877\u548C\u5FC5\u8981\u7684\u6761\u4EF6\u3002</p><p${_scopeId}><strong${_scopeId}>\u4E8B\u52A1\u548C\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u4E0E\u65B9\u6CD5\uFF08\u4E0B\u7EDF\u79F0\u300C\u5DE5\u5177\u300D\uFF09\uFF0C\u9700\u8981\u641E\u660E\u767D\u4E24\u4E2A\u95EE\u9898\uFF0C</strong></p><ul${_scopeId}><li${_scopeId}>\u8BE5\u5DE5\u5177\u7684\u7236\u7EA7\u522B\u6216\u5143\u7EA7\u522B\u5DE5\u5177\u7C7B\u578B\u7684\u6838\u5FC3\u76EE\u7684\u4E0E\u539F\u5219\uFF08\u5982 Roam Research \u6E90\u81EA Zettelkasten\uFF0C\u4E5F\u5C31\u662F slip-box\uFF09</li><li${_scopeId}>\u4E8C\u662F\u8BE5\u5DE5\u5177\u8BBE\u8BA1\u521D\u8877\u53D1\u751F\u6216\u8005\u9002\u5408\u7684\u573A\u666F\uFF08\u5982 GTD\u3001GIST\u3001OKR \u7B49\uFF09</li></ul><p${_scopeId}>\u7B2C\u4E8C\u70B9\u4F1A\u5BF9\u7B2C\u4E00\u70B9\u8FDB\u884C\u7EA6\u675F\u548C\u6709\u6240\u4FA7\u91CD\uFF0C\u867D\u7136\u5404\u79CD\u7406\u8BBA\u7684\u9F13\u5439\u8005\u90FD\u5728\u8BD5\u56FE\u8BA9\u8FD9\u4E9B\u7406\u8BBA\u53D8\u5F97\u901A\u7528\uFF0C\u4F46\u662F\u4E0D\u53EF\u5426\u8BA4\u4EBA\u548C\u4EBA\u3001\u4F01\u4E1A\u548C\u4F01\u4E1A\u4E4B\u95F4\u7684\u5DEE\u5F02\u662F\u5DE8\u5927\u7684\u3002<strong${_scopeId}>\u6240\u4EE5\u6BCF\u4E2A\u5DE5\u5177\u9002\u5408\u7684\u573A\u666F\u90FD\u4F1A\u9700\u8981\u4E0D\u540C\u7684\u76EE\u7684\u548C\u914D\u5957\u8BBE\u65BD\u624D\u80FD\u826F\u597D\u8FD0\u884C\u3002</strong></p><p${_scopeId}>\u663E\u7136\u6240\u6709\u7684\u4E8B\u52A1\u548C\u4FE1\u606F\u7BA1\u7406\u90FD\u662F\u4E3A\u4E86\u91C7\u7528\u81EA\u7136\u6216\u975E\u81EA\u7136\u5E94\u5BF9\u7684\u65B9\u5F0F\uFF0C\u534F\u52A9\u8BB0\u5FC6\u3001\u6309\u90E8\u5C31\u73ED\u5904\u7406\u4E8B\u52A1\u3001\u6E05\u7A7A\u5927\u8111\u4E13\u6CE8\u773C\u524D\u3001\u76EE\u6807\u5BFC\u5411\u3001\u53EF\u8861\u91CF\u53EF\u5EF6\u7EED\u7B49\uFF0C\u5728 slip-box \u7684\u601D\u8DEF\u4E0B\uFF0C<strong${_scopeId}>\u77E5\u8BC6\u7BA1\u7406\u3001\u6301\u7EED\u7CBE\u8FDB\u662F\u4FA7\u91CD\u70B9</strong>\u3002</p><p${_scopeId}>\u4E0B\u9762\u662F\u6839\u636E\u4E2A\u4EBA\u7684\u7406\u89E3\u548C\u5B9E\u6218\uFF0C\u7ED3\u5408 Notion \u4EE5\u53CA\u56FD\u5185\u7684\u73AF\u5883\uFF0C<strong${_scopeId}>\u4EC5\u4FDD\u7559\u4E86\u4F5C\u8005\u6700\u521D\u7684\u601D\u60F3\u67B6\u6784\uFF0C\u5BF9\u5185\u5BB9\u7ED3\u6784\u6709\u6BD4\u8F83\u5927\u7684\u8C03\u6574</strong>\uFF0C\u5E76\u8865\u5145\u4E86\u4E2A\u4EBA\u4F7F\u7528\u4E2D\u53D1\u73B0\u7684\u95EE\u9898\u2014\u2014\xA0<strong${_scopeId}>\u56E0\u4E3A P.A.R.A \u53EA\u662F\u4E00\u79CD\u6307\u5BFC\u601D\u60F3\u800C\u975E\u64CD\u4F5C\u6307\u5357\uFF0C\u6240\u4EE5\u672C\u6587\u6709\u5927\u91CF\u5185\u5BB9\u6D89\u53CA\u7406\u5FF5\u7684\u8BA8\u8BBA\uFF0C\u5177\u4F53\u7684\u64CD\u4F5C\u90E8\u5206\u4F1A\u76F8\u5BF9\u7B80\u7565\u2014\u2014</strong>\xA0\u8BB8\u591A\u65F6\u5019\u6211\u4EEC\u5F88\u5BB9\u6613\u5306\u5FD9\u4E0A\u9A6C\u4E00\u4E2A\u5DE5\u5177\uFF0C\u800C\u5FFD\u89C6\u4E86\u662F\u5426\u5408\u9002\u3002\u6240\u4EE5\u7406\u89E3\u5DE5\u5177\u80CC\u540E\u7684\u7406\u5FF5\uFF0C\u6839\u636E\u7406\u5FF5\u6765\u521B\u9020\u81EA\u5DF1\u7684\u65B9\u6CD5\uFF0C\u8FDC\u6BD4\u77E5\u9053\u522B\u4EBA\u5177\u4F53\u7684\u64CD\u4F5C\u66F4\u91CD\u8981\u3002</p><h1 id="p-a-r-a-\u7684\u8D77\u6E90" tabindex="-1"${_scopeId}><strong${_scopeId}>P.A.R.A \u7684\u8D77\u6E90</strong> <a class="header-anchor" href="#p-a-r-a-\u7684\u8D77\u6E90" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-1.jpg" alt="P.A.R.A \u8D77\u6E90"${_scopeId}></p><p${_scopeId}>P.A.R.A \u7684\u4F5C\u8005\u662F\xA0<a href="https://fortelabs.co/about-forte-labs" target="_blank" rel="noopener"${_scopeId}>Tiago Forte</a>\uFF0C\u662F\u4E16\u754C\u4E0A\u6700\u8457\u540D\u7684\u751F\u4EA7\u529B\u4E13\u5BB6\u4E4B\u4E00\u3002\u4ED6\u901A\u8FC7\u81EA\u5DF1\u7684\u9879\u76EE\u5728\u5168\u4E16\u754C\u6559\u80B2\u4E86 2 \u4E07\u591A\u4EBA\uFF0C\u5E76\u64B0\u5199\u548C\u6F14\u8BB2\u6280\u672F\u5982\u4F55\u5E2E\u52A9\u77E5\u8BC6\u5DE5\u4F5C\u8005\u5F7B\u5E95\u6539\u53D8\u4ED6\u4EEC\u7684\u4E2A\u4EBA\u6548\u7387\u3002Tiago \u7684\u5728\u7EBF\u8BFE\u7A0B\u300A<a href="https://www.buildingasecondbrain.com/" target="_blank" rel="noopener"${_scopeId}>\u6253\u9020\u7B2C\u4E8C\u5927\u8111\uFF08Building a Second Brain\uFF09</a>\u300B\u5DF2\u7ECF\u6709\u6765\u81EA 70 \u591A\u4E2A\u56FD\u5BB6\u7684 1000 \u591A\u540D\u5B66\u751F\u53C2\u52A0\u4E86\u8BE5\u8BFE\u7A0B\u3002</p><p${_scopeId}>\u65F6\u81F3\u4ECA\u65E5\uFF0C\u4FE1\u606F\u7BA1\u7406\u8F6F\u4EF6\u8D8A\u6765\u8D8A\u591A\uFF0C\u4FE1\u606F\u7BA1\u7406\u65B9\u6CD5\u4E5F\u8D8A\u6765\u8D8A\u591A\uFF0C\u4F46\u53CC\u65B9\u5374\u5F88\u5C11\u662F\u4E00\u7FA4\u4EBA\u53D1\u660E\u7684\u3002\u60F3\u8C61\u4E00\u4E0B\u5B8C\u7F8E\u7684\u4FE1\u606F\u7EC4\u7EC7\u7CFB\u7EDF\u3002\u5B83\u80FD\u6709\u6548\u7684\u652F\u6301\u4F60\u7684\u5F53\u4E0B\u548C\u672A\u6765\u7684\u5DE5\u4F5C\uFF0C\u544A\u8BC9\u4F60\u4FE1\u606F\u90FD\u88AB\u653E\u5728\u4E86\u54EA\u91CC\uFF0C\u4EE5\u53CA\u5F53\u4F60\u9700\u8981\u7684\u65F6\u5019\u5C31\u80FD\u5FEB\u901F\u627E\u5230\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u88AB\u5DE5\u5177\u6240\u675F\u7F1A\u3002</p><p${_scopeId}>\u6240\u4EE5\u8FD9\u4E2A\u7CFB\u7EDF\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u901A\u7528\u7684\uFF08universal\uFF09</strong>\uFF1A\u5305\u542B\u6765\u81EA\u4EFB\u4F55\u6765\u6E90\u7684\u4EFB\u4F55\u79CD\u7C7B\u7684\u4FE1\u606F\uFF0C\u5E76\u4E14\u80FD\u8DE8\u5E73\u53F0\u517C\u5BB9\u4E0D\u540C\u65F6\u4EE3\u7684\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u3002</li><li${_scopeId}><strong${_scopeId}>\u7075\u6D3B\u7684\uFF08flexible\uFF09</strong>\uFF1A\u80FD\u591F\u4E0E\u4F60\u4E4B\u524D\u7684\u4EFB\u4F55\u9879\u76EE\u6216\u6D3B\u52A8\u6240\u517C\u5BB9\uFF0C\u5E76\u4E14\u80FD\u517C\u987E\u672A\u6765\u7684\u62D3\u5C55\u6027</li><li${_scopeId}><strong${_scopeId}>\u7B80\u5355\u7684\uFF08simple\uFF09</strong>\uFF1A\xA0\u4E0D\u9700\u8981\u4EFB\u4F55\u8017\u65F6\u7684\u7EF4\u62A4\u3001\u7F16\u76EE\u3001\u6807\u8BB0\u6216\u91CD\u7EC4\uFF0C\u53EA\u9700\u6700\u4F4E\u9650\u5EA6\u7684\u7EF4\u62A4\u3001\u7F16\u76EE\u3001\u6807\u8BB0\u6216\u91CD\u7EC4\u5373\u53EF\u3002</li><li${_scopeId}><strong${_scopeId}>\u53EF\u64CD\u4F5C\uFF08actionable\uFF09</strong>\uFF1A\u4E0E\u4EFB\u52A1\u7BA1\u7406\u548C\u9879\u76EE\u7BA1\u7406\u65B9\u6CD5\u7684\u65E0\u7F1D\u96C6\u6210\u3002</li><li${_scopeId}><strong${_scopeId}>\u7ED3\u679C\u5BFC\u5411\uFF08outcome-oriented\uFF09</strong>\uFF1A\u6784\u5EFA\u4FE1\u606F\u7684\u7ED3\u6784\uFF0C\u4EE5\u4FBF\u80FD\u4EA4\u4ED8\u6709\u4EF7\u503C\u5DE5\u4F5C\u3002</li><li${_scopeId}><strong${_scopeId}>\u6A21\u5757\u5316\uFF08modular\uFF09</strong>\uFF1A\u6839\u636E\u5F53\u524D\u4EFB\u52A1\u7684\u9700\u8981\uFF0C\u5141\u8BB8\u9690\u85CF\u6216\u663E\u793A\u4E0D\u540C\u7EA7\u522B\u7684\u7EC6\u8282\u3002</li><li${_scopeId}><strong${_scopeId}>\u673A\u52A8\u6027\u5F3A\uFF08opportunistic\uFF09</strong>\uFF1A\u4ECE\u597D\u7684\u65B9\u9762\u6765\u8BF4\uFF0C\u662F\u5229\u7528\u5DF2\u7ECF\u5B8C\u6210\u7684\u5DE5\u4F5C\uFF0C\u800C\u4E0D\u662F\u9700\u8981\u4E13\u95E8\u7684\u7BA1\u7406\u65F6\u95F4\u3002</li></ul><h1 id="p-a-r-a-\u7684\u542B\u4E49\u4E0E\u5B9A\u4E49" tabindex="-1"${_scopeId}><strong${_scopeId}>P.A.R.A \u7684\u542B\u4E49\u4E0E\u5B9A\u4E49</strong> <a class="header-anchor" href="#p-a-r-a-\u7684\u542B\u4E49\u4E0E\u5B9A\u4E49" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-2.png" alt="P.A.R.A \u5B9A\u4E49"${_scopeId}></p><p${_scopeId}>P.A.R.A. \u662F\u4E00\u79CD\u7EC4\u7EC7\u4FE1\u606F\u7684\u601D\u8DEF\uFF0C\u4F46\u5E76\u4E0D\u662F\u67D0\u79CD\u5177\u4F53\u7684\u89C4\u8303\u548C\u6559\u6761\uFF0C\u5176\u6838\u5FC3\u662F\u300C<strong${_scopeId}>\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB</strong>\u300D\u3002</p><p${_scopeId}>P.A.R.A. \u662F\xA0<strong${_scopeId}>\u9879\u76EE\uFF08Project\uFF09</strong>\u3001<strong${_scopeId}>\u9886\u57DF\uFF08Area\uFF09</strong>\u3001<strong${_scopeId}>\u8D44\u6E90\uFF08Resource\uFF09</strong>\u3001 <strong${_scopeId}>\u6863\u6848\uFF08Archive\uFF09</strong> \u7684\u7B80\u79F0\u3002\u8FD9\u56DB\u4E2A\u4E00\u7EA7\u5206\u7C7B\u6DB5\u76D6\u4E86\u4F60\u5728\u5DE5\u4F5C\u548C\u751F\u6D3B\u4E2D\u53EF\u80FD\u9047\u5230\u7684\u6240\u6709\u7C7B\u578B\u7684\u4FE1\u606F\u3002\u4E0B\u9762\u662F\u6BCF\u4E2A\u6A21\u5757\u7684\u5B9A\u4E49\uFF0C\u4E5F\u662F\u8FD9\u5957\u65B9\u6CD5\u8BBA\u7684\u6838\u5FC3\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u9879\u76EE</strong>\uFF1A\u5177\u6709\u660E\u786E\u7684\u76EE\u6807\u4EE5\u53CA\u65F6\u95F4\u8303\u56F4\uFF0C\u662F\u6700\u5C0F\u6267\u884C\u5355\u4F4D</li><li${_scopeId}><strong${_scopeId}>\u9886\u57DF</strong>\uFF1A\u4F60\u65E5\u5E38\u9700\u8981\u7CBE\u8FDB\u7684\u9886\u57DF\uFF08\u6240\u4EE5\u4F60\u9700\u8981\u4E3A\u6B64\u8D1F\u8D23\uFF09</li><li${_scopeId}><strong${_scopeId}>\u8D44\u6E90</strong>\uFF1A\u4F60\u611F\u5174\u8DA3\u7684\u4E8B\u60C5\uFF0C\u4E5F\u662F\u652F\u6491\u73B0\u5728 Area \u548C\u5C06\u6765 Area \u7684\u5916\u90E8\u77E5\u8BC6\u50A8\u5907</li><li${_scopeId}><strong${_scopeId}>\u5F52\u6863</strong>\uFF1A\u6C89\u5BC2\u7684\u5185\u5BB9\uFF0C\u4F46\u4E5F\u8BB8\u5BF9\u672A\u6765\u6709\u7528</li><li${_scopeId}><strong${_scopeId}>\u7F13\u5B58</strong>\uFF1A\u5FEB\u901F\u7684\u6536\u96C6\u4FE1\u606F\uFF0C\u51CF\u5C11\u5224\u65AD\u7684\u6210\u672C\uFF08\u4E2A\u4EBA\u6DFB\u52A0\uFF09</li></ul><p${_scopeId}>@George Hale \u8BF4\u9053\uFF1A\u5982\u679C\u8981\u5BF9\u4FE1\u606F\u6216\u8005\u5DE5\u4F5C\u5BC4\u6258\u957F\u4E45\uFF0C\u6709\u4E09\u70B9\u662F\u5FC5\u987B\u9075\u5FAA\u7684\uFF0C\u4E13\u6CE8\u4E00\u4E9B\u9886\u57DF\u3001\u6B65\u6B65\u4E3A\u8425\u548C\u5E7F\u6CDB\u5438\u6536\u3002\u53EF\u91CF\u5316\u610F\u5473\u7740\u660E\u786E\u7684\u9636\u6BB5\u6027\u548C\u8FB9\u754C\uFF0C\u4E0D\u53EF\u76F4\u63A5\u91CF\u5316\u7684\u9886\u57DF\u300C\u4E13\u5BB6\u300D\u662F\u504F\u4E3B\u89C2\u3001\u81EA\u6211\u611F\u53D7\u548C\u76F4\u89C9\u3002</p><p${_scopeId}>\u5176\u4E2D Goal \u662F\u8D2F\u7A7F\u59CB\u7EC8\u7684\uFF0C<strong${_scopeId}>Area \u7684\u6301\u7EED\u7CBE\u8FDB\u662F\u6700\u7EC8\u76EE\u7684</strong>\uFF0CProject \u7684\u9009\u62E9\u548C\u6267\u884C\u662F\u9636\u53EF\u91CF\u5316\u7684\u6BB5\u6027\u76EE\u6807\uFF0CResource \u662F\u652F\u6491\u4E8C\u7EA7\u7684\u300CArea\u300D\u7684\u8D44\u6E90\u3001\u8D44\u6599\uFF08\u5916\u90E8\u7684\uFF09\u3002</p><p${_scopeId}><strong${_scopeId}>\u56F4\u7ED5 Area \u7684\u7CBE\u8FDB\uFF0C\u6211\u4EEC\u9700\u8981\u4E0D\u65AD\u5438\u6536\u5916\u90E8\u7684\u6709\u6548\u4FE1\u606F\u548C\u8FDB\u884C\u9636\u6BB5\u6027\u7684\u300C\u521B\u4F5C\u300D</strong>\uFF0C\u800C\u9636\u6BB5\u6027\u7684\u521B\u4F5C\u9700\u8981\u7684\u4E3B\u9898\uFF0C\u53EF\u4EE5\u662F Area \u7684\u62C6\u5206\uFF0C\u4E5F\u53EF\u4EE5\u662F\u57FA\u4E8E Project \u7684\u62BD\u8C61\u548C\u603B\u7ED3\uFF0C\u4F46\u6765\u6E90\u4E3B\u8981\u662F\u901A\u8FC7\u5B9E\u8DF5\uFF08Project\uFF09\u548C\u7406\u8BBA\u6765\u8FDB\u884C\u7684\uFF08\u5373 Resource\u2014\u2014\u5916\u90E8\u53C2\u8003\u3001\u7ECF\u9A8C\u3001\u65B9\u6CD5\u8BBA\uFF09\u3002</p><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-3.jpg" alt="P.A.R.A"${_scopeId}></p><h1 id="\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB" tabindex="-1"${_scopeId}><strong${_scopeId}>\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB</strong> <a class="header-anchor" href="#\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>\u6B27\u6587 \xB7 \u8D39\u96EA\u5728\u300A\u5229\u606F\u7406\u8BBA\u300B\u4E2D\u4E00\u4E66\u8BF4\u9053\uFF1A\u6536\u5165\u662F\u4E00\u8FDE\u4E32\u7684\u4E8B\u4EF6\u3002\u5176\u5B9E\u5BF9\u5E94\u5230\u4EBA\u751F\u4E2D\u4E5F\u662F\u5982\u6B64\uFF0C\u6211\u4EEC\u7684\u4E00\u751F\u4E2D\u7531\u8BB8\u591A\u4E8B\u4EF6\u6784\u6210\u3002</p><p${_scopeId}>\u53EA\u662F\u5BF9\u4E8E\u5927\u591A\u6570\u4EBA\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u5176\u5B9E\u5E76\u6CA1\u6709\u4E00\u4E2A\u5173\u4E8E\u81EA\u5DF1\u751F\u6D3B\u548C\u5DE5\u4F5C\u7684\u5B8C\u6574\u7684\u9879\u76EE\u6E05\u5355\u3002\u4F46\u662F\u4ED6\u4EEC\u5374\u4F1A\u544A\u8BC9\u4F60\uFF0C\u6709\u592A\u591A\u7684\u4E8B\u60C5\u8981\u505A\u3002\u5F53\u8FD9\u6837\u5FD9\u5FD9\u788C\u788C\u591A\u5E74\u4EE5\u540E\uFF0C\u5176\u5B9E\u53D1\u73B0\u81EA\u5DF1\u53EF\u80FD\u505A\u4E86\u8BB8\u591A\u4E8B\uFF0C\u4F46\u662F\u5374\u300C\u6837\u6837\u7A00\u677E\u300D\u3002<strong${_scopeId}>\u8FD9\u5C31\u662F\u53EA\u6709\u9879\u76EE\uFF0C\u800C\u7F3A\u4E4F\u9886\u57DF\u805A\u7126\u5E26\u6765\u7684\u95EE\u9898</strong>\u3002</p><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-4.png" alt="P.A.R.A \u805A\u7126\u9879\u76EE"${_scopeId}></p><p${_scopeId}>\u521B\u5EFA\u4E00\u4E2A\u6E05\u6670\u7684\u9879\u76EE\u6E05\u5355\uFF0C\u80FD\u8BA9<strong${_scopeId}>\u4F60\u77E5\u9053\u4F60\u7684\u80FD\u529B\u8FB9\u754C\u3002\u800C\u4E00\u65E6\u754C\u5B9A\u4E86\u8FB9\u754C\uFF0C\u4F60\u5C31\u53EF\u4EE5\u6709\u610F\u8BC6\u5730\u3001\u6218\u7565\u6027\u5730\u51B3\u5B9A\u505A\u6216\u8005\u4E0D\u505A\uFF0C\u5982\u4F55\u5F25\u8865\u8FD8\u662F\u5C3D\u5FEB\u653E\u5F03\u3002</strong>\xA0\u53EA\u662F\u5927\u591A\u6570\u4EBA\u641E\u4E0D\u6E05\u695A\u9879\u76EE\u548C\u9886\u57DF\u7684\u533A\u522B\uFF0C\u770B\u770B\u56FE\u7247\u4E2D\u7684\u4F8B\u5B50\uFF0C\u8FD9\u4E2A\u5217\u8868\u4E2D\u6CA1\u6709\u4E00\u9879\u662F\u9879\u76EE\u3002\u5047\u671F\u6709\u7ED3\u675F\u7684\u65F6\u5019\u5417\uFF1F\u6709\u6CA1\u6709\u8FD9\u6837\u4E00\u4E2A\u65F6\u523B\uFF0C\u4F60\u53EF\u4EE5\u4E00\u52B3\u6C38\u9038\u5730\u628A\u300C\u6548\u7387\u300D\u4ECE\u4F60\u7684\u6E05\u5355\u4E0A\u5212\u6389\uFF1F\u4E0D\u2014\u2014\u8FD9\u4E9B\u662F\u6B63\u5728\u8FDB\u884C\u7684\u9886\u57DF\uFF0C\u800C\u4E0D\u662F\u9879\u76EE\u3002</p><p${_scopeId}>\u8FD9\u5C31\u662F\u95EE\u9898\u6240\u5728\uFF0C\u5F53\u6211\u4EEC\u5BF9\u9879\u76EE\u5B9A\u4E49\u4E0D\u6E05\u6670\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u5E26\u6765\u4EE5\u4E0B\u7684\u95EE\u9898:</p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>\u4F60\u5BF9\u81EA\u5DF1\u80FD\u627F\u8BFA\u7684\u8FB9\u754C\u4E00\u65E0\u6240\u77E5\uFF1B</strong></li><li${_scopeId}><strong${_scopeId}>\u76EE\u524D\u7684\u52AA\u529B\u548C\u957F\u671F\u76EE\u6807\u6CA1\u6709\u5173\u8054\uFF1B</strong></li><li${_scopeId}><strong${_scopeId}>\u4F60\u4E0D\u77E5\u9053\u4F60\u662F\u5426\u5728\u671D\u7740\u4F60\u7684\u76EE\u6807\u524D\u8FDB\uFF1B</strong></li><li${_scopeId}><strong${_scopeId}>\u9879\u76EE\u548C\u9886\u57DF\u9700\u8981\u5B8C\u5168\u4E0D\u540C\u7684\u601D\u7EF4\u65B9\u5F0F\u3002</strong></li></ol><h1 id="\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4" tabindex="-1"${_scopeId}><strong${_scopeId}>\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4</strong> <a class="header-anchor" href="#\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4" aria-hidden="true"${_scopeId}>#</a></h1><h1 id="_0-\u7406\u6E05\u4F60\u7684\u9886\u57DF" tabindex="-1"${_scopeId}><strong${_scopeId}>0. \u7406\u6E05\u4F60\u7684\u9886\u57DF</strong> <a class="header-anchor" href="#_0-\u7406\u6E05\u4F60\u7684\u9886\u57DF" aria-hidden="true"${_scopeId}>#</a></h1><blockquote${_scopeId}><p${_scopeId}>Set your course by the stars, not by the lights of passing ships.\u2014\u2014Omar Bradley \u6309\u7167\u661F\u661F\uFF0C\u800C\u4E0D\u662F\u6309\u7167\u8FC7\u5F80\u8239\u53EA\u7684\u706F\u5149\u8BBE\u5B9A\u822A\u5411\u3002</p></blockquote><p${_scopeId}>\u4F60\u5927\u53EF\u4E0D\u5FC5 20 \u5C81\u5C31\u7ED3\u5A5A\uFF0C30 \u5C81\u5C31\u8FDB\u5165\u4E2D\u5E74\u5371\u673A\uFF0C\u7136\u540E 40 \u5C81\u5C31\u5F00\u59CB\u4F5B\u7CFB\u517B\u8001\u3002\u4E5F\u5927\u53EF\u4E0D\u5FC5\u6309\u90E8\u5C31\u73ED\u7684\u5B8C\u6210\u5404\u79CD\u300C\u522B\u4EBA\u300D\u5BF9\u4F60\u7684\u5B89\u6392\u3002\u5BF9\u9886\u57DF\u7684\u5B89\u6392\uFF0C\u66F4\u591A\u7684\u5E94\u8BE5\u662F\u4F60\u81EA\u5DF1\u51B3\u5B9A\u4F60\u60F3\u8981\u5728\u4EC0\u4E48\u5730\u65B9\u6295\u5165\u7CBE\u529B\uFF0C\u800C\u975E\u522B\u4EBA\u7684\u671F\u76FC\u2014\u2014\u9664\u4E86\u4F60\u81EA\u5DF1\u4E4B\u5916\uFF0C\u6CA1\u6709\u4EBA\u5E94\u8BE5\u5BF9\u4F60\u8D1F\u8D23\u3002</p><p${_scopeId}><strong${_scopeId}>\u7406\u6E05\u9886\u57DF\u6700\u96BE\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u4F60\u8981\u5766\u7136\u9762\u5BF9\u81EA\u5DF1\u7684\u5185\u5FC3</strong>\u3002\u4E16\u4FD7\u7684\u529B\u91CF\u5F80\u5F80\u53EA\u80FD\u8BA9\u6211\u4EEC\u5728\u5E74\u8F7B\u7684\u5C81\u6708\u65F6\u5019\u770B\u4F3C\u4E0D\u8FF7\u832B\uFF0C\u4F46\u662F\u8FC7\u4E86\u4E2D\u5E74\u4E4B\u540E\u5C31\u53EA\u80FD\u81EA\u5DF1\u6478\u7D22\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E0A\u4E00\u4EE3\u4EBA\u8EAB\u4E0A\u770B\u5230\u4ED6\u4EEC\u9000\u4F11\u540E\u8FF7\u832B\u7684\u6837\u5B50\u2014\u2014\u5982\u5F20\u6F47\u96E8\u7684\u6587\u7AE0\u300C\u4EBA\u751F\u603B\u6709\u4E00\u523B\uFF0C\u6211\u4EEC\u4F1A\u5F00\u59CB\u601D\u8003\u6B7B\u4EA1\u300D\u4E2D\u63D0\u5230\u7684\uFF0C\u867D\u7136\u6211\u4EEC\u6700\u7EC8\u90FD\u4F1A\u6B7B\u4EA1\uFF0C\u4F46\u662F\u8DDD\u79BB\u6B7B\u4EA1\u8FD8\u662F\u6709\u5F88\u957F\u7684\u800C\u65F6\u95F4\uFF0C\u4F60\u53EF\u4EE5\u6709\u4E24\u79CD\u65B9\u5F0F\u6765\u9762\u5BF9\uFF1A<strong${_scopeId}>\u4E00\u79CD\u662F\u8BA9\u81EA\u5DF1\u548C\u4E00\u4E9B\u5B8F\u5927\u7684\u4E1C\u897F\u8054\u7CFB\u8D77\u6765\uFF0C\u6BD4\u5982\u5199\u4E00\u672C\u4E66\uFF0C\u5EFA\u7ACB\u4E00\u5BB6\u516C\u53F8\uFF0C\u7814\u7A76\u4E00\u79CD\u7F8E\u98DF\uFF0C\u6301\u7EED\u7684\u5E2E\u52A9\u4E00\u4E9B\u4EBA\uFF1B\u53E6\u4E00\u79CD\u662F\u53EA\u5173\u6CE8\u5F53\u4E0B\uFF0C\u4E0D\u8003\u8651\u8FC7\u53BB\u548C\u672A\u6765\u3002</strong></p><p${_scopeId}>\u5982\u679C\u4F60\u5E0C\u671B\u662F\u4EE5\u524D\u8005\u7684\u59FF\u6001\u6765\u9762\u5BF9\u4EBA\u751F\uFF0C\u90A3\u4E48\u60F3\u6E05\u695A\u4F60\u60F3\u7CBE\u8FDB\u7684\u9886\u57DF\uFF0C\u5C31\u975E\u5E38\u91CD\u8981\u4E86\u3002\u6211\u4EEC\u7F55\u6709\u4E00\u4E9B\u673A\u4F1A\u505C\u4E0B\u6765\u95EE\u95EE\u81EA\u5DF1\u60F3\u8981\u6210\u4E3A\u4EC0\u4E48\u6837\u7684\u4EBA\uFF08\u800C\u4E0D\u662F\u522B\u4EBA\u5E0C\u671B\u6211\u4EEC\u6210\u4E3A\u7684\u4EBA\uFF09\uFF0C\u90A3\u4E48\u53EF\u4EE5\u628A\u8FD9\u4EF6\u4E8B\u5F53\u505A\u4E00\u5207\u7684\u8D77\u70B9\u3002<strong${_scopeId}>\u4F60\u53EF\u4EE5\u50CF\u6295\u8D44\u4E00\u6837\u6765\u5BA1\u89C6\u4F60\u7684\u65F6\u95F4\uFF0C\u7136\u540E\u601D\u8003\u4F60\u7684\u6295\u8D44\u7B56\u7565</strong>\uFF08\u5173\u4E8E\u65F6\u95F4\u5176\u5B9E\u4F60\u80FD\u5229\u7528\u7684\u4E0D\u591A\uFF0C\u8BE6\u89C1\xA0<a href="https://www.notion.so/Dead-time-Live-time-b3237b1cd7fb45978f39d02f845af766" target="_blank" rel="noopener"${_scopeId}>Dead time &amp; Live time</a>\uFF09\u2014\u2014\u662F\u628A\u9E21\u86CB\u653E\u5728\u4E00\u4E2A\u7BEE\u5B50\u91CC\u8FD8\u662F\u653E\u5728\u591A\u4E2A\u7BEE\u5B50\u91CC\uFF1F\u662F\u8FFD\u6C42\u6536\u76CA\u6700\u5927\u5316\u8FD8\u662F\u4FDD\u672C\u5C31\u884C\uFF1F<strong${_scopeId}>\u8BB0\u5F97\u65F6\u95F4\u548C\u91D1\u94B1\u552F\u4E00\u4E0D\u540C\u7684\u662F\uFF0C\u6CA1\u6709\u4EFB\u4F55\u300C\u50A8\u84C4\u300D\u7684\u624B\u6BB5\u3002</strong></p><h1 id="_1-\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355" tabindex="-1"${_scopeId}><strong${_scopeId}>1. \u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355</strong> <a class="header-anchor" href="#_1-\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-5.png" alt="\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355"${_scopeId}></p><p${_scopeId}><strong${_scopeId}>\u5B9A\u4E49\u4F60\u7684\u9879\u76EE\uFF0C\u5426\u5219\u4ED6\u4EEC\u4F1A\u5B9A\u4E49\u4F60</strong>\u3002\u4F60\u4F1A\u4E0D\u65AD\u5730\u88AB\u62C9\u7740\u3001\u88AB\u63A8\u5230\u522B\u4EBA\u7684\u9879\u76EE\u4E2D\u53BB\uFF0C\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5373\u4F7F\u522B\u4EBA\u63D0\u51FA\u6765\u5E2E\u4F60\u505A\u4F60\u7684\u9879\u76EE\uFF0C\u4F60\u4E5F\u4E0D\u77E5\u9053\u8BE5\u8BA9\u4ED6\u4EEC\u4ECE\u54EA\u91CC\u4E0B\u624B\u3002</p><p${_scopeId}>\u8FD9\u610F\u5473\u7740\uFF0C\u6838\u5FC3\u95EE\u9898\u662F\u5B9A\u4E49\u4F60\u7684\u9879\u76EE\uFF0C\u800C\u5DE5\u5177\u53EA\u662F\u4E00\u4E2A\u89E3\u51B3\u624B\u6BB5\u3002<strong${_scopeId}>\u4E0E\u5176\u5BFB\u627E\u300C\u4E00\u4E2A\u4E07\u80FD\u7684\u901A\u7528\u5DE5\u5177\u300D\uFF0C\u4E0D\u5982\u5236\u5B9A\u4F60\u7684\u9879\u76EE\u5217\u8868</strong>\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u5217\u8868\u590D\u5236\u5230\u4F60\u73B0\u5728\u548C\u5C06\u6765\u4F7F\u7528\u7684\u6BCF\u4E00\u4E2A\u5DE5\u5177\u4E0A\u3002\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E4B\u95F4\u7684\u8FC7\u6E21\u5C3D\u53EF\u80FD\u7684\u65E0\u7F1D\u8854\u63A5\u3002</p><p${_scopeId}>\u8BD5\u56FE\u6839\u636E\u6BCF\u4E2A\u7A0B\u5E8F\u7684\u80FD\u529B\u6765\u9002\u5E94\u4E0D\u540C\u7684\u65B9\u6848\uFF0C\u4F1A\u8FEB\u4F7F\u5927\u8111\u5728\u6BCF\u6B21\u5207\u6362\u7A0B\u5E8F\u65F6\u90FD\u8981\u300C\u52A0\u8F7D\u300C\u5E76\u8BB0\u4F4F\u4E0D\u540C\u7684\u65B9\u6848\u3002\u8FD9\u5BF9\u5B66\u4E60\u53EF\u80FD\u66F4\u9002\u5408\u4E13\u4E1A\u4EFB\u52A1\u7684\u65B0\u5DE5\u5177\u4EA7\u751F\u4E86\u6469\u64E6\uFF0C\u6291\u5236\u4E86\u521B\u65B0\u3002</p><p${_scopeId}>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u7A0B\u5E8F\u4E2D\u7684\u9879\u76EE\u5217\u8868\u662F\u76F8\u540C\u7684\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u6269\u5C55\u5230\u5176\u4ED6\u4EFB\u4F55\u6570\u91CF\u7684\u7A0B\u5E8F\u3002\u8FD9\u6837\u65E2\u53D1\u6325\u4E86\u6BCF\u4E2A\u7A0B\u5E8F\u7684\u72EC\u7279\u529F\u80FD\uFF0C\u53C8\u4FDD\u6301\u4E86\u9879\u76EE\u5C42\u8DE8\u754C\u9762\u7684\u7EDF\u4E00\u6027\u3002P.A.R.A. \u80FD\u517C\u987E\u4E24\u8005\uFF1A<strong${_scopeId}>\u96C6\u4E2D\u5316\u7684\u4E00\u81F4\u6027\uFF0C\u5206\u6563\u5316\u7684\u9002\u5E94\u6027\u3002</strong></p><h1 id="_2-\u5EFA\u7ACB\u9879\u76EE\u6E05\u5355" tabindex="-1"${_scopeId}><strong${_scopeId}>2. \u5EFA\u7ACB\u9879\u76EE\u6E05\u5355</strong> <a class="header-anchor" href="#_2-\u5EFA\u7ACB\u9879\u76EE\u6E05\u5355" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>\u5982\u4E0A\u9762\u63D0\u5230\u7684\uFF0C\u5BF9\u4E8E\u5927\u591A\u6570\u4EBA\u6765\u8BF4\u4ED6\u4EEC\u5176\u5B9E\u5E76\u6CA1\u6709\u4E00\u4E2A\u5173\u4E8E\u81EA\u5DF1\u7684\u5B8C\u6574\u7684\u9879\u76EE\u6E05\u5355\u3002\u4F46\u662F\u4ED6\u4EEC\u5374\u4F1A\u544A\u8BC9\u4F60\uFF0C\u6709\u592A\u591A\u7684\u4E8B\u60C5\u8981\u505A\u3002\u800C\u5F53\u6E05\u5355\u5448\u73B0\u5728\u4ED6\u4EEC\u9762\u524D\u7684\u65F6\u5019\uFF0C\u4ED6\u4EEC\u4F1A\u60CA\u8BB6\u4E8E\u81EA\u5DF1\u7ADF\u7136\u540C\u65F6\u5728\u505A\u8FD9\u4E48\u591A\u4E8B\u60C5\uFF0C\u7136\u540E\u5F88\u5BB9\u6613\u9009\u62E9\u9E35\u9E1F\u7B56\u7565\u89C6\u800C\u4E0D\u89C1\u7EE7\u7EED\u524D\u884C\u3002\u4F46\u6CE8\u610F\uFF0C<strong${_scopeId}>\u6536\u96C6\u5B8C\u6574\u7684\u6E05\u5355\u662F\u83B7\u5F97\u63A7\u5236\u6743\u7684\u7B2C\u4E00\u6B65</strong>\u3002\u521B\u5EFA\u4E00\u4E2A\u6E05\u6670\u7684\u9879\u76EE\u6E05\u5355\uFF0C\u8BA9\u4F60\u6709\u4FE1\u5FC3\u5BF9\u65B0\u7684\u627F\u8BFA\u8BF4\u662F\u6216\u4E0D\u662F\u3002</p><ul${_scopeId}><li${_scopeId}><strong${_scopeId}>\u5BFC\u51FA\u6240\u6709\u60F3\u6CD5</strong></li><li${_scopeId}><strong${_scopeId}>\u4FDD\u5B58\u6709\u4EF7\u503C\u7684\u4E1C\u897F</strong></li><li${_scopeId}><strong${_scopeId}>\u6574\u7406\u548C\u5B8C\u5584\u4F60\u7684\u6E05\u5355</strong></li><li${_scopeId}><strong${_scopeId}>\u786E\u5B9A\u9884\u671F\u6210\u679C\u548C\u65F6\u95F4\u8303\u56F4</strong></li><li${_scopeId}><strong${_scopeId}>\u8FDB\u884C\u4F18\u5148\u7EA7\u6392\u5E8F\uFF0C\u5BA1\u89C6\u7ED3\u679C</strong></li></ul><h1 id="_3-\u548C\u8FC7\u53BB\u544A\u522B" tabindex="-1"${_scopeId}><strong${_scopeId}>3. \u548C\u8FC7\u53BB\u544A\u522B</strong> <a class="header-anchor" href="#_3-\u548C\u8FC7\u53BB\u544A\u522B" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}>\u5982\u679C\u4ECE\u672A\u4F7F\u7528\u8FC7 P.A.R.A \u65B9\u6CD5\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8FD9\u6837\u91CD\u65B0\u5F00\u59CB\u2014\u2014\u8FD9\u662F\u56E0\u4E3A\u4E0E\u5176\u5728\u6CE5\u5858\u91CC\u6253\u6EDA\uFF0C\u6216\u8005\u8017\u8D39\u4E86\u5DE8\u5927\u7684\u7CBE\u529B\u6574\u7406\u5C06\u6765\u4E0D\u4E00\u5B9A\u80FD\u7528\u5230\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E9B\u90FD\u4F1A\u8BA9\u4F60\u4E27\u5931\u5F00\u59CB\u7684\u5951\u673A\u3002\u6240\u4EE5\u4E0D\u5982\u548C\u4ED6\u4EEC\u544A\u522B\uFF0C\u5C06\u4ED6\u4EEC\u675F\u4E4B\u9AD8\u9601\uFF0C\u5F53\u9700\u8981\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u641C\u7D22\u8FD8\u662F\u80FD\u627E\u5230\u4ED6\u4EEC\u2014\u2014\xA0<strong${_scopeId}>\u91CD\u8981\u7684\u4E8B\u60C5\u4E0D\u4F1A\u5FD8\u8BB0\uFF0C\u5FD8\u8BB0\u7684\u4E8B\u60C5\u90FD\u4E0D\u91CD\u8981\u3002</strong></p><ol${_scopeId}><li${_scopeId}>\u5C06\u73B0\u6709\u7684\u6587\u4EF6\u79FB\u52A8\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u540D\u4E3A\u300C\u5F52\u6863 [\u65E5\u671F]\u300D\u7684\u6587\u4EF6\u5939\u4E2D\uFF08\u5E26\u4ECA\u5929\u7684\u65E5\u671F\uFF09</li><li${_scopeId}>\u4E3A\u4F60\u5F53\u524D\u7684\u6BCF\u4E2A\u9879\u76EE\u521B\u5EFA\u6587\u4EF6\u5939\u3002</li><li${_scopeId}>\u5C06\u6240\u6709\u9879\u76EE\u6587\u4EF6\u5939\u79FB\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u540D\u4E3A\u300C\u9879\u76EE\u300D\u3002</li><li${_scopeId}>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u300C\u5F52\u6863\u300D\u6587\u4EF6\u5939\uFF0C\u5E76\u5C06\u73B0\u6709\u7684\u6587\u4EF6\u5939\u79FB\u5165\u5176\u4E2D\u3002</li><li${_scopeId}>\u4EC5\u5728\u9700\u8981\u65F6\u624D\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\u5939\u3002</li></ol><h1 id="_4-\u65E5\u5E38\u7EF4\u62A4" tabindex="-1"${_scopeId}><strong${_scopeId}>4. \u65E5\u5E38\u7EF4\u62A4</strong> <a class="header-anchor" href="#_4-\u65E5\u5E38\u7EF4\u62A4" aria-hidden="true"${_scopeId}>#</a></h1><p${_scopeId}><img src="//cdn.3333120.com/article/para/para-6.jpg" alt="\u65E5\u5E38\u7EF4\u62A4"${_scopeId}></p><h3 id="_4-1-\u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C" tabindex="-1"${_scopeId}><strong${_scopeId}>4.1 \u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C</strong> <a class="header-anchor" href="#_4-1-\u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>P.A.R.A. \u4E0E\u5176\u4ED6\u7EC4\u7EC7\u65B9\u5F0F\u7684\u4E00\u4E2A\u5173\u952E\u533A\u522B\u662F\uFF0C<strong${_scopeId}>\u5B83\u662F\u4E00\u4E2A\u52A8\u6001\u7684\u7CFB\u7EDF</strong>\u3002<strong${_scopeId}>\u5B83\u7684\u529B\u91CF\u4E0D\u662F\u6765\u81EA\u4E8E\u6DF1\u5C42\u6B21\u7684\u300C\u77E5\u8BC6\u300D\u50A8\u5907</strong>\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u77E5\u8BC6\u9700\u8981\u9075\u5FAA\u4E25\u683C\u7684\u89C4\u5219\u548C\u60EF\u4F8B\uFF0C<strong${_scopeId}>\u800C\u662F\u6765\u81EA\u4E8E\u56DB\u4E2A\u7C7B\u522B\u4E4B\u95F4\u4E0D\u65AD\u53D8\u5316\u7684\u4FE1\u606F\u6D41\u52A8\u3002\u9879\u76EE\u7684\u5FEB\u901F\u66F4\u66FF\u4E0D\u662F\u4E00\u4E2A\u9700\u8981\u7BA1\u7406\u7684\u98CE\u9669\uFF0C\u800C\u662F\u6211\u4EEC\u7EF4\u6301\u8FD9\u4E2A\u7CFB\u7EDF\u7684\u5B9E\u9645\u673A\u5236\u3002</strong></p><p${_scopeId}>\u5BF9\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684\u4FE1\u606F\uFF08\u65E0\u8BBA\u662F\u4E00\u884C\u6587\u5B57\u3001\u4E00\u5F20\u56FE\u7247\u3001\u4E00\u4E2A\u5B8C\u6574\u7684\u7B14\u8BB0\uFF0C\u8FD8\u662F\u6574\u4E2A\u7B14\u8BB0\u672C\uFF09\uFF0C\u90FD\u6709\u5355\u72EC\u7684\u7528\u4F8B\uFF0C\u53EF\u4EE5\u5728\u56DB\u4E2A\u4E3B\u8981\u7C7B\u522B\u4E2D\u7684\u4EFB\u610F\u4E24\u4E2A\u7C7B\u522B\u4E4B\u95F4\u6D41\u52A8\u3002</p><p${_scopeId}>\u7531\u4E8E\u4EBA\u7684\u601D\u7EF4\u65B9\u5F0F\u662F\u7F51\u72B6\u7684\uFF0C\u800C\u4E0D\u662F\u91D1\u5B57\u5854\u72B6\u7684\uFF0C\u6240\u4EE5\u8981\u907F\u514D\u521B\u5EFA\u4E00\u5927\u5806\u53EF\u80FD\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u4F7F\u7528\u7684\u7A7A\u7684\u7B14\u8BB0\u672C\u6216\u6587\u4EF6\u5939\uFF0C\u8FD9\u53EA\u4F1A\u8BA9\u4F60\u7684\u5DE5\u4F5C\u7A7A\u95F4\u53D8\u5F97\u62E5\u6324\u4E0D\u582A\u3002</p><p${_scopeId}><strong${_scopeId}>\u51E0\u70B9\u6CE8\u610F\u4E8B\u9879\uFF1A</strong></p><ul${_scopeId}><li${_scopeId}>\u9879\u76EE\u548C\u9886\u57DF\u4E4B\u95F4\u4F1A\u7ECF\u5E38\u53D8\u5316\uFF0C\u6BD4\u5982\u67D0\u4E2A\u4EA7\u54C1\u529F\u80FD\u4E0A\u7EBF\u540E\u6548\u679C\u4E0D\u9519\uFF0C\u6210\u4E3A\u4E86\u9700\u8981\u957F\u671F\u7EF4\u62A4\u7684\u7CFB\u7EDF</li><li${_scopeId}>\u9886\u57DF\u548C\u8D44\u6E90\u4E4B\u95F4\u4E5F\u4F1A\u53D8\u5316\uFF0C\u6BD4\u5982\u628A\u67D0\u4E2A\u5174\u8DA3\u7231\u597D\u5347\u7EA7\u4E3A\u526F\u4E1A</li><li${_scopeId}>\u4E0D\u8981\u541D\u60DC\u5F52\u6863\uFF0C\u4E5F\u4E0D\u8981\u8BA4\u4E3A\u5F52\u6863\u662F\u5783\u573E\u7BB1\u3002\u8BB8\u591A\u65F6\u5019\u5F53\u524D\u9879\u76EE\u7684\u603B\u7ED3\uFF0C\u4F1A\u5BF9\u672A\u6765\u7684\u5185\u5BB9\u6709\u7528\uFF0C\u8BB0\u5F97\u53BB\u5F52\u6863\u4E2D\u5BFB\u627E\u8FC7\u53BB\u7684\u667A\u6167\uFF0C\u4E0D\u8981\u91CD\u65B0\u53D1\u660E\u8F6E\u5B50\u3002\uFFFC</li></ul><h3 id="_4-2-\u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF" tabindex="-1"${_scopeId}><strong${_scopeId}>4.2 \u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF</strong> <a class="header-anchor" href="#_4-2-\u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u8FD9\u5957\u7BA1\u7406\u7CFB\u7EDF\u5728\u8BBE\u8BA1\u4E4B\u521D\u5C31\u662F\u5E0C\u671B\u80FD\u964D\u4F4E\u4F7F\u7528\u6210\u672C\uFF0C\u65E0\u9700\u989D\u5916\u6295\u5165\u592A\u591A\u7684\u7CBE\u529B\u800C\u8BBE\u8BA1\u7684\u3002<strong${_scopeId}>\u6240\u4EE5\u4E00\u65E6\u4F60\u9700\u8981\u5355\u72EC\u62BD\u53D6\u5927\u91CF\u65F6\u95F4\u6765\u7EF4\u62A4\uFF0C\u5219\u5C31\u610F\u5473\u7740\u8FDD\u80CC\u4E86\u8FD9\u5957\u7CFB\u7EDF\u7684\u521D\u8877</strong>\u3002\u4E4B\u6240\u4EE5\u8FD9\u4E48\u8BBE\u8BA1\uFF0C<strong${_scopeId}>\u56E0\u4E3A\u300C\u6574\u7406\u4E1C\u897F\u300D\u662F\u4EBA\u4EEC\u6C38\u8FDC\u4E0D\u4F1A\u53BB\u505A\u7684\u4E8B\u60C5\u4E4B\u4E00</strong>\u3002\u539F\u56E0\u5F88\u7B80\u5355\uFF1A</p><p${_scopeId}>\u5B83\u4EE3\u8868\u7740\u8017\u65F6\u7684\u95F4\u63A5\u5DE5\u4F5C\uFF0C\u6CA1\u6709\u660E\u663E\u7684\u56DE\u62A5\u6216\u5F71\u54CD\u3002\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\uFF0C\u4F60\u6CA1\u6709\u65F6\u95F4\u53BB\u300C\u505C\u4E0B\u6765\u6574\u7406\u4E1C\u897F\u300D\uFF0C\u56E0\u4E3A\u4F60\u9700\u8981\u6BCF\u4E00\u5206\u949F\u7684\u7A7A\u95F2\u65F6\u95F4\u53BB\u8D76\u5DE5\u671F\u3002\u4F60\u4E5F\u4E0D\u4F1A\u5728\u9879\u76EE\u7ED3\u675F\u540E\u518D\u53BB\u505A\uFF0C\u56E0\u4E3A\u8981\u53BB\u505A\u4E0B\u4E00\u4E2A\u9879\u76EE\u4E86\u3002\u5728\u4F60\u7684\u90E8\u95E8\u9884\u7B97\u4E2D\uFF0C\u6CA1\u6709\u4E13\u95E8\u7684\u9879\u76EE\u7528\u4E8E\u300C\u6574\u7406\u5DE5\u4F5C\u300D\u3002</p><p${_scopeId}>\u56E0\u6B64\uFF0C\u8FD9\u79CD\u5DE5\u4F5C\u4E00\u62D6\u518D\u62D6\uFF0C\u76F4\u5230\u8FBE\u5230\u4E00\u4E2A\u5D29\u6E83\u70B9\uFF0C\u6240\u6709\u7684\u7CFB\u7EDF\u5F00\u59CB\u5D29\u6E83\u3002\u7136\u540E\uFF0C\u8FD9\u79CD\u6545\u969C\u88AB\u5F52\u548E\u4E8E\u300C\u7F3A\u4E4F\u751F\u4EA7\u529B\u300D\u3002</p><p${_scopeId}>\u76F8\u53CD\uFF0C\u5F53\u4F60\u5DF2\u7ECF\u5728\u6D4F\u89C8\u4F60\u7684\u7B14\u8BB0\u7684\u65F6\u5019\uFF0C\u5229\u7528\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u628A\u4F60\u6CE8\u610F\u5230\u7684\u4E00\u4E2A\u7B14\u8BB0\u8F6C\u79FB\u5230\u5176\u4ED6\u5730\u65B9\u4F1A\u66F4\u5408\u9002\u3002<strong${_scopeId}>\u6211\u4EEC\u5176\u5B9E\u6BCF\u5929\u90FD\u5728\u8FD9\u4E9B\u5DE5\u5177\u4E0A\u82B1\u8D39\u4E0D\u5C11\u65F6\u95F4\uFF0C\u8FD9\u6837\u7684\u673A\u4F1A\u6BD4\u4F60\u53EF\u80FD\u610F\u8BC6\u5230\u7684\u8FD8\u8981\u591A</strong>\u3002\u6240\u4EE5\u5F53\u65F6\u673A\u51FA\u73B0\u65F6\uFF0C\u5E94\u62E9\u673A\u8FDB\u884C\u7EC4\u7EC7\u548C\u6574\u7406\u5DE5\u4F5C\u3002\u4F60\u53EF\u4EE5\u79F0\u8FD9\u79CD\u65B9\u6CD5\u79F0\u4E3A\u300C\u53CA\u65F6\u7EC4\u7EC7\u300D\uFF08Just-In-Time Organization\uFF09\u3002\u8FD9\u770B\u8D77\u6765\u5C31\u50CF\u5728\u4F60\u7684\u7EC4\u7EC7\u7ED3\u6784\u4E2D\uFF0C\u968F\u7740\u4F60\u7684\u53D1\u5C55\uFF0C<strong${_scopeId}>\u5728\u4F60\u7684\u7EC4\u7EC7\u7ED3\u6784\u4E2D\u8FDB\u884C\u5C0F\u6279\u91CF\u7684\u6539\u53D8\uFF0C\u800C\u4E0D\u662F\u5927\u6279\u91CF\u7684\u6539\u53D8\uFF0C\u66F4\u4E0D\u662F\u4F5C\u4E3A\u4E00\u79CD\u4E13\u95E8\u7684\u52AA\u529B</strong>\u3002</p><p${_scopeId}>\u4E0D\u7528\u62C5\u5FC3\u628A\u7B14\u8BB0\u4ECE\u4E00\u4E2A\u7C7B\u522B\u6D41\u8F6C\u53E6\u4E00\u4E2A\u7C7B\u522B\u662F\u51FA\u73B0\u4EC0\u4E48\u9519\u8BEF\u3002\u6CA1\u6709\u300C\u5B8C\u6210\u300D\uFF0C\u56E0\u6B64\u4F60\u4E0D\u5FC5\u62C5\u5FC3\u300C\u5B8C\u6210\u300D\u662F\u4EC0\u4E48\u6837\u5B50\u7684\u3002\u4F60\u603B\u662F\u6709\u641C\u7D22\u4F5C\u4E3A\u5907\u4EFD\u5DE5\u5177\uFF0C\u65E0\u8BBA\u4F60\u6F0F\u6389\u4E86\u4EC0\u4E48\uFF0C\u6216\u8005\u653E\u9519\u4E86\u4EC0\u4E48\uFF0C\u90FD\u53EF\u4EE5\u627E\u5230\u3002\u4E00\u65E6\u4F60\u5F00\u59CB\u6709\u89C4\u5F8B\u5730\u4F7F\u7528\u8FD9\u5957\u7CFB\u7EDF\uFF0C\u4F60\u5C31\u4F1A\u9891\u7E41\u5730\u4E0E\u8FD9 4 \u4E2A\u5206\u7C7B\u8FDB\u884C\u4E92\u52A8\uFF0C\u4F60\u5C31\u4F1A\u5F00\u59CB\u6CE8\u610F\u5230\u5404\u79CD\u5C0F\u7684\u4F18\u5316\u548C\u53D8\u5316\uFF0C\u8BA9\u4FE1\u606F\u66F4\u5BB9\u6613\u88AB\u672A\u6765\u7684\u81EA\u5DF1\u53D1\u73B0\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u5148\u4ECB\u7ECD\u4E00\u4E2A\u8BCD\u6C47\u2014\u2014\u300CInfovores \xB7 \u98DF\u77E5\u52A8\u7269\u300D"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u800C\u5F53\u9047\u5230 Notion \u4E4B\u540E\u53D1\u73B0\u4F20\u7EDF\u7684\u6587\u4EF6\u5939\u601D\u8DEF + tag \u7684\u601D\u7EF4\u65B9\u5F0F\uFF0C\u5DF2\u7ECF\u4E0D\u5408\u9002\u8FD9\u79CD\u66F4\u52A0\u7075\u6D3B\u5F3A\u5927\u7684\u601D\u7EF4\u5DE5\u5177\u4E86\u3002\u5982\u4F55\u4FDD\u8BC1\u81EA\u5DF1\u6536\u96C6\u7684\u4FE1\u606F\u548C\u521B\u9020\u7684\u5185\u5BB9\uFF0C\u66F4\u597D\u5730\u88AB\u7EC4\u7EC7\u548C\u7BA1\u7406\uFF0C\u4E0D\u81F3\u4E8E\u6CA6\u4E3A\u4E00\u4E2A\u5783\u573E\u5806\u4E4B\u540E\u6362\u53E6\u4E00\u4E2A\u5DE5\u5177\uFF1F\u8FD9\u4E5F\u6566\u4FC3\u6211\u53BB\u5BFB\u627E\u65B0\u7684\u7BA1\u7406\u65B9\u6CD5\uFF0C\u6070\u597D\u9047\u5230\u4E86 P.A.R.A \u4FE1\u606F\u7EC4\u7EC7\u65B9\u6CD5\uFF0C"),
                  vue.createVNode("strong", null, "\u6216\u8BB8\u4ED6\u4E0D\u662F\u6700\u597D\u6700\u5B8C\u7F8E\u7684\uFF0C\u4F46\u81F3\u5C11\u6BD4\u6CA1\u6709\u6846\u67B6\u65F6\u6765\u8BF4\uFF0C\u5DF2\u7ECF\u662F\u4E00\u4E2A\u8D28\u7684\u98DE\u8DC3\u3002")
                ]),
                vue.createVNode("p", null, "\u4F46\u5728\u5F00\u59CB\u5177\u4F53\u4E86\u89E3 P.A.R.A \u4E4B\u524D\uFF0C@George Hale \u5728\u300C\u4EA7\u54C1\u6C89\u601D\u5F55\u4FF1\u4E50\u90E8\u300D\u91CC\u5206\u4EAB\u7684\uFF0C\u5BF9\u6B64\u7C7B\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u548C\u65B9\u6CD5\u7684\u89C2\u70B9\u5F88\u503C\u5F97\u5148\u4E86\u89E3\u4E00\u4E0B\uFF0C\u56E0\u4E3A\u8FD9\u6837\u624D\u80FD\u8BA9\u6211\u4EEC\u660E\u767D\u505A\u8FD9\u4E9B\u4E8B\u60C5\u7684\u521D\u8877\u548C\u5FC5\u8981\u7684\u6761\u4EF6\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("strong", null, "\u4E8B\u52A1\u548C\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u4E0E\u65B9\u6CD5\uFF08\u4E0B\u7EDF\u79F0\u300C\u5DE5\u5177\u300D\uFF09\uFF0C\u9700\u8981\u641E\u660E\u767D\u4E24\u4E2A\u95EE\u9898\uFF0C")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u8BE5\u5DE5\u5177\u7684\u7236\u7EA7\u522B\u6216\u5143\u7EA7\u522B\u5DE5\u5177\u7C7B\u578B\u7684\u6838\u5FC3\u76EE\u7684\u4E0E\u539F\u5219\uFF08\u5982 Roam Research \u6E90\u81EA Zettelkasten\uFF0C\u4E5F\u5C31\u662F slip-box\uFF09"),
                  vue.createVNode("li", null, "\u4E8C\u662F\u8BE5\u5DE5\u5177\u8BBE\u8BA1\u521D\u8877\u53D1\u751F\u6216\u8005\u9002\u5408\u7684\u573A\u666F\uFF08\u5982 GTD\u3001GIST\u3001OKR \u7B49\uFF09")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u7B2C\u4E8C\u70B9\u4F1A\u5BF9\u7B2C\u4E00\u70B9\u8FDB\u884C\u7EA6\u675F\u548C\u6709\u6240\u4FA7\u91CD\uFF0C\u867D\u7136\u5404\u79CD\u7406\u8BBA\u7684\u9F13\u5439\u8005\u90FD\u5728\u8BD5\u56FE\u8BA9\u8FD9\u4E9B\u7406\u8BBA\u53D8\u5F97\u901A\u7528\uFF0C\u4F46\u662F\u4E0D\u53EF\u5426\u8BA4\u4EBA\u548C\u4EBA\u3001\u4F01\u4E1A\u548C\u4F01\u4E1A\u4E4B\u95F4\u7684\u5DEE\u5F02\u662F\u5DE8\u5927\u7684\u3002"),
                  vue.createVNode("strong", null, "\u6240\u4EE5\u6BCF\u4E2A\u5DE5\u5177\u9002\u5408\u7684\u573A\u666F\u90FD\u4F1A\u9700\u8981\u4E0D\u540C\u7684\u76EE\u7684\u548C\u914D\u5957\u8BBE\u65BD\u624D\u80FD\u826F\u597D\u8FD0\u884C\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u663E\u7136\u6240\u6709\u7684\u4E8B\u52A1\u548C\u4FE1\u606F\u7BA1\u7406\u90FD\u662F\u4E3A\u4E86\u91C7\u7528\u81EA\u7136\u6216\u975E\u81EA\u7136\u5E94\u5BF9\u7684\u65B9\u5F0F\uFF0C\u534F\u52A9\u8BB0\u5FC6\u3001\u6309\u90E8\u5C31\u73ED\u5904\u7406\u4E8B\u52A1\u3001\u6E05\u7A7A\u5927\u8111\u4E13\u6CE8\u773C\u524D\u3001\u76EE\u6807\u5BFC\u5411\u3001\u53EF\u8861\u91CF\u53EF\u5EF6\u7EED\u7B49\uFF0C\u5728 slip-box \u7684\u601D\u8DEF\u4E0B\uFF0C"),
                  vue.createVNode("strong", null, "\u77E5\u8BC6\u7BA1\u7406\u3001\u6301\u7EED\u7CBE\u8FDB\u662F\u4FA7\u91CD\u70B9"),
                  vue.createTextVNode("\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u4E0B\u9762\u662F\u6839\u636E\u4E2A\u4EBA\u7684\u7406\u89E3\u548C\u5B9E\u6218\uFF0C\u7ED3\u5408 Notion \u4EE5\u53CA\u56FD\u5185\u7684\u73AF\u5883\uFF0C"),
                  vue.createVNode("strong", null, "\u4EC5\u4FDD\u7559\u4E86\u4F5C\u8005\u6700\u521D\u7684\u601D\u60F3\u67B6\u6784\uFF0C\u5BF9\u5185\u5BB9\u7ED3\u6784\u6709\u6BD4\u8F83\u5927\u7684\u8C03\u6574"),
                  vue.createTextVNode("\uFF0C\u5E76\u8865\u5145\u4E86\u4E2A\u4EBA\u4F7F\u7528\u4E2D\u53D1\u73B0\u7684\u95EE\u9898\u2014\u2014\xA0"),
                  vue.createVNode("strong", null, "\u56E0\u4E3A P.A.R.A \u53EA\u662F\u4E00\u79CD\u6307\u5BFC\u601D\u60F3\u800C\u975E\u64CD\u4F5C\u6307\u5357\uFF0C\u6240\u4EE5\u672C\u6587\u6709\u5927\u91CF\u5185\u5BB9\u6D89\u53CA\u7406\u5FF5\u7684\u8BA8\u8BBA\uFF0C\u5177\u4F53\u7684\u64CD\u4F5C\u90E8\u5206\u4F1A\u76F8\u5BF9\u7B80\u7565\u2014\u2014"),
                  vue.createTextVNode("\xA0\u8BB8\u591A\u65F6\u5019\u6211\u4EEC\u5F88\u5BB9\u6613\u5306\u5FD9\u4E0A\u9A6C\u4E00\u4E2A\u5DE5\u5177\uFF0C\u800C\u5FFD\u89C6\u4E86\u662F\u5426\u5408\u9002\u3002\u6240\u4EE5\u7406\u89E3\u5DE5\u5177\u80CC\u540E\u7684\u7406\u5FF5\uFF0C\u6839\u636E\u7406\u5FF5\u6765\u521B\u9020\u81EA\u5DF1\u7684\u65B9\u6CD5\uFF0C\u8FDC\u6BD4\u77E5\u9053\u522B\u4EBA\u5177\u4F53\u7684\u64CD\u4F5C\u66F4\u91CD\u8981\u3002")
                ]),
                vue.createVNode("h1", {
                  id: "p-a-r-a-\u7684\u8D77\u6E90",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "P.A.R.A \u7684\u8D77\u6E90"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#p-a-r-a-\u7684\u8D77\u6E90",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-1.jpg",
                    alt: "P.A.R.A \u8D77\u6E90"
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("P.A.R.A \u7684\u4F5C\u8005\u662F\xA0"),
                  vue.createVNode("a", {
                    href: "https://fortelabs.co/about-forte-labs",
                    target: "_blank",
                    rel: "noopener"
                  }, "Tiago Forte"),
                  vue.createTextVNode("\uFF0C\u662F\u4E16\u754C\u4E0A\u6700\u8457\u540D\u7684\u751F\u4EA7\u529B\u4E13\u5BB6\u4E4B\u4E00\u3002\u4ED6\u901A\u8FC7\u81EA\u5DF1\u7684\u9879\u76EE\u5728\u5168\u4E16\u754C\u6559\u80B2\u4E86 2 \u4E07\u591A\u4EBA\uFF0C\u5E76\u64B0\u5199\u548C\u6F14\u8BB2\u6280\u672F\u5982\u4F55\u5E2E\u52A9\u77E5\u8BC6\u5DE5\u4F5C\u8005\u5F7B\u5E95\u6539\u53D8\u4ED6\u4EEC\u7684\u4E2A\u4EBA\u6548\u7387\u3002Tiago \u7684\u5728\u7EBF\u8BFE\u7A0B\u300A"),
                  vue.createVNode("a", {
                    href: "https://www.buildingasecondbrain.com/",
                    target: "_blank",
                    rel: "noopener"
                  }, "\u6253\u9020\u7B2C\u4E8C\u5927\u8111\uFF08Building a Second Brain\uFF09"),
                  vue.createTextVNode("\u300B\u5DF2\u7ECF\u6709\u6765\u81EA 70 \u591A\u4E2A\u56FD\u5BB6\u7684 1000 \u591A\u540D\u5B66\u751F\u53C2\u52A0\u4E86\u8BE5\u8BFE\u7A0B\u3002")
                ]),
                vue.createVNode("p", null, "\u65F6\u81F3\u4ECA\u65E5\uFF0C\u4FE1\u606F\u7BA1\u7406\u8F6F\u4EF6\u8D8A\u6765\u8D8A\u591A\uFF0C\u4FE1\u606F\u7BA1\u7406\u65B9\u6CD5\u4E5F\u8D8A\u6765\u8D8A\u591A\uFF0C\u4F46\u53CC\u65B9\u5374\u5F88\u5C11\u662F\u4E00\u7FA4\u4EBA\u53D1\u660E\u7684\u3002\u60F3\u8C61\u4E00\u4E0B\u5B8C\u7F8E\u7684\u4FE1\u606F\u7EC4\u7EC7\u7CFB\u7EDF\u3002\u5B83\u80FD\u6709\u6548\u7684\u652F\u6301\u4F60\u7684\u5F53\u4E0B\u548C\u672A\u6765\u7684\u5DE5\u4F5C\uFF0C\u544A\u8BC9\u4F60\u4FE1\u606F\u90FD\u88AB\u653E\u5728\u4E86\u54EA\u91CC\uFF0C\u4EE5\u53CA\u5F53\u4F60\u9700\u8981\u7684\u65F6\u5019\u5C31\u80FD\u5FEB\u901F\u627E\u5230\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u88AB\u5DE5\u5177\u6240\u675F\u7F1A\u3002"),
                vue.createVNode("p", null, "\u6240\u4EE5\u8FD9\u4E2A\u7CFB\u7EDF\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u901A\u7528\u7684\uFF08universal\uFF09"),
                    vue.createTextVNode("\uFF1A\u5305\u542B\u6765\u81EA\u4EFB\u4F55\u6765\u6E90\u7684\u4EFB\u4F55\u79CD\u7C7B\u7684\u4FE1\u606F\uFF0C\u5E76\u4E14\u80FD\u8DE8\u5E73\u53F0\u517C\u5BB9\u4E0D\u540C\u65F6\u4EE3\u7684\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u7075\u6D3B\u7684\uFF08flexible\uFF09"),
                    vue.createTextVNode("\uFF1A\u80FD\u591F\u4E0E\u4F60\u4E4B\u524D\u7684\u4EFB\u4F55\u9879\u76EE\u6216\u6D3B\u52A8\u6240\u517C\u5BB9\uFF0C\u5E76\u4E14\u80FD\u517C\u987E\u672A\u6765\u7684\u62D3\u5C55\u6027")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u7B80\u5355\u7684\uFF08simple\uFF09"),
                    vue.createTextVNode("\uFF1A\xA0\u4E0D\u9700\u8981\u4EFB\u4F55\u8017\u65F6\u7684\u7EF4\u62A4\u3001\u7F16\u76EE\u3001\u6807\u8BB0\u6216\u91CD\u7EC4\uFF0C\u53EA\u9700\u6700\u4F4E\u9650\u5EA6\u7684\u7EF4\u62A4\u3001\u7F16\u76EE\u3001\u6807\u8BB0\u6216\u91CD\u7EC4\u5373\u53EF\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u53EF\u64CD\u4F5C\uFF08actionable\uFF09"),
                    vue.createTextVNode("\uFF1A\u4E0E\u4EFB\u52A1\u7BA1\u7406\u548C\u9879\u76EE\u7BA1\u7406\u65B9\u6CD5\u7684\u65E0\u7F1D\u96C6\u6210\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u7ED3\u679C\u5BFC\u5411\uFF08outcome-oriented\uFF09"),
                    vue.createTextVNode("\uFF1A\u6784\u5EFA\u4FE1\u606F\u7684\u7ED3\u6784\uFF0C\u4EE5\u4FBF\u80FD\u4EA4\u4ED8\u6709\u4EF7\u503C\u5DE5\u4F5C\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u6A21\u5757\u5316\uFF08modular\uFF09"),
                    vue.createTextVNode("\uFF1A\u6839\u636E\u5F53\u524D\u4EFB\u52A1\u7684\u9700\u8981\uFF0C\u5141\u8BB8\u9690\u85CF\u6216\u663E\u793A\u4E0D\u540C\u7EA7\u522B\u7684\u7EC6\u8282\u3002")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u673A\u52A8\u6027\u5F3A\uFF08opportunistic\uFF09"),
                    vue.createTextVNode("\uFF1A\u4ECE\u597D\u7684\u65B9\u9762\u6765\u8BF4\uFF0C\u662F\u5229\u7528\u5DF2\u7ECF\u5B8C\u6210\u7684\u5DE5\u4F5C\uFF0C\u800C\u4E0D\u662F\u9700\u8981\u4E13\u95E8\u7684\u7BA1\u7406\u65F6\u95F4\u3002")
                  ])
                ]),
                vue.createVNode("h1", {
                  id: "p-a-r-a-\u7684\u542B\u4E49\u4E0E\u5B9A\u4E49",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "P.A.R.A \u7684\u542B\u4E49\u4E0E\u5B9A\u4E49"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#p-a-r-a-\u7684\u542B\u4E49\u4E0E\u5B9A\u4E49",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-2.png",
                    alt: "P.A.R.A \u5B9A\u4E49"
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("P.A.R.A. \u662F\u4E00\u79CD\u7EC4\u7EC7\u4FE1\u606F\u7684\u601D\u8DEF\uFF0C\u4F46\u5E76\u4E0D\u662F\u67D0\u79CD\u5177\u4F53\u7684\u89C4\u8303\u548C\u6559\u6761\uFF0C\u5176\u6838\u5FC3\u662F\u300C"),
                  vue.createVNode("strong", null, "\u6839\u636E\u4FE1\u606F\u7684\u53EF\u64CD\u4F5C\u6027\u7A0B\u5EA6\uFF0C\u5BF9\u4FE1\u606F\u8FDB\u884C\u805A\u7126\u6216\u8F6C\u79FB"),
                  vue.createTextVNode("\u300D\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("P.A.R.A. \u662F\xA0"),
                  vue.createVNode("strong", null, "\u9879\u76EE\uFF08Project\uFF09"),
                  vue.createTextVNode("\u3001"),
                  vue.createVNode("strong", null, "\u9886\u57DF\uFF08Area\uFF09"),
                  vue.createTextVNode("\u3001"),
                  vue.createVNode("strong", null, "\u8D44\u6E90\uFF08Resource\uFF09"),
                  vue.createTextVNode("\u3001 "),
                  vue.createVNode("strong", null, "\u6863\u6848\uFF08Archive\uFF09"),
                  vue.createTextVNode(" \u7684\u7B80\u79F0\u3002\u8FD9\u56DB\u4E2A\u4E00\u7EA7\u5206\u7C7B\u6DB5\u76D6\u4E86\u4F60\u5728\u5DE5\u4F5C\u548C\u751F\u6D3B\u4E2D\u53EF\u80FD\u9047\u5230\u7684\u6240\u6709\u7C7B\u578B\u7684\u4FE1\u606F\u3002\u4E0B\u9762\u662F\u6BCF\u4E2A\u6A21\u5757\u7684\u5B9A\u4E49\uFF0C\u4E5F\u662F\u8FD9\u5957\u65B9\u6CD5\u8BBA\u7684\u6838\u5FC3\u3002")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u9879\u76EE"),
                    vue.createTextVNode("\uFF1A\u5177\u6709\u660E\u786E\u7684\u76EE\u6807\u4EE5\u53CA\u65F6\u95F4\u8303\u56F4\uFF0C\u662F\u6700\u5C0F\u6267\u884C\u5355\u4F4D")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u9886\u57DF"),
                    vue.createTextVNode("\uFF1A\u4F60\u65E5\u5E38\u9700\u8981\u7CBE\u8FDB\u7684\u9886\u57DF\uFF08\u6240\u4EE5\u4F60\u9700\u8981\u4E3A\u6B64\u8D1F\u8D23\uFF09")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u8D44\u6E90"),
                    vue.createTextVNode("\uFF1A\u4F60\u611F\u5174\u8DA3\u7684\u4E8B\u60C5\uFF0C\u4E5F\u662F\u652F\u6491\u73B0\u5728 Area \u548C\u5C06\u6765 Area \u7684\u5916\u90E8\u77E5\u8BC6\u50A8\u5907")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u5F52\u6863"),
                    vue.createTextVNode("\uFF1A\u6C89\u5BC2\u7684\u5185\u5BB9\uFF0C\u4F46\u4E5F\u8BB8\u5BF9\u672A\u6765\u6709\u7528")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u7F13\u5B58"),
                    vue.createTextVNode("\uFF1A\u5FEB\u901F\u7684\u6536\u96C6\u4FE1\u606F\uFF0C\u51CF\u5C11\u5224\u65AD\u7684\u6210\u672C\uFF08\u4E2A\u4EBA\u6DFB\u52A0\uFF09")
                  ])
                ]),
                vue.createVNode("p", null, "@George Hale \u8BF4\u9053\uFF1A\u5982\u679C\u8981\u5BF9\u4FE1\u606F\u6216\u8005\u5DE5\u4F5C\u5BC4\u6258\u957F\u4E45\uFF0C\u6709\u4E09\u70B9\u662F\u5FC5\u987B\u9075\u5FAA\u7684\uFF0C\u4E13\u6CE8\u4E00\u4E9B\u9886\u57DF\u3001\u6B65\u6B65\u4E3A\u8425\u548C\u5E7F\u6CDB\u5438\u6536\u3002\u53EF\u91CF\u5316\u610F\u5473\u7740\u660E\u786E\u7684\u9636\u6BB5\u6027\u548C\u8FB9\u754C\uFF0C\u4E0D\u53EF\u76F4\u63A5\u91CF\u5316\u7684\u9886\u57DF\u300C\u4E13\u5BB6\u300D\u662F\u504F\u4E3B\u89C2\u3001\u81EA\u6211\u611F\u53D7\u548C\u76F4\u89C9\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5176\u4E2D Goal \u662F\u8D2F\u7A7F\u59CB\u7EC8\u7684\uFF0C"),
                  vue.createVNode("strong", null, "Area \u7684\u6301\u7EED\u7CBE\u8FDB\u662F\u6700\u7EC8\u76EE\u7684"),
                  vue.createTextVNode("\uFF0CProject \u7684\u9009\u62E9\u548C\u6267\u884C\u662F\u9636\u53EF\u91CF\u5316\u7684\u6BB5\u6027\u76EE\u6807\uFF0CResource \u662F\u652F\u6491\u4E8C\u7EA7\u7684\u300CArea\u300D\u7684\u8D44\u6E90\u3001\u8D44\u6599\uFF08\u5916\u90E8\u7684\uFF09\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("strong", null, "\u56F4\u7ED5 Area \u7684\u7CBE\u8FDB\uFF0C\u6211\u4EEC\u9700\u8981\u4E0D\u65AD\u5438\u6536\u5916\u90E8\u7684\u6709\u6548\u4FE1\u606F\u548C\u8FDB\u884C\u9636\u6BB5\u6027\u7684\u300C\u521B\u4F5C\u300D"),
                  vue.createTextVNode("\uFF0C\u800C\u9636\u6BB5\u6027\u7684\u521B\u4F5C\u9700\u8981\u7684\u4E3B\u9898\uFF0C\u53EF\u4EE5\u662F Area \u7684\u62C6\u5206\uFF0C\u4E5F\u53EF\u4EE5\u662F\u57FA\u4E8E Project \u7684\u62BD\u8C61\u548C\u603B\u7ED3\uFF0C\u4F46\u6765\u6E90\u4E3B\u8981\u662F\u901A\u8FC7\u5B9E\u8DF5\uFF08Project\uFF09\u548C\u7406\u8BBA\u6765\u8FDB\u884C\u7684\uFF08\u5373 Resource\u2014\u2014\u5916\u90E8\u53C2\u8003\u3001\u7ECF\u9A8C\u3001\u65B9\u6CD5\u8BBA\uFF09\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-3.jpg",
                    alt: "P.A.R.A"
                  })
                ]),
                vue.createVNode("h1", {
                  id: "\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u805A\u7126\u9879\u76EE\u4E0E\u9886\u57DF\u7684\u5173\u7CFB",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u6B27\u6587 \xB7 \u8D39\u96EA\u5728\u300A\u5229\u606F\u7406\u8BBA\u300B\u4E2D\u4E00\u4E66\u8BF4\u9053\uFF1A\u6536\u5165\u662F\u4E00\u8FDE\u4E32\u7684\u4E8B\u4EF6\u3002\u5176\u5B9E\u5BF9\u5E94\u5230\u4EBA\u751F\u4E2D\u4E5F\u662F\u5982\u6B64\uFF0C\u6211\u4EEC\u7684\u4E00\u751F\u4E2D\u7531\u8BB8\u591A\u4E8B\u4EF6\u6784\u6210\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u53EA\u662F\u5BF9\u4E8E\u5927\u591A\u6570\u4EBA\u6765\u8BF4\uFF0C\u4ED6\u4EEC\u5176\u5B9E\u5E76\u6CA1\u6709\u4E00\u4E2A\u5173\u4E8E\u81EA\u5DF1\u751F\u6D3B\u548C\u5DE5\u4F5C\u7684\u5B8C\u6574\u7684\u9879\u76EE\u6E05\u5355\u3002\u4F46\u662F\u4ED6\u4EEC\u5374\u4F1A\u544A\u8BC9\u4F60\uFF0C\u6709\u592A\u591A\u7684\u4E8B\u60C5\u8981\u505A\u3002\u5F53\u8FD9\u6837\u5FD9\u5FD9\u788C\u788C\u591A\u5E74\u4EE5\u540E\uFF0C\u5176\u5B9E\u53D1\u73B0\u81EA\u5DF1\u53EF\u80FD\u505A\u4E86\u8BB8\u591A\u4E8B\uFF0C\u4F46\u662F\u5374\u300C\u6837\u6837\u7A00\u677E\u300D\u3002"),
                  vue.createVNode("strong", null, "\u8FD9\u5C31\u662F\u53EA\u6709\u9879\u76EE\uFF0C\u800C\u7F3A\u4E4F\u9886\u57DF\u805A\u7126\u5E26\u6765\u7684\u95EE\u9898"),
                  vue.createTextVNode("\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-4.png",
                    alt: "P.A.R.A \u805A\u7126\u9879\u76EE"
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u521B\u5EFA\u4E00\u4E2A\u6E05\u6670\u7684\u9879\u76EE\u6E05\u5355\uFF0C\u80FD\u8BA9"),
                  vue.createVNode("strong", null, "\u4F60\u77E5\u9053\u4F60\u7684\u80FD\u529B\u8FB9\u754C\u3002\u800C\u4E00\u65E6\u754C\u5B9A\u4E86\u8FB9\u754C\uFF0C\u4F60\u5C31\u53EF\u4EE5\u6709\u610F\u8BC6\u5730\u3001\u6218\u7565\u6027\u5730\u51B3\u5B9A\u505A\u6216\u8005\u4E0D\u505A\uFF0C\u5982\u4F55\u5F25\u8865\u8FD8\u662F\u5C3D\u5FEB\u653E\u5F03\u3002"),
                  vue.createTextVNode("\xA0\u53EA\u662F\u5927\u591A\u6570\u4EBA\u641E\u4E0D\u6E05\u695A\u9879\u76EE\u548C\u9886\u57DF\u7684\u533A\u522B\uFF0C\u770B\u770B\u56FE\u7247\u4E2D\u7684\u4F8B\u5B50\uFF0C\u8FD9\u4E2A\u5217\u8868\u4E2D\u6CA1\u6709\u4E00\u9879\u662F\u9879\u76EE\u3002\u5047\u671F\u6709\u7ED3\u675F\u7684\u65F6\u5019\u5417\uFF1F\u6709\u6CA1\u6709\u8FD9\u6837\u4E00\u4E2A\u65F6\u523B\uFF0C\u4F60\u53EF\u4EE5\u4E00\u52B3\u6C38\u9038\u5730\u628A\u300C\u6548\u7387\u300D\u4ECE\u4F60\u7684\u6E05\u5355\u4E0A\u5212\u6389\uFF1F\u4E0D\u2014\u2014\u8FD9\u4E9B\u662F\u6B63\u5728\u8FDB\u884C\u7684\u9886\u57DF\uFF0C\u800C\u4E0D\u662F\u9879\u76EE\u3002")
                ]),
                vue.createVNode("p", null, "\u8FD9\u5C31\u662F\u95EE\u9898\u6240\u5728\uFF0C\u5F53\u6211\u4EEC\u5BF9\u9879\u76EE\u5B9A\u4E49\u4E0D\u6E05\u6670\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u5E26\u6765\u4EE5\u4E0B\u7684\u95EE\u9898:"),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u4F60\u5BF9\u81EA\u5DF1\u80FD\u627F\u8BFA\u7684\u8FB9\u754C\u4E00\u65E0\u6240\u77E5\uFF1B")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u76EE\u524D\u7684\u52AA\u529B\u548C\u957F\u671F\u76EE\u6807\u6CA1\u6709\u5173\u8054\uFF1B")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u4F60\u4E0D\u77E5\u9053\u4F60\u662F\u5426\u5728\u671D\u7740\u4F60\u7684\u76EE\u6807\u524D\u8FDB\uFF1B")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u9879\u76EE\u548C\u9886\u57DF\u9700\u8981\u5B8C\u5168\u4E0D\u540C\u7684\u601D\u7EF4\u65B9\u5F0F\u3002")
                  ])
                ]),
                vue.createVNode("h1", {
                  id: "\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5982\u4F55\u5F00\u59CB\u5E94\u7528\uFF0C\u53CA\u540E\u671F\u5982\u4F55\u7EF4\u62A4",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("h1", {
                  id: "_0-\u7406\u6E05\u4F60\u7684\u9886\u57DF",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "0. \u7406\u6E05\u4F60\u7684\u9886\u57DF"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_0-\u7406\u6E05\u4F60\u7684\u9886\u57DF",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "Set your course by the stars, not by the lights of passing ships.\u2014\u2014Omar Bradley \u6309\u7167\u661F\u661F\uFF0C\u800C\u4E0D\u662F\u6309\u7167\u8FC7\u5F80\u8239\u53EA\u7684\u706F\u5149\u8BBE\u5B9A\u822A\u5411\u3002")
                ]),
                vue.createVNode("p", null, "\u4F60\u5927\u53EF\u4E0D\u5FC5 20 \u5C81\u5C31\u7ED3\u5A5A\uFF0C30 \u5C81\u5C31\u8FDB\u5165\u4E2D\u5E74\u5371\u673A\uFF0C\u7136\u540E 40 \u5C81\u5C31\u5F00\u59CB\u4F5B\u7CFB\u517B\u8001\u3002\u4E5F\u5927\u53EF\u4E0D\u5FC5\u6309\u90E8\u5C31\u73ED\u7684\u5B8C\u6210\u5404\u79CD\u300C\u522B\u4EBA\u300D\u5BF9\u4F60\u7684\u5B89\u6392\u3002\u5BF9\u9886\u57DF\u7684\u5B89\u6392\uFF0C\u66F4\u591A\u7684\u5E94\u8BE5\u662F\u4F60\u81EA\u5DF1\u51B3\u5B9A\u4F60\u60F3\u8981\u5728\u4EC0\u4E48\u5730\u65B9\u6295\u5165\u7CBE\u529B\uFF0C\u800C\u975E\u522B\u4EBA\u7684\u671F\u76FC\u2014\u2014\u9664\u4E86\u4F60\u81EA\u5DF1\u4E4B\u5916\uFF0C\u6CA1\u6709\u4EBA\u5E94\u8BE5\u5BF9\u4F60\u8D1F\u8D23\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("strong", null, "\u7406\u6E05\u9886\u57DF\u6700\u96BE\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u4F60\u8981\u5766\u7136\u9762\u5BF9\u81EA\u5DF1\u7684\u5185\u5FC3"),
                  vue.createTextVNode("\u3002\u4E16\u4FD7\u7684\u529B\u91CF\u5F80\u5F80\u53EA\u80FD\u8BA9\u6211\u4EEC\u5728\u5E74\u8F7B\u7684\u5C81\u6708\u65F6\u5019\u770B\u4F3C\u4E0D\u8FF7\u832B\uFF0C\u4F46\u662F\u8FC7\u4E86\u4E2D\u5E74\u4E4B\u540E\u5C31\u53EA\u80FD\u81EA\u5DF1\u6478\u7D22\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E0A\u4E00\u4EE3\u4EBA\u8EAB\u4E0A\u770B\u5230\u4ED6\u4EEC\u9000\u4F11\u540E\u8FF7\u832B\u7684\u6837\u5B50\u2014\u2014\u5982\u5F20\u6F47\u96E8\u7684\u6587\u7AE0\u300C\u4EBA\u751F\u603B\u6709\u4E00\u523B\uFF0C\u6211\u4EEC\u4F1A\u5F00\u59CB\u601D\u8003\u6B7B\u4EA1\u300D\u4E2D\u63D0\u5230\u7684\uFF0C\u867D\u7136\u6211\u4EEC\u6700\u7EC8\u90FD\u4F1A\u6B7B\u4EA1\uFF0C\u4F46\u662F\u8DDD\u79BB\u6B7B\u4EA1\u8FD8\u662F\u6709\u5F88\u957F\u7684\u800C\u65F6\u95F4\uFF0C\u4F60\u53EF\u4EE5\u6709\u4E24\u79CD\u65B9\u5F0F\u6765\u9762\u5BF9\uFF1A"),
                  vue.createVNode("strong", null, "\u4E00\u79CD\u662F\u8BA9\u81EA\u5DF1\u548C\u4E00\u4E9B\u5B8F\u5927\u7684\u4E1C\u897F\u8054\u7CFB\u8D77\u6765\uFF0C\u6BD4\u5982\u5199\u4E00\u672C\u4E66\uFF0C\u5EFA\u7ACB\u4E00\u5BB6\u516C\u53F8\uFF0C\u7814\u7A76\u4E00\u79CD\u7F8E\u98DF\uFF0C\u6301\u7EED\u7684\u5E2E\u52A9\u4E00\u4E9B\u4EBA\uFF1B\u53E6\u4E00\u79CD\u662F\u53EA\u5173\u6CE8\u5F53\u4E0B\uFF0C\u4E0D\u8003\u8651\u8FC7\u53BB\u548C\u672A\u6765\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5982\u679C\u4F60\u5E0C\u671B\u662F\u4EE5\u524D\u8005\u7684\u59FF\u6001\u6765\u9762\u5BF9\u4EBA\u751F\uFF0C\u90A3\u4E48\u60F3\u6E05\u695A\u4F60\u60F3\u7CBE\u8FDB\u7684\u9886\u57DF\uFF0C\u5C31\u975E\u5E38\u91CD\u8981\u4E86\u3002\u6211\u4EEC\u7F55\u6709\u4E00\u4E9B\u673A\u4F1A\u505C\u4E0B\u6765\u95EE\u95EE\u81EA\u5DF1\u60F3\u8981\u6210\u4E3A\u4EC0\u4E48\u6837\u7684\u4EBA\uFF08\u800C\u4E0D\u662F\u522B\u4EBA\u5E0C\u671B\u6211\u4EEC\u6210\u4E3A\u7684\u4EBA\uFF09\uFF0C\u90A3\u4E48\u53EF\u4EE5\u628A\u8FD9\u4EF6\u4E8B\u5F53\u505A\u4E00\u5207\u7684\u8D77\u70B9\u3002"),
                  vue.createVNode("strong", null, "\u4F60\u53EF\u4EE5\u50CF\u6295\u8D44\u4E00\u6837\u6765\u5BA1\u89C6\u4F60\u7684\u65F6\u95F4\uFF0C\u7136\u540E\u601D\u8003\u4F60\u7684\u6295\u8D44\u7B56\u7565"),
                  vue.createTextVNode("\uFF08\u5173\u4E8E\u65F6\u95F4\u5176\u5B9E\u4F60\u80FD\u5229\u7528\u7684\u4E0D\u591A\uFF0C\u8BE6\u89C1\xA0"),
                  vue.createVNode("a", {
                    href: "https://www.notion.so/Dead-time-Live-time-b3237b1cd7fb45978f39d02f845af766",
                    target: "_blank",
                    rel: "noopener"
                  }, "Dead time & Live time"),
                  vue.createTextVNode("\uFF09\u2014\u2014\u662F\u628A\u9E21\u86CB\u653E\u5728\u4E00\u4E2A\u7BEE\u5B50\u91CC\u8FD8\u662F\u653E\u5728\u591A\u4E2A\u7BEE\u5B50\u91CC\uFF1F\u662F\u8FFD\u6C42\u6536\u76CA\u6700\u5927\u5316\u8FD8\u662F\u4FDD\u672C\u5C31\u884C\uFF1F"),
                  vue.createVNode("strong", null, "\u8BB0\u5F97\u65F6\u95F4\u548C\u91D1\u94B1\u552F\u4E00\u4E0D\u540C\u7684\u662F\uFF0C\u6CA1\u6709\u4EFB\u4F55\u300C\u50A8\u84C4\u300D\u7684\u624B\u6BB5\u3002")
                ]),
                vue.createVNode("h1", {
                  id: "_1-\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "1. \u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_1-\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-5.png",
                    alt: "\u5148\u5B9A\u4E49\u9879\u76EE\u6E05\u5355"
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("strong", null, "\u5B9A\u4E49\u4F60\u7684\u9879\u76EE\uFF0C\u5426\u5219\u4ED6\u4EEC\u4F1A\u5B9A\u4E49\u4F60"),
                  vue.createTextVNode("\u3002\u4F60\u4F1A\u4E0D\u65AD\u5730\u88AB\u62C9\u7740\u3001\u88AB\u63A8\u5230\u522B\u4EBA\u7684\u9879\u76EE\u4E2D\u53BB\uFF0C\u4F60\u4F1A\u53D1\u73B0\uFF0C\u5373\u4F7F\u522B\u4EBA\u63D0\u51FA\u6765\u5E2E\u4F60\u505A\u4F60\u7684\u9879\u76EE\uFF0C\u4F60\u4E5F\u4E0D\u77E5\u9053\u8BE5\u8BA9\u4ED6\u4EEC\u4ECE\u54EA\u91CC\u4E0B\u624B\u3002")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u8FD9\u610F\u5473\u7740\uFF0C\u6838\u5FC3\u95EE\u9898\u662F\u5B9A\u4E49\u4F60\u7684\u9879\u76EE\uFF0C\u800C\u5DE5\u5177\u53EA\u662F\u4E00\u4E2A\u89E3\u51B3\u624B\u6BB5\u3002"),
                  vue.createVNode("strong", null, "\u4E0E\u5176\u5BFB\u627E\u300C\u4E00\u4E2A\u4E07\u80FD\u7684\u901A\u7528\u5DE5\u5177\u300D\uFF0C\u4E0D\u5982\u5236\u5B9A\u4F60\u7684\u9879\u76EE\u5217\u8868"),
                  vue.createTextVNode("\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u5217\u8868\u590D\u5236\u5230\u4F60\u73B0\u5728\u548C\u5C06\u6765\u4F7F\u7528\u7684\u6BCF\u4E00\u4E2A\u5DE5\u5177\u4E0A\u3002\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E4B\u95F4\u7684\u8FC7\u6E21\u5C3D\u53EF\u80FD\u7684\u65E0\u7F1D\u8854\u63A5\u3002")
                ]),
                vue.createVNode("p", null, "\u8BD5\u56FE\u6839\u636E\u6BCF\u4E2A\u7A0B\u5E8F\u7684\u80FD\u529B\u6765\u9002\u5E94\u4E0D\u540C\u7684\u65B9\u6848\uFF0C\u4F1A\u8FEB\u4F7F\u5927\u8111\u5728\u6BCF\u6B21\u5207\u6362\u7A0B\u5E8F\u65F6\u90FD\u8981\u300C\u52A0\u8F7D\u300C\u5E76\u8BB0\u4F4F\u4E0D\u540C\u7684\u65B9\u6848\u3002\u8FD9\u5BF9\u5B66\u4E60\u53EF\u80FD\u66F4\u9002\u5408\u4E13\u4E1A\u4EFB\u52A1\u7684\u65B0\u5DE5\u5177\u4EA7\u751F\u4E86\u6469\u64E6\uFF0C\u6291\u5236\u4E86\u521B\u65B0\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6BCF\u4E2A\u7A0B\u5E8F\u4E2D\u7684\u9879\u76EE\u5217\u8868\u662F\u76F8\u540C\u7684\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u6269\u5C55\u5230\u5176\u4ED6\u4EFB\u4F55\u6570\u91CF\u7684\u7A0B\u5E8F\u3002\u8FD9\u6837\u65E2\u53D1\u6325\u4E86\u6BCF\u4E2A\u7A0B\u5E8F\u7684\u72EC\u7279\u529F\u80FD\uFF0C\u53C8\u4FDD\u6301\u4E86\u9879\u76EE\u5C42\u8DE8\u754C\u9762\u7684\u7EDF\u4E00\u6027\u3002P.A.R.A. \u80FD\u517C\u987E\u4E24\u8005\uFF1A"),
                  vue.createVNode("strong", null, "\u96C6\u4E2D\u5316\u7684\u4E00\u81F4\u6027\uFF0C\u5206\u6563\u5316\u7684\u9002\u5E94\u6027\u3002")
                ]),
                vue.createVNode("h1", {
                  id: "_2-\u5EFA\u7ACB\u9879\u76EE\u6E05\u5355",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "2. \u5EFA\u7ACB\u9879\u76EE\u6E05\u5355"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_2-\u5EFA\u7ACB\u9879\u76EE\u6E05\u5355",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5982\u4E0A\u9762\u63D0\u5230\u7684\uFF0C\u5BF9\u4E8E\u5927\u591A\u6570\u4EBA\u6765\u8BF4\u4ED6\u4EEC\u5176\u5B9E\u5E76\u6CA1\u6709\u4E00\u4E2A\u5173\u4E8E\u81EA\u5DF1\u7684\u5B8C\u6574\u7684\u9879\u76EE\u6E05\u5355\u3002\u4F46\u662F\u4ED6\u4EEC\u5374\u4F1A\u544A\u8BC9\u4F60\uFF0C\u6709\u592A\u591A\u7684\u4E8B\u60C5\u8981\u505A\u3002\u800C\u5F53\u6E05\u5355\u5448\u73B0\u5728\u4ED6\u4EEC\u9762\u524D\u7684\u65F6\u5019\uFF0C\u4ED6\u4EEC\u4F1A\u60CA\u8BB6\u4E8E\u81EA\u5DF1\u7ADF\u7136\u540C\u65F6\u5728\u505A\u8FD9\u4E48\u591A\u4E8B\u60C5\uFF0C\u7136\u540E\u5F88\u5BB9\u6613\u9009\u62E9\u9E35\u9E1F\u7B56\u7565\u89C6\u800C\u4E0D\u89C1\u7EE7\u7EED\u524D\u884C\u3002\u4F46\u6CE8\u610F\uFF0C"),
                  vue.createVNode("strong", null, "\u6536\u96C6\u5B8C\u6574\u7684\u6E05\u5355\u662F\u83B7\u5F97\u63A7\u5236\u6743\u7684\u7B2C\u4E00\u6B65"),
                  vue.createTextVNode("\u3002\u521B\u5EFA\u4E00\u4E2A\u6E05\u6670\u7684\u9879\u76EE\u6E05\u5355\uFF0C\u8BA9\u4F60\u6709\u4FE1\u5FC3\u5BF9\u65B0\u7684\u627F\u8BFA\u8BF4\u662F\u6216\u4E0D\u662F\u3002")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u5BFC\u51FA\u6240\u6709\u60F3\u6CD5")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u4FDD\u5B58\u6709\u4EF7\u503C\u7684\u4E1C\u897F")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u6574\u7406\u548C\u5B8C\u5584\u4F60\u7684\u6E05\u5355")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u786E\u5B9A\u9884\u671F\u6210\u679C\u548C\u65F6\u95F4\u8303\u56F4")
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode("strong", null, "\u8FDB\u884C\u4F18\u5148\u7EA7\u6392\u5E8F\uFF0C\u5BA1\u89C6\u7ED3\u679C")
                  ])
                ]),
                vue.createVNode("h1", {
                  id: "_3-\u548C\u8FC7\u53BB\u544A\u522B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "3. \u548C\u8FC7\u53BB\u544A\u522B"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_3-\u548C\u8FC7\u53BB\u544A\u522B",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5982\u679C\u4ECE\u672A\u4F7F\u7528\u8FC7 P.A.R.A \u65B9\u6CD5\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8FD9\u6837\u91CD\u65B0\u5F00\u59CB\u2014\u2014\u8FD9\u662F\u56E0\u4E3A\u4E0E\u5176\u5728\u6CE5\u5858\u91CC\u6253\u6EDA\uFF0C\u6216\u8005\u8017\u8D39\u4E86\u5DE8\u5927\u7684\u7CBE\u529B\u6574\u7406\u5C06\u6765\u4E0D\u4E00\u5B9A\u80FD\u7528\u5230\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E9B\u90FD\u4F1A\u8BA9\u4F60\u4E27\u5931\u5F00\u59CB\u7684\u5951\u673A\u3002\u6240\u4EE5\u4E0D\u5982\u548C\u4ED6\u4EEC\u544A\u522B\uFF0C\u5C06\u4ED6\u4EEC\u675F\u4E4B\u9AD8\u9601\uFF0C\u5F53\u9700\u8981\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u641C\u7D22\u8FD8\u662F\u80FD\u627E\u5230\u4ED6\u4EEC\u2014\u2014\xA0"),
                  vue.createVNode("strong", null, "\u91CD\u8981\u7684\u4E8B\u60C5\u4E0D\u4F1A\u5FD8\u8BB0\uFF0C\u5FD8\u8BB0\u7684\u4E8B\u60C5\u90FD\u4E0D\u91CD\u8981\u3002")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "\u5C06\u73B0\u6709\u7684\u6587\u4EF6\u79FB\u52A8\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u540D\u4E3A\u300C\u5F52\u6863 [\u65E5\u671F]\u300D\u7684\u6587\u4EF6\u5939\u4E2D\uFF08\u5E26\u4ECA\u5929\u7684\u65E5\u671F\uFF09"),
                  vue.createVNode("li", null, "\u4E3A\u4F60\u5F53\u524D\u7684\u6BCF\u4E2A\u9879\u76EE\u521B\u5EFA\u6587\u4EF6\u5939\u3002"),
                  vue.createVNode("li", null, "\u5C06\u6240\u6709\u9879\u76EE\u6587\u4EF6\u5939\u79FB\u5230\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939\u4E2D\uFF0C\u540D\u4E3A\u300C\u9879\u76EE\u300D\u3002"),
                  vue.createVNode("li", null, "\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u300C\u5F52\u6863\u300D\u6587\u4EF6\u5939\uFF0C\u5E76\u5C06\u73B0\u6709\u7684\u6587\u4EF6\u5939\u79FB\u5165\u5176\u4E2D\u3002"),
                  vue.createVNode("li", null, "\u4EC5\u5728\u9700\u8981\u65F6\u624D\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\u5939\u3002")
                ]),
                vue.createVNode("h1", {
                  id: "_4-\u65E5\u5E38\u7EF4\u62A4",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "4. \u65E5\u5E38\u7EF4\u62A4"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_4-\u65E5\u5E38\u7EF4\u62A4",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/para/para-6.jpg",
                    alt: "\u65E5\u5E38\u7EF4\u62A4"
                  })
                ]),
                vue.createVNode("h3", {
                  id: "_4-1-\u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "4.1 \u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_4-1-\u5927\u80C6\u5730\u8BA9\u4FE1\u606F\u5728\u5404\u6A21\u5757\u4E4B\u95F4\u7684\u6D41\u8F6C",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("P.A.R.A. \u4E0E\u5176\u4ED6\u7EC4\u7EC7\u65B9\u5F0F\u7684\u4E00\u4E2A\u5173\u952E\u533A\u522B\u662F\uFF0C"),
                  vue.createVNode("strong", null, "\u5B83\u662F\u4E00\u4E2A\u52A8\u6001\u7684\u7CFB\u7EDF"),
                  vue.createTextVNode("\u3002"),
                  vue.createVNode("strong", null, "\u5B83\u7684\u529B\u91CF\u4E0D\u662F\u6765\u81EA\u4E8E\u6DF1\u5C42\u6B21\u7684\u300C\u77E5\u8BC6\u300D\u50A8\u5907"),
                  vue.createTextVNode("\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u77E5\u8BC6\u9700\u8981\u9075\u5FAA\u4E25\u683C\u7684\u89C4\u5219\u548C\u60EF\u4F8B\uFF0C"),
                  vue.createVNode("strong", null, "\u800C\u662F\u6765\u81EA\u4E8E\u56DB\u4E2A\u7C7B\u522B\u4E4B\u95F4\u4E0D\u65AD\u53D8\u5316\u7684\u4FE1\u606F\u6D41\u52A8\u3002\u9879\u76EE\u7684\u5FEB\u901F\u66F4\u66FF\u4E0D\u662F\u4E00\u4E2A\u9700\u8981\u7BA1\u7406\u7684\u98CE\u9669\uFF0C\u800C\u662F\u6211\u4EEC\u7EF4\u6301\u8FD9\u4E2A\u7CFB\u7EDF\u7684\u5B9E\u9645\u673A\u5236\u3002")
                ]),
                vue.createVNode("p", null, "\u5BF9\u4E8E\u4E00\u4E2A\u7279\u5B9A\u7684\u4FE1\u606F\uFF08\u65E0\u8BBA\u662F\u4E00\u884C\u6587\u5B57\u3001\u4E00\u5F20\u56FE\u7247\u3001\u4E00\u4E2A\u5B8C\u6574\u7684\u7B14\u8BB0\uFF0C\u8FD8\u662F\u6574\u4E2A\u7B14\u8BB0\u672C\uFF09\uFF0C\u90FD\u6709\u5355\u72EC\u7684\u7528\u4F8B\uFF0C\u53EF\u4EE5\u5728\u56DB\u4E2A\u4E3B\u8981\u7C7B\u522B\u4E2D\u7684\u4EFB\u610F\u4E24\u4E2A\u7C7B\u522B\u4E4B\u95F4\u6D41\u52A8\u3002"),
                vue.createVNode("p", null, "\u7531\u4E8E\u4EBA\u7684\u601D\u7EF4\u65B9\u5F0F\u662F\u7F51\u72B6\u7684\uFF0C\u800C\u4E0D\u662F\u91D1\u5B57\u5854\u72B6\u7684\uFF0C\u6240\u4EE5\u8981\u907F\u514D\u521B\u5EFA\u4E00\u5927\u5806\u53EF\u80FD\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u4F7F\u7528\u7684\u7A7A\u7684\u7B14\u8BB0\u672C\u6216\u6587\u4EF6\u5939\uFF0C\u8FD9\u53EA\u4F1A\u8BA9\u4F60\u7684\u5DE5\u4F5C\u7A7A\u95F4\u53D8\u5F97\u62E5\u6324\u4E0D\u582A\u3002"),
                vue.createVNode("p", null, [
                  vue.createVNode("strong", null, "\u51E0\u70B9\u6CE8\u610F\u4E8B\u9879\uFF1A")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u9879\u76EE\u548C\u9886\u57DF\u4E4B\u95F4\u4F1A\u7ECF\u5E38\u53D8\u5316\uFF0C\u6BD4\u5982\u67D0\u4E2A\u4EA7\u54C1\u529F\u80FD\u4E0A\u7EBF\u540E\u6548\u679C\u4E0D\u9519\uFF0C\u6210\u4E3A\u4E86\u9700\u8981\u957F\u671F\u7EF4\u62A4\u7684\u7CFB\u7EDF"),
                  vue.createVNode("li", null, "\u9886\u57DF\u548C\u8D44\u6E90\u4E4B\u95F4\u4E5F\u4F1A\u53D8\u5316\uFF0C\u6BD4\u5982\u628A\u67D0\u4E2A\u5174\u8DA3\u7231\u597D\u5347\u7EA7\u4E3A\u526F\u4E1A"),
                  vue.createVNode("li", null, "\u4E0D\u8981\u541D\u60DC\u5F52\u6863\uFF0C\u4E5F\u4E0D\u8981\u8BA4\u4E3A\u5F52\u6863\u662F\u5783\u573E\u7BB1\u3002\u8BB8\u591A\u65F6\u5019\u5F53\u524D\u9879\u76EE\u7684\u603B\u7ED3\uFF0C\u4F1A\u5BF9\u672A\u6765\u7684\u5185\u5BB9\u6709\u7528\uFF0C\u8BB0\u5F97\u53BB\u5F52\u6863\u4E2D\u5BFB\u627E\u8FC7\u53BB\u7684\u667A\u6167\uFF0C\u4E0D\u8981\u91CD\u65B0\u53D1\u660E\u8F6E\u5B50\u3002\uFFFC")
                ]),
                vue.createVNode("h3", {
                  id: "_4-2-\u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF",
                  tabindex: "-1"
                }, [
                  vue.createVNode("strong", null, "4.2 \u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF"),
                  vue.createTextVNode(),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_4-2-\u7528\u6BCF\u4E2A\u5F53\u4E0B\u6765\u7EF4\u62A4\u7CFB\u7EDF",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u8FD9\u5957\u7BA1\u7406\u7CFB\u7EDF\u5728\u8BBE\u8BA1\u4E4B\u521D\u5C31\u662F\u5E0C\u671B\u80FD\u964D\u4F4E\u4F7F\u7528\u6210\u672C\uFF0C\u65E0\u9700\u989D\u5916\u6295\u5165\u592A\u591A\u7684\u7CBE\u529B\u800C\u8BBE\u8BA1\u7684\u3002"),
                  vue.createVNode("strong", null, "\u6240\u4EE5\u4E00\u65E6\u4F60\u9700\u8981\u5355\u72EC\u62BD\u53D6\u5927\u91CF\u65F6\u95F4\u6765\u7EF4\u62A4\uFF0C\u5219\u5C31\u610F\u5473\u7740\u8FDD\u80CC\u4E86\u8FD9\u5957\u7CFB\u7EDF\u7684\u521D\u8877"),
                  vue.createTextVNode("\u3002\u4E4B\u6240\u4EE5\u8FD9\u4E48\u8BBE\u8BA1\uFF0C"),
                  vue.createVNode("strong", null, "\u56E0\u4E3A\u300C\u6574\u7406\u4E1C\u897F\u300D\u662F\u4EBA\u4EEC\u6C38\u8FDC\u4E0D\u4F1A\u53BB\u505A\u7684\u4E8B\u60C5\u4E4B\u4E00"),
                  vue.createTextVNode("\u3002\u539F\u56E0\u5F88\u7B80\u5355\uFF1A")
                ]),
                vue.createVNode("p", null, "\u5B83\u4EE3\u8868\u7740\u8017\u65F6\u7684\u95F4\u63A5\u5DE5\u4F5C\uFF0C\u6CA1\u6709\u660E\u663E\u7684\u56DE\u62A5\u6216\u5F71\u54CD\u3002\u5728\u4E00\u4E2A\u9879\u76EE\u4E2D\uFF0C\u4F60\u6CA1\u6709\u65F6\u95F4\u53BB\u300C\u505C\u4E0B\u6765\u6574\u7406\u4E1C\u897F\u300D\uFF0C\u56E0\u4E3A\u4F60\u9700\u8981\u6BCF\u4E00\u5206\u949F\u7684\u7A7A\u95F2\u65F6\u95F4\u53BB\u8D76\u5DE5\u671F\u3002\u4F60\u4E5F\u4E0D\u4F1A\u5728\u9879\u76EE\u7ED3\u675F\u540E\u518D\u53BB\u505A\uFF0C\u56E0\u4E3A\u8981\u53BB\u505A\u4E0B\u4E00\u4E2A\u9879\u76EE\u4E86\u3002\u5728\u4F60\u7684\u90E8\u95E8\u9884\u7B97\u4E2D\uFF0C\u6CA1\u6709\u4E13\u95E8\u7684\u9879\u76EE\u7528\u4E8E\u300C\u6574\u7406\u5DE5\u4F5C\u300D\u3002"),
                vue.createVNode("p", null, "\u56E0\u6B64\uFF0C\u8FD9\u79CD\u5DE5\u4F5C\u4E00\u62D6\u518D\u62D6\uFF0C\u76F4\u5230\u8FBE\u5230\u4E00\u4E2A\u5D29\u6E83\u70B9\uFF0C\u6240\u6709\u7684\u7CFB\u7EDF\u5F00\u59CB\u5D29\u6E83\u3002\u7136\u540E\uFF0C\u8FD9\u79CD\u6545\u969C\u88AB\u5F52\u548E\u4E8E\u300C\u7F3A\u4E4F\u751F\u4EA7\u529B\u300D\u3002"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u76F8\u53CD\uFF0C\u5F53\u4F60\u5DF2\u7ECF\u5728\u6D4F\u89C8\u4F60\u7684\u7B14\u8BB0\u7684\u65F6\u5019\uFF0C\u5229\u7528\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u628A\u4F60\u6CE8\u610F\u5230\u7684\u4E00\u4E2A\u7B14\u8BB0\u8F6C\u79FB\u5230\u5176\u4ED6\u5730\u65B9\u4F1A\u66F4\u5408\u9002\u3002"),
                  vue.createVNode("strong", null, "\u6211\u4EEC\u5176\u5B9E\u6BCF\u5929\u90FD\u5728\u8FD9\u4E9B\u5DE5\u5177\u4E0A\u82B1\u8D39\u4E0D\u5C11\u65F6\u95F4\uFF0C\u8FD9\u6837\u7684\u673A\u4F1A\u6BD4\u4F60\u53EF\u80FD\u610F\u8BC6\u5230\u7684\u8FD8\u8981\u591A"),
                  vue.createTextVNode("\u3002\u6240\u4EE5\u5F53\u65F6\u673A\u51FA\u73B0\u65F6\uFF0C\u5E94\u62E9\u673A\u8FDB\u884C\u7EC4\u7EC7\u548C\u6574\u7406\u5DE5\u4F5C\u3002\u4F60\u53EF\u4EE5\u79F0\u8FD9\u79CD\u65B9\u6CD5\u79F0\u4E3A\u300C\u53CA\u65F6\u7EC4\u7EC7\u300D\uFF08Just-In-Time Organization\uFF09\u3002\u8FD9\u770B\u8D77\u6765\u5C31\u50CF\u5728\u4F60\u7684\u7EC4\u7EC7\u7ED3\u6784\u4E2D\uFF0C\u968F\u7740\u4F60\u7684\u53D1\u5C55\uFF0C"),
                  vue.createVNode("strong", null, "\u5728\u4F60\u7684\u7EC4\u7EC7\u7ED3\u6784\u4E2D\u8FDB\u884C\u5C0F\u6279\u91CF\u7684\u6539\u53D8\uFF0C\u800C\u4E0D\u662F\u5927\u6279\u91CF\u7684\u6539\u53D8\uFF0C\u66F4\u4E0D\u662F\u4F5C\u4E3A\u4E00\u79CD\u4E13\u95E8\u7684\u52AA\u529B"),
                  vue.createTextVNode("\u3002")
                ]),
                vue.createVNode("p", null, "\u4E0D\u7528\u62C5\u5FC3\u628A\u7B14\u8BB0\u4ECE\u4E00\u4E2A\u7C7B\u522B\u6D41\u8F6C\u53E6\u4E00\u4E2A\u7C7B\u522B\u662F\u51FA\u73B0\u4EC0\u4E48\u9519\u8BEF\u3002\u6CA1\u6709\u300C\u5B8C\u6210\u300D\uFF0C\u56E0\u6B64\u4F60\u4E0D\u5FC5\u62C5\u5FC3\u300C\u5B8C\u6210\u300D\u662F\u4EC0\u4E48\u6837\u5B50\u7684\u3002\u4F60\u603B\u662F\u6709\u641C\u7D22\u4F5C\u4E3A\u5907\u4EFD\u5DE5\u5177\uFF0C\u65E0\u8BBA\u4F60\u6F0F\u6389\u4E86\u4EC0\u4E48\uFF0C\u6216\u8005\u653E\u9519\u4E86\u4EC0\u4E48\uFF0C\u90FD\u53EF\u4EE5\u627E\u5230\u3002\u4E00\u65E6\u4F60\u5F00\u59CB\u6709\u89C4\u5F8B\u5730\u4F7F\u7528\u8FD9\u5957\u7CFB\u7EDF\uFF0C\u4F60\u5C31\u4F1A\u9891\u7E41\u5730\u4E0E\u8FD9 4 \u4E2A\u5206\u7C7B\u8FDB\u884C\u4E92\u52A8\uFF0C\u4F60\u5C31\u4F1A\u5F00\u59CB\u6CE8\u610F\u5230\u5404\u79CD\u5C0F\u7684\u4F18\u5316\u548C\u53D8\u5316\uFF0C\u8BA9\u4FE1\u606F\u66F4\u5BB9\u6613\u88AB\u672A\u6765\u7684\u81EA\u5DF1\u53D1\u73B0\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/P.A.R.A-zh.md");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var P_A_R_AZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  name: "Quietly-keeping-the-flowers-in-bloom",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00", "date": "2015-08-21T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002", "meta": [{ "property": "og:title", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00" }, { "property": "og:description", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002" }, { "name": "description", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00", "meta": [{ "property": "og:title", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00" }, { "property": "og:description", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002" }, { "name": "description", "content": "\u6E05\u98CE\u5165\u5F26\uFF0C\u9759\u5B88\u82B1\u5F00\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u5C81\u6708\u82B1\u5F00\uFF0C\u5E7D\u9999\u88AD\u4EBA\uFF0C\u6E05\u98CE\u60A0\u60A0\u6765\u53BB\uFF0C\u6447\u843D\u4E00\u5730\u82B1\u74E3\u96E8\u3002\u76F8\u8BC6\u7684\u65E5\u5B50\u603B\u662F\u67D3\u7740\u82B1\u9999\uFF0C\u6E29\u6DA6\u6D41\u5E74\uFF0C\u5F53\u8BB0\u5FC6\u6ED1\u8FC7\u892A\u8272\u7684\u65F6\u5149\uFF0C\u4E00\u6CD3\u60C5\u601D\u4F9D\u7136\u6447\u66F3\u7EA2\u5C18\u3002\u8F7B\u8F7B\u56DE\u7738\uFF0C\u4E00\u66F2\u7EF5\u97F3\u62C2\u8D70\u4E86\u79BB\u6101\uFF0C\u76F8\u9047\u7684\u8DEF\u4E0A\uFF0C\u6709\u9633\u5149\u666E\u7167\uFF0C\u6709\u8272\u5F69\u6591\u6593\uFF0C\u6709\u5E78\u798F\u843D\u6B65\u3002</p><p${_scopeId}>\u4EBA\u751F\u805A\u6563\uFF0C\u56E0\u4E86\u61C2\u5F97\u4E00\u5207\u5B89\u597D\uFF1B\u82B1\u5F00\u82B1\u843D\uFF0C\u56E0\u4E86\u61C2\u5F97\u7686\u5316\u8BD7\u610F\u3002\u4F60\u660E\u4E86\u6211\u7684\u6545\u4E8B\uFF0C\u6211\u6E05\u695A\u4F60\u7684\u60B2\u559C\uFF0C\u6000\u4E00\u4EFD\u61C2\u5F97\uFF0C\u628A\u7ECF\u5E74\u7684\u5BC2\u5BE5\u5FC3\u4E8B\u4E22\u5728\u98CE\u91CC\uFF0C\u7528\u6676\u83B9\u7684\u96E8\u4E1D\u4E32\u8D77\u70B9\u6EF4\u7F8E\u597D\uFF0C\u5C06\u7EC6\u5FAE\u7684\u771F\u60C5\u548C\u611F\u52A8\u7528\u5FC3\u6536\u85CF\uFF0C\u4E8E\u662F\uFF0C\u524D\u884C\u8DEF\u4E0A\uFF0C\u6BCF\u4E00\u6B65\u90FD\u80FD\u8E0F\u8FDB\u82B1\u5F00\u7684\u8282\u594F\uFF0C\u6BCF\u4E00\u7A0B\u90FD\u80FD\u95FB\u53CA\u9E1F\u8BED\u82B1\u9999\u3002\u65F6\u5149\u4E0D\u8001\uFF0C\u82B1\u9999\u4E0D\u6563\u3002</p><p${_scopeId}>\u5728\u98CE\u94C3\u53EE\u5F53\u58F0\u91CC\uFF0C\u7EFE\u7ED3\u7684\u5FC3\u4E8B\u6E10\u6E10\u4E91\u6DE1\u98CE\u8F7B\u3002\u7559\u4E00\u4E2A\u6726\u80E7\u7684\u526A\u5F71\u9759\u9759\u60F3\u5FF5\uFF0C\u4EFB\u6E29\u60C5\u5728\u751F\u547D\u91CC\u6D8C\u52A8\u3001\u6D9F\u6F2A\uFF0C\u4EFB\u843D\u7B14\u7684\u5FC3\u8BED\uFF0C\u5728\u716E\u5B57\u4E2D\u968F\u98CE\u4E91\u4E00\u540C\u8FDC\u53BB\u3002\u53EA\u8981\u5FC3\u4E2D\u6709\u666F\uFF0C\u65E0\u5904\u4E0D\u82B1\u9999\u6EE1\u5F84\u3002</p><p${_scopeId}>\u516B\u6708\uFF0C\u6696\u6696\u7684\u9633\u5149\u843D\u5728\u8EAB\u4E0A\uFF0C\u5728\u6D53\u5BC6\u7684\u82B1\u5F71\u91CC\u6E38\u8D70\uFF0C\u637B\u4E00\u6735\u82B1\uFF0C\u6D45\u7B11\u7740\uFF0C\u4E0E\u67D4\u60C5\u76F8\u62E5\uFF0C\u5E78\u798F\uFF0C\u5C31\u6B64\u6F3E\u5F00\uFF0C\u6EE1\u76EE\u7F24\u7EB7\u3002</p><p${_scopeId}>\u63A9\u5377\u503E\u542C\uFF0C\u4E00\u9996\u300A\u76F8\u9047\u662F\u7F18\u300B\u7F31\u7EFB\u98CE\u4E2D\u3002\u597D\u60F3\uFF0C\u7AD9\u5728\u521D\u8BC6\u7684\u8DEF\u53E3\uFF0C\u91CD\u62FE\u843D\u82B1\uFF0C\u91CD\u6E29\u65E7\u6B22\uFF0C\u9759\u5B88\u82B1\u5F00\u3002\u76DB\u590F\u8DEF\u4E0A\uFF0C\u5FC3\u5FF5\u751F\u9999\uFF0C\u5728\u6696\u98CE\u5C45\u4F4F\u7684\u8857\u9053\uFF0C\u6211\u613F\u9759\u5FC3\u7B49\u5F85\u7740\u518D\u4E00\u6B21\u7684\u5B63\u8282\u76F8\u7EA6\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u5C81\u6708\u82B1\u5F00\uFF0C\u5E7D\u9999\u88AD\u4EBA\uFF0C\u6E05\u98CE\u60A0\u60A0\u6765\u53BB\uFF0C\u6447\u843D\u4E00\u5730\u82B1\u74E3\u96E8\u3002\u76F8\u8BC6\u7684\u65E5\u5B50\u603B\u662F\u67D3\u7740\u82B1\u9999\uFF0C\u6E29\u6DA6\u6D41\u5E74\uFF0C\u5F53\u8BB0\u5FC6\u6ED1\u8FC7\u892A\u8272\u7684\u65F6\u5149\uFF0C\u4E00\u6CD3\u60C5\u601D\u4F9D\u7136\u6447\u66F3\u7EA2\u5C18\u3002\u8F7B\u8F7B\u56DE\u7738\uFF0C\u4E00\u66F2\u7EF5\u97F3\u62C2\u8D70\u4E86\u79BB\u6101\uFF0C\u76F8\u9047\u7684\u8DEF\u4E0A\uFF0C\u6709\u9633\u5149\u666E\u7167\uFF0C\u6709\u8272\u5F69\u6591\u6593\uFF0C\u6709\u5E78\u798F\u843D\u6B65\u3002"),
                vue.createVNode("p", null, "\u4EBA\u751F\u805A\u6563\uFF0C\u56E0\u4E86\u61C2\u5F97\u4E00\u5207\u5B89\u597D\uFF1B\u82B1\u5F00\u82B1\u843D\uFF0C\u56E0\u4E86\u61C2\u5F97\u7686\u5316\u8BD7\u610F\u3002\u4F60\u660E\u4E86\u6211\u7684\u6545\u4E8B\uFF0C\u6211\u6E05\u695A\u4F60\u7684\u60B2\u559C\uFF0C\u6000\u4E00\u4EFD\u61C2\u5F97\uFF0C\u628A\u7ECF\u5E74\u7684\u5BC2\u5BE5\u5FC3\u4E8B\u4E22\u5728\u98CE\u91CC\uFF0C\u7528\u6676\u83B9\u7684\u96E8\u4E1D\u4E32\u8D77\u70B9\u6EF4\u7F8E\u597D\uFF0C\u5C06\u7EC6\u5FAE\u7684\u771F\u60C5\u548C\u611F\u52A8\u7528\u5FC3\u6536\u85CF\uFF0C\u4E8E\u662F\uFF0C\u524D\u884C\u8DEF\u4E0A\uFF0C\u6BCF\u4E00\u6B65\u90FD\u80FD\u8E0F\u8FDB\u82B1\u5F00\u7684\u8282\u594F\uFF0C\u6BCF\u4E00\u7A0B\u90FD\u80FD\u95FB\u53CA\u9E1F\u8BED\u82B1\u9999\u3002\u65F6\u5149\u4E0D\u8001\uFF0C\u82B1\u9999\u4E0D\u6563\u3002"),
                vue.createVNode("p", null, "\u5728\u98CE\u94C3\u53EE\u5F53\u58F0\u91CC\uFF0C\u7EFE\u7ED3\u7684\u5FC3\u4E8B\u6E10\u6E10\u4E91\u6DE1\u98CE\u8F7B\u3002\u7559\u4E00\u4E2A\u6726\u80E7\u7684\u526A\u5F71\u9759\u9759\u60F3\u5FF5\uFF0C\u4EFB\u6E29\u60C5\u5728\u751F\u547D\u91CC\u6D8C\u52A8\u3001\u6D9F\u6F2A\uFF0C\u4EFB\u843D\u7B14\u7684\u5FC3\u8BED\uFF0C\u5728\u716E\u5B57\u4E2D\u968F\u98CE\u4E91\u4E00\u540C\u8FDC\u53BB\u3002\u53EA\u8981\u5FC3\u4E2D\u6709\u666F\uFF0C\u65E0\u5904\u4E0D\u82B1\u9999\u6EE1\u5F84\u3002"),
                vue.createVNode("p", null, "\u516B\u6708\uFF0C\u6696\u6696\u7684\u9633\u5149\u843D\u5728\u8EAB\u4E0A\uFF0C\u5728\u6D53\u5BC6\u7684\u82B1\u5F71\u91CC\u6E38\u8D70\uFF0C\u637B\u4E00\u6735\u82B1\uFF0C\u6D45\u7B11\u7740\uFF0C\u4E0E\u67D4\u60C5\u76F8\u62E5\uFF0C\u5E78\u798F\uFF0C\u5C31\u6B64\u6F3E\u5F00\uFF0C\u6EE1\u76EE\u7F24\u7EB7\u3002"),
                vue.createVNode("p", null, "\u63A9\u5377\u503E\u542C\uFF0C\u4E00\u9996\u300A\u76F8\u9047\u662F\u7F18\u300B\u7F31\u7EFB\u98CE\u4E2D\u3002\u597D\u60F3\uFF0C\u7AD9\u5728\u521D\u8BC6\u7684\u8DEF\u53E3\uFF0C\u91CD\u62FE\u843D\u82B1\uFF0C\u91CD\u6E29\u65E7\u6B22\uFF0C\u9759\u5B88\u82B1\u5F00\u3002\u76DB\u590F\u8DEF\u4E0A\uFF0C\u5FC3\u5FF5\u751F\u9999\uFF0C\u5728\u6696\u98CE\u5C45\u4F4F\u7684\u8857\u9053\uFF0C\u6211\u613F\u9759\u5FC3\u7B49\u5F85\u7740\u518D\u4E00\u6B21\u7684\u5B63\u8282\u76F8\u7EA6\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/Quietly-keeping-the-flowers-in-bloom.md");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var QuietlyKeepingTheFlowersInBloom = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  name: "domain-eamil",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Domain Email", "date": "2020-06-05T13:29:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 2min", "description": "Domain Name Custom Mailboxes\u3002", "meta": [{ "property": "og:title", "content": "Domain Email" }, { "property": "og:description", "content": "Domain Name Custom Mailboxes\u3002" }, { "name": "description", "content": "Domain Name Custom Mailboxes\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Domain Email", "meta": [{ "property": "og:title", "content": "Domain Email" }, { "property": "og:description", "content": "Domain Name Custom Mailboxes\u3002" }, { "name": "description", "content": "Domain Name Custom Mailboxes\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 id="the-cause" tabindex="-1"${_scopeId}>The cause <a class="header-anchor" href="#the-cause" aria-hidden="true"${_scopeId}>#</a></h2><blockquote${_scopeId}><p${_scopeId}>How to have a short and nice email address?</p></blockquote><p${_scopeId}>I got interested in having a short and nice email address. My current one in Hotmail is just too long to even being spell out in talk. <a href="https://www.hey.com/" target="_blank" rel="noopener"${_scopeId}>hey.com</a> looks very nice but $99/year is not a very good deal to me. I decide to use my own domain for receiving emails.</p><h2 id="search" tabindex="-1"${_scopeId}>Search <a class="header-anchor" href="#search" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>With this in mind, I started searching for E-mail Free On Github, And found <a href="https://github.com/forwardemail" target="_blank" rel="noopener"${_scopeId}>Forward Email - Free</a> in the search results.</p><h2 id="the-solution" tabindex="-1"${_scopeId}>The solution <a class="header-anchor" href="#the-solution" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>The DNS forwarding feature just works the same, but it requires you to log in and register your domain now.</p><p${_scopeId}>The config is quite simple as usual, just 3 DNS record:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Host Records</th><th${_scopeId}>Type of record</th><th${_scopeId}>Recorded values</th><th${_scopeId}>MX Record Priority</th><th${_scopeId}>TTL</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>@</td><td${_scopeId}>MX</td><td${_scopeId}>mx1.forwardemail.net</td><td${_scopeId}>10</td><td${_scopeId}>600</td></tr><tr${_scopeId}><td${_scopeId}>@</td><td${_scopeId}>MX</td><td${_scopeId}>mx2.forwardemail.net</td><td${_scopeId}>20</td><td${_scopeId}>600</td></tr><tr${_scopeId}><td${_scopeId}>@</td><td${_scopeId}>TXT</td><td${_scopeId}><a href="mailto:forward-email=youremail@example.com"${_scopeId}>forward-email=youremail@example.com</a></td><td${_scopeId}></td><td${_scopeId}>600</td></tr></tbody></table><p${_scopeId}>That\u2019s it! It also provides some advanced configs, you can check <a href="https://forwardemail.net/en/faq" target="_blank" rel="noopener"${_scopeId}>the doc here</a>, For more details pleases see <a href="https://forwardemail.net/en/faq#lazyframe-MEheS8gM4Xs" target="_blank" rel="noopener"${_scopeId}>How do I get started and set up email forwarding</a></p><p${_scopeId}>And now, you can say hi to me at <a href="mailto:hi@oyxiaoxi.me"${_scopeId}>hi@oyxiaoxi.me</a>!</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("h2", {
                  id: "the-cause",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("The cause "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#the-cause",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "How to have a short and nice email address?")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("I got interested in having a short and nice email address. My current one in Hotmail is just too long to even being spell out in talk. "),
                  vue.createVNode("a", {
                    href: "https://www.hey.com/",
                    target: "_blank",
                    rel: "noopener"
                  }, "hey.com"),
                  vue.createTextVNode(" looks very nice but $99/year is not a very good deal to me. I decide to use my own domain for receiving emails.")
                ]),
                vue.createVNode("h2", {
                  id: "search",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Search "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#search",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("With this in mind, I started searching for E-mail Free On Github, And found "),
                  vue.createVNode("a", {
                    href: "https://github.com/forwardemail",
                    target: "_blank",
                    rel: "noopener"
                  }, "Forward Email - Free"),
                  vue.createTextVNode(" in the search results.")
                ]),
                vue.createVNode("h2", {
                  id: "the-solution",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("The solution "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#the-solution",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "The DNS forwarding feature just works the same, but it requires you to log in and register your domain now."),
                vue.createVNode("p", null, "The config is quite simple as usual, just 3 DNS record:"),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "Host Records"),
                      vue.createVNode("th", null, "Type of record"),
                      vue.createVNode("th", null, "Recorded values"),
                      vue.createVNode("th", null, "MX Record Priority"),
                      vue.createVNode("th", null, "TTL")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "@"),
                      vue.createVNode("td", null, "MX"),
                      vue.createVNode("td", null, "mx1.forwardemail.net"),
                      vue.createVNode("td", null, "10"),
                      vue.createVNode("td", null, "600")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "@"),
                      vue.createVNode("td", null, "MX"),
                      vue.createVNode("td", null, "mx2.forwardemail.net"),
                      vue.createVNode("td", null, "20"),
                      vue.createVNode("td", null, "600")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "@"),
                      vue.createVNode("td", null, "TXT"),
                      vue.createVNode("td", null, [
                        vue.createVNode("a", { href: "mailto:forward-email=youremail@example.com" }, "forward-email=youremail@example.com")
                      ]),
                      vue.createVNode("td"),
                      vue.createVNode("td", null, "600")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("That\u2019s it! It also provides some advanced configs, you can check "),
                  vue.createVNode("a", {
                    href: "https://forwardemail.net/en/faq",
                    target: "_blank",
                    rel: "noopener"
                  }, "the doc here"),
                  vue.createTextVNode(", For more details pleases see "),
                  vue.createVNode("a", {
                    href: "https://forwardemail.net/en/faq#lazyframe-MEheS8gM4Xs",
                    target: "_blank",
                    rel: "noopener"
                  }, "How do I get started and set up email forwarding")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("And now, you can say hi to me at "),
                  vue.createVNode("a", { href: "mailto:hi@oyxiaoxi.me" }, "hi@oyxiaoxi.me"),
                  vue.createTextVNode("!")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/domain-eamil.md");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var domainEamil = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  name: "find-files",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Flush MAC Dns cache", "date": "2019-08-19T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "Flush MAC Dns cache\u3002", "meta": [{ "property": "og:title", "content": "Flush MAC Dns cache" }, { "property": "og:description", "content": "Flush MAC Dns cache\u3002" }, { "name": "description", "content": "Flush MAC Dns cache\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Flush MAC Dns cache", "meta": [{ "property": "og:title", "content": "Flush MAC Dns cache" }, { "property": "og:description", "content": "Flush MAC Dns cache\u3002" }, { "name": "description", "content": "Flush MAC Dns cache\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token function"${_scopeId}>sudo</span> dscacheutil -flushcache
<span class="token comment"${_scopeId}># \u914D\u5408 nslookup</span>
<span class="token function"${_scopeId}>nslookup</span> www.github.com
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token function" }, "sudo"),
                    vue.createTextVNode(" dscacheutil -flushcache\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u914D\u5408 nslookup"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "nslookup"),
                    vue.createTextVNode(" www.github.com\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/find-files.md");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var findFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  name: "forced-cross-domain",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Forced Cross Domain", "date": "2022-05-16T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002", "meta": [{ "property": "og:title", "content": "Forced Cross Domain" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Forced Cross Domain", "meta": [{ "property": "og:title", "content": "Forced Cross Domain" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Chrome 93\u7248\u672C\u4EE5\u524D\u8DE8\u57DF</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token function"${_scopeId}>open</span> -a /Applications/Google<span class="token operator"${_scopeId}>|</span> Chrome.app --args--disable-web-security--user-data-dir<span class="token operator"${_scopeId}>=</span>/User/Oyxiaoxi/Documents/MyChromeDevUserData
</code></pre><p${_scopeId}>Chrome 93\u7248\u672C\u4EE5\u540E\u8DE8\u57DF</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token function"${_scopeId}>open</span> -a /Applications/Google <span class="token operator"${_scopeId}>|</span> Chrome.app --args--disable-web-security--disable-features<span class="token operator"${_scopeId}>=</span>SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure--user-data-dir<span class="token operator"${_scopeId}>=</span>/
User/Oyxiaoxi/Documents/MyChromeDevUserData
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "Chrome 93\u7248\u672C\u4EE5\u524D\u8DE8\u57DF"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token function" }, "open"),
                    vue.createTextVNode(" -a /Applications/Google"),
                    vue.createVNode("span", { class: "token operator" }, "|"),
                    vue.createTextVNode(" Chrome.app --args--disable-web-security--user-data-dir"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode("/User/Oyxiaoxi/Documents/MyChromeDevUserData\n")
                  ])
                ]),
                vue.createVNode("p", null, "Chrome 93\u7248\u672C\u4EE5\u540E\u8DE8\u57DF"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token function" }, "open"),
                    vue.createTextVNode(" -a /Applications/Google "),
                    vue.createVNode("span", { class: "token operator" }, "|"),
                    vue.createTextVNode(" Chrome.app --args--disable-web-security--disable-features"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode("SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure--user-data-dir"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode("/\nUser/Oyxiaoxi/Documents/MyChromeDevUserData\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/forced-cross-domain.md");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var forcedCrossDomain = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  name: "france",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "France", "date": "2018-04-10T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "France Travel itineraries\u3002", "meta": [{ "property": "og:title", "content": "France" }, { "property": "og:description", "content": "France Travel itineraries\u3002" }, { "name": "description", "content": "France Travel itineraries\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "France", "meta": [{ "property": "og:title", "content": "France" }, { "property": "og:description", "content": "France Travel itineraries\u3002" }, { "name": "description", "content": "France Travel itineraries\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<ul${_scopeId}><li${_scopeId}>\u5362\u6D6E\u5BAB \u2192 \u675C\u4E50\u4E3D\u82B1\u56ED \u2192 \u534F\u548C\u5E7F\u573A \u2192 \u4E9A\u5386\u5C71\u5927\u4E09\u4E16\u6865 \u2192 \u585E\u7EB3\u6CB3\u6E38\u8239</li><li${_scopeId}>\u5965\u8D5B\u535A\u7269\u9986 \u2192 \u6A58\u56ED\u7F8E\u672F\u9986 \u2192 \u9999\u69AD\u4E3D\u820D\u5927\u8857 \u2192 Laduree \u2192 \u5DF4\u9ECE\u51EF\u65CB\u95E8 \u2192 \u57C3\u83F2\u5C14\u94C1\u5854</li><li${_scopeId}>\u5362\u68EE\u5821\u516C\u56ED \u2192 \u82B1\u795E\u5496\u5561\u9986 \u2192 \u5148\u8D24\u7960 \u2192 \u838E\u58EB\u6BD4\u4E9A\u4E66\u5E97 \u2192 \u5DF4\u9ECE\u5723\u6BCD\u9662 \u2192 \u84EC\u76AE\u675C\u56FD\u5BB6\u827A\u672F\u6587\u5316\u4E2D\u5FC3</li><li${_scopeId}>\u7231\u5899 \u2192 \u6CD5\u56FD\u5723\u5FC3\u5927\u6559\u5802 \u2192 \u5DF4\u9ECE\u6B4C\u5267\u9662 \u2192 \u5DF4\u9ECE\u8001\u4F5B\u7237\u5965\u65AF\u66FC\u65D7\u8230\u5E97 \u2192 \u6CD5\u56FD\u6625\u5929\u767E\u8D27</li><li${_scopeId}>\u51E1\u5C14\u8D5B\u5BAB</li><li${_scopeId}>\u83AB\u5948\u82B1\u56ED \u2192 \u67AB\u4E39\u767D\u9732\u5BAB \u2192 \u5DF4\u5C14\u6BD4\u5B97</li><li${_scopeId}>\u5DF4\u9ECE\u8FEA\u58EB\u5C3C\u4E50\u56ED</li></ul></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u5362\u6D6E\u5BAB \u2192 \u675C\u4E50\u4E3D\u82B1\u56ED \u2192 \u534F\u548C\u5E7F\u573A \u2192 \u4E9A\u5386\u5C71\u5927\u4E09\u4E16\u6865 \u2192 \u585E\u7EB3\u6CB3\u6E38\u8239"),
                  vue.createVNode("li", null, "\u5965\u8D5B\u535A\u7269\u9986 \u2192 \u6A58\u56ED\u7F8E\u672F\u9986 \u2192 \u9999\u69AD\u4E3D\u820D\u5927\u8857 \u2192 Laduree \u2192 \u5DF4\u9ECE\u51EF\u65CB\u95E8 \u2192 \u57C3\u83F2\u5C14\u94C1\u5854"),
                  vue.createVNode("li", null, "\u5362\u68EE\u5821\u516C\u56ED \u2192 \u82B1\u795E\u5496\u5561\u9986 \u2192 \u5148\u8D24\u7960 \u2192 \u838E\u58EB\u6BD4\u4E9A\u4E66\u5E97 \u2192 \u5DF4\u9ECE\u5723\u6BCD\u9662 \u2192 \u84EC\u76AE\u675C\u56FD\u5BB6\u827A\u672F\u6587\u5316\u4E2D\u5FC3"),
                  vue.createVNode("li", null, "\u7231\u5899 \u2192 \u6CD5\u56FD\u5723\u5FC3\u5927\u6559\u5802 \u2192 \u5DF4\u9ECE\u6B4C\u5267\u9662 \u2192 \u5DF4\u9ECE\u8001\u4F5B\u7237\u5965\u65AF\u66FC\u65D7\u8230\u5E97 \u2192 \u6CD5\u56FD\u6625\u5929\u767E\u8D27"),
                  vue.createVNode("li", null, "\u51E1\u5C14\u8D5B\u5BAB"),
                  vue.createVNode("li", null, "\u83AB\u5948\u82B1\u56ED \u2192 \u67AB\u4E39\u767D\u9732\u5BAB \u2192 \u5DF4\u5C14\u6BD4\u5B97"),
                  vue.createVNode("li", null, "\u5DF4\u9ECE\u8FEA\u58EB\u5C3C\u4E50\u56ED")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/france.md");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var france = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  name: "game-theory-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u535A\u5F08\u8BBA", "date": "2021-06-28T11:02:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002", "meta": [{ "property": "og:title", "content": "\u535A\u5F08\u8BBA" }, { "property": "og:description", "content": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002" }, { "name": "description", "content": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u535A\u5F08\u8BBA", "meta": [{ "property": "og:title", "content": "\u535A\u5F08\u8BBA" }, { "property": "og:description", "content": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002" }, { "name": "description", "content": "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}><img src="//cdn.3333120.com/article/game-thory/truce.jpeg" alt="Game Theory"${_scopeId}></p><p${_scopeId}>\u535A\u5F08\u8BBA\u5411\u6211\u4EEC\u63ED\u793A\u4E86\u8981\u53D1\u5C55\u4FE1\u4EFB\u4EBA\u4EEC\u6240\u9700\u8981\u638C\u63E1\u7684\u4E09\u4EF6\u4E8B\uFF1A</p><h3 id="_1-\u91CD\u590D\u7684\u4E92\u52A8" tabindex="-1"${_scopeId}>1. \u91CD\u590D\u7684\u4E92\u52A8 <a class="header-anchor" href="#_1-\u91CD\u590D\u7684\u4E92\u52A8" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u4FE1\u4EFB\u662F\u4FDD\u6301\u4EBA\u9645\u5173\u7CFB\u957F\u4E45\u7684\u57FA\u77F3\uFF0C\u4F46\u4FE1\u4EFB\u80FD\u591F\u5EFA\u7ACB\u7684\u524D\u63D0\uFF0C\u662F\u4F60\u8981\u77E5\u9053\u4F60\u4EEC\u672A\u6765\u4F1A\u6709\u91CD\u590D\u7684\u4E92\u52A8\u3002</p><h3 id="_2-\u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD" tabindex="-1"${_scopeId}>2. \u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD <a class="header-anchor" href="#_2-\u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u4F60\u5FC5\u987B\u8FDB\u884C\u975E\u96F6\u548C\u6E38\u620F\uFF0C\u800C\u5728\u8FD9\u6837\u7684\u6E38\u620F\u535A\u5F08\u4E2D\uFF0C\u5E76\u4E0D\u8981\u6C42\u4E24\u4E2A\u73A9\u5BB6\u90FD\u4F1A\u53D8\u5F97\u66F4\u597D\uFF0C\u8FBE\u5230\u53CC\u8D62\uFF0C\u4F46\u81F3\u5C11\u5FC5\u987B\u8981\u6709\u8FBE\u6210\u53CC\u8D62\u7684\u53EF\u80FD\u6027\u3002</p><h3 id="_3-\u4F4E\u6982\u7387\u7684\u8BEF\u89E3" tabindex="-1"${_scopeId}>3. \u4F4E\u6982\u7387\u7684\u8BEF\u89E3 <a class="header-anchor" href="#_3-\u4F4E\u6982\u7387\u7684\u8BEF\u89E3" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u5982\u679C\u8BEF\u89E3\u53D1\u751F\u5F97\u8FC7\u591A\uFF0C\u4FE1\u4EFB\u5C31\u4F1A\u74E6\u89E3\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6709\u4E00\u70B9\u70B9\u8BEF\u4F1A\u7684\u65F6\u5019\uFF0C\u5B83\u5C06\u4F7F\u5BBD\u5BB9\u8513\u5EF6\u5F00\u6765\u3002</p><p${_scopeId}>\u6E38\u620F\u662F\u4EC0\u4E48\uFF0C\u76F4\u63A5\u51B3\u5B9A\u4E86\u73A9\u5BB6\u505A\u4EC0\u4E48\u3002</p><p${_scopeId}>\u6211\u4EEC\u4ECA\u5929\u7684\u95EE\u9898\u5E76\u4E0D\u4EC5\u4EC5\u662F\u4EBA\u4EEC\u6B63\u5728\u5931\u53BB\u4FE1\u4EFB\uFF0C\u800C\u662F\u6211\u4EEC\u7684\u73AF\u5883\u6B63\u5728\u8FDD\u80CC\u4FE1\u4EFB\u8FDB\u5316\u7684\u89C4\u5F8B\u3002</p><p${_scopeId}>\u300C\u6211\u4EEC\u4EC5\u4EC5\u662F\u6211\u4EEC\u5468\u906D\u73AF\u5883\u7684\u4EA7\u7269\u300D\uFF0C\u8FD9\u4E2A\u89C2\u5FF5\u53EF\u80FD\u770B\u8D77\u6765\u53EF\u80FD\u6709\u70B9\u72AC\u5112\u6216\u8005\u5929\u771F\u65E0\u90AA\uFF0C\u4F46\u662F\u535A\u5F08\u8BBA\u4E5F\u5728\u63D0\u9192\u7740\uFF0C\u6211\u4EEC\u5C31\u662F\u5F7C\u6B64\u7684\u73AF\u5883\u554A\u3002\u77ED\u671F\u6765\u8BB2\uFF0C\u6E38\u620F\u51B3\u5B9A\u73A9\u5BB6\uFF0C\u4F46\u662F\u957F\u671F\u6765\u8BF4\uFF0C\u51B3\u5B9A\u6E38\u620F\u7684\u6B63\u662F\u6211\u4EEC\u8FD9\u4E9B\u73A9\u5BB6\u3002</p><p${_scopeId}>\u6211\u4EEC\u6BCF\u4E2A\u4EBA\u90FD\u884C\u52A8\u8D77\u6765\uFF0C\u505A\u4F60\u529B\u6240\u80FD\u53CA\u7684\uFF0C\u53BB\u521B\u9020\u4E00\u4E2A\u53EF\u4EE5\u8BA9\u4FE1\u4EFB\u8FDB\u5316\u7684\u6761\u4EF6\u3002\u5EFA\u7ACB\u4EBA\u9645\u5173\u7CFB\u3001\u52AA\u529B\u5BFB\u6C42\u53CC\u8D62\u3001\u6C9F\u901A\u5C3D\u91CF\u6E05\u6670\u3002\u6216\u8BB8\u5230\u4E86\u90A3\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u80FD\u591F\u505C\u6B62\u5411\u5BF9\u65B9\u5F00\u706B\uFF0C\u8D70\u51FA\u5404\u81EA\u7684\u6218\u58D5\uFF0C\u7A7F\u8FC7\u6218\u4E89\u7684\u65E0\u4EBA\u5730\u5E26\u6765\u5230\u5F7C\u6B64\u9762\u524D\u2026</p><p${_scopeId}>\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/game-thory/truce.jpeg",
                    alt: "Game Theory"
                  })
                ]),
                vue.createVNode("p", null, "\u535A\u5F08\u8BBA\u5411\u6211\u4EEC\u63ED\u793A\u4E86\u8981\u53D1\u5C55\u4FE1\u4EFB\u4EBA\u4EEC\u6240\u9700\u8981\u638C\u63E1\u7684\u4E09\u4EF6\u4E8B\uFF1A"),
                vue.createVNode("h3", {
                  id: "_1-\u91CD\u590D\u7684\u4E92\u52A8",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("1. \u91CD\u590D\u7684\u4E92\u52A8 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_1-\u91CD\u590D\u7684\u4E92\u52A8",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u4FE1\u4EFB\u662F\u4FDD\u6301\u4EBA\u9645\u5173\u7CFB\u957F\u4E45\u7684\u57FA\u77F3\uFF0C\u4F46\u4FE1\u4EFB\u80FD\u591F\u5EFA\u7ACB\u7684\u524D\u63D0\uFF0C\u662F\u4F60\u8981\u77E5\u9053\u4F60\u4EEC\u672A\u6765\u4F1A\u6709\u91CD\u590D\u7684\u4E92\u52A8\u3002"),
                vue.createVNode("h3", {
                  id: "_2-\u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("2. \u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_2-\u300C\u53CC\u8D62\u300D\u5E76\u975E\u4E0D\u53EF\u80FD",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u4F60\u5FC5\u987B\u8FDB\u884C\u975E\u96F6\u548C\u6E38\u620F\uFF0C\u800C\u5728\u8FD9\u6837\u7684\u6E38\u620F\u535A\u5F08\u4E2D\uFF0C\u5E76\u4E0D\u8981\u6C42\u4E24\u4E2A\u73A9\u5BB6\u90FD\u4F1A\u53D8\u5F97\u66F4\u597D\uFF0C\u8FBE\u5230\u53CC\u8D62\uFF0C\u4F46\u81F3\u5C11\u5FC5\u987B\u8981\u6709\u8FBE\u6210\u53CC\u8D62\u7684\u53EF\u80FD\u6027\u3002"),
                vue.createVNode("h3", {
                  id: "_3-\u4F4E\u6982\u7387\u7684\u8BEF\u89E3",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("3. \u4F4E\u6982\u7387\u7684\u8BEF\u89E3 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_3-\u4F4E\u6982\u7387\u7684\u8BEF\u89E3",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u5982\u679C\u8BEF\u89E3\u53D1\u751F\u5F97\u8FC7\u591A\uFF0C\u4FE1\u4EFB\u5C31\u4F1A\u74E6\u89E3\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6709\u4E00\u70B9\u70B9\u8BEF\u4F1A\u7684\u65F6\u5019\uFF0C\u5B83\u5C06\u4F7F\u5BBD\u5BB9\u8513\u5EF6\u5F00\u6765\u3002"),
                vue.createVNode("p", null, "\u6E38\u620F\u662F\u4EC0\u4E48\uFF0C\u76F4\u63A5\u51B3\u5B9A\u4E86\u73A9\u5BB6\u505A\u4EC0\u4E48\u3002"),
                vue.createVNode("p", null, "\u6211\u4EEC\u4ECA\u5929\u7684\u95EE\u9898\u5E76\u4E0D\u4EC5\u4EC5\u662F\u4EBA\u4EEC\u6B63\u5728\u5931\u53BB\u4FE1\u4EFB\uFF0C\u800C\u662F\u6211\u4EEC\u7684\u73AF\u5883\u6B63\u5728\u8FDD\u80CC\u4FE1\u4EFB\u8FDB\u5316\u7684\u89C4\u5F8B\u3002"),
                vue.createVNode("p", null, "\u300C\u6211\u4EEC\u4EC5\u4EC5\u662F\u6211\u4EEC\u5468\u906D\u73AF\u5883\u7684\u4EA7\u7269\u300D\uFF0C\u8FD9\u4E2A\u89C2\u5FF5\u53EF\u80FD\u770B\u8D77\u6765\u53EF\u80FD\u6709\u70B9\u72AC\u5112\u6216\u8005\u5929\u771F\u65E0\u90AA\uFF0C\u4F46\u662F\u535A\u5F08\u8BBA\u4E5F\u5728\u63D0\u9192\u7740\uFF0C\u6211\u4EEC\u5C31\u662F\u5F7C\u6B64\u7684\u73AF\u5883\u554A\u3002\u77ED\u671F\u6765\u8BB2\uFF0C\u6E38\u620F\u51B3\u5B9A\u73A9\u5BB6\uFF0C\u4F46\u662F\u957F\u671F\u6765\u8BF4\uFF0C\u51B3\u5B9A\u6E38\u620F\u7684\u6B63\u662F\u6211\u4EEC\u8FD9\u4E9B\u73A9\u5BB6\u3002"),
                vue.createVNode("p", null, "\u6211\u4EEC\u6BCF\u4E2A\u4EBA\u90FD\u884C\u52A8\u8D77\u6765\uFF0C\u505A\u4F60\u529B\u6240\u80FD\u53CA\u7684\uFF0C\u53BB\u521B\u9020\u4E00\u4E2A\u53EF\u4EE5\u8BA9\u4FE1\u4EFB\u8FDB\u5316\u7684\u6761\u4EF6\u3002\u5EFA\u7ACB\u4EBA\u9645\u5173\u7CFB\u3001\u52AA\u529B\u5BFB\u6C42\u53CC\u8D62\u3001\u6C9F\u901A\u5C3D\u91CF\u6E05\u6670\u3002\u6216\u8BB8\u5230\u4E86\u90A3\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u80FD\u591F\u505C\u6B62\u5411\u5BF9\u65B9\u5F00\u706B\uFF0C\u8D70\u51FA\u5404\u81EA\u7684\u6218\u58D5\uFF0C\u7A7F\u8FC7\u6218\u4E89\u7684\u65E0\u4EBA\u5730\u5E26\u6765\u5230\u5F7C\u6B64\u9762\u524D\u2026"),
                vue.createVNode("p", null, "\u4E92\u60E0\u5BBD\u5BB9\u5730\u4E0E\u4EBA\u76F8\u5904\u4E4B\u7F8E")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/game-theory-zh.md");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var gameTheoryZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  name: "germany",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Germany", "date": "2017-11-13T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Germany Travel itineraries\u3002", "meta": [{ "property": "og:title", "content": "Germany" }, { "property": "og:description", "content": "Germany Travel itineraries\u3002" }, { "name": "description", "content": "Germany Travel itineraries\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Germany", "meta": [{ "property": "og:title", "content": "Germany" }, { "property": "og:description", "content": "Germany Travel itineraries\u3002" }, { "name": "description", "content": "Germany Travel itineraries\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<blockquote${_scopeId}><p${_scopeId}>Audi R7 140 - 160 km/h</p></blockquote><ul${_scopeId}><li${_scopeId}>\u6D77\u5FB7\u5821 \u2192 \u65AF\u56FE\u52A0\u7279 \u2192 \u9EA6\u7434\u6839 \u2192 \u7F57\u6ED5\u5821(\u5DF4\u4F10\u5229\u4E9A) \u2192 \u4E01\u514B\u5C14\u65AF\u6BD4\u5C14 \u2192 \u5965\u683C\u65AF\u5821 \u2192 \u798F\u68EE \u2192 \u52A0\u5C14\u7C73\u65BD-\u5E15\u817E\u57FA\u5174 \u2192 \u6155\u5C3C\u9ED1</li></ul></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "Audi R7 140 - 160 km/h")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u6D77\u5FB7\u5821 \u2192 \u65AF\u56FE\u52A0\u7279 \u2192 \u9EA6\u7434\u6839 \u2192 \u7F57\u6ED5\u5821(\u5DF4\u4F10\u5229\u4E9A) \u2192 \u4E01\u514B\u5C14\u65AF\u6BD4\u5C14 \u2192 \u5965\u683C\u65AF\u5821 \u2192 \u798F\u68EE \u2192 \u52A0\u5C14\u7C73\u65BD-\u5E15\u817E\u57FA\u5174 \u2192 \u6155\u5C3C\u9ED1")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/germany.md");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var germany = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  name: "github-copilot",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Github Copilot", "date": "2022-03-30T16:00:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 7min", "description": "Github Copilot\u3002", "meta": [{ "property": "og:title", "content": "Github Copilot" }, { "property": "og:description", "content": "Github Copilot\u3002" }, { "name": "description", "content": "Github Copilot\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Github Copilot", "meta": [{ "property": "og:title", "content": "Github Copilot" }, { "property": "og:description", "content": "Github Copilot\u3002" }, { "name": "description", "content": "Github Copilot\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Your AI pair programmer With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor.</p><p${_scopeId}>Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.</p><h3 id="more-than-autocomplete" tabindex="-1"${_scopeId}>More than autocomplete <a class="header-anchor" href="#more-than-autocomplete" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>GitHub Copilot is powered by Codex, the new AI system created by OpenAI. GitHub Copilot understands significantly more context than most code assistants. So, whether it\u2019s in a docstring, comment, function name, or the code itself, GitHub Copilot uses the context you\u2019ve provided and synthesizes code to match. Together with OpenAI, we\u2019re designing GitHub Copilot to get smarter at producing safe and effective code as developers use it.</p><p${_scopeId}>On the morning of March 30th, at 9:30am, I received an email from GitHub approving my application for GitHub Copilot.</p><p${_scopeId}>After a few hours of using it, the most intuitive feeling I had was that I was going to lose my job: it was so smart that it would automatically AI-complete the logic by writing a comment and a method name</p><p${_scopeId}><a href="https://leetcode.com/problems/sliding-window-maximum/" target="_blank" rel="noopener"${_scopeId}>Leetcode 239 Sliding Window Maximum</a></p><pre class="language-swift"${_scopeId}><code class="language-swift"${_scopeId}><span class="token comment"${_scopeId}>// Github Copilot</span>
<span class="token keyword"${_scopeId}>class</span> <span class="token class-name"${_scopeId}>Solution</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token comment"${_scopeId}>// Sliding Window Maximum</span>
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>maxSlidingWindow</span><span class="token punctuation"${_scopeId}>(</span><span class="token omit keyword"${_scopeId}>_</span> nums<span class="token punctuation"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>,</span> <span class="token omit keyword"${_scopeId}>_</span> k<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>-&gt;</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token comment"${_scopeId}>// github copilot Generated code snippets</span>
      	<span class="token keyword"${_scopeId}>var</span> res <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
        <span class="token keyword"${_scopeId}>if</span> nums<span class="token punctuation"${_scopeId}>.</span>count <span class="token operator"${_scopeId}>==</span> <span class="token number"${_scopeId}>0</span> <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>return</span> res
        <span class="token punctuation"${_scopeId}>}</span>
        <span class="token keyword"${_scopeId}>var</span> deque <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
        <span class="token keyword"${_scopeId}>for</span> i <span class="token keyword"${_scopeId}>in</span> <span class="token number"${_scopeId}>0</span><span class="token operator"${_scopeId}>..&lt;</span>nums<span class="token punctuation"${_scopeId}>.</span>count <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>while</span> deque<span class="token punctuation"${_scopeId}>.</span>count <span class="token operator"${_scopeId}>&gt;</span> <span class="token number"${_scopeId}>0</span> <span class="token operator"${_scopeId}>&amp;&amp;</span> nums<span class="token punctuation"${_scopeId}>[</span>deque<span class="token punctuation"${_scopeId}>.</span>last<span class="token operator"${_scopeId}>!</span><span class="token punctuation"${_scopeId}>]</span> <span class="token operator"${_scopeId}>&lt;</span> nums<span class="token punctuation"${_scopeId}>[</span>i<span class="token punctuation"${_scopeId}>]</span> <span class="token punctuation"${_scopeId}>{</span>
                deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>removeLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
            deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>append</span><span class="token punctuation"${_scopeId}>(</span>i<span class="token punctuation"${_scopeId}>)</span>
            <span class="token keyword"${_scopeId}>if</span> deque<span class="token punctuation"${_scopeId}>.</span>first<span class="token operator"${_scopeId}>!</span> <span class="token operator"${_scopeId}>+</span> k <span class="token operator"${_scopeId}>&lt;=</span> i <span class="token punctuation"${_scopeId}>{</span>
                deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>removeFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
            <span class="token keyword"${_scopeId}>if</span> i <span class="token operator"${_scopeId}>&gt;=</span> k <span class="token operator"${_scopeId}>-</span> <span class="token number"${_scopeId}>1</span> <span class="token punctuation"${_scopeId}>{</span>
                res<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>append</span><span class="token punctuation"${_scopeId}>(</span>nums<span class="token punctuation"${_scopeId}>[</span>deque<span class="token punctuation"${_scopeId}>.</span>first<span class="token operator"${_scopeId}>!</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
        <span class="token punctuation"${_scopeId}>}</span>
        <span class="token keyword"${_scopeId}>return</span> res
    <span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token comment"${_scopeId}>// ME</span>
<span class="token keyword"${_scopeId}>class</span> <span class="token class-name"${_scopeId}>DequeItem</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>var</span> prior<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token operator"${_scopeId}>?</span>
    <span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>var</span> next<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token operator"${_scopeId}>?</span>
    <span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>var</span> val<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span>
  
    <span class="token keyword"${_scopeId}>init</span><span class="token punctuation"${_scopeId}>(</span><span class="token omit keyword"${_scopeId}>_</span> value<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>prior <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
        <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>next <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
        <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>val <span class="token operator"${_scopeId}>=</span> value
    <span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token keyword"${_scopeId}>class</span> <span class="token class-name"${_scopeId}>Deque</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>private</span> <span class="token keyword"${_scopeId}>var</span> first<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token operator"${_scopeId}>?</span>
    <span class="token keyword"${_scopeId}>private</span> <span class="token keyword"${_scopeId}>var</span> last<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token operator"${_scopeId}>?</span>
  
    <span class="token keyword"${_scopeId}>init</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
        <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>isEmpty</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>-&gt;</span> <span class="token class-name"${_scopeId}>Bool</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>return</span> first <span class="token operator"${_scopeId}>==</span> <span class="token nil constant"${_scopeId}>nil</span>
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>peekFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>-&gt;</span> <span class="token class-name"${_scopeId}>Int</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>return</span> first<span class="token operator"${_scopeId}>!</span><span class="token punctuation"${_scopeId}>.</span>val
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>peekLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>-&gt;</span> <span class="token class-name"${_scopeId}>Int</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>return</span> last<span class="token operator"${_scopeId}>!</span><span class="token punctuation"${_scopeId}>.</span>val
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>pollFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> first <span class="token operator"${_scopeId}>=</span> <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> prior <span class="token operator"${_scopeId}>=</span> first<span class="token punctuation"${_scopeId}>.</span>prior <span class="token punctuation"${_scopeId}>{</span>
                prior<span class="token punctuation"${_scopeId}>.</span>next <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                first<span class="token punctuation"${_scopeId}>.</span>prior <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> prior
            <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>else</span> <span class="token punctuation"${_scopeId}>{</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
            <span class="token punctuation"${_scopeId}>}</span>
        <span class="token punctuation"${_scopeId}>}</span>
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>pollLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> last <span class="token operator"${_scopeId}>=</span> <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> next <span class="token operator"${_scopeId}>=</span> last<span class="token punctuation"${_scopeId}>.</span>next <span class="token punctuation"${_scopeId}>{</span>
                next<span class="token punctuation"${_scopeId}>.</span>prior <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                last<span class="token punctuation"${_scopeId}>.</span>next <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> next
            <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>else</span> <span class="token punctuation"${_scopeId}>{</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
                <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> <span class="token nil constant"${_scopeId}>nil</span>
            <span class="token punctuation"${_scopeId}>}</span>
        <span class="token punctuation"${_scopeId}>}</span>
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>offerFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token omit keyword"${_scopeId}>_</span> num<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>let</span> item <span class="token operator"${_scopeId}>=</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token punctuation"${_scopeId}>(</span>num<span class="token punctuation"${_scopeId}>)</span>
        <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> first <span class="token operator"${_scopeId}>=</span> <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token punctuation"${_scopeId}>{</span>
            first<span class="token punctuation"${_scopeId}>.</span>next <span class="token operator"${_scopeId}>=</span> item
            item<span class="token punctuation"${_scopeId}>.</span>prior <span class="token operator"${_scopeId}>=</span> first
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> item
        <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>else</span> <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> item
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> item
        <span class="token punctuation"${_scopeId}>}</span>
    <span class="token punctuation"${_scopeId}>}</span>
  
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>offerLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token omit keyword"${_scopeId}>_</span> num<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>let</span> item <span class="token operator"${_scopeId}>=</span> <span class="token class-name"${_scopeId}>DequeItem</span><span class="token punctuation"${_scopeId}>(</span>num<span class="token punctuation"${_scopeId}>)</span>
        <span class="token keyword"${_scopeId}>if</span> <span class="token keyword"${_scopeId}>let</span> last <span class="token operator"${_scopeId}>=</span> <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token punctuation"${_scopeId}>{</span>
            last<span class="token punctuation"${_scopeId}>.</span>prior <span class="token operator"${_scopeId}>=</span> item
            item<span class="token punctuation"${_scopeId}>.</span>next <span class="token operator"${_scopeId}>=</span> last
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> item
        <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>else</span> <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>first <span class="token operator"${_scopeId}>=</span> item
            <span class="token keyword"${_scopeId}>self</span><span class="token punctuation"${_scopeId}>.</span>last <span class="token operator"${_scopeId}>=</span> item
        <span class="token punctuation"${_scopeId}>}</span>
    <span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token keyword"${_scopeId}>class</span> <span class="token class-name"${_scopeId}>Solution</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>func</span> <span class="token function-definition function"${_scopeId}>maxSlidingWindow</span><span class="token punctuation"${_scopeId}>(</span><span class="token omit keyword"${_scopeId}>_</span> nums<span class="token punctuation"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>,</span> <span class="token omit keyword"${_scopeId}>_</span> k<span class="token punctuation"${_scopeId}>:</span> <span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>-&gt;</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>if</span> k <span class="token operator"${_scopeId}>==</span> <span class="token number"${_scopeId}>1</span> <span class="token punctuation"${_scopeId}>{</span> <span class="token keyword"${_scopeId}>return</span> nums <span class="token punctuation"${_scopeId}>}</span>
        <span class="token keyword"${_scopeId}>var</span> deque <span class="token operator"${_scopeId}>=</span> <span class="token class-name"${_scopeId}>Deque</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span> result <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>[</span><span class="token class-name"${_scopeId}>Int</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
        <span class="token keyword"${_scopeId}>for</span> i <span class="token keyword"${_scopeId}>in</span> <span class="token number"${_scopeId}>0</span><span class="token operator"${_scopeId}>..&lt;</span>nums<span class="token punctuation"${_scopeId}>.</span>count <span class="token punctuation"${_scopeId}>{</span>
            <span class="token keyword"${_scopeId}>while</span> <span class="token operator"${_scopeId}>!</span>deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>isEmpty</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>&amp;&amp;</span> deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>peekFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>&lt;</span> i <span class="token operator"${_scopeId}>-</span> k <span class="token operator"${_scopeId}>+</span> <span class="token number"${_scopeId}>1</span> <span class="token punctuation"${_scopeId}>{</span>
                deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>pollFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
            <span class="token keyword"${_scopeId}>while</span> <span class="token operator"${_scopeId}>!</span>deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>isEmpty</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>&amp;&amp;</span> nums<span class="token punctuation"${_scopeId}>[</span>deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>peekLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>]</span> <span class="token operator"${_scopeId}>&lt;</span> nums<span class="token punctuation"${_scopeId}>[</span>i<span class="token punctuation"${_scopeId}>]</span> <span class="token punctuation"${_scopeId}>{</span>
                deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>pollLast</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
            deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>offerLast</span><span class="token punctuation"${_scopeId}>(</span>i<span class="token punctuation"${_scopeId}>)</span>
            <span class="token keyword"${_scopeId}>if</span> i <span class="token operator"${_scopeId}>&gt;=</span> k <span class="token operator"${_scopeId}>-</span> <span class="token number"${_scopeId}>1</span> <span class="token punctuation"${_scopeId}>{</span>
                result<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>append</span><span class="token punctuation"${_scopeId}>(</span>nums<span class="token punctuation"${_scopeId}>[</span>deque<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>peekFirst</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>)</span>
            <span class="token punctuation"${_scopeId}>}</span>
        <span class="token punctuation"${_scopeId}>}</span>
        <span class="token keyword"${_scopeId}>return</span> result
    <span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><h3 id="time-consumption-memory-comparison" tabindex="-1"${_scopeId}>Time consumption, memory comparison <a class="header-anchor" href="#time-consumption-memory-comparison" aria-hidden="true"${_scopeId}>#</a></h3><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Time Submitted</th><th${_scopeId}>Status</th><th${_scopeId}>Runtime</th><th${_scopeId}>Memory</th><th${_scopeId}>Language</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>03/30/2022 13:08</td><td${_scopeId}>Accepted</td><td${_scopeId}>2788 ms</td><td${_scopeId}>25.9 MB</td><td${_scopeId}>Swift</td></tr><tr${_scopeId}><td${_scopeId}>03/24/2022 10:29</td><td${_scopeId}>Accepted</td><td${_scopeId}>2453 ms</td><td${_scopeId}>28.1 MB</td><td${_scopeId}>Swift</td></tr></tbody></table><h3 id="feelings" tabindex="-1"${_scopeId}>Feelings <a class="header-anchor" href="#feelings" aria-hidden="true"${_scopeId}>#</a></h3><ol${_scopeId}><li${_scopeId}>write a method to split a request into multiple requests and merge the results without affecting the original logic, the merge code was completed when I finished writing Promise.all</li><li${_scopeId}>adding a new translation by typing in Chinese and then just typing in the key name in English, the translation is automatically completed</li><li${_scopeId}>a class needs to switch state to control the display and hiding of a part, the node to control the hiding I have defined first, the state type I have also ordered, when I type switchMode method name method content with switch statement to complete. From then on Cmd + C, Cmd + V is completely meaningless, Tab YYDS</li><li${_scopeId}>since the beginning of my career, I have always reminded myself to write code comments for my own convenience and the convenience of others (what is the difference between knocking out code without writing comments and being a hooligan), now I feel more intuitive</li><li${_scopeId}>writing unit tests will be very useful in the future!</li><li${_scopeId}>writing creative code is not helpful, building a wheel is like a godsend.</li><li${_scopeId}>will make people dependent, probably \u2026</li></ol><h3 id="are-the-benefits-worth-the-risk" tabindex="-1"${_scopeId}>Are the benefits worth the risk? <a class="header-anchor" href="#are-the-benefits-worth-the-risk" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}><a href="https://www.backhub.co/blog/copilot-github-ai-tool-security-risks" target="_blank" rel="noopener"${_scopeId}>GitHub\u2019s AI Tool Speeds Up Development, but Comes with Risks</a> As mentioned in, it may inadvertently introduce security vulnerabilities that your security team is unable to predict or correct due to inexperience.</p><p${_scopeId}>Is it really a big deal if Copilot offers more value or a faster turnaround time for your coding projects?</p><p${_scopeId}>Yes. The best software in the world is worthless if it has a lot of security flaws. Security is paramount in this day and age. Antivirus has to be airtight. You need a backup service for your crucial data. Your code can\u2019t be vulnerable to network attacks.</p><p${_scopeId}>Bottom line: Copilot might be an interesting tool, but its potential security flaws more than offset that value and should make you think twice before adopting it in your organization.</p><h3 id="copilot-what-safety-risks-can-this-lead-to" tabindex="-1"${_scopeId}>Copilot What safety risks can this lead to? <a class="header-anchor" href="#copilot-what-safety-risks-can-this-lead-to" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>The core security issue with Copilot is this:</p><ul${_scopeId}><li${_scopeId}>Copilot takes its so-called semantic hints from a variety of sources, including source code</li><li${_scopeId}>Lots of source code is public</li><li${_scopeId}>Public source code is notorious for bugs, references to outdated APIs, and coding patterns that are, to say the least, insecure</li><li${_scopeId}>If Copilot synthesizes code blocks using suggestions from this data, it might also synthesize the same vulnerabilities inherent in those code samples</li></ul><blockquote${_scopeId}><p${_scopeId}>The bottom line: the threat to machine learning is already here. copilot certainly isn\u2019t ready for widespread adoption. Worse still, it may never be. It\u2019s too early to say.</p></blockquote><h3 id="overview" tabindex="-1"${_scopeId}>Overview <a class="header-anchor" href="#overview" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>Finally, Copilot is another novel way of integrating machine learning and artificial intelligence techniques to reduce development time for programmers.</p><p${_scopeId}>However, Copilot also introduces a number of security risks that could threaten your data, albeit through no fault of its own. Conversely, the fact that it must take coding samples from the generation of flawed code may ultimately diminish its maximum potential.</p><p${_scopeId}>Overall, it is best to look to Copilot as a possible means of speeding up development time in some areas. For example, it will never be a complete replacement for good coding practice and will probably never replace your IT security team. Time will tell if Copilot reaches its full potential or if it remains another failed experiment in ML/AI.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "Your AI pair programmer With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor."),
                vue.createVNode("p", null, "Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused."),
                vue.createVNode("h3", {
                  id: "more-than-autocomplete",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("More than autocomplete "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#more-than-autocomplete",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "GitHub Copilot is powered by Codex, the new AI system created by OpenAI. GitHub Copilot understands significantly more context than most code assistants. So, whether it\u2019s in a docstring, comment, function name, or the code itself, GitHub Copilot uses the context you\u2019ve provided and synthesizes code to match. Together with OpenAI, we\u2019re designing GitHub Copilot to get smarter at producing safe and effective code as developers use it."),
                vue.createVNode("p", null, "On the morning of March 30th, at 9:30am, I received an email from GitHub approving my application for GitHub Copilot."),
                vue.createVNode("p", null, "After a few hours of using it, the most intuitive feeling I had was that I was going to lose my job: it was so smart that it would automatically AI-complete the logic by writing a comment and a method name"),
                vue.createVNode("p", null, [
                  vue.createVNode("a", {
                    href: "https://leetcode.com/problems/sliding-window-maximum/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Leetcode 239 Sliding Window Maximum")
                ]),
                vue.createVNode("pre", { class: "language-swift" }, [
                  vue.createVNode("code", { class: "language-swift" }, [
                    vue.createVNode("span", { class: "token comment" }, "// Github Copilot"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Solution"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "// Sliding Window Maximum"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "maxSlidingWindow"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" k"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token comment" }, "// github copilot Generated code snippets"),
                    vue.createTextVNode("\n      	"),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" res "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("count "),
                    vue.createVNode("span", { class: "token operator" }, "=="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "0"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" res\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" deque "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "for"),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token keyword" }, "in"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "0"),
                    vue.createVNode("span", { class: "token operator" }, "..<"),
                    vue.createTextVNode("nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("count "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "while"),
                    vue.createTextVNode(" deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("count "),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "0"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "&&"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last"),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("i"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "removeLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n            deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "append"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("i"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first"),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "+"),
                    vue.createTextVNode(" k "),
                    vue.createVNode("span", { class: "token operator" }, "<="),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "removeFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token operator" }, ">="),
                    vue.createTextVNode(" k "),
                    vue.createVNode("span", { class: "token operator" }, "-"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "1"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                res"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "append"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first"),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" res\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// ME"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" prior"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" next"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" val"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "init"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" value"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("val "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" value\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Deque"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "private"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" first"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "private"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" last"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "init"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "isEmpty"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Bool"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" first "),
                    vue.createVNode("span", { class: "token operator" }, "=="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "peekFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" first"),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("val\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "peekLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" last"),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("val\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "pollFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" first"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                prior"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                first"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" prior\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "else"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "pollLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" last"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                next"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                last"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" next\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "else"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n                "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token nil constant" }, "nil"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "offerFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" num"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" item "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("num"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            first"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n            item"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" first\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "else"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n  \n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "offerLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" num"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" item "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "DequeItem"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("num"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "let"),
                    vue.createTextVNode(" last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            last"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("prior "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n            item"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("next "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" last\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "else"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("first "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "self"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("last "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(" item\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Solution"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "maxSlidingWindow"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token omit keyword" }, "_"),
                    vue.createTextVNode(" k"),
                    vue.createVNode("span", { class: "token punctuation" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" k "),
                    vue.createVNode("span", { class: "token operator" }, "=="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "1"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" nums "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "var"),
                    vue.createTextVNode(" deque "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(" result "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token class-name" }, "Int"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "for"),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token keyword" }, "in"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "0"),
                    vue.createVNode("span", { class: "token operator" }, "..<"),
                    vue.createTextVNode("nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("count "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "while"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "isEmpty"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "&&"),
                    vue.createTextVNode(" deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "peekFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token operator" }, "-"),
                    vue.createTextVNode(" k "),
                    vue.createVNode("span", { class: "token operator" }, "+"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "1"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "pollFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "while"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "!"),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "isEmpty"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "&&"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "peekLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createTextVNode(" nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("i"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "pollLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n            deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "offerLast"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("i"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" i "),
                    vue.createVNode("span", { class: "token operator" }, ">="),
                    vue.createTextVNode(" k "),
                    vue.createVNode("span", { class: "token operator" }, "-"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "1"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n                result"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "append"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("nums"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("deque"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "peekFirst"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(" result\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "time-consumption-memory-comparison",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Time consumption, memory comparison "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#time-consumption-memory-comparison",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("table", null, [
                  vue.createVNode("thead", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("th", null, "Time Submitted"),
                      vue.createVNode("th", null, "Status"),
                      vue.createVNode("th", null, "Runtime"),
                      vue.createVNode("th", null, "Memory"),
                      vue.createVNode("th", null, "Language")
                    ])
                  ]),
                  vue.createVNode("tbody", null, [
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "03/30/2022 13:08"),
                      vue.createVNode("td", null, "Accepted"),
                      vue.createVNode("td", null, "2788 ms"),
                      vue.createVNode("td", null, "25.9 MB"),
                      vue.createVNode("td", null, "Swift")
                    ]),
                    vue.createVNode("tr", null, [
                      vue.createVNode("td", null, "03/24/2022 10:29"),
                      vue.createVNode("td", null, "Accepted"),
                      vue.createVNode("td", null, "2453 ms"),
                      vue.createVNode("td", null, "28.1 MB"),
                      vue.createVNode("td", null, "Swift")
                    ])
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "feelings",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Feelings "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#feelings",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("ol", null, [
                  vue.createVNode("li", null, "write a method to split a request into multiple requests and merge the results without affecting the original logic, the merge code was completed when I finished writing Promise.all"),
                  vue.createVNode("li", null, "adding a new translation by typing in Chinese and then just typing in the key name in English, the translation is automatically completed"),
                  vue.createVNode("li", null, "a class needs to switch state to control the display and hiding of a part, the node to control the hiding I have defined first, the state type I have also ordered, when I type switchMode method name method content with switch statement to complete. From then on Cmd + C, Cmd + V is completely meaningless, Tab YYDS"),
                  vue.createVNode("li", null, "since the beginning of my career, I have always reminded myself to write code comments for my own convenience and the convenience of others (what is the difference between knocking out code without writing comments and being a hooligan), now I feel more intuitive"),
                  vue.createVNode("li", null, "writing unit tests will be very useful in the future!"),
                  vue.createVNode("li", null, "writing creative code is not helpful, building a wheel is like a godsend."),
                  vue.createVNode("li", null, "will make people dependent, probably \u2026")
                ]),
                vue.createVNode("h3", {
                  id: "are-the-benefits-worth-the-risk",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Are the benefits worth the risk? "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#are-the-benefits-worth-the-risk",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("a", {
                    href: "https://www.backhub.co/blog/copilot-github-ai-tool-security-risks",
                    target: "_blank",
                    rel: "noopener"
                  }, "GitHub\u2019s AI Tool Speeds Up Development, but Comes with Risks"),
                  vue.createTextVNode(" As mentioned in, it may inadvertently introduce security vulnerabilities that your security team is unable to predict or correct due to inexperience.")
                ]),
                vue.createVNode("p", null, "Is it really a big deal if Copilot offers more value or a faster turnaround time for your coding projects?"),
                vue.createVNode("p", null, "Yes. The best software in the world is worthless if it has a lot of security flaws. Security is paramount in this day and age. Antivirus has to be airtight. You need a backup service for your crucial data. Your code can\u2019t be vulnerable to network attacks."),
                vue.createVNode("p", null, "Bottom line: Copilot might be an interesting tool, but its potential security flaws more than offset that value and should make you think twice before adopting it in your organization."),
                vue.createVNode("h3", {
                  id: "copilot-what-safety-risks-can-this-lead-to",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Copilot What safety risks can this lead to? "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#copilot-what-safety-risks-can-this-lead-to",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "The core security issue with Copilot is this:"),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "Copilot takes its so-called semantic hints from a variety of sources, including source code"),
                  vue.createVNode("li", null, "Lots of source code is public"),
                  vue.createVNode("li", null, "Public source code is notorious for bugs, references to outdated APIs, and coding patterns that are, to say the least, insecure"),
                  vue.createVNode("li", null, "If Copilot synthesizes code blocks using suggestions from this data, it might also synthesize the same vulnerabilities inherent in those code samples")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "The bottom line: the threat to machine learning is already here. copilot certainly isn\u2019t ready for widespread adoption. Worse still, it may never be. It\u2019s too early to say.")
                ]),
                vue.createVNode("h3", {
                  id: "overview",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Overview "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#overview",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Finally, Copilot is another novel way of integrating machine learning and artificial intelligence techniques to reduce development time for programmers."),
                vue.createVNode("p", null, "However, Copilot also introduces a number of security risks that could threaten your data, albeit through no fault of its own. Conversely, the fact that it must take coding samples from the generation of flawed code may ultimately diminish its maximum potential."),
                vue.createVNode("p", null, "Overall, it is best to look to Copilot as a possible means of speeding up development time in some areas. For example, it will never be a complete replacement for good coding practice and will probably never replace your IT security team. Time will tell if Copilot reaches its full potential or if it remains another failed experiment in ML/AI.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/github-copilot.md");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var githubCopilot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  name: "golang-gin-cors-policy-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "GoLang Gin CORS Policy ", "date": "2022-04-10T16:00:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 2min", "description": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002", "meta": [{ "property": "og:title", "content": "GoLang Gin CORS Policy " }, { "property": "og:description", "content": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002" }, { "name": "description", "content": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "GoLang Gin CORS Policy ", "meta": [{ "property": "og:title", "content": "GoLang Gin CORS Policy " }, { "property": "og:description", "content": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002" }, { "name": "description", "content": "\u5229\u7528\u4E2D\u95F4\u4EF6\u5904\u7406 GoLang Gin CORS \u8DE8\u57DF\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h3 id="cors" tabindex="-1"${_scopeId}>CORS <a class="header-anchor" href="#cors" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u5168\u79F0 Cross-Origin Resource Sharing\uFF0C\u662F\u4E00\u79CD\u5141\u8BB8\u5F53\u524D\u57DF domain \u7684\u8D44\u6E90 web service \u88AB\u5176\u4ED6\u57DFdomain \u7684\u811A\u672C\u8BF7\u6C42\u8BBF\u95EE\u7684\u673A\u5236\uFF0C\u901A\u5E38\u7531\u4E8E\u540C\u57DF\u5B89\u5168\u7B56\u7565 the same-origin security policy \u6D4F\u89C8\u5668\u4F1A\u7981\u6B62\u8FD9\u79CD\u8DE8\u57DF\u8BF7\u6C42\u3002</p><p${_scopeId}>\u65B0\u9879\u76EE\u662F\u5229\u7528 gin \u6846\u67B6\u5F00\u53D1\u7684\uFF0C\u8FC7\u7A0B\u4E2D\u9047\u5230\u8DE8\u57DF\u95EE\u9898</p><blockquote${_scopeId}><p${_scopeId}>Gin \u9ED8\u8BA4\u662F\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684</p></blockquote><h3 id="\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F" tabindex="-1"${_scopeId}>\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F <a class="header-anchor" href="#\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F" aria-hidden="true"${_scopeId}>#</a></h3><pre class="language-javascript"${_scopeId}><code class="language-javascript"${_scopeId}>Access to XMLHttpRequest at <span class="token string"${_scopeId}>&#39;http://localhost:3000/api/v1/auth/verify-codes/captcha&#39;</span> from origin <span class="token string"${_scopeId}>&#39;http://localhost:8080&#39;</span> has been blocked by <span class="token constant"${_scopeId}>CORS</span> <span class="token literal-property property"${_scopeId}>policy</span><span class="token operator"${_scopeId}>:</span> No <span class="token string"${_scopeId}>&#39;Access-Control-Allow-Origin&#39;</span> header is present on the requested resource<span class="token punctuation"${_scopeId}>.</span>
</code></pre><h3 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"${_scopeId}>\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u5728\u8DEF\u7531\u8FD4\u56DE\u6570\u636E\u524D\u52A0\u5165 CORS \u4E2D\u95F4\u4EF6\uFF0C\u8BA9\u5176\u652F\u6301\u8DE8\u57DF</p><pre class="language-go"${_scopeId}><code class="language-go"${_scopeId}><span class="token keyword"${_scopeId}>func</span> <span class="token function"${_scopeId}>Cors</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> gin<span class="token punctuation"${_scopeId}>.</span>HandlerFunc <span class="token punctuation"${_scopeId}>{</span>
	<span class="token keyword"${_scopeId}>return</span> <span class="token keyword"${_scopeId}>func</span><span class="token punctuation"${_scopeId}>(</span>c <span class="token operator"${_scopeId}>*</span>gin<span class="token punctuation"${_scopeId}>.</span>Context<span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
		<span class="token comment"${_scopeId}>// \u8FD9\u91CC\u53EF\u4EE5\u7528*\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4F60\u6307\u5B9A\u7684\u57DF\u540D</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string"${_scopeId}>&quot;*&quot;</span><span class="token punctuation"${_scopeId}>)</span>
		<span class="token comment"${_scopeId}>// \u5141\u8BB8\u5934\u90E8\u53C2\u6570</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string"${_scopeId}>&quot;Content-Type,AccessToken, X-CSRF-Token, Authorization, Token&quot;</span><span class="token punctuation"${_scopeId}>)</span>
		<span class="token comment"${_scopeId}>// \u5141\u8BB8\u7684\u65B9\u6CD5</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string"${_scopeId}>&quot;POST, GET, OPTIONS, PUT,  DELETE, UPDATE&quot;</span><span class="token punctuation"${_scopeId}>)</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Access-Control-Expose-Headers&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string"${_scopeId}>&quot;Content-Length,  Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type&quot;</span><span class="token punctuation"${_scopeId}>)</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Access-Control-Allow-Credentials&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string"${_scopeId}>&quot;true&quot;</span><span class="token punctuation"${_scopeId}>)</span>

		method <span class="token operator"${_scopeId}>:=</span> c<span class="token punctuation"${_scopeId}>.</span>Request<span class="token punctuation"${_scopeId}>.</span>Method
		<span class="token comment"${_scopeId}>//\u653E\u884COPTIONS\u65B9\u6CD5</span>
		<span class="token keyword"${_scopeId}>if</span> method <span class="token operator"${_scopeId}>==</span> <span class="token string"${_scopeId}>&quot;OPTIONS&quot;</span> <span class="token punctuation"${_scopeId}>{</span>
			c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>AbortWithStatus</span><span class="token punctuation"${_scopeId}>(</span>http<span class="token punctuation"${_scopeId}>.</span>StatusOK<span class="token punctuation"${_scopeId}>)</span>
		<span class="token punctuation"${_scopeId}>}</span>
		<span class="token comment"${_scopeId}>// \u5904\u7406\u8BF7\u6C42</span>
		c<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Next</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
	<span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u5728\u5176\u5168\u5C40\u4E2D\u95F4\u4EF6\u91CC\u6CE8\u518C</p><pre class="language-go"${_scopeId}><code class="language-go"${_scopeId}><span class="token comment"${_scopeId}>// SetupRoute \u8DEF\u7531\u521D\u59CB\u5316</span>
<span class="token keyword"${_scopeId}>func</span> <span class="token function"${_scopeId}>SetupRoute</span><span class="token punctuation"${_scopeId}>(</span>router <span class="token operator"${_scopeId}>*</span>gin<span class="token punctuation"${_scopeId}>.</span>Engine<span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
	<span class="token comment"${_scopeId}>// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6</span>
	<span class="token function"${_scopeId}>registerGlobalMiddleWare</span><span class="token punctuation"${_scopeId}>(</span>router<span class="token punctuation"${_scopeId}>)</span>
	<span class="token comment"${_scopeId}>//  \u6CE8\u518C API \u8DEF\u7531</span>
	routes<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>RegisterAPIRoutes</span><span class="token punctuation"${_scopeId}>(</span>router<span class="token punctuation"${_scopeId}>)</span>
	<span class="token comment"${_scopeId}>//  \u914D\u7F6E 404 \u8DEF\u7531</span>
	<span class="token function"${_scopeId}>setup404Handler</span><span class="token punctuation"${_scopeId}>(</span>router<span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token keyword"${_scopeId}>func</span> <span class="token function"${_scopeId}>registerGlobalMiddleWare</span><span class="token punctuation"${_scopeId}>(</span>router <span class="token operator"${_scopeId}>*</span>gin<span class="token punctuation"${_scopeId}>.</span>Engine<span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
	router<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Use</span><span class="token punctuation"${_scopeId}>(</span>
		middlewares<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>Cors</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
	<span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("h3", {
                  id: "cors",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("CORS "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#cors",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u5168\u79F0 Cross-Origin Resource Sharing\uFF0C\u662F\u4E00\u79CD\u5141\u8BB8\u5F53\u524D\u57DF domain \u7684\u8D44\u6E90 web service \u88AB\u5176\u4ED6\u57DFdomain \u7684\u811A\u672C\u8BF7\u6C42\u8BBF\u95EE\u7684\u673A\u5236\uFF0C\u901A\u5E38\u7531\u4E8E\u540C\u57DF\u5B89\u5168\u7B56\u7565 the same-origin security policy \u6D4F\u89C8\u5668\u4F1A\u7981\u6B62\u8FD9\u79CD\u8DE8\u57DF\u8BF7\u6C42\u3002"),
                vue.createVNode("p", null, "\u65B0\u9879\u76EE\u662F\u5229\u7528 gin \u6846\u67B6\u5F00\u53D1\u7684\uFF0C\u8FC7\u7A0B\u4E2D\u9047\u5230\u8DE8\u57DF\u95EE\u9898"),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "Gin \u9ED8\u8BA4\u662F\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684")
                ]),
                vue.createVNode("h3", {
                  id: "\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8DE8\u57DF\u56FA\u5B9A\u62A5\u9519\u683C\u5F0F",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", { class: "language-javascript" }, [
                    vue.createTextVNode("Access to XMLHttpRequest at "),
                    vue.createVNode("span", { class: "token string" }, "'http://localhost:3000/api/v1/auth/verify-codes/captcha'"),
                    vue.createTextVNode(" from origin "),
                    vue.createVNode("span", { class: "token string" }, "'http://localhost:8080'"),
                    vue.createTextVNode(" has been blocked by "),
                    vue.createVNode("span", { class: "token constant" }, "CORS"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token literal-property property" }, "policy"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(" No "),
                    vue.createVNode("span", { class: "token string" }, "'Access-Control-Allow-Origin'"),
                    vue.createTextVNode(" header is present on the requested resource"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("h3", {
                  id: "\u89E3\u51B3\u65B9\u6848",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u89E3\u51B3\u65B9\u6848 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u89E3\u51B3\u65B9\u6848",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u5728\u8DEF\u7531\u8FD4\u56DE\u6570\u636E\u524D\u52A0\u5165 CORS \u4E2D\u95F4\u4EF6\uFF0C\u8BA9\u5176\u652F\u6301\u8DE8\u57DF"),
                vue.createVNode("pre", { class: "language-go" }, [
                  vue.createVNode("code", { class: "language-go" }, [
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "Cors"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(" gin"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("HandlerFunc "),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("c "),
                    vue.createVNode("span", { class: "token operator" }, "*"),
                    vue.createTextVNode("gin"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("Context"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token comment" }, "// \u8FD9\u91CC\u53EF\u4EE5\u7528*\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4F60\u6307\u5B9A\u7684\u57DF\u540D"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Access-Control-Allow-Origin"'),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"*"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token comment" }, "// \u5141\u8BB8\u5934\u90E8\u53C2\u6570"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Access-Control-Allow-Headers"'),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"Content-Type,AccessToken, X-CSRF-Token, Authorization, Token"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token comment" }, "// \u5141\u8BB8\u7684\u65B9\u6CD5"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Access-Control-Allow-Methods"'),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"POST, GET, OPTIONS, PUT,  DELETE, UPDATE"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Access-Control-Expose-Headers"'),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"Content-Length,  Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Access-Control-Allow-Credentials"'),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"true"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n\n		method "),
                    vue.createVNode("span", { class: "token operator" }, ":="),
                    vue.createTextVNode(" c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("Request"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("Method\n		"),
                    vue.createVNode("span", { class: "token comment" }, "//\u653E\u884COPTIONS\u65B9\u6CD5"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(" method "),
                    vue.createVNode("span", { class: "token operator" }, "=="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, '"OPTIONS"'),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n			c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "AbortWithStatus"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("http"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("StatusOK"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n		"),
                    vue.createVNode("span", { class: "token comment" }, "// \u5904\u7406\u8BF7\u6C42"),
                    vue.createTextVNode("\n		c"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Next"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u5728\u5176\u5168\u5C40\u4E2D\u95F4\u4EF6\u91CC\u6CE8\u518C"),
                vue.createVNode("pre", { class: "language-go" }, [
                  vue.createVNode("code", { class: "language-go" }, [
                    vue.createVNode("span", { class: "token comment" }, "// SetupRoute \u8DEF\u7531\u521D\u59CB\u5316"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "SetupRoute"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("router "),
                    vue.createVNode("span", { class: "token operator" }, "*"),
                    vue.createTextVNode("gin"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("Engine"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token comment" }, "// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token function" }, "registerGlobalMiddleWare"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("router"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token comment" }, "//  \u6CE8\u518C API \u8DEF\u7531"),
                    vue.createTextVNode("\n	routes"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "RegisterAPIRoutes"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("router"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token comment" }, "//  \u914D\u7F6E 404 \u8DEF\u7531"),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token function" }, "setup404Handler"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("router"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token keyword" }, "func"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "registerGlobalMiddleWare"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("router "),
                    vue.createVNode("span", { class: "token operator" }, "*"),
                    vue.createTextVNode("gin"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("Engine"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n	router"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Use"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n		middlewares"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "Cors"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n	"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/golang-gin-cors-policy-zh.md");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var golangGinCorsPolicyZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  name: "homestead-change-php-version",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Homestead Change PhP Version", "date": "2022-04-02T18:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Homestead Change PhP Version\u3002", "meta": [{ "property": "og:title", "content": "Homestead Change PhP Version" }, { "property": "og:description", "content": "Homestead Change PhP Version\u3002" }, { "name": "description", "content": "Homestead Change PhP Version\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Homestead Change PhP Version", "meta": [{ "property": "og:title", "content": "Homestead Change PhP Version" }, { "property": "og:description", "content": "Homestead Change PhP Version\u3002" }, { "name": "description", "content": "Homestead Change PhP Version\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Laravel \u73AF\u5883</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># \u66F4\u65B0 vagrant box \u76D2\u5B50</span>
vagrant box update --force
</code></pre><p${_scopeId}>\u5207\u6362 PHP \u7248\u672C</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># \u67E5\u770B\u6240\u6709 php \u7248\u672C\u548C\u5F53\u524D\u4F7F\u7528\u7248\u672C</span>
update-alternatives --display php
<span class="token comment"${_scopeId}># \u6267\u884C\u540E\uFF0C\u4F1A\u5217\u51FA\u5F53\u524D php \u6240\u6709\u7248\u672C\u548C\u7F16\u53F7\uFF0C\u8F93\u5165\u7F16\u53F7\uFF0C\u5207\u6362\u5230\u6267\u884C\u7684\u7248\u672C</span>
update-alternatives --config php  
</code></pre><p${_scopeId}>Homestead \u76EE\u5F55\u4E0B\u6709\u4E2A aliases \u6587\u4EF6\uFF0C\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E9B\u53EF\u4EE5\u76F4\u63A5\u5728\u865A\u62DF\u673A\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}>php81 <span class="token comment"${_scopeId}># \u5207\u6362\u5230 php 8.1.0</span>
php -v <span class="token comment"${_scopeId}># php \u7248\u672C</span>
php -i <span class="token comment"${_scopeId}># \u5F53\u524D php \u4F7F\u7528\u914D\u7F6E</span>
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "Laravel \u73AF\u5883"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# \u66F4\u65B0 vagrant box \u76D2\u5B50"),
                    vue.createTextVNode("\nvagrant box update --force\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u5207\u6362 PHP \u7248\u672C"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# \u67E5\u770B\u6240\u6709 php \u7248\u672C\u548C\u5F53\u524D\u4F7F\u7528\u7248\u672C"),
                    vue.createTextVNode("\nupdate-alternatives --display php\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u6267\u884C\u540E\uFF0C\u4F1A\u5217\u51FA\u5F53\u524D php \u6240\u6709\u7248\u672C\u548C\u7F16\u53F7\uFF0C\u8F93\u5165\u7F16\u53F7\uFF0C\u5207\u6362\u5230\u6267\u884C\u7684\u7248\u672C"),
                    vue.createTextVNode("\nupdate-alternatives --config php  \n")
                  ])
                ]),
                vue.createVNode("p", null, "Homestead \u76EE\u5F55\u4E0B\u6709\u4E2A aliases \u6587\u4EF6\uFF0C\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E9B\u53EF\u4EE5\u76F4\u63A5\u5728\u865A\u62DF\u673A\u4E2D\u4F7F\u7528\u7684\u547D\u4EE4"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createTextVNode("php81 "),
                    vue.createVNode("span", { class: "token comment" }, "# \u5207\u6362\u5230 php 8.1.0"),
                    vue.createTextVNode("\nphp -v "),
                    vue.createVNode("span", { class: "token comment" }, "# php \u7248\u672C"),
                    vue.createTextVNode("\nphp -i "),
                    vue.createVNode("span", { class: "token comment" }, "# \u5F53\u524D php \u4F7F\u7528\u914D\u7F6E"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/homestead-change-php-version.md");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var homesteadChangePhpVersion = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  name: "i-still-like-you-a-lot",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60 ...", "date": "2017-11-11T00:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 7min", "description": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002", "meta": [{ "property": "og:title", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60 ..." }, { "property": "og:description", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002" }, { "name": "description", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60 ...", "meta": [{ "property": "og:title", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60 ..." }, { "property": "og:description", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002" }, { "name": "description", "content": "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-text"${_scopeId}><code class="language-text"${_scopeId}>\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u8D70\u4E86\u516B\u5343\u91CC\uFF0C\u4E0D\u95EE\u5F52\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u6708\u8F6E\u56DE\u4EA4\u66FF\uFF0C\u4E0D\u7406\u671D\u5915\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u6F02\u6CCA\u4E5D\u4E07\u91CC\uFF0C\u4E0D\u66FE\u6B47\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u7838\u5411\u5927\u5730\uFF0C\u81F3\u6B7B\u800C\u5DF2\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u5149\u6D12\u6EE1\u5929\u5730\uFF0C\u6E29\u67D4\u60EC\u610F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u5439\u5728\u5FC3\u91CC\uFF0C\u9165\u9165\u9761\u9761\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u6D12\u843D\u5728\u70ED\u5E26\u4E0E\u6781\u5730\uFF0C\u4E0D\u8FDC\u4E07\u91CC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9CB8\u6C89\u4E8E\u6D77\u5E95\u6E29\u67D4\u547C\u5438\uFF0C\u75F4\u6781\u55D4\u6781\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7B49\u4E86\u591A\u5E74\u7684\u8001\u57CE\u95E8\uFF0C\u8315\u8315\u5B51\u7ACB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9CB8\u9C7C\u7F3A\u6C27\u4E8E\u516D\u5343\u56DB\u767E\u7C73\u7684\u6DF1\u6D77\uFF0C\u4E50\u6B64\u4E0D\u75B2\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u81E3\u6C11\u7B49\u5F85\u738B\u671D\u590D\u8F9F\uFF0C\u9065\u9065\u65E0\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u67F3\u52A8\u8749\u9E23\uFF0C\u65E5\u843D\u6F6E\u6C50\uFF0C\u4E0D\u80FD\u81EA\u5DF1\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u6F02\u6CCA\u4E5D\u4E07\u91CC\uFF0C\u4E0D\u66FE\u6B47\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u592A\u9633\u5347\u4E86\u843D\u53BB\uFF0C\u65E0\u8BBA\u671D\u5915\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u5954\u6CE2\u4EBF\u4E07\u5E74\u9ED1\u591C\uFF0C\u4E0D\u8BC9\u6028\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u96E8\u6D12\u843D\u516B\u767E\u91CC\uFF0C\u6DC5\u6DC5\u6CA5\u6CA5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u8349\u67D3\u7EFF\u5C71\u810A\uFF0C\u4E0D\u5BB9\u7F6E\u7591\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6CFC\u5987\u9A82\u8857\uFF0C\u4E0D\u8BB2\u7406\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u843D\u8FDE\u591C\u7FE0\u743C\u6EF4\uFF0C\u5A1F\u5A1F\u4E0D\u60DC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6885\u96E8\u65F6\u8282\u7684\u843D\u96E8\uFF0C\u5EF6\u7EF5\u65E0\u671F\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u708A\u70DF\u8885\u8885\u51E0\u8BB8\uFF0C\u68E0\u68A8\u714E\u96EA\u53C8\u843D\u96E8\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DE\u9E1F\u7737\u604B\u6D77\u9C7C\uFF0C\u53BB\u7559\u96BE\u5B9A\uFF0C\u4E0D\u77E5\u6240\u4EE5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8052\u566A\u7684\u79D8\u5BC6\uFF0C\u5343\u8A00\u4E07\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5EAD\u9662\u90A3\u682A\u6D77\u68E0\u843D\u4E86\u53C8\u5F00\uFF0C\u5468\u800C\u590D\u59CB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u6708\u8F6E\u6D41\u4EA4\u66FF\uFF0C\u4E0D\u7406\u671D\u5915\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5C42\u4E91\u51DD\u6210\u7247\u8BED\uFF0C\u70B9\u70B9\u6EF4\u6EF4\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u591C\u7A7A\u4E2D\u661F\u8FB0\u95EA\u70C1\uFF0C\u9713\u8679\u8FF7\u79BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u4E2D\u7C0C\u7C0C\u98D8\u843D\u7684\u6842\u53F6\uFF0C\u8F97\u843D\u6210\u6CE5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u6EF4\u843D\u5728\u7EFF\u82D4\u7EA2\u6CE5\uFF0C\u67D4\u8F6F\u6563\u53BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u5149\u5760\u5165\u773C\u7738\u91CC\uFF0C\u4E00\u773C\u4E07\u91CC\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9497\u5934\u51E4\u9601\u4E0B\u6700\u540E\u4E00\u7B14\uFF0C\u76F8\u601D\u6210\u75BE\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u5BB5\u7EA2\u5E10\u5165\u68A6\u65E0\u606F\uFF0C\u72B9\u6050\u5FF5\u8D77\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u51F9\u51F8\u7ECA\u4F4F\u6EC2\u6CB1\u5927\u96E8\uFF0C\u5165\u6E20\u51E0\u8BB8\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u70DF\u7F31\u7EFB\u6210\u86DF\u7EE1\u9AA4\u96E8\uFF0C\u6E29\u67D4\u66B4\u70C8\u5168\u7ED9\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98D8\u96F6\u592A\u4E45\u7684\u50E7\u4FA3\uFF0C\u767E\u96BE\u7688\u4F9D\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u65E5\u7EFF\u53F6\u590F\u65E5\u9633\u5149\uFF0C\u90FD\u4E0D\u5982\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65AD\u5D16\u5377\u8D77\u5343\u5806\u96EA\uFF0C\u5C81\u5C81\u5982\u5915\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6EE1\u5929\u6D41\u661F\u5760\u5730\uFF0C\u70DF\u82B1\u8086\u610F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6D77\u6D6A\u4E00\u6B21\u6B21\u62E5\u62B1\u7901\u77F3\uFF0C\u7AED\u5C3D\u5168\u529B\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9C7C\u513F\u987A\u7740\u6D0B\u6D41\u56DE\u5230\u6545\u5730\uFF0C\u4E0D\u671F\u800C\u9047\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u7F20\u7ED5\u5728\u8033\u7554\u7684\u4F4E\u8BED\uFF0C\u5FC3\u52A8\u4E0D\u5DF2\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u54BF\u54BF\u5440\u5440\u5B66\u8BED\u7684\u5B69\u7AE5\uFF0C\u8BCD\u4E0D\u8FBE\u610F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u4E2D\u5B50\u89C4\u7684\u9E23\u556D\uFF0C\u4E0D\u5982\u5F52\u53BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u68A6\u91CC\u60C5\u4E0D\u81EA\u7981\u7684\u5453\u8BED\uFF0C\u5168\u90FD\u662F\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u76DB\u88C5\u7B49\u5019\u4E00\u573A\u5341\u5E74\u7684\u5047\u671F\uFF0C\u60C5\u4E0D\u77E5\u6240\u4EE5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u601D\u5FF5\u5982\u6C5F\u6CB3\u4E1C\u901D\uFF0C\u9A6C\u4E0D\u505C\u8E44\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u60AC\u5D16\u53D8\u5E73\u5730\u518D\u751F\u51FA\u6574\u7247\u68EE\u6797\uFF0C\u4F60\u5728\u6811\u836B\u91CC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9EC4\u82B1\u5806\u79EF\u6EE1\u5730\uFF0C\u6545\u4EBA\u4E07\u91CC\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u662F\u5982\u9CA0\u5728\u5589\uFF0C\u7518\u4E4B\u5982\u9974\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6CA7\u6D77\u53D8\u6362\u6851\u7530\uFF0C\u6597\u8F6C\u661F\u79FB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8001\u6545\u4E8B\u91CC\u7684\u6CDB\u9EC4\u6865\u6BB5\uFF0C\u534A\u804B\u534A\u54D1\uFF0C\u5931\u4E86\u58F0\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u5954\u6CE2\u4EBF\u4E07\u5E74\u9ED1\u591C\uFF0C\u4E0D\u8BC9\u6028\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E7\u57CE\u91CC\u7684\u8001\u6298\u5B50\u620F\uFF0C\u6E29\u8A00\u8F6F\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9738\u738B\u522B\u4E86\u865E\u59EC\uFF0C\u60C5\u975E\u5F97\u5DF2\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5B64\u661F\u843D\u6708\uFF0C\u4E0D\u5FCD\u76F8\u5F03\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6E05\u5BC2\u68A8\u82B1\uFF0C\u9010\u98CE\u800C\u53BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7EA2\u8C46\u9EEF\u6DE1\uFF0C\u76F8\u601D\u6210\u75BE\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u71D5\u526A\u96E8\uFF0C\u4E0D\u987E\u6E7F\u8863\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C99\u8D77\u5343\u4E08\u8352\u6F20\u91CC\uFF0C\u65E0\u4EBA\u95EE\u8D77\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u843D\u6E56\u5FC3\u60CA\u8054\u8C0A\uFF0C\u5ED6\u65E0\u58F0\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9152\u85CF\u66F2\u5DF7\u9621\u964C\u91CC\uFF0C\u96BE\u63A9\u5FC3\u8FF9\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E50\u8D77\u5FC3\u95F4\u5F26\u58F0\u91CC\uFF0C\u5BAB\u5546\u89D2\u5FB5\u7FBD\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5C11\u6797\u5BFA\u7684\u9752\u706F\u53E4\u4F5B\uFF0C\u4E0D\u613F\u6E21\u5DF1\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9E7F\u9690\u4E8E\u6DF1\u6797\u8315\u8315\u5B51\u7ACB\uFF0C\u602F\u6781\u671B\u6781\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u996E\u9E29\u6B62\u6E34\u822C\u75F4\u8FF7\uFF0C\u836F\u77F3\u65E0\u533B\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u4ECE\u5929\u5760\u4E03\u4E07\u7C73\uFF0C\u4E0D\u60E7\u6210\u6CE5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u5149\u503E\u57CE\uFF0C\u6625\u98CE\u5341\u91CC\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6851\u79FB\u6CA7\u6D77\uFF0C\u6A58\u690D\u5317\u5730\uFF0C\u4E0D\u5408\u65F6\u5B9C\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5343\u91CC\u620E\u9A6C\u8D70\u5355\u9A91\uFF0C\u516B\u65B9\u4E3A\u654C\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u8001\u4E86\u675C\u82E5\uFF0C\u8D25\u4E86\u837C\u863C\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u67AF\u8349\u71C3\u5C3D\uFF0C\u6628\u591C\u98CE\u53C8\u8D77\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9690\u8005\u671D\u996E\u5C71\u5C9A\u5915\u9189\u4F59\u971E\uFF0C\u5FC3\u5883\u5982\u6D17\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u868D\u8709\u64BC\u6811\uFF0C\u4E0D\u81EA\u91CF\u529B\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5760\u5165\u65E0\u8FB9\u7684\u68A6\u9B47\uFF0C\u6DF1\u7761\u4E0D\u9192\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C99\u8BEF\u5165\u773C\u5E95\uFF0C\u6D95\u96F6\u5982\u96E8\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E74\u590D\u4E00\u5E74\uFF0C\u91CE\u8349\u9036\u8FE4\uFF0C\u6EE1\u5C71\u904D\u5730\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5927\u9E4F\u4E58\u98CE\u4E5D\u4E07\u91CC\uFF0C\u975E\u68A7\u4E0D\u6816\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7814\u78E8\u6325\u6BEB\u67D3\u7D20\u8863\uFF0C\u76C8\u9999\u81EA\u6B23\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E5D\u537F\u7B19\u6F9C\uFF0C\u5FC3\u68E0\u672A\u7136\uFF0C\u897F\u57CE\u8A00\u6B4C\uFF0C\u9526\u51CC\u51E4\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8695\u613F\u7F2B\u4E1D\uFF0C\u751F\u6B7B\u4E0D\u7406\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5341\u91CC\u7684\u6625\u98CE\uFF0C\u90FD\u4E0D\u53CA\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u54EA\u6015\u6B64\u751F\uFF0C\u540E\u4F1A\u65E0\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8FD9\u5341\u4E07\u8BC4\u8BBA\uFF0C\u7FFB\u4E0D\u5230\u5E95\uFF0C\u6EE1\u6EE1\u662F\u4F60\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96FE\u973E\u7737\u987E\u5317\u4EAC\uFF0C\u4E0D\u820D\u79BB\u53BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u732B\u513F\u559C\u6B22\u65E5\u5149\u6D74\uFF0C\u7559\u604B\u4E0D\u5DF2\u3002 
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E03\u8C37\u9E1F\u6B22\u559C\u65B0\u6625\uFF0C\u672C\u6027\u4F7F\u7136\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u590F\u65E5\u9A84\u9633\uFF0C\u89E6\u624B\u4E0D\u53CA\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5FD8\u5DDD\u6CB3\u7554\u7684\u5F7C\u5CB8\u82B1\uFF0C\u6B8B\u6267\u5FF5\uFF0C\u7A7A\u5948\u4F55\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u601D\u964C\u4E0A\u82B1\u5F00\uFF0C\u5C1A\u5FF5\u7F13\u7F13\u5F52\u77E3\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DE\u86FE\u6251\u706B\uFF0C\u7518\u77E5\u9668\u843D\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u843D\u53F6\u5F52\u6839\uFF0C\u672C\u662F\u5BBF\u547D\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5915\u9633\u7684\u4F59\u6656\uFF0C\u9ED8\u9ED8\u4E0D\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5938\u7236\u5BF9\u592A\u9633\u7684\u8FFD\u9010\uFF0C\u7EB5\u6B7B\u4E0D\u6094\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9C7C\u513F\u79BB\u5F00\u4E86\u6C34\uFF0C\u65E0\u4F9D\u65E0\u9760\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7E41\u661F\u95EA\u70C1\uFF0C\u71A0\u71A0\u95EA\u5149\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u94F6\u6CB3\u5343\u91CC\uFF0C\u6D69\u8361\u65E0\u8FB9\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u70DF\u706B\u5239\u90A3\u7684\u7F8E\u4E3D\uFF0C\u6C38\u5B58\u5FC3\u5E95\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u68A6\u9192\u65F6\u5206\u7684\u591C\u91CC\uFF0C\u53C8\u559C\u53C8\u6CE3\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u767D\u5899\u9EDB\u74E6\u7684\u6CB9\u83DC\u5730\uFF0C\u82B3\u9999\u56DB\u6EA2\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5355\u66F2\u5FAA\u73AF\u7684\u9633\u6625\u767D\u96EA\uFF0C\u90A3\u6837\u7740\u8FF7\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5F69\u971E\u6E32\u67D3\u5929\u9645\uFF0C\u5E7B\u706D\u65B9\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u871C\u8702\u543B\u4E0A\u675C\u9E43\u82B1\uFF0C\u4E4D\u7136\u6B22\u559C\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6843\u82B1\u6811\u4E0B\u7559\u53E4\u4E95\uFF0C\u5386\u4E45\u5F25\u65B0\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u516D\u6708\u96E8\u7838\u5728\u9752\u77F3\u9636\uFF0C\u6DC5\u6DC5\u6CA5\u6CA5\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9759\u8109\u56DE\u6D41\u5411\u5FC3\u810F\uFF0C\u4E45\u4E0D\u505C\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4F5B\u9640\u6E21\u4E0D\u8FC7\u5929\u5730\uFF0C\u6211\u653E\u4E0D\u4E0B\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u90A3\u5E45\u672A\u5B8C\u6210\u7684\u753B\uFF0C\u6B8B\u7F3A\u4E0D\u5168\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u79CB\u53F6\u67AF\u85E4\u8150\u8D25\u5728\u6545\u91CC\uFF0C\u540E\u4F1A\u65E0\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u56DB\u5B63\u4EA4\u66FF\uFF0C\u6625\u98CE\u5316\u96E8\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u65E5\u5347\u897F\u843D\uFF0C\u6C38\u4E0D\u505C\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u98CE\u971C\u96E8\u96EA\uFF0C\u4E0D\u95EE\u4E1C\u897F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u9065\u9065\u661F\u7A7A\uFF0C\u65E0\u58F0\u65E0\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u5189\u5189\u5149\u9634\uFF0C\u53EA\u4E89\u671D\u5915\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6E05\u98CE\u5F90\u6765\uFF0C\u62C2\u8FC7\u5FC3\u5E95\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u91CC\u5939\u6742\u7740\u7EC6\u6C99\uFF0C\u7F31\u7EFB\u79C1\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6708\u4EAE\u8DDF\u661F\u661F\uFF0C\u76F8\u4F9D\u4E3A\u547D\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9E1F\u513F\u4E0E\u84DD\u5929\uFF0C\u5F7C\u6B64\u76F8\u4F9D\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5927\u6CB3\u5411\u4E1C\u6D41\u7684\u6F8E\u6E43\uFF0C\u540E\u4F1A\u65E0\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u90A3\u76CF\u8336\u7684\u9F7F\u95F4\u7559\u9999\uFF0C\u9676\u9189\u4EBA\u610F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8001\u80E1\u540C\u91CC\u54BF\u54BF\u5440\u5440\u8001\u6298\u5B50\u620F\uFF0C\u6E29\u8A00\u7EC6\u8BED\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4F60\u8315\u8315\u5B51\u7ACB\uFF0C\u6211\u8E3D\u8E3D\u72EC\u884C\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u5377\u4E91\u8212\u5E73\u6C99\u4E07\u91CC\uFF0C\u5C06\u601D\u5FF5\u8F7B\u5BC4\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u7C07\u62E5\u7740\u591C\u7A7A\uFF0C\u4E07\u53E4\u5982\u4E00\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6EF4\u6C34\u7A7F\u77F3\u7684\u4ECE\u5BB9\uFF0C\u4EFB\u51ED\u65F6\u95F4\u6F7A\u6D41\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DF\u96FE\u7684\u8106\u7AF9\uFF0C\u98CE\u91CC\u96E8\u91CC\uFF0C\u575A\u5B9A\u4E0D\u79FB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624D\u5B50\u7684\u7AF9\u7B14\uFF0C\u70B9\u58A8\u6210\u6797\uFF0C\u5FFD\u68A6\u90A3\u5E74\u4F60\u542B\u7B11\u9080\u68CB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5750\u843D\u5728\u540E\u5C71\u7684\u7981\u5730\uFF0C\u5C0F\u5FC3\u7FFC\u7FFC\u7684\u5B88\u7740\u4E0D\u4E3A\u4EBA\u77E5\u7684\u79D8\u5BC6\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u672A\u76C8\u7684\u768E\u6708\uFF0C\u6D6E\u52A8\u6697\u8424\uFF0C\u51DD\u89C6\u5306\u5306\u800C\u8FC7\u7684\u950B\u5229\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E7D\u6DF1\u7684\u6F6D\u6C34\uFF0C\u73AF\u6811\u7A7A\u5BC2\uFF0C\u53EA\u5F85\u5200\u843D\u65E0\u58F0\u55C5\u6B8B\u623E\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E7D\u6DF1\u5904\u72EC\u5C45\u7684\u7F42\u7C9F\uFF0C\u4EFB\u7531\u4E16\u4FD7\u7765\u7768\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u539A\u91CD\u7684\u5899\u576F\uFF0C\u9540\u7740\u4F5B\u6F06\uFF0C\u65E5\u591C\u8046\u542C\u5B64\u72EC\u7684\u68B5\u97F3\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6668\u65F6\u7684\u949F\u58F0\u4F34\u7740\u672A\u901D\u7684\u9732\u6C34\uFF0C\u541F\u5531\u7740\u6148\u60B2\u4E2D\u7684\u83E9\u63D0\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5915\u9633\u7684\u4F59\u6656\uFF0C\u843D\u80A9\u971E\u8863\uFF0C\u770B\u4E91\u5377\u4E91\u8212\u4EBA\u6765\u6563\u53BB\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9EC4\u660F\u7684\u4F59\u6656\u543B\u4E0A\u91D1\u9876\u7684\u7709\u5FC3\uFF0C\u8BC9\u8BF4\u7740\u5B89\u8BE6\u4E0E\u9759\u8C27\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6447\u52A8\u7684\u7EA2\u7F28\uFF0C\u6D41\u82CF\u8F7B\u503E\uFF0C\u4E00\u6CFB\u78A7\u7A7A\u4E07\u91CC\u7686\u6B63\u6C14\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6574\u9F50\u7684\u6BE1\u5E3D\u4E0A\u6446\u52A8\u7684\u7F28\u7A57\uFF0C\u6BCF\u4E00\u7F15\u90FD\u9C9C\u4EAE\u65E0\u6BD4\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E0\u754F\u7684\u8D2B\u7620\uFF0C\u6572\u6253\u571F\u5730\uFF0C\u4EF0\u5929\u957F\u7B11\u70C8\u9152\u6D47\u996E\uFF0C\u5C06\u82F1\u5FE0\u57CB\u9AA8\u5728\u6B64\u5730\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E4C\u4E91\u7834\u6708\u7A81\u7136\u964D\u4E0B\u7684\u96E8\u6C14\uFF0C\u6D17\u5237\u8934\u891B\uFF0C\u8F97\u8F6C\u6545\u91CC\uFF0C\u53EA\u4E3A\u5BFB\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6A90\u89D2\u7684\u94DC\u94C3\uFF0C\u968F\u5251\u800C\u9E23\uFF0C\u56DE\u8361\u5728\u7FA4\u5C71\u5524\u7740\u5F52\u671F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C89\u6C99\u6298\u621F\uFF0C\u57CB\u68FA\u6267\u7B14\uFF0C\u753B\u4E2D\u7709\u773C\u4EC5\u662F\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7709\u95F4\u6731\u7802\u4E00\u7B14\uFF0C\u51DD\u7740\u524D\u4E16\u7684\u8BB0\u5FC6\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624B\u4E2D\u5982\u8679\u7684\u5251\u6C14\uFF0C\u65A9\u4E86\u9752\u4E1D\uFF0C\u5374\u65A9\u4E0D\u53BB\u5FC3\u4E2D\u7684\u8EAB\u5F71\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u660E\u660E\u77E5\u9053\u5267\u6BD2\u65E0\u6BD4\uFF0C\u5374\u8FD8\u662F\u5F62\u5F71\u4E0D\u79BB\uFF0C\u54EA\u6015\u5C0F\u5FC3\u7FFC\u7FFC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6DF1\u79CB\u57CB\u4E0B\u7684\u6700\u70C8\u7684\u4E00\u575B\u9152\uFF0C\u65F6\u5149\u98A0\u6C9B\uFF0C\u4E00\u996E\u4F9D\u5982\u5F53\u5E74\u521D\u9047\u3002

\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96D5\u513F\u4E0D\u8BBA\u98DE\u5230\u54EA\u91CC\uFF0C\u7EC8\u7A76\u56DE\u5230\u8FD9\u91CC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8FDC\u5C71\u95F4\u8584\u96FE\u521D\u5347\u7684\u68B5\u9E23\uFF0C\u7EB7\u6270\u7EA2\u5C18\u4E07\u4E08\uFF0C\u5374\u53EA\u770B\u5230\u4F60\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E00\u7EBF\u5929\u7684\u7634\u6C14\uFF0C\u5C81\u6708\u8F6E\u8F6C\uFF0C\u7ECF\u4E45\u4E0D\u606F\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7BDD\u706B\u71C3\u5C3D\u5929\u660E\uFF0C\u5E7B\u5316\u6210\u7070\u70EC\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5FC3\u843D\u5165\u5E73\u9759\u7684\u6E56\u5E95\uFF0C\u6405\u52A8\u4E00\u6C60\u6D9F\u6F2A\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6843\u82B1\u5F00\u4E86\u4E00\u5B63\u53C8\u4E00\u5B63\uFF0C\u4E50\u6B64\u4E0D\u75B2\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624B\u4E2D\u7684\u4E09\u9633\u7384\u9488\uFF0C\u6BCF\u4E00\u6839\u90FD\u662F\u552F\u4E00\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u62A4\u7740\u7684\u9556\u8F66\uFF0C\u54EA\u6015\u6CA1\u4E86\u6027\u547D\uFF0C\u4E5F\u8981\u5B88\u62A4\u5230\u5E95\u3002
\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-text" }, [
                  vue.createVNode("code", { class: "language-text" }, "\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u8D70\u4E86\u516B\u5343\u91CC\uFF0C\u4E0D\u95EE\u5F52\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u6708\u8F6E\u56DE\u4EA4\u66FF\uFF0C\u4E0D\u7406\u671D\u5915\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u6F02\u6CCA\u4E5D\u4E07\u91CC\uFF0C\u4E0D\u66FE\u6B47\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u7838\u5411\u5927\u5730\uFF0C\u81F3\u6B7B\u800C\u5DF2\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u5149\u6D12\u6EE1\u5929\u5730\uFF0C\u6E29\u67D4\u60EC\u610F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u5439\u5728\u5FC3\u91CC\uFF0C\u9165\u9165\u9761\u9761\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u6D12\u843D\u5728\u70ED\u5E26\u4E0E\u6781\u5730\uFF0C\u4E0D\u8FDC\u4E07\u91CC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9CB8\u6C89\u4E8E\u6D77\u5E95\u6E29\u67D4\u547C\u5438\uFF0C\u75F4\u6781\u55D4\u6781\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7B49\u4E86\u591A\u5E74\u7684\u8001\u57CE\u95E8\uFF0C\u8315\u8315\u5B51\u7ACB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9CB8\u9C7C\u7F3A\u6C27\u4E8E\u516D\u5343\u56DB\u767E\u7C73\u7684\u6DF1\u6D77\uFF0C\u4E50\u6B64\u4E0D\u75B2\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u81E3\u6C11\u7B49\u5F85\u738B\u671D\u590D\u8F9F\uFF0C\u9065\u9065\u65E0\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u67F3\u52A8\u8749\u9E23\uFF0C\u65E5\u843D\u6F6E\u6C50\uFF0C\u4E0D\u80FD\u81EA\u5DF1\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u6F02\u6CCA\u4E5D\u4E07\u91CC\uFF0C\u4E0D\u66FE\u6B47\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u592A\u9633\u5347\u4E86\u843D\u53BB\uFF0C\u65E0\u8BBA\u671D\u5915\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u5954\u6CE2\u4EBF\u4E07\u5E74\u9ED1\u591C\uFF0C\u4E0D\u8BC9\u6028\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u96E8\u6D12\u843D\u516B\u767E\u91CC\uFF0C\u6DC5\u6DC5\u6CA5\u6CA5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u8349\u67D3\u7EFF\u5C71\u810A\uFF0C\u4E0D\u5BB9\u7F6E\u7591\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6CFC\u5987\u9A82\u8857\uFF0C\u4E0D\u8BB2\u7406\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u843D\u8FDE\u591C\u7FE0\u743C\u6EF4\uFF0C\u5A1F\u5A1F\u4E0D\u60DC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6885\u96E8\u65F6\u8282\u7684\u843D\u96E8\uFF0C\u5EF6\u7EF5\u65E0\u671F\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u708A\u70DF\u8885\u8885\u51E0\u8BB8\uFF0C\u68E0\u68A8\u714E\u96EA\u53C8\u843D\u96E8\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DE\u9E1F\u7737\u604B\u6D77\u9C7C\uFF0C\u53BB\u7559\u96BE\u5B9A\uFF0C\u4E0D\u77E5\u6240\u4EE5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8052\u566A\u7684\u79D8\u5BC6\uFF0C\u5343\u8A00\u4E07\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5EAD\u9662\u90A3\u682A\u6D77\u68E0\u843D\u4E86\u53C8\u5F00\uFF0C\u5468\u800C\u590D\u59CB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u6708\u8F6E\u6D41\u4EA4\u66FF\uFF0C\u4E0D\u7406\u671D\u5915\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5C42\u4E91\u51DD\u6210\u7247\u8BED\uFF0C\u70B9\u70B9\u6EF4\u6EF4\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u591C\u7A7A\u4E2D\u661F\u8FB0\u95EA\u70C1\uFF0C\u9713\u8679\u8FF7\u79BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u4E2D\u7C0C\u7C0C\u98D8\u843D\u7684\u6842\u53F6\uFF0C\u8F97\u843D\u6210\u6CE5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u6EF4\u843D\u5728\u7EFF\u82D4\u7EA2\u6CE5\uFF0C\u67D4\u8F6F\u6563\u53BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u5149\u5760\u5165\u773C\u7738\u91CC\uFF0C\u4E00\u773C\u4E07\u91CC\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9497\u5934\u51E4\u9601\u4E0B\u6700\u540E\u4E00\u7B14\uFF0C\u76F8\u601D\u6210\u75BE\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u5BB5\u7EA2\u5E10\u5165\u68A6\u65E0\u606F\uFF0C\u72B9\u6050\u5FF5\u8D77\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u51F9\u51F8\u7ECA\u4F4F\u6EC2\u6CB1\u5927\u96E8\uFF0C\u5165\u6E20\u51E0\u8BB8\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u70DF\u7F31\u7EFB\u6210\u86DF\u7EE1\u9AA4\u96E8\uFF0C\u6E29\u67D4\u66B4\u70C8\u5168\u7ED9\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98D8\u96F6\u592A\u4E45\u7684\u50E7\u4FA3\uFF0C\u767E\u96BE\u7688\u4F9D\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u65E5\u7EFF\u53F6\u590F\u65E5\u9633\u5149\uFF0C\u90FD\u4E0D\u5982\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65AD\u5D16\u5377\u8D77\u5343\u5806\u96EA\uFF0C\u5C81\u5C81\u5982\u5915\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6EE1\u5929\u6D41\u661F\u5760\u5730\uFF0C\u70DF\u82B1\u8086\u610F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6D77\u6D6A\u4E00\u6B21\u6B21\u62E5\u62B1\u7901\u77F3\uFF0C\u7AED\u5C3D\u5168\u529B\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9C7C\u513F\u987A\u7740\u6D0B\u6D41\u56DE\u5230\u6545\u5730\uFF0C\u4E0D\u671F\u800C\u9047\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u7F20\u7ED5\u5728\u8033\u7554\u7684\u4F4E\u8BED\uFF0C\u5FC3\u52A8\u4E0D\u5DF2\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u54BF\u54BF\u5440\u5440\u5B66\u8BED\u7684\u5B69\u7AE5\uFF0C\u8BCD\u4E0D\u8FBE\u610F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u4E2D\u5B50\u89C4\u7684\u9E23\u556D\uFF0C\u4E0D\u5982\u5F52\u53BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u68A6\u91CC\u60C5\u4E0D\u81EA\u7981\u7684\u5453\u8BED\uFF0C\u5168\u90FD\u662F\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u76DB\u88C5\u7B49\u5019\u4E00\u573A\u5341\u5E74\u7684\u5047\u671F\uFF0C\u60C5\u4E0D\u77E5\u6240\u4EE5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u601D\u5FF5\u5982\u6C5F\u6CB3\u4E1C\u901D\uFF0C\u9A6C\u4E0D\u505C\u8E44\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u60AC\u5D16\u53D8\u5E73\u5730\u518D\u751F\u51FA\u6574\u7247\u68EE\u6797\uFF0C\u4F60\u5728\u6811\u836B\u91CC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9EC4\u82B1\u5806\u79EF\u6EE1\u5730\uFF0C\u6545\u4EBA\u4E07\u91CC\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u662F\u5982\u9CA0\u5728\u5589\uFF0C\u7518\u4E4B\u5982\u9974\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6CA7\u6D77\u53D8\u6362\u6851\u7530\uFF0C\u6597\u8F6C\u661F\u79FB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8001\u6545\u4E8B\u91CC\u7684\u6CDB\u9EC4\u6865\u6BB5\uFF0C\u534A\u804B\u534A\u54D1\uFF0C\u5931\u4E86\u58F0\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u5954\u6CE2\u4EBF\u4E07\u5E74\u9ED1\u591C\uFF0C\u4E0D\u8BC9\u6028\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E7\u57CE\u91CC\u7684\u8001\u6298\u5B50\u620F\uFF0C\u6E29\u8A00\u8F6F\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9738\u738B\u522B\u4E86\u865E\u59EC\uFF0C\u60C5\u975E\u5F97\u5DF2\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5B64\u661F\u843D\u6708\uFF0C\u4E0D\u5FCD\u76F8\u5F03\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6E05\u5BC2\u68A8\u82B1\uFF0C\u9010\u98CE\u800C\u53BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7EA2\u8C46\u9EEF\u6DE1\uFF0C\u76F8\u601D\u6210\u75BE\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6625\u71D5\u526A\u96E8\uFF0C\u4E0D\u987E\u6E7F\u8863\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C99\u8D77\u5343\u4E08\u8352\u6F20\u91CC\uFF0C\u65E0\u4EBA\u95EE\u8D77\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u843D\u6E56\u5FC3\u60CA\u8054\u8C0A\uFF0C\u5ED6\u65E0\u58F0\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9152\u85CF\u66F2\u5DF7\u9621\u964C\u91CC\uFF0C\u96BE\u63A9\u5FC3\u8FF9\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E50\u8D77\u5FC3\u95F4\u5F26\u58F0\u91CC\uFF0C\u5BAB\u5546\u89D2\u5FB5\u7FBD\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5C11\u6797\u5BFA\u7684\u9752\u706F\u53E4\u4F5B\uFF0C\u4E0D\u613F\u6E21\u5DF1\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9E7F\u9690\u4E8E\u6DF1\u6797\u8315\u8315\u5B51\u7ACB\uFF0C\u602F\u6781\u671B\u6781\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u996E\u9E29\u6B62\u6E34\u822C\u75F4\u8FF7\uFF0C\u836F\u77F3\u65E0\u533B\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96E8\u4ECE\u5929\u5760\u4E03\u4E07\u7C73\uFF0C\u4E0D\u60E7\u6210\u6CE5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E5\u5149\u503E\u57CE\uFF0C\u6625\u98CE\u5341\u91CC\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6851\u79FB\u6CA7\u6D77\uFF0C\u6A58\u690D\u5317\u5730\uFF0C\u4E0D\u5408\u65F6\u5B9C\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5343\u91CC\u620E\u9A6C\u8D70\u5355\u9A91\uFF0C\u516B\u65B9\u4E3A\u654C\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u8001\u4E86\u675C\u82E5\uFF0C\u8D25\u4E86\u837C\u863C\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u67AF\u8349\u71C3\u5C3D\uFF0C\u6628\u591C\u98CE\u53C8\u8D77\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9690\u8005\u671D\u996E\u5C71\u5C9A\u5915\u9189\u4F59\u971E\uFF0C\u5FC3\u5883\u5982\u6D17\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u868D\u8709\u64BC\u6811\uFF0C\u4E0D\u81EA\u91CF\u529B\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5760\u5165\u65E0\u8FB9\u7684\u68A6\u9B47\uFF0C\u6DF1\u7761\u4E0D\u9192\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C99\u8BEF\u5165\u773C\u5E95\uFF0C\u6D95\u96F6\u5982\u96E8\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E74\u590D\u4E00\u5E74\uFF0C\u91CE\u8349\u9036\u8FE4\uFF0C\u6EE1\u5C71\u904D\u5730\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5927\u9E4F\u4E58\u98CE\u4E5D\u4E07\u91CC\uFF0C\u975E\u68A7\u4E0D\u6816\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7814\u78E8\u6325\u6BEB\u67D3\u7D20\u8863\uFF0C\u76C8\u9999\u81EA\u6B23\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E5D\u537F\u7B19\u6F9C\uFF0C\u5FC3\u68E0\u672A\u7136\uFF0C\u897F\u57CE\u8A00\u6B4C\uFF0C\u9526\u51CC\u51E4\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8695\u613F\u7F2B\u4E1D\uFF0C\u751F\u6B7B\u4E0D\u7406\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5341\u91CC\u7684\u6625\u98CE\uFF0C\u90FD\u4E0D\u53CA\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u54EA\u6015\u6B64\u751F\uFF0C\u540E\u4F1A\u65E0\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8FD9\u5341\u4E07\u8BC4\u8BBA\uFF0C\u7FFB\u4E0D\u5230\u5E95\uFF0C\u6EE1\u6EE1\u662F\u4F60\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96FE\u973E\u7737\u987E\u5317\u4EAC\uFF0C\u4E0D\u820D\u79BB\u53BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u732B\u513F\u559C\u6B22\u65E5\u5149\u6D74\uFF0C\u7559\u604B\u4E0D\u5DF2\u3002 \n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E03\u8C37\u9E1F\u6B22\u559C\u65B0\u6625\uFF0C\u672C\u6027\u4F7F\u7136\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u590F\u65E5\u9A84\u9633\uFF0C\u89E6\u624B\u4E0D\u53CA\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5FD8\u5DDD\u6CB3\u7554\u7684\u5F7C\u5CB8\u82B1\uFF0C\u6B8B\u6267\u5FF5\uFF0C\u7A7A\u5948\u4F55\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u601D\u964C\u4E0A\u82B1\u5F00\uFF0C\u5C1A\u5FF5\u7F13\u7F13\u5F52\u77E3\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DE\u86FE\u6251\u706B\uFF0C\u7518\u77E5\u9668\u843D\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u843D\u53F6\u5F52\u6839\uFF0C\u672C\u662F\u5BBF\u547D\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5915\u9633\u7684\u4F59\u6656\uFF0C\u9ED8\u9ED8\u4E0D\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5938\u7236\u5BF9\u592A\u9633\u7684\u8FFD\u9010\uFF0C\u7EB5\u6B7B\u4E0D\u6094\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9C7C\u513F\u79BB\u5F00\u4E86\u6C34\uFF0C\u65E0\u4F9D\u65E0\u9760\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7E41\u661F\u95EA\u70C1\uFF0C\u71A0\u71A0\u95EA\u5149\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u94F6\u6CB3\u5343\u91CC\uFF0C\u6D69\u8361\u65E0\u8FB9\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u70DF\u706B\u5239\u90A3\u7684\u7F8E\u4E3D\uFF0C\u6C38\u5B58\u5FC3\u5E95\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u68A6\u9192\u65F6\u5206\u7684\u591C\u91CC\uFF0C\u53C8\u559C\u53C8\u6CE3\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u767D\u5899\u9EDB\u74E6\u7684\u6CB9\u83DC\u5730\uFF0C\u82B3\u9999\u56DB\u6EA2\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5355\u66F2\u5FAA\u73AF\u7684\u9633\u6625\u767D\u96EA\uFF0C\u90A3\u6837\u7740\u8FF7\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5F69\u971E\u6E32\u67D3\u5929\u9645\uFF0C\u5E7B\u706D\u65B9\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u871C\u8702\u543B\u4E0A\u675C\u9E43\u82B1\uFF0C\u4E4D\u7136\u6B22\u559C\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6843\u82B1\u6811\u4E0B\u7559\u53E4\u4E95\uFF0C\u5386\u4E45\u5F25\u65B0\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u516D\u6708\u96E8\u7838\u5728\u9752\u77F3\u9636\uFF0C\u6DC5\u6DC5\u6CA5\u6CA5\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9759\u8109\u56DE\u6D41\u5411\u5FC3\u810F\uFF0C\u4E45\u4E0D\u505C\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4F5B\u9640\u6E21\u4E0D\u8FC7\u5929\u5730\uFF0C\u6211\u653E\u4E0D\u4E0B\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u90A3\u5E45\u672A\u5B8C\u6210\u7684\u753B\uFF0C\u6B8B\u7F3A\u4E0D\u5168\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u79CB\u53F6\u67AF\u85E4\u8150\u8D25\u5728\u6545\u91CC\uFF0C\u540E\u4F1A\u65E0\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u56DB\u5B63\u4EA4\u66FF\uFF0C\u6625\u98CE\u5316\u96E8\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u65E5\u5347\u897F\u843D\uFF0C\u6C38\u4E0D\u505C\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u98CE\u971C\u96E8\u96EA\uFF0C\u4E0D\u95EE\u4E1C\u897F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u9065\u9065\u661F\u7A7A\uFF0C\u65E0\u58F0\u65E0\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u5C31\u50CF\u5189\u5189\u5149\u9634\uFF0C\u53EA\u4E89\u671D\u5915\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6E05\u98CE\u5F90\u6765\uFF0C\u62C2\u8FC7\u5FC3\u5E95\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98CE\u91CC\u5939\u6742\u7740\u7EC6\u6C99\uFF0C\u7F31\u7EFB\u79C1\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6708\u4EAE\u8DDF\u661F\u661F\uFF0C\u76F8\u4F9D\u4E3A\u547D\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9E1F\u513F\u4E0E\u84DD\u5929\uFF0C\u5F7C\u6B64\u76F8\u4F9D\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5927\u6CB3\u5411\u4E1C\u6D41\u7684\u6F8E\u6E43\uFF0C\u540E\u4F1A\u65E0\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u90A3\u76CF\u8336\u7684\u9F7F\u95F4\u7559\u9999\uFF0C\u9676\u9189\u4EBA\u610F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8001\u80E1\u540C\u91CC\u54BF\u54BF\u5440\u5440\u8001\u6298\u5B50\u620F\uFF0C\u6E29\u8A00\u7EC6\u8BED\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4F60\u8315\u8315\u5B51\u7ACB\uFF0C\u6211\u8E3D\u8E3D\u72EC\u884C\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E91\u5377\u4E91\u8212\u5E73\u6C99\u4E07\u91CC\uFF0C\u5C06\u601D\u5FF5\u8F7B\u5BC4\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u661F\u8FB0\u7C07\u62E5\u7740\u591C\u7A7A\uFF0C\u4E07\u53E4\u5982\u4E00\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6EF4\u6C34\u7A7F\u77F3\u7684\u4ECE\u5BB9\uFF0C\u4EFB\u51ED\u65F6\u95F4\u6F7A\u6D41\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u98DF\u96FE\u7684\u8106\u7AF9\uFF0C\u98CE\u91CC\u96E8\u91CC\uFF0C\u575A\u5B9A\u4E0D\u79FB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624D\u5B50\u7684\u7AF9\u7B14\uFF0C\u70B9\u58A8\u6210\u6797\uFF0C\u5FFD\u68A6\u90A3\u5E74\u4F60\u542B\u7B11\u9080\u68CB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5750\u843D\u5728\u540E\u5C71\u7684\u7981\u5730\uFF0C\u5C0F\u5FC3\u7FFC\u7FFC\u7684\u5B88\u7740\u4E0D\u4E3A\u4EBA\u77E5\u7684\u79D8\u5BC6\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u672A\u76C8\u7684\u768E\u6708\uFF0C\u6D6E\u52A8\u6697\u8424\uFF0C\u51DD\u89C6\u5306\u5306\u800C\u8FC7\u7684\u950B\u5229\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E7D\u6DF1\u7684\u6F6D\u6C34\uFF0C\u73AF\u6811\u7A7A\u5BC2\uFF0C\u53EA\u5F85\u5200\u843D\u65E0\u58F0\u55C5\u6B8B\u623E\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5E7D\u6DF1\u5904\u72EC\u5C45\u7684\u7F42\u7C9F\uFF0C\u4EFB\u7531\u4E16\u4FD7\u7765\u7768\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u539A\u91CD\u7684\u5899\u576F\uFF0C\u9540\u7740\u4F5B\u6F06\uFF0C\u65E5\u591C\u8046\u542C\u5B64\u72EC\u7684\u68B5\u97F3\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6668\u65F6\u7684\u949F\u58F0\u4F34\u7740\u672A\u901D\u7684\u9732\u6C34\uFF0C\u541F\u5531\u7740\u6148\u60B2\u4E2D\u7684\u83E9\u63D0\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5915\u9633\u7684\u4F59\u6656\uFF0C\u843D\u80A9\u971E\u8863\uFF0C\u770B\u4E91\u5377\u4E91\u8212\u4EBA\u6765\u6563\u53BB\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u9EC4\u660F\u7684\u4F59\u6656\u543B\u4E0A\u91D1\u9876\u7684\u7709\u5FC3\uFF0C\u8BC9\u8BF4\u7740\u5B89\u8BE6\u4E0E\u9759\u8C27\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6447\u52A8\u7684\u7EA2\u7F28\uFF0C\u6D41\u82CF\u8F7B\u503E\uFF0C\u4E00\u6CFB\u78A7\u7A7A\u4E07\u91CC\u7686\u6B63\u6C14\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6574\u9F50\u7684\u6BE1\u5E3D\u4E0A\u6446\u52A8\u7684\u7F28\u7A57\uFF0C\u6BCF\u4E00\u7F15\u90FD\u9C9C\u4EAE\u65E0\u6BD4\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u65E0\u754F\u7684\u8D2B\u7620\uFF0C\u6572\u6253\u571F\u5730\uFF0C\u4EF0\u5929\u957F\u7B11\u70C8\u9152\u6D47\u996E\uFF0C\u5C06\u82F1\u5FE0\u57CB\u9AA8\u5728\u6B64\u5730\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E4C\u4E91\u7834\u6708\u7A81\u7136\u964D\u4E0B\u7684\u96E8\u6C14\uFF0C\u6D17\u5237\u8934\u891B\uFF0C\u8F97\u8F6C\u6545\u91CC\uFF0C\u53EA\u4E3A\u5BFB\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6A90\u89D2\u7684\u94DC\u94C3\uFF0C\u968F\u5251\u800C\u9E23\uFF0C\u56DE\u8361\u5728\u7FA4\u5C71\u5524\u7740\u5F52\u671F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6C89\u6C99\u6298\u621F\uFF0C\u57CB\u68FA\u6267\u7B14\uFF0C\u753B\u4E2D\u7709\u773C\u4EC5\u662F\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7709\u95F4\u6731\u7802\u4E00\u7B14\uFF0C\u51DD\u7740\u524D\u4E16\u7684\u8BB0\u5FC6\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624B\u4E2D\u5982\u8679\u7684\u5251\u6C14\uFF0C\u65A9\u4E86\u9752\u4E1D\uFF0C\u5374\u65A9\u4E0D\u53BB\u5FC3\u4E2D\u7684\u8EAB\u5F71\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u660E\u660E\u77E5\u9053\u5267\u6BD2\u65E0\u6BD4\uFF0C\u5374\u8FD8\u662F\u5F62\u5F71\u4E0D\u79BB\uFF0C\u54EA\u6015\u5C0F\u5FC3\u7FFC\u7FFC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6DF1\u79CB\u57CB\u4E0B\u7684\u6700\u70C8\u7684\u4E00\u575B\u9152\uFF0C\u65F6\u5149\u98A0\u6C9B\uFF0C\u4E00\u996E\u4F9D\u5982\u5F53\u5E74\u521D\u9047\u3002\n\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u96D5\u513F\u4E0D\u8BBA\u98DE\u5230\u54EA\u91CC\uFF0C\u7EC8\u7A76\u56DE\u5230\u8FD9\u91CC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u8FDC\u5C71\u95F4\u8584\u96FE\u521D\u5347\u7684\u68B5\u9E23\uFF0C\u7EB7\u6270\u7EA2\u5C18\u4E07\u4E08\uFF0C\u5374\u53EA\u770B\u5230\u4F60\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u4E00\u7EBF\u5929\u7684\u7634\u6C14\uFF0C\u5C81\u6708\u8F6E\u8F6C\uFF0C\u7ECF\u4E45\u4E0D\u606F\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u7BDD\u706B\u71C3\u5C3D\u5929\u660E\uFF0C\u5E7B\u5316\u6210\u7070\u70EC\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u5FC3\u843D\u5165\u5E73\u9759\u7684\u6E56\u5E95\uFF0C\u6405\u52A8\u4E00\u6C60\u6D9F\u6F2A\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u6843\u82B1\u5F00\u4E86\u4E00\u5B63\u53C8\u4E00\u5B63\uFF0C\u4E50\u6B64\u4E0D\u75B2\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u624B\u4E2D\u7684\u4E09\u9633\u7384\u9488\uFF0C\u6BCF\u4E00\u6839\u90FD\u662F\u552F\u4E00\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u50CF\u62A4\u7740\u7684\u9556\u8F66\uFF0C\u54EA\u6015\u6CA1\u4E86\u6027\u547D\uFF0C\u4E5F\u8981\u5B88\u62A4\u5230\u5E95\u3002\n\u6211\u8FD8\u662F\u5F88\u559C\u6B22\u4F60\uFF0C\u6216\u8BB8\u672A\u6765\u4E5F\u4E0D\u4F1A\u8DDF\u4F60\u63D0\u8D77\uFF0C\u5C31\u8BA9\u4ED6\u6210\u4E3A\u79D8\u5BC6\u3002\n")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/i-still-like-you-a-lot.md");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var iStillLikeYouALot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Blog - Oyxiaoxi", "display": "", "meta": [{ "property": "og:title", "content": "Blog - Oyxiaoxi" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Blog - Oyxiaoxi", "meta": [{ "property": "og:title", "content": "Blog - Oyxiaoxi" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_SubNav = _sfc_main$B;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      const _component_ListPosts = _sfc_main$C;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_SubNav, null, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_ListPosts, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_SubNav),
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_ListPosts)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/index.md");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  name: "iptables-block-user-ip",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Iptables Block User IP", "date": "2017-03-06T09:00:00.000Z", "draft": false, "lang": "zh", "type": "notes", "duration": "Read \xB7 1min", "description": "Forced Cross Domain\u3002", "meta": [{ "property": "og:title", "content": "Iptables Block User IP" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Iptables Block User IP", "meta": [{ "property": "og:title", "content": "Iptables Block User IP" }, { "property": "og:description", "content": "Forced Cross Domain\u3002" }, { "name": "description", "content": "Forced Cross Domain\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># \u5C01\u5355\u4E2A IP</span>
iptables -I INPUT -s <span class="token number"${_scopeId}>124.115</span>.0.199 -j DROP
<span class="token comment"${_scopeId}># \u5C01 IP \u6BB5\u540E\u4E8C\u4F4D</span>
iptables -I INPUT -s <span class="token number"${_scopeId}>124.115</span>.0.0/16 -j DROP\u3000
<span class="token comment"${_scopeId}># \u5C01\u6574\u4E2A IP \u6BB5\u540E\u4E09\u4F4D</span>
iptables -I INPUT -s <span class="token number"${_scopeId}>194.42</span>.0.0/8 -j DROP\u3000
<span class="token comment"${_scopeId}># \u5C01 IP \u6BB5\u540E\u4E00\u4F4D</span>
iptables -I INPUT -s <span class="token number"${_scopeId}>61.37</span>.80.0/24 -j DROP\u3000
<span class="token comment"${_scopeId}># \u53EA\u5C01 80 \u7AEF\u53E3</span>
iptables -I INPUT -p tcp \u2013dport <span class="token number"${_scopeId}>80</span> -s <span class="token number"${_scopeId}>124.115</span>.0.0/24 -j DROP
<span class="token comment"${_scopeId}># \u5217\u51FA\u5C4F\u853D Ip \u6761\u76EE</span>
iptables -L INPUT --line-numbers
<span class="token comment"${_scopeId}># \u89E3\u5C01</span>
iptables -F
<span class="token comment"${_scopeId}># \u6E05\u7A7A</span>
iptables -D INPUT \u6570\u5B57
<span class="token comment"${_scopeId}># \u5217\u51FA INPUT \u94FE\u6240\u6709\u7684\u89C4\u5219</span>
iptables -L INPUT --line-numbers
<span class="token comment"${_scopeId}># \u4FDD\u5B58</span>
<span class="token function"${_scopeId}>service</span> iptables save
<span class="token comment"${_scopeId}># \u91CD\u542F iptables \u670D\u52A1</span>
<span class="token function"${_scopeId}>service</span> iptables restart
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# \u5C01\u5355\u4E2A IP"),
                    vue.createTextVNode("\niptables -I INPUT -s "),
                    vue.createVNode("span", { class: "token number" }, "124.115"),
                    vue.createTextVNode(".0.199 -j DROP\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5C01 IP \u6BB5\u540E\u4E8C\u4F4D"),
                    vue.createTextVNode("\niptables -I INPUT -s "),
                    vue.createVNode("span", { class: "token number" }, "124.115"),
                    vue.createTextVNode(".0.0/16 -j DROP\u3000\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5C01\u6574\u4E2A IP \u6BB5\u540E\u4E09\u4F4D"),
                    vue.createTextVNode("\niptables -I INPUT -s "),
                    vue.createVNode("span", { class: "token number" }, "194.42"),
                    vue.createTextVNode(".0.0/8 -j DROP\u3000\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5C01 IP \u6BB5\u540E\u4E00\u4F4D"),
                    vue.createTextVNode("\niptables -I INPUT -s "),
                    vue.createVNode("span", { class: "token number" }, "61.37"),
                    vue.createTextVNode(".80.0/24 -j DROP\u3000\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u53EA\u5C01 80 \u7AEF\u53E3"),
                    vue.createTextVNode("\niptables -I INPUT -p tcp \u2013dport "),
                    vue.createVNode("span", { class: "token number" }, "80"),
                    vue.createTextVNode(" -s "),
                    vue.createVNode("span", { class: "token number" }, "124.115"),
                    vue.createTextVNode(".0.0/24 -j DROP\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5217\u51FA\u5C4F\u853D Ip \u6761\u76EE"),
                    vue.createTextVNode("\niptables -L INPUT --line-numbers\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u89E3\u5C01"),
                    vue.createTextVNode("\niptables -F\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u6E05\u7A7A"),
                    vue.createTextVNode("\niptables -D INPUT \u6570\u5B57\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u5217\u51FA INPUT \u94FE\u6240\u6709\u7684\u89C4\u5219"),
                    vue.createTextVNode("\niptables -L INPUT --line-numbers\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u4FDD\u5B58"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "service"),
                    vue.createTextVNode(" iptables save\n"),
                    vue.createVNode("span", { class: "token comment" }, "# \u91CD\u542F iptables \u670D\u52A1"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "service"),
                    vue.createTextVNode(" iptables restart\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/iptables-block-user-ip.md");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var iptablesBlockUserIp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  name: "japan",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Japan", "date": "2018-10-02T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Japan Travel itineraries\u3002", "meta": [{ "property": "og:title", "content": "Japan" }, { "property": "og:description", "content": "Japan Travel itineraries\u3002" }, { "name": "description", "content": "Japan Travel itineraries\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Japan", "meta": [{ "property": "og:title", "content": "Japan" }, { "property": "og:description", "content": "Japan Travel itineraries\u3002" }, { "name": "description", "content": "Japan Travel itineraries\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<blockquote${_scopeId}><p${_scopeId}>\u6A31\u82B1\uFF0C\u5FA1\u5B88\u5F88\u6709\u540D\uFF0C\u4E94\u8272\u5C0F\u706B\u8F66\u3002</p></blockquote><ul${_scopeId}><li${_scopeId}>\u4E1C\u4EAC \u2192 \u7BB1\u6839 \u2192 \u4EAC\u90FD \u2192 \u5B87\u6CBB \u2192 \u4EAC\u90FD \u2192 \u5948\u826F \u2192 \u795E\u6237 \u2192 \u5927\u962A</li></ul></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u6A31\u82B1\uFF0C\u5FA1\u5B88\u5F88\u6709\u540D\uFF0C\u4E94\u8272\u5C0F\u706B\u8F66\u3002")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u4E1C\u4EAC \u2192 \u7BB1\u6839 \u2192 \u4EAC\u90FD \u2192 \u5B87\u6CBB \u2192 \u4EAC\u90FD \u2192 \u5948\u826F \u2192 \u795E\u6237 \u2192 \u5927\u962A")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/japan.md");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var japan = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  name: "json-related-small-requirements-solution-process-and-deas",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "JSON \u76F8\u5173\u5C0F\u9700\u6C42\u7684\u89E3\u51B3\u8FC7\u7A0B\u4E0E\u601D\u8DEF", "date": "2021-07-01T12:36:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 18min", "description": "JSON related small requirements solution process and ideas\u3002", "meta": [{ "property": "og:title", "content": "JSON \u76F8\u5173\u5C0F\u9700\u6C42\u7684\u89E3\u51B3\u8FC7\u7A0B\u4E0E\u601D\u8DEF" }, { "property": "og:description", "content": "JSON related small requirements solution process and ideas\u3002" }, { "name": "description", "content": "JSON related small requirements solution process and ideas\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "JSON \u76F8\u5173\u5C0F\u9700\u6C42\u7684\u89E3\u51B3\u8FC7\u7A0B\u4E0E\u601D\u8DEF", "meta": [{ "property": "og:title", "content": "JSON \u76F8\u5173\u5C0F\u9700\u6C42\u7684\u89E3\u51B3\u8FC7\u7A0B\u4E0E\u601D\u8DEF" }, { "property": "og:description", "content": "JSON related small requirements solution process and ideas\u3002" }, { "name": "description", "content": "JSON related small requirements solution process and ideas\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}><img src="//cdn.3333120.com/article/json-ideas/wLPWKEkZR8.jpg" alt="JSON ideas"${_scopeId}></p><h2 id="\u8D77\u56E0" tabindex="-1"${_scopeId}>\u8D77\u56E0 <a class="header-anchor" href="#\u8D77\u56E0" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>\u6628\u5929\u540C\u4E8B\u95EE\u6211\uFF0C\u80FD\u4E0D\u80FD\u5728\u63A5\u53E3\u8FD4\u56DE\u4E2D\u4E0D\u8981\u5C06\u4E2D\u6587\u8F6C\u6210 Unicode \u7F16\u7801\uFF0C\u56E0\u4E3A\u8FD9\u662F Laravel \u6846\u67B6\u505A\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u5B9E\u73B0\u8FD9\u4E2A\u6548\u679C\u65E0\u975E\u5C31\u662F\u5728 json_encode \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D\u52A0\u5165\u5E38\u91CF <code${_scopeId}>JSON_UNESCAPED_UNICODE</code> \u9009\u9879\u5373\u53EF\uFF0C\u4F46\u662F\u6211\u4EEC\u5728\u63A7\u5236\u5668\u8FD4\u56DE\u7684\u662F\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u6570\u7EC4\uFF0C\u8FD9\u4E2A encode \u52A8\u4F5C\u662F\u6846\u67B6\u6700\u540E\u8F93\u51FA\u524D\u5B8C\u6210\u7684\u3002\u5E94\u8BE5\u662F\u4E00\u4E2A\u975E\u5E38\u5C0F\u5C0F\u5C0F\u7684\u9700\u6C42\u4E86\u3002</p><h2 id="\u5543\u6E90\u7801" tabindex="-1"${_scopeId}>\u5543\u6E90\u7801 <a class="header-anchor" href="#\u5543\u6E90\u7801" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>\u6211\u82B1\u4E86 5 \u5206\u949F\u8DDF\u5B8C\u6E90\u4EE3\u7801\uFF0C\u53D1\u73B0\u5B83\u5728 <code${_scopeId}>Illuminate\\Http\\Response</code> \u4E2D\u6709\u8FD9\u4E48\u4E00\u6BB5\u6765\u5B8C\u6210 JSON \u8F6C\u5316\u7684\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Http/Response.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>if</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>shouldBeJson</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>header</span><span class="token punctuation"${_scopeId}>(</span><span class="token string single-quoted-string"${_scopeId}>&#39;Content-Type&#39;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token string single-quoted-string"${_scopeId}>&#39;application/json&#39;</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

    <span class="token variable"${_scopeId}>$content</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>morphToJson</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u5176\u4E2D\u901A\u8FC7 <code${_scopeId}>shouldBeJson</code> \u8FD9\u4E2A\u65B9\u6CD5\u6765\u5224\u65AD\u5F53\u524D\u7684\u54CD\u5E94\u5185\u5BB9\u662F\u5426\u9700\u8981\u8F6C\u5316\u6210 JSON \u683C\u5F0F\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Http/Response.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>protected</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>shouldBeJson</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>return</span> <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Arrayable</span> <span class="token operator"${_scopeId}>||</span>
           <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Jsonable</span> <span class="token operator"${_scopeId}>||</span>
           <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>ArrayObject</span> <span class="token operator"${_scopeId}>||</span>
           <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>JsonSerializable</span> <span class="token operator"${_scopeId}>||</span>
           <span class="token class-name"${_scopeId}>is_array</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u6700\u540E\u901A\u8FC7 <code${_scopeId}>morphToJson</code> \u5B8C\u6210\u4E86\u8F6C\u5316\u52A8\u4F5C\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Http/Response.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>protected</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>morphToJson</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>if</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Jsonable</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>return</span> <span class="token variable"${_scopeId}>$content</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>toJson</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>elseif</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Arrayable</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token keyword"${_scopeId}>return</span> <span class="token function"${_scopeId}>json_encode</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>toArray</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span>

    <span class="token keyword"${_scopeId}>return</span> <span class="token function"${_scopeId}>json_encode</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u6240\u4EE5\u806A\u660E\u7684\u4F60\u5DF2\u7ECF\u53D1\u73B0\u4E86\uFF0C\u8FD9\u91CC\u7684 <code${_scopeId}>json_encode</code> \u6CA1\u6709\u4F20\u9012\u4EFB\u4F55\u9009\u9879\uFF0C\u6240\u4EE5\u6211\u4EEC\u65E0\u6CD5\u901A\u8FC7\u7B80\u5355\u7684\u65B9\u6CD5\u8C03\u7528\u6765\u5B9E\u73B0\u5B83\u3002</p><h2 id="\u89E3\u51B3\u65B9\u68481" tabindex="-1"${_scopeId}>\u89E3\u51B3\u65B9\u68481 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u68481" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>\u65E2\u7136\u6700\u7EC8\u51FA\u53E3\u662F\u8FD9\u4E48\u5E72\u7684\uFF0C\u90A3\u6211\u7ACB\u5373\u60F3\u5230\u4E00\u4E2A\u7B80\u5355\u7684\u5904\u7406\u65B9\u5F0F\uFF1A\u5728 <code${_scopeId}>public/index.php</code> \u4E2D\u8F93\u51FA\u54CD\u5E94\u503C\u524D\u5904\u7406\uFF1A</p><p${_scopeId}><em${_scopeId}>public/index.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token variable"${_scopeId}>$response</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$kernel</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>handle</span><span class="token punctuation"${_scopeId}>(</span>
    <span class="token variable"${_scopeId}>$request</span> <span class="token operator"${_scopeId}>=</span> <span class="token class-name class-name-fully-qualified static-context"${_scopeId}>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Http<span class="token punctuation"${_scopeId}>\\</span>Request</span><span class="token operator"${_scopeId}>::</span><span class="token function"${_scopeId}>capture</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token comment"${_scopeId}>// \u53D6\u5230\u5185\u5BB9</span>
<span class="token variable"${_scopeId}>$content</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>original</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token comment"${_scopeId}>// \u68C0\u67E5\u539F\u59CB\u5185\u5BB9\u7684\u7C7B\u578B\u662F\u5426\u9700\u8981\u8F6C json</span>
<span class="token keyword"${_scopeId}>if</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Arrayable</span> <span class="token operator"${_scopeId}>||</span>
    <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Jsonable</span> <span class="token operator"${_scopeId}>||</span>
    <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>ArrayObject</span> <span class="token operator"${_scopeId}>||</span>
    <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>JsonSerializable</span> <span class="token operator"${_scopeId}>||</span>
    <span class="token class-name"${_scopeId}>is_array</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token comment"${_scopeId}>// \u91CD\u65B0\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9</span>
    <span class="token variable"${_scopeId}>$response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>setContent</span><span class="token punctuation"${_scopeId}>(</span><span class="token function"${_scopeId}>json_encode</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>,</span> <span class="token constant"${_scopeId}>JSON_UNESCAPED_UNICODE</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token variable"${_scopeId}>$response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>send</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><p${_scopeId}>\u5C31\u8FD9\u6837\u8F7B\u677E\u7684\u641E\u5B9A\u4E86\u8FD9\u4E2A\u9700\u6C42\u3002</p><h2 id="\u5F3A\u8FEB\u75C7\u72AF\u4E86" tabindex="-1"${_scopeId}>\u5F3A\u8FEB\u75C7\u72AF\u4E86 <a class="header-anchor" href="#\u5F3A\u8FEB\u75C7\u72AF\u4E86" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>\u867D\u7136\u95EE\u9898\u89E3\u51B3\u4E86\uFF0C\u59CB\u7EC8\u89C9\u5F97\u8FD9\u79CD\u6539\u5165\u53E3\u6587\u4EF6\u7684\u9A9A\u64CD\u4F5C\u4E0D\u592A\u80FD\u63A5\u53D7\uFF0C\u603B\u89C9\u5F97\u5E94\u8BE5\u6709\u66F4\u79D1\u5B66\u4E00\u70B9\u7684\u65B9\u6CD5\uFF0C\u54EA\u6015\u66F4\u79D1\u5B66\u4E00\u4E22\u4E22\u90FD\u884C\u3002</p><h2 id="\u7EE7\u7EED\u63A2\u7D22" tabindex="-1"${_scopeId}>\u7EE7\u7EED\u63A2\u7D22 <a class="header-anchor" href="#\u7EE7\u7EED\u63A2\u7D22" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>\u7A81\u7136\u60F3\u5230\uFF0C\u6211\u4EEC\u7684\u63A5\u53E3\u90FD\u662F\u8FD4\u56DE\u7684\u662F Api Resource \u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6700\u540E\u8FD4\u56DE\u7684\u90FD\u662F <code${_scopeId}>Illuminate\\Http\\Resources\\Json\\JsonResource</code> \u5B9E\u4F8B\u6216\u8005\u96C6\u5408\uFF0C\u90A3\u53EF\u5426\u5728\u8FD9\u91CC\u652F\u6301\u9009\u9879\u5B9A\u4E49\u5462\uFF1F</p><p${_scopeId}>\u7B54\u6848\u662F\u53EF\u4EE5\uFF1A</p><p${_scopeId}>\u5728 <code${_scopeId}>Illuminate\\Http\\Resources\\Json\\JsonResource</code> \u4E2D\u6709\u4E00\u4E2A <code${_scopeId}>toResponse</code> \u65B9\u6CD5\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Http/Resources/Json/JsonResource.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>toResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>return</span> <span class="token punctuation"${_scopeId}>(</span><span class="token keyword"${_scopeId}>new</span> <span class="token class-name"${_scopeId}>ResourceResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$this</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>toResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u5B83\u5B9E\u4F8B\u5316\u5E76\u8C03\u7528\u4E86 <code${_scopeId}>Illuminate\\Http\\Resources\\Json\\ResourceResponse</code> \u7684 <code${_scopeId}>toResponse</code> \u7684\u65B9\u6CD5\u505A\u4E3A\u8FD4\u56DE\u503C\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Http/Resources/Json/ResourceResponse.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>toResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>return</span> <span class="token function"${_scopeId}>tap</span><span class="token punctuation"${_scopeId}>(</span><span class="token function"${_scopeId}>response</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>json</span><span class="token punctuation"${_scopeId}>(</span>
        <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>wrap</span><span class="token punctuation"${_scopeId}>(</span>
            <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>resolve</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
            <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>with</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
            <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>additional</span>
        <span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
        <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>calculateStatus</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
    <span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span> <span class="token keyword"${_scopeId}>function</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$response</span><span class="token punctuation"${_scopeId}>)</span> <span class="token keyword"${_scopeId}>use</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token variable"${_scopeId}>$response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>original</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token punctuation"${_scopeId}>;</span>

        <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>resource</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>withResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>,</span> <span class="token variable"${_scopeId}>$response</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u8FD9\u4E2A\u65B9\u6CD5\u6700\u540E\u8FD4\u56DE\u4E86 <code${_scopeId}>Illuminate\\Http\\JsonResponse</code>\uFF0C\u7EC8\u4E8E\uFF0C\u6211\u4EEC\u53D1\u73B0\u8FD9\u4E2A\u7C7B\u662F\u652F\u6301\u9009\u9879\u5B9A\u4E49\u7684\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/symfony/http-foundation/JsonResponse.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>protected</span> <span class="token variable"${_scopeId}>$encodingOptions</span> <span class="token operator"${_scopeId}>=</span> <span class="token keyword static-context"${_scopeId}>self</span><span class="token operator"${_scopeId}>::</span><span class="token constant"${_scopeId}>DEFAULT_ENCODING_OPTIONS</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><p${_scopeId}>\u53EF\u4EE5\u901A\u8FC7\u5B83\u7684\u65B9\u6CD5\uFF1A<code${_scopeId}>setEncodingOptions($encodingOptions)</code> \u6765\u4F20\u9012\u6211\u4EEC\u60F3\u8981\u7684 json_encode \u9009\u9879\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u6211\u4EEC\u7684 Resource \u57FA\u7C7B\uFF08\u6211\u4EEC\u63A5\u53E3\u8FD4\u56DE\u503C\u90FD\u4F7F\u7528\u4E86\u4E00\u4E2A Resource \u57FA\u7C7B <code${_scopeId}>App\\Http\\Resources\\Resource</code>\uFF09\u4E2D\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5\u5373\u53EF\uFF1A</p><p${_scopeId}><em${_scopeId}>app/Http/Resources/Resource.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token doc-comment comment"${_scopeId}>/**
 * <span class="token keyword"${_scopeId}>@param</span> \\Illuminate\\Http\\Request $request
 *
 * <span class="token keyword"${_scopeId}>@return</span> \\Illuminate\\Http\\JsonResponse
 */</span>
<span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>toResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>return</span> <span class="token keyword static-context"${_scopeId}>parent</span><span class="token operator"${_scopeId}>::</span><span class="token function"${_scopeId}>toResponse</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>setEncodingOptions</span><span class="token punctuation"${_scopeId}>(</span>\\<span class="token constant"${_scopeId}>JSON_UNESCAPED_UNICODE</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u53EF\u662F\uFF0C\u6211\u8FD8\u6CA1\u6765\u5F97\u53CA\u9AD8\u5174\uFF0C\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u67D0\u4E2A\u63A5\u53E3\u7531\u4E8E\u4E0D\u662F\u6807\u51C6\u7684\u6A21\u578B\u683C\u5F0F\uFF0C\u6CA1\u6709\u8FD4\u56DE Resource \u5B9E\u4F8B\uFF0C\u6240\u4EE5\u6700\u540E\u89C9\u5F97\u8FD9\u4E48\u5E72\u8FD8\u662F\u4E0D\u884C\uFF0C\u5FC5\u987B\u5F97\u5728 Laravel \u8F93\u51FA\u524D\u7EDF\u4E00\u5904\u7406\u3002</p><h3 id="\u7EC8\u6781\u89E3\u51B3\u65B9\u6848" tabindex="-1"${_scopeId}>\u7EC8\u6781\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u7EC8\u6781\u89E3\u51B3\u65B9\u6848" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>\u6211\u60F3\u5230\u4E86 Laravel \u7684 ternimate \u4E2D\u95F4\u4EF6\u7279\u6027\uFF0C\u7136\u540E\u53D1\u73B0\u4E0D\u53EF\u884C\uFF0C\u56E0\u4E3A\u4F60\u4F1A\u53D1\u73B0\u5728 <code${_scopeId}>public/index.php</code> \u4E2D\uFF0Cternimate \u4E2D\u95F4\u4EF6\u7684\u6700\u540E\u5728\u54CD\u5E94\u8F93\u51FA\u4E4B\u540E\uFF1A</p><p${_scopeId}><em${_scopeId}>public/index.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token comment"${_scopeId}>//...</span>
<span class="token variable"${_scopeId}>$response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>send</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token variable"${_scopeId}>$kernel</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>terminate</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>,</span> <span class="token variable"${_scopeId}>$response</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><p${_scopeId}>\u6240\u4EE5\u65F6\u673A\u4E0D\u5408\u9002\u3002</p><p${_scopeId}>\u90A3\u4E48\u5728\u8FD9\u4E09\u884C\u4EE3\u7801\u91CC\u5BFB\u627E\u7B54\u6848\u5427\uFF1A</p><p${_scopeId}><em${_scopeId}>public/index.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token variable"${_scopeId}>$response</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$kernel</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>handle</span><span class="token punctuation"${_scopeId}>(</span>
    <span class="token variable"${_scopeId}>$request</span> <span class="token operator"${_scopeId}>=</span> <span class="token class-name class-name-fully-qualified static-context"${_scopeId}>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Http<span class="token punctuation"${_scopeId}>\\</span>Request</span><span class="token operator"${_scopeId}>::</span><span class="token function"${_scopeId}>capture</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><p${_scopeId}>\u6211\u53D1\u73B0\u5728\u8FD9\u4E2A\u903B\u8F91\u7684\u6700\u540E\uFF0C\u5728 <code${_scopeId}>Illuminate\\Foundation\\Http\\Kernel</code> \u4E2D\u6709\u4E00\u4E2A <code${_scopeId}>handle</code> \u65B9\u6CD5\uFF1A</p><p${_scopeId}><em${_scopeId}>vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>handle</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>try</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token variable"${_scopeId}>$request</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>enableHttpMethodParameterOverride</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

        <span class="token variable"${_scopeId}>$response</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>sendRequestThroughRouter</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>catch</span> <span class="token punctuation"${_scopeId}>(</span><span class="token class-name"${_scopeId}>Exception</span> <span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>reportException</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

        <span class="token variable"${_scopeId}>$response</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>renderException</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>,</span> <span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>catch</span> <span class="token punctuation"${_scopeId}>(</span><span class="token class-name"${_scopeId}>Throwable</span> <span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>reportException</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$e</span> <span class="token operator"${_scopeId}>=</span> <span class="token keyword"${_scopeId}>new</span> <span class="token class-name"${_scopeId}>FatalThrowableError</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

        <span class="token variable"${_scopeId}>$response</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>renderException</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>,</span> <span class="token variable"${_scopeId}>$e</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
    <span class="token punctuation"${_scopeId}>}</span>

    <span class="token variable"${_scopeId}>$this</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>app</span><span class="token punctuation"${_scopeId}>[</span><span class="token string single-quoted-string"${_scopeId}>&#39;events&#39;</span><span class="token punctuation"${_scopeId}>]</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>dispatch</span><span class="token punctuation"${_scopeId}>(</span>
        <span class="token keyword"${_scopeId}>new</span> <span class="token class-name class-name-fully-qualified"${_scopeId}>Events<span class="token punctuation"${_scopeId}>\\</span>RequestHandled</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$request</span><span class="token punctuation"${_scopeId}>,</span> <span class="token variable"${_scopeId}>$response</span><span class="token punctuation"${_scopeId}>)</span>
    <span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

    <span class="token keyword"${_scopeId}>return</span> <span class="token variable"${_scopeId}>$response</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><p${_scopeId}>\u4E0A\u9762\u6700\u540E\u90E8\u5206\u6709\u4E00\u4E2A\u4E8B\u4EF6 <code${_scopeId}>Illuminate\\Foundation\\Http\\Events\\RequestHandled</code> \u88AB\u89E6\u53D1\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u662F\u7A81\u7834\u53E3\u4E86\uFF1A\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u4FEE\u6539 <code${_scopeId}>$response</code> \u7684\u5185\u5BB9\u3002</p><p${_scopeId}>\u521B\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF1A</p><pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}>$ ./artisan make:listener SetResponseEncodingOptions --event<span class="token operator"${_scopeId}>=</span>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Foundation<span class="token punctuation"${_scopeId}>\\</span>Http<span class="token punctuation"${_scopeId}>\\</span>Events<span class="token punctuation"${_scopeId}>\\</span>RequestHandled
</code></pre><p${_scopeId}>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p${_scopeId}><em${_scopeId}>app/Listensers/SetResponseEncodingOptions</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token php language-php"${_scopeId}><span class="token delimiter important"${_scopeId}>&lt;?php</span>

<span class="token keyword"${_scopeId}>namespace</span> <span class="token package"${_scopeId}>App<span class="token punctuation"${_scopeId}>\\</span>Listeners</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token keyword"${_scopeId}>use</span> <span class="token package"${_scopeId}>ArrayObject</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token keyword"${_scopeId}>use</span> <span class="token package"${_scopeId}>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Contracts<span class="token punctuation"${_scopeId}>\\</span>Support<span class="token punctuation"${_scopeId}>\\</span>Arrayable</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token keyword"${_scopeId}>use</span> <span class="token package"${_scopeId}>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Contracts<span class="token punctuation"${_scopeId}>\\</span>Support<span class="token punctuation"${_scopeId}>\\</span>Jsonable</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token keyword"${_scopeId}>use</span> <span class="token package"${_scopeId}>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Foundation<span class="token punctuation"${_scopeId}>\\</span>Http<span class="token punctuation"${_scopeId}>\\</span>Events<span class="token punctuation"${_scopeId}>\\</span>RequestHandled</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token keyword"${_scopeId}>class</span> <span class="token class-name-definition class-name"${_scopeId}>SetResponseEncodingOptions</span>
<span class="token punctuation"${_scopeId}>{</span>
    <span class="token comment"${_scopeId}>/*...*/</span>
    <span class="token keyword"${_scopeId}>public</span> <span class="token keyword"${_scopeId}>function</span> <span class="token function-definition function"${_scopeId}>handle</span><span class="token punctuation"${_scopeId}>(</span><span class="token class-name type-declaration"${_scopeId}>RequestHandled</span> <span class="token variable"${_scopeId}>$event</span><span class="token punctuation"${_scopeId}>)</span>
    <span class="token punctuation"${_scopeId}>{</span>
        <span class="token variable"${_scopeId}>$content</span> <span class="token operator"${_scopeId}>=</span> <span class="token variable"${_scopeId}>$event</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>original</span><span class="token punctuation"${_scopeId}>;</span>

        <span class="token keyword"${_scopeId}>if</span> <span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Arrayable</span> <span class="token operator"${_scopeId}>||</span>
            <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>Jsonable</span> <span class="token operator"${_scopeId}>||</span>
            <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name"${_scopeId}>ArrayObject</span> <span class="token operator"${_scopeId}>||</span>
            <span class="token variable"${_scopeId}>$content</span> <span class="token keyword"${_scopeId}>instanceof</span> <span class="token class-name class-name-fully-qualified"${_scopeId}><span class="token punctuation"${_scopeId}>\\</span>JsonSerializable</span> <span class="token operator"${_scopeId}>||</span>
            <span class="token class-name"${_scopeId}>is_array</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
            <span class="token variable"${_scopeId}>$event</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token property"${_scopeId}>response</span><span class="token operator"${_scopeId}>-&gt;</span><span class="token function"${_scopeId}>setContent</span><span class="token punctuation"${_scopeId}>(</span><span class="token function"${_scopeId}>json_encode</span><span class="token punctuation"${_scopeId}>(</span><span class="token variable"${_scopeId}>$content</span><span class="token punctuation"${_scopeId}>,</span> \\<span class="token constant"${_scopeId}>JSON_UNESCAPED_UNICODE</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
        <span class="token punctuation"${_scopeId}>}</span>
    <span class="token punctuation"${_scopeId}>}</span>
<span class="token punctuation"${_scopeId}>}</span>
</span></code></pre><p${_scopeId}>\u914D\u7F6E\u76D1\u542C\u89C4\u5219\uFF1A</p><p${_scopeId}><em${_scopeId}>app/Providers/EventServiceProvider.php</em></p><pre class="language-php"${_scopeId}><code class="language-php"${_scopeId}><span class="token keyword"${_scopeId}>protected</span> <span class="token variable"${_scopeId}>$listen</span> <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>[</span>
    <span class="token comment"${_scopeId}>//...</span>
    <span class="token class-name class-name-fully-qualified static-context"${_scopeId}><span class="token punctuation"${_scopeId}>\\</span>Illuminate<span class="token punctuation"${_scopeId}>\\</span>Foundation<span class="token punctuation"${_scopeId}>\\</span>Http<span class="token punctuation"${_scopeId}>\\</span>Events<span class="token punctuation"${_scopeId}>\\</span>RequestHandled</span><span class="token operator"${_scopeId}>::</span><span class="token keyword"${_scopeId}>class</span> <span class="token operator"${_scopeId}>=&gt;</span> <span class="token punctuation"${_scopeId}>[</span>
        <span class="token class-name class-name-fully-qualified static-context"${_scopeId}><span class="token punctuation"${_scopeId}>\\</span>App<span class="token punctuation"${_scopeId}>\\</span>Listeners<span class="token punctuation"${_scopeId}>\\</span>SetResponseEncodingOptions</span><span class="token operator"${_scopeId}>::</span><span class="token keyword"${_scopeId}>class</span><span class="token punctuation"${_scopeId}>,</span>
    <span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>,</span>
<span class="token punctuation"${_scopeId}>]</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><p${_scopeId}>\u7EC8\u4E8E\uFF0C\u627E\u5230\u4E86\u4E00\u4E2A\u770B\u8D77\u6765\u5408\u7406\u7684\u505A\u6CD5\u89E3\u51B3\u4E86\u8FD9\u4E2A\u5C0F\u5C0F\u5C0F\u9700\u6C42\u3002</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/json-ideas/wLPWKEkZR8.jpg",
                    alt: "JSON ideas"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "\u8D77\u56E0",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u8D77\u56E0 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u8D77\u56E0",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6628\u5929\u540C\u4E8B\u95EE\u6211\uFF0C\u80FD\u4E0D\u80FD\u5728\u63A5\u53E3\u8FD4\u56DE\u4E2D\u4E0D\u8981\u5C06\u4E2D\u6587\u8F6C\u6210 Unicode \u7F16\u7801\uFF0C\u56E0\u4E3A\u8FD9\u662F Laravel \u6846\u67B6\u505A\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u6211\u4EEC\u8981\u5B9E\u73B0\u8FD9\u4E2A\u6548\u679C\u65E0\u975E\u5C31\u662F\u5728 json_encode \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D\u52A0\u5165\u5E38\u91CF "),
                  vue.createVNode("code", null, "JSON_UNESCAPED_UNICODE"),
                  vue.createTextVNode(" \u9009\u9879\u5373\u53EF\uFF0C\u4F46\u662F\u6211\u4EEC\u5728\u63A7\u5236\u5668\u8FD4\u56DE\u7684\u662F\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u6570\u7EC4\uFF0C\u8FD9\u4E2A encode \u52A8\u4F5C\u662F\u6846\u67B6\u6700\u540E\u8F93\u51FA\u524D\u5B8C\u6210\u7684\u3002\u5E94\u8BE5\u662F\u4E00\u4E2A\u975E\u5E38\u5C0F\u5C0F\u5C0F\u7684\u9700\u6C42\u4E86\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u5543\u6E90\u7801",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5543\u6E90\u7801 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5543\u6E90\u7801",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6211\u82B1\u4E86 5 \u5206\u949F\u8DDF\u5B8C\u6E90\u4EE3\u7801\uFF0C\u53D1\u73B0\u5B83\u5728 "),
                  vue.createVNode("code", null, "Illuminate\\Http\\Response"),
                  vue.createTextVNode(" \u4E2D\u6709\u8FD9\u4E48\u4E00\u6BB5\u6765\u5B8C\u6210 JSON \u8F6C\u5316\u7684\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Http/Response.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "shouldBeJson"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "header"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string single-quoted-string" }, "'Content-Type'"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string single-quoted-string" }, "'application/json'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "morphToJson"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5176\u4E2D\u901A\u8FC7 "),
                  vue.createVNode("code", null, "shouldBeJson"),
                  vue.createTextVNode(" \u8FD9\u4E2A\u65B9\u6CD5\u6765\u5224\u65AD\u5F53\u524D\u7684\u54CD\u5E94\u5185\u5BB9\u662F\u5426\u9700\u8981\u8F6C\u5316\u6210 JSON \u683C\u5F0F\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Http/Response.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "protected"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "shouldBeJson"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Arrayable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n           "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Jsonable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n           "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "ArrayObject"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n           "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "JsonSerializable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n           "),
                    vue.createVNode("span", { class: "token class-name" }, "is_array"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6700\u540E\u901A\u8FC7 "),
                  vue.createVNode("code", null, "morphToJson"),
                  vue.createTextVNode(" \u5B8C\u6210\u4E86\u8F6C\u5316\u52A8\u4F5C\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Http/Response.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "protected"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "morphToJson"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Jsonable"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "toJson"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "elseif"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Arrayable"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "json_encode"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "toArray"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "json_encode"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6240\u4EE5\u806A\u660E\u7684\u4F60\u5DF2\u7ECF\u53D1\u73B0\u4E86\uFF0C\u8FD9\u91CC\u7684 "),
                  vue.createVNode("code", null, "json_encode"),
                  vue.createTextVNode(" \u6CA1\u6709\u4F20\u9012\u4EFB\u4F55\u9009\u9879\uFF0C\u6240\u4EE5\u6211\u4EEC\u65E0\u6CD5\u901A\u8FC7\u7B80\u5355\u7684\u65B9\u6CD5\u8C03\u7528\u6765\u5B9E\u73B0\u5B83\u3002")
                ]),
                vue.createVNode("h2", {
                  id: "\u89E3\u51B3\u65B9\u68481",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u89E3\u51B3\u65B9\u68481 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u89E3\u51B3\u65B9\u68481",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u65E2\u7136\u6700\u7EC8\u51FA\u53E3\u662F\u8FD9\u4E48\u5E72\u7684\uFF0C\u90A3\u6211\u7ACB\u5373\u60F3\u5230\u4E00\u4E2A\u7B80\u5355\u7684\u5904\u7406\u65B9\u5F0F\uFF1A\u5728 "),
                  vue.createVNode("code", null, "public/index.php"),
                  vue.createTextVNode(" \u4E2D\u8F93\u51FA\u54CD\u5E94\u503C\u524D\u5904\u7406\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "public/index.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$kernel"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "handle"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name class-name-fully-qualified static-context" }, [
                      vue.createTextVNode("Illuminate"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Http"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Request")
                    ]),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token function" }, "capture"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// \u53D6\u5230\u5185\u5BB9"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "original"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// \u68C0\u67E5\u539F\u59CB\u5185\u5BB9\u7684\u7C7B\u578B\u662F\u5426\u9700\u8981\u8F6C json"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "if"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Arrayable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "Jsonable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "ArrayObject"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "JsonSerializable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "||"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token class-name" }, "is_array"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "// \u91CD\u65B0\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "setContent"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token function" }, "json_encode"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$content"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token constant" }, "JSON_UNESCAPED_UNICODE"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "send"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u5C31\u8FD9\u6837\u8F7B\u677E\u7684\u641E\u5B9A\u4E86\u8FD9\u4E2A\u9700\u6C42\u3002"),
                vue.createVNode("h2", {
                  id: "\u5F3A\u8FEB\u75C7\u72AF\u4E86",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u5F3A\u8FEB\u75C7\u72AF\u4E86 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u5F3A\u8FEB\u75C7\u72AF\u4E86",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u867D\u7136\u95EE\u9898\u89E3\u51B3\u4E86\uFF0C\u59CB\u7EC8\u89C9\u5F97\u8FD9\u79CD\u6539\u5165\u53E3\u6587\u4EF6\u7684\u9A9A\u64CD\u4F5C\u4E0D\u592A\u80FD\u63A5\u53D7\uFF0C\u603B\u89C9\u5F97\u5E94\u8BE5\u6709\u66F4\u79D1\u5B66\u4E00\u70B9\u7684\u65B9\u6CD5\uFF0C\u54EA\u6015\u66F4\u79D1\u5B66\u4E00\u4E22\u4E22\u90FD\u884C\u3002"),
                vue.createVNode("h2", {
                  id: "\u7EE7\u7EED\u63A2\u7D22",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u7EE7\u7EED\u63A2\u7D22 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7EE7\u7EED\u63A2\u7D22",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u7A81\u7136\u60F3\u5230\uFF0C\u6211\u4EEC\u7684\u63A5\u53E3\u90FD\u662F\u8FD4\u56DE\u7684\u662F Api Resource \u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6700\u540E\u8FD4\u56DE\u7684\u90FD\u662F "),
                  vue.createVNode("code", null, "Illuminate\\Http\\Resources\\Json\\JsonResource"),
                  vue.createTextVNode(" \u5B9E\u4F8B\u6216\u8005\u96C6\u5408\uFF0C\u90A3\u53EF\u5426\u5728\u8FD9\u91CC\u652F\u6301\u9009\u9879\u5B9A\u4E49\u5462\uFF1F")
                ]),
                vue.createVNode("p", null, "\u7B54\u6848\u662F\u53EF\u4EE5\uFF1A"),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5728 "),
                  vue.createVNode("code", null, "Illuminate\\Http\\Resources\\Json\\JsonResource"),
                  vue.createTextVNode(" \u4E2D\u6709\u4E00\u4E2A "),
                  vue.createVNode("code", null, "toResponse"),
                  vue.createTextVNode(" \u65B9\u6CD5\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Http/Resources/Json/JsonResource.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "toResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token keyword" }, "new"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "ResourceResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "toResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u5B83\u5B9E\u4F8B\u5316\u5E76\u8C03\u7528\u4E86 "),
                  vue.createVNode("code", null, "Illuminate\\Http\\Resources\\Json\\ResourceResponse"),
                  vue.createTextVNode(" \u7684 "),
                  vue.createVNode("code", null, "toResponse"),
                  vue.createTextVNode(" \u7684\u65B9\u6CD5\u505A\u4E3A\u8FD4\u56DE\u503C\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Http/Resources/Json/ResourceResponse.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "toResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "tap"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token function" }, "response"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "json"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "wrap"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "resolve"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "with"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n            "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "additional"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "calculateStatus"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "use"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "original"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "resource"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "withResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u8FD9\u4E2A\u65B9\u6CD5\u6700\u540E\u8FD4\u56DE\u4E86 "),
                  vue.createVNode("code", null, "Illuminate\\Http\\JsonResponse"),
                  vue.createTextVNode("\uFF0C\u7EC8\u4E8E\uFF0C\u6211\u4EEC\u53D1\u73B0\u8FD9\u4E2A\u7C7B\u662F\u652F\u6301\u9009\u9879\u5B9A\u4E49\u7684\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/symfony/http-foundation/JsonResponse.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "protected"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$encodingOptions"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword static-context" }, "self"),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token constant" }, "DEFAULT_ENCODING_OPTIONS"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u53EF\u4EE5\u901A\u8FC7\u5B83\u7684\u65B9\u6CD5\uFF1A"),
                  vue.createVNode("code", null, "setEncodingOptions($encodingOptions)"),
                  vue.createTextVNode(" \u6765\u4F20\u9012\u6211\u4EEC\u60F3\u8981\u7684 json_encode \u9009\u9879\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u6211\u4EEC\u7684 Resource \u57FA\u7C7B\uFF08\u6211\u4EEC\u63A5\u53E3\u8FD4\u56DE\u503C\u90FD\u4F7F\u7528\u4E86\u4E00\u4E2A Resource \u57FA\u7C7B "),
                  vue.createVNode("code", null, "App\\Http\\Resources\\Resource"),
                  vue.createTextVNode("\uFF09\u4E2D\u6DFB\u52A0\u5982\u4E0B\u65B9\u6CD5\u5373\u53EF\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "app/Http/Resources/Resource.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token doc-comment comment" }, [
                      vue.createTextVNode("/**\n * "),
                      vue.createVNode("span", { class: "token keyword" }, "@param"),
                      vue.createTextVNode(" \\Illuminate\\Http\\Request $request\n *\n * "),
                      vue.createVNode("span", { class: "token keyword" }, "@return"),
                      vue.createTextVNode(" \\Illuminate\\Http\\JsonResponse\n */")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "toResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword static-context" }, "parent"),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token function" }, "toResponse"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "setEncodingOptions"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\\"),
                    vue.createVNode("span", { class: "token constant" }, "JSON_UNESCAPED_UNICODE"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u53EF\u662F\uFF0C\u6211\u8FD8\u6CA1\u6765\u5F97\u53CA\u9AD8\u5174\uFF0C\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u67D0\u4E2A\u63A5\u53E3\u7531\u4E8E\u4E0D\u662F\u6807\u51C6\u7684\u6A21\u578B\u683C\u5F0F\uFF0C\u6CA1\u6709\u8FD4\u56DE Resource \u5B9E\u4F8B\uFF0C\u6240\u4EE5\u6700\u540E\u89C9\u5F97\u8FD9\u4E48\u5E72\u8FD8\u662F\u4E0D\u884C\uFF0C\u5FC5\u987B\u5F97\u5728 Laravel \u8F93\u51FA\u524D\u7EDF\u4E00\u5904\u7406\u3002"),
                vue.createVNode("h3", {
                  id: "\u7EC8\u6781\u89E3\u51B3\u65B9\u6848",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u7EC8\u6781\u89E3\u51B3\u65B9\u6848 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u7EC8\u6781\u89E3\u51B3\u65B9\u6848",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6211\u60F3\u5230\u4E86 Laravel \u7684 ternimate \u4E2D\u95F4\u4EF6\u7279\u6027\uFF0C\u7136\u540E\u53D1\u73B0\u4E0D\u53EF\u884C\uFF0C\u56E0\u4E3A\u4F60\u4F1A\u53D1\u73B0\u5728 "),
                  vue.createVNode("code", null, "public/index.php"),
                  vue.createTextVNode(" \u4E2D\uFF0Cternimate \u4E2D\u95F4\u4EF6\u7684\u6700\u540E\u5728\u54CD\u5E94\u8F93\u51FA\u4E4B\u540E\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "public/index.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token comment" }, "//..."),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "send"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token variable" }, "$kernel"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "terminate"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u6240\u4EE5\u65F6\u673A\u4E0D\u5408\u9002\u3002"),
                vue.createVNode("p", null, "\u90A3\u4E48\u5728\u8FD9\u4E09\u884C\u4EE3\u7801\u91CC\u5BFB\u627E\u7B54\u6848\u5427\uFF1A"),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "public/index.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$kernel"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "handle"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name class-name-fully-qualified static-context" }, [
                      vue.createTextVNode("Illuminate"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Http"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Request")
                    ]),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token function" }, "capture"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u6211\u53D1\u73B0\u5728\u8FD9\u4E2A\u903B\u8F91\u7684\u6700\u540E\uFF0C\u5728 "),
                  vue.createVNode("code", null, "Illuminate\\Foundation\\Http\\Kernel"),
                  vue.createTextVNode(" \u4E2D\u6709\u4E00\u4E2A "),
                  vue.createVNode("code", null, "handle"),
                  vue.createTextVNode(" \u65B9\u6CD5\uFF1A")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-definition function" }, "handle"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "try"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "enableHttpMethodParameterOverride"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "sendRequestThroughRouter"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "catch"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token class-name" }, "Exception"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "reportException"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "renderException"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "catch"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token class-name" }, "Throwable"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "reportException"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "new"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "FatalThrowableError"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n        "),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "renderException"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$e"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n    "),
                    vue.createVNode("span", { class: "token variable" }, "$this"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token property" }, "app"),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createVNode("span", { class: "token string single-quoted-string" }, "'events'"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token operator" }, "->"),
                    vue.createVNode("span", { class: "token function" }, "dispatch"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token keyword" }, "new"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name class-name-fully-qualified" }, [
                      vue.createTextVNode("Events"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("RequestHandled")
                    ]),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token variable" }, "$request"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$response"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("\u4E0A\u9762\u6700\u540E\u90E8\u5206\u6709\u4E00\u4E2A\u4E8B\u4EF6 "),
                  vue.createVNode("code", null, "Illuminate\\Foundation\\Http\\Events\\RequestHandled"),
                  vue.createTextVNode(" \u88AB\u89E6\u53D1\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u662F\u7A81\u7834\u53E3\u4E86\uFF1A\u76D1\u542C\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u4FEE\u6539 "),
                  vue.createVNode("code", null, "$response"),
                  vue.createTextVNode(" \u7684\u5185\u5BB9\u3002")
                ]),
                vue.createVNode("p", null, "\u521B\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF1A"),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createTextVNode("$ ./artisan make:listener SetResponseEncodingOptions --event"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode("Illuminate"),
                    vue.createVNode("span", { class: "token punctuation" }, "\\"),
                    vue.createTextVNode("Foundation"),
                    vue.createVNode("span", { class: "token punctuation" }, "\\"),
                    vue.createTextVNode("Http"),
                    vue.createVNode("span", { class: "token punctuation" }, "\\"),
                    vue.createTextVNode("Events"),
                    vue.createVNode("span", { class: "token punctuation" }, "\\"),
                    vue.createTextVNode("RequestHandled\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u4EE3\u7801\u5982\u4E0B\uFF1A"),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "app/Listensers/SetResponseEncodingOptions")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token php language-php" }, [
                      vue.createVNode("span", { class: "token delimiter important" }, "<?php"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token keyword" }, "namespace"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token package" }, [
                        vue.createTextVNode("App"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Listeners")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token keyword" }, "use"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token package" }, "ArrayObject"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "use"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token package" }, [
                        vue.createTextVNode("Illuminate"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Contracts"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Support"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Arrayable")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "use"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token package" }, [
                        vue.createTextVNode("Illuminate"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Contracts"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Support"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Jsonable")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "use"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token package" }, [
                        vue.createTextVNode("Illuminate"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Foundation"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Http"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("Events"),
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("RequestHandled")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token keyword" }, "class"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name-definition class-name" }, "SetResponseEncodingOptions"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token comment" }, "/*...*/"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token keyword" }, "public"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "function"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token function-definition function" }, "handle"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token class-name type-declaration" }, "RequestHandled"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token variable" }, "$event"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n        "),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token variable" }, "$event"),
                      vue.createVNode("span", { class: "token operator" }, "->"),
                      vue.createVNode("span", { class: "token property" }, "response"),
                      vue.createVNode("span", { class: "token operator" }, "->"),
                      vue.createVNode("span", { class: "token property" }, "original"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n        "),
                      vue.createVNode("span", { class: "token keyword" }, "if"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name" }, "Arrayable"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "||"),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name" }, "Jsonable"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "||"),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name" }, "ArrayObject"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "||"),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "instanceof"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name class-name-fully-qualified" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "\\"),
                        vue.createTextVNode("JsonSerializable")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token operator" }, "||"),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token class-name" }, "is_array"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n            "),
                      vue.createVNode("span", { class: "token variable" }, "$event"),
                      vue.createVNode("span", { class: "token operator" }, "->"),
                      vue.createVNode("span", { class: "token property" }, "response"),
                      vue.createVNode("span", { class: "token operator" }, "->"),
                      vue.createVNode("span", { class: "token function" }, "setContent"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token function" }, "json_encode"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token variable" }, "$content"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(" \\"),
                      vue.createVNode("span", { class: "token constant" }, "JSON_UNESCAPED_UNICODE"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n        "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n")
                    ])
                  ])
                ]),
                vue.createVNode("p", null, "\u914D\u7F6E\u76D1\u542C\u89C4\u5219\uFF1A"),
                vue.createVNode("p", null, [
                  vue.createVNode("em", null, "app/Providers/EventServiceProvider.php")
                ]),
                vue.createVNode("pre", { class: "language-php" }, [
                  vue.createVNode("code", { class: "language-php" }, [
                    vue.createVNode("span", { class: "token keyword" }, "protected"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token variable" }, "$listen"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "//..."),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token class-name class-name-fully-qualified static-context" }, [
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Illuminate"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Foundation"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Http"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Events"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("RequestHandled")
                    ]),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token operator" }, "=>"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "["),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token class-name class-name-fully-qualified static-context" }, [
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("App"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("Listeners"),
                      vue.createVNode("span", { class: "token punctuation" }, "\\"),
                      vue.createTextVNode("SetResponseEncodingOptions")
                    ]),
                    vue.createVNode("span", { class: "token operator" }, "::"),
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "]"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("p", null, "\u7EC8\u4E8E\uFF0C\u627E\u5230\u4E86\u4E00\u4E2A\u770B\u8D77\u6765\u5408\u7406\u7684\u505A\u6CD5\u89E3\u51B3\u4E86\u8FD9\u4E2A\u5C0F\u5C0F\u5C0F\u9700\u6C42\u3002")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/json-related-small-requirements-solution-process-and-deas.md");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var jsonRelatedSmallRequirementsSolutionProcessAndDeas = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  name: "northern-europe",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Northern Europe", "date": "2017-05-03T09:00:00.000Z", "draft": false, "lang": "zh", "type": "travel", "duration": "Read \xB7 1min", "description": "Northern Europe Travel itineraries\u3002", "meta": [{ "property": "og:title", "content": "Northern Europe" }, { "property": "og:description", "content": "Northern Europe Travel itineraries\u3002" }, { "name": "description", "content": "Northern Europe Travel itineraries\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Northern Europe", "meta": [{ "property": "og:title", "content": "Northern Europe" }, { "property": "og:description", "content": "Northern Europe Travel itineraries\u3002" }, { "name": "description", "content": "Northern Europe Travel itineraries\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<blockquote${_scopeId}><p${_scopeId}>\u51B7\uFF0C\u6027\u51B7\u6DE1\u98CE\uFF0C\u5317\u6781\u718A\uFF0C\u6781\u5149</p></blockquote><ul${_scopeId}><li${_scopeId}>\u745E\u5178 \u2192 \u632A\u5A01 \u2192 \u4E39\u9EA6 \u2192 \u82AC\u5170</li></ul></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u51B7\uFF0C\u6027\u51B7\u6DE1\u98CE\uFF0C\u5317\u6781\u718A\uFF0C\u6781\u5149")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "\u745E\u5178 \u2192 \u632A\u5A01 \u2192 \u4E39\u9EA6 \u2192 \u82AC\u5170")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/northern-europe.md");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var northernEurope = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  name: "s.o.l.i.d.principles-around-you",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "S.O.L.I.D. Principles Around You", "date": "2021-07-02T17:05:00.000Z", "draft": false, "lang": "en", "duration": "Read \xB7 5min", "description": "S.O.L.I.D. Principles Around You\u3002", "meta": [{ "property": "og:title", "content": "S.O.L.I.D. Principles Around You" }, { "property": "og:description", "content": "S.O.L.I.D. Principles Around You\u3002" }, { "name": "description", "content": "S.O.L.I.D. Principles Around You\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "S.O.L.I.D. Principles Around You", "meta": [{ "property": "og:title", "content": "S.O.L.I.D. Principles Around You" }, { "property": "og:description", "content": "S.O.L.I.D. Principles Around You\u3002" }, { "name": "description", "content": "S.O.L.I.D. Principles Around You\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}><img src="//cdn.3333120.com/article/solid/0qazxkim2uf50lnwjkhx.png" alt="SOLID"${_scopeId}></p><p${_scopeId}>In this article, I want to briefly go through <a href="https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)" target="_blank" rel="noopener"${_scopeId}>SOLID</a> principles (the acronym that stands for five basic principles of object-oriented programming and design) supplying each of them with real-world visual examples to make those principles more understandable, readable and memorizable.</p><blockquote${_scopeId}><p${_scopeId}>If you want to see code examples instead you may take a look at variety of tree data structure implementations in JavaScript like Binary Search Tree, AVL Tree, Red-Black Tree, Segment Tree or Fenwick Tree.</p></blockquote><p${_scopeId}>So let\u2019s move on!</p><h2 id="s-\u2014-single-responsibility-principle" tabindex="-1"${_scopeId}>S \u2014 Single Responsibility Principle <a class="header-anchor" href="#s-\u2014-single-responsibility-principle" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>[a.k.a <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" rel="noopener"${_scopeId}>SRP</a>] A class should have only a single responsibility. Only one potential change in the software\u2019s specification should be able to affect the specification of the class.</p><p${_scopeId}><img src="//cdn.3333120.com/article/solid/xabfs57cezxegih8uh2f.png" alt="S"${_scopeId}></p><h2 id="o-\u2014-open-closed-principle" tabindex="-1"${_scopeId}>O \u2014 Open/Closed Principle <a class="header-anchor" href="#o-\u2014-open-closed-principle" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>[a.k.a <a href="https://en.wikipedia.org/wiki/Open/closed_principle" target="_blank" rel="noopener"${_scopeId}>OCP</a>] Software entities should be open for EXTENSION, but closed for MODIFICATION. Allow behavior to be extended without modifying the source code.</p><p${_scopeId}><img src="//cdn.3333120.com/article/solid/fv3xpd9kkfgntqby9eg6.png" alt="O"${_scopeId}></p><h2 id="l-\u2014-liskov-substitution-principle" tabindex="-1"${_scopeId}>L \u2014 Liskov Substitution Principle <a class="header-anchor" href="#l-\u2014-liskov-substitution-principle" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>[a.k.a. <a href="https://en.wikipedia.org/wiki/Liskov_substitution_principle" target="_blank" rel="noopener"${_scopeId}>LSP</a>] Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.</p><p${_scopeId}><img src="//cdn.3333120.com/article/solid/7wdzib8lqfq9bcstfqu3.png" alt="L"${_scopeId}></p><h2 id="i-\u2014-interface-segregation-principle" tabindex="-1"${_scopeId}>I \u2014 Interface Segregation Principle <a class="header-anchor" href="#i-\u2014-interface-segregation-principle" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>[a.k.a. <a href="https://en.wikipedia.org/wiki/Interface_segregation_principle" target="_blank" rel="noopener"${_scopeId}>ISP</a>] Many client-specific interfaces are better than one general-purpose interface. No client should be forced to depend on methods it does not use.</p><p${_scopeId}><img src="//cdn.3333120.com/article/solid/rnwds5cv5qcodlam1wc6.png" alt="I"${_scopeId}></p><h2 id="d-\u2014-dependency-inversion-principle" tabindex="-1"${_scopeId}>D \u2014 Dependency Inversion Principle <a class="header-anchor" href="#d-\u2014-dependency-inversion-principle" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>[a.k.a. <a href="https://en.wikipedia.org/wiki/Dependency_inversion_principle" target="_blank" rel="noopener"${_scopeId}>DIP</a>] One should depend upon abstractions, not concretions.</p><ul${_scopeId}><li${_scopeId}>High-level modules should not depend on low-level modules. Both should depend on abstractions.</li><li${_scopeId}>Abstractions should not depend on details. Details should depend on abstractions.</li></ul><p${_scopeId}><img src="//cdn.3333120.com/article/solid/wugaxuqznqow3wzgp8hr.png" alt="D"${_scopeId}></p><p${_scopeId}>The plug doesn\u2019t care which type of wire it uses, it just needs wires that conduct electricity.</p><p${_scopeId}>I hope these illustrations have been useful for you :)</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/0qazxkim2uf50lnwjkhx.png",
                    alt: "SOLID"
                  })
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("In this article, I want to briefly go through "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)",
                    target: "_blank",
                    rel: "noopener"
                  }, "SOLID"),
                  vue.createTextVNode(" principles (the acronym that stands for five basic principles of object-oriented programming and design) supplying each of them with real-world visual examples to make those principles more understandable, readable and memorizable.")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "If you want to see code examples instead you may take a look at variety of tree data structure implementations in JavaScript like Binary Search Tree, AVL Tree, Red-Black Tree, Segment Tree or Fenwick Tree.")
                ]),
                vue.createVNode("p", null, "So let\u2019s move on!"),
                vue.createVNode("h2", {
                  id: "s-\u2014-single-responsibility-principle",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("S \u2014 Single Responsibility Principle "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#s-\u2014-single-responsibility-principle",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("[a.k.a "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/Single_responsibility_principle",
                    target: "_blank",
                    rel: "noopener"
                  }, "SRP"),
                  vue.createTextVNode("] A class should have only a single responsibility. Only one potential change in the software\u2019s specification should be able to affect the specification of the class.")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/xabfs57cezxegih8uh2f.png",
                    alt: "S"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "o-\u2014-open-closed-principle",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("O \u2014 Open/Closed Principle "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#o-\u2014-open-closed-principle",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("[a.k.a "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/Open/closed_principle",
                    target: "_blank",
                    rel: "noopener"
                  }, "OCP"),
                  vue.createTextVNode("] Software entities should be open for EXTENSION, but closed for MODIFICATION. Allow behavior to be extended without modifying the source code.")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/fv3xpd9kkfgntqby9eg6.png",
                    alt: "O"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "l-\u2014-liskov-substitution-principle",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("L \u2014 Liskov Substitution Principle "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#l-\u2014-liskov-substitution-principle",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("[a.k.a. "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/Liskov_substitution_principle",
                    target: "_blank",
                    rel: "noopener"
                  }, "LSP"),
                  vue.createTextVNode("] Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/7wdzib8lqfq9bcstfqu3.png",
                    alt: "L"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "i-\u2014-interface-segregation-principle",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("I \u2014 Interface Segregation Principle "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#i-\u2014-interface-segregation-principle",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("[a.k.a. "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/Interface_segregation_principle",
                    target: "_blank",
                    rel: "noopener"
                  }, "ISP"),
                  vue.createTextVNode("] Many client-specific interfaces are better than one general-purpose interface. No client should be forced to depend on methods it does not use.")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/rnwds5cv5qcodlam1wc6.png",
                    alt: "I"
                  })
                ]),
                vue.createVNode("h2", {
                  id: "d-\u2014-dependency-inversion-principle",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("D \u2014 Dependency Inversion Principle "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#d-\u2014-dependency-inversion-principle",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("[a.k.a. "),
                  vue.createVNode("a", {
                    href: "https://en.wikipedia.org/wiki/Dependency_inversion_principle",
                    target: "_blank",
                    rel: "noopener"
                  }, "DIP"),
                  vue.createTextVNode("] One should depend upon abstractions, not concretions.")
                ]),
                vue.createVNode("ul", null, [
                  vue.createVNode("li", null, "High-level modules should not depend on low-level modules. Both should depend on abstractions."),
                  vue.createVNode("li", null, "Abstractions should not depend on details. Details should depend on abstractions.")
                ]),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/solid/wugaxuqznqow3wzgp8hr.png",
                    alt: "D"
                  })
                ]),
                vue.createVNode("p", null, "The plug doesn\u2019t care which type of wire it uses, it just needs wires that conduct electricity."),
                vue.createVNode("p", null, "I hope these illustrations have been useful for you :)")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/s.o.l.i.d.principles-around-you.md");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var s_o_l_i_d_principlesAroundYou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  name: "sometime",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "SomeTime", "date": "2021-06-30T13:48:00.000Z", "draft": false, "lang": "en", "type": "prose", "duration": "Read \xB7 5min", "description": "SomeTime\u3002", "meta": [{ "property": "og:title", "content": "SomeTime" }, { "property": "og:description", "content": "SomeTime\u3002" }, { "name": "description", "content": "SomeTime\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "SomeTime", "meta": [{ "property": "og:title", "content": "SomeTime" }, { "property": "og:description", "content": "SomeTime\u3002" }, { "name": "description", "content": "SomeTime\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}><img src="//cdn.3333120.com/article/sometime/C591155F-29E5-49EC-A677-E1462A6E103D.jpeg" alt="Sometime"${_scopeId}></p><p${_scopeId}>Sometimes, It\u2019s not the person miss, It\u2019s the feeling you had when you were with them.</p><p${_scopeId}>Pay attention to the details to the small things, Sometimes the small beauty in your life can make such a huge difference. Especially during a difficult time like this.</p><p${_scopeId}>This life is not only about discovering what is unknown is this world It\u2019s also about discovering yourself to understand who you are !</p><p${_scopeId}>If you\u2019ve got 80% or 60% accurate information Which is already 100% sufficient to make the decision I mean, That\u2019s good enough, right!</p><p${_scopeId}>Diagnosis, analysis, development of strategies, and actual action plan.</p><p${_scopeId}>The perception would be the foundation\xA0\xA0to build your Emotional/affective &amp; cognitive understanding of the world. so that\u2019s the basic components of developing your Learning process and memory, attitude and behaviours.</p><p${_scopeId}>Hospitality is based on the assumption that hosts are doing this on a good will And of course they are looking for Some exchange from the guests And Hopefully develop everything into a long-term relationship.</p><p${_scopeId}>When you look at the stars you just realise how small you are, All the troubles, All that stress, Everything that troubles you in your life. You don\u2019t need to worry about those ones, So urh Think big.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, [
                  vue.createVNode("img", {
                    src: "//cdn.3333120.com/article/sometime/C591155F-29E5-49EC-A677-E1462A6E103D.jpeg",
                    alt: "Sometime"
                  })
                ]),
                vue.createVNode("p", null, "Sometimes, It\u2019s not the person miss, It\u2019s the feeling you had when you were with them."),
                vue.createVNode("p", null, "Pay attention to the details to the small things, Sometimes the small beauty in your life can make such a huge difference. Especially during a difficult time like this."),
                vue.createVNode("p", null, "This life is not only about discovering what is unknown is this world It\u2019s also about discovering yourself to understand who you are !"),
                vue.createVNode("p", null, "If you\u2019ve got 80% or 60% accurate information Which is already 100% sufficient to make the decision I mean, That\u2019s good enough, right!"),
                vue.createVNode("p", null, "Diagnosis, analysis, development of strategies, and actual action plan."),
                vue.createVNode("p", null, "The perception would be the foundation\xA0\xA0to build your Emotional/affective & cognitive understanding of the world. so that\u2019s the basic components of developing your Learning process and memory, attitude and behaviours."),
                vue.createVNode("p", null, "Hospitality is based on the assumption that hosts are doing this on a good will And of course they are looking for Some exchange from the guests And Hopefully develop everything into a long-term relationship."),
                vue.createVNode("p", null, "When you look at the stars you just realise how small you are, All the troubles, All that stress, Everything that troubles you in your life. You don\u2019t need to worry about those ones, So urh Think big.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/sometime.md");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var sometime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  name: "store-the-sunshine-and-there-will-be-a-faraway-place-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002", "date": "2022-04-09T15:00:00.000Z", "draft": false, "lang": "zh", "type": "prose", "duration": "Read \xB7 2min", "description": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002", "meta": [{ "property": "og:title", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }, { "property": "og:description", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }, { "name": "description", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002", "meta": [{ "property": "og:title", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }, { "property": "og:description", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }, { "name": "description", "content": "\u50A8\u5B58\u9633\u5149\uFF0C\u5FC5\u6709\u8FDC\u65B9\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>\u751F\u547D\u89C1\u8BC1\u8FC7\u591A\u5C11\u7684\u771F\u5B9E\uFF0C\u4ED8\u51FA\u8FC7\u600E\u6837\u7684\u52AA\u529B\uFF0C\u6211\u5E0C\u671B\u5C31\u4F1A\u6709\u600E\u4E48\u7684\u5E95\u6C14\u3002</p><p${_scopeId}>17 \u5C81 \u6211\u6700\u6DF1\u5904\u7684\u5B64\u72EC\u5C31\u662F \u6211\u4E0D\u633D\u7559 \u800C\u4ED6\u4EEC\u4E5F\u6CA1\u518D\u56DE\u6765</p><p${_scopeId}>18 \u5C81 \u8FD8\u6709\u51E0\u5929\u9AD8\u8003 \u5750\u5728\u684C\u524D\u4ECE\u4E00\u4E2A\u51CC\u6668\u5230\u53E6\u4E00\u4E2A\u51CC\u6668 \u611F\u89C9\u8D77\u8EAB\u5012\u676F\u6C34\u7684\u65F6\u95F4\u90FD\u662F\u5962\u4F88 \u5373\u4F7F\u8FD9\u6837 \u8FD8\u662F\u4EC0\u4E48\u90FD\u4E0D\u4F1A \u4E00\u584C\u7CCA\u6D82</p><p${_scopeId}>19 \u5C81 \u60F3\u627E\u4EBA\u966A\u65F6 \u53D1\u73B0\u901A\u8BAF\u5F55\u91CC \u6CA1\u6709\u53EF\u4EE5\u968F\u53EB\u968F\u5230\u7684\u4EBA</p><p${_scopeId}>20 \u5C81 \u6211\u6240\u7406\u89E3\u7684\u5B64\u72EC\u662F \u4F60\u4E0D\u5408\u7FA4\u662F\u8868\u9762\u7684\u5B64\u72EC \u53EF\u662F\u4F60\u5408\u7FA4\u4E86\u662F\u5185\u5FC3\u7684\u5B64\u72EC</p><p${_scopeId}>21 \u5C81 \u5B64\u72EC\u662F\u80CC\u4E86\u5927\u534A\u5929\u7684\u5355\u8BCD \u5374\u53EA\u8BB0\u5F97\u4E00\u4E2A abandon</p><p${_scopeId}>22 \u5C81 \u6211\u81EA\u5DF1\u53BB\u56FE\u4E66\u9986 \u4E0D\u7528\u548C\u8C01\u7EA6\u5B9A\u65F6\u95F4\u4E00\u8D77\u8D70 \u4E0D\u7528\u7ED9\u8C01\u5360\u5EA7 \u81EA\u5DF1\u5230\u4E86\u5348\u996D\u665A\u996D\u65F6\u95F4\u5C31\u53BB\u5403 \u5403\u996D\u81EA\u5DF1\u4E00\u5F20\u684C \u5750\u51E0\u7AD9\u516C\u4EA4\u8F66\u53BB\u770B\u573A\u7535\u5F71 \u6CA1\u4EBA\u6253\u6270 \u4F60\u603B\u548C\u81EA\u5DF1\u8BF4\u60C5\u8282</p><p${_scopeId}>23 \u5C81 \u6211\u7406\u89E3\u7684\u5B64\u72EC \u4E09\u5929\u91CC\u5403\u4E86\u4E24\u987F\u996D \u6CA1\u6709\u4E00\u4E2A\u4EBA\u53D1\u73B0</p><p${_scopeId}>24 \u5C81 \u6211\u7406\u89E3\u7684\u5B64\u72EC\u662F \u624B\u673A\u76F8\u518C\u91CC\u5168\u90FD\u662F\u98CE\u666F</p><p${_scopeId}>25 \u5C81 \u6BCF\u4E2A\u8DEF\u9014\u6211\u90FD\u60F3\u5230\u4E86\u4E00\u53E5\u8BDD \u5982\u679C\u4F60\u5728\u5C31\u597D\u4E86</p><p${_scopeId}>26 \u5C81 \u597D\u597D\u751F\u6D3B \u6162\u6162\u76F8\u9047 May you have the courage to move forward an inch and have the ease to retreat a foot.</p><p${_scopeId}>27 \u5C81 \u77E5\u8DB3\u4E14\u4E0A\u8FDB \u6E29\u67D4\u800C\u575A\u5B9A</p><p${_scopeId}>28 \u5C81 \u751F\u800C\u65E0\u754F \u7231\u800C\u81EA\u7531</p><p${_scopeId}>The life is only about discovering what is unknow is this world it\u2019s also about discovering youself to understand who you are !</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("p", null, "\u751F\u547D\u89C1\u8BC1\u8FC7\u591A\u5C11\u7684\u771F\u5B9E\uFF0C\u4ED8\u51FA\u8FC7\u600E\u6837\u7684\u52AA\u529B\uFF0C\u6211\u5E0C\u671B\u5C31\u4F1A\u6709\u600E\u4E48\u7684\u5E95\u6C14\u3002"),
                vue.createVNode("p", null, "17 \u5C81 \u6211\u6700\u6DF1\u5904\u7684\u5B64\u72EC\u5C31\u662F \u6211\u4E0D\u633D\u7559 \u800C\u4ED6\u4EEC\u4E5F\u6CA1\u518D\u56DE\u6765"),
                vue.createVNode("p", null, "18 \u5C81 \u8FD8\u6709\u51E0\u5929\u9AD8\u8003 \u5750\u5728\u684C\u524D\u4ECE\u4E00\u4E2A\u51CC\u6668\u5230\u53E6\u4E00\u4E2A\u51CC\u6668 \u611F\u89C9\u8D77\u8EAB\u5012\u676F\u6C34\u7684\u65F6\u95F4\u90FD\u662F\u5962\u4F88 \u5373\u4F7F\u8FD9\u6837 \u8FD8\u662F\u4EC0\u4E48\u90FD\u4E0D\u4F1A \u4E00\u584C\u7CCA\u6D82"),
                vue.createVNode("p", null, "19 \u5C81 \u60F3\u627E\u4EBA\u966A\u65F6 \u53D1\u73B0\u901A\u8BAF\u5F55\u91CC \u6CA1\u6709\u53EF\u4EE5\u968F\u53EB\u968F\u5230\u7684\u4EBA"),
                vue.createVNode("p", null, "20 \u5C81 \u6211\u6240\u7406\u89E3\u7684\u5B64\u72EC\u662F \u4F60\u4E0D\u5408\u7FA4\u662F\u8868\u9762\u7684\u5B64\u72EC \u53EF\u662F\u4F60\u5408\u7FA4\u4E86\u662F\u5185\u5FC3\u7684\u5B64\u72EC"),
                vue.createVNode("p", null, "21 \u5C81 \u5B64\u72EC\u662F\u80CC\u4E86\u5927\u534A\u5929\u7684\u5355\u8BCD \u5374\u53EA\u8BB0\u5F97\u4E00\u4E2A abandon"),
                vue.createVNode("p", null, "22 \u5C81 \u6211\u81EA\u5DF1\u53BB\u56FE\u4E66\u9986 \u4E0D\u7528\u548C\u8C01\u7EA6\u5B9A\u65F6\u95F4\u4E00\u8D77\u8D70 \u4E0D\u7528\u7ED9\u8C01\u5360\u5EA7 \u81EA\u5DF1\u5230\u4E86\u5348\u996D\u665A\u996D\u65F6\u95F4\u5C31\u53BB\u5403 \u5403\u996D\u81EA\u5DF1\u4E00\u5F20\u684C \u5750\u51E0\u7AD9\u516C\u4EA4\u8F66\u53BB\u770B\u573A\u7535\u5F71 \u6CA1\u4EBA\u6253\u6270 \u4F60\u603B\u548C\u81EA\u5DF1\u8BF4\u60C5\u8282"),
                vue.createVNode("p", null, "23 \u5C81 \u6211\u7406\u89E3\u7684\u5B64\u72EC \u4E09\u5929\u91CC\u5403\u4E86\u4E24\u987F\u996D \u6CA1\u6709\u4E00\u4E2A\u4EBA\u53D1\u73B0"),
                vue.createVNode("p", null, "24 \u5C81 \u6211\u7406\u89E3\u7684\u5B64\u72EC\u662F \u624B\u673A\u76F8\u518C\u91CC\u5168\u90FD\u662F\u98CE\u666F"),
                vue.createVNode("p", null, "25 \u5C81 \u6BCF\u4E2A\u8DEF\u9014\u6211\u90FD\u60F3\u5230\u4E86\u4E00\u53E5\u8BDD \u5982\u679C\u4F60\u5728\u5C31\u597D\u4E86"),
                vue.createVNode("p", null, "26 \u5C81 \u597D\u597D\u751F\u6D3B \u6162\u6162\u76F8\u9047 May you have the courage to move forward an inch and have the ease to retreat a foot."),
                vue.createVNode("p", null, "27 \u5C81 \u77E5\u8DB3\u4E14\u4E0A\u8FDB \u6E29\u67D4\u800C\u575A\u5B9A"),
                vue.createVNode("p", null, "28 \u5C81 \u751F\u800C\u65E0\u754F \u7231\u800C\u81EA\u7531"),
                vue.createVNode("p", null, "The life is only about discovering what is unknow is this world it\u2019s also about discovering youself to understand who you are !")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/store-the-sunshine-and-there-will-be-a-faraway-place-zh.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var storeTheSunshineAndThereWillBeAFarawayPlaceZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  name: "tailwindcss-ui-zh",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "TailWindCss & TailWind UI", "date": "2022-04-02T16:00:00.000Z", "draft": false, "lang": "zh", "duration": "Read \xB7 4min", "description": "TailWind CSS & TailWind UI\u3002", "meta": [{ "property": "og:title", "content": "TailWindCss & TailWind UI" }, { "property": "og:description", "content": "TailWind CSS & TailWind UI\u3002" }, { "name": "description", "content": "TailWind CSS & TailWind UI\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "TailWindCss & TailWind UI", "meta": [{ "property": "og:title", "content": "TailWindCss & TailWind UI" }, { "property": "og:description", "content": "TailWind CSS & TailWind UI\u3002" }, { "name": "description", "content": "TailWind CSS & TailWind UI\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 id="tailwindcss" tabindex="-1"${_scopeId}>TailWindCss <a class="header-anchor" href="#tailwindcss" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>Rapidly build modern websites without ever leaving your HTML.</p><p${_scopeId}>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p><p${_scopeId}><a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener"${_scopeId}>TailWindCss Documentation</a></p><blockquote${_scopeId}><p${_scopeId}>\u8BE6\u7EC6\u98DF\u7528\u65B9\u6CD5\u8BF7\u770B\u5B98\u7F51 \u2026</p></blockquote><h2 id="tailwind-ui" tabindex="-1"${_scopeId}>TailWind UI <a class="header-anchor" href="#tailwind-ui" aria-hidden="true"${_scopeId}>#</a></h2><p${_scopeId}>BY THE MAKERS OF TAILWIND CSS Beautiful UI components, crafted with Tailwind CSS Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart\u2019s content. Get started by checking out our free preview components, or browsing all of the examples in the categories you\u2019re most curious about.</p><p${_scopeId}><a href="https://tailwindui.com/documentation" target="_blank" rel="noopener"${_scopeId}>TailWind UI Documentation</a></p><p${_scopeId}>Vue \u7684 TailWind UI \u4F9D\u8D56\u4E8E <a href="https://headlessui.dev/" target="_blank" rel="noopener"${_scopeId}>Headless UI</a> \u6765\u652F\u6301\u6240\u6709\u7684\u4EA4\u4E92\u884C\u4E3A\u548C <a href="https://heroicons.com/" target="_blank" rel="noopener"${_scopeId}>Heroicons</a> \u56FE\u6807</p><pre class="language-shell"${_scopeId}><code class="language-shell"${_scopeId}><span class="token function"${_scopeId}>npm</span> <span class="token function"${_scopeId}>install</span> @headlessui/vue @heroicons/vue
</code></pre><h2 id="resources-assets" tabindex="-1"${_scopeId}>Resources &amp; assets <a class="header-anchor" href="#resources-assets" aria-hidden="true"${_scopeId}>#</a></h2><h4 id="\u56FE\u6807" tabindex="-1"${_scopeId}>\u56FE\u6807 <a class="header-anchor" href="#\u56FE\u6807" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u5728 Tailwind UI \u4E2D\u4F7F\u7528\u7684\u6240\u6709\u56FE\u6807\u90FD\u6765\u81EA Heroicons\uFF0C\u8FD9\u662F\u6211\u4EEC\u5728\u5F00\u59CB\u4F7F\u7528 Tailwind UI \u65F6\u81EA\u884C\u8BBE\u8BA1\u548C\u5F00\u53D1\u7684\u514D\u8D39 MIT \u8BB8\u53EF\u56FE\u6807\u96C6\u3002</p><h4 id="\u56FE\u7247" tabindex="-1"${_scopeId}>\u56FE\u7247 <a class="header-anchor" href="#\u56FE\u7247" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>Tailwind UI \u4E2D\u7684\u56FE\u50CF\u51E0\u4E4E\u5B8C\u5168\u6765\u81EA Unsplash\u3002\u5982\u679C\u60A8\u7684\u9879\u76EE\u9700\u8981\u53EF\u514D\u8D39\u4F7F\u7528\u7684\u6444\u5F71\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u8D44\u6E90\u3002</p><h4 id="\u63D2\u56FE" tabindex="-1"${_scopeId}>\u63D2\u56FE <a class="header-anchor" href="#\u63D2\u56FE" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>Tailwind UI \u4E2D\u7684\u4E00\u4E9B\u793A\u4F8B\u4F7F\u7528 Pixsellz \u63D0\u4F9B\u7684\u514D\u8D39 Lucid \u63D2\u56FE\u5305\u4E2D\u7684\u63D2\u56FE\u3002\u60A8\u53EF\u4EE5\u5728\u4ED6\u4EEC\u7684\u7F51\u7AD9\u4E0A\u83B7\u53D6\u5168\u5957\u63D2\u56FE\u5E76\u67E5\u770B\u4ED6\u4EEC\u7684\u5176\u4ED6\u8BBE\u8BA1\u8D44\u6E90\u3002</p><h2 id="tailwind-ui-components" tabindex="-1"${_scopeId}>TailWind UI Components <a class="header-anchor" href="#tailwind-ui-components" aria-hidden="true"${_scopeId}>#</a></h2><h3 id="marketing" tabindex="-1"${_scopeId}>Marketing <a class="header-anchor" href="#marketing" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites.</p><h3 id="application-ui" tabindex="-1"${_scopeId}>Application UI <a class="header-anchor" href="#application-ui" aria-hidden="true"${_scopeId}>#</a></h3><p${_scopeId}>Form layouts, tables, modal windows \u2014 everything you need to build beautiful responsive web applications.</p><h3 id="ecommerce" tabindex="-1"${_scopeId}>Ecommerce <a class="header-anchor" href="#ecommerce" aria-hidden="true"${_scopeId}>#</a></h3><h4 id="_500-examples" tabindex="-1"${_scopeId}>500+ Examples <a class="header-anchor" href="#_500-examples" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u8BBE\u8BA1\u7CBE\u7F8E\u3001\u5236\u4F5C\u7CBE\u826F\u7684\u7EC4\u4EF6\u9075\u5FAA\u6240\u6709\u53EF\u8BBF\u95EE\u6027\u6700\u4F73\u5B9E\u8DF5\u5E76\u4E14\u6613\u4E8E\u5B9A\u5236\u3002</p><h4 id="react-vue-and-html" tabindex="-1"${_scopeId}>React, Vue, and HTML <a class="header-anchor" href="#react-vue-and-html" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u7531 Headless UI \u63D0\u4F9B\u652F\u6301\u7684 React \u548C Vue \u7684\u53EF\u8BBF\u95EE\u3001\u4EA4\u4E92\u5F0F\u793A\u4F8B\uFF0C\u5982\u679C\u60A8\u613F\u610F\u81EA\u5DF1\u7F16\u5199\u4EFB\u4F55\u5FC5\u8981\u7684 JS\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A vanilla HTML\u3002</p><h4 id="fully-responsive" tabindex="-1"${_scopeId}>Fully Responsive <a class="header-anchor" href="#fully-responsive" aria-hidden="true"${_scopeId}>#</a></h4><p${_scopeId}>\u6BCF\u4E2A\u793A\u4F8B\u90FD\u662F\u5B8C\u5168\u54CD\u5E94\u7684\uFF0C\u5E76\u4E14\u7ECF\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u548C\u5B9E\u65BD\uFF0C\u5728\u4EFB\u4F55\u5C4F\u5E55\u5C3A\u5BF8\u4E0B\u770B\u8D77\u6765\u90FD\u5F88\u68D2\u3002</p><h3 id="application-ui-stats-components-example" tabindex="-1"${_scopeId}>Application UI -&gt; Stats Components Example <a class="header-anchor" href="#application-ui-stats-components-example" aria-hidden="true"${_scopeId}>#</a></h3><pre class="language-html"${_scopeId}><code class="language-html"${_scopeId}><span class="token comment"${_scopeId}>&lt;!-- This example requires Tailwind CSS v2.0+ --&gt;</span>
<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>template</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
  <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>div</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
    <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>h3</span> <span class="token attr-name"${_scopeId}>class</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>text-lg leading-6 font-medium text-gray-900<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>Last 30 days<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>h3</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
    <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>dl</span> <span class="token attr-name"${_scopeId}>class</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>
      <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>div</span> <span class="token attr-name"${_scopeId}>v-for</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>item in stats<span class="token punctuation"${_scopeId}>&quot;</span></span> <span class="token attr-name"${_scopeId}>:key</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>item.name<span class="token punctuation"${_scopeId}>&quot;</span></span> 
      <span class="token attr-name"${_scopeId}>class</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>
        <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>dt</span> <span class="token attr-name"${_scopeId}>class</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>text-sm font-medium text-gray-500 truncate<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>
          {{ item.name }}
        <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>dt</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
        <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>dd</span> <span class="token attr-name"${_scopeId}>class</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>mt-1 text-3xl font-semibold text-gray-900<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>
          {{ item.stat }}
        <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>dd</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
      <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>div</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
    <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>dl</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
  <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>div</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>template</span><span class="token punctuation"${_scopeId}>&gt;</span></span>

<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>script</span><span class="token punctuation"${_scopeId}>&gt;</span></span><span class="token script"${_scopeId}><span class="token language-javascript"${_scopeId}>
<span class="token keyword"${_scopeId}>const</span> stats <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>[</span>
  <span class="token punctuation"${_scopeId}>{</span> <span class="token literal-property property"${_scopeId}>name</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;Total Subscribers&#39;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token literal-property property"${_scopeId}>stat</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;71,897&#39;</span> <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
  <span class="token punctuation"${_scopeId}>{</span> <span class="token literal-property property"${_scopeId}>name</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;Avg. Open Rate&#39;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token literal-property property"${_scopeId}>stat</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;58.16%&#39;</span> <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
  <span class="token punctuation"${_scopeId}>{</span> <span class="token literal-property property"${_scopeId}>name</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;Avg. Click Rate&#39;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token literal-property property"${_scopeId}>stat</span><span class="token operator"${_scopeId}>:</span> <span class="token string"${_scopeId}>&#39;24.57%&#39;</span> <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
<span class="token punctuation"${_scopeId}>]</span>

<span class="token keyword"${_scopeId}>export</span> <span class="token keyword"${_scopeId}>default</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token function"${_scopeId}>setup</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
    <span class="token keyword"${_scopeId}>return</span> <span class="token punctuation"${_scopeId}>{</span>
      stats<span class="token punctuation"${_scopeId}>,</span>
    <span class="token punctuation"${_scopeId}>}</span>
  <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
<span class="token punctuation"${_scopeId}>}</span>
</span></span><span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>script</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("h2", {
                  id: "tailwindcss",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("TailWindCss "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tailwindcss",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Rapidly build modern websites without ever leaving your HTML."),
                vue.createVNode("p", null, "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."),
                vue.createVNode("p", null, [
                  vue.createVNode("a", {
                    href: "https://tailwindcss.com/docs/installation",
                    target: "_blank",
                    rel: "noopener"
                  }, "TailWindCss Documentation")
                ]),
                vue.createVNode("blockquote", null, [
                  vue.createVNode("p", null, "\u8BE6\u7EC6\u98DF\u7528\u65B9\u6CD5\u8BF7\u770B\u5B98\u7F51 \u2026")
                ]),
                vue.createVNode("h2", {
                  id: "tailwind-ui",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("TailWind UI "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tailwind-ui",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "BY THE MAKERS OF TAILWIND CSS Beautiful UI components, crafted with Tailwind CSS Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart\u2019s content. Get started by checking out our free preview components, or browsing all of the examples in the categories you\u2019re most curious about."),
                vue.createVNode("p", null, [
                  vue.createVNode("a", {
                    href: "https://tailwindui.com/documentation",
                    target: "_blank",
                    rel: "noopener"
                  }, "TailWind UI Documentation")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Vue \u7684 TailWind UI \u4F9D\u8D56\u4E8E "),
                  vue.createVNode("a", {
                    href: "https://headlessui.dev/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Headless UI"),
                  vue.createTextVNode(" \u6765\u652F\u6301\u6240\u6709\u7684\u4EA4\u4E92\u884C\u4E3A\u548C "),
                  vue.createVNode("a", {
                    href: "https://heroicons.com/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Heroicons"),
                  vue.createTextVNode(" \u56FE\u6807")
                ]),
                vue.createVNode("pre", { class: "language-shell" }, [
                  vue.createVNode("code", { class: "language-shell" }, [
                    vue.createVNode("span", { class: "token function" }, "npm"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "install"),
                    vue.createTextVNode(" @headlessui/vue @heroicons/vue\n")
                  ])
                ]),
                vue.createVNode("h2", {
                  id: "resources-assets",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Resources & assets "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#resources-assets",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("h4", {
                  id: "\u56FE\u6807",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u56FE\u6807 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u56FE\u6807",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u5728 Tailwind UI \u4E2D\u4F7F\u7528\u7684\u6240\u6709\u56FE\u6807\u90FD\u6765\u81EA Heroicons\uFF0C\u8FD9\u662F\u6211\u4EEC\u5728\u5F00\u59CB\u4F7F\u7528 Tailwind UI \u65F6\u81EA\u884C\u8BBE\u8BA1\u548C\u5F00\u53D1\u7684\u514D\u8D39 MIT \u8BB8\u53EF\u56FE\u6807\u96C6\u3002"),
                vue.createVNode("h4", {
                  id: "\u56FE\u7247",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u56FE\u7247 "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u56FE\u7247",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Tailwind UI \u4E2D\u7684\u56FE\u50CF\u51E0\u4E4E\u5B8C\u5168\u6765\u81EA Unsplash\u3002\u5982\u679C\u60A8\u7684\u9879\u76EE\u9700\u8981\u53EF\u514D\u8D39\u4F7F\u7528\u7684\u6444\u5F71\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u8D44\u6E90\u3002"),
                vue.createVNode("h4", {
                  id: "\u63D2\u56FE",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("\u63D2\u56FE "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#\u63D2\u56FE",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Tailwind UI \u4E2D\u7684\u4E00\u4E9B\u793A\u4F8B\u4F7F\u7528 Pixsellz \u63D0\u4F9B\u7684\u514D\u8D39 Lucid \u63D2\u56FE\u5305\u4E2D\u7684\u63D2\u56FE\u3002\u60A8\u53EF\u4EE5\u5728\u4ED6\u4EEC\u7684\u7F51\u7AD9\u4E0A\u83B7\u53D6\u5168\u5957\u63D2\u56FE\u5E76\u67E5\u770B\u4ED6\u4EEC\u7684\u5176\u4ED6\u8BBE\u8BA1\u8D44\u6E90\u3002"),
                vue.createVNode("h2", {
                  id: "tailwind-ui-components",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("TailWind UI Components "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#tailwind-ui-components",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("h3", {
                  id: "marketing",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Marketing "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#marketing",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Landing page heroes, feature sections, newsletter sign up forms \u2014 everything you need to build beautiful marketing websites."),
                vue.createVNode("h3", {
                  id: "application-ui",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Application UI "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#application-ui",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "Form layouts, tables, modal windows \u2014 everything you need to build beautiful responsive web applications."),
                vue.createVNode("h3", {
                  id: "ecommerce",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Ecommerce "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#ecommerce",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("h4", {
                  id: "_500-examples",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("500+ Examples "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#_500-examples",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u8BBE\u8BA1\u7CBE\u7F8E\u3001\u5236\u4F5C\u7CBE\u826F\u7684\u7EC4\u4EF6\u9075\u5FAA\u6240\u6709\u53EF\u8BBF\u95EE\u6027\u6700\u4F73\u5B9E\u8DF5\u5E76\u4E14\u6613\u4E8E\u5B9A\u5236\u3002"),
                vue.createVNode("h4", {
                  id: "react-vue-and-html",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("React, Vue, and HTML "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#react-vue-and-html",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u7531 Headless UI \u63D0\u4F9B\u652F\u6301\u7684 React \u548C Vue \u7684\u53EF\u8BBF\u95EE\u3001\u4EA4\u4E92\u5F0F\u793A\u4F8B\uFF0C\u5982\u679C\u60A8\u613F\u610F\u81EA\u5DF1\u7F16\u5199\u4EFB\u4F55\u5FC5\u8981\u7684 JS\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A vanilla HTML\u3002"),
                vue.createVNode("h4", {
                  id: "fully-responsive",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Fully Responsive "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#fully-responsive",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("p", null, "\u6BCF\u4E2A\u793A\u4F8B\u90FD\u662F\u5B8C\u5168\u54CD\u5E94\u7684\uFF0C\u5E76\u4E14\u7ECF\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u548C\u5B9E\u65BD\uFF0C\u5728\u4EFB\u4F55\u5C4F\u5E55\u5C3A\u5BF8\u4E0B\u770B\u8D77\u6765\u90FD\u5F88\u68D2\u3002"),
                vue.createVNode("h3", {
                  id: "application-ui-stats-components-example",
                  tabindex: "-1"
                }, [
                  vue.createTextVNode("Application UI -> Stats Components Example "),
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#application-ui-stats-components-example",
                    "aria-hidden": "true"
                  }, "#")
                ]),
                vue.createVNode("pre", { class: "language-html" }, [
                  vue.createVNode("code", { class: "language-html" }, [
                    vue.createVNode("span", { class: "token comment" }, "<!-- This example requires Tailwind CSS v2.0+ -->"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("h3")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("text-lg leading-6 font-medium text-gray-900"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("Last 30 days"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("h3")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("dl")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "v-for"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("item in stats"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, ":key"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("item.name"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createTextVNode(" \n      "),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("dt")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("text-sm font-medium text-gray-500 truncate"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n          {{ item.name }}\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("dt")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("dd")
                      ]),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token attr-name" }, "class"),
                      vue.createVNode("span", { class: "token attr-value" }, [
                        vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                        vue.createVNode("span", { class: "token punctuation" }, '"'),
                        vue.createTextVNode("mt-1 text-3xl font-semibold text-gray-900"),
                        vue.createVNode("span", { class: "token punctuation" }, '"')
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n          {{ item.stat }}\n        "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("dd")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n      "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("dl")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("div")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("template")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "<"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createVNode("span", { class: "token script" }, [
                      vue.createVNode("span", { class: "token language-javascript" }, [
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token keyword" }, "const"),
                        vue.createTextVNode(" stats "),
                        vue.createVNode("span", { class: "token operator" }, "="),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "["),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "name"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'Total Subscribers'"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "stat"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'71,897'"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "name"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'Avg. Open Rate'"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "stat"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'58.16%'"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "name"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'Avg. Click Rate'"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token literal-property property" }, "stat"),
                        vue.createVNode("span", { class: "token operator" }, ":"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token string" }, "'24.57%'"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, "]"),
                        vue.createTextVNode("\n\n"),
                        vue.createVNode("span", { class: "token keyword" }, "export"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token keyword" }, "default"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token function" }, "setup"),
                        vue.createVNode("span", { class: "token punctuation" }, "("),
                        vue.createVNode("span", { class: "token punctuation" }, ")"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token keyword" }, "return"),
                        vue.createTextVNode(),
                        vue.createVNode("span", { class: "token punctuation" }, "{"),
                        vue.createTextVNode("\n      stats"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n    "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createTextVNode("\n  "),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createVNode("span", { class: "token punctuation" }, ","),
                        vue.createTextVNode("\n"),
                        vue.createVNode("span", { class: "token punctuation" }, "}"),
                        vue.createTextVNode("\n")
                      ])
                    ]),
                    vue.createVNode("span", { class: "token tag" }, [
                      vue.createVNode("span", { class: "token tag" }, [
                        vue.createVNode("span", { class: "token punctuation" }, "</"),
                        vue.createTextVNode("script")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ">")
                    ]),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/tailwindcss-ui-zh.md");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var tailwindcssUiZh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  name: "traceroute",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Traceroute", "date": "2017-03-29T09:00:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 1min", "description": "Traceroute\u3002", "meta": [{ "property": "og:title", "content": "Traceroute" }, { "property": "og:description", "content": "Traceroute\u3002" }, { "name": "description", "content": "Traceroute\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Traceroute", "meta": [{ "property": "og:title", "content": "Traceroute" }, { "property": "og:description", "content": "Traceroute\u3002" }, { "name": "description", "content": "Traceroute\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># MAC</span>
<span class="token function"${_scopeId}>traceroute</span> weibo.com
<span class="token comment"${_scopeId}># Windows</span>
tracert weibo.com
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# MAC"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "traceroute"),
                    vue.createTextVNode(" weibo.com\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Windows"),
                    vue.createTextVNode("\ntracert weibo.com\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/traceroute.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var traceroute = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  name: "zshrc-alias",
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "Zshrc Alias", "date": "2022-05-29T15:41:00.000Z", "draft": false, "lang": "en", "type": "notes", "duration": "Read \xB7 3min", "description": "Zshrc Alias\u3002", "meta": [{ "property": "og:title", "content": "Zshrc Alias" }, { "property": "og:description", "content": "Zshrc Alias\u3002" }, { "name": "description", "content": "Zshrc Alias\u3002" }] };
    expose({ frontmatter });
    const head$1 = { "title": "Zshrc Alias", "meta": [{ "property": "og:title", "content": "Zshrc Alias" }, { "property": "og:description", "content": "Zshrc Alias\u3002" }, { "name": "description", "content": "Zshrc Alias\u3002" }] };
    head.useHead(head$1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = _sfc_main$K;
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Firefly = __unplugin_components_1$1;
      _push(serverRenderer.ssrRenderComponent(_component_post, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="prose m-auto"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(_component_Firefly, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(_component_Firefly)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<pre class="language-bash"${_scopeId}><code class="language-bash"${_scopeId}><span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token comment"${_scopeId}># Proxy Aliases</span>
<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>proxy</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>unproxy</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;unset all_proxy http_proxy https_proxy HTTP_PROXY HTTPS_PROXY&#39;</span>

<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token comment"${_scopeId}># Git Aliases</span>
<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>

<span class="token comment"${_scopeId}># Go To Project Root</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grt</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;cd &quot;$(git rev-parse --show-toplevel)&quot;&#39;</span>

<span class="token comment"${_scopeId}># Git Commit</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gs</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git status&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gp</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git push -u origin master&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gpf</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git push --force&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gpft</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git push --follow-tags&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gpl</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git pull --rebase&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gcl</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git clone&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gst</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git stash&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grm</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git rm&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gmv</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git mv&#39;</span>

<span class="token comment"${_scopeId}># Git Branch</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>master</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git checkout master&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>main</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git checkout main&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>develop</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git checkout develop&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gco</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git checkout&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gcob</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git checkout -b&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grb</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git rebase&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grbomerge</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git rebase origin/master&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grbc</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git rebase --continue&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gl</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git log&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>glo</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git log --oneline --graph --decorate --all&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grh</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git reset HEAD&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>ga</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git add&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gA</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git add -A&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gc</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git commit&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gcm</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git commit -m&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gca</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git commit -a&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gcam</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git add -A &amp;&amp; git commit -m&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gfrb</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git fetch origin &amp;&amp; git rebase origin/master&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grao</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git remote add origin&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gxn</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git clean -dn&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gx</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git clean -df&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gsha</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git rev-parse HEAD | pbcopy&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>ghci</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;gh run list -L 1&#39;</span>

<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>gfa</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git fetch --all&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>grhom</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;git reset --hard origin/master&#39;</span>

<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token comment"${_scopeId}># Directories</span>
<span class="token comment"${_scopeId}># Iput</span>
<span class="token comment"${_scopeId}># \`~/Desktop/Projects/\` for my projects</span>
<span class="token comment"${_scopeId}># \`~/Desktop/Projects/Documents/\` for my documents</span>
<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token keyword"${_scopeId}>function</span> <span class="token function-name function"${_scopeId}>P</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token builtin class-name"${_scopeId}>cd</span> ~/Desktop/Projects/<span class="token variable"${_scopeId}>$1</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token keyword"${_scopeId}>function</span> <span class="token function-name function"${_scopeId}>D</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token builtin class-name"${_scopeId}>cd</span> ~/Desktop/Projects/Documents/<span class="token variable"${_scopeId}>$1</span>
<span class="token punctuation"${_scopeId}>}</span>

<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token comment"${_scopeId}># Node Package Manager</span>
<span class="token comment"${_scopeId}># https://github.com/antfu/ni</span>
<span class="token comment"${_scopeId}># --------------------------------------------------------- #</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>nio</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;ni --prefer-offline&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>s</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr start&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>d</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr dev&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>b</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr build&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>bw</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr build --watch&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>t</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr test&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>tu</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr test -u&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>tw</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr test --watch&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>w</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr watch&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>p</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr play&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>c</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr typecheck&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>lint</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr lint&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>lintf</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;nr lint --fix&#39;</span>
<span class="token builtin class-name"${_scopeId}>alias</span> <span class="token assign-left variable"${_scopeId}>release</span><span class="token operator"${_scopeId}>=</span><span class="token string"${_scopeId}>&#39;proxy; nr release&#39;</span>
</code></pre></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "prose m-auto" }, [
                vue.createVNode(_component_ClientOnly, null, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_Firefly)
                  ]),
                  _: 1
                }),
                vue.createVNode("pre", { class: "language-bash" }, [
                  vue.createVNode("code", { class: "language-bash" }, [
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Proxy Aliases"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "proxy"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "unproxy"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'unset all_proxy http_proxy https_proxy HTTP_PROXY HTTPS_PROXY'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Git Aliases"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Go To Project Root"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grt"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, `'cd "$(git rev-parse --show-toplevel)"'`),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Git Commit"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gs"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git status'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gp"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git push -u origin master'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gpf"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git push --force'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gpft"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git push --follow-tags'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gpl"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git pull --rebase'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gcl"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git clone'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gst"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git stash'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grm"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git rm'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gmv"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git mv'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Git Branch"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "master"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git checkout master'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "main"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git checkout main'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "develop"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git checkout develop'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gco"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git checkout'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gcob"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git checkout -b'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grb"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git rebase'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grbomerge"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git rebase origin/master'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grbc"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git rebase --continue'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gl"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git log'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "glo"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git log --oneline --graph --decorate --all'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grh"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git reset HEAD'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "ga"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git add'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gA"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git add -A'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gc"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git commit'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gcm"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git commit -m'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gca"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git commit -a'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gcam"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git add -A && git commit -m'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gfrb"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git fetch origin && git rebase origin/master'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grao"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git remote add origin'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gxn"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git clean -dn'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gx"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git clean -df'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gsha"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git rev-parse HEAD | pbcopy'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "ghci"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'gh run list -L 1'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "gfa"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git fetch --all'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "grhom"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'git reset --hard origin/master'"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Directories"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Iput"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# `~/Desktop/Projects/` for my projects"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# `~/Desktop/Projects/Documents/` for my documents"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-name function" }, "P"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "cd"),
                    vue.createTextVNode(" ~/Desktop/Projects/"),
                    vue.createVNode("span", { class: "token variable" }, "$1"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token keyword" }, "function"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function-name function" }, "D"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token builtin class-name" }, "cd"),
                    vue.createTextVNode(" ~/Desktop/Projects/Documents/"),
                    vue.createVNode("span", { class: "token variable" }, "$1"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# Node Package Manager"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# https://github.com/antfu/ni"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token comment" }, "# --------------------------------------------------------- #"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "nio"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'ni --prefer-offline'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "s"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr start'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "d"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr dev'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "b"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr build'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "bw"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr build --watch'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "t"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr test'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "tu"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr test -u'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "tw"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr test --watch'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "w"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr watch'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "p"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr play'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "c"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr typecheck'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "lint"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr lint'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "lintf"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'nr lint --fix'"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token builtin class-name" }, "alias"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token assign-left variable" }, "release"),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createVNode("span", { class: "token string" }, "'proxy; nr release'"),
                    vue.createTextVNode("\n")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Pages/posts/zshrc-alias.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var zshrcAlias = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
exports.createApp = createApp;
