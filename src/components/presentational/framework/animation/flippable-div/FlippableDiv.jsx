import React from "react";
import ReactCardFlip from "react-card-flip";
import "./flippale-div.css";

class FlippableDiv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        }
    }

    handleFlipping = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    };

    render() {
        const childrenWithProps = React.Children.map(
            this.props.children, (child, index) => {
                if (child.key === 'front') {

                } else if (child.key === 'back') {

                }
                console.log(child.key);
            }
        );

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                {this.props.children}
            </ReactCardFlip>
        );
    }

}


export default FlippableDiv;