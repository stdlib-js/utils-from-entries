// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=r,a=t;var e=function(r){var t,e;if(!s(r))throw new TypeError(a("invalid argument. Must provide an array of arrays. Value: `%s`.",r));for(t={},e=0;e<r.length;e++)t[r[e][0]]=r[e][1];return t};export{e as default};
//# sourceMappingURL=index.mjs.map
