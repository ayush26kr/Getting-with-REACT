import React,{Component} from 'react'
class CC extends React.Component{
    constructor(){
        super();
        this.state={
            'player':'ronaldo',
            'game':'Football'
        }
    }
    changePlayerName=()=>{
        this.setState({player:"Ayush"})
        this.setState({game:"Cricket"})
    }
    render(){
        return <div>
            <h1>This is a class component {this.state.player}.</h1>
            <h1>The player name is {this.state.player}</h1>
            <h1>Game name: {this.state.game}</h1>
            <button onClick={this.changePlayerName}>Change player name</button>
        </div>
    }
}
export default CC