const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationInput); 

function validationInput(e) {
    if (e.target.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
        return;
    };

    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
};


