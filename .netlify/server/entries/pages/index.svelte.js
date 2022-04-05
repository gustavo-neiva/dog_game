var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_95cee8a2 = require("../../chunks/index-95cee8a2.js");
function exclude(obj, exclude2) {
  Object.keys(obj).filter((key) => exclude2.includes(key)).forEach((key) => delete obj[key]);
  return obj;
}
const Inline_svg = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_95cee8a2.a)();
  let { src } = $$props;
  let { transformSrc = (svg) => svg } = $$props;
  let svgAttrs = {};
  let svgContent;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.transformSrc === void 0 && $$bindings.transformSrc && transformSrc !== void 0)
    $$bindings.transformSrc(transformSrc);
  return `<svg${(0, import_index_95cee8a2.b)([
    { xmlns: "http://www.w3.org/2000/svg" },
    (0, import_index_95cee8a2.d)(svgAttrs),
    (0, import_index_95cee8a2.d)(exclude($$props, ["src", "transformSrc"])),
    { contenteditable: "true" }
  ])}>${(($$value) => $$value === void 0 ? `` : $$value)(svgContent)}</svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-zxmr93{display:flex;flex-direction:row}h1.svelte-zxmr93{font-size:6rem;text-align:center;-webkit-text-stroke-color:black;-webkit-text-stroke-width:1px}.left.svelte-zxmr93{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.right.svelte-zxmr93{width:70%;background-image:linear-gradient(\n				rgba(0, 0, 0, 0.1),\n				rgba(0, 0, 0, 0.1)\n			),\n			url('./dogs.jpeg');min-height:100vh}.icon.svelte-zxmr93{margin-top:12rem;min-width:25vh;min-height:25vh;cursor:pointer;transition:all .2s\n	}.icon.svelte-zxmr93:hover{transform:scale(1.03)\n		}.icon.svelte-zxmr93:hover::after{position:absolute;bottom:0;left:50%;content:'Play';font-size:4.8rem;transform:translate(-50%, 100%);color:#F0582F;font-weight:bold}.icon.svelte-zxmr93:active{transform:translateY(-1px)}",
  map: null
};
const Routes = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Guess the breed</title>`, ""}`, ""}

<main class="${"svelte-zxmr93"}"><div class="${"left svelte-zxmr93"}"><h1 class="${"svelte-zxmr93"}">Guess the breed</h1>
		<div class="${"icon svelte-zxmr93"}">${(0, import_index_95cee8a2.v)(Inline_svg, "InlineSVG").$$render($$result, { src: "./icon.svg" }, {}, {})}</div></div>
	<div class="${"right svelte-zxmr93"}"></div></main>`;
});
module.exports = __toCommonJS(stdin_exports);
