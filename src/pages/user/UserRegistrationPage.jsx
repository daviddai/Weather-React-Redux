import React from "react";
import UserRegistrationForm from "../../components/smart/user/registration/UserRegistrationForm";
import Card from "../../components/presentational/framework/card/Card";
import CardHeader from "../../components/presentational/framework/card/CardHeader";
import CardBody from "../../components/presentational/framework/card/CardBody";

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
                                <Card className="rounded-0">
                                    <CardHeader className="text-center">
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