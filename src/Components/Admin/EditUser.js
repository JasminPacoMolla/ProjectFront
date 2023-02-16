import React from "react";
import { useForm } from "react-hook-form";
import {  useState,useContext } from "react";
import { datosContexto } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export const EditUser = (props) => {
    var context = useContext(datosContexto);
    const Navigate = useNavigate();

const [show, setShow] = useState(false);
const [showRepeat, setShowRepeat] = useState(false);
const[error,setError]=useState(false);



const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
    
    const url = `http://localhost/api/user/${context.user.id}` ;
      const onSubmit =async (data) => {
        
        //Hacer aquí la inserción en la base de datos.
        let datos = {
          name: data.name,
          email: data.email,
          phoneNumber: data.phone,
          photo: data.photo,
          address: data.address,
          country: data.country,
          user_type: data.rol,
        };
        const response = await context.updateUser(url,datos);
       
        if(response.status == 200){
         context.setShowModal(!context.showModal);
         Navigate('/IndexAdmin')
        }else{
          setError(true)
        }
      };



      const submitDelete=async()=>{
        const response = await context.deleteUser(url);
        console.log(response)
        if(response.status == 200){
          context.setShowModal(!context.showModal)
        } else{
          setError(true)
        }
      }
    
  return (
   <React.Fragment>
                 
    
      
      {context.showModal ? (
        <>
                  <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-30 overflow-x-hidden overflow-y-auto"></div>
         <div  className="fixed top-0 right-0 z-50 
         items-center justify-center w-full p-4 
         overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="absolute top-0 right-44 left-48 w-full h-full max-w-screen-md">
             <form action="GET" onSubmit={handleSubmit(onSubmit)} noValidate className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-20">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button type="button" onClick={()=>{context.setShowModal(false)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* <!-- First Name --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name
                      <span>
                        <i
                          className="fas fa-exclamation-circle failure-icon"
                        ></i>
                        <i
                          className="fas fa-check-circle success-icon"
                        ></i></span>
                    </label>
                    <input type="text" defaultValue={context.user.name} name="name" id="name" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Bonnie" required="" autoFocus
                      {...register("name", { required: true })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    <div className="error relative flex-col">
                      {errors.name && (
                        <span role="alert">This field is required </span>
                      )}
                    </div>

                  </div>

                  {/* <!-- Email --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email

                    </label>
                    <input type="email"  defaultValue={context.user.email} name="email" id="email" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="example@company.com" required=""
                      {...register("email", {
                        required: "Email required...",
                        pattern: {
                          value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                          message:
                            "Invalid email format",

                        },
                      })}

                    />
                    <div className="error relative flex-col">
                      {errors.email && (
                        <span role="alert">{errors.email.message}</span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Phone number --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number

                    </label>
                    <input type="tel" name="phone" id="phone" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="123-456-678"
                      {...register("phone", {
                        required: false,
                        pattern: {
                          value: /[0-9]{9,12}/,
                          message:
                            "Invalid format",

                        },
                      })}
                    />
                    <div className="error relative flex-col">
                      {errors.phone && (
                        <span role="alert">{errors.phone.message}</span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Photo --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo
                      <span><i className="fas fa-exclamation-circle failure-icon"></i>
                        <i className="fas fa-check-circle success-icon"></i>
                      </span>
                    </label>
                    <input type="file" id="photo" name="photo"
                      className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      {...register("photo", {
                        required: false,
                        pattern: {
                          value: /(.jpg|.jpeg|.png|.gif)$/i,
                          message:
                            "Extension not allowed. Use: .jpeg/.jpg/.png/.gif.",

                        },
                      })}
                    />
                    <div className="error relative flex-col">
                      {errors.photo && (
                        <span role="alert">{errors.photo.message}</span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Address --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address

                    </label>
                    <input type="text" id="address" name="address"
                      className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      placeholder=""
                      {...register("address", { required: false })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    <div className="error relative flex-col">
                      {errors.address && (
                        <span role="alert">This field is required </span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Country --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                      <span>   <i
                        className="fas fa-exclamation-circle failure-icon"
                      ></i>
                        <i
                          className="fas fa-check-circle success-icon"
                        ></i></span>
                    </label>
                    <select id="country" name="country" className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      {...register("country")}
                    >
                      <option defaultValue={''}>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Rol user --> */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="rol" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                      <span> <i
                        className="fas fa-exclamation-circle failure-icon"
                      ></i>
                        <i
                          className="fas fa-check-circle success-icon"
                        ></i></span>
                    </label>
                    <input id="rol" name="rol" defaultValue={context.user.user_type} className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                      {...register("rol")}/>
                      {/* <option defaultValue={'Choose a Rol User'}> {}</option>
                      <option value="PR">Premium</option>
                      <option value="BS">Basic</option> */}
                   
                    <div className="error relative flex-col"></div>
                  </div>
                  {/* <!-- Password --> */}
                  {/* <div className="col-span-6 sm:col-span-3 relative">
                    <label htmlFor="current-passwordAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password

                    </label>
                    <input type={show ? "text" : "password"} name="current-passwordAdmin" id="current-passwordAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="••••••••" required=""
                      {...register("password", {
                        required: "Password is Required...",
                        pattern: {
                          value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,}$/,
                          message:
                            "Password Must Contain: At least 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="absolute top-10  right-2 8 rounded-full "
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={20}
                          color="red"
                        >
                          <path fill="currentColor" stroke="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          width={20}
                          color="#16a34a"
                        >
                          <path fill="currentColor" stroke="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                        </svg>
                      )}
                    </button>{" "}
                    <div className="error relative flex-col">
                      {errors.password && (
                        <span role="alert">{errors.password.message}</span>
                      )}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div> */}
                  {/* <!-- New Password --> */}
                  {/* <div className="col-span-6 sm:col-span-3 relative">
                    <label htmlFor="passwordConfirm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password

                    </label>
                    <input type={show ? "text" : "password"} name="passwordConfirm" id="passwordConfirm" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="••••••••" required=""
                      {...register("passwordConfirm", {
                        required: true,
                      })}

                    />
                    <button
                      type="button"
                      className=" absolute top-10  right-2  rounded-full "
                      onClick={() => setShowRepeat(!showRepeat)}
                    >
                      {showRepeat ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={20}
                          color="red"
                        >
                          <path fill="currentColor" stroke="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          width={20}
                          color="#16a34a"
                        >
                          <path fill="currentColor" stroke="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                        </svg>
                      )}
                    </button>{" "}
                    <div className="error relative flex-col">
                      {watch("passwordConfirm") !== watch("password") &&
                        getValues("passwordConfirm") ? (
                        <p>Password does not match</p>
                      ) : null}
                    </div>
                    <div className="error relative flex-col"></div>
                  </div> */}
                </div>
              </div>
              {/* // <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button id="btn-admin-update" type="submit" 	 className="cursor-pointer text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save all</button>
                <a id="btn-admin-delete" onClick={()=>{submitDelete()}} className=" cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete User</a>
              </div>
              {error ? <p className="text-red-700 p-5">Some of your information is wrong, please try again!</p> : ""}
            </form>
      
            </div>
            </div>
        </>
      ) : null}


      
   </React.Fragment>
  )
}
export default EditUser;