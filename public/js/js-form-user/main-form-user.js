"use strict";
import {resetColorBordeFormulario,validarFormulario, is_img } from "./validate-user-form.js";
import {getJsonUserForm } from "./library.js";


window.onload = () => {

let id = (id) => document.getElementById(id);
let userReset = id("btn-resetUser"),
    photo = id("photoUser");

//Función a la espera para verificar formato correcto de imagen subida.
 is_img(photo);

  //singUp.addEventListener("click", validarFormulario);
  userReset.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("entra")
    console.log(validarFormulario())
     if(validarFormulario()){
      resetColorBordeFormulario();
      console.log("entra después de validar")
      console.log(getJsonUserForm());
    }
   });


}//Fin window.onload.