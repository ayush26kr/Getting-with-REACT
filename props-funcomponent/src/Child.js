import React from 'react'
function Child(props){
    return <div>
        <h1>This is a child function</h1>
        <h1>The country is {props.country}</h1>
        <h1>The game is {props.name} </h1>
    </div>
}
export default Child