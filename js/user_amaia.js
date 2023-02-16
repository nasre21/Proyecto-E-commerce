//registrar usuario
const inputusuario = document.querySelector("#usuario");
const inputnombre = document.querySelector("#nombre");
const inputapellidos = document.querySelector("#apellidos");
const inputedad = document.querySelector("#edad");
const inputcorreo = document.querySelector("#correo-registro");
const inputpassword = document.querySelector("#password");
const inputcalle = document.querySelector("#calle");
const inputportal = document.querySelector("#portal");
const inputpiso = document.querySelector("#piso");
const inputcodigoPostal = document.querySelector("#codigopostal");
const inputprovincia = document.querySelector("#provincia");
const inputtelefono = document.querySelector("#telefono");
const inputidentificacion = document.querySelector("#identificacion");

const form = document.getElementById("formulario");

const usuarios = [];

form.addEventListener("submit", guardarUsuario);

function guardarUsuario(event) {
    event.preventDefault();
      
    let user = {
        usuario: inputusuario.value,
        nombre: inputnombre.value,
        apellidos: inputapellidos.value,
        edad: inputedad.value,
        correo: inputcorreo.value,
        password: inputpassword.value,
        calle: inputcalle.value,
        portal: inputportal.value,
        piso: inputpiso.value,
        codigoPostal: inputcodigoPostal.value,
        provincia: inputprovincia.value,
        telefono: inputtelefono.value,
        identificacion: inputidentificacion.value
    }
    usuarios.push(user);
    console.log(usuarios);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));    
}