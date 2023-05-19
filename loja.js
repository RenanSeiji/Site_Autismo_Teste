var x = 100.00;
document.getElementById("saldo").innerHTML = "R$ " + x;

function Pp(){ //valor para pulseira padrao é de 15 reais
    if(confirm("Deseja comprar a Pulseira Padrao?") == true){
        if(x >= 15.00){
            alert("Obrigado por comprar Pulseira padrao");
            x = x - 15.00;
            document.getElementById("saldo").innerHTML = "R$ " + x;
        
        }
        else{
            alert("saldo insuficiente")
        }
    }
}
function Pc(){ //valor para pulseira colorida é de 17,50 reais
    if(confirm("Deseja comprar a Pulseira Colorida?") == true){
        if(x >= 17.50){
            alert("Obrigado por comprar Pulseira colorida");
            x = x - 17.50;
            document.getElementById("saldo").innerHTML = "R$ " + x;
        }
        else{
            alert("saldo insuficiente")
        }
    }

}

function Pt(){ //valor para pulseira com trava é de 20 reais
    if(confirm("Deseja comprar a Pulseira com Trava?") == true){
        if(x >= 20.00){
            alert("Obrigado por comprar Pulseira com trava");
            x = x - 20.00;
            document.getElementById("saldo").innerHTML = "R$ " + x;
        }
        else{
            alert("saldo insuficiente")
        }
    }

}

function Pper(){ //valor para pulseira personalizada é de 75,50 reais
    if(confirm("Deseja comprar a Pulseira Personalizada?") == true){
        if(x >= 75.50){
            alert("Obrigado por comprar Pulseira personalizada");
            x = x - 75.50;
            document.getElementById("saldo").innerHTML = "R$ " + x;
        }
        else{
            alert("saldo insuficiente")
        }
    }

}

function R(){ //valor para Relogio é de 99,00 reais
    if(confirm("Deseja comprar o Relogio?") == true){
        if(x >= 99.00){
            alert("Obrigado por comprar Relogio");
            x = x - 99.00;
            document.getElementById("saldo").innerHTML = "R$ " + x;
        }
    else{
        alert("saldo insuficiente")
    }
    }

}
