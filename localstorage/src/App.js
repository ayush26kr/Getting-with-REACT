import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from 'react';

function App() {
  const[username,setusername]=useState(' ')
  function addtolocalstorage(){
    localStorage.setItem('username',username)
  }
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <input type="text" placeholder="Enter username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      <button onClick={addtolocalstorage}>Add to local storage</button>

      <h3>Value in local storage is {localStorage.getItem('username')}</h3>
    </div>
  );
}

export default App;
