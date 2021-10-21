import React from "react";
import "./forms.css";


function Button(props) {
  return (
    <button className={props.theme ? props.theme : ''}>
      {props.icon ?
      <React.Fragment>
        <span className={props.icon}></span>
        <span>{props.label}</span>
        </React.Fragment> 
      :
        props.label     
      }
      
    </button>
  )
} 

export default Button;