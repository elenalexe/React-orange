import React from "react";
import FormControl from "./FormControl";
import "./forms.css";
import "./Button.js";

function UserForm(props) {
  return (
    <>
      <h2 className="title">{props.title}</h2>
      <form className="form">
        <FormControl
          label="Username: "
          type="username"
          id="username"
          name="username"
        />
        <FormControl label="Email: " type="email" id="email" name="email" />
        <FormControl
          label="Password: "
          type="password"
          id="password"
          name="password"
        />
        <FormControl
          label="Confirm password: "
          type="password"
          id="confirm-pass"
          name="confirm-pass"
        />
        <FormControl label="Motto: " type="textarea" id="motto" name="motto" />
        <FormControl label="Yes" type="radio" id="ads" name="ads-yes" />
        <FormControl label="No" type="radio" id="ads" name="ads-no" />
      </form>
    </>
  );
}

export default UserForm;
