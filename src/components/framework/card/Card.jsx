import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className={"card " + this.props.classNames} style={this.props.styles}>
                {this.props.children}
            </div>
        );
    }

}

export default Card;