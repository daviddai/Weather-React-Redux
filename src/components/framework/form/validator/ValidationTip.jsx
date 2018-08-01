import React from "react";
import {Container} from "../../layout/Container";
import {TimesCircleIcon} from "../../icon/Icon";
import {Message} from "../../utils/Message";
import PropTypes from "prop-types";

export const ValidationTip = (props) => {
    return (
        <Container className={props.className}>
            <TimesCircleIcon className="mr-1" />
            <Message message={props.message} />
        </Container>
    );
};

ValidationTip.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string
};