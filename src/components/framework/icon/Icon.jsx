import React from "react";

const Icon = (props) => {
    return (
        <i className={props.classNames} />
    );
};

export const Spinner = (props) => {
    return <Icon classNames={"fa fa-spinner fa-spin fa-fw " + props.classNames} />;
};

export const TimesCircle = (props) => {
    return <Icon classNames={"fa fa-times-circle " + props.classNames} />;
};