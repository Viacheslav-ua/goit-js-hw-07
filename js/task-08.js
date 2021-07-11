const refs = {
    boxes: document.querySelector('#boxes'),
    inputQty: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
};

function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

function destroyBoxes() {
    refs.boxes.innerHTML='';
}

function createBoxes(amount) {
    let size = 30;
    const arrBoxes = [];
    for (let i = 0; i < amount; i += 1) {
        arrBoxes[i] = document.createElement('div');
        arrBoxes[i].style.width = size + 'px';
        arrBoxes[i].style.height = size + 'px';
        arrBoxes[i].style.backgroundColor = randomRGB();
        size += 10;
    }
    // destroyBoxes();
    refs.boxes.append(...arrBoxes);
}

refs.renderBtn.addEventListener('click', () => {
    createBoxes(refs.inputQty.value);
});

refs.destroyBtn.addEventListener('click', destroyBoxes);