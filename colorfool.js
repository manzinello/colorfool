#!/usr/bin/env node

const SPACE = " ";
const COLORFOOL = "colorfool";
const HASHTAG = "#";
const NO_STRING = "no string specified!";

var Colorfool = require('./lib/');

var args = process.argv;
args.shift();
args.shift();

if (args.length > 0) {
    var s = args.join(SPACE);
    var colorfool = Colorfool.c(s);
    console.log("string \"" + s + "\" colorfooled!");
    console.log(HASHTAG + colorfool);
} else {
    console.log(NO_STRING);
}