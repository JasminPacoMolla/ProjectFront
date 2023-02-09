import React from "react";
import Header from "../../Header/Header";

const UserForm = ()=>{
    return(

        <React.Fragment>
            <Header/>
            <div className="max-w-2xl mx-auto bg-white p-16">
                <h2 className="mb-5 font-medium text-heading-color">Welcome <span id="userOnForm" className="font-normal text-theme-color">User name here</span></h2>
                <p className="mb-5" >You can add or delete information from your profile even change your email. We only require a valid name, email and password.</p>
                    <form>
                        {/* <!-- Name and Last Name --> */}
                        <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {/* <!-- Input First Name --> */}
                            <div>
                                <label htmlFor="first-nameUser"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name
                                    <span>
                                    <i
                                        className="fas fa-exclamation-circle failure-icon"
                                    ></i>
                                    <i
                                        className="fas fa-check-circle success-icon"
                                    ></i></span>
                                </label>
                                <input type="text" id="first-nameUser" name="first-nameUser"
                                    className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    placeholder="John" />
                                    <div className="error relative flex-col"></div>
                            </div>

                            {/* <!-- Input Last Name --> */}
                            <div>
                                <label htmlFor="last-nameUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last
                                    name
                                    <span>
                                    <i
                                        className="fas fa-exclamation-circle failure-icon"
                                    ></i>
                                    <i
                                        className="fas fa-check-circle success-icon"
                                    ></i></span>
                                </label>
                                <input type="text" id="last-nameUser" name="last-nameUser"
                                    className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                    placeholder="Doe" />
                                    <div className="error relative flex-col"></div>
                            </div>
                        </div>
                        {/* <!-- Input email --> */}
                        <div className="mb-6">
                        <label htmlFor="emailUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                            address <span>
                                <i
                                className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                className="fas fa-check-circle success-icon"
                                ></i></span>
                            </label>
                        <input type="email" id="emailUser"
                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            placeholder="john.doe@country.com" required/>
                            <div className="error relative flex-col"></div>
                        </div>
                        {/* <!-- Phone number and Photo --> */}
                        <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {/* <!-- Input phone number --> */}
                        <div>
                        <label htmlFor="phoneUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                            number
                            <span>
                                <i
                                className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                className="fas fa-check-circle success-icon"
                                ></i></span>
                            </label>
                        <input type="tel" id="phoneUser" name="phoneUser"
                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            placeholder="123-456-678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                            <div className="error relative flex-col"></div>
                    
                        </div>
                        {/* <!-- Input Picture --> */}
                        <div>
                        <label htmlFor="photoUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo .jpg/.jpeg/.png/.gif
                            <span>
                            <i
                                className="fas fa-exclamation-circle failure-icon"
                            ></i>
                            <i
                                className="fas fa-check-circle success-icon"
                            ></i></span>
                        </label>
                        <input type="file" id="photoUser" name="photoUser"
                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" />
                            <div className="error relative flex-col"></div>
                        </div>
                    </div>
                    {/* <!-- Input address --> */}
                    <div className="mb-6">
                        <label htmlFor="addressUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address
                            <span>
                            <i
                                className="fas fa-exclamation-circle failure-icon"
                            ></i>
                            <i
                                className="fas fa-check-circle success-icon"
                            ></i></span>
                        </label>
                        <input type="text" id="addressUser" name="addressUser"
                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            placeholder="Av HalfDome 27" />
                            <div className="error relative flex-col"></div>
                    </div>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        {/* <!-- Input country select --> */}
                        <div>
                        <label htmlFor="countriesUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                            <span>
                            <i
                                className="fas fa-exclamation-circle failure-icon"
                            ></i>
                            <i
                                className="fas fa-check-circle success-icon"
                            ></i></span>
                        </label>
                        <select id="countriesUser" name="countriesUser" className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                        <option value="">Choose a country</option>
                        <option value="" >United States</option>
                        <option value="" >Canada</option>
                        <option value="" >France</option> 
                        <option value="" >Germany</option>
                        </select>
                        <div className="error relative flex-col"></div>
                        </div>
                        {/* <!-- Input rol select --> */}
                        <div>
                            <label htmlFor="rolUser" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                            <span>
                                <i
                                className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                className="fas fa-check-circle success-icon"
                                ></i></span>
                            </label>
                            <select id="rolUser" name="rolUser" className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                            <option selected>Choose an User rol</option>
                            <option>Premium</option>
                            <option>Basic</option>
                            </select>
                            <div className="error relative flex-col"></div>
                        </div>
                    </div>
                        {/* <!-- Input password --> */}
                        <div className="mb-6">
                            <label htmlFor="passwordUser"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Reset password
                                <span>
                                <i
                                    className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                    className="fas fa-check-circle success-icon"
                                ></i></span></label>
                            <input type="password" id="passwordUser" name="passwordUser"
                                className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                placeholder="•••••••••" required />
                                <div className="error relative flex-col"></div>
                        </div>
                        {/* <!-- Input password --> */}
                        <div className="mb-6">
                        <label htmlFor="confirm-passwordUser"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password
                            <span>
                                <i
                                className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                className="fas fa-check-circle success-icon"
                                ></i></span></label>
                        <input type="password" id="confirm-passwordUser"
                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            placeholder="•••••••••" required />
                            <div className="error relative flex-col"></div>
                    </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="termsUser" type="checkbox" value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-indigo-100 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                                    required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the
                                <a href="#" className="text-indigo-600 hover:underline dark:text-indigo-500">terms and
                                    conditions</a>.
                                    <span>
                                    <i
                                        className="fas fa-exclamation-circle failure-icon"
                                    ></i>
                                    <i
                                        className="fas fa-check-circle success-icon"
                                    ></i></span>
                                    <div className="error relative flex-col"></div></label>
                                    
                        </div>
                        
                        <button type="submit" id="btn-resetUser"
                            className="text-white bg-indigo-700 hover:bg-indigo-800 shadow-indigo-800/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 dark:shadow-purple-800/80
                            ">Reset my Profile</button>

                            <button type="submit" id="btn-deletetUser"
                            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete my Account</button>     
                    </form>

                    <p className="mt-5"> <a className="text-indigo-600 hover:underline"
                            href="#" target="_blank">Data
                            Policy.</a>
                    </p>
                </div>
        {/* <script src="https://flowbite.com/docs/flowbite.min.js"></script>
        <script type="module" src="./js/js-form-user/main-form-user.js"></script> */}


    </React.Fragment>




    );
}
export default UserForm;