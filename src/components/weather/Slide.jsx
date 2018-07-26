import React from "react";

import Grid from "./Grid";

import images from "../../constants/ImagesRepo";
import Card from "../framework/card/Card";
import CardFooter from "../framework/card/CardFooter";
import CardBody from "../framework/card/CardBody";

class Slide extends React.Component {

    render() {
        const imageStyle = {
            width: "40%"
        };

        const cardStyle = {
            backgroundImage: `url(${images.SYDNEY})`
        };

        return (
            <div className="col-12 pl-2 pr-2">
                <Card cardStyle="rounded-0">
                    <CardBody>
                        <div className="text-center mt-4">
                            <h1 className="align-content-center font-weight-bold display-3 text-white">Sydney</h1>
                            <p className="pt-2 text-white font-weight-bold">Sunny</p>
                        </div>
                        <div className="mt-4">
                            <img src={images.SUN} style={imageStyle} className="mx-auto" />
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="align-content-center font-weight-bold text-white">
                                Today 15 &deg;C
                            </h3>
                        </div>
                    </CardBo>
                    <CardFooter cardFooterStyle="h-25 pt-2 border-top">
                        <div className="row text-white text-center">
                            <div className="col-3">
                                <Grid/>
                            </div>
                            <div className="col-3">
                                <Grid/>
                            </div>
                            <div className="col-3">
                                <Grid/>
                            </div>
                            <div className="col-3">
                                <Grid/>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        );
    }

}

export default Slide;