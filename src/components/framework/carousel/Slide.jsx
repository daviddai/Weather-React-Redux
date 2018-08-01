import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const Slide = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    );
};

Slide.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default Slide;