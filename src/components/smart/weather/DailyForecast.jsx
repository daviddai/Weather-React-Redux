import React from "react";

import images from "../../../constants/ImagesRepo";
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
                    <img src={images.STORM}
                         className="daily-forecast-weather-icon-size" />
                </div>
                <div>
                    {props.temperature} &deg;C
                </div>
            </CardBody>
        </Card>
    );

};