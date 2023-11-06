// import React,{Component} from "react";

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0,
//         };
//     }
//     increment=()=>{
//         this.setState({count:this.state.count+1});
//     };
//     render(){
//         return(
//             <div>
//                 <p>Count:{this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Counter;


import React, { useState } from "react";
function Counterfunction(props){
    const [count,setCount] = useState(props.initialvalue);
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <p>
                count:{count}
            </p>
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default Counterfunction;