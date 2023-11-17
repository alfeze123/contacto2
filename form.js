function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');
    var errorMensaje = document.getElementById('errorMensaje');
    var valido = true;

    errorNombre.innerHTML = '';
    errorEmail.innerHTML = '';
    errorMensaje.innerHTML = '';

    if (nombre.trim() === '') {
        errorNombre.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    if (email.trim() === '') {
        errorEmail.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    if (mensaje.trim() === '') {
        errorMensaje.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    if (valido) {
    
        alert('Formulario válido. Enviando datos...');
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
}
