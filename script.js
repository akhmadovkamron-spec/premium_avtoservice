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