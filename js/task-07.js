const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.min = 18;
inputRef.max = 30;
inputRef.step = 1;
/* textRef.setAttribute('style', 'font-size: 30px'); */
textRef.style.fontSize = '30px';

inputRef.addEventListener('input', changeFontSize);

function changeFontSize (e) {
/* textRef.attributes.style.value = `font-size: ${e.target.value}px`; */
    textRef.style.fontSize = `${e.target.value}px`;
};

