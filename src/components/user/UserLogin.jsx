import React from "react";

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
              .then(response => response.body)
              .then(data => {
                  console.log(data)})
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
                                        <form className="form" method="POST">
                                            <div className="form-group">
                                                <label>User Email:</label>
                                                <input id="email"
                                                       type="text"
                                                       className="form-control rounded-0"
                                                       onChange={this.handleFieldChanged}
                                                />
                                            </div>
                                        </form>
                                        <form className="form" method="POST" onSubmit={this.login}>
                                            <div className="form-group">
                                                <label>Password:</label>
                                                <input id="password"
                                                       type="password"
                                                       className="form-control rounded-0"
                                                       onChange={this.handleFieldChanged}
                                                />
                                            </div>
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