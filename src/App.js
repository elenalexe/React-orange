import logo from "./logo.svg";
import "./App.css";
import Cat from "./Cat.js";
import FruitBox from "./FruitBox.js";
import Button from "./Button";
import UserForm from "./UserForm.js";
import FormControl from "./FormControl.js";
import Clock from "./Clock";
import React from "react";
import OrangeCounter from "./OrangeCounter";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   }
  // }

  // componentDidMount() {
  //   this.anotherTimer = setInterval(() => {
  //     this.setState({
  //       date: new Date(),
  //     });
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.anotherTimer);
  // }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  MoreOranges = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    return (
      <div className="App">
        {/* <Clock date={new Date()} /> */}
        <OrangeCounter />
        <span>Click to buy:
          <button onClick={this.MoreOranges}>Give me helth!</button>
        </span>
        <br />
        <br />
        <span>You got {this.state.counter} oranges bro!</span>
        <div>{Array.from({ length: this.state.counter }, () => "🍊")}</div>

        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Test "Hello World"
        </a> */}
        {/* </header> */}
        {/* <Cat name="business cat">
        <span>This is my Cat</span>
      </Cat>
      {/* <FruitBox /> */}
        {/* <Button label="Home" />
      <Button label="About" />
      <Button icon="fas fa-user" label="My Profile" theme="ternary-button" />
      <Button icon="fas fa-power-off" label="Log out" />
      <Button icon="fas fa-pencil" label="Edit" theme="secondary-button" />
      <UserForm title="Register" />
      <Button label="Register" />
      <UserForm title="Edit Profile" />
      <Button label="Update" /> */}

      </div>
    );
  }
}

export default App;
