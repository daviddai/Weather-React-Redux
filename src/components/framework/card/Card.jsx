import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {

    render() {
        return (
            <div className={"card " + this.props.classNames} style={this.props.styles}>
                {this.props.children}
            </div>
        );
    }

}

Card.propTypes = {
    classNames: PropTypes.string,
    styles: PropTypes.string,
    children: PropTypes.any
}

export default Card;