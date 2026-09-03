document.getElementById('registroForm').addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mensajeError = document.getElementById('mensajeError');

    mensajeError.innerHTML = "";

    if (nombre.trim() === "") {
        mensajeError.innerHTML = "Error: Por favor, ingresa tu nombre completo.";
        return;
    }

    if (email.trim() === "" || !email.includes("@")) {
        mensajeError.innerHTML = "Error: Por favor, ingresa un correo electrónico válido que contenga '@'.";
        return;
    }

    if (password.length < 6) {
        mensajeError.innerHTML = "Error: La contraseña es muy corta. Debe tener al menos 6 caracteres.";
        return;
    }

    alert("¡Registro exitoso! Tus datos han sido validados correctamente.");
    this.reset(); 
});