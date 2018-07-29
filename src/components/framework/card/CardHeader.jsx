import React from "react";
import PropTypes from "prop-types";

class CardHeader extends React.Component {

    render() {
        return (
            <div className={"card-header " + this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

CardHeader.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default CardHeader;