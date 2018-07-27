import React from "react";
import UserRegistrationForm from "../../components/user/UserRegistrationForm";
import Card from "../../components/framework/card/Card";
import CardHeader from "../../components/framework/card/CardHeader";
import CardBody from "../../components/framework/card/CardBody";

class UserRegistrationPage extends React.Component {

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
                                <Card classNames="rounded-0">
                                    <CardHeader classNames="text-center">
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

export default UserRegistrationPage;