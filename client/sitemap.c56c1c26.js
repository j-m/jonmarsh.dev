import{S as t,i as e,s as l,e as s,t as a,a as r,b as n,f as o,g as h,d as i,c,h as f,j as u,k as p,B as m,y as d,q as g,n as v}from"./client.2896826e.js";import{t as j}from"./tags.d8eda363.js";function E(t,e,l){const s=t.slice();return s[6]=e[l],s}function b(t,e,l){const s=t.slice();return s[2]=e[l][0],s[3]=e[l][1],s}function k(t){let e,l,r,c,d=t[6].title+"";return{c(){e=s("li"),l=s("a"),r=a(d),this.h()},l(t){e=n(t,"LI",{});var s=o(e);l=n(s,"A",{href:!0,class:!0});var a=o(l);r=h(a,d),a.forEach(i),s.forEach(i),this.h()},h(){f(l,"href",c=t[6].path),f(l,"class","svelte-1j05vq5")},m(t,s){u(t,e,s),p(e,l),p(l,r)},p(t,e){1&e&&d!==(d=t[6].title+"")&&m(r,d),1&e&&c!==(c=t[6].path)&&f(l,"href",c)},d(t){t&&i(e)}}}function q(t){let e,l,g,v,j,b,q=t[2]+"",S=t[3],M=[];for(let e=0;e<S.length;e+=1)M[e]=k(E(t,S,e));return{c(){e=s("div"),l=s("h2"),g=a(q),v=r(),j=s("ul");for(let t=0;t<M.length;t+=1)M[t].c();b=r(),this.h()},l(t){e=n(t,"DIV",{class:!0});var s=o(e);l=n(s,"H2",{});var a=o(l);g=h(a,q),a.forEach(i),v=c(s),j=n(s,"UL",{});var r=o(j);for(let t=0;t<M.length;t+=1)M[t].l(r);r.forEach(i),b=c(s),s.forEach(i),this.h()},h(){f(e,"class","column svelte-1j05vq5")},m(t,s){u(t,e,s),p(e,l),p(l,g),p(e,v),p(e,j);for(let t=0;t<M.length;t+=1)M[t].m(j,null);p(e,b)},p(t,e){if(1&e&&q!==(q=t[2]+"")&&m(g,q),1&e){let l;for(S=t[3],l=0;l<S.length;l+=1){const s=E(t,S,l);M[l]?M[l].p(s,e):(M[l]=k(s),M[l].c(),M[l].m(j,null))}for(;l<M.length;l+=1)M[l].d(1);M.length=S.length}},d(t){t&&i(e),d(M,t)}}}function S(t){let e,l,m,j,E,k=Object.entries(t[0]),S=[];for(let e=0;e<k.length;e+=1)S[e]=q(b(t,k,e));return{c(){e=r(),l=s("h1"),m=a("Sitemap"),j=r(),E=s("div");for(let t=0;t<S.length;t+=1)S[t].c();this.h()},l(t){g('[data-svelte="svelte-u4bjeq"]',document.head).forEach(i),e=c(t),l=n(t,"H1",{});var s=o(l);m=h(s,"Sitemap"),s.forEach(i),j=c(t),E=n(t,"DIV",{class:!0});var a=o(E);for(let t=0;t<S.length;t+=1)S[t].l(a);a.forEach(i),this.h()},h(){document.title="Jonathan Marsh - Sitemap",f(E,"class","row svelte-1j05vq5")},m(t,s){u(t,e,s),u(t,l,s),p(l,m),u(t,j,s),u(t,E,s);for(let t=0;t<S.length;t+=1)S[t].m(E,null)},p(t,[e]){if(1&e){let l;for(k=Object.entries(t[0]),l=0;l<k.length;l+=1){const s=b(t,k,l);S[l]?S[l].p(s,e):(S[l]=q(s),S[l].c(),S[l].m(E,null))}for(;l<S.length;l+=1)S[l].d(1);S.length=k.length}},i:v,o:v,d(t){t&&i(e),t&&i(l),t&&i(j),t&&i(E),d(S,t)}}}function M(t,e,l){var s={Main:[{path:".",title:"Home"},{path:"project",title:"Projects"},{path:"policies",title:"Policies"},{path:"sitemap",title:"Sitemap"}]};function a(t,e,a){s[t]?s[t].push({path:e,title:a}):l(0,s[t]=[{path:e,title:a}],s)}for(let[t,e]of Object.entries(j.tags))a("Tags","tag/"+t,e.data.title);for(let[t,e]of Object.entries(j.resources))e.links&&(e.links.demo&&a("Demo",e.links.demo,e.title),e.links.readMore&&a("Read More","project/"+t,e.title));return[s]}export default class extends t{constructor(t){super(),e(this,t,M,S,l,{})}}