const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientElem = ingredients.map(ingredient => {
  const ingredientElem = document.createElement('li')
  console.log(ingredientElem);
  ingredientElem.textContent = ingredient;

  return ingredientElem;
})

const ingredientElemList = document.querySelector('#ingredients')
ingredientElemList.append(...ingredientElem)