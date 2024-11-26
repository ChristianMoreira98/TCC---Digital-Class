// Inicializando o efeito ScrollReveal na primeira seção
ScrollReveal().reveal('.sessão-1', {
  duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
  origin: 'left', // Origem do efeito: o conteúdo virá de baixo pra cima
  distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
  });
  
// Inicializando o efeito ScrollReveal na segunda seção 
ScrollReveal().reveal('.sessão-2', {
  duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
  origin: 'right', // Origem do efeito: o conteúdo virá de baixo pra cima
  distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
  });
  

      
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
  } else {
      menuMobile.classList.add('open');
      
  }
}  


