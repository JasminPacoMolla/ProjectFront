"use strict";

//Referencias a los id y clases que me hacen falta.
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let name = id("first-nameAdmin"),
    lastName = id("last-nameAdmin"),
    email = id("emailUser"),
    phone = id("phoneAdmin"),
    photo = id("photoAdmin"),
    address = id("addressAdmin"),
    country = id("countriesUser"),
    rol = id ("rolAdmin"),
    password = id("passwordAdmin"),
    confirmPass = id("confirm-passwordAdmin"),
    check = id("termsAdmin"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

//Función para validar el formulario.
function validarFormulario() {
   let name = validateName(),
    lastName = validateLastName(),
    email = validateEmail(),
    phone = validatePhoneNumber(),
    address = validateAddress(),
    country = validateCountry(),
    rol = validateRol(),
    password = validatePassword(),
    confirmPass = validateConfirmPassword();
    console.log(successIcon)
   return name && lastName && email && phone && address && country && rol && password && confirmPass && check;
};

//Función para quitar los avisos de correcto o incorrecto en el formulario.
const resetColorBordeFormulario = () => {
  setTimeout(() => {
    //Fist name
    name.style.border = "1px solid #c4c4c4";
    successIcon[0].style.opacity = "0";
    failureIcon[0].style.opacity = "0";
    errorMsg[0].innerHTML = "";
    //Last name
    lastName.style.border = "1px solid #c4c4c4";
    successIcon[1].style.opacity = "0";
    failureIcon[1].style.opacity = "0";
    errorMsg[1].innerHTML = "";
    //Email address
    email.style.border = "1px solid #c4c4c4";
    successIcon[2].style.opacity = "0";
    failureIcon[2].style.opacity = "0";
    errorMsg[2].innerHTML = "";
    //Phone number
    phone.style.border = "1px solid #c4c4c4";
    successIcon[3].style.opacity = "0";
    failureIcon[3].style.opacity = "0";
    errorMsg[3].innerHTML = "";
    //Photo
    photo.style.border = "1px solid #c4c4c4";
    successIcon[4].style.opacity = "0";
    failureIcon[4].style.opacity = "0";
    errorMsg[4].innerHTML = "";
    //address
    address.style.border = "1px solid #c4c4c4";
    successIcon[5].style.opacity = "0";
    failureIcon[5].style.opacity = "0";
    errorMsg[5].innerHTML = "";
    //Country
    country.style.border = "1px solid #c4c4c4";
    successIcon[6].style.opacity = "0";
    failureIcon[6].style.opacity = "0";
    errorMsg[6].innerHTML = "";
    //User rol
    rol.style.border = "1px solid #c4c4c4";
    successIcon[7].style.opacity = "0";
    failureIcon[7].style.opacity = "0";
    errorMsg[7].innerHTML = "";
    //password
    password.style.border = "1px solid #c4c4c4";
    successIcon[9].style.opacity = "0";
    failureIcon[9].style.opacity = "0";
    errorMsg[9].innerHTML = "";
    //password confirm
    confirmPass.style.border = "1px solid #c4c4c4";
    successIcon[9].style.opacity = "0";
    failureIcon[9].style.opacity = "0";
    errorMsg[9].innerHTML = "";
  }, 2000);
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son incorrectos
let error = (id, serial, message) => {
  id.style.border = "1px solid red";
  //iconos
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";
  errorMsg[serial].innerHTML = message;
};

//Función flecha para modificar la clase y mostrar que los datos del formulario son correctos.
let bien = (id, serial, message) => {
  id.style.border = "1px solid green";
  //iconos
  failureIcon[serial].style.opacity = "0";
  successIcon[serial].style.opacity = "1";
  errorMsg[serial].innerHTML = message;
};

//Función para validar el nombre, admite texto con acentos, la ñ, y números y espacios en blanco.
function validateName() {
    var patron = new RegExp("^[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]*)*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+$");
  
    if(!patron.test(name.value) || name.value.trim()===""){
      error(name, 0,"Username cannot be blank.");
    }else{
      bien(name,0, "");
    }
    return patron.test(name.value);
  };
//Función para validar el nombre, admite texto con acentos, la ñ, y números y espacios en blanco.
function validateLastName() {
    var patron = new RegExp("^[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]*)*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+$");
  
    if(!patron.test(lastName.value) && !password.value.trim()===""){
      error(lastName, 1,"Last name too long.");
    }else{
      bien(lastName,1, "");
    }
    return patron.test(lastName.value);
  };
//Función para validar email
function validateEmail() {
  var patron = new RegExp(
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
  );
  if (!patron.test(email.value) || email.value.trim() === "") {
    error(email, 2, "Email cannot be blank.");
  } else {
    bien(email, 2, "");
  }
  return patron.test(email.value);
};
//Función para validar teléfono.
function validatePhoneNumber() {
    var patron = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    if (!patron.test(phone.value)  && !password.value.trim()==="") {
      error(phone, 3, "Phone number cannot have letters.");
    } else {
      bien(phone, 3, "");
    }
    return patron.test(phone.value);
};
//Función para controlar formato de foto.
function is_img(inputPhoto) {
    photo.addEventListener("change", function () {
    var filePath = this.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
      error( photo, 4 ,"Extension not allowed, use: .jpeg .jpg .png .gif");
      photo.value = "";
      return false;
    } else {
      bien(photo, 4, "");
      return true;
    }
  });
};
//Función para validar la dirección, admite texto con acentos, la ñ, y números y espacios en blanco.
function validateAddress() {
    var patron = new RegExp("^[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]*)*[a-zA-ZÀ-ÿ-0-9 \u00f1\u00d1]+$");

    if(!patron.test(address.value)  && !password.value.trim()===""){
      error(address, 5,"Wrong format.");
    }else{
      bien(address,5, "");
    }
    return patron.test(address.value);
};
//Función para validar cuan se ha seleccionado un país
function validateCountry() {
    if(country.value ==="Choose a country"){
    //   error(country, 6,"Wrong format.");
    }else{
      bien(country,6, "");
    }
    return true;
};
//Función para validar cuan se ha seleccionado un país
function validateRol() {
    if(rol.value ==="Choose an User rol"){
    //   error(country, 6,"Wrong format.");
    }else{
      bien(rol,7, "");
    }
    return true;
};
//Función para validar password. Mínimo 8 caracteres, al menos una letra, un número y un carácter especial.
function validatePassword() {
  let patron = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,25})"
  );
  if (!patron.test(password.value) || password.value.trim() === "") {
    error(password, 8, "<p>Min. length 8</p><p>At least 1 number</p><p>At least 1 upper case</p><p>At least 1 lower case</p><p>At least 1 symbol (!@#$...)</p>");
  } else {
    bien(password, 8, "");
    patron = true;
  }
  return patron;
};
//Función para validar Password confirmation debe de ser un número positivo.
function validateConfirmPassword() {
  let patron = false;
  if (confirmPass.value.trim() === "" || confirmPass.value != confirmPass.value) {
    error(confirmPass, 9, "The password does not match");
  } else {
    bien(confirmPass, 9, "");
    patron = true;
  }
  return patron;
};
//Función para validar Terms.
function validateTerms(){
    let validar = false;
    if(!check.checked){
      error(check,10, "Terms must be accepted");
    }else{
      bien(check, 10,"");
      validar = true;
    }
    return validar;
  };

export {resetColorBordeFormulario, validarFormulario, is_img };
