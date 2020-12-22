const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInputBlur);

function handleInputBlur(e) {
    if (e.target.value === '') {
        nameLabelRef.textContent = 'незнакомец'
        return;
    };
    
    nameLabelRef.textContent = e.target.value;
};