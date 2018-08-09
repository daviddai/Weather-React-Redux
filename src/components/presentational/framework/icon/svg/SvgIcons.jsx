import React from "react";

import sun from "./sun.svg";
import cloudWithLightningRain from "./cloud-with-lightning-rain.svg";

import {Icon} from "../Icon";

export const SunIcon = (props) => {
    return (
        <Icon IconType={buildSvgIcon} svgFile={sun} className={props.className}/>
    );
};

export const CloudWithLightningRainIcon = (props) => {
    return (
        <Icon IconType={buildSvgIcon} svgFile={cloudWithLightningRain} />
    );
};

const buildSvgIcon = (props) => {
    return <props.svgFile className={props.className} />
};