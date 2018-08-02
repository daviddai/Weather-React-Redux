import React from "react";
import {Form} from "../framework/form/Form";
import {FormRow} from "../framework/form/FormRow";
import {FormColumn} from "../framework/form/FormColumn";
import {SearchGroup} from "../framework/search/SearchGroup";

class AreaSearchForm extends React.Component {

    constructor() {
        super();

        this.state = {
            searchTerm: ''
        };
    }

    search = (event) => {
        event.preventDefault();
        console.log("try to search");
    };

    updateSearchTerm = (event) => {
        this.setState({
           searchTerm: event.target.value
        });
    };

    render() {
        return (
            <Form submitForm={this.search}>
                <FormRow>
                    <FormColumn>
                        <SearchGroup search={this.search} updateSearchTerm={this.updateSearchTerm} />
                    </FormColumn>
                </FormRow>
            </Form>
        );
    }

}

export default AreaSearchForm;