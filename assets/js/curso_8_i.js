/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar ñor pantalla el resultado devuelto por la función
*/

function pruebaParidad(enteronon) {
	var letrero = "Hola mundo";
	if (enteronon%2 == 0) {
		letrero="número es par";
	}
	else {
			letrero = "número es impar";
	}
	return letrero;
}

var entero=prompt("Escribe un número entero: ")
alert("el número " + entero + " es " + pruebaParidad(entero));

/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

