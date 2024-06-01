let txtNombre = document.getElementById("nombre");
let txtApellido = document.getElementById("apellido");
let txtTel = document.getElementById("tel");
let txtEdad = document.getElementById("edad");
let listaErrores = document.getElementById("listaErrores");
let listaMensajes = document.getElementById("listaMensajes");
let txtMail = document.getElementById("mail");




function quitarBordesRojos(){
    let form = document.getElementById('frmContacto');
    let inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        input.classList.remove('error');

    }
}

function borrarFormCampos(){
    let form = document.getElementById('formulario');
    form.remove();
}

function disableFormInputs() {
    let form = document.getElementById('frmContacto');
    let inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        input.disabled = true;

    }
    let mensaje = document.getElementById('mensaje');
    mensaje.disabled = true;
}

function setErrorLabel(idEtiqueta, textoEtiqueta){
    if(idEtiqueta){
        let etiqueta = document.getElementById(idEtiqueta);
        etiqueta.textContent = textoEtiqueta;
    }else{
        console.log("El campo no existe");
    }
}

function borrarFormLabels() {
    let form = document.getElementById('frmContacto');
    let etiquetas = form.getElementsByClassName("etiquetaError");

    for (let i = 0; i < etiquetas.length; i++) {
        let etiqueta = etiquetas[i];
        etiqueta.remove();
    }
}

function borrarLabel(campo){
    if(campo){
        //let etiqueta = document.querySelector('label[for="' + campo.id + '"]');
        let etiqueta = document.getElementsByClassName(campo.id);
                
        if (etiqueta) {
            etiqueta.remove();
        }
    }else{
        console.log("El campo no existe");
    }
}

function quitarLabel(campo){
    if(campo){
        //let etiqueta = document.querySelector('label[for="' + campo.id + '"]');
        let etiqueta = document.getElementsByClassName(campo.id);
                
        if (etiqueta) {
            etiqueta.textContent = "";
            console.log("se quiso eliminar");
        }
    }else{
        console.log("El campo no existe");
    }
}

function quitarFormLabels() {
    let form = document.getElementById('frmContacto');
    let etiquetas = form.getElementsByClassName("etiquetaError");

    for (let i = 0; i < etiquetas.length; i++) {
        let etiqueta = etiquetas[i];
        etiqueta.textContent = "";
    }
}

function validarFormulario() {
    listaErrores.innerHTML = "";
    listaMensajes.innerHTML = "";
    txtNombre.classList.remove("error");
    txtApellido.classList.remove("error");
    txtTel.classList.remove("error");
    txtEdad.classList.remove("error");

    quitarFormLabels();
    quitarBordesRojos();
    
    let errores = [];

    let email = txtMail.value.trim();
    let regex_mail = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z][a-zA-Z0-9]*\.[a-zA-Z]{1,5}\.?[a-zA-Z]{1,5}$/;
    if(!regex_mail.test(email)){
        errores.push("Email inválido :(");
        txtMail.classList.add("error");
        setErrorLabel("mailError", "Mail");
    }

    let regex_tel = /^[1-9]\d{9}$/;
