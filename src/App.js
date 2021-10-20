import logo from './logo.svg';
import './App.css';
import Cat from './Cat.js';
import FruitBox from './FruitBox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
          Test "Hello World"
        </a>
      </header>
      <Cat />
      <FruitBox />
    </div>
  );
}

export default App;
