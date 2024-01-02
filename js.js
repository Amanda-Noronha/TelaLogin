var dados = {};
function cadastro(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    if( nome == '' || email == '' ){
        alert("Preencha todos os campos");
    } 
    else{
        if(email.indexOf('@gmail.com') === -1 ){
            alert("Insira um email valido")
        }
        else{
            dados = {
                nome: nome, 
                email: email
            }
            localStorage.setItem('dados', JSON.stringify(dados));
            alert("Dados salvos com sucesso!")
            console.log(dados)
            // Obtendo o elemento onde você deseja exibir a variável
            // Convertendo o objeto 'dados' em uma string de consulta
            var url = "entrar.html?nome=" + encodeURIComponent(nome) + "&email=" + encodeURIComponent(email);

        // Redirecionando para a nova URL
            window.location.href = url;
        }
    }
}
function entrar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    if( nome == '' || email == '' ){
        alert("Preencha todos os campos")
    } 
    else{
        if(email.indexOf('@gmail.com') === -1 ){
            alert("Insira um email valido")
        }
        else{
            var dados = JSON.parse(localStorage.getItem('dados'));
            if (nome == dados.nome && email == dados.email){
                alert("Entrou!")
            console.log(dados)
            // Obtendo o elemento onde você deseja exibir a variável
            // Convertendo o objeto 'dados' em uma string de consulta
            var url = "logado.html?nome=" + encodeURIComponent(nome) + "&email=" + encodeURIComponent(email);

        // Redirecionando para a nova URL
            window.location.href = url;
            }
            else {
                alert("Nome ou email incorretos");
            }
        }
    }
}
function entratela(){
    window.location.href = "html.html";  
}
function entracadastro(){
    window.location.href = "entrar.html"; 
}