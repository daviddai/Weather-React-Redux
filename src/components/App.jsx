import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import UserLoginPage from "../pages/user/UserLoginPage";
import UserRegistrationPage from "../pages/user/UserRegistrationPage";
import WeatherPage from "../pages/weather/WeatherPage";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path ="/user/login" component={UserLoginPage} />
                    <Route exact path ="/user/register" component={UserRegistrationPage} />
                    <Route exact path="/weather" component={WeatherPage} />
                </Switch>
            </Router>
        );
    }

}

export default App;