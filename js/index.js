document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.querySelector(".navElement3").addEventListener("click", animateBars);
document.querySelector(".navElement4").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".menu");
var oscurecerOff = document.querySelector(".oscurecerOff");
var navElement1 = document.querySelector(".navElement1");
var navElement2 = document.querySelector(".navElement2");
var navElement3 = document.querySelector(".navElement3");
var navElement4 = document.querySelector(".navElement4");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    container__menu.classList.toggle("menu__active");
    oscurecerOff.classList.toggle("oscurecer");
    navElement1.classList.toggle("navElementActive1");
    navElement2.classList.toggle("navElementActive2");
    navElement3.classList.toggle("navElementActive3");
    navElement4.classList.toggle("navElementActive4");
}


/* PREGUNTA Y RESPUESTA 1 */ 

document.querySelector(".pregunta1").addEventListener("click", desplegarRespuesta1);

var preguntayrespuesta1 = document.querySelector(".preguntayrespuesta1")
var displayblock1 = document.querySelector(".displayblock1")

function desplegarRespuesta1(){
    preguntayrespuesta1.classList.toggle("activepreguntayrespuesta1");
    displayblock1.classList.toggle("activedisplayblock1");
}


/* PREGUNTA Y RESPUESTA 2 */ 

document.querySelector(".pregunta2").addEventListener("click", desplegarRespuesta2);

var displayblock2 = document.querySelector(".displayblock2")

function desplegarRespuesta2(){
    displayblock2.classList.toggle("activedisplayblock2");
}


/* PREGUNTA Y RESPUESTA 3 */ 

document.querySelector(".pregunta3").addEventListener("click", desplegarRespuesta3);

var displayblock3 = document.querySelector(".displayblock3")

function desplegarRespuesta3(){
    displayblock3.classList.toggle("activedisplayblock3");
}