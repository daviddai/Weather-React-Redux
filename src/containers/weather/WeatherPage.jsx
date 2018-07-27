import React from "react";
import Search from "../../components/weather/Search";
import Carousel from "../../components/framework/carousel/Carousel";
import Slide from "../../components/framework/carousel/Slide";
import WeatherSection from "../../components/weather/WeatherSection";

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
                <Search/>
                <Carousel setting={settings}>
                    <Slide classNames="col-12 pl-4 pr-4">
                        <WeatherSection/>
                    </Slide>
                    <Slide classNames="col-12 pl-4 pr-4">
                        <WeatherSection/>
                    </Slide>
                    <Slide classNames="col-12 pl-4 pr-4">
                        <WeatherSection/>
                    </Slide>
                </Carousel>
            </div>
        );
    }

}

export default WeatherPage;