import React from "react";

import "./flippale-div.css";

export const Front = (props) => {
    return (
        <div key={props.key} className={props.className}>
            {props.children}
        </div>
    );
};