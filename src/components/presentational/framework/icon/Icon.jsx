import React from "react";

export const Icon = (props) => {
    const IconType = props.iconType;

    return (
        <IconType className={props.className} />
    );
};