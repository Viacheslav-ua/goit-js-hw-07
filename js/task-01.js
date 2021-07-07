const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.childElementCount} категории.`);

const itemsEl = document.querySelectorAll('.item');
itemsEl.forEach(item => {
    console.log('Категория:', item.firstElementChild.textContent);
    console.log('Количество элементов:', item.lastElementChild.childElementCount);
});
