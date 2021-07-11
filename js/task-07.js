const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const onChangeFontSize = () => textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', onChangeFontSize);