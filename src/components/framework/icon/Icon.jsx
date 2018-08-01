import React from "react";

const Icon = (props) => {
    return (
        <i className={props.classNames} />
    );
};

export const SpinnerIcon = (props) => {
    return (
        <Icon classNames={"fa fa-spinner fa-spin fa-fw " + props.classNames} />
    );
};

export const TimesCircleIcon = (props) => {
    return (
        <Icon classNames={"fa fa-times-circle " + props.classNames} />
    );
};

export const SearchIcon = (props) => {
    return (
        <Icon classNames={"fa fa-search " + props.classNames} />
    );
};