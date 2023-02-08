"use strict";
import {resetColorBordeFormulario,validarFormulario, is_img } from "./validate-admin-form.js";
import {getJsonAdminForm } from "./library.js";


window.onload = () => {

let id = (id) => document.getElementById(id);
let adminResetUser = id("btn-admin-update"),
    photo = id("photoUser");

//Función a la espera para verificar formato correcto de imagen subida.
 is_img(photo);

  //singUp.addEventListener("click", validarFormulario);
  adminResetUser.addEventListener("click", ()=>{
    e.preventDefault();
    console.log("entra")
     if(validarFormulario()){
      resetColorBordeFormulario();
      console.log("entra después de validar")
      console.log(getJsonAdminForm());
    }
   });


}//Fin window.onload.