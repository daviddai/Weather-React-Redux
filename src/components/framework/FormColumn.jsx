import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-grid-system";

class FormColumn extends React.Component {

    render() {
        return (
            <Col>
                {this.props.children}
            </Col>
        );
    }

}

FormColumn.propTypes = {
    children: PropTypes.any
};

export default FormColumn;