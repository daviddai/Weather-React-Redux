import React from "react";

export const Message = (props) => {
    return (
        <span className={props.className}>{props.message}</span>
    );
};