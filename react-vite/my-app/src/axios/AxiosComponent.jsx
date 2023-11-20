import axios from "axios";

export default function AxiosComponent(){
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log("Get Response :",response.data);
    })
    .catch((error)=>{
        console.log("Get error :",error.message?error.message:error);
    });

    const postData={
        "id":11,
        "name":"Sample name",
        "username":"Bret",
        "email":"Sincere@april.biz"
    }


axios
    .post('https://jsonplaceholder.typicode.com/users',postData)
    .then((response)=>{
        console.log("Post Response :",response.data);
    })
    .catch((error)=>{
        console.log("Post Error:",error.message?error.message:error);
    });
    return <div>Axios</div>
};