// Para verificar los sucesos en el Textarea, se crea una funcion que va contando el numero de caracteres. Esta se ejecuta cada vez que algo cambia en el textarea.
// Variable globales
var count = 0;
var maxLength = 140;
// Boton inicia deshabilitado
document.getElementById("btn-tweet").disabled = true;
// Funcion que se ejecuta cada vez que el usuario escribe en textarea
function counter () {
	// Almacenar el largo de la cadena escrita en textarea
	var messageLength = document.getElementById('comment').value.length;
	// Se almacena en variable global.
	count = messageLength;
	// Caracteres Restantes
	maxLength = 140 - count;
	document.getElementById('wordLength').innerHTML = maxLength;
	if (count >= 1) { // Si hay al menos un caracter el boton se habilita
		document.getElementById("btn-tweet").disabled = false;
		document.getElementById('btn-tweet').setAttribute('class', 'btn-enabled');
		// Para los colores 
		if (count >= 1 && count < 120) {
			document.getElementById('wordLength').setAttribute('class', 'black');
		}
		if (count >= 120 && count < 130)	{
			document.getElementById('wordLength').setAttribute('class', 'yellow');
		}
		if (count >= 130 && count <= 140) {
			document.getElementById('wordLength').setAttribute('class', 'red');
		}
	}
	if (count == 0 || /^\s+$/.test(document.getElementById('comment').value) || count > 140){ // Sino no hay caracteres o puros espacios 
		document.getElementById("btn-tweet").disabled = true;
		document.getElementById('btn-tweet').setAttribute('class', 'btn-disabled');
	}	
}

// Funcion para redimensionar el textarea
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', function autosize () {
	var element = this;
	setTimeout(function(){
	    element.style.cssText = 'height:auto; padding:3px';
	    element.style.cssText = 'height:' + element.scrollHeight + 'px';
  	},0);
});          


function addComment() {
	reset ();
	var comments = document.getElementById('comment').value; // 1. Tomar texto en el textarea (Cada cosa que se desee obtener desde html es con value)
	// 2. Limpiar input textarea
	document.getElementById('comment').value = '';
	var cont = document.getElementById('cont');
	// Crear div contenedor
	var newComments = document.createElement('div');
	//newComments.setAttribute('id','twits');
	// Validar que textarea tiene mensaje
	if (comments.length == 0 || comments == null || /^\s+$/.test(comments)) {
		alert('Ingresa un comentario valido');
		return false;
	}
	// Crear p fecha
	var valueDate = document.createTextNode(myDate());
	var newDate = document.createElement('p');
	newDate.setAttribute('id', 'date');
	newDate.appendChild(valueDate);


	// Nodos de texto del Textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	newComments.appendChild(newDate);
	// Añadir Tweet en orden del mas reciente
	//var recentTwit = document.getElementById('twits');
	//recentTwit.insertBefore(newComments, recentTwit.childNodes[0]);
	cont.appendChild(newComments);
}

function reset () {
	// Se reinician las variables globales
	maxLength = 140;
	count = 0;
	document.getElementById('wordLength').innerHTML = maxLength; 
	// Boton se vuelve a deshabilitar
	document.getElementById("btn-tweet").disabled = true; 
	// Se arrega etiqueta btn-disabled
	document.getElementById('btn-tweet').setAttribute('class', 'btn-disabled');
	// Color de numeros de caracteres restantes vuelve 
	document.getElementById('wordLength').setAttribute('class', 'black');
	// Textarea vuelve a su tamaño inicial
	document.getElementById('comment').style.height = null;
}

// Funcion Hora Twitt HH:MM
function myDate () {
	// Dividir Date() en un arreglo
	var arr = Date().split(" ");
	// elemento 4 del arreglo almacena HH:MM:SS. Se divide en un arreglo de 3
	var arrTime = arr[4].split(":");
	// Se toman los datos 0 (HH) y 1 (MM) y se concatenan
	var time = arrTime[0] + ":" + arrTime[1];
	return time;
}