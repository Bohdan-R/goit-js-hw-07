const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

/* const valueRef = document.querySelector('#value');
let counterValue = 0;

function decrementValue() {  
    if (counterValue <= 0) {
        counterValue = 0;
        valueRef.textContent = counterValue;
    } else {
        counterValue -= 1;
        valueRef.textContent = counterValue;
        console.log(counterValue)
    }  
}

function incrementVaule() {
    counterValue += 1;
    valueRef.textContent = counterValue;
    console.log(counterValue)
}

decrementRef.addEventListener('click', decrementValue);
incrementRef.addEventListener('click', incrementVaule); */

const counterValue = document.querySelector('#value');

decrementRef.addEventListener('click', decrementValue);
incrementRef.addEventListener('click', incrementVaule);

function decrementValue() {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};
function incrementVaule() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};