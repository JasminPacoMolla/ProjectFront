const getData =(url) =>{
    return fetch(url)
    .then((response) =>{
        return response.json();
    }  )
    .then((data)=>{
        return data;
    })
}