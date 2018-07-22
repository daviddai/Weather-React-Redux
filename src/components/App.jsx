import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Weather from "./weather/Weather";
import UserLogin from "./user/UserLogin";
import UserForm from "./user/UserForm";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path ="/user/login" component={UserLogin} />
                    <Route exact path ="/user/register" component={UserForm} />
                    <Route exact path="/weather" component={Weather} />
                </Switch>
            </Router>
        );
    }

}

export default App;