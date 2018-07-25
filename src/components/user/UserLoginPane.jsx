import React from "react";
import UserLoginForm from "./UserLoginForm";
import CardBody from "../framework/card/CardBody";
import Card from "../framework/card/Card";
import CardHeader from "../framework/card/CardHeader";

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
                                <Card styleClasses="rounded-0">
                                    <CardHeader styleClasses="text-center">
                                        <h3>Sign In</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <UserLoginForm/>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserLoginPane;