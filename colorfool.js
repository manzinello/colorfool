#!/usr/bin/env node

const SPACE = " ";
const COLORFOOL = "colorfool";
const NO_STRING = "no string specified!";

var Colorfool = require('./lib/');

var args = process.argv;
args.shift();
args.shift();

var colorfool = COLORFOOL;

if (args.length > 0) {
    var s = args.join(SPACE);
    colorfool = Colorfool.c(s);
    console.log("string \"" + s + "\" colorfooled!");
} else {
    colorfool = NO_STRING;
}

console.log(colorfool);