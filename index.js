// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol.toStringTag:"",o=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,i,f,u,l;if(null==t)return r.call(t);i=t[n],l=n,o=null!=(u=t)&&e.call(u,l);try{t[n]=void 0}catch(e){return r.call(t)}return f=r.call(t),o?t[n]=i:delete t[n],f}:function(t){return r.call(t)},i=Array.isArray?Array.isArray:function(t){return"[object Array]"===o(t)},f=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!i(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(i);return function(t){var r,e;if(!f(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("0jsBx",t));for(r={},e=0;e<t.length;e++)r[t[e][0]]=t[e][1];return r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).objectFromEntries=r();
//# sourceMappingURL=index.js.map