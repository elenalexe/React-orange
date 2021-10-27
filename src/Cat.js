import React from 'react';
import './Cat.css';

// function Cat(props) {
//     return(
//       <React.Fragment>
//       <h1 class="cat">Hello {props.name}</h1>
//       {props.children}
//       </React.Fragment>
//     )
// }

class Cat extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="cat">This is my business cat.</h1>
      </React.Fragment>
    )
  }
}

export default Cat;