import React from "react";

import PropTypes from "prop-types";
import {Message} from "../utils/Message";

class ErrorField extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                <span className={this.props.iconClassNames}/>
                <Message message={this.props.errorMessage}/>
            </div>
        );
    }

}

ErrorField.propTypes = {
    classNames: PropTypes.string,
    iconClassNames: PropTypes.string,
    errorMessage: PropTypes.string
};

export default ErrorField;