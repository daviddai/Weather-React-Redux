import React from "react";

export const Back = (props) => {
    return (
        <div className={props.className} onClick={props.triggerFlipping}>
            {props.children}
        </div>
    );
};