import React from "react";
import SunRain from "../images/sun_cloud_rain.png";

class Slide extends React.Component {

    render() {
        const imageStyle = {
            width: "100%"
        };

        return (
            <div className="card border-0">
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="align-content-center font-weight-bold display-3">Sydney</h1>
                        <p className="pt-2">Partly cloudy with possible rain</p>
                    </div>
                    <div>
                        <img src={SunRain} style={imageStyle} />
                    </div>
                    <div className="text-center">
                        <h3 className="align-content-center font-weight-bold">15</h3>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-center">
                        Weather
                    </div>
                </div>
            </div>
        );
    }

}

export default Slide;