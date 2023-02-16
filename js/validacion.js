//REGISTRO USUARIO

function handleRegistration(event) {
     event.preventDefault();
     const usuario = document.getElementById("usuario").value;
     const contraseña = document.getElementById("contraseña").value;
     const nombre = document.getElementById("nombre").value;
     const apellido = document.getElementById("apellidos").value;
     const nacimiento = document.getElementById("edad").value;
     const correo = document.getElementById("correo-registro").value;
     const direccion = document.getElementById("direccion").value;
     const codigoPostal = document.getElementById("codigopostal").value;
     const provincia = document.getElementById("provincias").value;
     const telefono = document.getElementById("telefono").value;
     const identidad = document.getElementById("identificacion").value;
     const portal = document.getElementById("portal").value;
     const piso = document.getElementById("piso").value;
     // const userType = document.getElementById("user-type").value;
     
     saveUserData(usuario, contraseña, nombre, apellido, nacimiento, correo, direccion, codigoPostal, provincia, telefono, identidad, portal, piso);

     alert("Registro exitoso. Por favor inicie sesión.");
     window.location.href = "login-page.html"
}

function saveUserData(usuario, contraseña, nombre, apellido, nacimiento, correo, direccion, codigoPostal, provincia, telefono, identidad, portal, piso) {
    const user = {
        usuario: usuario,
        contraseña: contraseña,
        nombre: nombre,
        apellido: apellido,
        nacimiento: nacimiento,
        correo: correo,
        direccion: direccion,
        codigoPostal: codigoPostal,
        provincia: provincia,
        telefono: telefono,
        identidad: identidad,
        portal: portal,
        piso: piso,
     };
 
     localStorage.setItem("user", JSON.stringify(user));
}
    
function getUserData() {
  return JSON.parse(localStorage.getItem("user1"));
}
   
 

//     // function handleLogin(event) {
//     //     event.preventDefault();
      
//     //     const user = getUserData();
//     //     if (!user) {
//     //       alert("No hay ningún usuario registrado. Por favor regístrese.");
//     //       return;
//     //     }
      
//     //     const usuario = document.getElementById("email").value;
//     //     const password = document.getElementById("pasword").value;
      
//     //     if (usuario === user.usuario && password === user.contraseña) {
//     //       if (user.tipoUsuario === "administrador") {
//     //         window.location.href = "index.html";
//     //       } else {
//     //         window.location.href = "cliente.html";
//     //       }
//     //     } else {
//     //       alert("Nombre de usuario o contraseña incorrectos.");
//     //     }
//     //   }
      
//     //   const registrationForm = document.getElementById("formulario");
//     //   registrationForm.addEventListener("submit", handleRegistration);

//     //   const loginForm = document.getElementById("btn");
//     //   loginForm.addEventListener("submit", handleLogin);

//     function obtenerListaUsuarios(){
//       let listaUsuarios = JSON.parse(localStorage.getItem('user1'));


//       if(listaUsuarios == null) {
//         listaUsuarios =
//         [
//         ["pepe","123445","Juanka","Martinez", "16/04/1999", "usuario@usuario.com","Bolueta","9","3","48004","Bizkaia","612121213","78564521L", "administrador"],

//         ["JM","12345","Jose","Perez", "08/11/1996", "info@usuario.com","Bolueta","9","3","48004","Bizkaia","612121213","78564521L", "cliente"]
//       ]


//       }
//       return listaUsuarios;
//     }
//     function validarCredenciales(pCorreo , pContrasenna) {
//       let listaUsuarios = obtenerListaUsuarios();
//       let bAcceso = false;


//       for(let i = 0; i< listaUsuarios.length; i++) {
//         if(pCorreo == listaUsuarios[i][5] && pContrasenna == listaUsuarios[i][1]) {
//           bAcceso = true;
          
//           sessionStorage.setItem('usuarioActivo', listaUsuarios[i][2] + ' ' + listaUsuarios[i][3]);
//           sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][13]);
//         }
//       }

      
//       // listaUsuarios.forEach((elemento, index, listaUsuarios) => {
//       //   if(pCorreo == elemento[5] && pContrasenna == elemento[1]) {
//       //       bAcceso = true;

//       //       console.log(true);


//       //     //  sessionStorage.setItem('usuarioActivo', listaUsuarios[elemento][2] + ' ' + listaUsuarios[elemento][3]);
//       //     //  sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[elemento][13]);


//       //   }else {
//       //     console.log(false);
//       //   }

        
//       // });


//       return bAcceso;
//     }




//     document.querySelector('#btn').addEventListener('click', iniciarSesion);




//     function iniciarSesion(){
//       var sCorreo = '';
//       var sContrasenna = '';
//       var bAcceso = false;


//       sCorreo = document.querySelector('#email').value;
//       sContrasenna = document.querySelector('#pasword').value;


//       bAcceso = validarCredenciales(sCorreo, sContrasenna);
     
     
//       if(bAcceso == true) {
//         ingresar();
//       }


//     }




    // function ingresar() {
    //   var rol = sessionStorage.getItem('rolUsuarioActivo');
    //   switch(rol){
    //     case 'administrador':
    //       window.location.href = 'intranet.html';
    //       break;
    //       case 'cliente':
    //         window.location.href = 'cliente.html';
    //         break;
    //         default:


    //         break;
    //   }
    // }
