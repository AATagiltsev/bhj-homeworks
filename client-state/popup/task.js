const popup = document.getElementById('subscribe-modal');
const closePopup = popup.firstElementChild.firstElementChild;

if (!getCookie('show-popup').length) {
    popup.classList.add('modal_active');
};

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    return parts.length === 2 ? parts.pop().split(";").shift() : [];
}

closePopup.addEventListener('click', e => {
    e.preventDefault();
    popup.classList.remove('modal_active');
    setCookie('show-popup', 'false');
});