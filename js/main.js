//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Яa-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Данные введены";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Некорректные данные";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[а-яА-Яa-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Данные введены";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Некорректные данные";
        return false;
    }
    console.log('ee')
}

//Checking of Destination field
function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[а-яА-Яa-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { // if testing of dest is true
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Данные введены";
        return true;
    }
    else {// if it's not
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Некорректные данные";
        return false;
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Номер введен";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Некорректный номер";
        return false;
    }
}

function checkDate() {
    if (document.getElementById("date").value.length) {
        document.getElementById("date_time_Check").style.color = "green";
        document.getElementById("date_time_Check").innerHTML = "Дата выбрана";
        return true;
    }
    else {// if it's not
        document.getElementById("date_time_Check").style.color = "red";
        document.getElementById("date_time_Check").innerHTML = "Вы не выбрали дату";
        return false;
    }
}

function checkTime() {
    if (document.getElementById("time").value.length) { // if testing of first is true
        document.getElementById("date_time_Check").style.color = "green";
        document.getElementById("date_time_Check").innerHTML = "Время выбрано";
        return true;
    }
    else {// if it's not
        document.getElementById("date_time_Check").style.color = "red";
        document.getElementById("date_time_Check").innerHTML = "Вы не указали время";
        return false;
    }
}

function checkQuant() {
    if (document.getElementById("quantity").value.length) { // if testing of first is true
        document.getElementById("quant_Check").style.color = "green";
        document.getElementById("quant_Check").innerHTML = "Количество выбрано";
        return true;
    }
    else {// if it's not
        document.getElementById("quant_Check").style.color = "red";
        document.getElementById("quant_Check").innerHTML = "Вы не указали количество";
        return false;
    }
}

//Collect and output all the data
document.querySelector(".form1").onsubmit = function (e) { e.preventDefault() }
function outputData(e) {

    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш заказ принят. Мы свяжемся с вами в ближайшее время. Детали Вашего заказа: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Место назначения " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Дата и время " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Количество человек " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Мы рады, что вы пользуетесь услугами нашей компании :)</p>";
    }
    else {
        document.getElementById("summary").style.color = "red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}

function mouseOver() {
    const elem = document.getElementById("abc");
    elem.style.color = "pink";
    elem.querySelector('span').style.color = "pink";
}

function mouseOut() {
    const elem = document.getElementById("abc");
    elem.style.color = "gray";
    elem.querySelector('span').style.color = "gray";
}

function buttonClick() {
    if (document.getElementById("button1").style.display == "block") {
        document.getElementById("button1").style.display = "none"
    }
    else { document.getElementById("button1").style.display = "block" }
}

$('.button2').click(function () {
    $('.input1').slideUp(1000)
})

$('.button3').click(function () {
    $(this).fadeOut(1000);
    setTimeout(() => { alert('Ядерные ракеты запущены') }, 1000)
})
