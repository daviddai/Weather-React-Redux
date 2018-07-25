import React from "react";

import InputGroup from "../framework/input/InputGroup";

class UserLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleFieldChanged = (event) => {
        this.setState({
           [event.target.id]: event.target.value
        });
    };

    login = (event) => {
        event.preventDefault();

        fetch('http://localhost:8082/user/login', {
                  method: 'POST',
                  body: this.state
              })
              .then(response => response.json())
              .then(data => {
                  console.log(data['succeed'])})
              .catch(error => {
                  console.log(error)
              });
    };

    render() {
        const containerStyle = {
            maxWidth: "1000px",
            maxHeight: "700px"
        };

        return (
            <div className="container py-2" style={containerStyle}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-header text-center">
                                        <h3>Sign In</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form" method="POST" onSubmit={this.login}>
                                            <InputGroup id="email"
                                                        title="Email"
                                                        type="text"
                                                        onChange={this.handleFieldChanged}/>
                                            <InputGroup id="password"
                                                        title="Password"
                                                        type="password"
                                                        onChange={this.handleFieldChanged}/>
                                            <button type="submit"
                                                    className="btn btn-success btn-lg float-right"
                                            >
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserLogin;