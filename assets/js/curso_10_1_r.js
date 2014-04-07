/*"función que determine si la cadena de texto que se pasa como parámetro es en palíndromo, 
es decir, si se lee de la misma forma de desde la izquierda y desde la derercha. 
ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural"*/

function Palindromo(mensaje1)
{
	//var mensaje1="La ruta nos aporto otro paso natural";
	//var mensaje1= "la casa es bella";
	//var mensaje1="anita lava la tina"
	mensaje2="";

	for (var i = 0; i < mensaje1.length;  i++)
	{
		if (mensaje1[i]!=" ")
		{
	      mensaje2=mensaje2+mensaje1[i]
		}
	}

	mensaje1=mensaje2.toLowerCase(); // convierto a minúsculas la cadena 


	mensaje2="";
	for (var i = mensaje1.length-1; i >=0; i--) //volteo la cadena sin espacios y en minúsculas
	{
		mensaje2=mensaje2+mensaje1[i]

		
	}
	alert(mensaje2)

	if (mensaje1==mensaje2)  // comparo la cadena original sin espacios y en minúsculas con esa misma cadena volteada
		alert("Es palíndromo")
	else
		alert("no es palíndromo")
}

var mensaje_original;
mensaje_original=prompt("Teclee una frase");
Palindromo(mensaje_original);