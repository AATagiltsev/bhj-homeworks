const textArea = document.getElementById("editor");
const resetBtn = document.getElementById("clear");

let savedText = localStorage.getItem("text");

if (savedText) {
    textArea.value = savedText;
}

textArea.addEventListener('change', (e) => {
    e.preventDefault();
    localStorage.setItem("text", textArea.value.trim());
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = "";
    localStorage.removeItem("text");
});