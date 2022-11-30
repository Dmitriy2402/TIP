(
  function()
{
  var login = prompt("Login", "");
  if(login == "Админ"){
      var password = prompt("Password", "");
      message = CheckPassword(password);
  }else if(login == null || login  == undefined){
      message = "Вход отменён"
  }else{
      message = "Я вас не знаю"
  }
  alert(message);
}
)()

function CheckPassword(password){
  var message;
  if(password == null || password  == undefined){
      message = "Вход отменён"
  } else if(password == "Черный Властелин"){
      message = "Добро пожаловать!"
  }else{
      message = "Пароль неверен"
  }
  return message;
}