//setErrorLabel(campo, textoEtiqueta)
    let nombre = txtNombre.value.trim();

    if (nombre.length == 0) {
        errores.push("Falta el nombre");
        txtNombre.classList.add("error");
        setErrorLabel("nombreError", "Nombre");


    } else if (nombre.length > 99) {
        errores.push("Nombre muy largo!");
        txtNombre.classList.add("error");
        setErrorLabel("nombreError", "Nombre");

    }

    let apellido = txtApellido.value.trim();
    if (apellido.length == 0) {
        errores.push("Falta el apellido");
        txtApellido.classList.add("error");
        setErrorLabel("apellidoError", "Apellido");

    } else if (apellido.length > 99) {
        errores.push("Apellido muy largo!");
        txtApellido.classList.add("error");
        setErrorLabel("apellidoError", "Apellido");

    }

    let telefono = txtTel.value.trim();
    if (telefono.length === 0) {
        errores.push("Falta el teléfono...");
        txtTel.classList.add("error");
        setErrorLabel("telError", "Tel");

    }

    if (telefono.length > 10) {
        errores.push("Teléfono muy largo");
        txtTel.classList.add("error");
        setErrorLabel("telError", "Tel");
    }
    if (telefono.length > 0 && !regex_tel.test(telefono)) {
        errores.push("Para el teléfono deben ser 10 dígitos");
        txtTel.classList.add("error");
        setErrorLabel("telError", "Telefóno");

    }

    let edad = txtEdad.value.trim();
    if (edad.length === 0) {
        errores.push("¡Falta informarnos de tu edad!");
        txtEdad.classList.add("error");
        setErrorLabel("edadError", "Edad");

    } else {
        if (parseInt(txtEdad.value) < 18) {
            errores.push("No son juegos para niños :(");
            txtEdad.classList.add("error");
            setErrorLabel("edadError", "Edad");

        }
    }

    for (let err of errores) {
        let li = document.createElement("li");
        li.innerHTML = err;
        listaErrores.appendChild(li);
    }
    if (errores.length == 0) {
        disableFormInputs();
          
        let divDatos = document.getElementById("datosEnviados");
        
        let contenidoP = document.getElementById("contenidoEnviado");
        let contenido = "Hola " + nombre + " " + apellido + ", gracias por";
        contenido = contenido + " contactarte con nosotros, en breve estaremos";
        contenido += " en contacto contigo por medio de tu teléfono, ";
        contenido += telefono + " o si no, por el mail, " + email;
        contenido += " ya que sabemos que tu edad es " + edad;

        contenidoP.innerHTML = contenido;
        divDatos.style.display = 'flex';
        borrarFormCampos();
        /*
        anchor.href = '../encuesta.html';
        anchor.textContent = 'Realizar una encuesta';
        li.appendChild(anchor);
        li.id = 'enlace-encuesta';
        */

        /*
        if (txtTel.value.length > 0) {
            li.innerHTML = `Hola ${nombre}, bienvenido`;
        } else {
            li.innerHTML = `Hola, bienvenido`;
        }
        listaMensajes.appendChild(li);
        */
        
        //document.forms[0].reset();
        //encuestaOnSubmit();
        return false; // return true para enviar el form;
    }

    return false;
}




function encuestaOnSubmit() {
    const decision = document.querySelector('input[name="decision"]:checked').value;
    if (decision === 'si') {
        window.location.href = 'encuesta.html'; // Página de la encuesta
    } else {
        window.location.href = 'page.html'; // Página principal
    }
}

//document.getElementById('botonEnv').addEventListener('click', enviarFormulario);

function enviarFormulario() {
    validarFormulario();
    //document.forms[0].reset();
    //encuestaOnSubmit();
    return false; /* No enviar el formulario */
}

function chequearNombre(texto) {

    let textoNormalizado = "";
    let regex_abc_ansi = /^[A-Za-z]+$/;

    for (let i = 0; i < texto.length; i++) {
        let letra = quitarTilde(texto[i]);
        textoNormalizado += letra;
    }

    if (regex_abc_ansi.test(textoNormalizado)) {
        console.log("El texto solo contiene caracteres del abecedario romano.");
        return true;
    } else {
        console.log("El texto contiene caracteres que no son del abecedario romano.");
        return false;
    }

}

const normalizarTexto = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function quitarTilde(caracter) {
    switch (caracter) {
        case "á":
            caracter = "a";
            break;
        case "é":
            caracter = "e";
            break;
        case "í":
            caracter = "i";
            break;

        case "ó":
            caracter = "o";
            break;

        case "ú":
            caracter = "u";
            break;

        case "ü":
            caracter = "u";
            break;

        case "ñ":
            caracter = "n";
            break;

        default:
            normalizarTexto(caracter);
            break;
    }

}