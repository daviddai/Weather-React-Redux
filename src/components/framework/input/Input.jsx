import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <input className={className} {...otherProps} />
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
};