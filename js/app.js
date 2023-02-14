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





  












