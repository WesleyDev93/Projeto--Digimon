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

const niveisPoder =  ['10', '20', '30', '40',];


const titulo = document.querySelector ('.cabecalho_titulo');

const statusTotais = document.querySelector ('.cabecalho_titulo');

const textoStatus = document.querySelectorAll ('.textoStatus');

const titulo02 = document.querySelector ('h2');

// Personagem

const textoNome = document.querySelector ('.textoNome');

const koromon = document.querySelector ('.koromon');

const agumon = document.querySelector  ('.agumon');

const greymon = document.querySelector ('.greymon');

const metalgreymon = document.querySelector ('.metalgreymon');

const wargreymon = document.querySelector ('.wargreymon');


// BACKGROUND BODY

const body = document.querySelector ('.background');




// NIVEIS - EVENTOS


nivel10.addEventListener ('click', ()=> {
  

    nivelAgumon ();

   

});


nivel20.addEventListener ('click', ()=> {
     
     nivelGreymon ();
});



nivel30.addEventListener ('click', ()=> {

    nivelMetalGreymon ();
    
});



nivel40.addEventListener ('click', ()=> {

    nivelWarGreymon ();
    
});





//FUNÇÕES 



function nivelAgumon () {

    agumon.style.display = 'block'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'none'; 
    metalgreymon.style.display = 'none'; 
    wargreymon.style.display = 'none'; 
       
    
    nivel.textContent = niveisPoder [0];
    forca.textContent = 60;
    velocidade.textContent = 40;
    energia.textContent = 50;
    amizade.textContent = 80;

    textoNome.textContent = 'Agumon';


    trocaEstilo ();
    
    
    trilha.play ();
}



function nivelGreymon () {

    agumon.style.display = 'none'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'block'; 
    metalgreymon.style.display = 'none'; 
    wargreymon.style.display = 'none'; 

   
    nivel.textContent = niveisPoder [1];
    
    forca.textContent = 200;
    velocidade.textContent = 30;
    energia.textContent = 80;
    amizade.textContent = 100;

    textoNome.textContent = 'Greymon';

    trocaEstilo ();
}




function nivelMetalGreymon () {

    agumon.style.display = 'none'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'none'; 
    metalgreymon.style.display = 'block'; 
    wargreymon.style.display = 'none'; 



   
    nivel.textContent = niveisPoder [2];

    forca.textContent = 400;
    velocidade.textContent = 270;
    energia.textContent = 180;
    amizade.textContent = 120;

    textoNome.textContent = 'MetalGreymon';

    trocaEstiloBrasao ();
}




function nivelWarGreymon () {

    agumon.style.display = 'none'; 
    koromon.style.display = 'none'; 
    greymon.style.display = 'none'; 
    metalgreymon.style.display = 'none'; 
    wargreymon.style.display = 'block'; 

    
    nivel.textContent = niveisPoder [3];

    forca.textContent = 650;
    velocidade.textContent = 470;
    energia.textContent = 380;
    amizade.textContent = 220;

    textoNome.textContent = 'WarGreymon';

    trocaEstiloBrasao (); 

    trilha.play ();
}







function trocaEstilo () {
    
    

     setTimeout(() => {
        body.classList.add ('mudaFundo');


        titulo.style.color = 'white';
        titulo02.style.color = 'white';
        statusTotais.style.color = 'white';
        forca.style.color = 'white';
        velocidade.style.color = 'white';
        energia.style.color = 'white';
        amizade.style.color = 'white';
        nivel.style.color = 'white';
        textoNome.style.color = 'white';
        
        for (let index = 0; index < textoStatus.length; index++) {
            const element = textoStatus[index];

            element.style.color = 'white';
        }

        

        
     },0000);
   

     setTimeout(() => {
        body.classList.remove ('mudaFundo');

        titulo.style.color = 'black';
        titulo02.style.color = 'black';
        statusTotais.style.color = 'black';
        forca.style.color = 'black';
        velocidade.style.color = 'black';
        energia.style.color = 'black';
        amizade.style.color = 'black';
        nivel.style.color = 'black';
        textoNome.style.color = 'black';

        for (let index = 0; index < textoStatus.length; index++) {
            const element = textoStatus[index];

            element.style.color = 'black';
        }

        
     },3000);
     
};




   
    function trocaEstiloBrasao() {


        setTimeout(() => {
            body.classList.add ('brasao');
    
    
            titulo.style.color = 'white';
            titulo02.style.color = 'white';
            statusTotais.style.color = 'white';
            forca.style.color = 'white';
            velocidade.style.color = 'white';
            energia.style.color = 'white';
            amizade.style.color = 'white';
            nivel.style.color = 'white';
            textoNome.style.color = 'white';
            
            for (let index = 0; index < textoStatus.length; index++) {
                const element = textoStatus[index];
    
                element.style.color = 'white';
            }
    
            
    
            
         },0000);
       
    
         setTimeout(() => {
            body.classList.remove ('brasao');
    
            titulo.style.color = 'black';
            titulo02.style.color = 'black';
            statusTotais.style.color = 'black';
            forca.style.color = 'black';
            velocidade.style.color = 'black';
            energia.style.color = 'black';
            amizade.style.color = 'black';
            nivel.style.color = 'black';
            textoNome.style.color = 'black';
    
            for (let index = 0; index < textoStatus.length; index++) {
                const element = textoStatus[index];
    
                element.style.color = 'black';
            }
    
            
         },4000);
         
    };











  