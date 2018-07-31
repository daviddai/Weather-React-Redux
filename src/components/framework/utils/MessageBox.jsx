import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const MessageBox = (props) => {
    return (
        <Container classNames={props.classNames}>
            {props.children}
        </Container>
    );
};

MessageBox.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};