

//-----Chat--Bot--///

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6473a8efad80445890ef94fd/1h1hsnq1g';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();



//--------lauching-Page-------//

var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();
var x = setInterval(function (){
    var now =  new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds =  Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML ="00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"

    }
}, 1000);

//---------NavBar--------//

let navBar= document.querySelector(".nav_bar");
navBar.onclick = function (){
   let navLinks= document.querySelector(".nav_links");
    navLinks.classList.toggle("active");
}

angleDown= document.querySelector(".angleDown");
angleDown.onclick = function (){
 let servicesLinks= document.querySelector(".services_links");
     servicesLinks.classList.toggle("active");
}

//---------navScroll----------//
window.addEventListener("scroll", function (){
    var nav = document.querySelector(".nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// Change Navlgo on Scroll//

const mainLogo = "../image/Official-Logo1.png";
const sclLogo = "../image/Official-Logo.png";

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 0)
        $(".logo").attr("src", sclLogo);
    else
        $(".logo").attr("src", mainLogo);
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


//----------Reset--Form----------------//

Window.onbeforeunload = () => {

    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

//----Mobile-Tech-Slider--//

    $(document).ready(function () {
    $('.mobile_tech_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
        arrows:false,
        dots:false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }

        }]
    });
});

//----Web-Tech-Slider--//
$(document).ready(function () {
    $('.web_tech_slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
        arrows:false,
        dots:false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }

        }]
    });
});



<!-- Google tag (gtag.js) -->

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-GCTE6D73KY');




// Default country code
let defaultCountryCode = '+1'; // Change this to your desired default country code

// Pre-fill phone number input with default country code
document.getElementById('phone').value = defaultCountryCode;

// Function to get user's country code based on geolocation
function getUserCountryCode() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Determine country code based on latitude
            let latitude = position.coords.latitude;
            let userCountryCode = (latitude >= 0) ? '+233' : ''; // Example: Assume US if latitude is positive

            // Pre-fill phone number input with user's country code
            document.getElementById('phone').value = userCountryCode;
        }, function(error) {
            console.error('Geolocation error:', error.message);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}
getUserCountryCode();






