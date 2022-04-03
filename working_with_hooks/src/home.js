import React,{useState,useEffect} from "react";
function Home(){
    const[color,setcolor]=useState('red')
    const[bgcolor,setbgcolor]=useState('yellow')
    function changeStyling(){
        setcolor('green')
        setbgcolor('blue')
    }
    return <div>
        <h1>Manipulating CSS using Hooks</h1>

        <h1 style={{color:color}}>Name:Ayush</h1>
        <h1 style={{backgroundColor:bgcolor}}>Game:Badminton</h1>

        <button onClick={changeStyling}>Change CSS Styling</button>
    </div>
}
export default Home