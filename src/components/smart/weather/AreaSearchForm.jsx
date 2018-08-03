import React from "react";
import {Form} from "../../presentational/framework/form/layout/Form";
import {FormRow} from "../../presentational/framework/form/layout/FormRow";
import {FormColumn} from "../../presentational/framework/form/layout/FormColumn";
import {SearchGroup} from "../../presentational/framework/search/SearchGroup";

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