const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector(`.poll__title`);
const pollAnswers = document.querySelector(`.poll__answers`);


xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

xhr.onload = function (data) {
    if (xhr.status === 200) {
        let sData = data.target.response;
        let oData = JSON.parse(sData);
        pollTitle.textContent = oData.data.title;
        oData.data.answers.forEach(function (item) {
            const button = document.createElement('button');
            button.setAttribute("class", "poll__answer");
            button.textContent = item;
            button.style.marginRight = "0.5rem";
            button.addEventListener("click", () => alert("Спасибо, ваш голос засчитан!"));
            pollAnswers.appendChild(button);
        });
    }
}