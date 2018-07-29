import React from "react";
import Form from "../../framework/form/Form";
import FormRow from "../../framework/form/FormRow";
import FormColumn from "../../framework/form/FormColumn";
import FormGroup from "../../framework/form/FormGroup";
import axios from "axios";
import ErrorBox from "../../framework/utils/MessageBox";
import "./user-login.css";

class UserLoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            user: {
                email: '',
                password: ''
            },
            messages: []
        };
    }

    updateLoginData = (event) => {
        let user = this.state.user;
        user[event.target.id] = event.target.value;
        this.setState({
            'user': user
        });
    };

    loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8082/user/login', this.state.user)
             .then(response => {
                 console.log(response.data)

                 this.setState({
                     messages: []
                 })
             })
             .catch(error => {
                 const errorStatus = error.response.status;

                 if (errorStatus === 401) {
                     console.log("Failed to authenticate");

                     console.log(error.response.data['message']);

                     this.setState({
                         messages: [error.response.data]
                     })
                 }
             });
    };

    render() {
        return (
            <Form submitForm={this.loginUser}>
                { this.state.messages.length > 0 ?
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