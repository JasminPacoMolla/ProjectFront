import React,{createContext,useState} from "react";
import {getData,postData,putData,deleteData} from '../../biblioteca';
import { useNavigate } from "react-router-dom";



const datosContexto = createContext();

    var listaInicial=[];
    var objetoInicial={};


function Context(props) {
    const [userConnected,setUserConnected] = useState(objetoInicial);
    const [user,setUser] = useState(listaInicial);


    const [users,setUsers] = useState(listaInicial);
    const [loggedIn,setLogin]= useState(false);
    const [showModal, setShowModal] = useState(props.show);

    /***LOGIN******* */
    const login =async(url,object)=>{
        try{
            const response = await postData(url,object);
            setUserConnected(response.data.user)
            setLogin(true);
        
            return response.data.path;
        }catch(error){
          console.log(error);
          return error;
        }
    
      }

    /***Sign-up************ */

    const signup =async(url,object)=>{
        try{
        const response = await postData(url,object);
        /**I don't know if i have to put login here or not. */
        return response
        }catch(error){
        console.log(error);
        return error;

        }
    }

    /****Logout******************** */

    const logout =async (url)=>{
        try{
            const response = await postData(url);
            /**I don't know if i have to put login here or not. */
            setUserConnected(objetoInicial);
            setLogin(false);
            return response;

        }catch(error){
            console.log(error);
            return error;

        }
    }

    /*****Update user********** */
    const updateUser = async(url,object)=>{
        try{
            const response = await putData(url,object);
            if(response.status = 200){
                setUser(object);
            }
            return response;
        }
        catch(error){
            console.log(error);
            return error;

        }
    }

    /******Delete user******* */
    const deleteUser = async(url)=>{
        try{
            const response = await deleteData(url);
            if(response.status = 200){
                setUser(objetoInicial);
            }
            return response;
        }
        catch(error){
            console.log(error);
            return error;

        }
    }






















    const isLoggedIn=(boolean)=>{
        setLogin(boolean);
    }




    const updateUserState=(object)=>{
        setUser(object);
    }
    const updateListState=(list)=>{
        setUsers(list);
    }


    const getUsers= async (url)=>{
        const usersList = await getData(url);
        setUsers(usersList);
    };

  
    const getUser = async (url) =>{
        const user = await getData(url);
        setUser(user);
    };

    const data = {user,users,getUsers,getUser,isLoggedIn,loggedIn,setLogin,setShowModal,
        showModal,updateListState,updateUserState,login,signup,updateUser,deleteUser,userConnected,setUserConnected,logout};
    return (
        <datosContexto.Provider value={data}>
            {props.children}
        </datosContexto.Provider>
  );
  };
  
  export default Context;
  export {datosContexto}
  