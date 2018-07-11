import React from "react";
import Slider from "react-slick";


class Carousel extends React.Component {

    constructor() {
        super();
    }

    render() {
        const settings = {
            arrows: false
        };

        return (
            <div className="col-12">
                <Slider {...settings}>
                    <div>
                        <h1>1</h1>
                    </div>
                </Slider>
            </div>
        );
    }

}

export default Carousel;