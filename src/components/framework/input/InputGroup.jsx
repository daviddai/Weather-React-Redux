import React from "react";
import PropTypes from "prop-types";

class InputGroup extends React.Component {

    render() {
        return (
            <div className="input-group">
                <input className="form-control" type="text" />
                <div className="input-group-append">
                    <button className={this.props.btnClassNames}>
                        <span className={this.props.spanClassNames} />
                    </button>
                </div>
            </div>
        );
    }

}

InputGroup.propTypes = {
    btnClassNames: PropTypes.string,
    spanClassNames: PropTypes.string
};

export default InputGroup;