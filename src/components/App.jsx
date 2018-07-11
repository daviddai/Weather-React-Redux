import React from "react";
import Search from "./Search";
import Carousel from "./Carousel";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Search/>
                <Carousel/>
            </div>
        );
    }

}

export default App;