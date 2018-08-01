import React from "react";
import {Carousel} from "../../components/framework/carousel/Carousel";
import Slide from "../../components/framework/carousel/Slide";
import WeatherContainer from "../../components/weather/WeatherContainer";
import AreaSearch from "../../components/weather/AreaSearchForm";

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
                            <WeatherContainer/>
                        </Slide>
                        <Slide className="col-12 pl-4 pr-4">
                            <WeatherContainer/>
                        </Slide>
                        <Slide className="col-12 pl-4 pr-4">
                            <WeatherContainer/>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        );
    }

}

export default WeatherPage;