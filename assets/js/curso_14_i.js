/* ejercicio 14
A partir de la página web proporcionada, completar el código de SavaScript para que:
1. Cuando se pinche en el enlace, se oculte su sección relacionada.
2. cuando se vuelva a pinchar sobre el mismo, se muestre otra vez esa sección de contenidos

style="display='none';" muestra
style="display='block';" oculta
*/

function oprimeme(){
	var parrafo=document.getElementById('provisional');
	if (parrafo.style.display=='none') {
		parrafo.style.display='block'
	}
	else if (parrafo.style.display=='block'){
		parrafo.style.display='none';
	}
	else {
		parrafo.style.displa='none';
	};
	
	console.log(parrafo);
};