const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === 0) {
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
        return
    }
    if(Number(event.target.dataset.length) === event.currentTarget.value.length) {
         inputEl.classList.remove('invalid');
         inputEl.classList.add('valid');
    } else {
         inputEl.classList.remove('valid');
         inputEl.classList.add('invalid');
    }
});