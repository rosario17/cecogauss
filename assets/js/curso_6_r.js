var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
valor=prompt("teclee su DNI")
if (valor <0 || valor >99999999)
{
	alert("valor erróneo")
}
	
else
{
	resultado=valor%23
	letra=prompt("Teclee una letra")
    if (letra==letras[resultado])
    {

    	alert("DNI y letra son correctos")
    }
    else
    	alert("DNI o letra incorrecta")
}