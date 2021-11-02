import React, { useState } from "react";
import LoginForm from "./LoginForm";

class HandleLogin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const username = event.username;
    const password = event.password;

    this.setState({
      [username.name]: username,
      [password.name]: password,

    });
  };

  handleFormSubmit = () => {
    const {username, password} = this.state;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  componentDidMount() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    this.setState({username, password});
  }

  render(){
  return(
    <form onSubmit={this.handleFormSubmit}>
    <label>Username: <input name="username" value={this.state.username} onChange={this.handleChange} />
    </label>
    <label> Password: <input name="password" value={this.state.password} onChange={this.handleChange} />
    </label>
    <button type="submit">Login</button>
    </form>
    );
  }
}

export default HandleLogin;

//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede