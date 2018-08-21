import React from "react";

import "./flippale-div.css";

export const Front = (props) => {
    return (
        <div className={props.className} onClick={props.triggerFlipping}>
            {props.children}
        </div>
    );
};