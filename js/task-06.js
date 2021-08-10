const inputValidationElem = document.querySelector("#validation-input");
const dataLengthElem = Number(inputValidationElem.dataset.length);

inputValidationElem.addEventListener('blur', checkDataLength)

function checkDataLength(event) {
    if (event.currentTarget.value.length === dataLengthElem) {
        event.currentTarget.classList.add("valid");
    } else {
         event.currentTarget.classList.add("invalid");
    }
}
