import React from "react";
import PropTypes from "prop-types";
import {Container} from "../../../layout/Container";

export const InputGroup = (props) => {
    return (
        <Container className="input-group">
            {props.children}
        </Container>
    );
};

InputGroup.propTypes = {
    children: PropTypes.any
};