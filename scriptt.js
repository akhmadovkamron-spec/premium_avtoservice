// Плавное появление блоков

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.15
});

document.querySelectorAll(".card, .gallery-grid img, .contact-info, .contact-form")
.forEach((el)=>{
    observer.observe(el);
});

// Отправка формы

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const btn = form.querySelector("button");

        btn.innerText = "ОТПРАВЛЕНО ✓";

        btn.style.background = "#28a745";

        setTimeout(()=>{
            btn.innerText = "ОТПРАВИТЬ ЗАЯВКУ";
            btn.style.background = "#e10600";
            form.reset();
        },3000);

    });

}

// Фиксированная шапка

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.style.background = "#000";
    }else{
        header.style.background = "rgba(0,0,0,.9)";
    }

});

// Плавная прокрутка меню

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});

const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {

    burger.classList.toggle("active");
    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        burger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});

const counters = document.querySelectorAll(".counter");

const runCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if(current < target){

                counter.innerText =
                Math.ceil(current + increment);

                setTimeout(updateCounter,20);

            }else{

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

const statsObserver = new IntersectionObserver(entries => {

    if(entries[0].isIntersecting){

        runCounters();
        statsObserver.disconnect();

    }

});

statsObserver.observe(statsSection);


function searchServices() {

    let input =
    document.getElementById("serviceSearch");

    let filter =
    input.value.toUpperCase();

    let services =
    document.querySelectorAll(".price-item");

    services.forEach(item => {

        let text =
        item.textContent || item.innerText;

        if(text.toUpperCase().indexOf(filter) > -1){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }

    });
}

function calculateService(){

    let servicePrice =
    parseInt(
        document.getElementById(
            "calculatorService"
        ).value
    );

    let quantity =
    parseInt(
        document.getElementById(
            "quantity"
        ).value
    );

    let total =
    servicePrice * quantity;

    document.getElementById(
        "priceResult"
    ).innerHTML =
    "Стоимость: " +
    total.toLocaleString("ru-RU") +
    " сум";
}








function loginAdmin(){

    const login =
    document.getElementById("login").value;

    const password =
    document.getElementById("password").value;

    if(login === "admin" && password === "12345"){

        document.getElementById("loginPage").style.display = "none";

        document.getElementById("adminPanel").style.display = "block";

        localStorage.setItem("adminLogged","true");

    }else{
        alert("Неверный логин или пароль");
    }

}

function logoutAdmin(){

    localStorage.removeItem("adminLogged");

    location.reload();

}

if(localStorage.getItem("adminLogged") === "true"){

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("adminPanel").style.display = "block";

}
