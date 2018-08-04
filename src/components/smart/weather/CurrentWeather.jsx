import React from "react";

import images from "../../../constants/ImagesRepo";
import {Heading} from "../../presentational/framework/heading/Heading";

export const CurrentWeather = (props) => {
    return (
        <div>
            <div className="text-center">
                <Heading headingTag="h4"
                         className="text-white font-weight-bold">
                    {props.type}
                </Heading>
            </div>
            <div className="mt-5">
                <img src={images.SUN} className="mx-auto today-weather-icon-size" />
            </div>
            <div className="text-center mt-4">
                <h3 className="align-content-center font-weight-bold text-white">
                    Today {props.temperture} &deg;C
                </h3>
            </div>
        </div>
    );
};