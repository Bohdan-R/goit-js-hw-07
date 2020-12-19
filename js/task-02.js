const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredientItem = ingredient => {
    const vegetableItemRef = document.createElement('li');
    vegetableItemRef.classList.add('ingredients__item');
    vegetableItemRef.textContent = ingredient;

    return vegetableItemRef;
};

const ingredientsItem = ingredients.map(ingredient => createIngredientItem(ingredient));
console.log(ingredientsItem);

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsItem);
