import React from "react";

class CardBody extends React.Component {

    render() {
        return (
            <div className={"card-body " + this.props.classNames}>
                {this.props.children}
            </div>
        );
    }

}

export default CardBody;