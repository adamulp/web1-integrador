
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('frmContacto');
    // const testButton = document.getElementById('testButton');
    // Create a new button element
    const testButton = document.createElement('button');
    testButton.textContent = 'Test';
    //form.innerHTML = '<button id="testButton">Test</button>' + form.innerHTML;
    form.insertBefore(testButton, form.firstChild);

    // Listas de nombres y apellidos comunes en Argentina
    const nombres = ['Juan', 'María', 'Carlos', 'Ana', 'José', 'Laura', 'Pedro', 'Lucía', 'Luis', 'Sofía'];
    const apellidos = ['González', 'Rodríguez', 'López', 'Martínez', 'García', 'Pérez', 'Sánchez', 'Ramírez', 'Torres', 'Flores'];

    // Función para generar un índice aleatorio dentro de un rango dado
    function obtenerIndiceAleatorio(max) {
        return Math.floor(Math.random() * max);
    }

    // Función para generar datos aleatorios
    function generarDatosAleatorios() {
        const nombreAleatorio = nombres[obtenerIndiceAleatorio(nombres.length)];
        const apellidoAleatorio = apellidos[obtenerIndiceAleatorio(apellidos.length)];
        const emailAleatorio = `user${Math.floor(Math.random() * 1000)}@example.com`;
        const telefonoAleatorio = Math.floor(Math.random() * 9999999999).toString();
        const edadAleatoria = Math.floor(Math.random() * 60) + 18; // Edad entre 18 y 78
        const mensajeAleatorio = `Este es un mensaje de prueba ${Math.floor(Math.random() * 1000)}`;

        return {
            nombre: nombreAleatorio,
            apellido: apellidoAleatorio,
            mail: emailAleatorio,
            tel: telefonoAleatorio,
            edad: edadAleatoria,
            mensaje: mensajeAleatorio
        };
    }

    // Función para poblar el formulario con datos aleatorios
    function poblarFormulario() {
        const datosFormulario = generarDatosAleatorios();
        document.getElementById('nombre').value = datosFormulario.nombre;
        document.getElementById('apellido').value = datosFormulario.apellido;
        document.getElementById('mail').value = datosFormulario.mail;
        document.getElementById('tel').value = datosFormulario.tel;
        document.getElementById('edad').value = datosFormulario.edad;
        document.getElementById('mensaje').value = datosFormulario.mensaje;
    }

    // Adjuntar el evento al botón de Test
    testButton.addEventListener('click', poblarFormulario);
});