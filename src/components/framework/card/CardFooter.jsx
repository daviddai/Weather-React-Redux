import React from "react";
import PropTypes from "prop-types";

export const CardFooter = (props) => {
    return (
        <div className={"card-footer " + props.classNames}>
            {props.children}
        </div>
    );
};

CardFooter.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default CardFooter;