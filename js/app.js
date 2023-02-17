
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




  












