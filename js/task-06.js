const inputValidationElem = document.querySelector("#validation-input");
const dataLengthElem = Number(inputValidationElem.dataset.length);

function checkDataLength(event) {
    if (event.currentTarget.value.length === dataLengthElem && !event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.add("valid");
        return;
    }
    if(event.currentTarget.value.length != dataLengthElem && event.currentTarget.classList.contains('valid')){
        event.currentTarget.classList.add("invalid");
         return;
    }
    if (event.currentTarget.value.length === dataLengthElem && event.currentTarget.classList.contains('invalid')) {
        event.currentTarget.classList.replace("invalid", 'valid');
         return;
    }
    }

inputValidationElem.addEventListener('blur', checkDataLength)