import React from "react";
import "./forms.css";

function FormControl(props) {
  return (
    <React.Fragment>
      <div className="form-control">
        <label for={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} name={props.name}></input>
      </div>
    </React.Fragment>
  );
}

export default FormControl;
