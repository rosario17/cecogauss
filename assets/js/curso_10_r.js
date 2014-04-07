/*"función que determine si la cadena de texto que se pasa como parámetro es en palíndromo, 
es decir, si se lee de la misma forma de desde la izquierda y desde la derercha. 
ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural"*/

var mensaje1="La ruta nos aporto otro paso natural";
var mensaje1= "la casa es bella"

var mensaje2="";



var palabras=mensaje1.split(" "); // separo por palabras
alert(palabras);

mensaje1="";
for (i in palabras)
{
	mensaje1=mensaje1+palabras[i] // creo el mensaje sin espacios
//	alert(palabras[i]);
}
//alert(mensaje1);


mensaje1=mensaje1.toLowerCase(); // convierto a minúsculas la cadena 
alert(mensaje1);

for (var i = mensaje1.length-1; i >=0; i--) //volteo la cadena sin espacios y en minúsculas
{
	mensaje2=mensaje2+mensaje1[i]

	
}
alert(mensaje2)

if (mensaje1==mensaje2)  // comparo la cadena original sin espacios y en minúsculas con esa misma cadena volteada
	alert("Es palíndromo")
else
	alert("no es palíndromo")