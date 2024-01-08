const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');

let items = Array.from(list.children);

function showList() {
    if (list.classList.contains('dropdown__list_active')) {
        hideList();
        return false;
    }
    list.classList.add('dropdown__list_active');
}

function hideList() {
    list.classList.remove('dropdown__list_active');
}

value.addEventListener('click', showList);

items.forEach(function (item, index) {
    item.onclick = function () {
        hideList();
        value.textContent = items[index].textContent;
        return false;
    }
});
