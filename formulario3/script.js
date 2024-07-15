document.getElementById('form').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const alertButton = document.getElementById('alertButton');
    const emailValue = emailInput.value;

    const apellidoInput = document.getElementById('apel');
    const apellidoError = document.getElementById('apellidoError');
    const apellidoValue = apellidoInput.value;

    let hasError = false;

    // Verifica si hay un arroba en el correo
    if (!emailValue.includes('@')) {
        emailError.textContent = `Incluye un signo "@" en la dirección de correo electrónico. La dirección "${emailValue}" no incluye un signo "@".`;
        emailError.style.display = 'block'; // Muestra el mensaje de error
        alertButton.style.display = 'block'; // Muestra el botón de alerta
        event.preventDefault(); // Evita que se envíe el formulario
    } else {
        emailError.style.display = 'none'; // Oculta el mensaje de error
        alertButton.style.display = 'none'; // Asegúrate de ocultar el botón si es válido
    }

    if (apellidoValue.trim() === '') {
        apellidoError.textContent = '¡Este campo debe ser completado!';
        apellidoError.style.display = 'block'; // Muestra el mensaje de error
        hasError = true; // Marca error
    } else {
        apellidoError.style.display = 'none'; // Oculta el mensaje de error
    }

    // Evitar el envío del formulario si hay errores
    if (hasError) {
        event.preventDefault();
    }
});

