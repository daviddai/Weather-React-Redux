import React from "react";

import PropTypes from "prop-types";

class ErrorField extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                <span className={this.props.iconClassNames}/>
                {this.props.errorMessage}
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