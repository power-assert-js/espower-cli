#!/usr/bin/env node

/**
 * espower-cli
 *
 * https://github.com/twada/espower-cli
 *
 * Copyright (c) 2014 Takuto Wada
 * Licensed under the MIT license.
 *   http://twada.mit-license.org/
 */
'use strict';

var transform = require('espower-source');
var concat = require('concat-stream');
var fs = require('fs');
var file = process.argv[2];
var input, filepath;

if (file && file !== '-') {
    // filepath = fs.realpathSync(file);
    filepath = file;
    input = fs.createReadStream(file);
} else {
    input = process.stdin;
} 
input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8'), filepath));
}));
