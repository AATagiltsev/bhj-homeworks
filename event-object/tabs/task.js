let tabs = document.querySelectorAll('.tab');
let contents = document.querySelectorAll('.tab__content');
let activeTab = document.querySelector('.tab_active');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', showTab);
}

function showTab() {
    activeTab.classList.remove('tab_active');
    contents.forEach(function (content) {
        content.classList.remove('tab__content_active');
    });
    this.classList.add('tab_active');
    activeTab = this;
    let indexTab = Array.from(tabs).findIndex(function (tab) {
        return tab.classList.contains('tab_active');
    });
    contents[indexTab].classList.add('tab__content_active');
}