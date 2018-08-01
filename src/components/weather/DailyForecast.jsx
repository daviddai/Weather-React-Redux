import React from "react";

import images from "../../constants/ImagesRepo";
import Card from "../framework/card/Card";
import CardBody from "../framework/card/CardBody";

class DailyForecast extends React.Component {

    render() {
        const backgroundColor = {
            backgroundColor: "transparent"
        };

        const imageSize = {
            width: "100%",
            height: "100%"
        };

        return (
            <Card className="border-0" style={backgroundColor}>
                <CardBody className="text-white text-center">
                    <div>
                        <h6>Mon</h6>
                    </div>
                    <div>
                        <img src={images.STORM} style={imageSize} />
                    </div>
                    <div>
                        18 &deg;C
                    </div>
                </CardBody>
            </Card>
        );
    }

}

export default DailyForecast;