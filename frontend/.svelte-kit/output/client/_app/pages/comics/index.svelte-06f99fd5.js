import{S as le,i as ae,s as se,x as J,y as N,z as O,r as D,p as V,C as T,e as v,k as I,t as w,c as b,a as y,m as U,h as C,d as f,b as $,f as te,g as P,J as p,j as W,o as re,q as ie,O as ne}from"../../chunks/index-467184d8.js";import{a as X}from"../../chunks/apiFetch-1e72d496.js";import{P as ce,S as oe}from"../../chunks/Page-fae97556.js";import{c as Y}from"../../chunks/convert-date-64d95c73.js";import{I as ue}from"../../chunks/Image-2e50915c.js";function Z(s,e,l){const t=s.slice();return t[1]=e[l],t}function fe(s){let e;return{c(){e=w("Comic Strip")},l(l){e=C(l,"Comic Strip")},m(l,t){P(l,e,t)},d(l){l&&f(e)}}}function me(s){let e;return{c(){e=w("Multi-Volume")},l(l){e=C(l,"Multi-Volume")},m(l,t){P(l,e,t)},d(l){l&&f(e)}}}function pe(s){let e;return{c(){e=w("Single-Volume")},l(l){e=C(l,"Single-Volume")},m(l,t){P(l,e,t)},d(l){l&&f(e)}}}function x(s){let e,l;return{c(){e=v("span"),l=w("Latest:"),this.h()},l(t){e=b(t,"SPAN",{style:!0});var a=y(e);l=C(a,"Latest:"),a.forEach(f),this.h()},h(){te(e,"display","inline-block")},m(t,a){P(t,e,a),p(e,l)},d(t){t&&f(e)}}}function ee(s){let e,l,t,a,o,r=s[1].title+"",c,i,_,k,B,d,M,E,R=Y(s[1].latestRelease)+"",q,z,F,L;t=new ue({props:{src:"https://api.graciebell.art"+s[1].thumbnailUrl,alt:"",lazy:!0,style:"width:100%;border-radius:var(--rounded-1);"}});function G(n,h){if(n[1].type=="single_volume")return pe;if(n[1].type=="multi_volume")return me;if(n[1].type=="strip")return fe}let S=G(s),m=S&&S(s),u=s[1].type!="single_volume"&&x();return{c(){e=v("li"),l=v("a"),J(t.$$.fragment),a=I(),o=v("p"),c=w(r),i=I(),_=v("div"),k=v("p"),m&&m.c(),B=I(),d=v("p"),u&&u.c(),M=I(),E=v("time"),q=w(R),F=I(),this.h()},l(n){e=b(n,"LI",{});var h=y(e);l=b(h,"A",{href:!0,class:!0});var g=y(l);N(t.$$.fragment,g),a=U(g),o=b(g,"P",{class:!0});var H=y(o);c=C(H,r),H.forEach(f),i=U(g),_=b(g,"DIV",{class:!0});var A=y(_);k=b(A,"P",{class:!0});var K=y(k);m&&m.l(K),K.forEach(f),B=U(A),d=b(A,"P",{class:!0});var j=y(d);u&&u.l(j),M=U(j),E=b(j,"TIME",{style:!0,class:!0});var Q=y(E);q=C(Q,R),Q.forEach(f),j.forEach(f),A.forEach(f),g.forEach(f),F=U(h),h.forEach(f),this.h()},h(){$(o,"class","comic-name svelte-tcymvp"),$(k,"class","comic-type"),te(E,"display","inline-block"),$(E,"class","svelte-tcymvp"),$(d,"class","latest-release svelte-tcymvp"),$(_,"class","info svelte-tcymvp"),$(l,"href",z="/comics/"+s[1].url),$(l,"class","svelte-tcymvp")},m(n,h){P(n,e,h),p(e,l),O(t,l,null),p(l,a),p(l,o),p(o,c),p(l,i),p(l,_),p(_,k),m&&m.m(k,null),p(_,B),p(_,d),u&&u.m(d,null),p(d,M),p(d,E),p(E,q),p(e,F),L=!0},p(n,h){const g={};h&1&&(g.src="https://api.graciebell.art"+n[1].thumbnailUrl),t.$set(g),(!L||h&1)&&r!==(r=n[1].title+"")&&W(c,r),S!==(S=G(n))&&(m&&m.d(1),m=S&&S(n),m&&(m.c(),m.m(k,null))),n[1].type!="single_volume"?u||(u=x(),u.c(),u.m(d,M)):u&&(u.d(1),u=null),(!L||h&1)&&R!==(R=Y(n[1].latestRelease)+"")&&W(q,R),(!L||h&1&&z!==(z="/comics/"+n[1].url))&&$(l,"href",z)},i(n){L||(D(t.$$.fragment,n),L=!0)},o(n){V(t.$$.fragment,n),L=!1},d(n){n&&f(e),T(t),m&&m.d(),u&&u.d()}}}function _e(s){let e,l,t=s[0],a=[];for(let r=0;r<t.length;r+=1)a[r]=ee(Z(s,t,r));const o=r=>V(a[r],1,1,()=>{a[r]=null});return{c(){e=v("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=b(r,"UL",{class:!0});var c=y(e);for(let i=0;i<a.length;i+=1)a[i].l(c);c.forEach(f),this.h()},h(){$(e,"class","comics-gallery svelte-tcymvp")},m(r,c){P(r,e,c);for(let i=0;i<a.length;i+=1)a[i].m(e,null);l=!0},p(r,c){if(c&1){t=r[0];let i;for(i=0;i<t.length;i+=1){const _=Z(r,t,i);a[i]?(a[i].p(_,c),D(a[i],1)):(a[i]=ee(_),a[i].c(),D(a[i],1),a[i].m(e,null))}for(re(),i=t.length;i<a.length;i+=1)o(i);ie()}},i(r){if(!l){for(let c=0;c<t.length;c+=1)D(a[c]);l=!0}},o(r){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)V(a[c]);l=!1},d(r){r&&f(e),ne(a,r)}}}function he(s){let e,l;return e=new oe({props:{heading:"",simple:"true",$$slots:{default:[_e]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,a){const o={};a&17&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}function de(s){let e,l;return e=new ce({props:{title:"Comics",$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){J(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){O(e,t,a),l=!0},p(t,[a]){const o={};a&17&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){T(e,t)}}}async function Ee(){let s=[],e=[],l=[],t={comicDataList:[]};return s=await X("comics","populate[comic_chapters][sort][1]=release_date:desc"),s!=null&&(e=s),s=await X("comics","populate[thumbnail][fields][0]=url"),s!=null&&(l=s.map(a=>a.attributes.thumbnail.data.attributes.url)),t.comicDataList=e.map((a,o)=>({title:a.attributes.title,thumbnailUrl:l[o],latestRelease:a.attributes.comic_chapters.data[0].attributes.release_date,type:a.attributes.type,url:a.attributes.url})).sort((a,o)=>a.latestRelease<o.latestRelease?1:-1),{props:t}}function ge(s,e,l){let{comicDataList:t}=e;return s.$$set=a=>{"comicDataList"in a&&l(0,t=a.comicDataList)},[t]}class Le extends le{constructor(e){super(),ae(this,e,ge,de,se,{comicDataList:0})}}export{Le as default,Ee as load};