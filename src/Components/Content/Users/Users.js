import React,{useContext} from "react";
import { datosContexto } from "../../Context/Context.js";


function Users() {
  const contexto = useContext(datosContexto);
  // const url ="http://localhost/user";
  const url = "http://localhost:8030/api/user"

  return (
    <React.Fragment>
      
      
      <div>
        <h1>Users</h1>
        <ul>
        <li className="bg-indigo-500"
                  id={"hola"}
                  key={"a"}
                  onClick={() => {
                    contexto.getUsers(url);
                  }}>
                  Click me to get Users
                          
      </li>
      </ul> 
                 
      </div>
    </React.Fragment>
   
  );
}

export default Users;
