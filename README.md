espower-cli
================================

Command line tool for power-assert

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


DESCRIPTION
---------------------------------------

espower-cli provides an `espower` command which transforms test code for [power-assert](https://github.com/power-assert-js/power-assert).


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/power-assert-js/espower-cli/blob/master/CHANGELOG.md)


USAGE
---------------------------------------

```
espower test/some_test.js > build/test/some_test.js 
```

### sourcemaps

`espower-cli` appends SourceMap comment at the bottom of generated code. If you want to separate the comment off, use [exorcist](https://github.com/thlorenz/exorcist).

```
espower test/some_test.js | exorcist build/test/some_test.js.map > build/test/some_test.js 
```


OPTIONS
---------------------------------------

### --config, -c

Specify JSON file containing options for `espower` module (See [espower.defaultOptions()](https://github.com/power-assert-js/espower#var-options--espowerdefaultoptions))

```
espower --config test/espower_config.json test/some_test.js > build/test/some_test.js 
```

### --incoming-sourcemap, -s

Specify SourceMap file

```
espower --incoming-sourcemap test/some_test.js.map test/some_test.js > build/test/some_test.js 
```


INSTALL
---------------------------------------

### via npm

Install locally,

    $ npm install --save-dev espower-cli

and/or globally.

    $ npm install -g espower-cli


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/2014-2016) license.


[npm-url]: https://npmjs.org/package/espower-cli
[npm-image]: https://badge.fury.io/js/espower-cli.svg

[travis-url]: https://travis-ci.org/power-assert-js/espower-cli
[travis-image]: https://secure.travis-ci.org/power-assert-js/espower-cli.svg?branch=master

[depstat-url]: https://gemnasium.com/power-assert-js/espower-cli
[depstat-image]: https://gemnasium.com/power-assert-js/espower-cli.svg

[license-url]: http://twada.mit-license.org/2014-2016
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
