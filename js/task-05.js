const nameInputElem = document.querySelector("#name-input");
const nameOutputElem = document.querySelector("#name-output");

const nameDefaultText = nameOutputElem.textContent;
nameInputElem.addEventListener("input", onInputChange);

function onInputChange(valueEl) {
  nameOutputElem.textContent = valueEl.currentTarget.value.trim() || "stranger";
}
