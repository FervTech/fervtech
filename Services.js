//Nav---Bar//

navBar= document.querySelector(".nav-bar");
navBar.onclick = function (){
    navLinks= document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
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
    scrollProgress.style.background = `conic-gradient(#0a3264ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;