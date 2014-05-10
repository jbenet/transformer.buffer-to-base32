#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  [new Buffer('beep boop', 'ascii'), 'c9jpaw10c9qpyw0']
])
