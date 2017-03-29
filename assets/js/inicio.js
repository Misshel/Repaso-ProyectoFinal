window.onload=function () {

document.getElementById("Boton").addEventListener("click",function(){
  var objetoCoder= JSON.parse(localStorage.getItem("nuevaCoder"));

  var correo= document.getElementById('correoCoder');
  var password= document.getElementById('passwordCoder');
  if(
  correo==objetoCoder.correo &&
  password==objetoCoder.password){
    window.location="perfil.html"
  }
}
}
