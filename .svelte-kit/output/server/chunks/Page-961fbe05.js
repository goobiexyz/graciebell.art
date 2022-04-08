import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index-bbc75d3b.js";
var styles = "";
var Section_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@keyframes svelte-lh0c0y-scroll{100%{background-position-x:-60px}}@keyframes svelte-lh0c0y-bouncy{50%{background-position-y:-80px}}section.svelte-lh0c0y.svelte-lh0c0y{overflow:auto;padding:calc(1.5rem * 4) 0}section.simple.svelte-lh0c0y.svelte-lh0c0y{padding:calc(1.5rem * 2) 0}section.bg-blue-stripes.svelte-lh0c0y.svelte-lh0c0y{background:url("/images/backgrounds/blue_stripes.png") repeat;background-attachment:fixed;animation:1s svelte-lh0c0y-scroll infinite linear}section.bg-gracie.svelte-lh0c0y.svelte-lh0c0y{background:url("/images/backgrounds/gracie-pattern.png");background-attachment:fixed;animation:2s svelte-lh0c0y-scroll infinite linear, 5s svelte-lh0c0y-bouncy infinite ease-in-out}section.top-border-clouds.svelte-lh0c0y.svelte-lh0c0y{border-image-source:url("/images/borders/clouds.svg");border-top:3rem solid;border-image-slice:100% 0 0 0;border-image-repeat:repeat;border-image-outset:2px}.section-heading.svelte-lh0c0y.svelte-lh0c0y{font-size:2.5rem;font-weight:normal;font-family:"freude";text-align:center;display:table;width:100%}.section-heading.blue.svelte-lh0c0y.svelte-lh0c0y{color:var(--dark-blue)}.section-heading.white.svelte-lh0c0y.svelte-lh0c0y{color:white}.section-heading.svelte-lh0c0y>span.svelte-lh0c0y,.section-heading.svelte-lh0c0y.svelte-lh0c0y:before,.section-heading.svelte-lh0c0y.svelte-lh0c0y:after{display:table-cell}.section-heading.blue.svelte-lh0c0y.svelte-lh0c0y:before,.section-heading.blue.svelte-lh0c0y.svelte-lh0c0y:after{background:var(--blue)}.section-heading.white.svelte-lh0c0y.svelte-lh0c0y:before,.section-heading.white.svelte-lh0c0y.svelte-lh0c0y:after{background:white}.section-heading.black.svelte-lh0c0y.svelte-lh0c0y:before,.section-heading.black.svelte-lh0c0y.svelte-lh0c0y:after{background:var(--black)}.section-heading.svelte-lh0c0y.svelte-lh0c0y:before,.section-heading.svelte-lh0c0y.svelte-lh0c0y:after{mask-image:url("/images/borders/blue_dot.svg");mask-size:contain;mask-position:center;mask-size:10px;mask-repeat:space no-repeat;-webkit-mask-image:url("/images/borders/blue_dot.svg");-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-size:10px;-webkit-mask-repeat:repeat no-repeat;width:50%;content:" "}.section-heading.svelte-lh0c0y>span.svelte-lh0c0y{white-space:nowrap;padding:0 9px}.section-contents.svelte-lh0c0y.svelte-lh0c0y{padding:0 1.5rem;margin:auto;width:calc(900px - calc(1.5rem * 2))}section.svelte-lh0c0y .section-body.spacing-normal.svelte-lh0c0y >*{margin-top:1.5rem}section.svelte-lh0c0y .section-body.spacing-double.svelte-lh0c0y >*{margin-top:calc(1.5rem * 2)}section.no-heading.svelte-lh0c0y .section-body.svelte-lh0c0y >*:first-child{margin-top:0}@media only screen and (max-width: 900px){.section-contents.svelte-lh0c0y.svelte-lh0c0y{width:calc(768px - calc(1.5rem * 2))}}@media only screen and (max-width: 768px){section.svelte-lh0c0y.svelte-lh0c0y{padding:calc(1.5rem * 3) 0}.section-contents.svelte-lh0c0y.svelte-lh0c0y{width:calc(600px - calc(1.5rem * 2))}}@media only screen and (max-width: 600px){section.svelte-lh0c0y.svelte-lh0c0y{padding:1.5rem 0}.section-contents.svelte-lh0c0y.svelte-lh0c0y{width:auto}}',
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { heading = "" } = $$props;
  let { bg = "none" } = $$props;
  let { topBorder = "none" } = $$props;
  let { headingColor = "black" } = $$props;
  let { simple = false } = $$props;
  let { spacing = "normal" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.topBorder === void 0 && $$bindings.topBorder && topBorder !== void 0)
    $$bindings.topBorder(topBorder);
  if ($$props.headingColor === void 0 && $$bindings.headingColor && headingColor !== void 0)
    $$bindings.headingColor(headingColor);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  $$result.css.add(css$3);
  return `<section${add_attribute("id", id, 0)} class="${[
    "bg-" + escape(bg) + " top-border-" + escape(topBorder) + " svelte-lh0c0y",
    (simple ? "simple" : "") + " " + (!heading ? "no-heading" : "")
  ].join(" ").trim()}"><div class="${"section-contents svelte-lh0c0y"}">${heading ? `<h2 class="${"section-heading " + escape(headingColor) + " svelte-lh0c0y"}"><span class="${"svelte-lh0c0y"}">${escape(heading)}</span></h2>` : ``}
    <div class="${"section-body spacing-" + escape(spacing) + " svelte-lh0c0y"}">${slots.default ? slots.default({}) : ``}</div></div>
</section>`;
});
var IconButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.svelte-v6rpnu{transition:transform 0.1s;display:block;position:relative;width:2rem;height:2rem;border:none;padding:0;margin:0;mask-size:contain;mask-position:center;mask-repeat:no-repeat;-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat}button.svelte-v6rpnu:hover{transform:scale(1.2)}button.svelte-v6rpnu:active{transform:scale(1)}button.big.svelte-v6rpnu{width:3rem;height:3rem}button.white.svelte-v6rpnu{background:white}button.dark-blue.svelte-v6rpnu{background:var(--dark-blue)}button.logo.svelte-v6rpnu{mask-image:url("/images/icons/b_logo.svg");-webkit-mask-image:url("/images/icons/b_logo.svg")}button.twitter.svelte-v6rpnu{mask-image:url("/images/icons/b_twitter.svg");-webkit-mask-image:url("/images/icons/b_twitter.svg")}button.youtube.svelte-v6rpnu{mask-image:url("/images/icons/b_youtube.svg");-webkit-mask-image:url("/images/icons/b_youtube.svg")}button.soundcloud.svelte-v6rpnu{mask-image:url("/images/icons/b_soundcloud.svg");-webkit-mask-image:url("/images/icons/b_soundcloud.svg")}button.github.svelte-v6rpnu{mask-image:url("/images/icons/b_github.svg");-webkit-mask-image:url("/images/icons/b_github.svg")}button.close.svelte-v6rpnu{mask-image:url("/images/icons/b_close.svg");-webkit-mask-image:url("/images/icons/b_close.svg")}button.right-arrow.svelte-v6rpnu{mask-image:url("/images/icons/b_arrow_r.svg");-webkit-mask-image:url("/images/icons/b_arrow_r.svg")}button.left-arrow.svelte-v6rpnu{mask-image:url("/images/icons/b_arrow_l.svg");-webkit-mask-image:url("/images/icons/b_arrow_l.svg")}button.back-circle.svelte-v6rpnu{background:none;background-image:url("/images/icons/b_back_circle.svg")}',
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size = "" } = $$props;
  let { title } = $$props;
  let { color = "white" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<button class="${escape(type) + " " + escape(size) + " " + escape(color) + " svelte-v6rpnu"}"${add_attribute("title", title, 0)}></button>`;
});
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size } = $$props;
  let title = "";
  let location = "";
  switch (type) {
    case "logo":
      title = "Home";
      location = "/";
      break;
    case "twitter":
      title = "Twitter";
      location = "https://twitter.com/gracieart";
      break;
    case "youtube":
      title = "YouTube";
      location = "https://youtube.com/graciebell";
      break;
    case "soundcloud":
      title = "SoundCloud";
      location = "https://soundcloud.com/gracieart";
      break;
    case "github":
      title = "GitHub";
      location = "https://github.com/gracieart";
      break;
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<a${add_attribute("title", title, 0)}${add_attribute("href", location, 0)}>${validate_component(IconButton, "IconButton").$$render($$result, { type, size }, {}, {})}</a>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1h0oqmj{display:flex;justify-content:center;padding:1.5rem;position:absolute;bottom:0;width:100%;background-color:var(--black)}footer.svelte-1h0oqmj >*{margin:0 calc(1.5rem / 2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1h0oqmj"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "twitter" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "youtube" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "soundcloud" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "github" }, {}, {})}
</footer>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.svelte-7sjkch{background:var(--pink);padding:1.5rem;padding-bottom:calc(1.5rem / 2);border-bottom:5rem solid;border-image:url("/images/borders/benday_pink.svg");border-image-slice:0 0 100% 0;border-image-repeat:repeat;border-image-outset:-2px;background-clip:padding-box}header.svelte-7sjkch >a{position:absolute}h1.svelte-7sjkch{color:white;font-size:2.6rem;text-align:center;font-family:"urbane-bold";font-weight:normal}@media only screen and (max-width: 768px){h1.svelte-7sjkch{font-size:2rem;line-height:1.4}}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-7sjkch"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "logo", size: "big" }, {}, {})}
  <h1 class="${"svelte-7sjkch"}">${slots.default ? slots.default({}) : ``}</h1>
</header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { header = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  return `${$$result.head += `${$$result.title = `<title>${escape(title ? title + " | " : "")}Gracie Bell</title>`, ""}<meta name="${"description"}" content="${"Multimedia artist specializing in graphic design, illustration, coding, video editing, and music composition"}" data-svelte="svelte-1vhvi7o"><meta name="${"author"}" content="${"Gracie Bell"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image"}" content="${"/images/gbell_social_image.jpg"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:width"}" content="${"1000"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:height"}" content="${"500"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:type"}" content="${"image/jpg"}" data-svelte="svelte-1vhvi7o"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1vhvi7o"><link rel="${"alternate icon"}" type="${"image/png"}" href="${"/images/favicons/favicon.png"}" data-svelte="svelte-1vhvi7o"><link rel="${"icon"}" type="${"image/svg"}" href="${"/images/favicons/favicon.svg"}" data-svelte="svelte-1vhvi7o">`, ""}

${header ? `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })}` : ``}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { IconButton as I, Page as P, Section as S };