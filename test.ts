/// <reference path="bundle.d.ts" />

import assert = require('assert');
import hasUnicode = require('has-unicode');

assert.equal(typeof hasUnicode, 'function');
assert.equal(typeof hasUnicode(), 'boolean');
