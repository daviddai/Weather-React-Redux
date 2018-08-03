import React from "react";
import PropTypes from "prop-types";

class CardHeader extends React.Component {

    render() {
        return (
            <div className={"card-header " + this.props.className}>
                {this.props.children}
            </div>
        );
    }

}

CardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default CardHeader;