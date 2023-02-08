"use strict";

//Referencias a los id y clases que me hacen falta.
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let email = id("emailLogin"),
  password = id("passwordLogin"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

//Función para validar el formulario. 
function validarFormulario() {
   let email = validarEmail(); 
   let password = validarPassword();
  
   return (email && password);
};

//Función para quitar los avisos de correcto o incorrecto en el formulario.
const resetColorBordeFormulario = () => {
  setTimeout(() => {
    //email
    email.style.border = "1px solid #c4c4c4";
    successIcon[0].style.opacity = "0";
    failureIcon[0].style.opacity = "0";
    errorMsg[0].innerHTML = "";
    //password
    password.style.border = "1px solid #c4c4c4";
    successIcon[1].style.opacity = "0";
    failureIcon[1].style.opacity = "0";
    errorMsg[1].innerHTML = "";
  }, 2000);
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son incorrectos
let error= (id, serial, message) => {
    id.style.border = "1px solid red";
    //iconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
    errorMsg[serial].innerHTML= message;
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son correctos.
let bien= (id, serial, message) => {
    id.style.border = "1px solid green";
    //iconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
    errorMsg[serial].innerHTML = message;
};

//Función para validar email
function validarEmail() {
  var patron = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
  if(!patron.test(email.value) || email.value.trim()===""){
    error(email, 0,"Email cannot be blank.");
  }else{
    bien(email,0, "");
  }
  return patron.test(email.value);
};
//Función para validar password. Mínimo 8 caracteres, al menos una letra, un número y un carácter especial. Hay que implementar comprobar si existe en la base de datos!!!
function validarPassword() {
 let patron = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,25})");
  if( !patron.test(password.value) || password.value.trim()===""){
    error(password, 1,"<p>Min. length 8</p><p>At least 1 number</p><p>At least 1 upper case</p><p>At least 1 lower case</p><p>At least 1 symbol (!@#$...)</p>");
  }else{
    bien(password, 1,"");
    patron = true;
  }
  return patron;
};

export { resetColorBordeFormulario, validarFormulario };
