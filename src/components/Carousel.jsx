import React from "react";
import Slider from "react-slick";

import Slide from "./Slide";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


class Carousel extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
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

        setTimeout(function () {
            this.setState({isLoading: false});
        }.bind(this), 2000);

        if (this.state.isLoading) {
            return (
                <div className="col-12 mt-5">
                    <div className="text-center text-muted">
                        <i className="fa fa-spinner fa-spin" />
                    </div>
                </div>
            );
        } else {
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

}

export default Carousel;