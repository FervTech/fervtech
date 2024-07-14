//Nav---Bar//

let navBar = document.querySelector(".nav_bar");

navBar.onclick = function (){
    let navLinks= document.querySelector(".nav_links");
    navLinks.classList.toggle("active");
}

let angleDown= document.querySelector(".angleDown");
angleDown.onclick = function (){
    let servicesLinks= document.querySelector(".services_links");
    servicesLinks.classList.toggle("active");
}

//---------navScroll----------//

window.addEventListener("scroll", function (){
    let nav = document.querySelector(".nav");
    nav.classList.toggle("sticky", window.scrollY > 0);

})

// Change Navlgo on Scroll//

const mainLogo = "image/Official-Logo1.png";
const sclLogo = "image/Official-Logo.png";

$(window).scroll(function() {
    let value = $(this).scrollTop();
    if (value > 0)
        $(".logo").attr("src", sclLogo);
    else
        $(".logo").attr("src", mainLogo);
});



// Testimonial Swiper//
let swiper = new Swiper(".mySwiper", {
    observer: true,
    observeParents: true,
    loop: false,
    fade: 'true',
    autoplay:{
        disableOnInteraction: false,
    },
    autoplayTimeout: 50000,
    autoplayHoverPause:true,

    effect: "coverflow",
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


});
swiper.update();



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
    scrollProgress.style.background = `conic-gradient(#4644AA ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
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
});



//--Start of Tawk.to Script-//
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6473a8efad80445890ef94fd/1h1hsnq1g';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

//--End of Tawk.to Script--//


//----------Landing -Slider---------//
let nextLanding = document.getElementById('next');
let prevLanding = document.getElementById('prev');


let landingSlider = document.querySelector('.landing_slider');
let landingSlides = document.querySelector('.landing_slides');
let landingDots = document.querySelector('.landing_dots')

nextLanding.onclick = function (){
    showLandingSlider('next');
}

landingDots.onclick = function (){
    showLandingSlider('active')
};

prevLanding.onclick = function (){
    showLandingSlider('prev');
}
let timeCycling = 0;
let timeAutoLandingSlide = 5000;
let autoLandingSlide = setTimeout(() => {
    nextLanding.click();
}, timeAutoLandingSlide);
let runTime;

function showLandingSlider(type){
    let landingSlide = document.querySelectorAll('.landing_slide');
    let landingDot = document.querySelectorAll('.dot')


    if (type === 'next'){
        landingSlides.appendChild(landingSlide[0]);
        landingDots.appendChild(landingDot[0]);
        landingSlider.classList.add('next');
    }

    else {
        landingSlides.prepend(landingSlide[landingSlide.length - 1]);
        landingDots.prepend(landingDot[landingDot.length - 1]);
        landingSlider.classList.add('prev');
    }

    clearTimeout(runTime);
    runTime = setTimeout(() =>{
        landingSlider.classList.remove('next');
        landingSlider.classList.remove('prev');
    }, timeCycling);

    clearTimeout(autoLandingSlide);
    autoLandingSlide = setTimeout(() => {
        nextLanding.click();
    }, timeAutoLandingSlide)
}





//----------Reset--Form----------------//

Window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};




<!-- Google tag (gtag.js) -->

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-GCTE6D73KY');




