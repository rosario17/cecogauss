
var parrafo=document.getElementById("provisional");
console.log(parrafo);
//var contenido=document.createTextNode("Hola mundo!");
parrafo.parentNode.removeChild(parrafo);
//document.body.appendChild(parrafo);


/*

var parrafos = document.getElementById("pruebo");
// deja en la var parrafo las caracteristicas del html
console.log(parrafos.className)
*/

var parrafos = document.getElementsByTagName("a");
var contador = 0;
var letrero = "";
//var i = parrafos.length - 1;


for (var x = 0; x < parrafos.length; x++) {
	if ( parrafos[x].href.substring(0,4) == "http" ) {
	contador++;
	letrero = letrero + x;
	};
};
//alert(letrero)

console.log(parrafos)

console.log(parrafos[0].href);
console.log(parrafos[1].href);
console.log(parrafos[2].href);
console.log(parrafos[3].href);
console.log(parrafos[4].href);
console.log(parrafos[5].href);
console.log(parrafos[6].href);
console.log(parrafos[7].href);
console.log(parrafos[8].href);
console.log(parrafos[9].href);
console.log(parrafos[10].href);
console.log(parrafos.length)

alert("la pagina tiene " + contador + " enlaces en " + letrero)