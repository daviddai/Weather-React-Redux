import React from "react";
import PropTypes from "prop-types";

export const Heading = (props) => {
    const HeadingTag = props.headingTag;

    return (
        <HeadingTag className={props.className}>
            {props.children}
        </HeadingTag>
    );
};

Heading.propTypes = {
    headingTag: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
};