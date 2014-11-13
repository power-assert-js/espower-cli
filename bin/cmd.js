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

var minimist = require('minimist');
var argv = minimist(process.argv.slice(2), {
    string: [
        'config'
    ],
    alias: {
        c: 'config'
    },
    default: {
        config: null
    }
});

var file = argv._[0];
var input, filepath, config;
if (file && file !== '-') {
    filepath = file;
    input = fs.createReadStream(file);
} else {
    input = process.stdin;
} 

if (argv.config) {
    config = JSON.parse(fs.readFileSync(argv.config, 'utf8'));
}

input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8'), filepath, config));
}));
