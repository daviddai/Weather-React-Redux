import React from "react";
import Form from "../framework/form/Form";
import FormRow from "../framework/form/FormRow";
import FormColumn from "../framework/form/FormColumn";
import InputGroup from "../framework/input/InputGroup";

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