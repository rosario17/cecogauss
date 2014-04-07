// funciones
//var numeroLetras=mensaje.length;
var mensaje1="Hola";
var mensaje2=" Mundo";
var mensaje=mensaje1+ " " +mensaje2

var variable1="Hola";
var variable2=3;
var mensaje = variable1+variable2


var mensaje1="Hola";
var mensaje2=" Mundo";
var mensaje=mensaje1+ " " +mensaje2

var mensaje1="Hola";
var mensaje2=mensaje1.toUpperCase();

var mensaje1="HolA";
var mensaje2=mensaje1.toLowerCase();

var mensaje1="Hola Mundo";
var mensaje2=mensaje1.substring(1,8);// el mensaje empieza en posicion 0
// por lo que la posición 1 es la o y va hasta antes de la posición final
// que en este caso es 8 por tanto extrae hasta la posición 7
porcion=mensaje.substring(3,4);
alert(porcion);
alert(mensaje2);

var variable1="Hola, soy una cadena de texto!";
var palabras=variable1.split(" ");
for (i in palabras)
{
	alert(palabras[i]);
}



var numero1=4564.54567;
numero1.toFixed(2);
numero1.toFixed(6);
numero1.toFixed();
alert(numero1.toFixed());

