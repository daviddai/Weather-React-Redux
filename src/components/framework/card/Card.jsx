import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className={"card " + this.props.cardStyle}>
                {this.props.children}
            </div>
        );
    }

}

export default Card;