//login
const inputLoginMail = document.querySelector("#loginMail");
const inputLoginPass = document.querySelector("#loginPass");
const botonLogin = document.querySelector("#btn ");
const usuarios = obtenerUsuarios();


botonLogin.addEventListener("click", iniciarSesion);
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) === null? []: JSON.parse(localStorage.getItem("usuarios"));
    }

function iniciarSesion() {
    buscarUsuario();
   // validarDatosUsuario();
    //redireccionar();
}

function buscarUsuario() {
    loginMail = inputLoginMail.value;
    let usuario = usuarios.some(data => data.correo === loginMail);
    if(!usuario) {
        alert("nooooo")
    } else {
        return usuario;
    }
}
