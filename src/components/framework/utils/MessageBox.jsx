import React from "react";

class MessageBox extends React.Component {

    render() {
        return (
            <div className={this.props.classNames} style={this.props.backgroundColor}>
                <span className={this.props.iconClassNames} />
                {this.props.message}
            </div>
        );
    }

}

export default MessageBox;