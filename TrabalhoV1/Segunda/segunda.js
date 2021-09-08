function contaCaracteres(){
    valNome = document.getElementById("nome").value;
    qtdChar = valNome.length;
    alert("Quantidade de caracteres é de: " +qtdChar);
}

function contaPalavras(){
    valNome = document.getElementById("avaliação").value;
    if(valNome.length == 0){
        alert("Digite Algo.");
    }else{
    qtdPalavras = valNome.split(' ').length;
    alert("Quantidade de palavras é de : " +qtdPalavras);
    }
}

function verificaMarcadas(){
    valPessoa = document.getElementById("tipo_pessoa");
    optMarcada = valPessoa.options[valPessoa.selectedIndex].text;

    valCasa = document.getElementById("casa");
    valCarro = document.getElementById("carro");
    valMoto = document.getElementById("moto");
    valNenhumFilho = document.getElementById("nenhumFilho");
    valUmFilho = document.getElementById("umFilho");
    valDoisFilhos = document.getElementById("doisFilhos");
    valTresOuMaisFilhos = document.getElementById("tresOuMaisFilhos");

    alert("Tipo de pessoa: " + optMarcada);

    if(valCasa.checked == true){
        alert("Bens: Casa está selecionada");
    }
    if(valCarro.checked == true){
        alert("Bens: Carro está selecionado");
    }
    if(valMoto.checked == true){
        alert("Bens: Moto está selecionada");
    }
    if(valNenhumFilho.checked == true){
        alert("Nenhum Filho está selecionado");
    }
    if(valUmFilho.checked == true){
        alert("Um Filho está selecionado");
    }
    if(valDoisFilhos.checked == true){
        alert("Dois Filhos está selecionado");
    }
    if(valTresOuMaisFilhos.checked == true){
        alert("Três ou Mais Filhos está selecionado");
    }
    
}