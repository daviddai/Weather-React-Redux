import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

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

Carousel.propTypes = {
    className: PropTypes.string,
    settings: PropTypes.string,
    children: PropTypes.any
};

export default Carousel;