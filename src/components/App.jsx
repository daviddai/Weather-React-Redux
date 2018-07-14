import React from "react";
import Search from "./Search";
import Carousel from "./Carousel";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends React.Component {

    render() {
        const containerStyle = {
            maxWidth: "600px",
            maxHeight: "700px"
        };

        return (
            <div className="container" style={containerStyle}>
                <Search/>
                <Carousel/>
            </div>
        );
    }

}

export default App;