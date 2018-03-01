var colorfool = require('colorfool');

function chaged() {
    var t = document.getElementById('c').value;
    var color = colorfool.c(t);
    console.log(color);
}

document.getElementById('c').addEventListener('change', changed, false);