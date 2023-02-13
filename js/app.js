// mostrar fecha en pantalla 
function showDate() {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  document.getElementById("fecha").innerHTML = `${day} de ${month} del ${year}`;
}

showDate();


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
  const discount = parseFloat(document.getElementById("descuento").innerHTML)/100;
  
  const total = (price1 + price2) * (1 - discount);
  document.getElementById("total").innerHTML = total;


  












