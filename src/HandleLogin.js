import React, { useState } from "react";
import LoginForm from "./LoginForm";

const VALID_LOGIN = {
  username: "",
  password: "HouseOfTheMouse",
}

class HandleLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange = (event) => {
    const passwordInput = event.target.value

    this.setState({
      username: this.state.username,
      password: passwordInput
    });
  };

  handleUsernameChange = (event) => {
    const usernameInput = event.target.value

    this.setState({
      username: usernameInput,
      password: this.state.password,
    });
  };

  handleFormSubmit = () => {
    const { username, password } = this.state;
    if (username !== '' && password === VALID_LOGIN.password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
  }

  componentDidMount() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      this.setState({ username, password });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Username: <input name="username" value={this.state.username} onChange={this.handleUsernameChange} />
        </label>
        <label> Password: <input name="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default HandleLogin;

//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede