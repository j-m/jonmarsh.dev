!function(){"use strict";const e=1679321190527,s=`cache${e}`,i=["/client/client.5c3da37f.js","/client/inject_styles.803b7e80.js","/client/index.cc563226.js","/client/policies.b349dccf.js","/client/index.9acab2fe.js","/client/tags.1e0e3313.js","/client/project.226001d0.js","/client/tag.76599a13.js","/client/_slug_.6855fa2f.js","/client/sitemap.70b39e54.js","/client/_slug_.26db771d.js"].concat(["/service-worker-index.html","/demo/pulfrich/head.png","/demo/pulfrich/images/bird.png","/demo/pulfrich/images/floor.png","/demo/pulfrich/images/forest1.pdn","/demo/pulfrich/images/forest1.png","/demo/pulfrich/images/forest2.pdn","/demo/pulfrich/images/forest2.png","/demo/pulfrich/images/forest3.png","/demo/pulfrich/images/forest4.png","/demo/pulfrich/images/grass1.png","/demo/pulfrich/images/grass2.png","/demo/pulfrich/images/mountainnew.png","/demo/pulfrich/images/retry1.png","/demo/pulfrich/images/retry2.png","/demo/pulfrich/images/rocks.png","/demo/pulfrich/images/totem.png","/demo/pulfrich/images/totem1.png","/demo/pulfrich/images/totem2.png","/demo/pulfrich/images/totem3.png","/demo/pulfrich/index.css","/demo/pulfrich/index.html","/demo/pulfrich/index.js","/demo/quiz/Quiz.html","/demo/quiz/Quiz.swf","/demo/rocket/Rocket.swf","/demo/rocket/index.html","/demo/the_adventure/CSS/Style.css","/demo/the_adventure/Game.fla","/demo/the_adventure/Game.swf","/demo/the_adventure/Game1.swf","/demo/the_adventure/Game_Level2.swf","/demo/the_adventure/index.html","/favicon.ico","/images/favicon/android-chrome-192x192.png","/images/favicon/android-chrome-512x512.png","/images/favicon/apple-touch-icon.png","/images/favicon/favicon-16x16.png","/images/favicon/favicon-32x32.png","/images/icons/demo.svg","/images/icons/read-more.svg","/images/lines.png","/images/logos/browsability.svg","/images/logos/dle.png","/images/logos/faktnews.svg","/images/logos/github.png","/images/logos/linkedin.png","/images/logos/oaty.jpg","/images/logos/pulfrich-bird.png","/images/logos/stackoverflow.png","/images/logos/tagable.png","/images/me.jp2","/images/me.png","/images/me.webp","/images/openmoji/1F393.svg","/images/openmoji/1F50D.svg","/images/openmoji/E0A9.svg","/images/openmoji/E24E.svg","/images/openmoji/E250.svg","/images/previews/GR.png","/images/previews/RTP.png","/images/previews/adventure.png","/images/previews/asteroid-run.png","/images/previews/csmaze.png","/images/previews/encrypt.png","/images/previews/faktnews.png","/images/previews/jonhash.gif","/images/previews/minesweeper.png","/images/previews/pulfrich-bird.png","/images/previews/tank-trouble.png","/images/website-preview.png","/robots.txt","/site.webmanifest","/sitemap.xml"]),a=new Set(i);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const i of e)i!==s&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const i=new URL(s.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&a.has(i.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open(`offline${e}`).then((async e=>{try{const i=await fetch(s.request);return e.put(s.request,i.clone()),i}catch(i){const a=await e.match(s.request);if(a)return a;throw i}})))))}))}();
