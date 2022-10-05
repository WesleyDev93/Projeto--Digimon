// variaveis de botoes

const nivel10 = document.querySelector ('.nivel10');


const nivel20 = document.querySelector ('.nivel20');


const nivel30 = document.querySelector ('.nivel30');


const nivel40 = document.querySelector ('.nivel40');


const nivel50 = document.querySelector ('.nivel50');



// audio


const trilha = document.querySelector ('.trilha');


// variaveis de texto

const forca = document.querySelector ('.numeroForca');

const velocidade = document.querySelector ('.numeroVelocidade');

const energia = document.querySelector ('.numeroEnergia');

const amizade = document.querySelector ('.numeroAmizade');

const nivel = document.querySelector ('.numeroNivel');

const niveisPoder =  ['10', '20', '30', '40', '50'];

// Personagem

const div = document.querySelector ('.evolucao');


const koromon = document.querySelector ('.koromon');

const agumon = document.querySelector  ('.agumon');

const greymon = document.querySelector ('.greymon');

const metalgreymon = document.querySelector ('.metalgreymon');

const wargreymon = document.querySelector ('.wargreymon');


//console.log (div);






// NIVEIS - EVENTOS


nivel10.addEventListener ('click', ()=> {
  

    agumon.style.display = 'block'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'none'; 
    metalgreymon.style.display = 'none'; 
    wargreymon.style.display = 'none'; 
       
    trilha.play ();
    nivel.textContent = niveisPoder [0];
});


nivel20.addEventListener ('click', ()=> {
     
    agumon.style.display = 'none'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'block'; 
    metalgreymon.style.display = 'none'; 
    wargreymon.style.display = 'none'; 
   
    nivel.textContent = niveisPoder [1];
});



nivel30.addEventListener ('click', ()=> {


    trilha.play ();
    nivel.textContent = niveisPoder [2];
});



nivel40.addEventListener ('click', ()=> {


    
    nivel.textContent = niveisPoder [3];
});




nivel50.addEventListener ('click', ()=> {


    
    nivel.textContent = niveisPoder [4];
});

   
    










  