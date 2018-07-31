import React from "react";
import PropTypes from "prop-types";

export const InputGroup = (props) => {
    return (
        <div className="input-group">
            <input className="form-control" type="text" />
            <div className="input-group-append">
                <button className={props.btnClassNames}>
                    <span className={props.spanClassNames} />
                </button>
            </div>
        </div>
    );
};

InputGroup.propTypes = {
    btnClassNames: PropTypes.string,
    spanClassNames: PropTypes.string
};