import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-grid-system";

export const FormRow = (props) => {
    return (
        <Row className={props.classNames}>
            {props.children}
        </Row>
    );
};


FormRow.propTypes = {
    children: PropTypes.any
};