const numberOfCategories = document.querySelector('#categories');
console.log(`В списке ${numberOfCategories.children.length} категории.`);
// console.log(numberOfCategories.children);

const heading = numberOfCategories.children;
// console.log(heading[0].children[0].textContent);
// console.log(heading[0].children[1].children.length);
// console.log(heading);

// Вариант 1 ===================================

/* for (const head of heading) {
   
    console.log(`Категория: ${head.children[0].textContent}`);
    console.log(`Количество элементов: ${head.children[1].children.length}`);
}; */

// Вариант 2 ===================================

/* for (const num of numberOfCategories.children) {

    console.log(`Категория: ${num.children[0].textContent}`);
    console.log(`Количество элементов: ${num.children[1].children.length}`);
} */

// Вариант 3 ===================================

const itemRef = document.querySelectorAll('.item');

for (const item of itemRef) {
    console.log(`Категория: ${item.children[0].textContent}`);
    console.log(`Количество элементов: ${item.children[1].children.length}`);
}
