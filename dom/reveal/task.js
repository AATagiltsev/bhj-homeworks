const aReveals = document.querySelectorAll(".reveal");

function showElement(element) {
    const { top, bottom } = element.getBoundingClientRect();
    return (bottom < 0 || top > window.innerHeight) ? false : true;
}

window.addEventListener("scroll", function () {
    aReveals.forEach(function (reveal) {
        if (showElement(reveal)) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });
});