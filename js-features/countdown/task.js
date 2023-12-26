const timer = document.getElementById("timer");
let time = timer.textContent;
let timerId = setInterval(() => {
    time--;
    if (time <= 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе");
    }
    timer.textContent = time;
}, 1000);