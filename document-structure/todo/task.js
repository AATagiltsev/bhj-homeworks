const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');
const addBtn = document.querySelector('.tasks__add');
const item = document.createElement('div');

addBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!input.value.length) {
        return false;
    }
    item.innerHTML += `  <div class="task">
                            <div class="task__title">${input.value}</div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>
                    `;
    debugger
    list.appendChild(item);
    input.value = '';
});

list.addEventListener("click", function (event) {
    if (~Array.from(event.target.classList).indexOf("task__remove")) {
        event.target.parentElement.remove();
    }
});