import React from "react";

import sun from "./sun.svg";

import {Icon} from "../Icon";

export const SunIcon = (props) => {
    return (
        <Icon IconType={buildSvgIcon} svgFile={sun} className={props.className}/>
    );
};

const buildSvgIcon = (props) => {
    return <props.svgFile className={props.className} />
};