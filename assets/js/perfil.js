window.onload=function () {
  var nombre= document.getElementById('nombreCoder');
  var apellido= document.getElementById('apellidoCoder');
  var correo= document.getElementById('correoCoder');
  var password= document.getElementById('passwordCoder');

  //obtengo el objeto del idex.html
  var objetoNewCoder= JSON.parse(localStorage.getItem("nuevaCoder"));

  nombre.innerText=objetoNewCoder.nombre;
  apellido.innerText=objetoNewCoder.apellido;
  correo.innerText=objetoNewCoder.correo;
  password.innerText=objetoNewCoder.password;


  console.log(objetoNewCoder);

	document.getElementById("Editar").addEventListener("click",function(){
		window.location="editar.html";
	});
};
