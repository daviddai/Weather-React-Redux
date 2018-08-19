import React from "react";

import "./flippale-div.css";

export const Back = (props) => {
    return (
        <div key={props.key} className={props.className}>
            {props.children}
        </div>
    );
};