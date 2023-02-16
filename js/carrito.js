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
const discount = parseFloat(document.getElementById("descuento").innerHTML) / 100;

const total = (price1 + price2) * (1 - discount);
document.getElementById("total").innerHTML = total;


//agregar al carrito

const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito "));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-acciones-comprar");

if (productosEnCarrito) {
  contenedorCarritoVacio.classList.add("disabled");
  contenedorProductos.classList.remove("disabled");
  contenedorCarritoAcciones.classList.remove("disabled");
  contenedorCarritoComprado.classList.add("disabled");

  productosEnCarrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("carrito-productos");
        div.innerHTML = 
        ` <div class=" caja1 w-100 justify-content-center m-lg-3 p-4 ">
        <h3 class="mb-4 border-bottom border-3 border-dark "></h3>
      <div class="tarjeta d-flex mb-2 ">
        <img class="m-3" src="${productos.imagen}" alt="${productos.titulo}">
        <div class="descripcion w-100 row align-items-center">
          <div class="">
            <h5 class="border-bottom">${productos.nombre}</h5>
            <div class="d-flex">
              <p data-section="carrito" data-value="cantidad">${productos.cantidad}</p>
              <div class="d-flex justify-content-end w-100 gap-1">
                <button class="btn-mas border rounded " onclick="changeValue('number1', 'decrease')">-</button>
                <input class="number inputNumero rounded" type="text" id="number1" value="0">
                <button class=" btn-menos border rounded" onclick="changeValue('number1', 'increase')">+</button>
              </div>
            </div>
          </div>
          <div class="d-flex border-bottom">
            <p data-section="carrito" data-value="precio">Precio:</p>
            <p class="d-flex justify-content-end w-100">${productos.precio}</p>
          </div>
        </div>
      </div>
      div de la derecha
      <div id="carrito-productos" class="divderecha w-100 me-4 ">
        <h3 class="border-bottom border-3 border-dark mb-5" data-section="carrito" data-value="resumen">Resumen</h3>
        <div class="envio d-flex">
          <p class="w-75">Precio envio:</p>
          <p id="envio" class="text-end">15<span>€</span></p>
        </div>
        <div class="d-flex border-bottom border-2 border-dark-subtle">
          <p class="w-75">Sub Total:</p>
          <p id="subtotal" class="text-end">${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id="${productos.id}"><i class="bi bi-trash-fill"></i></button>
        <div class="d-flex border-bottom border-2 border-dark-subtle mt-5 mb-4">
          <h4 class="w-75"> Total:</h4>
          <p id="total" class="h4 text-end"></p>

    `
  })
  
}else{

}