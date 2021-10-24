import React from "react";


class OrangeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { oranges: props.oranges }
    };

    componentDidUpdate(props) {
        if (this.props.oranges !== this.state.oranges) {
            this.setState({ ...this.state, oranges: props.oranges })
        }
    }

    render() {
        return (
            <>
                <h1>Buy Mana for Humans</h1>
                <br />
                <br />
                <br />
                <span>You got {this.state.oranges} oranges bro!</span>
                <br />
                <div>{Array.from({ length: this.state.oranges }, () => "🍊")}</div>



            </>
        )
    }
}



export default OrangeCounter;