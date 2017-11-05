
function addComment() {
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



