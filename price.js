// КАЛЬКУЛЯТОР

function calculate() {

const price =
parseInt(
document.getElementById("servicePrice").value
);

const quantity =
parseInt(
document.getElementById("quantity").value
);

const total = price * quantity;

document.getElementById("result").innerHTML =
total.toLocaleString("ru-RU") + " сум";

}

// ПОИСК УСЛУГ

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

const value =
this.value.toLowerCase();

const services =
document.querySelectorAll(".service");

services.forEach(service => {

const text =
service.innerText.toLowerCase();

if (text.includes(value)) {

service.style.display = "flex";

} else {

service.style.display = "none";

}

});

});

// АНИМАЦИЯ КАРТОЧЕК

const observer =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document
.querySelectorAll(".category")
.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

// ПОДСЧЕТ УСЛУГ

const totalServices =
document.querySelectorAll(".service").length;

console.log(
"Всего услуг:",
totalServices
);

// НЕОНОВОЕ МЕРЦАНИЕ ЛОГО

const logo =
document.querySelector(".logo");

setInterval(() => {

logo.style.textShadow =
"0 0 15px red, 0 0 30px red";

setTimeout(() => {

logo.style.textShadow =
"0 0 8px red";

},500);

},2500);

// ПЛАВНАЯ ПРОКРУТКА

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});