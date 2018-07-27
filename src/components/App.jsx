import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import UserLoginPane from "../containers/user/UserLoginPage";
import UserRegistrationPane from "../containers/user/UserRegistrationPage";
import WeatherPage from "../containers/weather/WeatherPage";

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