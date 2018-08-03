import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


export const Carousel = (props) => {
    return (
        <Slider className={props.className} {...props.settings}>
            {props.children}
        </Slider>
    );
};

Carousel.propTypes = {
    className: PropTypes.string,
    settings: PropTypes.string,
    children: PropTypes.any
};