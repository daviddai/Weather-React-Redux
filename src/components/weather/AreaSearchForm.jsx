import React from "react";
import {Form} from "../framework/form/Form";
import {FormRow} from "../framework/form/FormRow";
import {FormColumn} from "../framework/form/FormColumn";
import {SearchGroup} from "../framework/search/SearchGroup";

class AreaSearchForm extends React.Component {

    render() {
        return (
            <Form>
                <FormRow>
                    <FormColumn>
                        <SearchGroup/>
                    </FormColumn>
                </FormRow>
            </Form>
        );
    }

}

export default AreaSearchForm;