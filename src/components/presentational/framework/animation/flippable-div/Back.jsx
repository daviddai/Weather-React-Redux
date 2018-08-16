import React from "react";

import "./flippale-div.css";

export const Back = (props) => {
    return (
        <div className={"back " + props.className}>
            {props.children}
        </div>
    );
};