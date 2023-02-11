import React,{useContext, useEffect, useState} from "react";
import { datosContexto } from "../../Context/Context.js";
import axios from "axios";


function Users() {
  const contexto = useContext(datosContexto);
  // const url ="http://localhost/user";
  const [post, setPost] = useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/posts/";

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      
      
      <div>
        <h1>Users</h1>
        <ul>
        <li className="bg-indigo-500"
                  id={"hola"}
                  key={"a"}
                  onClick={() => {
                    contexto.getUsers(baseURL);
                  }}>
                  Click me to get Users
                          
      </li>
      <div>
            {console.log(post)}
            
        {/* <h1>{post.title}</h1>
        <p>{post.body}</p> */}
        </div>
      </ul> 
                 
      </div>
    </React.Fragment>
   
  );
}

export default Users;
