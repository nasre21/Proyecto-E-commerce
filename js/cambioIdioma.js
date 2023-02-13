const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`../idiomas/${language}.json`);
    const texts = await requestJson.json();

    for(textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        console.log(section, value);
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});
