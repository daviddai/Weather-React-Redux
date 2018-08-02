import React from "react";
import PropTypes from "prop-types";
import {ValidationTip} from "../../../info/ValidationTip";

export const FormInput = (props) => {
    return (
        <div>
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

FormInput.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
};