import React from "react";
import PropTypes from "prop-types";

export const CardFooter = (props) => {
    return (
        <div className={"card-footer " + props.className}>
            {props.children}
        </div>
    );
};

CardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default CardFooter;