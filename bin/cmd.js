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
        'config',
        'incoming-sourcemap'
    ],
    alias: {
        c: 'config',
        s: 'incoming-sourcemap'
    },
    default: {
        config: null,
        "incoming-sourcemap": null
    }
});

var file = argv._[0];
var input, filepath;

if (file && file !== '-') {
    filepath = file;
    input = fs.createReadStream(file);
} else {
    input = process.stdin;
} 

var config = argv.config ? JSON.parse(fs.readFileSync(argv.config, 'utf8')) : {};

if (argv['incoming-sourcemap']) {
    config.sourceMap = JSON.parse(fs.readFileSync(argv['incoming-sourcemap'], 'utf8'));
}

input.pipe(concat(function(buf) {
    console.log(transform(buf.toString('utf8'), filepath, config));
}));
