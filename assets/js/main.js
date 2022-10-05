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

const poder = document.querySelector ('.numeroPoder');



//console.log (forca);

// Eventos


botaoForca.addEventListener ('click', () =>{
          
   const multiplicador01 = 20;

   const  multiplicador02 = 50;

   const resultado = multiplicador01 * multiplicador02;

   forca.textContent = resultado;

   
   trilha.play ()
  

});


if (forca === 1000) {
    

}