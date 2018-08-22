import React from "react";

export const Front = (props) => {
    return (
        <div className={props.className} onClick={props.triggerFlipping}>
            {props.children}
        </div>
    );
};