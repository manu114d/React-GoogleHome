import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>Hello is my first intro to react</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from scratch
        </a>
      </header>
    </div>
  );
}

export default App;
