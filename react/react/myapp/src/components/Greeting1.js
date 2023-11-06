// Functional Component

import React ,{Component,Fragment} from "react";

function Greeting1(props){
   
    return (
        // <h1>This is {props.name} functional component</h1>
        <Fragment>
            <h1>This is {props.name} ,functional component</h1>
            <p>age :{props.age}</p>
        </Fragment>

       
   )
}
export default Greeting1;