import React from "react";
import {Container} from "../layout/Container";
import PropTypes from "prop-types";

export const AppendingSection = (props) => {
    return (
        <Container className="input-group-append">
            {props.children}
        </Container>
    );
};

AppendingSection.propTypes = {
    children: PropTypes.any
};