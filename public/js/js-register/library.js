"use strict";

//Función para crear un Json con los datos de formulario.
function getJsonSingUp() {
    //Recojo todos los valores del formulario.
    let id = (id) => document.getElementById(id);
    let name = id("nameUp").value,
      email = id("emailUp").value,
      password = id("passwordUp").value;
    //Construyo el JSON.
    var signUpJson = {
      name:name,
      email:email,
      password:password,
    };
    return signUpJson;
  };

  export{
    getJsonSingUp,
  }