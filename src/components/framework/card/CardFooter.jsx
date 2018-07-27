import React from "react";

class CardFooter extends React.Component {

    render() {
        return (
            <div className={"card-footer " + this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

export default CardFooter;