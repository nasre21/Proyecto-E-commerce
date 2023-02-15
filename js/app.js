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

//cambiar idioma
const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`../idiomas/${language}.json`);
    const texts = await requestJson.json();
     console.log(texts);
     
    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.value);
});




//popup de salida
// Agrega un event listener a la ventana
window.addEventListener('mouseout', function(event) {
    // Si el puntero del ratón sale de la ventana
    if (event.clientY < 0) {
      // Muestra el modal
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
    }
  });
  
  // Agrega un event listener para cerrar el modal cuando se hace clic en cualquier parte fuera del modal
  var modal = document.getElementById('myModal');
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });




  












