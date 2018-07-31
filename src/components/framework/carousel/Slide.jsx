import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const Slide = (props) => {
    return (
        <Container classNames={props.classNames}>
            {props.children}
        </Container>
    );
};

Slide.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default Slide;