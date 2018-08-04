import React from "react";
import {Carousel} from "../../components/presentational/framework/carousel/Carousel";
import Slide from "../../components/presentational/framework/carousel/Slide";
import Weather from "../../components/smart/weather/Weather";
import AreaSearch from "../../components/smart/weather/AreaSearchForm";

class WeatherPage extends React.Component {

    render() {
        const containerStyle = {
            maxWidth: "600px",
            maxHeight: "700px"
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
            <div className="container" style={containerStyle}>
                <div className="col-12 mt-3 mb-1 pl-2 pr-2">
                    <AreaSearch/>
                </div>
                <div>
                    <Carousel setting={settings}>
                        <Slide className="col-12 pl-4 pr-4">
                            <Weather/>
                        </Slide>
                        <Slide className="col-12 pl-4 pr-4">
                            <Weather/>
                        </Slide>
                        <Slide className="col-12 pl-4 pr-4">
                            <Weather/>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        );
    }

}

export default WeatherPage;