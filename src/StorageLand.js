import React from "react";
import LoginForm from "./LoginForm";
import HandleLogin from "./HandleLogin";

function StorageLand(){
  return (
    <>
    <div className="login-form">
      <h2 className="login-title">Hello, please login</h2>
      <p className="error"></p>
      </div>
      {/*
      <form className="form" onSubmit={handleSubmit}>
      <LoginForm 
        label="Username:"
        type="username"
        id="username"
        name="username"
        onChange = {(event) => setUsername(event.target.value)}
      />
      <LoginForm 
        label="Password:"
        type="password"
        id="password"
        name="name"
      />
      </form> */}
    </>
  );
}

export default StorageLand;