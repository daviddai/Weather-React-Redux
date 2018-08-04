import React from "react";
import PropTypes from "prop-types";

export const CardBody = (props) => {
    return (
        <div className={"card-body " + props.className}>
            {props.children}
        </div>
    );
};

CardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

CardBody.defaultProps = {
    className: ''
};

export default CardBody;