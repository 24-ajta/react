import React, { useReducer } from "react";


const counterReducer = (state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        default:
            return state;
    }
}

const initialstate = {count:0};

function UseReduceCounter(){
    const [state,dispatch] = useReducer(counterReducer,initialstate)//two parameters inside usereducer first is a function another is an initialstate
        return (
            <>
            <p> Count: {state.count}</p>
            <button onClick={()=> dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=> dispatch({type:'DECREMENT'})}>Decrement</button>
            </>

        )
    
}
export default UseReduceCounter;