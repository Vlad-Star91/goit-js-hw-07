const inputValidationElem = document.querySelector("#validation-input");
const dataLengthElem = Number(inputValidationElem.dataset.length);

function checkDataLength(event) {
    const { currentTarget } = event;
    if (currentTarget.value.length === dataLengthElem) {
        currentTarget.classList.remove('invalid');
        currentTarget.classList.add("valid");
    } else {
        currentTarget.classList.remove("valid");
        currentTarget.classList.add("invalid");
            }
       }

inputValidationElem.addEventListener('blur', checkDataLength)