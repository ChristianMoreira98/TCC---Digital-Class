// Rolagem
ScrollReveal().reveal("#buttonHeader", {
    distance: "25px",
    origin: "bottom",
    duration: 5000,
});

ScrollReveal().reveal("#imageThree", {
    distance: "100px",
    origin: "left",
    duration: 2000,
});

// Menu Mobile

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('mobile-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

// Texto animado

// const typed = new Typed('#textAnimation', {
//     strings: ["Seja bem-vindo a Digital Class!"],
//     typeSpeed: 25,
//     backSpeed: 60,
//     fadeOut: true,
//     showCursor: false,
// });