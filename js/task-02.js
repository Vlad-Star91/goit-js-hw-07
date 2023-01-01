const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Greens",
  "Spices",
];

const ingredientElem = ingredients.map((ingredient) => {
  const ingredientElem = document.createElement("li");
  console.log(ingredientElem);
  ingredientElem.textContent = ingredient;

  return ingredientElem;
});

const ingredientElemList = document.querySelector("#ingredients");
ingredientElemList.append(...ingredientElem);
