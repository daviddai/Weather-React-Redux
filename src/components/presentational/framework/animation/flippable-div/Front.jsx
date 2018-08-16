import React from "react";

import "./flippale-div.css";

export const Front = (props) => {
    return (
        <div className={"front " + props.className }>
            {props.children}
        </div>
    );
};