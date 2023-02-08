"use strict";

//Función para crear un Json con los datos de formulario.
function getJsonLogin() {
    //Recojo todos los valores del formulario.
    let id = (id) => document.getElementById(id);
    let email = id("emailLogin").value,
        password = id("passwordLogin").value;
    //Construyo el JSON.
    var signUpJson = {
      email:email,
      password:password,
    };
    return signUpJson;
  };

  export{
    getJsonLogin,
  }