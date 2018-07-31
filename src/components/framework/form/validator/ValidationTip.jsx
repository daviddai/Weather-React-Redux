import React from "react";
import {Container} from "../../layout/Container";
import {TimesCircle} from "../../icon/Icon";
import {Message} from "../../utils/Message";

export const ValidationTip = (props) => {
    return (
        <Container classNames={props.classNames}>
            <TimesCircle classNames="mr-1" />
            <Message message={props.message} />
        </Container>
    );
};