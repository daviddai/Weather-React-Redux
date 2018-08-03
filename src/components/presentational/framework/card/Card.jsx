import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const Card = (props) => {
    return (
        <Container className={"card " + props.className} style={props.style}>
            {props.children}
        </Container>
    );
};

Card.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
};

export default Card;