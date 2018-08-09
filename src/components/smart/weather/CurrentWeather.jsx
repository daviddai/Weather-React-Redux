import React from "react";
import PropTypes from "prop-types";

import {Heading} from "../../presentational/framework/heading/Heading";
import {SunIcon} from "../../presentational/framework/icon/svg/SvgIcons";

export const CurrentWeather = (props) => {
    return (
        <div>
            <div className="text-center">
                <Heading headingTag="h4"
                         className="text-white font-weight-bold">
                    {props.type}
                </Heading>
            </div>
            <div className="mt-5 mx-auto text-center text-white">
                <SunIcon className="current-weather-type-svg-size" />
            </div>
            <div className="text-center mt-4">
                <h3 className="align-content-center font-weight-bold text-white">
                    Today {props.temperature} &deg;C
                </h3>
            </div>
        </div>
    );
};

CurrentWeather.propTypes = {
    type: PropTypes.string,
    temperature: PropTypes.number
};