import React from "react";
import {Carousel} from "../../components/presentational/framework/carousel/Carousel";
import Slide from "../../components/presentational/framework/carousel/Slide";
import {Weather} from "../../components/smart/weather/Weather";

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weathers: [
                {
                    cityId: 0,
                    city: "Sydney",
                    today: {
                        currentWeatherType: "Sunny",
                        currentWeatherTemperature: 18
                    }
                },
                {
                    cityId: 1,
                    city: "Melbourne",
                    today: {
                        currentWeatherType: "Cool",
                        currentWeatherTemperature: 15
                    }
                },
                {
                    cityId: 2,
                    city: "Brisbane",
                    today: {
                        currentWeatherType: "Hot",
                        currentWeatherTemperature: 28
                    }
                }
            ]
        };
    }

    render() {
        const containerStyle = {
            maxWidth: "85%",
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
                <div className="mt-2">
                    <Carousel setting={settings}>
                        {
                            this.state.weathers.map(weather => {
                                return (
                                    <Slide className="col-12 pl-1 pr-1" key={weather.cityId}>
                                        <Weather city={weather.city}
                                                 currentWeatherType={weather.today.currentWeatherType}
                                                 currentWeatherTemperature={weather.today.currentWeatherTemperature}
                                        />
                                    </Slide>
                                );
                            })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }

}

export default WeatherPage;