
import axios from "axios";
import React from "react";



function Petitions(){
    const baseURL = "https://jsonplaceholder.typicode.com/posts/5";

    const [post, setPost] = React.useState(null);
    const [update, setUpdate] = React.useState(null);

//Cómo hacer una solicitud GET
   

    React.useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
          setPost(response.data);
        });
      }, []);

      //Cómo hacer una solicitud POST
      function createPost() {
        axios
          .post(baseURL, {
            title: "Hello World!",
            body: "This is a new post."
          })
          .then((response) => {
           setPost(response.data);
            
          });
          
      };

      //PUT
      function createPost() {
        axios
          .post(baseURL, {
            title: "Hello World!",
            body: "This is a new post."
          })
          .then((response) => {
            setPost(response.data);
          });
      };

      //Update
      function updatePost() {
        axios
          .put(`${baseURL}/1`, {
            title: "Good By World!",
            body: "This is an updated post."
          })
          .then((response) => {
            setUpdate(response.data);
          });
      }

      if (!post) return "No post!";

    return(
        <React.Fragment>
        <div>
            {console.log(post)}
            
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* <button onClick={createPost}>Create Post</button> */}
      </div>

      {/* <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
       </div> */}
       </React.Fragment>
    );
};

export  default Petitions;