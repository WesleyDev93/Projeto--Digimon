
function validaDados () {

    const login = document.querySelector ('.login').value;

    const senha = document.querySelector ('.senha').value;



    if (login == 'teste@gmail.com' && senha == '123456!') {
        
        alert ('Sua senha está correta -- Bem vindo Wesley');

        location.href = "https://www.google.com/intl/pt-br/drive/about.html";
    }else {
        alert ('Sua senha esta errada  -- Administrador será avisado !');
    }
}





