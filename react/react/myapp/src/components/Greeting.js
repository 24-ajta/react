// Class Component

import React , {Component} from "react";

class Greeting extends Component{
    render(){
        return <h1>This is {this.props.name} class component</h1>;
    }
}
export default Greeting;