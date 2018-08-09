import React from "react";
import {Icon} from "../Icon";

export const SpinnerIcon = (props) => {
    return (
        <Icon className={"fa fa-spinner fa-spin fa-fw " + props.className} iconType={() => {return <i/>}} />
    );
};

export const TimesCircleIcon = (props) => {
    return (
        <Icon className={"fa fa-times-circle " + props.className} iconType={() => {return <i/>}} />
    );
};

export const SearchIcon = (props) => {
    return (
        <Icon className={"fa fa-search " + props.className} iconType={() => {return <i/>}} />
    );
};