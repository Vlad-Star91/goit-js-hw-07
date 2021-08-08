const counterValueElem = document.querySelector('#value');
const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const incrementBtnElem = document.querySelector('[data-action="increment"]');

decrementBtnElem.addEventListener('click', onDecrementClick)
incrementBtnElem.addEventListener('click', onIncrementClick)

function onDecrementClick() {
    counterValueElem.textContent -= 1;
}

function onIncrementClick() {
    counterValueElem.textContent = Number(counterValueElem.textContent) + 1;
}