let counterValue = 0;
const refsCounter = {
    value: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}

refsCounter.value.textContent = counterValue;
const onDecrement = () => {
    counterValue -= 1;
    refsCounter.value.textContent = counterValue;
}
const onIncrement = () => {
    counterValue += 1;
    refsCounter.value.textContent = counterValue;
}

refsCounter.decrementBtn.addEventListener('click', () => onDecrement());
refsCounter.incrementBtn.addEventListener('click', () => onIncrement());
