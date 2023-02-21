
//cambiar idioma
const selectIdioma = document.getElementById('flags');
  //todos los textos a cambiar
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`../idiomas/${language}.json`);
    const texts = await requestJson.json(); 
     console.log(texts);
      //bucle para recorrer todos los textos a cambiar 
    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value];
    }
};

selectIdioma.addEventListener('click', (e) => {
    changeLanguage(e.target.value);
});


//popup de salida
// Agrega un event listener a la ventana
window.addEventListener('mouseout', function(event) {
    // Si el puntero del ratón sale de la ventana
    if (event.clientY < 0) {
      // Muestra el popup
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    }
  });
  
  // cerrar popup al clickar fuera
  var modal = document.getElementById('myModal');
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });


  //Funcion para mostrar fecha
  function showDate() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date();
    const day = days[date.getDay()];
    const dia = date.getDate();
    const hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById("fecha").innerHTML = `${day} ${dia} de ${month} del ${year} a las ${hour}:${minutes}`;
  }
  
  showDate();
