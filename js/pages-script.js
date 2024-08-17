

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




//Location Change
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Default country code
    const defaultCountryCode = '+';

    // Function to set the country code in the phone input
    function setCountryCode(code) {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.value = code;
            console.log(`Phone input set to: ${code}`);
        } else {
            console.error('Phone input element not found.');
        }
    }

    // Function to get user's country code based on geolocation
    function getUserCountryCode() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

                    // Call function to determine country code based on latitude and longitude
                    determineCountryCode(latitude, longitude).then(userCountryCode => {
                        // If user country code is determined, update the phone input
                        if (userCountryCode) {
                            setCountryCode(userCountryCode);
                        } else {
                            // Fall back to the default country code
                            setCountryCode(defaultCountryCode);
                        }
                    }).catch(error => {
                        console.error('Error determining country code:', error);
                        // Fall back to the default country code
                        setCountryCode(defaultCountryCode);
                    });
                },
                function (error) {
                    console.error('Geolocation error:', error.message);
                    // Fall back to the default country code
                    setCountryCode(defaultCountryCode);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            // Fall back to the default country code
            setCountryCode(defaultCountryCode);
        }
    }

    // Function to determine country code from latitude and longitude
    function determineCountryCode(latitude, longitude) {
        // Example API call to get country code using Geocode.xyz
        const apiUrl = `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=114204130262851212611x114383`;

        return new Promise((resolve, reject) => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data && data.country && data.country_code) {
                        resolve(`+${data.country_code}`); // Format the country code as needed
                    } else {
                        resolve(null); // Fallback if no country code is found
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    // Attempt to get the user's geolocation and update the country code accordingly
    getUserCountryCode();
});



