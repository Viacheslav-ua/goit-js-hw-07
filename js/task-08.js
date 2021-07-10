function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}

function createBoxes(amount) {
    let size = 30;
    const boxesFragment = new DocumentFragment();

    for (let i = 0; i < amount; i += 1) {
        const boxEl = document.createElement('div');
        boxEl.style.width = size + 'px';
        boxEl.style.height = size + 'px';
        boxEl.style.backgroundColor = randomRGB();
        boxesFragment.appendChild(boxEl);
        size += 10;
    }
    return boxesFragment
}

function destroyChild(parent) {
    if (parent.children.length === 0) return;
    const countElements = parent.children.length;
    for (let i = 0; i < countElements; i += 1) {
        parent.removeChild(parent.children[0]);
    }
}

const refs = {
    boxes: document.querySelector('#boxes'),
    inputQty: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
};

refs.renderBtn.addEventListener('click', () => {
    destroyChild(refs.boxes);
    refs.boxes.appendChild(createBoxes(refs.inputQty.value));
});

refs.destroyBtn.addEventListener('click', () => {
    destroyChild(refs.boxes);
});