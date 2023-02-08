"use strict";
import {resetColorBordeFormulario,validarFormulario } from "./validateSingUp.js";
import {getJsonSingUp } from "./library.js";


window.onload = () => {

let id = (id) => document.getElementById(id);
let singUp = id("btn-signUp");

  //singUp.addEventListener("click", validarFormulario);
  singUp.addEventListener("click", ()=>{
    if(validarFormulario()){
     resetColorBordeFormulario();
     console.log(getJsonSingUp());
    }
   });

}//Fin window.onload.