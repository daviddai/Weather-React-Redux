import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import UserLoginPane from "../pages/user/UserLoginPage";
import UserRegistrationPane from "../pages/user/UserRegistrationPage";
import WeatherPage from "../pages/weather/WeatherPage";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path ="/user/login" component={UserLoginPane} />
                    <Route exact path ="/user/register" component={UserRegistrationPane} />
                    <Route exact path="/weather" component={WeatherPage} />
                </Switch>
            </Router>
        );
    }

}

export default App;