import React from "react";
import Form from "../../framework/form/Form";
import FormRow from "../../framework/form/FormRow";
import FormColumn from "../../framework/form/FormColumn";
import FormGroup from "../../framework/form/FormGroup";
import axios from "axios";
import ErrorBox from "../../framework/utils/MessageBox";
import * as validators from "../../framework/form/validator/InputValidator";

import "./user-login.css";

class UserLoginForm extends React.Component {

    constructor() {
        super();

        this.userLoginFormValidator = {
            "email": validators.validateEmail,
            "password": validators.validateMandatory
        };

        this.state = {
            user: {
                email: '',
                password: ''
            },
            statuses: {
                email: {
                    touched: false,
                    valid: false,
                    errorMessage: 'Incorrect email format'
                },
                password: {
                    touched: false,
                    valid: false,
                    errorMessage: 'Password cannot be empty'
                }
            },
            apiResponses: [],
            canSubmit: false
        };
    }

    updateAndValidateLoginData = (event) => {
        let state = this.state;
        state.user[event.target.id] = event.target.value;
        state.statuses[event.target.id].touched = true;
        state.statuses[event.target.id].valid = this.userLoginFormValidator[event.target.id](event.target.value);
        state.canSubmit = Object.keys(state.statuses).every(key => state.statuses[key].valid);
        this.setState(state);
    };

    loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8082/user/login', this.state.user)
             .then(response => {
                 console.log(response.data);

                 this.setState({
                     apiResponses: []
                 })
             })
             .catch(error => {
                 const errorStatus = error.response.status;

                 if (errorStatus === 401) {
                     this.setState({
                         apiResponses: [error.response.data]
                     })
                 }
             });
    };

    render() {
        return (
            <Form submitForm={this.loginUser}>
                { this.state.apiResponses.length > 0 ?
                    <FormRow classNames="mb-4">
                        <FormColumn>
                            <ErrorBox message="Sorry, email or password is incorrect"
                                      classNames="rounded py-3 text-white message-box"
                                      iconClassNames="fa fa-times-circle mx-2"
                            />
                        </FormColumn>
                    </FormRow> : null
                }

                <FormRow>
                    <FormColumn>
                        <FormGroup id="email"
                                   title="Email"
                                   type="text"
                                   hasError={this.state.statuses.email.touched && !this.state.statuses.email.valid}
                                   errorMessage={this.state.statuses.email.errorMessage}
                                   onChange={this.updateAndValidateLoginData}
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup id="password"
                                   title="Password"
                                   type="password"
                                   hasError={this.state.statuses.password.touched && !this.state.statuses.password.valid}
                                   errorMessage={this.state.statuses.password.errorMessage}
                                   onChange={this.updateAndValidateLoginData}
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <button type="submit"
                                className="btn btn-success btn-lg float-right"
                                disabled={!this.state.canSubmit}
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