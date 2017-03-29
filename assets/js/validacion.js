  // validacion para letras
	var validacionLetras =function (e){
	    var TeclaCodigo=e.keyCode;
	    if((TeclaCodigo>=65 && TeclaCodigo<=90)||(TeclaCodigo>=97 && TeclaCodigo<=122)||TeclaCodigo==32||TeclaCodigo==39){
	      return true;
	    } else {
	      return false;
	    }
	}

  //validacion de contraseña
  var validacionPassword=function(e){
    if(this.value.trim().length >= 6 && this.value.trim().length <= 20){
      return true;
    }else{
      this.nextElementSibling.nextElementSibling.innerText="*Ingresar al menos 6 caracter.";
    }
  }

  //validacion para correo
  var  validacionEmail = function ( correo ) {
    var correo = this.value;
    var  correoExpr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if( correoExpr.test(correo)!==correo)
      {//return true;} else{
        this.nextElementSibling.nextElementSibling.innerText="*Dirección de correo incorrecta.";
      }//else {return true;}
}


	// validacion de imputs vacios
	var input = document.getElementsByClassName("imputRegistro");
	var errorVacio= function(e){
    if(this.value.trim().length==0){
    this.value="";
    this.nextElementSibling.nextElementSibling.innerText="*Completa el campo por favor.";
      }
      else{
            var correcto = this.value.split(" ");
            var datoMayuscula= "";
            for(var a =0; a<correcto.length;a++){
            datoMayuscula += correcto[a].charAt(0).toUpperCase() + correcto[a].substring(1).toLowerCase() + " ";
            }
             this.value = datoMayuscula;
            }
    }

	  for(var i in input){
	      input[i].onblur=errorVacio;
	  }

  //aplicando las validacionLetras -----------
  var nombre= document.getElementById('nombre');
      nombre.onkeypress=validacionLetras;
  var apellido= document.getElementById('apellido');
      apellido.onkeypress=validacionLetras;
  //otras validaciones
  var correo= document.getElementById('correo');
      correo.onkeypress=validacionEmail;
  var contrasena=document.getElementById('password');
      contrasena.onkeypress=validacionPassword;
