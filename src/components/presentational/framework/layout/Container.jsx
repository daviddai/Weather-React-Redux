import React from "react";
import PropTypes from "prop-types";

export const Container = (props) => {
    return (
        <div className={props.className} style={props.style}>
            {props.children}
        </div>
    );
};

Container.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
};

Container.defaultProps = {
    className: null,
    style: null,
    children: null
};