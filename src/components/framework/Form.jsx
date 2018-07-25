import React from "react";
import { Container } from "react-grid-system";
import PropTypes from "prop-types";

class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <Container>
                    {this.props.children}
                </Container>
            </form>
        );
    }

}

Form.propTypes = {
    children: PropTypes.any
};

export default Form;