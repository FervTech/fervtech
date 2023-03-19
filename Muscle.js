//Nav---Bar//

navBar= document.querySelector(".nav-bar");
navBar.onclick = function (){
    navLinks= document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

angleDown= document.querySelector(".angleDown");
angleDown.onclick = function (){
    servicesLinks= document.querySelector(".services-links");
    servicesLinks.classList.toggle("active");
}

//Slider automatic//
var slideIndex = 0;
var slider = document.querySelector(".slider");
var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dots label")
var time = 5000;

function plusslide(position) {
    slideIndex += position;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if (index > slide.length) {
        index = 1;
    }
    else if (index < 1) {
        index = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;
}


setInterval(  function showslide() {
    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    // Defaultly active class is removed from all dots
    for (let i = 0; i < dots.length; i++) {
        var element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");

} , time);   // Change every image after 3 seconds


// Swiper


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

//------------Scroll-Up------------//
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("Scroll-Up");
    let progressValue = document.getElementById("Scroll-Up-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#0a3264ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


//------News Letter Sheet-------//

const scriptURL = 'https://script.google.com/macros/s/AKfycby8yOr11n0piAqVnIcoDcZ0cuQ3D63b0WoyW8nfG7bEj-8q4w6nKVgzQKN9dCFcjez26Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
            msg.innerHTML= "Thank You For Subscribing"
            setTimeout(function (){
                msg.innerHTML= ""
            },4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


