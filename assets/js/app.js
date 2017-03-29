function Form(nombre,apellido,correo,password){
  this.nombre=nombre;
  this.apellido=apellido;
  this.correo=correo;
  this.password=password;
  this.mostrar=function(){
    return( "<p><br>Nombre: " + this.nombre + "</br>" +
    "<br>Apellido: " +  this.apellido + "</br>" +
    "<br>Correo: " + this.correo + "</br>" +
    "<br>Contraseña: " + this.password + "</br></p>" );
  }
}

  var boton = document.getElementById("Boton");
   boton.addEventListener("click",function(){
      var nombre= document.getElementById('nombre').value;
      var apellido= document.getElementById('apellido').value;
      var correo= document.getElementById('correo').value;
      var password= document.getElementById('password').value;


      if(nombre.length !=0 && apellido.length!=0 && correo.length != 0 && password.length != 0  /*(password.length >= 6 && password.length <= 20)*/){
        var coderNueva = new Form(nombre,apellido,correo,password)

        localStorage.setItem("nuevaCoder",JSON.stringify(coderNueva));
        document.getElementById("myForm").reset();
        window.location="perfil.html";
      } else {
          alert("Llenar todos los campos.");
      }
    });
