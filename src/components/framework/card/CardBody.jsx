import React from "react";
import PropTypes from "prop-types";

export const CardBody = (props) => {
    return (
        <div className={"card-body " + props.classNames}>
            {props.children}
        </div>
    );
};

CardBody.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default CardBody;