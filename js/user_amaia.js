const inputusuario = document.querySelector("#usuario");
const inputnombre = document.querySelector("#nombre");
const inputapellidos = document.querySelector("#apellidos");
// const inputedad = document.querySelector("#edad").value;
// const inputcorreo = document.querySelector("#correo-registro").value;
// const inputpassword = document.querySelector("#password").value;
// const inputcalle = document.querySelector("#calle").value;
// const inputportal = document.querySelector("#portal").value;
// const inputpiso = document.querySelector("#piso").value;
// const inputcodigoPostal = document.querySelector("#codigopostal").value;
// const inputprovincia = document.querySelector("#provincia").value;
// const inputtelefono = document.querySelector("#telefono").value;
// const inputidentificacion = document.querySelector("#identificacion").value;
const botonEnviar = document.querySelector("#registro");

const usuarios = [];

botonEnviar.addEventListener("click", guardarUsuario);

function guardarUsuario(event) {
    event.preventDefault();

    usuario= inputusuario.value;
    nombre= inputnombre.value;
    apellidos= inputapellidos.value;
    // inputedad: edad,
    // inputcorreo: correo,
    // inputpassword: password,
    // inputcalle: calle,
    // inputportal: portal,
    // inputpiso: piso,
    // inputcodigoPostal: codigoPostal,
    // inputprovincia: provincia,
    // inputtelefono: telefono,
    // inputidentificacion: identificacion
    let user = {
        usuario: inputusuario.value,
        nombre: inputnombre.value,
        apellidos: inputapellidos.value,
    }
    usuarios.push(user);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log(usuarios);
}



