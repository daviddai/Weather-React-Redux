import React from "react";

class ErrorField extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                <span className={this.props.iconClassNames}/>
                abc
            </div>
        );
    }

}

export default ErrorField;