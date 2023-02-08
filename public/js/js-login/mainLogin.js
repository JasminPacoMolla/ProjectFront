"use strict";
import {resetColorBordeFormulario,validarFormulario } from "./validateLogin.js";
import {getJsonLogin } from "./library.js";


window.onload = () => {

let id = (id) => document.getElementById(id);
let login = id("btn-login");

  //singUp.addEventListener("click", validarFormulario);
  login.addEventListener("click", ()=>{
    if(validarFormulario()){
     resetColorBordeFormulario();
     console.log(getJsonLogin());
    }
   });

}//Fin window.onload.