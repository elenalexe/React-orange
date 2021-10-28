import React from "react";
import "./forms.css";

function FormControl(props) {
  return (
    <>
      <div className="form-control">
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} id={props.id} name={props.name} onChange={props.onChange} value={props.value} />
      </div>
    </>
  );
}

export default FormControl;
