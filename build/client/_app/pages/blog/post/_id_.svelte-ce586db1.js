import{S as d,i as g,s as p,w as l,x as i,y as c,q as f,o as u,B as $,V as _,e as w,c as b,a as y,d as m,g as B}from"../../../chunks/vendor-6196873f.js";import{P as h,S as k}from"../../../chunks/Page-107b57e8.js";function v(o){let t,s,e;return s=new _({props:{source:o[0]}}),{c(){t=w("article"),l(s.$$.fragment)},l(n){t=b(n,"ARTICLE",{});var a=y(t);i(s.$$.fragment,a),a.forEach(m)},m(n,a){B(n,t,a),c(s,t,null),e=!0},p(n,a){const r={};a&1&&(r.source=n[0]),s.$set(r)},i(n){e||(f(s.$$.fragment,n),e=!0)},o(n){u(s.$$.fragment,n),e=!1},d(n){n&&m(t),$(s)}}}function S(o){let t,s;return t=new k({props:{simple:"true",$$slots:{default:[v]},$$scope:{ctx:o}}}),{c(){l(t.$$.fragment)},l(e){i(t.$$.fragment,e)},m(e,n){c(t,e,n),s=!0},p(e,n){const a={};n&3&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){$(t,e)}}}function x(o){let t,s;return t=new h({props:{title:"Blog",$$slots:{default:[S]},$$scope:{ctx:o}}}),{c(){l(t.$$.fragment)},l(e){i(t.$$.fragment,e)},m(e,n){c(t,e,n),s=!0},p(e,[n]){const a={};n&3&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){u(t.$$.fragment,e),s=!1},d(e){$(t,e)}}}async function P({params:o,fetch:t}){let s=o.id;const e=await t(`/api/grabble/get/${s}`);let n;if(!e.ok)return e;n=await e.json();const a=await t(`/posts/blog/${s}.md`);if(!a.ok)return{status:500,body:"File missing"};let r=await a.text();return{status:200,props:{post:n,blogBody:r}}}function q(o,t,s){let{blogBody:e}=t;return o.$$set=n=>{"blogBody"in n&&s(0,e=n.blogBody)},[e]}class j extends d{constructor(t){super();g(this,t,q,x,p,{blogBody:0})}}export{j as default,P as load};
