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
	}
	if (count == 0 || /^\s+$/.test(document.getElementById('comment').value) || count > 140){ // Sino no hay caracteres o puros espacios 
		document.getElementById("btn-tweet").disabled = true;
	}
	
}

function addComment() {
	// Cuando se apreta el boton de añadir comentario se reinicia
	maxLength = 140;
	count = 0;
	document.getElementById('wordLength').innerHTML = maxLength; 
	// Boton se vuelve a deshabilitar
	document.getElementById("btn-tweet").disabled = true; 

	var comments = document.getElementById('comment').value; // 1. Tomar texto en el textarea (Cada cosa que se desee obtener desde html es con value)
	// 2. Limpiar input textarea
	document.getElementById('comment').value = '';
	var cont = document.getElementById('cont');
	// Crear div contenedor
	var newComments = document.createElement('div');
	// Validar que textarea tiene mensaje
	if (comments.length == 0 || comments == null || /^\s+$/.test(comments)) {
		alert('Ingresa un comentario valido');
		return false;
	}

	// Nodos de texto del Textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
}



