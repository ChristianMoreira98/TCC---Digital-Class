// Inicializando o efeito ScrollReveal na primeira seção (#section1)
ScrollReveal().reveal('.section-1', {
    duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'left', // Origem do efeito: o conteúdo virá de baixo pra cima
    distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
    });

// Seleciona o elemento que contém todas as imagens do carrossel 
const track = document.getElementById('itensCarrossel');

// Obtém o número de imagens no carrossel
const items = document.querySelectorAll('.carrossel-item');
let index = 0; // Índice que rastreia a imagem atual

// Função que move o carrossel para a próxima imagem
function moveCarousel() {
// Incrementa o índice para avançar uma imagem
index++;

// Verifica se o índice chegou á última imagem clonada
if (index >= items.length - 1){
// Pequeno atraso para permitir que a transição termine
setTimeout(() => {
    track.style.transition = 'none'; // Remove a animação
    index = 0; // Volta ao início (Primeira imagem)
    track.style.transform = `translateX(0)`; //Move para a primeira imagem 
}, 500); //Tempo suficiente para completar a transição visível
} else {
// Move o carrossel para a próxima imagem
track.style.transition = 'transform 0.5s ease'; 
// Adiciona a animação
track.style.transform = `translateX(-${index * 100}%)`;
// Desloca o carrossel
}

}

// Define um intervalo para mover o carrossel automaticamente a cada 3 segundos
setInterval(moveCarousel, 1500);





// Inicializando o efeito ScrollReveal no container da segunda sessão
ScrollReveal().reveal('.container-section2', {
    duration:1000, // Duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'bottom', // Origem do efeito: o conteúdo virá de baixo pra cima
    distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
    });


    // Inicializando o efeito ScrollReveal no container da terceira sessão
ScrollReveal().reveal('.container-section3', {
    duration:1000, // Duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'right', // Origem do efeito: o conteúdo virá de baixo pra cima
    distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
    });


    // Botão Mobile

    
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
        
    }
}  