import React from "react";
import "./App.css";
import "./FruitBox.css";
import "./forms.css";
import "./index.css";
import ArrayLand from "./ArrayLand";
import UserList from "./UserList";
import StorageLand from "./StorageLand";
import HandleLogin from "./HandleLogin";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <ArrayLand /> */}
        {/* <UserList /> */}
        <HandleLogin/>
        </div>
    );
  }
}

export default App;
