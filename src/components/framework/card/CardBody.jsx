import React from "react";
import PropTypes from "prop-types";

class CardBody extends React.Component {

    render() {
        return (
            <div className={"card-body " + this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

CardBody.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
}

export default CardBody;