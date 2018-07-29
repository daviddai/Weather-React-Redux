import React from "react";
import PropTypes from "prop-types";

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
            </div>
        );
    }

}

FormGroup.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
};

export default FormGroup;