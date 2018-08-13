import React from "react";
import images from "../../../constants/ImagesRepo";
import Card from "../../presentational/framework/card/Card";
import CardBody from "../../presentational/framework/card/CardBody";
import CardFooter from "../../presentational/framework/card/CardFooter";
import {WeatherForecasts} from "./WeatherForecasts";
import {CurrentWeather} from "./CurrentWeather";
import {CardHeader} from "../../presentational/framework/card/CardHeader";
import {WeatherCity} from "./WeatherCity";
import PropTypes from "prop-types";
import {PlusCircleIcon} from "../../presentational/framework/icon/font-awesome/FontAwesomeIcons";

export const Weather = (props) => {
    const backgroundImage = {
        backgroundImage: `url(${images.SYDNEY})`
    };

    return (
        <Card className="rounded-0 border-0" style={backgroundImage}>
            <CardHeader className="border-0 text-center">
                <PlusCircleIcon className="fa-lg pull-right text-white"/>
                <WeatherCity city={props.city}/>
            </CardHeader>
            <CardBody>
                <CurrentWeather type={props.currentWeatherType}
                                temperature={props.currentWeatherTemperature}
                />
            </CardBody>
            <CardFooter className="border-top">
                <WeatherForecasts/>
            </CardFooter>
        </Card>
    );
};

Weather.propTypes = {
    city: PropTypes.string,
    currentWeatherType: PropTypes.string,
    currentWeatherTemperature: PropTypes.number
};