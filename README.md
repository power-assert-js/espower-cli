espower-cli
================================

Command line tool for power-assert

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


DESCRIPTION
---------------------------------------

espower-cli provides an `espower` command which transforms test code for [power-assert](http://github.com/twada/power-assert).


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/twada/espower-cli/blob/master/CHANGELOG.md)


USAGE
---------------------------------------

```
espower test/some_test.js > build/test/some_test.js 
```


OPTIONS
---------------------------------------

### --config, -c

Specify JSON file containing options for `espower` module (See [espower.defaultOptions()](https://github.com/twada/espower#var-options--espowerdefaultoptions))

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
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.


[npm-url]: https://npmjs.org/package/espower-cli
[npm-image]: https://badge.fury.io/js/espower-cli.svg

[travis-url]: http://travis-ci.org/twada/espower-cli
[travis-image]: https://secure.travis-ci.org/twada/espower-cli.svg?branch=master

[depstat-url]: https://gemnasium.com/twada/espower-cli
[depstat-image]: https://gemnasium.com/twada/espower-cli.svg

[license-url]: http://twada.mit-license.org/
[license-image]: http://img.shields.io/badge/license-MIT-brightgreen.svg
