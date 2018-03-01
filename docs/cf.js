var colorfool = require('colorfool');

function changed() {
    setTimeout(function () {
        var t = document.getElementById('c').value;
        console.log(t);
        var color = colorfool.c(t);
        console.log(color);
    }, 88);
}

document.getElementById('c').addEventListener('keydown', changed, false);
document.getElementById('c').addEventListener('paste', changed, false);
document.getElementById('c').addEventListener('cut', changed, false);

// browserify cf.js -o cf-browserified.js -d