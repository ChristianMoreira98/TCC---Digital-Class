// Rolagem
ScrollReveal().reveal("#buttonHeader", {
    distance: "25px",
    origin: "bottom",
    duration: 5000,
});

// Texto animado

const typed = new Typed('#textAnimation', {
    strings: ["Seja bem-vindo a Digital Class!"],
    typeSpeed: 25,
    backSpeed: 60,
    fadeOut: true,
    showCursor: false,
});