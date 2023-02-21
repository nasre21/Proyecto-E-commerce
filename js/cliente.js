// const imgDiv = document.querySelector('.user-img');
// const img = document.querySelector('#photo');
// const file = document.querySelector('#file');
// const uploadbtn = document.querySelector('#uploadBtn');

// file.addEventListener('change', function(){
//   const chosedfile = this.files[0];
//   if (chosedfile){
//     const reader = new FileReader();

//     reader.addEventListener('load', function(){
//       img.setAttribute('src', reader.result)
//     })

//   reader.readAsDataURL(chosedfile);

//   }
// });


let divUsuario = document.querySelector(".usuario-container");

let datosUsuarioLS = sessionStorage.getItem("usuarioLogeado");


let miPerfil = document.querySelector("miPerfil");

let datosUsuario = JSON.parse(datosUsuarioLS);

window.onload = function() {
  document.onclick = rellenarDatos(datosUsuario);
  } 

function rellenarDatos(datosUsuario){

   //divUsuario.innerHTML = "";

   console.log(datosUsuario);

  divUsuario.innerHTML = `
  

  <div class="d-flex flex-column ">
    <div class="gap-5">
      <p>Usuario: ${datosUsuario.usuario}</p>
    </div>

    <div class="gap-5">
    <p>Nombre: ${datosUsuario.nombre}</p>
  </div>

  <div class="gap-5">
  <p>Apellidos: ${datosUsuario.apellidos}</p>
</div>
<div class="gap-5">
<p>Edad: ${datosUsuario.edad}</p>
</div>
<div class="gap-5">
<p>Email: ${datosUsuario.correo}</p>
</div>

<div class="gap-5">
<p>Direccion: ${datosUsuario.calle}</p>
<p>Portal: ${datosUsuario.portal}</p>
<p>Piso: ${datosUsuario.piso}</p>
<p>CP: ${datosUsuario.codigoPostal}</p>
<p>Provincia: ${datosUsuario.provincia}</p>
</div>

<div class="gap-5">
<p>Telefono: ${datosUsuario.telefono}</p>
</div>

<div class="gap-5">
<p>DNI/NIE/Pasaporte: ${datosUsuario.identificacion}</p>
</div>
  </div>`
}

