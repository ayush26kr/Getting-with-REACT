import logo from './logo.svg';
import './App.css';

function App() {
  function getAlert(){
    alert('submit button is pressed');
  }
  function inputAlert(){
    alert('Change is made');
  }
  function hoverAlert(){
    alert('The text is hovered');
  }
  return (
    <div className="App">
      <h1>Event handling in React</h1>
      <br/>
      <input type="text" onChange={inputAlert}/>
      <br/>
      <button onClick={getAlert}>Sumit response</button>
      
      <h1 onMouseOver={hoverAlert}>Hover here to get alert</h1>

    </div>
  );
}

export default App;
