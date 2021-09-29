function calculaIdade(){
    var dataNasc = document.getElementById("data").value;
    var data = new Date(dataNasc);  

    var difMes = Date.now() - data.getTime();  
      
    var dataIdade = new Date(difMes);   
      
    var ano = dataIdade.getUTCFullYear();  
      
    var idade = Math.abs(ano - 1970);  

    if(dataNasc==null || dataNasc=='') {  
        alert("Digite sua data de nascimento completa.");
        return false;   
        } else {  
    alert("Sua idade é: "+idade +" Anos");
    }
}

function loadDisciplinas(){
    var curso = document.getElementById("cursos");
    var opcao = curso.options[curso.selectedIndex].value;
    var disCC = document.getElementById("divCC");
    var disEC = document.getElementById("divEC");
    
    if(opcao == ""){
        disCC.style.display = 'none'; 
        disEC.style.display = 'none'; 
    }
    if(opcao == "Ciências da Computação"){
        disEC.style.display = 'none'; 
        disCC.style.display = 'block'; 
    }
    if(opcao == "Engenharia Civil"){
        disCC.style.display = 'none'; 
        disEC.style.display = 'block'; 
    }
}

function salvarDados(){
    let dados = document.querySelectorAll(".dados");
    let dadosTable = []
    dados.forEach(element => {
        dadosTable.push(element.value);
    });
    
    let dadosCheckbox = document.querySelectorAll("input[type=checkbox]");

    dadosCheckbox.forEach(element => {
        if(element.checked == true && element.parentNode.style.display != "none"){
            dadosTable.push(document.querySelector(`label[for=${element.id}]`).innerHTML);
        }
    });
    let t = document.getElementById("tab");
    let r = document.createElement("TR");
    let random = Math.random();
    r.setAttribute('id', `${random}`);
    t.tBodies[0].appendChild(r);
    dadosTable.forEach(element => {
        let t = document.getElementById(`${random}`);
        let r = document.createElement("TD");
        r.innerHTML = ` 

            <td>
            ${element}
            </td> 

        `
        t.appendChild(r);
    })
    
}
