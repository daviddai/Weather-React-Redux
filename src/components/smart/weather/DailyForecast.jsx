import React from "react";
import PropTypes from "prop-types";

import Card from "../../presentational/framework/card/Card";
import CardBody from "../../presentational/framework/card/CardBody";

import "./weather.css";
import {getWeatherTypeSvgIcon} from "../../presentational/framework/icon/svg/SvgIcons";

export const DailyForecast = (props) => {

    return (
        <Card className="border-0 daily-forecast-background-color">
            <CardBody className="text-white text-center">
                <div>
                    <h6 className="daily-forecast-font-size daily-forecast-text-style">{props.day}</h6>
                </div>
                <div>
                    {
                        getWeatherTypeSvgIcon(props.type)
                    }
                </div>
                <div className="daily-forecast-font-size daily-forecast-text-style">
                    {props.temperature} &deg;C
                </div>
            </CardBody>
        </Card>
    );

};

DailyForecast.propTypes = {
    day: PropTypes.string,
    type: PropTypes.number,
    temperature: PropTypes.number
};