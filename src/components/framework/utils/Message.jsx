import React from "react";

export const Message = (props) => {
    return (
        <span className={props.classNames}>{props.message}</span>
    );
};