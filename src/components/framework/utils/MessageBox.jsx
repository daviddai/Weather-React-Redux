import React from "react";
import PropTypes from "prop-types";

class MessageBox extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

MessageBox.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.array
};

export default MessageBox;