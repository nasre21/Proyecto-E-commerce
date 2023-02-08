// link Catalogo
const buTon = document.getElementById("imagen1");
const buTon2 = document.getElementById("imagen2");
const buTon3 = document.getElementById("imagen3");
const buTon4 = document.getElementById("imagen4");
const buTon5 = document.getElementById("imagen5");
const buTon6 = document.getElementById("imagen6");








buTon.addEventListener("click",open);

function open(){
  let estado = buTon.getAttribute("src", "/image/perros/dog-comida.png");
  if(estado == buTon.getAttribute("src", "/image/perros/dog-comida.png")git){
    document.location.assign("/descripcionproducto.html");
   }
  }
  buTon2.addEventListener("click",open2);

function open2(){
  let estado1 = buTon.getAttribute("src", "/image/gatos/img_de_gato3.png");
  if(estado1 == buTon.getAttribute("src", "/image/gatos/img_de_gato3.png")){
    document.location.assign("/descripcionproducto.html");
   }
  }

  
  
  