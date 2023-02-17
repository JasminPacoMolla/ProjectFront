import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Context from './Components/Context/Context';
import Login from './Login/Login';
import Signup from './Sign-up/Signup';
import UserForm from './Components/Content/Users/UserForm';
import IndexAdmin from './Components/Admin/IndexAdmin';
import { IndexClient } from './Components/Content/IndexClient';
import EditUser from './Components/Admin/EditUser';
/**Este es el componente principal que tiene las routas utilizadas. */

function App() {
  return (
    <React.Fragment>
      <Context>
        <Routes>
          <Route path='/' element={<IndexClient/>}/>
          <Route path='/user' element={<UserForm/>}/>
          <Route path='/IndexAdmin' element={<IndexAdmin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/editUser' element={<EditUser/>}/>

        </Routes>
      </Context>
   
    </React.Fragment>
 

  );
}

export default App;
