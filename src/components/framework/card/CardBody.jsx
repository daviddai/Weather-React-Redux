import React from "react";

class CardBody extends React.Component {

    render() {
        return (
            <div className={"card-body " + this.props.cardBodyStyle}>
                {this.props.children}
            </div>
        );
    }

}

export default CardBody;