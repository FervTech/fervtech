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
    scrollProgress.style.background = `conic-gradient(#492d88ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
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
