/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */



function altercapption(texto_ingresado) {
	var letrerito = "Hola Mundo"

	if ( texto_ingresado == texto_ingresado.toUpperCase() ) {

		letrerito = "En el texto TODAS SON MAYÚSCULAS"
	
	}
	
	else if ( texto_ingresado == texto_ingresado.toLowerCase() ) {
		letrerito = "en el texto todas son minúsculas"
	}
	else {
		letrerito = "Es un texto mezcla de MAYÚSCULAS y minúsculas."
	};
	return letrerito
}


/*
var mensaje1 = "Hola";
var mensaje = (mensaje1.toLowerCase() ) //mensaje = "hola"
alert(mensaje + " " + mensaje1)
*/

var letrero = prompt("Ingrese texto");
alert(altercapption(letrero))
