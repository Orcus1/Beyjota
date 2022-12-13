document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".menu");
var oscurecerOff = document.querySelector(".oscurecerOff")
var navElement1 = document.querySelector(".navElement1")
var navElement2 = document.querySelector(".navElement2")
var navElement3 = document.querySelector(".navElement3")
var navElement4 = document.querySelector(".navElement4")

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    container__menu.classList.toggle("menu__active");
    oscurecerOff.classList.toggle("oscurecer");
    navElement1.classList.toggle("navElementActive1")
    navElement2.classList.toggle("navElementActive2")
    navElement3.classList.toggle("navElementActive3")
    navElement4.classList.toggle("navElementActive4")
}