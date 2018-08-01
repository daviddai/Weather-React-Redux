import React from "react";
import PropTypes from "prop-types";

export const Input = (props) => {
    return (
        <input id={props.id}
               type={props.type}
               className={props.classNames}/>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    classNames: PropTypes.string
};