import React from "react";
import Slider from "react-slick";

import Sydney from "../images/Sydney.jpg";
import CloudyWhite from "../images/sun_white.png";

class Slide extends React.Component {

    render() {
        const imageStyle = {
            width: "40%"
        };

        const cardStyle = {
            backgroundImage: `url(${Sydney})`,
            height: "700px"
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <div className="col-12 pl-2 pr-2">
                <div className="card border-0" style={cardStyle}>
                    <div className="card-body">
                        <div className="text-center mt-4">
                            <h1 className="align-content-center font-weight-bold display-3 text-white">Sydney</h1>
                            <p className="pt-2 text-white font-weight-bold">Sunny</p>
                        </div>
                        <div className="mt-5">
                            <img src={CloudyWhite} style={imageStyle} className="mx-auto" />
                        </div>
                        <div className="text-center mt-5">
                            <h3 className="align-content-center font-weight-bold text-white">
                                Today 15 &deg;C
                            </h3>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row text-white text-center">
                            <div className="col-3">1</div>
                            <div className="col-3">2</div>
                            <div className="col-3">3</div>
                            <div className="col-3">4</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Slide;