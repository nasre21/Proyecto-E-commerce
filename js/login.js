//login

const inputLoginMail = document.querySelector("#loginMail");
const inputLoginPass = document.querySelector("#loginPass");
const botonLogin = document.querySelector("#btn ");
const usuarios = obtenerUsuarios();


botonLogin.addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let usuario = buscarUsuario()
    validarDatosUsuario(usuario);  
    rellenarDatos(usuario);
}

function buscarUsuario() {
    loginMail = inputLoginMail.value;
    let exist = usuarios.some(data => data.correo === loginMail);
    
    if(!exist) {
        alert("Usuario no registrado");
    }else {
        let usuario = usuarios.find(user => user.correo === loginMail);
        sessionStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
    
        return usuario;
        console.log(usuario)
    }
}

function validarDatosUsuario(usuario){
   
    console.log(usuario);

    loginPass = inputLoginPass.value;

    if (usuario.password !== loginPass) {
        
        alert("Contraseña incorrecta");

        console.log(usuario.password)

    }else {
        
        redireccionar(usuario);
       

        console.log(loginPass)
      
    }

}

function redireccionar(usuario) {

    console.log(typeof(usuario.correo));

    if (usuario.correo.includes("@topets.com")) {


        window.location.href = "./intranet.html";
    }else {
        window.location.href = "cliente.html";
        
    }

}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) === null? []: JSON.parse(localStorage.getItem("usuarios"));
}















