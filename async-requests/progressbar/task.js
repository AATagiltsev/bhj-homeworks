const xhr = new XMLHttpRequest();
const progressBar = document.getElementById('progress');
const inputFile = document.getElementById('file');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', function (event) {
    event.preventDefault();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function (event) {
        progressBar.value += event.loaded / event.total;
    }

    xhr.upload.onload = function (event) {
        if (event.loaded === event.total) {
            alert('Данные успешно отправлены.');
        } else {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        }
    }

    xhr.send(inputFile.files[0]);
});

