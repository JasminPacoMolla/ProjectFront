"use strict";
//Función para crear un Json con los datos de formulario.
function getJsonAdminForm() {
    //Recojo todos los valores del formulario.
    let id = (id) => document.getElementById(id);
    let name = id("first-nameAdmin").value,
      lastName = id("last-nameAdmin").value,
      email = id("emailAdmin").value,
      phone = id("phoneAdmin").value,
      photo = id("photoAdmin").value,
      address = id("addressAdmin").value,
      country = id("countriesAdmin").value,
      rol = id("rolAdmin").value,
      password = id("passwordAdmin").value;
    //Construyo el JSON.
    var adminFormJson = {
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
    return adminFormJson;
  };

  export{
    getJsonAdminForm,
  }
