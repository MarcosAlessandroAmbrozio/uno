var passo;
for(passo = 0; passo < 5; passo++) {
    console.log('Ande um passo');
}
function howMany(selectObject){
    var nroSelecoes = 0;
    for(var i = 0; i < selectObject.options.length; i++) {
        if(selectObject.options[i].selected){
            nroSelecoes++;
        }
    }
    return nroSelecoes;
}
var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    alert('Total selecionados: '+ howMany(document.selectForm.tipoMusica));
});

/*
do...while
do
    Stat
while(condição)*/
var resultado = '';
var i = 0; 
do{
    i+=1;
    resultado += i + '';
}while(i<1000);
document.getElementById('exemplo').innerHTML = resultado;

//Elemento de repetição com funcionalidade semelhantes e suas diferenças

//=> while - executa o loop equanto a condição for verdadeira 
//conatr de 1 até 10
contagem = 0;
var i = 0;
while(contar <= 10){
    i++;
}

//Do While -  executa o loop primeiro e depois verifica a condição
do{
    conatgem++;
}while(conatgem <= 10);

//For - Executa o loop enquanto a condição for verdadeira;
 //porém a instancia das variaveis de contagem são intanciadas na estrutura do loop!
 contagem = 0;
 var i = 0;
 for(i = 0; i <= 10; i++){
    contagem++;
 }

 //Foreach - Executa o loop sobre elementos de um array
 contagem = [0,1,2,3,4,5,6,7,8,9];
i=0;
 contagem.forEach(contagem => {
    i++;
});

//break -  encerra o loop atual 
//sintaxe break[label]; - break;
//ex.: A função encerra  o loop quando a variável i for 3 e então retorna 3*x
function testaBreak(x){
    var i = 0;
    while (i < 6){
        if(i==3){
            break;
        }
        i+=1;
    }
    return i * x;
}

//A condição Switch avalia a expressão, combinando o valor da expressão com uma "clausula case" e
//Executa os comandos associados ao case;

switch(expr){
    case "Laranjas":
        console.log("Laranjas R$ 4,99 kg");
        break;
    case "Banana":
        console.log("Banana R$ 4,99 kg");
        break;
    case "Maçã":
        console.log("Maçã R$ 4,99 kg");
        break;
    case "Tomate":
        console.log("Tomate R$ 4,99 kg");
        break;
    case "kiwi":
        console.log("Kiwi R$ 4,99 kg");
        break;

    default :
    console.log("Desculpe estamos em falta" + expr + " . ")
}
console.log("Gostaria de adicionar mais algo ?")