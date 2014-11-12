'use strict';

var child = require('child_process');
var path = require('path');
var fs = require('fs');
var concat = require('concat-stream');
var assert = require('assert');

describe('espower-cli', function () {
    beforeEach(function () {
        this.executable = path.join(__dirname, '..', 'bin', 'cmd.js');
    });
    it('take filename as an argument', function (done) {
        var expected = fs.readFileSync('test/expected/example.js', 'utf8');
        var proc = child.spawn(this.executable, ['test/fixtures/example.js']);
        proc.stdout.pipe(concat(function (output) {
            assert.equal(output.toString('utf8'), expected);
            done();
        }));
    });
});
