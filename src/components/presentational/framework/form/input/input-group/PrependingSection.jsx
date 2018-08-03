import React from "react";
import {Container} from "../../../layout/Container";
import PropTypes from "prop-types";

export const PrependingSection = (props) => {
    return (
        <Container className="input-group-prepend">
            {props.children}
        </Container>
    );
};

PrependingSection.propTypes = {
    children: PropTypes.any
};