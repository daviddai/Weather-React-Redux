import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Weather from "./weather/Weather";
import UserForm from "./user/UserRegistrationForm";
import UserLoginPane from "./user/UserLoginPane";
import UserRegistrationPane from "./user/UserRegistrationPane";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path ="/user/login" component={UserLoginPane} />
                    <Route exact path ="/user/register" component={UserRegistrationPane} />
                    <Route exact path="/weather" component={Weather} />
                </Switch>
            </Router>
        );
    }

}

export default App;