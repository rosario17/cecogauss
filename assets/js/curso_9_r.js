
/*Función que se la pasa como argumento una cadena de texto y determina si la cadena
está formada solo por mayúsculas, minúsculas o ambas*/

function revisa_cadena(cadena_texto)
{
	
	if (cadena_texto==cadena_texto.toUpperCase())
	{ alert("cadena mayúsculas")}
	else
	{
		if (cadena_texto==cadena_texto.toLowerCase())
	       { alert("cadena minúsculas")}
	    else   
			{alert("cadena mayúsculas y minúsculas")}
	}
};
var cadena_texto=prompt("Teclee una cadena de texto");
revisa_cadena(cadena_texto);

