import React from "react";

import images from "../../constants/ImagesRepo";

class TodaySection extends React.Component {

    render() {
        const imageStyle = {
            width: "40%"
        };

        return (
            <div>
                <div className="text-center mt-4">
                    <h1 className="align-content-center font-weight-bold display-3 text-white">Sydney</h1>
                    <p className="pt-2 text-white font-weight-bold">Sunny</p>
                </div>
                <div className="mt-4">
                    <img src={images.SUN} style={imageStyle} className="mx-auto" />
                </div>
                <div className="text-center mt-4">
                    <h3 className="align-content-center font-weight-bold text-white">
                        Today 15 &deg;C
                    </h3>
                </div>
            </div>
        );
    }

}

export default TodaySection;