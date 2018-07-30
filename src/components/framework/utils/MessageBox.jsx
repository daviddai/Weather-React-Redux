import React from "react";
import PropTypes from "prop-types";

class MessageBox extends React.Component {

    render() {
        console.log(this.props.children);
        return (
            <div className={this.props.classNames}>
                {
                    React.Children.forEach(this.props.children, child => {
                        return child;
                    })
                }
            </div>
        );
    }

}

MessageBox.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.array
};

export default MessageBox;