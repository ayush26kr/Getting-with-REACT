import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import Service from './Service'

import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React router</h1>

      <BrowserRouter>
      
      <Navbar/>
      <Route path='/home' component={Home} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/services' component={Service} eaxct/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
