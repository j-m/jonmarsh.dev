!function(){"use strict";const e=1669595952955,s=`cache${e}`,i=["/client/client.76dbcde8.js","/client/inject_styles.803b7e80.js","/client/index.806d512e.js","/client/policies.6dfc6ec0.js","/client/index.85a9a762.js","/client/tags.1e0e3313.js","/client/project.4f1bdd74.js","/client/tag.d493e482.js","/client/_slug_.54424311.js","/client/sitemap.b7f4b7e5.js","/client/_slug_.273df454.js"].concat(["/service-worker-index.html","/demo/pulfrich/head.png","/demo/pulfrich/images/bird.png","/demo/pulfrich/images/floor.png","/demo/pulfrich/images/forest1.pdn","/demo/pulfrich/images/forest1.png","/demo/pulfrich/images/forest2.pdn","/demo/pulfrich/images/forest2.png","/demo/pulfrich/images/forest3.png","/demo/pulfrich/images/forest4.png","/demo/pulfrich/images/grass1.png","/demo/pulfrich/images/grass2.png","/demo/pulfrich/images/mountainnew.png","/demo/pulfrich/images/retry1.png","/demo/pulfrich/images/retry2.png","/demo/pulfrich/images/rocks.png","/demo/pulfrich/images/totem.png","/demo/pulfrich/images/totem1.png","/demo/pulfrich/images/totem2.png","/demo/pulfrich/images/totem3.png","/demo/pulfrich/index.css","/demo/pulfrich/index.html","/demo/pulfrich/index.js","/demo/quiz/Quiz.html","/demo/quiz/Quiz.swf","/demo/rocket/Rocket.swf","/demo/rocket/index.html","/demo/the_adventure/CSS/Style.css","/demo/the_adventure/Game.fla","/demo/the_adventure/Game.swf","/demo/the_adventure/Game1.swf","/demo/the_adventure/Game_Level2.swf","/demo/the_adventure/index.html","/favicon.ico","/images/favicon/android-chrome-192x192.png","/images/favicon/android-chrome-512x512.png","/images/favicon/apple-touch-icon.png","/images/favicon/favicon-16x16.png","/images/favicon/favicon-32x32.png","/images/icons/demo.svg","/images/icons/read-more.svg","/images/lines.png","/images/logos/browsability.svg","/images/logos/dle.png","/images/logos/faktnews.svg","/images/logos/github.png","/images/logos/linkedin.png","/images/logos/oaty.jpg","/images/logos/pulfrich-bird.png","/images/logos/stackoverflow.png","/images/logos/tagable.png","/images/me.jp2","/images/me.png","/images/me.webp","/images/openmoji/1F393.svg","/images/openmoji/1F50D.svg","/images/openmoji/E0A9.svg","/images/openmoji/E24E.svg","/images/openmoji/E250.svg","/images/previews/GR.png","/images/previews/RTP.png","/images/previews/adventure.png","/images/previews/asteroid-run.png","/images/previews/csmaze.png","/images/previews/encrypt.png","/images/previews/faktnews.png","/images/previews/jonhash.gif","/images/previews/minesweeper.png","/images/previews/pulfrich-bird.png","/images/previews/tank-trouble.png","/images/website-preview.png","/robots.txt","/site.webmanifest","/sitemap.xml"]),n=new Set(i);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(i))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const i of e)i!==s&&await caches.delete(i);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const i=new URL(s.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&n.has(i.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open(`offline${e}`).then((async e=>{try{const i=await fetch(s.request);return e.put(s.request,i.clone()),i}catch(i){const n=await e.match(s.request);if(n)return n;throw i}})))))}))}();
