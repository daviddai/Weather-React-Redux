import React from "react";
import UserLoginForm from "../../components/user/login/UserLoginForm";
import CardBody from "../../components/framework/card/CardBody";
import Card from "../../components/framework/card/Card";
import CardHeader from "../../components/framework/card/CardHeader";

class UserLoginPage extends React.Component {

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

export default UserLoginPage;