const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.onclick = function () {
    let clicks = counter.textContent++;
    clicks % 2 == 0 ? cookie.width = 150 : cookie.width = 200;
}