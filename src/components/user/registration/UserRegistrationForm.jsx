import React from "react";
import {Form} from "../../framework/form/layout/Form";
import {FormRow} from "../../framework/form/layout/FormRow";
import {FormColumn} from "../../framework/form/layout/FormColumn";
import {FormGroup} from "../../framework/form/input/form-group/FormGroup";
import {FormInput} from "../../framework/form/input/form-group/FormInput";

class UserRegistrationForm extends React.Component {

    render() {
        return (
            <Form>
                <FormRow>
                    <FormColumn>
                        <FormGroup>
                            <FormInput id="email"
                                       title="Email"
                                       type="text"
                            />
                        </FormGroup>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup>
                            <FormInput id="username"
                                       title="Username"
                                       type="text"
                            />
                        </FormGroup>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup>
                            <FormInput id="password"
                                       title="Password"
                                       type="password"
                            />
                        </FormGroup>
                    </FormColumn>
                </FormRow>
                <FormRow>
                    <FormColumn>
                        <FormGroup>
                            <FormInput id="confirmPassword"
                                       title="Confirm Password"
                                       type="password"
                            />
                        </FormGroup>
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