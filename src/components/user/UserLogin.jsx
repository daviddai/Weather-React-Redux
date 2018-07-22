import React from "react";

class UserLogin extends React.Component {

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
                                                <label>Username:</label>
                                                <input type="text" className="form-control rounded-0" />
                                            </div>
                                        </form>
                                        <form className="form" method="POST">
                                            <div className="form-group">
                                                <label>Password:</label>
                                                <input type="password" className="form-control rounded-0" />
                                            </div>
                                        </form>
                                        <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
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