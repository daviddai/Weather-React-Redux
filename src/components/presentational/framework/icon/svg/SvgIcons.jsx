import React from "react";

import sun from "./sun.svg";
import cloudWithLightningRain from "./cloud-with-lightning-rain.svg";
import cloudWithLightning from "./cloud-with-lightning.svg";
import cloud from "./cloud.svg";
import unknown from "./question_mark.svg";

import {Icon} from "../Icon";

const weatherTypesMap = {
    0: sun,
    1: cloudWithLightningRain,
    2: cloudWithLightning,
    3: cloud,
    "unknown": unknown
};

export function getWeatherTypeSvgIcon(weatherType, className = "") {
    let weatherTypeSvgIcon = weatherTypesMap[weatherType];

    if (weatherTypeSvgIcon === undefined) {
        weatherTypeSvgIcon = unknown;
    }

    return <Icon IconType={buildSvgIcon} svgFile={weatherTypeSvgIcon} className={className} />
}

const buildSvgIcon = (props) => {
    return <props.svgFile className={props.className} />
};