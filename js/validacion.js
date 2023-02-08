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

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

const form1 = document.getElementById('container-login-two');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const parrafo = document.getElementById('warnings');

boton.addEventListener('click', e=>{
    e.preventDefault()
});

// function validacion(correo){
    // let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // let esValido = expReg.test(correo); 

    if(esValido==true) {
        alert("El email es válido");

    }
    else{
        alert("El email no es válido");

    }
