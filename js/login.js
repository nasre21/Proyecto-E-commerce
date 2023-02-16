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
    validarDatosUsuario();
    //redireccionar();
}

function buscarUsuario() {
    loginMail = inputLoginMail.value;
    loginPass = inputLoginPass.value;
    let usuario;
    usuarios.forEach(user => {
       if (user.correo === loginMail) usuario = user;
    });
    console.log(usuario);
    return usuario;
}
