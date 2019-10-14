var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function h(){return f("")}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function m(t){return Array.from(t.childNodes)}function $(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){for(let t=0;t<o.attributes.length;t+=1){const e=o.attributes[t];n[e.name]||o.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return f(e)}function v(t){return b(t," ")}function y(t,e){e=""+e,t.data!==e&&(t.data=e)}class w{constructor(t,e=null){this.e=p("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)c(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(l)}}let _;function j(t){_=t}function E(t){(function(){if(!_)throw new Error("Function called outside component initialization");return _})().$$.on_mount.push(t)}const O=[],x=[],P=[],T=[],M=Promise.resolve();let I=!1;function D(t){P.push(t)}function k(){const t=new Set;do{for(;O.length;){const t=O.shift();j(t),A(t.$$)}for(;x.length;)x.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];t.has(n)||(n(),t.add(n))}P.length=0}while(O.length);for(;T.length;)T.pop()();I=!1}function A(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(D))}const H=new Set;let L;function C(){L={r:0,c:[],p:L}}function R(){L.r||o(L.c),L=L.p}function N(t,e){t&&t.i&&(H.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),L.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function S(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const a=t[i],s=e[i];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(n[t]=s[t],o[t]=1);t[i]=s}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function B(t){return"object"==typeof t&&null!==t?t:{}}function G(t,e,r){const{fragment:a,on_mount:s,on_destroy:c,after_update:l}=t.$$;a.m(e,r),D(()=>{const e=s.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(D)}function U(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function V(t,e){t.$$.dirty||(O.push(t),I||(I=!0,M.then(k)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function q(e,n,i,a,s,c){const l=_;j(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let f=!1;p.ctx=i?i(e,u,(t,n,r=n)=>(p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),f&&V(e,t)),n)):u,p.update(),f=!0,o(p.before_update),p.fragment=a(p.ctx),n.target&&(n.hydrate?p.fragment.l(m(n.target)):p.fragment.c(),n.intro&&N(e.$$.fragment),G(e,n.target,n.anchor),k()),j(l)}class z{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const F=[];const K=function(e,n=t){let r;const o=[];function i(t){if(a(e,t)&&(e=t,r)){const t=!F.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),F.push(n,e)}if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,s=t){const c=[a,s];return o.push(c),1===o.length&&(r=n(i)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}({});function Q(e){return{c:t,l:t,m:t,p:t,i:t,o:t,d:t}}function W(t,e,n){let{title:r,component:o,path:i,props:a=[]}=e;return function(t,e,n,r){K.update(o=>(o[n]={title:t,component:e,props:r},o))}(r,o,i.toLowerCase(),a),t.$set=(t=>{"title"in t&&n("title",r=t.title),"component"in t&&n("component",o=t.component),"path"in t&&n("path",i=t.path),"props"in t&&n("props",a=t.props)}),{title:r,component:o,path:i,props:a}}class X extends z{constructor(t){super(),q(this,t,W,Q,a,["title","component","path","props"])}}function Y(t){var n,r,o=[t.props],i=t.component;function a(t){let n={};for(var r=0;r<o.length;r+=1)n=e(n,o[r]);return{props:n}}if(i)var s=new i(a());return{c(){s&&s.$$.fragment.c(),n=h()},l(t){s&&s.$$.fragment.l(t),n=h()},m(t,e){s&&G(s,t,e),c(t,n,e),r=!0},p(t,e){var r=t.props?S(o,[B(e.props)]):{};if(i!==(i=e.component)){if(s){C();const t=s;J(t.$$.fragment,1,0,()=>{U(t,1)}),R()}i?((s=new i(a())).$$.fragment.c(),N(s.$$.fragment,1),G(s,n.parentNode,n)):s=null}else i&&s.$set(r)},i(t){r||(s&&N(s.$$.fragment,t),r=!0)},o(t){s&&J(s.$$.fragment,t),r=!1},d(t){t&&l(n),s&&U(s,t)}}}function Z(t,e,n){let{defaultTitle:r,defaultComponent:o,defaultProps:i=[]}=e,a=o,s=i;return K.subscribe(t=>{const e=t[document.location.pathname.toLowerCase()];document.title=e?e.title:r,n("component",a=e?e.component:o),n("props",s=e?e.props:i)}),t.$set=(t=>{"defaultTitle"in t&&n("defaultTitle",r=t.defaultTitle),"defaultComponent"in t&&n("defaultComponent",o=t.defaultComponent),"defaultProps"in t&&n("defaultProps",i=t.defaultProps)}),{defaultTitle:r,defaultComponent:o,defaultProps:i,component:a,props:s}}class tt extends z{constructor(t){super(),q(this,t,Z,Y,a,["defaultTitle","defaultComponent","defaultProps"])}}function et(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nt(t,e){return t(e={exports:{}},e.exports),e.exports}var rt=nt(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e={}),this._data=t,this._options=e,this._transposed={},this.transpose(t)}return Object.defineProperty(t.prototype,"keys",{get:function(){return this._options.keys},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._data.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transposed",{get:function(){return this._transposed},enumerable:!0,configurable:!0}),t.prototype.get=function(t,e){if(void 0===this._transposed[t])throw new ReferenceError("The key '"+t+"' has not been transposed");return void 0===e?this._transposed[t]:this._transposed[t][e]},t.prototype.push=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.transpose(e),(t=this._data).push.apply(t,e)},t.prototype.transpose=function(t){for(var e,n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=this.keys||Object.keys(o);i<a.length;i++){var s=a[i];void 0!==o[s]&&(void 0!==this._transposed[s]?void 0!==this._transposed[s][o[s]]?this._transposed[s][o[s]].push(o):this._transposed[s][o[s]]=[o]:this._transposed[s]=((e={})[o[s]]=[o],e))}},t}();e.OatyArray=n});et(rt);rt.OatyArray;var ot=nt(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){void 0===t&&(t={}),this._tags=t.tags||{},this._resources=t.resources||{},this._tagged=new rt.OatyArray(t.tagged)}return Object.defineProperty(t.prototype,"resources",{get:function(){return this._resources},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tagged",{get:function(){return this._tagged.data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tags",{get:function(){return this._tags},enumerable:!0,configurable:!0}),t.prototype.import=function(t){var e;Object.assign(this._tags,t.tags),Object.assign(this._resources,t.resources),(e=this._tagged).push.apply(e,t.tagged||[])},t.prototype.export=function(){return JSON.stringify({resources:this.resources,tagged:this.tagged,tags:this.tags})},t.prototype.addResource=function(t,e){if(this._resources[t])throw Error("Resource ID '"+t+"' is already in use");this._resources[t]=e},t.prototype.addTag=function(t,e){if(this._tags[t])throw Error("Tag ID '"+t+"' is already in use");this._tags[t]=e},t.prototype.tagResource=function(t){if(void 0===this._resources[t.resourceID])throw ReferenceError("Unknown resource '"+t.resourceID+"'");if(void 0===this._tags[t.tagID])throw ReferenceError("Unknown tag '"+t.tagID+"'");this._tagged.push(t)},t.prototype.getTags=function(t){var e=this;if(void 0===this._resources[t])throw ReferenceError("Unknown resource '"+t+"'");var n=this._tagged.get("resourceID",t);if(void 0===n)return{};var r={};return n.forEach(function(t){r[t.tagID]=e._tags[t.tagID]}),r},t.prototype.getResources=function(t){var e=this;if(void 0===this._tags[t])throw ReferenceError("Unknown tag '"+t+"'");var n=this._tagged.get("tagID",t);if(void 0===n)return{};var r={};return n.forEach(function(t){r[t.resourceID]=e._resources[t.resourceID]}),r},t}();e.Tagable=n});et(ot);const it=new(0,ot.Tagable),at=fetch("resources/data/tagable.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>t.json()).then(t=>it.import(t));async function st(){return at.then(()=>it.resources)}function ct(e){var n,r;return{c(){n=p("a"),this.h()},l(t){m(n=$(t,"A",{href:!0},!1)).forEach(l),this.h()},h(){g(n,"href",r="tag/"+e.id)},m(t,r){c(t,n,r),n.innerHTML=e.badge},p(t,e){t.badge&&(n.innerHTML=e.badge),t.id&&r!==(r="tag/"+e.id)&&g(n,"href",r)},i:t,o:t,d(t){t&&l(n)}}}function lt(t,e,n){let{id:r,badge:o,title:i}=e;return t.$set=(t=>{"id"in t&&n("id",r=t.id),"badge"in t&&n("badge",o=t.badge),"title"in t&&n("title",i=t.title)}),{id:r,badge:o,title:i}}class ut extends z{constructor(t){super(),q(this,t,lt,ct,a,["id","badge","title"])}}function pt(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.tag=e[n][1],r}function ft(t){var e,n;return{c(){e=p("h2"),n=f(t.title),this.h()},l(r){var o=m(e=$(r,"H2",{class:!0},!1));n=b(o,t.title),o.forEach(l),this.h()},h(){g(e,"class","title")},m(t,r){c(t,e,r),s(e,n)},p(t,e){t.title&&y(n,e.title)},d(t){t&&l(e)}}}function dt(t){var e;return{c(){e=p("img"),this.h()},l(t){m(e=$(t,"IMG",{class:!0,alt:!0,src:!0},!1)).forEach(l),this.h()},h(){g(e,"class","title"),g(e,"alt","logo"),g(e,"src",t.logo)},m(t,n){c(t,e,n)},p(t,n){t.logo&&g(e,"src",n.logo)},d(t){t&&l(e)}}}function ht(t){var e,n;return{c(){e=p("a"),n=p("img"),this.h()},l(t){var r=m(e=$(t,"A",{class:!0,href:!0},!1));m(n=$(r,"IMG",{alt:!0,src:!0},!1)).forEach(l),r.forEach(l),this.h()},h(){g(n,"alt","GitHub Octocat"),g(n,"src","https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"),g(e,"class","url"),g(e,"href",t.github)},m(t,r){c(t,e,r),s(e,n)},p(t,n){t.github&&g(e,"href",n.github)},d(t){t&&l(e)}}}function gt(t){var e;return{c(){e=p("p"),this.h()},l(t){m(e=$(t,"P",{class:!0},!1)).forEach(l),this.h()},h(){g(e,"class","caption")},m(n,r){c(n,e,r),e.innerHTML=t.caption},p(t,n){t.caption&&(e.innerHTML=n.caption)},d(t){t&&l(e)}}}function mt(t){var e,n;return{c(){e=p("p"),n=f("Loading tags..."),this.h()},l(t){var r=m(e=$(t,"P",{class:!0},!1));n=b(r,"Loading tags..."),r.forEach(l),this.h()},h(){g(e,"class","loading")},m(t,r){c(t,e,r),s(e,n)},d(t){t&&l(e)}}}function $t(t){var n,r=[{id:t.id},t.tag];let o={};for(var i=0;i<r.length;i+=1)o=e(o,r[i]);var a=new ut({props:o});return{c(){a.$$.fragment.c()},l(t){a.$$.fragment.l(t)},m(t,e){G(a,t,e),n=!0},p(t,e){var n=t.tags?S(r,[r[0],B(e.tag)]):{};a.$set(n)},i(t){n||(N(a.$$.fragment,t),n=!0)},o(t){J(a.$$.fragment,t),n=!1},d(t){U(a,t)}}}function bt(t){var e,n,r,o,i,a,h,w,_,j,E,O,x,P,T,M,I,D,k,A,H;function L(t,e){return e.logo?dt:ft}var S=L(0,t),B=S(t),G=t.github&&ht(t),U=t.caption&&gt(t);let V=Object.entries(t.tags),q=[];for(let e=0;e<V.length;e+=1)q[e]=$t(pt(t,V,e));const z=t=>J(q[t],1,1,()=>{q[t]=null});let F=null;return V.length||(F=mt()).c(),{c(){e=p("div"),n=p("p"),r=f("Age: "),o=f(t.age),i=f(" | Date: "),a=p("time"),h=f(t.date),w=d(),B.c(),_=d(),j=p("img"),E=d(),O=p("p"),x=d(),P=p("a"),T=f("Read more"),I=d(),G&&G.c(),D=d(),U&&U.c(),k=d(),A=p("div");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(s){var c=m(e=$(s,"DIV",{class:!0},!1)),u=m(n=$(c,"P",{class:!0},!1));r=b(u,"Age: "),o=b(u,t.age),i=b(u," | Date: ");var p=m(a=$(u,"TIME",{datetime:!0},!1));h=b(p,t.date),p.forEach(l),u.forEach(l),w=v(c),B.l(c),_=v(c),m(j=$(c,"IMG",{class:!0,alt:!0,src:!0},!1)).forEach(l),E=v(c),m(O=$(c,"P",{class:!0},!1)).forEach(l),x=v(c);var f=m(P=$(c,"A",{href:!0,class:!0},!1));T=b(f,"Read more"),f.forEach(l),I=v(c),G&&G.l(c),D=v(c),U&&U.l(c),k=v(c);var d=m(A=$(c,"DIV",{class:!0},!1));for(let t=0;t<q.length;t+=1)q[t].l(d);d.forEach(l),c.forEach(l),this.h()},h(){g(a,"datetime",t.date),g(n,"class","date"),g(j,"class","preview"),g(j,"alt","preview"),g(j,"src",t.preview),g(O,"class","description"),g(P,"href",M="project/"+t.id),g(P,"class","readmore"),g(A,"class","tags"),g(e,"class","project")},m(l,u){c(l,e,u),s(e,n),s(n,r),s(n,o),s(n,i),s(n,a),s(a,h),s(e,w),B.m(e,null),s(e,_),s(e,j),s(e,E),s(e,O),O.innerHTML=t.description,s(e,x),s(e,P),s(P,T),s(e,I),G&&G.m(e,null),s(e,D),U&&U.m(e,null),s(e,k),s(e,A);for(let t=0;t<q.length;t+=1)q[t].m(A,null);F&&F.m(A,null),H=!0},p(t,n){if(H&&!t.age||y(o,n.age),H&&!t.date||(y(h,n.date),g(a,"datetime",n.date)),S===(S=L(0,n))&&B?B.p(t,n):(B.d(1),(B=S(n))&&(B.c(),B.m(e,_))),H&&!t.preview||g(j,"src",n.preview),H&&!t.description||(O.innerHTML=n.description),H&&!t.id||M===(M="project/"+n.id)||g(P,"href",M),n.github?G?G.p(t,n):((G=ht(n)).c(),G.m(e,D)):G&&(G.d(1),G=null),n.caption?U?U.p(t,n):((U=gt(n)).c(),U.m(e,k)):U&&(U.d(1),U=null),t.tags){let e;for(V=Object.entries(n.tags),e=0;e<V.length;e+=1){const r=pt(n,V,e);q[e]?(q[e].p(t,r),N(q[e],1)):(q[e]=$t(r),q[e].c(),N(q[e],1),q[e].m(A,null))}for(C(),e=V.length;e<q.length;e+=1)z(e);R()}V.length?F&&(F.d(1),F=null):F||((F=mt()).c(),F.m(A,null))},i(t){if(!H){for(let t=0;t<V.length;t+=1)N(q[t]);H=!0}},o(t){q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)J(q[t]);H=!1},d(t){t&&l(e),B.d(),G&&G.d(),U&&U.d(),u(q,t),F&&F.d()}}}function vt(t,e,n){let{id:r,age:o,caption:i,date:a,description:s,github:c,logo:l,preview:u,title:p}=e,f={};return E(async function(){n("tags",f=await async function(t){return at.then(()=>it.getTags(t))}(r))}),t.$set=(t=>{"id"in t&&n("id",r=t.id),"age"in t&&n("age",o=t.age),"caption"in t&&n("caption",i=t.caption),"date"in t&&n("date",a=t.date),"description"in t&&n("description",s=t.description),"github"in t&&n("github",c=t.github),"logo"in t&&n("logo",l=t.logo),"preview"in t&&n("preview",u=t.preview),"title"in t&&n("title",p=t.title)}),{id:r,age:o,caption:i,date:a,description:s,github:c,logo:l,preview:u,title:p,tags:f}}class yt extends z{constructor(t){super(),q(this,t,vt,bt,a,["id","age","caption","date","description","github","logo","preview","title"])}}function wt(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function _t(t){var e,n;return{c(){e=p("p"),n=f("Loading projects..."),this.h()},l(t){var r=m(e=$(t,"P",{class:!0},!1));n=b(r,"Loading projects..."),r.forEach(l),this.h()},h(){g(e,"class","loading")},m(t,r){c(t,e,r),s(e,n)},d(t){t&&l(e)}}}function jt(t){var n,r=[{id:t.id},t.data];let o={};for(var i=0;i<r.length;i+=1)o=e(o,r[i]);var a=new yt({props:o});return{c(){a.$$.fragment.c()},l(t){a.$$.fragment.l(t)},m(t,e){G(a,t,e),n=!0},p(t,e){var n=t.projects?S(r,[r[0],B(e.data)]):{};a.$set(n)},i(t){n||(N(a.$$.fragment,t),n=!0)},o(t){J(a.$$.fragment,t),n=!1},d(t){U(a,t)}}}function Et(t){var e,n;let r=Object.entries(t.projects),o=[];for(let e=0;e<r.length;e+=1)o[e]=jt(wt(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});let a=null;return r.length||(a=_t()).c(),{c(){e=p("div");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){var n=m(e=$(t,"DIV",{id:!0},!1));for(let t=0;t<o.length;t+=1)o[t].l(n);n.forEach(l),this.h()},h(){g(e,"id","projects")},m(t,r){c(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);a&&a.m(e,null),n=!0},p(t,n){if(t.projects){let a;for(r=Object.entries(n.projects),a=0;a<r.length;a+=1){const i=wt(n,r,a);o[a]?(o[a].p(t,i),N(o[a],1)):(o[a]=jt(i),o[a].c(),N(o[a],1),o[a].m(e,null))}for(C(),a=r.length;a<o.length;a+=1)i(a);R()}r.length?a&&(a.d(1),a=null):a||((a=_t()).c(),a.m(e,null))},i(t){if(!n){for(let t=0;t<r.length;t+=1)N(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){t&&l(e),u(o,t),a&&a.d()}}}function Ot(t,e,n){let r=[];return E(async()=>{n("projects",r=await st())}),{projects:r}}class xt extends z{constructor(t){super(),q(this,t,Ot,Et,a,[])}}function Pt(e){var n,r=new xt({});return{c(){r.$$.fragment.c()},l(t){r.$$.fragment.l(t)},m(t,e){G(r,t,e),n=!0},p:t,i(t){n||(N(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){U(r,t)}}}class Tt extends z{constructor(t){super(),q(this,t,null,Pt,a,[])}}function Mt(e){var n,r,o,i;return{c(){n=p("h1"),r=f(e.title),o=d(),this.h()},l(t){var i=m(n=$(t,"H1",{},!1));r=b(i,e.title),i.forEach(l),o=v(t),this.h()},h(){i=new w(e.body,null)},m(t,e){c(t,n,e),s(n,r),c(t,o,e),i.m(t,e)},p(t,e){t.title&&y(r,e.title),t.body&&i.p(e.body)},i:t,o:t,d(t){t&&(l(n),l(o),i.d())}}}function It(t,e,n){let{id:r,age:o,body:i,caption:a,date:s,description:c,github:l,logo:u,preview:p,title:f}=e;return t.$set=(t=>{"id"in t&&n("id",r=t.id),"age"in t&&n("age",o=t.age),"body"in t&&n("body",i=t.body),"caption"in t&&n("caption",a=t.caption),"date"in t&&n("date",s=t.date),"description"in t&&n("description",c=t.description),"github"in t&&n("github",l=t.github),"logo"in t&&n("logo",u=t.logo),"preview"in t&&n("preview",p=t.preview),"title"in t&&n("title",f=t.title)}),{id:r,age:o,body:i,caption:a,date:s,description:c,github:l,logo:u,preview:p,title:f}}class Dt extends z{constructor(t){super(),q(this,t,It,Mt,a,["id","age","body","caption","date","description","github","logo","preview","title"])}}function kt(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function At(t){var e,n=new X({props:{title:"Jonathan Marsh - Project - "+t.data.title,path:"/project/"+t.id,component:Dt,props:t.data}});return{c(){n.$$.fragment.c()},l(t){n.$$.fragment.l(t)},m(t,r){G(n,t,r),e=!0},p(t,e){var r={};t.projects&&(r.title="Jonathan Marsh - Project - "+e.data.title),t.projects&&(r.path="/project/"+e.id),t.projects&&(r.props=e.data),n.$set(r)},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Ht(t){var e,n;let r=Object.entries(t.projects),o=[];for(let e=0;e<r.length;e+=1)o[e]=At(kt(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=h()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);c(t,e,r),n=!0},p(t,n){if(t.projects||t.Project){let a;for(r=Object.entries(n.projects),a=0;a<r.length;a+=1){const i=kt(n,r,a);o[a]?(o[a].p(t,i),N(o[a],1)):(o[a]=At(i),o[a].c(),N(o[a],1),o[a].m(e.parentNode,e))}for(C(),a=r.length;a<o.length;a+=1)i(a);R()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)N(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){u(o,t),t&&l(e)}}}function Lt(t,e,n){let r={};return E(async()=>{n("projects",r=await st())}),{projects:r}}class Ct extends z{constructor(t){super(),q(this,t,Lt,Ht,a,[])}}function Rt(e){var n,r,o,i;return{c(){n=p("h1"),r=f(e.title),o=d(),this.h()},l(t){var i=m(n=$(t,"H1",{},!1));r=b(i,e.title),i.forEach(l),o=v(t),this.h()},h(){i=new w(e.body,null)},m(t,e){c(t,n,e),s(n,r),c(t,o,e),i.m(t,e)},p(t,e){t.title&&y(r,e.title),t.body&&i.p(e.body)},i:t,o:t,d(t){t&&(l(n),l(o),i.d())}}}function Nt(t,e,n){let{title:r,body:o}=e;return t.$set=(t=>{"title"in t&&n("title",r=t.title),"body"in t&&n("body",o=t.body)}),{title:r,body:o}}class Jt extends z{constructor(t){super(),q(this,t,Nt,Rt,a,["title","body"])}}function St(t,e,n){const r=Object.create(t);return r.id=e[n][0],r.data=e[n][1],r}function Bt(t){var e,n=new X({props:{title:"Jonathan Marsh - Tag - "+t.data.title,path:"/tag/"+t.id,component:Jt,props:t.data}});return{c(){n.$$.fragment.c()},l(t){n.$$.fragment.l(t)},m(t,r){G(n,t,r),e=!0},p(t,e){var r={};t.tags&&(r.title="Jonathan Marsh - Tag - "+e.data.title),t.tags&&(r.path="/tag/"+e.id),t.tags&&(r.props=e.data),n.$set(r)},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Gt(t){var e,n;let r=Object.entries(t.tags),o=[];for(let e=0;e<r.length;e+=1)o[e]=Bt(St(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},l(t){for(let e=0;e<o.length;e+=1)o[e].l(t);e=h()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);c(t,e,r),n=!0},p(t,n){if(t.tags||t.Tag){let a;for(r=Object.entries(n.tags),a=0;a<r.length;a+=1){const i=St(n,r,a);o[a]?(o[a].p(t,i),N(o[a],1)):(o[a]=Bt(i),o[a].c(),N(o[a],1),o[a].m(e.parentNode,e))}for(C(),a=r.length;a<o.length;a+=1)i(a);R()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)N(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){u(o,t),t&&l(e)}}}function Ut(t,e,n){let r={};return E(async()=>{n("tags",r=await async function(){return at.then(()=>it.tags)}())}),{tags:r}}class Vt extends z{constructor(t){super(),q(this,t,Ut,Gt,a,[])}}function qt(e){var n,r;return{c(){n=p("h1"),r=f("Privacy")},l(t){var e=m(n=$(t,"H1",{},!1));r=b(e,"Privacy"),e.forEach(l)},m(t,e){c(t,n,e),s(n,r)},p:t,i:t,o:t,d(t){t&&l(n)}}}class zt extends z{constructor(t){super(),q(this,t,null,qt,a,[])}}function Ft(e){var n,r;return{c(){n=p("h1"),r=f("Sitemap")},l(t){var e=m(n=$(t,"H1",{},!1));r=b(e,"Sitemap"),e.forEach(l)},m(t,e){c(t,n,e),s(n,r)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Kt extends z{constructor(t){super(),q(this,t,null,Ft,a,[])}}function Qt(e){var n,r,o,i,a,s=new tt({props:{defaultTitle:"Jonathan Marsh - Home",defaultComponent:Tt}}),u=new X({props:{title:"Jonathan Marsh - Privacy",path:"/privacy",component:zt}}),p=new X({props:{title:"Jonathan Marsh - Sitemap",path:"/sitemap",component:Kt}}),f=new Ct({}),h=new Vt({});return{c(){s.$$.fragment.c(),n=d(),u.$$.fragment.c(),r=d(),p.$$.fragment.c(),o=d(),f.$$.fragment.c(),i=d(),h.$$.fragment.c()},l(t){s.$$.fragment.l(t),n=v(t),u.$$.fragment.l(t),r=v(t),p.$$.fragment.l(t),o=v(t),f.$$.fragment.l(t),i=v(t),h.$$.fragment.l(t)},m(t,e){G(s,t,e),c(t,n,e),G(u,t,e),c(t,r,e),G(p,t,e),c(t,o,e),G(f,t,e),c(t,i,e),G(h,t,e),a=!0},p:t,i(t){a||(N(s.$$.fragment,t),N(u.$$.fragment,t),N(p.$$.fragment,t),N(f.$$.fragment,t),N(h.$$.fragment,t),a=!0)},o(t){J(s.$$.fragment,t),J(u.$$.fragment,t),J(p.$$.fragment,t),J(f.$$.fragment,t),J(h.$$.fragment,t),a=!1},d(t){U(s,t),t&&l(n),U(u,t),t&&l(r),U(p,t),t&&l(o),U(f,t),t&&l(i),U(h,t)}}}return new class extends z{constructor(t){super(),q(this,t,null,Qt,a,[])}}({target:document.body.querySelector("app"),hydrate:!0})}();
//# sourceMappingURL=bundle.js.map