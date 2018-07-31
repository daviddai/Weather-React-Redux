import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";

export const Card = (props) => {
    return (
        <Container classNames={"card " + props.classNames} styles={props.styles}>
            {props.children}
        </Container>
    );
};

Card.propTypes = {
    classNames: PropTypes.string,
    styles: PropTypes.object,
    children: PropTypes.any
};

export default Card;