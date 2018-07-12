import React from "react";
import Slider from "react-slick";

import Slide from "./Slide";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


class Carousel extends React.Component {

    constructor() {
        super();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        return (
            <div className="col-12">
                <Slider {...settings}>
                    <Slide/>
                    <Slide/>
                    <Slide/>
                </Slider>
            </div>
        );
    }

}

export default Carousel;