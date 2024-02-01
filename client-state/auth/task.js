const xhr = new XMLHttpRequest();
const signInForm = document.getElementById("signin__form");
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem("loginedUser")) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem("loginedUser");
} else {
    welcome.classList.remove('welcome_active');
}

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.onload = () => {
        if (xhr.status.toLocaleString().includes(20)) {
            if (JSON.parse(xhr.response).success) {
                let uid = JSON.parse(xhr.response).user_id;
                localStorage.setItem("loginedUser", uid);
                userId.innerText = uid;
                welcome.classList.add("welcome_active");
            }
        } else {
            alert(xhr.statusText)
        }
    }

    let data = new FormData(signInForm);
    xhr.send(data);
});