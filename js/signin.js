function logar(){
  let login = document.getElementById('login').value;
  let senha = document.getElementById('senha').value;
  if(login =="admin"&& senha=="adminho"){
    location.href = "home.html";
  } else if(login == ""&& senha=="") {
    alert('Preencha os campos abaixo');
  } else {
    alert('Usuario ou senha incorretos')
  }
}
function Cadastrar(){
  let Cadastrar = document.getElementById('Cadastrar');
  
    location.href = "Cadastro.html";
 
  }
