if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const t=e=>s(e,r),c={module:{uri:r},exports:d,require:t};i[r]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(o(...e),d)))}}define(["./workbox-92f81961"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"1594838ed42b424ddd5d48b70ae046b5"},{url:"assets/index-4e1956fb.js",revision:null},{url:"assets/index-758e5c5b.css",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/worker-1779ba70.js",revision:null},{url:"favicon.ico",revision:"cef0d0eabdbe94c9c50c4e393be3ddf1"},{url:"index.html",revision:"9dd43fd24ffb9903b7abf9769cbd6030"},{url:"manifest.webmanifest",revision:"f24ce3c1fb522b5332a47e614f4ce030"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"1594838ed42b424ddd5d48b70ae046b5"},{url:"favicon.ico",revision:"cef0d0eabdbe94c9c50c4e393be3ddf1"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"f24ce3c1fb522b5332a47e614f4ce030"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
