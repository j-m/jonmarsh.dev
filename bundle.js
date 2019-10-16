var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function d(){return p("")}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function m(t){return Array.from(t.childNodes)}function $(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){for(let t=0;t<o.attributes.length;t+=1){const e=o.attributes[t];n[e.name]||o.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):f(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return p(e)}function b(t){return v(t," ")}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}class w{constructor(t,e=null){this.e=f("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)c(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(l)}}let _;function j(t){_=t}function E(t){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_mount.push(t)}const k=[],O=[],x=[],P=[],T=Promise.resolve();let M=!1;function D(t){x.push(t)}function I(){const t=new Set;do{for(;k.length;){const t=k.shift();j(t),A(t.$$)}for(;O.length;)O.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];t.has(n)||(n(),t.add(n))}x.length=0}while(k.length);for(;P.length;)P.pop()();M=!1}function A(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(D))}const H=new Set;let L;function C(){L={r:0,c:[],p:L}}function N(){L.r||o(L.c),L=L.p}function R(t,e){t&&t.i&&(H.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),L.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const a=t[i],s=e[i];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(n[t]=s[t],o[t]=1);t[i]=s}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function B(t,e,r){const{fragment:a,on_mount:s,on_destroy:c,after_update:l}=t.$$;a.m(e,r),D(()=>{const e=s.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(D)}function U(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function G(t,e){t.$$.dirty||(k.push(t),M||(M=!0,T.then(I)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function q(e,n,i,a,s,c){const l=_;j(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let p=!1;f.ctx=i?i(e,u,(t,n,r=n)=>(f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&G(e,t)),n)):u,f.update(),p=!0,o(f.before_update),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l(m(n.target)):f.fragment.c(),n.intro&&R(e.$$.fragment),B(e,n.target,n.anchor),I()),j(l)}class F{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const z=[];const Y=function(e,n=t){let r;const o=[];function i(t){if(a(e,t)&&(e=t,r)){const t=!z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),z.push(n,e)}if(t){for(let t=0;t<z.length;t+=2)z[t][0](z[t+1]);z.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,s=t){const c=[a,s];return o.push(c),1===o.length&&(r=n(i)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}({});function K(e){return{c:t,l:t,m:t,p:t,i:t,o:t,d:t}}function Q(t,e,n){let{title:r,component:o,path:i,props:a=[]}=e;return function(t,e,n,r){Y.update(o=>(o[n]={title:t,component:e,props:r},o))}(r,o,i.toLowerCase(),a),t.$set=(t=>{"title"in t&&n("title",r=t.title),"component"in t&&n("component",o=t.component),"path"in t&&n("path",i=t.path),"props"in t&&n("props",a=t.props)}),{title:r,component:o,path:i,props:a}}class W extends F{constructor(t){super(),q(this,t,Q,K,a,["title","component","path","props"])}}function X(t){var n,r,o=[t.props],i=t.component;function a(t){let n={};for(var r=0;r<o.length;r+=1)n=e(n,o[r]);return{props:n}}if(i)var s=new i(a());return{c(){s&&s.$$.fragment.c(),n=d()},l(t){s&&s.$$.fragment.l(t),n=d()},m(t,e){s&&B(s,t,e),c(t,n,e),r=!0},p(t,e){var r=t.props?S(o,[V(e.props)]):{};if(i!==(i=e.component)){if(s){C();const t=s;J(t.$$.fragment,1,0,()=>{U(t,1)}),N()}i?((s=new i(a())).$$.fragment.c(),R(s.$$.fragment,1),B(s,n.parentNode,n)):s=null}else i&&s.$set(r)},i(t){r||(s&&R(s.$$.fragment,t),r=!0)},o(t){s&&J(s.$$.fragment,t),r=!1},d(t){t&&l(n),s&&U(s,t)}}}function Z(t,e,n){let{defaultTitle:r,defaultComponent:o,defaultProps:i=[]}=e,a=o,s=i;return Y.subscribe(t=>{const e=t[document.location.pathname.toLowerCase()];document.title=e?e.title:r,n("component",a=e?e.component:o),n("props",s=e?e.props:i)}),t.$set=(t=>{"defaultTitle"in t&&n("defaultTitle",r=t.defaultTitle),"defaultComponent"in t&&n("defaultComponent",o=t.defaultComponent),"defaultProps"in t&&n("defaultProps",i=t.defaultProps)}),{defaultTitle:r,defaultComponent:o,defaultProps:i,component:a,props:s}}class tt extends F{constructor(t){super(),q(this,t,Z,X,a,["defaultTitle","defaultComponent","defaultProps"])}}function et(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nt(t,e){return t(e={exports:{}},e.exports),e.exports}var rt=nt(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this._data=t,this._options=e,this._transposed={},this.transpose(t)}return Object.defineProperty(t.prototype,"keys",{get:function(){return this._options.keys},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._data.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transposed",{get:function(){return this._transposed},enumerable:!0,configurable:!0}),t.prototype.get=function(t,e){if(void 0===this._transposed[t])throw new ReferenceError("The key '"+t+"' has not been transposed");return void 0===e?this._transposed[t]:this._transposed[t][e]},t.prototype.push=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.transpose(e),(t=this._data).push.apply(t,e)},t.prototype.transpose=function(t){for(var e,n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=this.keys||Object.keys(o);i<a.length;i++){var s=a[i];void 0!==o[s]&&(void 0!==this._transposed[s]?void 0!==this._transposed[s][o[s]]?this._transposed[s][o[s]].push(o):this._transposed[s][o[s]]=[o]:this._transposed[s]=((e={})[o[s]]=[o],e))}},t}();e.OatyArray=n});et(rt);rt.OatyArray;var ot=nt(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){void 0===t&&(t={}),this._tags=t.tags||{},this._resources=t.resources||{},this._tagged=new rt.OatyArray(t.tagged)}return Object.defineProperty(t.prototype,"resources",{get:function(){return this._resources},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tagged",{get:function(){return this._tagged.data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tags",{get:function(){return this._tags},enumerable:!0,configurable:!0}),t.prototype.import=function(t){var e;Object.assign(this._tags,t.tags),Object.assign(this._resources,t.resources),(e=this._tagged).push.apply(e,t.tagged||[])},t.prototype.export=function(){return JSON.stringify({resources:this.resources,tagged:this.tagged,tags:this.tags})},t.prototype.addResource=function(t,e){if(this._resources[t])throw Error("Resource ID '"+t+"' is already in use");this._resources[t]=e},t.prototype.addTag=function(t,e){if(this._tags[t])throw Error("Tag ID '"+t+"' is already in use");this._tags[t]=e},t.prototype.tagResource=function(t){if(void 0===this._resources[t.resourceID])throw ReferenceError("Unknown resource '"+t.resourceID+"'");if(void 0===this._tags[t.tagID])throw ReferenceError("Unknown tag '"+t.tagID+"'");this._tagged.push(t)},t.prototype.getTags=function(t){var e=this;if(void 0===this._resources[t])throw ReferenceError("Unknown resource '"+t+"'");var n=this._tagged.get("resourceID",t);if(void 0===n)return{};var r={};return n.forEach(function(t){r[t.tagID]=e._tags[t.tagID]}),r},t.prototype.getResources=function(t){var e=this;if(void 0===this._tags[t])throw ReferenceError("Unknown tag '"+t+"'");var n=this._tagged.get("tagID",t);if(void 0===n)return{};var r={};return n.forEach(function(t){r[t.resourceID]=e._resources[t.resourceID]}),r},t}();e.Tagable=n});et(ot);const it=new(0,ot.Tagable),at=fetch("resources/data/tagable.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>t.json()).then(t=>it.import(t));async function st(){return at.then(()=>it.resources)}function ct(e){var n,r,o;return{c(){n=f("a"),this.h()},l(t){m(n=$(t,"A",{title:!0,href:!0},!1)).forEach(l),this.h()},h(){g(n,"title",r="View everything tagged '"+e.title+"''"),g(n,"href",o="tag/"+e.id)},m(t,r){c(t,n,r),n.innerHTML=e.badge},p(t,e){t.badge&&(n.innerHTML=e.badge),t.title&&r!==(r="View everything tagged '"+e.title+"''")&&g(n,"title",r),t.id&&o!==(o="tag/"+e.id)&&g(n,"href",o)},i:t,o:t,d(t){t&&l(n)}}}function lt(t,e,n){let{id:r,badge:o,title:i}=e;return t.$set=(t=>{"id"in t&&n("id",r=t.id),"badge"in t&&n("badge",o=t.badge),"title"in t&&n("title",i=t.title)}),{id:r,badge:o,title:i}}class ut extends F{constructor(t){super(),q(this,t,lt,ct,a,["id","badge","title"])}}function ft(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.tag=e[n][1],r}function pt(t,e,n){const r=Object.create(t);return r.link=e[n],r}function ht(t){var e,n;return{c(){e=f("h2"),n=p(t.title),this.h()},l(r){var o=m(e=$(r,"H2",{class:!0},!1));n=v(o,t.title),o.forEach(l),this.h()},h(){g(e,"class","title")},m(t,r){c(t,e,r),s(e,n)},p(t,e){t.title&&y(n,e.title)},d(t){t&&l(e)}}}function dt(t){var e;return{c(){e=f("img"),this.h()},l(t){m(e=$(t,"IMG",{class:!0,alt:!0,src:!0},!1)).forEach(l),this.h()},h(){g(e,"class","title"),g(e,"alt","logo"),g(e,"src",t.logo)},m(t,n){c(t,e,n)},p(t,n){t.logo&&g(e,"src",n.logo)},d(t){t&&l(e)}}}function gt(t){var e;return{c(){e=f("p"),this.h()},l(t){m(e=$(t,"P",{class:!0},!1)).forEach(l),this.h()},h(){g(e,"class","caption")},m(n,r){c(n,e,r),e.innerHTML=t.caption},p(t,n){t.caption&&(e.innerHTML=n.caption)},d(t){t&&l(e)}}}function mt(t){var e,n,r,o,i,a,u;return{c(){e=f("a"),n=f("img"),i=h(),this.h()},l(t){var r=m(e=$(t,"A",{href:!0,title:!0,class:!0},!1));m(n=$(r,"IMG",{alt:!0,src:!0},!1)).forEach(l),i=b(r),r.forEach(l),this.h()},h(){g(n,"alt",r=t.link.image.alt),g(n,"src",o=t.link.image.src),g(e,"href",a=t.link.href),g(e,"title",u=t.link.title),g(e,"class","link")},m(t,r){c(t,e,r),s(e,n),s(e,i)},p(t,i){t.links&&r!==(r=i.link.image.alt)&&g(n,"alt",r),t.links&&o!==(o=i.link.image.src)&&g(n,"src",o),t.links&&a!==(a=i.link.href)&&g(e,"href",a),t.links&&u!==(u=i.link.title)&&g(e,"title",u)},d(t){t&&l(e)}}}function $t(t){var e,n;return{c(){e=f("p"),n=p("Loading tags..."),this.h()},l(t){var r=m(e=$(t,"P",{class:!0},!1));n=v(r,"Loading tags..."),r.forEach(l),this.h()},h(){g(e,"class","loading")},m(t,r){c(t,e,r),s(e,n)},d(t){t&&l(e)}}}function vt(t){var n,r=[{id:t.id},t.tag];let o={};for(var i=0;i<r.length;i+=1)o=e(o,r[i]);var a=new ut({props:o});return{c(){a.$$.fragment.c()},l(t){a.$$.fragment.l(t)},m(t,e){B(a,t,e),n=!0},p(t,e){var n=t.tags?S(r,[r[0],V(e.tag)]):{};a.$set(n)},i(t){n||(R(a.$$.fragment,t),n=!0)},o(t){J(a.$$.fragment,t),n=!1},d(t){U(a,t)}}}function bt(t){var e,n,r,o,i,a,d,w,_,j,E,k,O,x,P,T,M,D;function I(t,e){return e.logo?dt:ht}var A=I(0,t),H=A(t),L=t.caption&&gt(t);let S=t.links,V=[];for(let e=0;e<S.length;e+=1)V[e]=mt(pt(t,S,e));let B=Object.entries(t.tags),U=[];for(let e=0;e<B.length;e+=1)U[e]=vt(ft(t,B,e));const G=t=>J(U[t],1,1,()=>{U[t]=null});let q=null;return B.length||(q=$t()).c(),{c(){e=f("div"),n=f("img"),r=h(),H.c(),o=h(),i=f("p"),a=p("Age: "),d=p(t.age),w=p(" | Date: "),_=f("time"),j=p(t.date),E=h(),k=f("p"),O=h(),L&&L.c(),x=h(),P=f("div");for(let t=0;t<V.length;t+=1)V[t].c();T=h(),M=f("div");for(let t=0;t<U.length;t+=1)U[t].c();this.h()},l(s){var c=m(e=$(s,"DIV",{class:!0},!1));m(n=$(c,"IMG",{class:!0,alt:!0,src:!0},!1)).forEach(l),r=b(c),H.l(c),o=b(c);var u=m(i=$(c,"P",{class:!0},!1));a=v(u,"Age: "),d=v(u,t.age),w=v(u," | Date: ");var f=m(_=$(u,"TIME",{datetime:!0},!1));j=v(f,t.date),f.forEach(l),u.forEach(l),E=b(c),m(k=$(c,"P",{class:!0},!1)).forEach(l),O=b(c),L&&L.l(c),x=b(c);var p=m(P=$(c,"DIV",{class:!0},!1));for(let t=0;t<V.length;t+=1)V[t].l(p);p.forEach(l),T=b(c);var h=m(M=$(c,"DIV",{class:!0},!1));for(let t=0;t<U.length;t+=1)U[t].l(h);h.forEach(l),c.forEach(l),this.h()},h(){g(n,"class","preview"),g(n,"alt","preview"),g(n,"src",t.preview),g(_,"datetime",t.date),g(i,"class","date"),g(k,"class","description"),g(P,"class","links"),g(M,"class","tags"),g(e,"class","project")},m(l,u){c(l,e,u),s(e,n),s(e,r),H.m(e,null),s(e,o),s(e,i),s(i,a),s(i,d),s(i,w),s(i,_),s(_,j),s(e,E),s(e,k),k.innerHTML=t.description,s(e,O),L&&L.m(e,null),s(e,x),s(e,P);for(let t=0;t<V.length;t+=1)V[t].m(P,null);s(e,T),s(e,M);for(let t=0;t<U.length;t+=1)U[t].m(M,null);q&&q.m(M,null),D=!0},p(t,r){if(D&&!t.preview||g(n,"src",r.preview),A===(A=I(0,r))&&H?H.p(t,r):(H.d(1),(H=A(r))&&(H.c(),H.m(e,o))),D&&!t.date||(y(j,r.date),g(_,"datetime",r.date)),D&&!t.description||(k.innerHTML=r.description),r.caption?L?L.p(t,r):((L=gt(r)).c(),L.m(e,x)):L&&(L.d(1),L=null),t.links){let e;for(S=r.links,e=0;e<S.length;e+=1){const n=pt(r,S,e);V[e]?V[e].p(t,n):(V[e]=mt(n),V[e].c(),V[e].m(P,null))}for(;e<V.length;e+=1)V[e].d(1);V.length=S.length}if(t.tags){let e;for(B=Object.entries(r.tags),e=0;e<B.length;e+=1){const n=ft(r,B,e);U[e]?(U[e].p(t,n),R(U[e],1)):(U[e]=vt(n),U[e].c(),R(U[e],1),U[e].m(M,null))}for(C(),e=B.length;e<U.length;e+=1)G(e);N()}B.length?q&&(q.d(1),q=null):q||((q=$t()).c(),q.m(M,null))},i(t){if(!D){for(let t=0;t<B.length;t+=1)R(U[t]);D=!0}},o(t){U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)J(U[t]);D=!1},d(t){t&&l(e),H.d(),L&&L.d(),u(V,t),u(U,t),q&&q.d()}}}function yt(t,e,n){let{id:r,caption:o,date:i,description:a,github:s,logo:c,preview:l,title:u,links:f=[]}=e,p=new Date(new Date(i)-new Date("1997-10-24")).getFullYear()-1970,h={};return E(async function(){n("tags",h=await async function(t){return at.then(()=>it.getTags(t))}(r))}),t.$set=(t=>{"id"in t&&n("id",r=t.id),"caption"in t&&n("caption",o=t.caption),"date"in t&&n("date",i=t.date),"description"in t&&n("description",a=t.description),"github"in t&&n("github",s=t.github),"logo"in t&&n("logo",c=t.logo),"preview"in t&&n("preview",l=t.preview),"title"in t&&n("title",u=t.title),"links"in t&&n("links",f=t.links)}),{id:r,caption:o,date:i,description:a,github:s,logo:c,preview:l,title:u,links:f,age:p,tags:h}}class wt extends F{constructor(t){super(),q(this,t,yt,bt,a,["id","caption","date","description","github","logo","preview","title","links"])}}function _t(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function jt(t){var e,n;return{c(){e=f("p"),n=p("Loading projects..."),this.h()},l(t){var r=m(e=$(t,"P",{class:!0},!1));n=v(r,"Loading projects..."),r.forEach(l),this.h()},h(){g(e,"class","loading")},m(t,r){c(t,e,r),s(e,n)},d(t){t&&l(e)}}}function Et(t){var n,r=[{id:t.id},t.data];let o={};for(var i=0;i<r.length;i+=1)o=e(o,r[i]);var a=new wt({props:o});return{c(){a.$$.fragment.c()},l(t){a.$$.fragment.l(t)},m(t,e){B(a,t,e),n=!0},p(t,e){var n=t.projects?S(r,[r[0],V(e.data)]):{};a.$set(n)},i(t){n||(R(a.$$.fragment,t),n=!0)},o(t){J(a.$$.fragment,t),n=!1},d(t){U(a,t)}}}function kt(t){var e,n;let r=Object.entries(t.projects),o=[];for(let e=0;e<r.length;e+=1)o[e]=Et(_t(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});let a=null;return r.length||(a=jt()).c(),{c(){e=f("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){var n=m(e=$(t,"DIV",{id:!0},!1));for(let t=0;t<o.length;t+=1)o[t].l(n);n.forEach(l),this.h()},h(){g(e,"id","projects")},m(t,r){c(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);a&&a.m(e,null),n=!0},p(t,n){if(t.projects){let a;for(r=Object.entries(n.projects),a=0;a<r.length;a+=1){const i=_t(n,r,a);o[a]?(o[a].p(t,i),R(o[a],1)):(o[a]=Et(i),o[a].c(),R(o[a],1),o[a].m(e,null))}for(C(),a=r.length;a<o.length;a+=1)i(a);N()}r.length?a&&(a.d(1),a=null):a||((a=jt()).c(),a.m(e,null))},i(t){if(!n){for(let t=0;t<r.length;t+=1)R(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){t&&l(e),u(o,t),a&&a.d()}}}function Ot(t,e,n){let r=[];return E(async()=>{n("projects",r=await st())}),{projects:r}}class xt extends F{constructor(t){super(),q(this,t,Ot,kt,a,[])}}function Pt(e){var n,r=new xt({});return{c(){r.$$.fragment.c()},l(t){r.$$.fragment.l(t)},m(t,e){B(r,t,e),n=!0},p:t,i(t){n||(R(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){U(r,t)}}}class Tt extends F{constructor(t){super(),q(this,t,null,Pt,a,[])}}function Mt(e){var n,r,o,i;return{c(){n=f("h1"),r=p(e.title),o=h(),this.h()},l(t){var i=m(n=$(t,"H1",{},!1));r=v(i,e.title),i.forEach(l),o=b(t),this.h()},h(){i=new w(e.body,null)},m(t,e){c(t,n,e),s(n,r),c(t,o,e),i.m(t,e)},p(t,e){t.title&&y(r,e.title),t.body&&i.p(e.body)},i:t,o:t,d(t){t&&(l(n),l(o),i.d())}}}function Dt(t,e,n){let{id:r,age:o,body:i,caption:a,date:s,description:c,github:l,logo:u,preview:f,title:p}=e;return t.$set=(t=>{"id"in t&&n("id",r=t.id),"age"in t&&n("age",o=t.age),"body"in t&&n("body",i=t.body),"caption"in t&&n("caption",a=t.caption),"date"in t&&n("date",s=t.date),"description"in t&&n("description",c=t.description),"github"in t&&n("github",l=t.github),"logo"in t&&n("logo",u=t.logo),"preview"in t&&n("preview",f=t.preview),"title"in t&&n("title",p=t.title)}),{id:r,age:o,body:i,caption:a,date:s,description:c,github:l,logo:u,preview:f,title:p}}class It extends F{constructor(t){super(),q(this,t,Dt,Mt,a,["id","age","body","caption","date","description","github","logo","preview","title"])}}function At(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function Ht(t){var e,n=new W({props:{title:"Jonathan Marsh - Project - "+t.data.title,path:"/project/"+t.id,component:It,props:t.data}});return{c(){n.$$.fragment.c()},l(t){n.$$.fragment.l(t)},m(t,r){B(n,t,r),e=!0},p(t,e){var r={};t.projects&&(r.title="Jonathan Marsh - Project - "+e.data.title),t.projects&&(r.path="/project/"+e.id),t.projects&&(r.props=e.data),n.$set(r)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Lt(t){var e,n;let r=Object.entries(t.projects),o=[];for(let e=0;e<r.length;e+=1)o[e]=Ht(At(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=d()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=d()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);c(t,e,r),n=!0},p(t,n){if(t.projects||t.Project){let a;for(r=Object.entries(n.projects),a=0;a<r.length;a+=1){const i=At(n,r,a);o[a]?(o[a].p(t,i),R(o[a],1)):(o[a]=Ht(i),o[a].c(),R(o[a],1),o[a].m(e.parentNode,e))}for(C(),a=r.length;a<o.length;a+=1)i(a);N()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)R(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){u(o,t),t&&l(e)}}}function Ct(t,e,n){let r={};return E(async()=>{n("projects",r=await st())}),{projects:r}}class Nt extends F{constructor(t){super(),q(this,t,Ct,Lt,a,[])}}function Rt(e){var n,r,o,i;return{c(){n=f("h1"),r=p(e.title),o=h(),this.h()},l(t){var i=m(n=$(t,"H1",{},!1));r=v(i,e.title),i.forEach(l),o=b(t),this.h()},h(){i=new w(e.body,null)},m(t,e){c(t,n,e),s(n,r),c(t,o,e),i.m(t,e)},p(t,e){t.title&&y(r,e.title),t.body&&i.p(e.body)},i:t,o:t,d(t){t&&(l(n),l(o),i.d())}}}function Jt(t,e,n){let{title:r,body:o}=e;return t.$set=(t=>{"title"in t&&n("title",r=t.title),"body"in t&&n("body",o=t.body)}),{title:r,body:o}}class St extends F{constructor(t){super(),q(this,t,Jt,Rt,a,["title","body"])}}function Vt(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function Bt(t){var e,n=new W({props:{title:"Jonathan Marsh - Tag - "+t.data.title,path:"/tag/"+t.id,component:St,props:t.data}});return{c(){n.$$.fragment.c()},l(t){n.$$.fragment.l(t)},m(t,r){B(n,t,r),e=!0},p(t,e){var r={};t.tags&&(r.title="Jonathan Marsh - Tag - "+e.data.title),t.tags&&(r.path="/tag/"+e.id),t.tags&&(r.props=e.data),n.$set(r)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Ut(t){var e,n;let r=Object.entries(t.tags),o=[];for(let e=0;e<r.length;e+=1)o[e]=Bt(Vt(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=d()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=d()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);c(t,e,r),n=!0},p(t,n){if(t.tags||t.Tag){let a;for(r=Object.entries(n.tags),a=0;a<r.length;a+=1){const i=Vt(n,r,a);o[a]?(o[a].p(t,i),R(o[a],1)):(o[a]=Bt(i),o[a].c(),R(o[a],1),o[a].m(e.parentNode,e))}for(C(),a=r.length;a<o.length;a+=1)i(a);N()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)R(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){u(o,t),t&&l(e)}}}function Gt(t,e,n){let r={};return E(async()=>{n("tags",r=await async function(){return at.then(()=>it.tags)}())}),{tags:r}}class qt extends F{constructor(t){super(),q(this,t,Gt,Ut,a,[])}}function Ft(e){var n,r;return{c(){n=f("h1"),r=p("Privacy")},l(t){var e=m(n=$(t,"H1",{},!1));r=v(e,"Privacy"),e.forEach(l)},m(t,e){c(t,n,e),s(n,r)},p:t,i:t,o:t,d(t){t&&l(n)}}}class zt extends F{constructor(t){super(),q(this,t,null,Ft,a,[])}}function Yt(e){var n,r;return{c(){n=f("h1"),r=p("Sitemap")},l(t){var e=m(n=$(t,"H1",{},!1));r=v(e,"Sitemap"),e.forEach(l)},m(t,e){c(t,n,e),s(n,r)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Kt extends F{constructor(t){super(),q(this,t,null,Yt,a,[])}}function Qt(e){var n,r,o,i,a,s=new tt({props:{defaultTitle:"Jonathan Marsh - Home",defaultComponent:Tt}}),u=new W({props:{title:"Jonathan Marsh - Privacy",path:"/privacy",component:zt}}),f=new W({props:{title:"Jonathan Marsh - Sitemap",path:"/sitemap",component:Kt}}),p=new Nt({}),d=new qt({});return{c(){s.$$.fragment.c(),n=h(),u.$$.fragment.c(),r=h(),f.$$.fragment.c(),o=h(),p.$$.fragment.c(),i=h(),d.$$.fragment.c()},l(t){s.$$.fragment.l(t),n=b(t),u.$$.fragment.l(t),r=b(t),f.$$.fragment.l(t),o=b(t),p.$$.fragment.l(t),i=b(t),d.$$.fragment.l(t)},m(t,e){B(s,t,e),c(t,n,e),B(u,t,e),c(t,r,e),B(f,t,e),c(t,o,e),B(p,t,e),c(t,i,e),B(d,t,e),a=!0},p:t,i(t){a||(R(s.$$.fragment,t),R(u.$$.fragment,t),R(f.$$.fragment,t),R(p.$$.fragment,t),R(d.$$.fragment,t),a=!0)},o(t){J(s.$$.fragment,t),J(u.$$.fragment,t),J(f.$$.fragment,t),J(p.$$.fragment,t),J(d.$$.fragment,t),a=!1},d(t){U(s,t),t&&l(n),U(u,t),t&&l(r),U(f,t),t&&l(o),U(p,t),t&&l(i),U(d,t)}}}return new class extends F{constructor(t){super(),q(this,t,null,Qt,a,[])}}({target:document.body.querySelector("app"),hydrate:!0})}();
//# sourceMappingURL=bundle.js.map