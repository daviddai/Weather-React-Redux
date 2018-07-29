import React from "react";
import PropTypes from "prop-types";

class CardFooter extends React.Component {

    render() {
        return (
            <div className={"card-footer " + this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

CardFooter.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
}

export default CardFooter;