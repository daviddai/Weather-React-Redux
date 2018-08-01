import React from "react";
import {Container} from "../../layout/Container";
import {TimesCircleIcon} from "../../icon/Icon";
import {Message} from "../../utils/Message";
import PropTypes from "prop-types";

export const ValidationTip = (props) => {
    return (
        <Container classNames={props.classNames}>
            <TimesCircleIcon classNames="mr-1" />
            <Message message={props.message} />
        </Container>
    );
};

ValidationTip.propTypes = {
    classNames: PropTypes.string,
    message: PropTypes.string
};