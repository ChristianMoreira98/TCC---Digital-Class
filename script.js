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

ScrollReveal().reveal(".header-mobile", {
    distance: "15px",
    origin: "top",
    duration: 2800,
});

ScrollReveal().reveal("#imageText", {
    distance: "100px",
    origin: "right",
    duration: 2800,
});

ScrollReveal().reveal(".box-text", {
    distance: "100px",
    origin: "left",
    duration: 2800,
});

// Menu Mobile

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
        
    }
}

// Texto animado

// const typed = new Typed('#textAnimation', {
//     strings: ["Seja bem-vindo a Digital Class!"],
//     typeSpeed: 25,
//     backSpeed: 60,
//     fadeOut: true,
//     showCursor: false,
// });