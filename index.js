// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,i=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:void 0,a="function"==typeof t?t.toStringTag:"",n=r&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,o,s,c;if(null==r)return e.call(r);n=r[a],c=a,t=null!=(s=r)&&i.call(s,c);try{r[a]=void 0}catch(i){return e.call(r)}return o=e.call(r),t?r[a]=n:delete r[a],o}:function(r){return e.call(r)},o=Array.isArray?Array.isArray:function(r){return"[object Array]"===n(r)};function s(r){return"number"==typeof r}function c(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function p(r,e,i){var t=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=i?r+c(a):c(a)+r,t&&(r="-"+r)),r}var l=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,i,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,t=parseInt(i,10),!isFinite(t)){if(!s(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(i=(-t).toString(e),r.precision&&(i=p(i,r.precision,r.padRight)),i="-"+i):(i=t.toString(e),t||r.precision?r.precision&&(i=p(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===f.call(r.specifier)?f.call(i):l.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function g(r){return"string"==typeof r}var d=Math.abs,h=String.prototype.toLowerCase,y=String.prototype.toUpperCase,w=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,m=/^(\d+)$/,x=/^(\d+)e/,E=/\.0$/,S=/\.0*e/,k=/(\..*[^0])0*e/;function T(r){var e,i,t=parseFloat(r.arg);if(!isFinite(t)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+i);t=r.arg}switch(r.specifier){case"e":case"E":i=t.toExponential(r.precision);break;case"f":case"F":i=t.toFixed(r.precision);break;case"g":case"G":d(t)<1e-4?((e=r.precision)>0&&(e-=1),i=t.toExponential(e)):i=t.toPrecision(r.precision),r.alternate||(i=w.call(i,k,"$1e"),i=w.call(i,S,"e"),i=w.call(i,E,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=w.call(i,b,"e+0$1"),i=w.call(i,v,"e-0$1"),r.alternate&&(i=w.call(i,m,"$1."),i=w.call(i,x,"$1.e")),t>=0&&r.sign&&(i=r.sign+i),i=r.specifier===y.call(r.specifier)?y.call(i):h.call(i)}function V(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function A(r,e,i){var t=e-r.length;return t<0?r:r=i?r+V(t):V(t)+r}var $=String.fromCharCode,F=isNaN,I=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,i,t,a,n,o,s,c,l;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",s=1,c=0;c<r.length;c++)if(g(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=C(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(a=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,F(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,F(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!F(t.arg)){if((n=parseInt(t.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=F(n)?String(t.arg):$(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=T(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=p(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Z(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function O(r){var e,i,t,a;for(i=[],a=0,t=j.exec(r);t;)(e=r.slice(a,j.lastIndex-t[0].length)).length&&i.push(e),i.push(Z(t)),a=j.lastIndex,t=j.exec(r);return(e=r.slice(a)).length&&i.push(e),i}function W(r){return"string"==typeof r}function L(r){var e,i;if(!W(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[O(r)],i=1;i<arguments.length;i++)e.push(arguments[i]);return R.apply(null,e)}var M=function(r){if("function"!=typeof r)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var i,t;if(!o(e))return!1;if(0===(i=e.length))return!1;for(t=0;t<i;t++)if(!1===r(e[t]))return!1;return!0}}(o);return function(r){var e,i;if(!M(r))throw new TypeError(L("invalid argument. Must provide an array of arrays. Value: `%s`.",r));for(e={},i=0;i<r.length;i++)e[r[i][0]]=r[i][1];return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).objectFromEntries=e();
//# sourceMappingURL=index.js.map
