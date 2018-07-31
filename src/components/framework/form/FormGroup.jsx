import React from "react";
import PropTypes from "prop-types";
import {ValidationTip} from "./validator/ValidationTip";

class FormGroup extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label>{this.props.title}</label>
                <input id={this.props.id}
                       type={this.props.type}
                       className="form-control rounded-0"
                       onChange={this.props.onChange}
                />
                {
                    this.props.hasError ?
                        <ValidationTip classNames="mt-1 text-muted " message={this.props.errorMessage} />
                        : null
                }
            </div>
        );
    }

}

FormGroup.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    hasError: PropTypes.bool
};

export default FormGroup;