import React from "react";
import PropTypes from "prop-types";
import {ValidationTip} from "./validator/ValidationTip";

export const FormGroup = (props) => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            <input id={props.id}
                   type={props.type}
                   className="form-control rounded-0"
                   onChange={props.onChange}
            />
            {
                props.hasError ?
                    <ValidationTip className="mt-1 text-muted " message={props.errorMessage} />
                    : null
            }
        </div>
    );
};

FormGroup.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
};