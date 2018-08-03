import React from "react";

import images from "../../../constants/ImagesRepo";

export const Today = (props) => {
    return (
        <div>
            <div className="text-center mt-4">
                <h1 className="align-content-center font-weight-bold display-3 text-white">Sydney</h1>
                <p className="pt-2 text-white font-weight-bold">
                    {props.type}
                </p>
            </div>
            <div className="mt-4">
                <img src={images.SUN} className="mx-auto today-weather-icon-size" />
            </div>
            <div className="text-center mt-4">
                <h3 className="align-content-center font-weight-bold text-white">
                    Today {props.temperture} &deg;C
                </h3>
            </div>
        </div>
    );
};