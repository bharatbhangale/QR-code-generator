let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrtext = document.getElementById('qrtext');
let button = document.createElement('btn');

button.addEventListener('click', () => {
    let trimmedText = qrtext.value.trim();
    if (trimmedText.length > 0) {
        let encodedText = encodeURIComponent(trimmedText);
        let QIcodeurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(encodedText)`;
        qrImage.src = QIcodeurl;
        imgBox.classList.add("show-img");
    }
    else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
})