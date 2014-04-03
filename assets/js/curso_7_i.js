/*
for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
};

var mensaje = "Hola, estoy dentro de un bucle"

for (var i = 0; i<5; i++) {
	alert(mensaje)
};

var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Doménica"];

for (var i = 0; i < 7; i++) {
	alert(dias[i])
};

El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n * (n-1) * (n-2) * ... * 1. Así el factorial de 5 (escrito como 5!) es igual a: 5! = 5 * 4 * 3 * 2 * 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

*/
 /*
var numero = prompt("escribe un numero entero");
var factoriall = 1;
for (var i = numero; i >= 1; i--) {
	factoriall = factoriall * i;
};

alert("el factorial de " + numero + " es " + factoriall);
*/

/*
var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Doménica"];

for (i in dias) {
	alert(dias[i])
};

var numeroLetras= mensaje.length;
devuelve en numeroLetras el número de elementos de mensaje

*/

/*
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
var mensaje = mensaje1 + mensaje2 //mensaje = "Hola Mundo"

var mensaje1 = "Hola";
var mensaje2 = 3;
var mensaje = mensaje1 + mensaje2 //mensaje = "Hola3"

var mensaje1 = "Hola";
var mensaje2 = "Mundo";
var mensaje = mensaje1 + " " + mensaje2 //mensaje = "Hola Mundo"

var mensaje1 = "Hola";
var mensaje = mensaje1.toUpperCase() //mensaje = "HOLA"

var mensaje1 = "Hola";
var mensaje = mensaje1.toLowerCase() //mensaje = "hola"

var mensaje1 = "Hola Mundo";
var porcion = mensaje1.substring(1,8) //porcion = "ola Mun"
var porcion = mensaje1.substring(3,4) //porcion = "a"
*/

/*
var mensaje = "Hola Mundo, soy una cadena de texto!";
var palabras = mensaje.split(" ");
//palabras = ["Hola", "Mundo,", "soy", "una", "cadena", "de", "texto!"];
for(i in palabras) {
	alert(palabras[i])
}
*/


/*
var numero1 = 4564.34567;
numero=numero1.toFixed(2);
alert(numero);
numero=numero1.toFixed(6);
alert(numero);
numero=numero1.toFixed();
alert(numero);

function nombre_funcion() {

}
*/

function suma() {
	resultado=numero1 + numero2;
	alert("El resultado es: "+resultado);
}

var resultado;
var numero1 = 5;
var numero2 = 3;

suma();

numero1 = 10;
numero2 = 7;

suma();

numero1 = 5;
numero2 = 8;

suma();






