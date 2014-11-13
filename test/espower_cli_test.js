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
    describe('config option', function () {
        beforeEach(function () {
            this.executable = path.join(__dirname, '..', 'bin', 'cmd.js');
            var expected = fs.readFileSync('test/expected/customized.js', 'utf8');
            this.assertOutput = function (args, done) {
                var proc = child.spawn(this.executable, args);
                proc.stdout.pipe(concat(function (output) {
                    assert.equal(output.toString('utf8'), expected);
                    done();
                }));
            };
        });
        it('--config option takes JSON file', function (done) {
            this.assertOutput(['--config', 'test/customized_config.json', 'test/fixtures/customized.js'], done);
        });
        it('--config option at the end of arguments', function (done) {
            this.assertOutput(['test/fixtures/customized.js', '--config', 'test/customized_config.json'], done);
        });
        it('short option -c', function (done) {
            this.assertOutput(['-c', 'test/customized_config.json', 'test/fixtures/customized.js'], done);
        });
        it('-c option at the end of arguments', function (done) {
            this.assertOutput(['test/fixtures/customized.js', '-c', 'test/customized_config.json'], done);
        });
        it('--config=JSONfile style', function (done) {
            this.assertOutput(['--config=test/customized_config.json', 'test/fixtures/customized.js'], done);
        });
        it('--config=JSONfile at the end of arguments', function (done) {
            this.assertOutput(['test/fixtures/customized.js', '--config=test/customized_config.json'], done);
        });
    });
});
