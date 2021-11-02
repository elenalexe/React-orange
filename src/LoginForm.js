import React from "react";
import HandleLogin from "./HandleLogin";

function LoginForm(props) {
  return (
    <>
      <div className="login-form">
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} name={props.name} />
      </div>
    </>
  );
}

export default LoginForm;