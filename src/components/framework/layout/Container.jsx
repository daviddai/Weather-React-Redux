import React from "react";
import PropTypes from "prop-types";

export const Container = (props) => {
    return (
        <div className={props.classNames} style={props.styles}>
            {props.children}
        </div>
    );
};