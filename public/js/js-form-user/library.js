"use strict";
//Función para crear un Json con los datos de formulario.
function getJsonUserForm() {
    //Recojo todos los valores del formulario.
    let id = (id) => document.getElementById(id);
    let name = id("first-nameUser").value,
      lastName = id("last-nameUser").value,
      email = id("emailUser").value,
      phone = id("phoneUser").value,
      photo = id("photoUser").value,
      address = id("addressUser").value,
      country = id("countriesUser").value,
      rol = id("rolUser").value,
      password = id("passwordUser").value;
    //Construyo el JSON.
    var userFormJson = {
      name:name,
      lastName:lastName,
      phone:phone,
      photo:photo,
      address: address,
      country:country,
      rol:rol,
      email:email,
      password:password,
    };
    return userFormJson;
  };

  export{
    getJsonUserForm,
  }
