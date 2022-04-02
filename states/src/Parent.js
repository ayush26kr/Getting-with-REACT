import React,{Component} from "react";
import Child from './Child'
class Parent extends React.Component{
    render(){
        return <div>
            <h1>This is a parent class </h1>
            <Child val='Javascript'/>
            </div>
    }
}
export default Parent