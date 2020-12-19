const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationInput); 

function validationInput(e) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');

    if (e.target.value.length !== Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    };
}


