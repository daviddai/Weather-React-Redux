import React from "react";
import Form from "../framework/form/Form";
import FormRow from "../framework/form/FormRow";
import FormColumn from "../framework/form/FormColumn";
import FormGroup from "../framework/form/FormGroup";

class UserLoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleFieldChanged = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    login = (event) => {
        event.preventDefault();

        fetch('http://localhost:8082/user/login', {
            method: 'POST',
            body: this.state
        })
            .then(response => response.json())
            .then(data => {
                console.log(data['succeed'])})
            .catch(error => {
                console.log(error)
            });
    };

    render() {
        return (
            <Form>
                <FormRow>
                    <FormColumn>
                        <FormGroup id="email"
                                   title="Email"
                                   type="text"
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup id="password"
                                   title="Password"
                                   type="password"
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