//Nav---Bar//

navBar= document.querySelector(".nav-bar");
navBar.onclick = function (){
    navLinks= document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
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



