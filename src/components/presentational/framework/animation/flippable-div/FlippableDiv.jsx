import React from "react";

import "./flippale-div.css";

class FlippableDiv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggled: false
        }
    }

    flip = () => {
        this.setState({
            isToggled: !this.state.isToggled
        });
    };

    render() {
        const flipped = this.state.isToggled ? "flipped" : "";
        return (
            <div className={"flippable-div " + flipped} onClick={this.flip}>
                {this.props.children}
            </div>
        );
    }

}

export default FlippableDiv;