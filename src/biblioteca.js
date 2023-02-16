// const getData =(url) =>{
//     return fetch(url)
//     .then((response) =>{
//         return response.json();
//     }  )
//     .then((data)=>{
//         return data;
//     })
// }

import axios from "axios"

/*************************************************************************** */
/**Post with a token (all function inside the middleware) */
const postDataToken= async (url,object,header)=>{
    const data = await axios.post(object);
    return data;
}

/**Post without token for login and sign-up */
const postData= async (url,object={})=>{
    const data = await axios.post(url,object);
    return data;
}

/**put data********** */
const putData= async (url,object)=>{
    const data = await axios.put(url,object);
    return data;
}
/**Delete data */

const deleteData= async (url,object)=>{
    const data = await axios.delete(url,{object});
    return data;
}
/**Get data */
const getData= async (url)=>{
    const data = await axios.get(url);
    return data;
}
export {getData,postData,postDataToken,putData,deleteData}