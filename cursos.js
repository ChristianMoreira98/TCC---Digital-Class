// Inicializando o efeito ScrollReveal no container da primeira sessão 
ScrollReveal().reveal('.sessão-1', {
    duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
    origin: 'top', // Origem do efeito: o conteúdo virá de baixo pra cima
    distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
    });


    ScrollReveal().reveal('.sessão-4', {
        duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
        origin: 'right', // Origem do efeito: o conteúdo virá de baixo pra cima
        distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
        });
    


    ScrollReveal().reveal('h2', {
        duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
        origin: 'top', // Origem do efeito: o conteúdo virá de baixo pra cima
        distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
        });


            ScrollReveal().reveal('h3', {
                duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
                origin: 'bottom', // Origem do efeito: o conteúdo virá de baixo pra cima
                distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
                });
                

            
                
            ScrollReveal().reveal('h4', {
                duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
                origin: 'top', // Origem do efeito: o conteúdo virá de baixo pra cima
                distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
                });

                ScrollReveal().reveal('p', {
                    duration:2000, // Duração do efeito (em milisegundos), define a velocidade da transição
                    origin: 'left', // Origem do efeito: o conteúdo virá de baixo pra cima
                    distance: '50px', // Diatância que o elemento "viaja" antes de aparecer
                    });
                    


                                
            ScrollReveal().reveal('h5', {
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