import React from "react";

export const Container = (props) => {
    return (
        <div className={props.classNames} style={props.styles}>
            {props.children}
        </div>
    );
};