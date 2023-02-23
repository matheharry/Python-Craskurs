var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,o,a,i,u,l,f,s,d,p,c,h,v,g,b,m,y,j={899:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(5),t.e(509)]).then((()=>()=>t(509))),"./mimeExtension":()=>Promise.all([t.e(5),t.e(509)]).then((()=>()=>t(509))),"./style":()=>t.e(643).then((()=>()=>t(643)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},w={};function _(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,exports:{}};return j[e].call(t.exports,t,t.exports,_),t.exports}_.m=j,_.c=w,_.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return _.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,_.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);_.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,_.d(o,a),o},_.d=(e,r)=>{for(var t in r)_.o(r,t)&&!_.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((r,t)=>(_.f[t](e,r),r)),[])),_.u=e=>e+"."+{5:"b6faf5a50cc2e1a35fc3",62:"8fb305ac8706f7626d62",509:"189bf4578ec79af7edd6",643:"d259aa42aae9014c0d73"}[e]+".js?v="+{5:"b6faf5a50cc2e1a35fc3",62:"8fb305ac8706f7626d62",509:"189bf4578ec79af7edd6",643:"d259aa42aae9014c0d73"}[e],_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@jupyterlab/geojson-extension:",_.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){i=s;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,_.nc&&i.setAttribute("nonce",_.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{_.S={};var e={},r={};_.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];_.o(_.S,t)||(_.S[t]={});var a=_.S[t],i="@jupyterlab/geojson-extension",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("@jupyterlab/geojson-extension","3.3.1",(()=>Promise.all([_.e(5),_.e(509)]).then((()=>()=>_(509))))),u("leaflet","1.7.1",(()=>_.e(62).then((()=>()=>_(608)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var r=_.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var a=[];for(o=1;o<e.length;o++){var u=e[o];a.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?a.pop()+" "+a.pop():i(u))}return l();function l(){return a.pop().replace(/^\((.+)\)$/,"$1")}},u=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,l=!0;;i++,a++){var f,s,d=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(s=(typeof(f=r[a]))[0]))return!l||("u"==d?i>t&&!n:""==d!=n);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(i<=t){if(f!=e[i])return!1}else{if(n?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=d&&"n"!=d){if(n||i<=t)return!1;l=!1,i--}else{if(i<=t||s<d!=n)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,i--)}}var p=[],c=p.pop.bind(p);for(a=1;a<e.length;a++){var h=e[a];p.push(1==h?c()|c():2==h?c()&c():h?u(h,r):!c())}return!!c()},l=(e,r)=>{var t=_.S[e];if(!t||!_.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",d=(e,r,t,n)=>{var o=f(e,t);return u(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,o,n)),c(e[t][o])},p=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!u(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=e=>(e.loaded=1,e.get()),v=(h=e=>function(r,t,n,o){var a=_.I(r);return a&&a.then?a.then(e.bind(e,r,_.S[r],t,n,o)):e(r,_.S[r],t,n,o)})(((e,r,t,n)=>(l(e,t),d(r,0,t,n)))),g=h(((e,r,t,n,o)=>{var a=r&&_.o(r,t)&&p(r,t,n);return a?c(a):o()})),b={},m={169:()=>v("default","@jupyterlab/apputils",[1,3,5,0]),918:()=>v("default","@lumino/algorithm",[1,1,9,0]),948:()=>g("default","leaflet",[1,1,5,0],(()=>_.e(62).then((()=>()=>_(608))))),978:()=>v("default","@jupyterlab/ui-components",[1,3,5,0]),992:()=>v("default","@lumino/widgets",[1,1,33,0])},y={509:[169,918,948,978,992]},_.f.consumes=(e,r)=>{_.o(y,e)&&y[e].forEach((e=>{if(_.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,_.m[e]=t=>{delete _.c[e],t.exports=r()}},n=r=>{delete b[e],_.m[e]=t=>{throw delete _.c[e],r}};try{var o=m[e]();o.then?r.push(b[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={103:0};_.f.j=(r,t)=>{var n=_.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=_.p+_.u(r),i=new Error;_.l(a,(t=>{if(_.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)_.o(i,n)&&(_.m[n]=i[n]);u&&u(_)}for(r&&r(t);l<a.length;l++)o=a[l],_.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_jupyterlab_geojson_extension=self.webpackChunk_jupyterlab_geojson_extension||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x=_(899);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyterlab/geojson-extension"]=x})();