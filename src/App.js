import logo from './logo.svg';
import './App.css';
import Cat from './Cat.js';
import FruitBox from './FruitBox.js';
import Button from './Button';

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
      <Cat name ="business cat">
        <span>This is my Cat</span>
      </Cat>
      {/* <FruitBox /> */}
      <Button label="Home" />
      <Button label="About" />
      <Button icon="fas fa-user" label="My Profile" theme="ternary-button" />
      <Button icon="fas fa-power-off" label="Log out" />
      <Button icon="fas fa-pencil" label="Edit" theme="secondary-button" />
    </div>
  );
}

export default App;
