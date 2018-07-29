import React from "react";
import Form from "../../framework/form/Form";
import FormRow from "../../framework/form/FormRow";
import FormColumn from "../../framework/form/FormColumn";
import FormGroup from "../../framework/form/FormGroup";

class UserRegistrationForm extends React.Component {

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
                        <FormGroup id="username"
                                   title="Username"
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
                        <FormGroup id="confirmPassword"
                                   title="Confirm Password"
                                   type="password"
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <button type="submit"
                                className="btn btn-success btn-lg float-right"
                        >
                            Register
                        </button>
                    </FormColumn>
                </FormRow>
            </Form>
        );
    }

}

export default UserRegistrationForm;