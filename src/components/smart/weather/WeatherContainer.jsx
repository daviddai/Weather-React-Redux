import React from "react";
import images from "../../../constants/ImagesRepo";
import Card from "../../presentational/framework/card/Card";
import CardBody from "../../presentational/framework/card/CardBody";
import CardFooter from "../../presentational/framework/card/CardFooter";
import {Forecasts} from "./Forecasts";
import {Today} from "./Today";

class WeatherContainer extends React.Component {

    render() {
        const backgroundImage = {
            backgroundImage: `url(${images.SYDNEY})`
        };

        return (
            <Card className="rounded-0 border-0" style={backgroundImage}>
                <CardBody>
                    <Today type="Sunny"
                           temperture="18"
                    />
                </CardBody>
                <CardFooter className="h-25 pt-2 border-top">
                    <Forecasts/>
                </CardFooter>
            </Card>
        );
    }

}

export default WeatherContainer;