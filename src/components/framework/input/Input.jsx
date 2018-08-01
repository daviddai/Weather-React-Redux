import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
    const {
        classNames,
        ...otherProps
    } = props;

    return (
        <input className={classNames} {...otherProps} />
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    classNames: PropTypes.string
};