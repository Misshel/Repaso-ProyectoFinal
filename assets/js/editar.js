window.onload=function(){

	var objetoNewCoder = JSON.parse(localStorage.getItem("nuevaCoder"));
	var inputsEditar = document.getElementsByClassName("imputRegistro");
console.log(objetoNewCoder);
	inputsEditar[0].value = objetoNewCoder.nombre;
	inputsEditar[1].value = objetoNewCoder.apellido;
	inputsEditar[2].value = objetoNewCoder.correo;
	inputsEditar[3].value = objetoNewCoder.password;

	document.getElementById("Boton").addEventListener("click",function(){

	if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0){
    	objetoNewCoder.nombre=inputsEditar[0].value;
			objetoNewCoder.apellido= inputsEditar[1].value
			objetoNewCoder.correo = inputsEditar[2].value;
			objetoNewCoder.password = inputsEditar[3].value;

console.log(objetoNewCoder);
			localStorage.setItem("nuevaCoder",JSON.stringify(objetoNewCoder));
			window.location="perfil.html"
		}
		else{
			alert("Todos los campos son obligatorios");
		}
	})
};
