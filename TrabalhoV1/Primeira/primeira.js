function sumNumeros(){
    valNum1 = parseInt(document.getElementById("num1").value);
    valNum2 = parseInt(document.getElementById("num2").value);
    resultado = valNum1 + valNum2;
    alert("O resultado da soma é: " +resultado);
}

function subNumeros(){
    valNum1 = parseInt(document.getElementById("num1").value);
    valNum2 = parseInt(document.getElementById("num2").value);
    resultado = valNum1 - valNum2;
    alert("O resultado da subtração é: " +resultado);
}

function multiNumeros(){
    valNum1 = parseInt(document.getElementById("num1").value);
    valNum2 = parseInt(document.getElementById("num2").value);
    resultado = valNum1 * valNum2;
    alert("O resultado da multiplicação é: " +resultado);
}

function diviNumeros(){
    valNum1 = parseInt(document.getElementById("num1").value);
    valNum2 = parseInt(document.getElementById("num2").value);
    resultado = parseFloat(valNum1 / valNum2);
    alert("O resultado da divisão é: " +resultado);
}

function verificaSinal(){
    sinalAtual = document.getElementById("Sinais").value;
    if(sinalAtual == "sum"){
        sumNumeros();
    }
    if(sinalAtual == "sub"){
        subNumeros();
    }
    if(sinalAtual == "multi"){
        multiNumeros();
    }
    if(sinalAtual == "divi"){
        diviNumeros();
    }
}