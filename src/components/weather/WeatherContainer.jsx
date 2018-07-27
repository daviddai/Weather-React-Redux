import React from "react";
import images from "../../constants/ImagesRepo";
import Card from "../framework/card/Card";
import CardBody from "../framework/card/CardBody";
import TodaySection from "./TodaySection";
import CardFooter from "../framework/card/CardFooter";
import ForecastSection from "./ForecastSection";

class WeatherContainer extends React.Component {

    render() {
        const backgroundImage = {
            backgroundImage: `url(${images.SYDNEY})`
        };

        return (
            <Card classNames="rounded-0 border-0" styles={backgroundImage}>
                <CardBody>
                    <TodaySection/>
                </CardBody>
                <CardFooter classNames="h-25 pt-2 border-top">
                    <ForecastSection/>
                </CardFooter>
            </Card>
        );
    }

}

export default WeatherContainer;