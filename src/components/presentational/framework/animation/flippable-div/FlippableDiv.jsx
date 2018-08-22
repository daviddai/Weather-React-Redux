import React from "react";
import ReactCardFlip from "react-card-flip";

class FlippableDiv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFlipped: false
        }
    }

    flip = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    };

    render() {
        const childrenWithProps = this.props.children.map(child => {
            const extraProps = {
                key: child.type.name === 'Front' ? 'front':'back',
                triggerFlipping: this.flip
            };

            return React.cloneElement(child, extraProps);
        });

        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                {childrenWithProps}
            </ReactCardFlip>
        );
    }

}


export default FlippableDiv;