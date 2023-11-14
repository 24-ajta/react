import React, {useState, useEffect} from 'react';


function UseEffectComponent() {
   
  const [data, setData] = useState(null)

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
       
    .then(data => setData(data))

    .catch((error)=>{
        console.log("Error in fetching data",error.message?error.message:error);
    })
  },[]);

  return (
  <>
  <h2>datas</h2>
  
    {data ? <p>Data:{data.map((e)=>{
      return <p>{e.name}</p>
    })} </p>:<p>Loading....</p>}
  
  </>
  );
}

export default UseEffectComponent;