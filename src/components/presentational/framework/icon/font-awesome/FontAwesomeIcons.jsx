import React from "react";
import {Icon} from "../Icon";

export const SpinnerIcon = (props) => {
    return (
        <Icon classNam={"fa fa-spinner fa-spin fa-fw " + props.className} iconType={buildAwesomeFontIcon} />
    );
};

export const TimesCircleIcon = (props) => {
    return (
        <Icon className={"fa fa-times-circle " + props.className} iconType={buildAwesomeFontIcon} />
    );
};

export const SearchIcon = (props) => {
    return (
        <Icon className={"fa fa-search " + props.className} iconType={buildAwesomeFontIcon} />
    );
};

const buildAwesomeFontIcon = (props) => {
    return <i className={props.className} />
};