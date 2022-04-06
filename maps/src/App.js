import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {

      const[numbers,setnumbers]=useState([1,2,3,4,5,6,7,8,9,10])
      const[players,setplayers]=useState([{name:"AYUSH",place:"Babrala"},{name:"Shivam",place:"Narora"}])
      const numberslist=numbers.map((num)=>{
        return <h1>{num}</h1>
      })
      const playerslist=players.map((detail)=>{
        return <div>
          <h1>' Name of player is '{detail.name}</h1>
          <h1>' Country '{detail.place} </h1>
        </div>
      })


    return(
      <div className="App">
        <h1>React Application Maps</h1>
        {numberslist}
        {playerslist}
      </div>
  );
}

export default App;
