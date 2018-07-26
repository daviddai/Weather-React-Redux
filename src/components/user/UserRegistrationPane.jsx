import React from "react";
import UserRegistrationForm from "./UserRegistrationForm";
import Card from "../framework/card/Card";
import CardHeader from "../framework/card/CardHeader";
import CardBody from "../framework/card/CardBody";

class UserRegistrationPane extends React.Component {

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
                                <Card cardStyle="rounded-0">
                                    <CardHeader cardHeaderStyle="text-center">
                                        <h3>Sign Up</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <UserRegistrationForm/>
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

export default UserRegistrationPane;