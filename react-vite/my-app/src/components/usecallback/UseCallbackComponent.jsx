import React , {useCallback,useState} from "react";

function UseCallbackComponent(){
    const [count,setCount] = useState(0);

    const handleClick = useCallback(()=>{
        setCount(count + 1);
    },[count]);

    return(
        <div>
            <p>Count:{count}</p>
            <ChildComponent onClick={handleClick}/>
        </div>
    )
}

function ChildComponent({onClick}){
    return <button onClick={onClick}>Increment</button>
}

export default UseCallbackComponent;