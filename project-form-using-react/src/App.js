import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  function showinput(){
  alert(username);
  }
  function printvalues(event){
    event.preventDefault()
    var user={
      username:username,
      password:password
    }
    console.log(user)
  }
  //Always use onChange for input field in react
  return (
    <div className="App">
      <h1>React Forms</h1>
      <form onSubmit={printvalues}>


        <input type="text" placeholder='Enter Username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br/>
        <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>(setpassword(e.target.value))}/>
        <br/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default App;
