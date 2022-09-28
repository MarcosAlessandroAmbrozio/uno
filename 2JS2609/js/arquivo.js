var listItens = document.getElementsByTagName("li");

document.write("<p>Há " + listItens.length + " elementos 'li' </p>");
document.write("<p> Texto dentro dos elementos li: </p>");
    for(var i = 0; i < listItens.length; i++){
        document.write("<p>" +  listItens[i].innerHTML + "</p>");
    }


    var idExercicio = "Slista";

    document.write("<p>Exercícios: </p>");
    for(var i = 0; i < listItens.length; i++){

        if(listItens[i].parentElement.id == idExercicio){
            document.write(`<p>${listItens[i].innerHTML}</p>`);
        }else{
            continue;
        }


        
    }   