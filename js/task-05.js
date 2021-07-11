const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', (event) => {
    event.currentTarget.value.trim() 
        ? refs.nameOutput.textContent = event.currentTarget.value
        : refs.nameOutput.textContent = 'незнакомец';
});