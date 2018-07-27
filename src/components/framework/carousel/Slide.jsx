import React from "react";

class Slide extends React.Component {

    render() {
        return (
            <div className={this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

export default Slide;