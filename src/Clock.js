import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }

  }
  componentDidMount() {
    this.myTimer = setInterval(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000);

  } //document ready

  componentWillUnmount() {
    clearInterval(this.myTimer);
  } //component will get destroyed
  render() {
    return (
      <>
        <h1>Hello Clock!</h1>
        <span>It is {this.state.date.toLocaleTimeString()} from state</span>
        <br />
        <span>It is {this.props.date.toLocaleTimeString()} from props</span>
      </>
    )
  }
}


export default Clock;