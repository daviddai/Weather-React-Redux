import React from "react";
import PropTypes from "prop-types";

import CloudLightningRain from "../../../resources/svg/cloud-with-lightning-rain.svg";
import Card from "../../presentational/framework/card/Card";
import CardBody from "../../presentational/framework/card/CardBody";

import "./weather.css";

export const DailyForecast = (props) => {

    return (
        <Card className="border-0 daily-forecast-background-color">
            <CardBody className="text-white text-center">
                <div>
                    <h6>{props.day}</h6>
                </div>
                <div>
                    <CloudLightningRain />
                </div>
                <div>
                    {props.temperature} &deg;C
                </div>
            </CardBody>
        </Card>
    );

};

DailyForecast.propTypes = {
    day: PropTypes.string,
    temperature: PropTypes.number
};