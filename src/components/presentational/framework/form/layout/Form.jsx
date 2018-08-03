import React from "react";
import { Container } from "react-grid-system";
import PropTypes from "prop-types";

export const Form = (props) => {
    return (
        <form onSubmit={props.submitForm}>
            <Container>
                {props.children}
            </Container>
        </form>
    );
};

Form.propTypes = {
    submitForm: PropTypes.func,
    children: PropTypes.any
};