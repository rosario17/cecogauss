//función para -impar
function par_impar(numero)
{
	var mensaje="";
	if (numero%2 ==0)
	{
		//mensaje="par";
		return ("par");
	}
	else
	{
		//mensaje="impar";
		return ("impar");
	}
	//return mensaje;
}
var numero=prompt("Teclee un número para saber si es par o impar");
resultado=par_impar(numero)
alert(resultado);


