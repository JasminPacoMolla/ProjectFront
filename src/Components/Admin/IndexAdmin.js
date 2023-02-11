import React from "react";
import Header from "../Header/Header";


const IndexAdmin = ()=>{

    return(
        <React.Fragment>
            <Header />
            <div className="shadow-md sm:rounded-lg m-10">
                <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                    <div className="ml-10">
                        <button id="dropdownActionButton" datadropdowntoggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Action button</span>
                            Action
                            <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    </div>
                    {/* </div className="mr-3"> */}
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mr-10">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-indigo-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center ">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Rol
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {/* <!-- ========================= Inicio de bloque dinámico ========================= --> */}
                        {/* <!-- One User --> */}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                React Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2 "></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        {/* <!-- Fin One User --> */}
                        {/* <!-- ========================= Fin de bloque dinámico ========================= --> */}


                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Bonnie Green</div>
                                    <div className="font-normal text-gray-500">bonnie@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Designer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="/" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Jese Leos</div>
                                    <div className="font-normal text-gray-500">jese@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Vue JS Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="/" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Thomas Lean</div>
                                    <div className="font-normal text-gray-500">thomes@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                UI/UX Engineer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="/" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Leslie Livingston</div>
                                    <div className="font-normal text-gray-500">leslie@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                SEO Specialist
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="/" type="button" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        {/* <!-- One User --> */}
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-indigo-300 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="./img/user.svg" alt="Jese image" />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Neil Sims</div>
                                    <div className="font-normal text-gray-500">neil.sims@passcode.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                React Developer
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {/* <!-- Modal toggle --> */}
                                <a href="/" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                        </tr>
                        {/* <!-- Fin One User --> */}
                    </tbody>
                </table>
                    {/* <!-- Edit user modal --> */}
                <div id="editUserModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-2xl md:h-auto">
                        {/* <!-- Modal content --> */}
                        <form action="#" className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-20">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Edit user
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal">
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-6 gap-6">
                                    {/* <!-- First Name --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-nameAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name
                                            <span>
                                                <i
                                                    className="fas fa-exclamation-circle failure-icon"
                                                ></i>
                                                <i
                                                    className="fas fa-check-circle success-icon"
                                                ></i></span>
                                        </label>
                                        <input type="text" name="first-nameAdmin" id="first-nameAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Bonnie" required="" autoFocus />
                                        <div className="error relative flex-col"></div>
                                    </div>
                                    {/* <!-- Last Name --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-nameAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name
                                            <i className="fas fa-exclamation-circle failure-icon"></i>
                                            <i className="fas fa-check-circle success-icon"></i>
                                            <span></span>
                                        </label>
                                        <input type="text" name="last-nameAdmin" id="last-nameAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Green" />
                                        <div className="error relative flex-col"></div>
                                    </div>
                                    {/* <!-- Email --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="emailAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                            <span>  <i
                                                className="fas fa-exclamation-circle failure-icon"
                                            ></i>
                                                <i
                                                    className="fas fa-check-circle success-icon"
                                                ></i></span>
                                        </label>
                                        <input type="email" name="emailAdmin" id="emailAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="example@company.com" required="" />
                                        <div className="error relative flex-col"></div>
                                    </div>
                                    {/* <!-- Phone number --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="phone-numberAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number
                                            <span>  <i
                                                className="fas fa-exclamation-circle failure-icon"
                                            ></i>
                                                <i
                                                    className="fas fa-check-circle success-icon"
                                                ></i></span>
                                        </label>
                                        <input type="tel" name="phone-numberAdmin" id="phone-numberAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="123-456-678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
                                        <div className="error relative flex-col"></div>
                                    </div>
                                    {/* <!-- Photo --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="photoAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photo
                                            <span><i className="fas fa-exclamation-circle failure-icon"></i>
                                            <i className="fas fa-check-circle success-icon"></i>
                                            </span>
                                        </label>
                                        <input type="file" id="photoAdmin" name="photoAdmin"
                                            className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" />
                                        <div className="error relative flex-col"></div>
                                    </div>
                                    {/* <!-- Address --> */}
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="addressAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address
                                        <span>    <i
                                                className="fas fa-exclamation-circle failure-icon"
                                            ></i>
                                            <i
                                                className="fas fa-check-circle success-icon"
                                            ></i></span>
                                    </label>
                                    <input type="text" id="addressAdmin" name="addressAdmin"
                                        className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                        placeholder="" />
                                    <div className="error relative flex-col"></div>
                                </div>
                                {/* <!-- Country --> */}
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="countriesAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                                        <span>   <i
                                            className="fas fa-exclamation-circle failure-icon"
                                        ></i>
                                        <i
                                            className="fas fa-check-circle success-icon"
                                        ></i></span>
                                </label>
                                <select id="countriesAdmin" name="countriesAdmin" className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                                    <option defaultValue={'Choose a country'}>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                                <div className="error relative flex-col"></div>
                            </div>
                            {/* <!-- Rol user --> */}
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="rolUserAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option
                                    <span> <i
                                        className="fas fa-exclamation-circle failure-icon"
                                    ></i>
                                    <i
                                        className="fas fa-check-circle success-icon"
                                    ></i></span>
                            </label>
                            <select id="rolUserAdmin" name="rolUserAdmin" className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500">
                                <option defaultValue={'Choose a Rol User'}>Choose a Rol User</option>
                                <option value="PR">Premium</option>
                                <option value="BS">Basic</option>
                            </select>
                            <div className="error relative flex-col"></div>
                        </div>
                        {/* <!-- Password --> */}
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="current-passwordAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password
                                <span><i
                                    className="fas fa-exclamation-circle failure-icon"
                                ></i>
                                <i
                                    className="fas fa-check-circle success-icon"
                                ></i></span>
                        </label>
                        <input type="password" name="current-passwordAdmin" id="current-passwordAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="••••••••" required="" />
                        <div className="error relative flex-col"></div>
                    </div>
                    {/* <!-- New Password --> */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="new-passwordAdmin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password
                            <span><i
                                className="fas fa-exclamation-circle failure-icon"
                            ></i>
                            <i
                                className="fas fa-check-circle success-icon"
                            ></i></span>
                        </label>
                        <input type="password" name="new-passwordAdmin" id="new-passwordAdmin" className="shadow-sm bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="••••••••" required="" />
                        <div className="error relative flex-col"></div>
                    </div>
                    </div>
                </div>
                        {/* // <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button id="btn-admin-update" type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save all</button>
                            <button id="btn-admin-delete" type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete User</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default IndexAdmin;