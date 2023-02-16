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
    let usuario = buscarUsuario()
    validarDatosUsuario(usuario);
    //redireccionar();
}



function buscarUsuario() {

    loginMail = inputLoginMail.value;
    
    let exist = usuarios.some(data => data.correo === loginMail);
    if(!exist) {
        alert("Usuario no registrado");
    }else {
        usuarios.map()
    }

}



function validarDatosUsuario(usuario){
   
    console.log(usuario);

    loginPass = inputLoginPass.value;

    if (usuario.password !== loginPass) {
        
        alert("Contraseña incorrecta");
 
       

        console.log(usuario.password)

    }else {
        
        window.location.href = "/";
        console.log(loginPass)
      
    }

}