import React from "react";
import PropTypes from "prop-types";
import {Container} from "../../../layout/Container";

export const FormGroup = (props) => {
    return (
        <Container className="form-group">
            {props.children}
        </Container>
    );
};

FormGroup.propTypes = {
   children: PropTypes.any
};