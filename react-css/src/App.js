import logo from './logo.svg';
import './App.css';
import Second from './second'

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'green'}}>CSS in React JS</h1>
      <button style={{color:'gree',backgroundColor:'red'}}>Click me</button>
      <Second/>
    </div>
  );
}

export default App;
