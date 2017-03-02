function validar() {
	var nombre, apellido, correo, usuario, contrasenia1, contrasenia2, expresion, index;
	
	nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
	correo = document.getElementById('correo').value;
	usuario = document.getElementById('usuario').value;
	contrasenia1 = document.getElementById('contrasenia1').value;
	contrasenia2 = document.getElementById('contrasenia2').value;
	expresion = /\w+@\w+\.+[a-z]/;

	index = document.getElementById('tipo').selectedIndex;


	if(nombre === "" || apellido === "" || correo === ""|| usuario === ""|| contrasenia1 === "" || contrasenia2 === "" || 
		document.getElementById('tipo').options[index].value === "" ){
		alert("Todos los campos son obligatorios");
		return false;
	}else if(nombre.length>25){
		alert("El nombre es muy largo");
		return false;
	}else if(apellido.length>25){
		alert("El apellido es muy largo ");
		return false;
	}else if(correo.length>120){
		alert("El correo es muy largo");
		return false;
	}else if(!expresion.test(correo)){
		alert("El correo es inválido");
		return false;
	}else if(usuario.length>15){
		alert("El Usuario debe tener 15 caracteres como máximo");
		return false;
	}else if(contrasenia2.length>15 || contrasenia1.length>15){
		alert("La contraseña debe tener 15 caracteres como máximo");
		return false;
	}else if(contrasenia2 !== contrasenia1){
		alert("Las contraseñas debes ser iguales");
		return false;
	}

}