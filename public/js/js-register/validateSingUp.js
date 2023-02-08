"use strict";

//Referencias a los id y clases que me hacen falta.
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let name = id("nameUp"),
  email = id("emailUp"),
  password = id("passwordUp"),
  confirmPass = id("password-confirmationUp"),
  check = id("termsUp"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


//Función para validar el formulario de registro. 
function validarFormulario() {
  let nombre = validarNombre();
   let email = validarEmail(); 
   let password = validarPassword();
   let confirmPass = confirmPassword();
   let terms = validarTerms();
   return (nombre && email && password && confirmPass && terms);
};

//Función para quitar los avisos de correcto o incorrecto en el formulario.
const resetColorBordeFormulario = () => {
  setTimeout(() => {
    //name
    email.style.border = "1px solid #c4c4c4";
    successIcon[0].style.opacity = "0";
    failureIcon[0].style.opacity = "0";
    errorMsg[0].innerHTML = "";
    //email
    password.style.border = "1px solid #c4c4c4";
    successIcon[1].style.opacity = "0";
    failureIcon[1].style.opacity = "0";
    errorMsg[1].innerHTML = "";
    //password
    name.style.border = "1px solid #c4c4c4";
    successIcon[2].style.opacity = "0";
    failureIcon[2].style.opacity = "0";
    errorMsg[2].innerHTML = "";
    //password confirmation
    confirmPass.style.border = "1px solid #c4c4c4";
    successIcon[3].style.opacity = "0";
    failureIcon[3].style.opacity = "0";
    errorMsg[3].innerHTML = "";
    //Check
    check.style.border = "1px solid #c4c4c4";
    successIcon[4].style.opacity = "0";
    failureIcon[4].style.opacity = "0";
    errorMsg[4].innerHTML = "";
  }, 2000);
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son incorrectos
let error= (id, serial, message) => {
    errorMsg[serial].innerHTML = message;
    id.style.border = "1px solid red";
    
    //iconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son correctos.
let bien= (id, serial, message) => {
  errorMsg[serial].innerHTML = message;
    id.style.border = "1px solid green";
    //iconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
};


//Función para validar el nombre, admite texto con acentos, la ñ, números y espacios en blanco.
function validarNombre() {
    var patron = new RegExp("^[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]*)*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+$");
  
    if(!patron.test(name.value) || name.value.trim()===""){
      error(name, 0,"Username cannot be blank.");
    }else{
      bien(name,0, "");
    }
    return patron.test(name.value);
  };


//Función para validar email
function validarEmail() {
  var patron = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
  if(!patron.test(email.value) || email.value.trim()===""){
    error(email, 1,"Email cannot be blank.");
  }else{
    bien(email,1, "");
  }
  return patron.test(email.value);
};
//Función para validar password. Mínimo 8 caracteres, al menos una letra, un número y un carácter especial.
function validarPassword() {
 let patron = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,25})");
  if( !patron.test(password.value) || password.value.trim()===""){
    error(password, 2,"<p>Min. length 8</p><p>At least 1 number</p><p>At least 1 upper case</p><p>At least 1 lower case</p><p>At least 1 symbol (!@#$...)</p>");
  }else{
    bien(password, 2,"");
    patron = true;
  }
  return patron;
};

//Función para validar Password confirmation.
function confirmPassword(){
    let patron = false;
    if( confirmPass.value.trim()==="" ||  password.value != confirmPass.value){
      error(confirmPass, 3,"The password does not match");
    }else{
      bien(confirmPass, 3,"");
      patron = true;
    }
    return patron;
};

//Función para validar Terms.
function validarTerms(){
  let validar = false;
  if(!check.checked){
    error(check,4, "Terms must be accepted");
  }else{
    bien(check, 4,"");
    validar = true;
  }
  return validar;
};


export { resetColorBordeFormulario, validarFormulario };
