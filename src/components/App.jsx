import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Weather from "./Weather";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/weather" component={Weather} />
            </Router>
        );
    }

}

export default App;