var colorfool = require('colorfool');

function changed() {

    setTimeout(function () {

        var t = document.getElementById('c').value;
        console.log("string: " + t);

        if (!t || t === "") {

            document.getElementById('color').style.backgroundColor = "#424242";
            document.getElementById('color-string').innerHTML = "color";
            document.getElementById('color-string').style.color = "#fff"

        } else {

            var color = colorfool.c(t);
            console.log("colorfool: " + color);

            changeColor(color);

        }

    }, 88);

}

function changeColor(color) {
    document.getElementById('color').style.backgroundColor = "#" + color;
    document.getElementById('color-string').innerHTML = "#" + color;
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