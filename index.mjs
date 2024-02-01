// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-array@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s){var e,a;if(!r(s))throw new TypeError(t("invalid argument. Must provide an array of arrays. Value: `%s`.",s));for(e={},a=0;a<s.length;a++)e[s[a][0]]=s[a][1];return e}export{s as default};
//# sourceMappingURL=index.mjs.map
