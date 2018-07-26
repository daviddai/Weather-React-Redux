import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className={"card " + this.props.styleClasses}>
                {this.props.children}
            </div>
        );
    }

}

export default Card;