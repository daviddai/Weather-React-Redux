import React from "react";
import Form from "../framework/Form";
import FormRow from "../framework/FormRow";
import FormColumn from "../framework/FormColumn";
import InputGroup from "../framework/InputGroup";

class UserLoginForm extends React.Component {

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
                        <InputGroup id="password"
                                    title="Password"
                                    type="password"
                        />
                    </FormColumn>
                </FormRow>
            </Form>
        );
    }

}

export default UserLoginForm;