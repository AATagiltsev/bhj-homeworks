const book = document.getElementById("book");
const buttons = document.querySelectorAll(".font-size");
buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        button.classList.add("font-size_active");

        book.classList.remove("font-size_small");
        book.classList.remove("font-size_big");

        if (button.dataset.size === "small") {
            book.classList.add("font-size_small");
        } else if (button.dataset.size === "big") {
            book.classList.add("font-size_big");
        }
    });
});