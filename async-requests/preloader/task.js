const xhr = new XMLHttpRequest();
const busy = document.getElementById("loader");
const items = document.getElementById("items");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.onload = function (data) {
    if (xhr.status === 200) {
        
        let sData = data.target.response;
        let oData = JSON.parse(sData);

        items.insertAdjacentHTML("afterbegin", Array.from(Object.values(oData.response.Valute)).map(elem =>
            `<div class="item">
                <div class="item__code">
                    ${elem.CharCode}
                </div>
                <div class="item__value">
                    ${elem.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`).join(""));
        busy.classList.toggle("loader_active");
    }
}

xhr.send();