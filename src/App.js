import React from "react";
import "./App.css";
import "./FruitBox.css";
import "./forms.css";
import "./index.css";
import ArrayLand from "./ArrayLand";
import UserList from "./UserList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ArrayLand />
        <UserList />
      </div>
    );
  }
}

export default App;
