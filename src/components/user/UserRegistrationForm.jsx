import React from "react";
import Form from "../framework/form/Form";
import FormRow from "../framework/form/FormRow";
import FormColumn from "../framework/form/FormColumn";
import InputGroup from "../framework/input/InputGroup";

class UserRegistrationForm extends React.Component {

    render() {
        return (
            <Form>
                <FormRow>
                    <FormColumn>
                        <InputGroup id="email"
                                    title="Email"
                                    type="text"
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <InputGroup id="username"
                                    title="Username"
                                    type="text"
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <InputGroup id="password"
                                    title="Password"
                                    type="password"
                        />
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <InputGroup id="confirmPassword"
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