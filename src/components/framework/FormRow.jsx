import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-grid-system";

class FormRow extends React.Component {

    render() {
        return (
            <Row>
                {this.props.children}
            </Row>
        );
    }

}

FormRow.propTypes = {
    children: PropTypes.any
};

export default FormRow;