#!/usr/bin/env node
'use strict';

import residence = require('residence');
const dashdash = require('dashdash');
import async = require('async');
import options from './cli-options';
import {EVCb} from "./index";

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


let root: string, cwd = process.cwd();

if(opts.project_root){
  root = opts.project_root;
}
else{
  try{
    root = residence.findProjectRoot(cwd);
  }
  catch(err){

  }
}



async.autoInject({






}, (err, results) => {



});
