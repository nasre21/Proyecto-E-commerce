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





  












