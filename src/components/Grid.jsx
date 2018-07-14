import React from "react";

import images from "../constants/ImagesRepo";

class Grid extends React.Component {

    render() {
        const gridStyle = {
            backgroundColor: "transparent"
        };

        const imageStyle = {
            width: "100%",
            height: "100%"
        };

        return (
            <div className="card border-0" style={gridStyle}>
                <div className="card-body text-white text-center">
                    <div>
                        <h5>Mon</h5>
                    </div>
                    <div>
                        <img src={images.STORM} style={imageStyle} />
                    </div>
                    <div>
                        18 &deg;C
                    </div>
                </div>
            </div>
        );
    }

}

export default Grid;