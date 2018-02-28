const hasha = require('hasha');

// Metodo per creare il colore, faccio la hash del valore della string con hasha e prelevo i primi 6 caratteri esadecimali
function c(s) {
	var color = hasha(s).substring(0, 6);
	return color;
}

module.exports.c = c;