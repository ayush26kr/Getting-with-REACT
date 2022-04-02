import React,{Component} from 'react';
class Child extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

        return <h1>This is value from Child class {this.props.val}</h1>
    }
}
export default Child