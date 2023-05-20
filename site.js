var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.fillStyle = "#ff0000";
  //ctx.fillText
  ctx.fillText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
    event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    user[user.length] = document.getElementById("username").value;
    pass[pass.length] = document.getElementById("password").value;
    alert("Cadastro");
  }else{
    alert("Captcha ivalido. tente novamente");
    createCaptcha();
  }
}

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
    createCaptcha();
}