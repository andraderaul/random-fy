if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SmrQ6IXhZ6by0OgLkMkTK/_buildManifest.js",revision:"05400437ed374cf59ff81dd7d67decad"},{url:"/_next/static/SmrQ6IXhZ6by0OgLkMkTK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/283-f7dfb11a703fcb4d.js",revision:"f7dfb11a703fcb4d"},{url:"/_next/static/chunks/408-e79c66578712505f.js",revision:"e79c66578712505f"},{url:"/_next/static/chunks/670-845a0760dbf8eb59.js",revision:"845a0760dbf8eb59"},{url:"/_next/static/chunks/ad7f724d-94baee9a2d394f8b.js",revision:"94baee9a2d394f8b"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-c7e14abb98145872.js",revision:"c7e14abb98145872"},{url:"/_next/static/chunks/pages/_app-34ce576b453675b1.js",revision:"34ce576b453675b1"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-68fad99551e7f9af.js",revision:"68fad99551e7f9af"},{url:"/_next/static/chunks/pages/index-11b9fa49b0051830.js",revision:"11b9fa49b0051830"},{url:"/_next/static/chunks/pages/logout-523c76f4e467f8ac.js",revision:"523c76f4e467f8ac"},{url:"/_next/static/chunks/pages/search-e30b4dbbacb0074a.js",revision:"e30b4dbbacb0074a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/0a4efb1d34d90b74.css",revision:"0a4efb1d34d90b74"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/Spotify_Icon_RGB_Black.png",revision:"b818d523d8560f33bcf5d6628f0ffa73"},{url:"/img/Spotify_Icon_RGB_Green.png",revision:"7a34cf4279c6f8f8c97a1250ccce40a4"},{url:"/img/Spotify_Icon_RGB_White.png",revision:"cc4e2784f47909e55d940c014cbef882"},{url:"/img/Spotify_Logo_RGB_Black.png",revision:"1f61ed6f58e8118290d52e89c82d8a6b"},{url:"/img/Spotify_Logo_RGB_Green.png",revision:"11dc437ab8ef0c32289c092083d20068"},{url:"/img/Spotify_Logo_RGB_White.png",revision:"31bad8d4fc4413d54f8c19930d3739b9"},{url:"/img/bg.jpg",revision:"3b7598ff7405c7c4e15da73b004e5550"},{url:"/img/icon-192.png",revision:"5067d1b9e1f2d4be0dd9f7460648ad7d"},{url:"/img/icon-512.png",revision:"cc4adf278fc81c0f932cfd48da8eea20"},{url:"/locales/en/about.json",revision:"56fa4125f9180a02c5b1f62eef58420a"},{url:"/locales/en/common.json",revision:"ed5b6723d78c62c78ab6ba31c7125a4a"},{url:"/locales/en/footer.json",revision:"2b0b87b456ebf024d9ee7397bd472ae4"},{url:"/locales/en/login.json",revision:"f34a7968389efaaaf84bdbecd0550c90"},{url:"/locales/en/logout.json",revision:"be814650ac1542a58e4acd2977aac737"},{url:"/locales/pt/about.json",revision:"4e130a58d073591a9968890caa41a544"},{url:"/locales/pt/common.json",revision:"fc76da1242d4484284004261ac91d297"},{url:"/locales/pt/footer.json",revision:"b9a4e16c6b3acddebb88c060fb962611"},{url:"/locales/pt/login.json",revision:"a273ae3ee443c7682f13a274f0d52679"},{url:"/locales/pt/logout.json",revision:"73ffc35992fbc6748e3d67d3391ee0fd"},{url:"/manifest.json",revision:"b34c7aae114d42dd93f6b77e5b05b04b"},{url:"/screenshots/1.png",revision:"91d3d48c0fcc29c20813ebc8d2b50644"},{url:"/screenshots/2.png",revision:"6f5fe15c8f3bbbe2dcbfdfab76d5b1ac"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
