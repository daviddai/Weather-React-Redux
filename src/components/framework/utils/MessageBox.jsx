import React from "react";
import PropTypes from "prop-types";

class MessageBox extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                <span className={this.props.iconClassNames} />
                {this.props.message}
            </div>
        );
    }

}

MessageBox.propTypes = {
    classNames: PropTypes.string,
    iconClassNames: PropTypes.string,
    message: PropTypes.string
};

export default MessageBox;