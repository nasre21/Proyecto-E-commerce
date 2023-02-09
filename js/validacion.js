// //validar usuarios

// const formulario = document.getElementById("formulario");
// const inputs = document.querySelectorAll("#formulario input")

// const select = document.getElementById("provincias");



// let datosUsuario = {
//     usuario: "",
//     contraseña: "",
//     nombre: "",
//     apellido: "",
//     nacimiento: "",
//     correo: "",
//     direccion: "",
//     codigoPostal: "",
//     provincia: "",
//     numero: "",
//     identidad: ""
// }

// const expresiones = {
// 	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	password: /^.{4,12}$/, // 4 a 12 digitos.
// 	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/ // 7 a 14 numeros.                    
// }


// const validarFormulario = (e) => {

//     switch (e.targe.name){
//         case  "usuario":
            
//         break;

//         case  "nombre":
        
//         break;

//         case  "apellido":
        
//         break;

//         case  "fecha":
        
//         break;

//         case  "correo":
        
//         break;

//         case  "contraseña":
        
//         break;

//         case  "direccion":
        
//         break;


//         case  "portal":
        
//         break;

//         case  "piso":
        
//         break;

//         case  "codigopostal":
        
//         break;

//         case  "provincias":
        
//         break;

//         case  "telefono":
        
//         break;

//         case  "identificacion":
        
//         break;
//     }

   


// }





// inputs.forEach(input => {
//     input.addEventListener("keyup",validarFormulario);
//     input.addEventListener("blur",validarFormulario);
    
  
   

// });

// // formulario.addEventListener("submit", (e) => {
// //     e.preventDefault();
// // })

// const form1 = document.getElementById('container-login-two');
// const mail = document.getElementById('mail');
// const password = document.getElementById('password');
// const parrafo = document.getElementById('warnings');

// boton.addEventListener('click', e=>{
//     e.preventDefault()
// });

// // function validacion(correo){
//     // let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

//     // let esValido = expReg.test(correo); 

//     if(esValido==true) {
//         alert("El email es válido");

//     }
//     else{
//         alert("El email no es válido");

//     }

function saveUserData(usuario, contraseña, nombre, apellido, nacimiento, correo, direccion, codigoPostal, provincia, numero, identidad, portal, piso) {
    const user = {
        usuario: "pepe",
        contraseña: "123445",
        nombre: "Juanka",
        apellido: "Martinez",
        nacimiento: "16/04/1999",
        correo: "usuario@usuario.com",
        direccion: "Bolueta",
        portal: "9",
        piso: "3",
        codigoPostal: "48004",
        provincia: "Bizkaia",
        numero: "612121213",
        identidad: "78564521L",
        tipoUsuario: "administrador"
    };
    // const cliente = {
    //     usuario: "pepe",
    //     contraseña: "123445",
    //     nombre: "Juanka",
    //     apellido: "Martinez",
    //     nacimiento: "16/04/1999",
    //     correo: "usuario@usuario.com",
    //     direccion: "Bolueta",
    //     portal: "9",
    //     piso: "3",
    //     codigoPostal: "48004",
    //     provincia: "Bizkaia",
    //     numero: "612121213",
    //     identidad: "78564521L",
    //     tipoUsuario: "cliente"
    // };
    localStorage.setItem("user", JSON.stringify(user));
  }

  function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
  }

  function handleRegistration(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasenna = document.getElementById("contraseña").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellidos").value;
    const nacimiento = document.getElementById("edad").value;
    const correo = document.getElementById("correo-registro").value;
    const direccion = document.getElementById("direccion").value;
    const codigoPostal = document.getElementById("codigopostal").value;
    const provincia = document.getElementById("provincias").value;
    const numero = document.getElementById("telefono").value;
    const identidad = document.getElementById("identificacion").value;
    const portal = document.getElementById("portal").value;
    const piso = document.getElementById("piso").value;


    // const userType = document.getElementById("user-type").value;

    saveUserData(usuario, contrasenna, nombre, apellido, nacimiento, correo, direccion, codigoPostal, provincia, numero, identidad, portal, piso);

    alert("Registro exitoso. Por favor inicie sesión.");
  
    window.location.href = "login-page.html";

    }

    function handleLogin(event) {
        event.preventDefault();
      
        const user = getUserData();
        if (!user) {
          alert("No hay ningún usuario registrado. Por favor regístrese.");
          return;
        }
      
        const mail = document.getElementById("email").value;
        const password = document.getElementById("pasword").value;
      
        if (mail === user.correo && password === user.contrasenna) {
          if (user.tipoUsuario === "administrador") {
            window.location.href = "index.html";
          } else {
            window.location.href = "cliente";
          }
        } else {
          alert("Nombre de usuario o contraseña incorrectos.");
        }
      }
      
      const registrationForm = document.getElementById("formulario");
      registrationForm.addEventListener("submit", handleRegistration);

      const loginForm = document.getElementById("btn");
      loginForm.addEventListener("click", handleLogin);