#!/usr/bin/env node

const SPACE = " ";
const COLORFOOL = "colorfool";

var Colorfool = require('./lib/');

var args = process.argv;
args.shift();
args.shift();

var colorfool = COLORFOOL;

if (args.length > 0) {
    var s = args.join(SPACE);
    colorfool = Colorfool.c(s);
}

console.log(colorfool);