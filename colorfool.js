#!/usr/bin/env node

const SPACE = " ";
const COLORFOOL = "colorfool";
const HASHTAG = "#";
const NO_STRING = "no string specified!";
const COLORHEXA = "https://www.colorhexa.com/";

var Colorfool = require('./lib/');

// Prendo i parametri e shifto i valori per avere tutti i parametri eccetto i 2 iniziali
var args = process.argv;
args.shift();
args.shift();

// Se sono stati passati parametri chiamo la c(), altrimenti stampo un messaggio di errore
if (args.length > 0) {
    var s = args.join(SPACE);
    var colorfool = Colorfool.c(s);
    console.log("string \"" + s + "\" colorfooled!");
    console.log(HASHTAG + colorfool);
    console.log(colorhexa(colorfool));
} else {
    console.log(NO_STRING);
}

// Metodo per prelevare l'url di dettaglio del colore
function colorhexa(colorfool) {
    return COLORHEXA + colorfool;
}