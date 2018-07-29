import React from "react";
import PropTypes from "prop-types";

class Slide extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

Slide.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.any
};

export default Slide;