document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtiene los valores de los campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Usuario y contraseña predefinidos (esto es solo para demostración)
    const validEmail = "usuario@dominio.com";
    const validPassword = "123456";

    // Valida el email y la contraseña
    if (email === validEmail && password === validPassword) {
        alert("Inicio de sesión exitoso!");
    } else {
        document.getElementById("error-message").style.display = "block"; // Muestra el mensaje de error
    }
});

