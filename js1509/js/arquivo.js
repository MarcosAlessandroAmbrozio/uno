//document.write("Bora bill");
//title retorna o titulo da paginador
//URL-retorna a url completa da pagina

//document.write("<h2>"+document.title+"</h2>");
//document.writeln(document.URL);

//Requisitando informações do HTML e alterando-as
function fAlterar(){
    var x = document.getElementById("paragrafo");
    x.innerHTML="Bom Dia";
}

function inter(){
    var btnNome = document.getElementById("btnInter");
    var Lampada = Element= document.getElementById("imglamp");
    if (Element.src.match("bulbon") ){
        Element.src="img/pic_bulboff.gif";
        btnNome.innerHTML="Ligar"
       
    }else{
        Element.src="img/pic_bulbon.gif";
        btnNome.innerHTML="Desligar"
    }
}

function soma(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML="Resposta: " +(n1+n2);
}
function sub(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML="Resposta: " +(n1-n2);
}
function mult(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML="Resposta: " +(n1*n2);
}
function divi(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML="Resposta: " +(n1/n2);
}
function porc(){
    var n1 = parseInt(document.getElementById("v1").value);
    var n2 = parseInt(document.getElementById("v2").value);
    document.getElementById("res").innerHTML="Resposta: " +(n1*(n2/100));
}
function limpar(){
    var n1 = document.getElementById("v1");
    var n2 = document.getElementById("v2");
    var r = document.getElementById("res");
    n1.value="";
    n2.value="";
    r.innerHTML="Resposta: ";
}