import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import Home from './home'
import './App.css';

function App() {
  const[player,setplayer]=useState('Ayush') //note the use of set function
  const[number,setnumber]=useState('1,3,5,7,9')
  const[language,setlanguage]=useState('Javascript')
  useEffect(()=>{  //syntax of useEffect
    setlanguage('HTML')
  },[])
function changeplayer(){
  setplayer('Messi')
  setnumber('2,4,6,8,10')
  }
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h1>Declared player is {player}</h1>
      <h1>Declared number is {number}</h1>
      <button onClick={changeplayer}>Change player</button>
      <h1>Declared language is {language}</h1>
      <br/><hr/>
      <Home/>
      
    </div>
  );
}

export default App;
