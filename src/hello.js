//import React/* { Component }*/ from 'react';
import React, { Component } from 'react';
/*function Hello(){
    const sayHello =() =>{
        console.log('hello');
    }
    return(
        <div>
            <h3>This is the hello component</h3>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}
export default Hello;*/
class Hello extends Component{
//class Hello /*extends Component*/ {
    fun(){}
    render(){
        return(
            <div>
                <h3>This is the hello component</h3>
                <button onClick={()=>this.fun}>Say Hello</button>
            </div>
        )

    }   
}
export default Hello;