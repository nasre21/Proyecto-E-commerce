const inputUsuario = document.querySelector("#usuario");
const inputNombre = document.querySelector("#nombre");
const inputApellidos = document.querySelector("#apellidos");
const inputEdad = document.querySelector("#edad");
const inputCorreo = document.querySelector("#correo-registro");
const inputPassword = document.querySelector("#password");
const inputCalle = document.querySelector("#calle");
const inputPortal = document.querySelector("#portal");
const inputPiso = document.querySelector("#piso");
const inputCodigoPostal = document.querySelector("#codigopostal");
const inputProvincia = document.querySelector("#provincia");
const inputTelefono = document.querySelector("#telefono");
const inputIdentificacion = document.querySelector("#identificacion");

const parrafo = document.querySelector("#warnings");

const botonEnviar = document.querySelector("#registro");

const usuarios = obtenerUsuarios();

console.log(usuarios);

botonEnviar.addEventListener("click", registroUsuario);

function registroUsuario(event) {
    event.preventDefault();
    cogerDatosUsuario();
    guardarUsuario();
    validarFormulario();
}

function validarFormulario(){
       
    let warnings = ""


        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""


        if(!regexEmail.test(inputCorreo.value)){
           
            document.querySelector("#warnings").style.color = "red";
            document.querySelector("#warnings").style.border = "0.1rem solid red";
            document.querySelector("#warnings").style.padding = "0.8rem";
            document.querySelector("#warnings").style.marginBottom = "1rem";


          warnings += `El email que has introducido no es válido`
            entrar = true
        }if(entrar){
            parrafo.innerHTML = warnings
        }else{
           window.location.href = "login-page.html";
        }
    }



function cogerDatosUsuario() {
    let user = {
        usuario: inputUsuario.value,
        nombre: inputNombre.value,
        apellidos: inputApellidos.value,
        edad: inputEdad.value, 
        correo: inputCorreo.value,
        password: inputPassword.value,
        calle: inputCalle.value,
        portal: inputPortal.value,
        piso: inputPiso.value,
        codigoPostal: inputCodigoPostal.value,
        provincia: inputProvincia.value,
        telefono: inputTelefono.value,
        identificacion: inputIdentificacion.value,
        imagen: ""
    }
    console.log("user es " + JSON.stringify(user));
    usuarios.push(user);
    console.log("usuarios es " + JSON.stringify(usuarios));
}

function guardarUsuario() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function irAIniciarSesion() {
    window.location.href="./login-page.html"
}

function obtenerUsuarios() {
return JSON.parse(localStorage.getItem("usuarios")) === null? []: JSON.parse(localStorage.getItem("usuarios"));
}
