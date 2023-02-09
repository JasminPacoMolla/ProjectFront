import React,{useContext,createContext,useState} from "react";
import {getData} from '../../biblioteca';
import axios from "axios";

const datosContexto = createContext();

    var listaInicial=[];
    var objetoInicial={};

function Context(props) {
    const [user,setUser] = useState(objetoInicial);
    const [users,setUsers] = useState(listaInicial);


    const getUsers= async (url)=>{
        const usersList = await getData(url);
        setUsers(usersList);
    };

  
    const getUser = async (url) =>{
        const user = await getData(url);
        setUser(user);
    };

    const data = {user,users,getUsers,getUser};
    return (
        <datosContexto.Provider value={data}>
            {props.children}
        </datosContexto.Provider>
  );
  };
  
  export default Context;
  export {datosContexto}
  