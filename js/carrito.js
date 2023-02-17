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




<<<<<<< HEAD
// //  esto hace la suma del carrito
// const price1 = parseFloat(document.getElementById("precioSinDescuento").innerHTML);
// const price2 = parseFloat(document.getElementById("envio").innerHTML);
// const discount = parseFloat(document.getElementById("descuento").innerHTML) / 100;

// const total = (price1 + price2) * (1 - discount);
// document.getElementById("total").innerHTML = total;
=======
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
>>>>>>> 79c19dc102c33927eef27c74e88974c8e02c30a9


//agregar al carrito

let productosEnCarrito = localStorage.getItem("productosEnCarrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const carritoVacio = document.querySelector("#carritoVacio");
const carritoProductos = document.querySelector("#carrito-Productos");
const carritoAcciones = document.querySelector("#carritoAcciones");
const btnVaciar = document.querySelector("#carrito-accion-vaciar");
let  caja1 = document.querySelector(".caja1");

console.log(productosEnCarrito);

if (productosEnCarrito) {

console.log(productosEnCarrito);

  productosEnCarrito.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("carrito-productos", "tarjeta", "d-flex", "mb-2");
    div.innerHTML = 
    `<img class="m-3" src="${producto.imagen}" alt="${producto.nombre}">
    <div class="descripcion w-100 row align-items-center">
      <div class="">
        <h5 data-section="carrito" data-value="pienso" class="border-bottom">${producto.nombre}</h5>
        <div class="d-flex">
          <p data-section="carrito" data-value="cantidad">Cantidad: ${producto.cantidad}</p>
          <div class="d-flex justify-content-end w-100 gap-1">
            <button class="btn-mas border rounded " onclick="changeValue('number1', 'decrease')">-</button>
            <input class="number inputNumero rounded" type="text" id="number1" value="0">
            <button class=" btn-menos border rounded" onclick="changeValue('number1', 'increase')">+</button>
          </div>
        </div>
      </div>
      <div class="d-flex border-bottom">
        <p data-section="carrito" data-value="precio">Precio:</p>
        <p class="d-flex justify-content-end w-100">${producto.precio}€</p>
      </div>
    </div>
    `
    caja1.appendChild(div);
    
    
  });

}
  

