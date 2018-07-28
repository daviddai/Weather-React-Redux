import React from "react";
import Form from "../framework/form/Form";
import FormRow from "../framework/form/FormRow";
import FormColumn from "../framework/form/FormColumn";
import FormGroup from "../framework/form/FormGroup";
import axios from "axios";

class UserLoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    updateLoginData = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8082/user/login', this.state)
             .then(response => {
                 console.log(response.data)
             })
             .catch(error => {
                 const errorStatus = error.response.status;

                 if (errorStatus === 401) {
                     console.log("Failed to authenticate");
                 }
             });
    };

    render() {
        return (
            <Form submitForm={this.loginUser}>
                <FormRow>
                    <FormColumn>
                        <div className="pb-3">
                            <ul className="pl-3 text-danger">
                                <li>Incorrect username or password</li>
                            </ul>
                        </div>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup id="email"
                                   title="Email"
                                   type="text"
                                   onChange={this.updateLoginData}
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup id="password"
                                   title="Password"
                                   type="password"
                                   onChange={this.updateLoginData}
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <button type="submit"
                                className="btn btn-success btn-lg float-right"
                        >
                            Login
                        </button>
                    </FormColumn>
                </FormRow>
            </Form>
        );
    }

}

export default UserLoginForm;