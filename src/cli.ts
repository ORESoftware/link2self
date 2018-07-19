#!/usr/bin/env node
'use strict';

import residence = require('residence');
const dashdash = require('dashdash');
import options from './cli-options';

const allowUnknown = process.argv.includes('--allow-unknown');
const parser = dashdash.createParser({options,allowUnknown});

let opts: any;

try {
   opts = parser.parse(process.argv);
} catch (e) {
  console.error('foo: error: %s', e.message);
  process.exit(1);
}


if (opts.help) {
  var help = parser.help({includeEnv: true}).trimRight();
  console.log('usage: node foo.js [OPTIONS]\n' + 'options:\n' + help);
  process.exit(0);
}





