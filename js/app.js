
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




  












