const nameInputElem = document.querySelector('#name-input');
const nameOutputElem = document.querySelector('#name-output');

const nameDefaultText = nameOutputElem.textContent;
nameInputElem.addEventListener('input', onInputChange);

function onInputChange({currentTarget: {value}}) {
    nameOutputElem.textContent = value.length === 0 ? `${nameDefaultTwxt}` : value;
    }