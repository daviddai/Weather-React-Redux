import React from "react";
import UserLoginForm from "./UserLoginForm";

class UserLoginPane extends React.Component {

    render() {
        const paneStyle = {
            maxWidth: "1000px",
            maxHeight: "700px"
        };

        return (
            <div className="container py-2" style={paneStyle}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-header text-center">
                                        <h3>Sign In</h3>
                                    </div>
                                    <div className="card-body">
                                        <UserLoginForm/>
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

export default UserLoginPane;