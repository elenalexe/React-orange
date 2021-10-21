import React from "react";
import "./FruitBox.css";
import Apple from "./Apple.js";
import Orange from "./Orange";
import Button from './Button';


function FruitBox() {
  return (
    <React.Fragment>
      <div class="box">
        <Apple />
        <Orange />
        <Apple />
        <Orange />
        <Orange />
        <Orange />
      </div>
    </React.Fragment>
  );
}

export default FruitBox;
