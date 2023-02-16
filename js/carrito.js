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

const productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito "));

console.log(productosEnCarrito);
  