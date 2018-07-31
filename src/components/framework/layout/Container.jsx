import React from "react";

export const Container = (props) => {
    return (
        <div className={props.classNames}>
            {props.children}
        </div>
    );
};