const inputValidationElem = document.querySelector("#validation-input");
const dataLengthElem = Number(inputValidationElem.dataset.length);

function checkDataLength(event) {
    if (event.currentTarget.value.length === dataLength) {
        event.currentTarget.classList.add("valid");
    } else {
         event.currentTarget.classList.add("invalid");
    }
}
inputValidationElem.addEventListener('blur', checkDataLength)