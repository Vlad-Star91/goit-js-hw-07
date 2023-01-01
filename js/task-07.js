const inputSizeControlElem = document.querySelector("#font-size-control");
const textElem = document.querySelector("#text");

function changeFontSize(event) {
  const textSize = event.target.value;
  textElem.style.fontSize = `${textSize}%`;
}
inputSizeControlElem.addEventListener("input", changeFontSize);
