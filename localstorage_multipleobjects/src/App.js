import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from 'react';

function App() {
  const[language,setlanguage]=useState(' ')
  const[framework,setframework]=useState(' ')
  function addtolocalstorage(){
    var courses=JSON.parse(localStorage.getItem('courses')||"[]")
    var course={
      language:language,
      framework:framework
    }
    courses.push(course)
    localStorage.setItem('courses',JSON.stringify(courses))
  }
  return (
    <div className="App">
      <h1>Local Storage</h1>
      <h3>adding multiple objects in array</h3>
      <input type="text" placeholder='language' value={language} onChange={(e)=>{setlanguage(e.target.value)}}/>
      <br/>
      <input type="text" placeholder='framework' value={framework} onChange={(e)=>{setframework(e.target.value)}}/>
      <br/>
      <button onClick={addtolocalstorage}>Add to local storage</button>
    </div>
  );
}

export default App;
