import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const MessageBox = (props) => {
    return (
        <Container className={props.className}>
            {props.children}
        </Container>
    );
};

MessageBox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};