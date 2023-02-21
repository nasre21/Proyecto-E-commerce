window.addEventListener("focus", () => {
  window.location.reload();
});

//agregar al carrito
let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);


const carritoVacio = document.querySelector(".carrito-producto");
const carritoProductos = document.querySelector("#carrito-Productos");
const carritoAcciones = document.querySelector("#carritoAcciones");
const btnVaciar = document.querySelector("#carrito-accion-vaciar");
let  caja1 = document.querySelector(".caja1");
let borrarProducto = document.querySelector(".carrito-eliminar-producto")
let totalPrecio = 0
let precioporcantidad = 0
let cantidadtotal = 0

function cargarproductosCarrito() {
  if (productosEnCarrito){

  productosEnCarrito.forEach(producto => {

     precioporcantidad = producto.precio * producto.cantidad


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
          <p class="numeroParrafo">${producto.cantidad}</p>
          </div>
        </div>
      </div>
      <div class="d-flex border-bottom">
        <p data-section="carrito" data-value="precio">Precio:</p>
        <p class="d-flex justify-content-end w-100 precioIndividual">${producto.precio}€</p>
      </div>
      <div class="d-flex border-bottom">
        <p data-section="carrito" data-value="precio">Total:</p>
        <p class="d-flex justify-content-end w-100 precioIndividual">${precioporcantidad}€</p>
        </div>
        </div>
        <buttom class="carrito-eliminar-producto fa-2x ms-5" id="${producto.id}">
        <i class="fa-solid fa-delete-left"></i>
        <buttom>
        </div>
    `
    carritoVacio.appendChild(div);
    totalPrecio += precioporcantidad
    cantidadtotal += producto.cantidad

  });

 document.getElementById("precioSinDescuento").innerHTML = parseInt(totalPrecio) ;

}
 actualizarBotoneseliminar();

}

cargarproductosCarrito();

 function actualizarBotoneseliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-eliminar-producto");

botonesEliminar.forEach (boton =>{
  boton.addEventListener("click", eliminarDelCarrito)

})

}

function eliminarDelCarrito (e){
  const idBoton = e.currentTarget.id;
  const index =  productosEnCarrito.findIndex(producto => producto.id === idBoton);
  productosEnCarrito.splice(index, 1 );


   localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
location.reload();

}

btnVaciar.addEventListener("click", vaciarCarrito,);

function vaciarCarrito(){
  productosEnCarrito.length = 0;
  localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
  cargarproductosCarrito();
  location.reload();
}






//  esto hace la suma del carrito
const price1 = Math. trunc(totalPrecio)
const price2 = parseInt(document.getElementById("envio").innerHTML);
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


//descuento al carrito cuando se compran mas de 5 productos


console.log(cantidadtotal)
const checkbox = document.getElementById("descuento");

if (cantidadtotal > 5) {
  checkbox.disabled = false;
} else {
  checkbox.disabled = true;
}

//texto que sale al hacer hover en checkbox
checkbox.addEventListener("mouseover", () => {
  checkbox.title = "Descuento activo con la compra de mas de 5 productos";
});

checkbox.addEventListener("mouseout", () => {
  checkbox.title = "";
});

const btncantidad = document.getElementById("btncantidad")
 btncantidad.addEventListener("input", () => {
  console.log(btncantidad.value);
});
