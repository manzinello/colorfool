var colorfool = require('colorfool');

function changed() {

    setTimeout(function () {

        var t = document.getElementById('c').value;
        console.log(t);

        var color = colorfool.c(t);
        console.log(color);

        changeColor(color);

    }, 88);

}

function changeColor(color) {
    document.getElementById('color').style.backgroundColor = "#" + color;
    document.getElementById('color-string').innerHTML = "#" + color;
    console.log(getColorByBgColor(color));
    document.getElementById('color-string').style.color = getColorByBgColor(color);
}

function getColorByBgColor(bgColor) {
    if (!bgColor) {
        return '';
    }
    return (parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2) ? '#000' : '#fff';
}

document.getElementById('c').addEventListener('keydown', changed, false);
document.getElementById('c').addEventListener('paste', changed, false);
document.getElementById('c').addEventListener('cut', changed, false);