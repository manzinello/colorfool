#!/usr/bin/env node

const SPACE = " ";
const COLORFOOL = "colorfool";
const HASHTAG = "#";
const NO_STRING = "no string specified!";
const COLORHEXA = "https://www.colorhexa.com/";

var Colorfool = require('./lib/');

var args = process.argv;
args.shift();
args.shift();

if (args.length > 0) {
    var s = args.join(SPACE);
    var colorfool = Colorfool.c(s);
    console.log("string \"" + s + "\" colorfooled!");
    console.log(HASHTAG + colorfool);
    console.log(colorhexa(colorfool));
} else {
    console.log(NO_STRING);
}

function colorhexa(colorfool) {
    return COLORHEXA + colorfool;
}