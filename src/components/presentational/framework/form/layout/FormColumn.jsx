import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-grid-system";

export const FormColumn = (props) => {
    return (
        <Col>
            {props.children}
        </Col>
    );
};

FormColumn.propTypes = {
    children: PropTypes.any
};