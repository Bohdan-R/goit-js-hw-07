const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('#controls > input');
const boxesRef = document.querySelector('#boxes');

renderRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyRef.addEventListener('click', destroyBoxes);

function creatRandomRGB() {
    return Math.floor(Math.random() * (255 - 1) + 1);
};

function createBoxes(amount) {
    destroyBoxes();

    const arrayOfBoxes = new Array();     

    for (let i = 0; i < amount; i += 1) {
        const boxItem = document.createElement('div');
        boxItem.classList.add('boxes__item');
        boxItem.style.backgroundColor = `rgb(${creatRandomRGB()},${creatRandomRGB()},${creatRandomRGB()}`;
        boxItem.style.width = `${30 + 10 * i}px`;
        boxItem.style.height = `${30 + 10 * i}px`;
        /* boxItem.setAttribute('style', `background-color: rgb(${creatRandomRGB()},${creatRandomRGB()},${creatRandomRGB()}); 
        width: ${30 + 10 * i}px; height: ${30 + 10 * i}px`); */
        arrayOfBoxes.push(boxItem);
    };

    boxesRef.append(...arrayOfBoxes);
    return boxesRef;
};

function destroyBoxes() {
    boxesRef.innerHTML = ''; 
}