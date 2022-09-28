var funcinarios = 
{
    "Arthur": {
        "Idade": 16, 
        "Cidade": "Chapecó", 
        "Cabeceira": "De_preferência_de_couro"
    },   
    "Joao": {
        "Idade": 20,
         "Cidade": "Xaxim" 
    }, 

    "Paulo": {
        "Idade": 2,
        "Cidade": "Chapecó"
    }, 
};


var funcionarios = JSON.parse(funcionarios);
alert(funcionarios.Joao);
alert(funcionarios.Joao.Idade);
alert(funcionarios.Joao.Cidade);