const hasha = require('hasha');

function c(s) {
	var color = hasha(s).substring(0, 6);
	return color;
}

module.exports.c = c;