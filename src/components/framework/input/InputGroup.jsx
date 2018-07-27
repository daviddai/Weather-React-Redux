import React from "react";

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

export default InputGroup;