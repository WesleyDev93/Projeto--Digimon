// variaveis de botoes

const botaoForca = document.querySelector ('.forca');

const botaoVelocidade = document.querySelector ('.velocidade');

const botaoEnergia = document.querySelector ('.energia');

const botaoAmizade = document.querySelector ('.amizade');

const botaoDigievolucao = document.querySelector ('.digievolucao');

// audio


const trilha = document.querySelector ('.trilha');


// variaveis de texto

const forca = document.querySelector ('.numeroForca');

const velocidade = document.querySelector ('.numeroVelocidade');

const energia = document.querySelector ('.numeroEnergia');

const amizade = document.querySelector ('.numeroAmizade');

const nivel = document.querySelector ('.numeroNivel');



// Personagem

const div = document.querySelector ('.evolucao');


const koromon = document.querySelector ('.koromon');

const agumon = document.querySelector  ('.agumon');

const greymon = document.querySelector ('.greymon');

const metalgreymon = document.querySelector ('.metalgreymon');

const wargreymon = document.querySelector ('.wargreymon');


//console.log (div);



// Eventos



// FORÇA
botaoForca.addEventListener ('click', () =>{
          
   const resultadoForca = Math.floor( Math.random() * 3000);  

     
   forca.textContent = resultadoForca;

   alteraNiveis ();
});


// VELOCIDADE
botaoVelocidade.addEventListener ('click', () =>{  

    const resultadoVelocidade= Math.floor( Math.random() * 4000);  


    velocidade.textContent = resultadoVelocidade;
 
    alteraNiveis ();
 });



// ENERGIA
 botaoEnergia.addEventListener ('click', () =>{
           
    const resultadoEnergia = Math.floor( Math.random() * 5000); 
    

    energia.textContent = resultadoEnergia;
    
    alteraNiveis ();
    
 });



// AMIZADE
 botaoAmizade.addEventListener ('click', () =>{
          
    const resultadoAmizade = Math.floor( Math.random() * 10000);  

    amizade.textContent = resultadoAmizade;
    
    alteraNiveis ();
    
 });


// NIVEIS






//DIGIEVOLUCAO 



   
    










  