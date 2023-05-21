const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// get ingredients
const listEl = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = el;
  listEl.append(liEl);
});
