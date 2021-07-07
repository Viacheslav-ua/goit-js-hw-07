const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
const listEl = new DocumentFragment();

ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  listEl.appendChild(ingredientEl);
});

ingredientsEl.appendChild(listEl);