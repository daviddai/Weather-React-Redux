import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

class MessageBox extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container classNames={this.props.classNames}>
                {this.props.children}
            </Container>
        );
    }

}

MessageBox.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default MessageBox;