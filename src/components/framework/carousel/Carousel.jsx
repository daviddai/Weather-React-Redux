import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


class Carousel extends React.Component {

    render() {
        return (
            <Slider classNames={this.props.classNames} {...this.props.settings}>
                {this.props.children}
            </Slider>
        );
    }

}

export default Carousel;