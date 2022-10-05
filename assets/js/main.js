// variaveis de botoes

const botaoForca = document.querySelector ('.forca');


const botaoVelocidade = document.querySelector ('.velocidade');


const botaoEnergia = document.querySelector ('.energia');


const botaoAmizade = document.querySelector ('.amizade');


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



// Eventos



// FORÇA
botaoForca.addEventListener ('click', () =>{
          
   const resultadoForca = Math.floor( Math.random() * 3000);  

     
   forca.textContent = resultadoForca;

});


// VELOCIDADE
botaoVelocidade.addEventListener ('click', () =>{  

    const resultadoVelocidade= Math.floor( Math.random() * 4000);  


    velocidade.textContent = resultadoVelocidade;
 
    
 });



// ENERGIA
 botaoEnergia.addEventListener ('click', () =>{
           
    const resultadoEnergia = Math.floor( Math.random() * 5000); 
    

    energia.textContent = resultadoEnergia;
    
   
    
 });



// AMIZADE
 botaoAmizade.addEventListener ('click', () =>{
          
    const resultadoAmizade = Math.floor( Math.random() * 10000);  

    amizade.textContent = resultadoAmizade;
    
   
    
 });


// NIVEIS


nivel10.addEventListener ('click', ()=> {
       
    trilha.play ();
    nivel.textContent = niveisPoder [0];
});


nivel20.addEventListener ('click', ()=> {
  
   
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

   
    










  