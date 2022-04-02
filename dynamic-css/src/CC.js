import React,{Component} from 'react'
class CC extends React.Component{
    constructor(){
        super();
        this.state={
            color:'red',
            bgcolor:'green'
        }
    }
    changecolor=()=>{
        this.setState({color:'green'})
    }
    changeback=()=>{
        this.setState({bgcolor:'yellow'})
    }
    render(){
        return <div>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>This is Dynamic CSS</h1>
            <button onClick={this.changecolor}>Change color</button>
            <button onClick={this.changeback}>Change back ground color</button>
        </div>
    }
}
export default CC
