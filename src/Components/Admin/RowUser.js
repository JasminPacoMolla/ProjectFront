import React from 'react'
import {  useState,useContext } from "react";
import { datosContexto } from "../Context/Context";
import EditUser from './EditUser';
import { useForm } from "react-hook-form";



export const RowUser = (props) => {
    var context = useContext(datosContexto);

   // console.log(context.users)
   const [showRepeat, setShowRepeat] = useState(false);
   const [showModal, setShowModal] = useState(props.show);

   const url = "http://localhost/api/user/"
 
 
   //Hook de la api react-hook-form
   //https://react-hook-form.com
   const {
     register,
     handleSubmit,
     getValues,
     watch,
     formState: { errors },
   } = useForm({ mode: "all" });
    var showState = false;
   const updateUser = async(url)=>{
     
   }
   const onSubmit = (data) => {
     //Hacer aquí la inserción en la base de datos.
     let datos = {
       name: data.name,
       lastname: data.lastName,
       email: data.email,
       phone: data.phone,
       photo: data.photo,
       address: data.address,
       country: data.country,
       rol: data.rol,
       password: data.password,
       password_confirmation: data.password_confirmation,
       termsAcceptationAcceptation: data.terms,
     };
 
     console.log(datos);
   };



  return (
    <React.Fragment>
         <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-indigo-300 dark:hover:bg-gray-600" >
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{props.data.name}</div>
                                    <div className="font-normal text-gray-500">{props.data.email}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                {props.data.user_type}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2 "></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                {/* <a onClick={(e)=>{context.updateUserState(context.users[props.index])}}  href="#"  type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a> */}
                                <button
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                type="button"
                                onClick={() =>{
                                     context.setShowModal(true);
                                    context.updateUserState(context.users[props.index])
                                }}
                                >
                                EditUser
                                </button>
                                
      
                            </td>
         </tr>
    </React.Fragment>
  )
}
export default RowUser;