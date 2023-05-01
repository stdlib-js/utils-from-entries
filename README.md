<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# objectFromEntries

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an object from key-value pairs.



<section class="usage">

## Usage

```javascript
import objectFromEntries from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-from-entries@esm/index.mjs';
```

#### objectFromEntries( entries )

Returns an `object` created from `[key, value]` pairs.

```javascript
var entries = [ ['a', 1], ['b', 2] ];

var obj = objectFromEntries( entries );
// returns { 'a': 1, 'b': 2 }
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectEntries from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-entries@esm/index.mjs';
import objectFromEntries from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-from-entries@esm/index.mjs';

var obj1 = {
    'beep': 'boop',
    'a': {
        'b': 'c'
    },
    'foo': [ 'bar' ]
};

var entries = objectEntries( obj1 );
// e.g., returns [ ['beep', 'boop'], ['a', {'b':'c'}], ['foo', [ 'bar' ]] ]

var obj2 = objectFromEntries( entries );
/* returns
    {
        'beep': 'boop',
        'a': {
            'b': 'c'
        },
        'foo': [ 'bar' ]
    }
*/

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-entries`][@stdlib/utils/entries]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property key-value pairs.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-from-entries.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-from-entries

[test-image]: https://github.com/stdlib-js/utils-from-entries/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-from-entries/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-from-entries/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-from-entries?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-from-entries.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-from-entries/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-from-entries/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-from-entries/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-from-entries/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-from-entries/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-from-entries/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/entries]: https://github.com/stdlib-js/utils-entries/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
