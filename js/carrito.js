// suma y resta productos del carrito
function changeValue(id, operation) {
  var value
    = parseInt(document.getElementById(id).value, 10);
  value = isNaN(value) ? 0 : value;
  if (operation === "increase") {
    value++;
  } else if (operation === "decrease") {
    value = (value > 0) ? value - 1 : 0;
  }
  document.getElementById(id).value = value;
}




//  esto hace la suma del carrito
const price1 = parseFloat(document.getElementById("precioSinDescuento").innerHTML);
const price2 = parseFloat(document.getElementById("envio").innerHTML);
const totalConIva = (price1 + price2);
document.getElementById("total").innerHTML = totalConIva;

//aplicar el descuento de iva
const descuento = document.getElementById("descuento");
descuento.addEventListener("change", () => {
  if(descuento.checked){
    const quitarIva = totalConIva * (100 - 21)/100;
    document.getElementById("total").innerHTML = quitarIva;
  }else{
    document.getElementById("total").innerHTML = totalConIva;
  }
})



//agregar al carrito

let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector(".carrito-producto");
const carritoProductos = document.querySelector("#carrito-Productos");
const carritoAcciones = document.querySelector("#carritoAcciones");
const btnVaciar = document.querySelector("#carrito-accion-vaciar");
let  caja1 = document.querySelector(".caja1");
let totalPrecio = 0
let precioporcantidad = 0

console.log(productosEnCarrito);

if (productosEnCarrito) {



   productosEnCarrito.forEach(producto => {

      precioporcantidad = producto.precio * producto.cantidad
      console.log(precioporcantidad)

     const div = document.createElement("div");
     div.classList.add("carrito-productos", "tarjeta", "d-flex", "mb-2");
     div.innerHTML = 
     ` <div class="carrito-productos tarjeta d-flex mb-2 w-100">
     <img class="m-3" src="${producto.imagen}" alt="${producto.nombre}">
     <div class="descripcion w-100 row align-items-center">
       <div class="">
         <h5 data-section="carrito" data-value="pienso" class="border-bottom">${producto.nombre}</h5>
         <div class="d-flex">
           <p data-section="carrito" data-value="cantidad">Cantidad:</p>
           <div class="d-flex justify-content-end w-100 gap-1">
           <input type="number" min="0" name="contadorcarrito" class=" contadorcarrito w-25 text-center" value="${producto.cantidad}">
           </div>
         </div>
       </div>
       <div class="d-flex border-bottom">
         <p data-section="carrito" data-value="precio">Precio:</p>
         <p class="d-flex justify-content-end w-100 precioIndividual">${producto.precio}€</p>
       </div>
       <div class="d-flex border-bottom">
         <p data-section="carrito" data-value="precio">Precio Total:</p>
         <p class="d-flex justify-content-end w-100 precioIndividual">€</p>
       </div>
     </div>
   </div>
     `
     carritoVacio.appendChild(div);
    
     
   });
   
   
 }
  

