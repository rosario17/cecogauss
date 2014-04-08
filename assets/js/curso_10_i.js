/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, PALINDROMO 
La ruta nos aporto otro paso natural */



function altercapption(texto_ingresado) {
	var letrero1 = texto_ingresado.toLowerCase();
	var letrero2 = "";
	var letrero = "hola mundo"
	var y = 0;
//	alert(letrero1)
	for (var i = 0; i < letrero1.length; i++) {
		if (letrero1[i]!=" ") {
			letrero2=letrero2 + letrero1[i];
		};
	};
//	letrero1=letrero2.reverse()

//	alert("contenido de letrero2: " + letrero2)
	letrero1 = "";
	for ( i = letrero2.length-1; i >= 0; i--) {
		letrero1 = letrero1 + letrero2[i];
	};
//	alert( "contenido de ambos letreritos: " + letrero1 + " " + letrero2)

	if ( letrero1 == letrero2 ) {

		letrero = "Es un palíndromo"
	
	}

	else {
		letrero = "NO ES palíndromo"
	};
	

	return letrero
}


/*
var mensaje1 = "Hola";
var mensaje = (mensaje1.toLowerCase() ) //mensaje = "hola"
alert(mensaje + " " + mensaje1)
*/

var entrada = prompt("Ingrese texto");
//var entrada = "Mi nombre es Slim Shaddy"
//var entrada = "Anita lava la tina"
//var entrada = "La ruta nos aporto otro paso natural"
//var entrada = "Ana"
alert(altercapption(entrada))
