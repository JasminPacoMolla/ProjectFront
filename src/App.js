import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Users from './Components/Content/Users/Users';
import Context from './Components/Context/Context';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/IndexHeader';
import Login from './Login/Login';
import Signup from './Sign-up/Signup';
import UserForm from './Components/Content/Users/UserForm';
import IndexAdmin from './Components/Admin/IndexAdmin';
import { IndexClient } from './Components/Content/IndexClient';
import Petitions from './Components/Petitions';

function App() {
  return (
    <React.Fragment>
    {/* <Routes>
      <Route path='/' element={<IndexClient/>}/>
      <Route path='/User' element={<UserForm/>}/>
      <Route path='/admin' element={<IndexAdmin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Users></Users> */}
    <Petitions/>
    </React.Fragment>
 

  );
}

export default App;
