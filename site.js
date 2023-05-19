user = ["renan", "isabelle", "giancarlos","maruan"];
pass = ["teste123", "1234", "abcd", "teste apenas"];

function funcaopass() {//funcao do checkbox do password
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}   
function login(){
    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;

    if(user.indexOf(usuario) == pass.indexOf(senha) && pass.indexOf(senha) != -1){  //.include vai fazer uma varredura para encontrar
        alert("Bem vindo " + usuario); //ou seja se colocar o user como gian ele vai achar nos valores de 0 ate 2
        document.getElementById("nome").innerHTML = usuario;
    }
    else{
        alert("Dados nao encontrado");
    }
}

function cadastro(){
    user[user.length] = document.getElementById("username").value;
    pass[pass.length] = document.getElementById("password").value;
    alert("Cadastro");
    
}