import React from "react";
import InputGroup from "../input/InputGroup";

class SearchGroup extends React.Component {

    render() {
        return (
            <InputGroup btnClassNames="btn btn-outline-secondary"
                        spanClassNames="fa fa-search"
            />
        );
    }

}

export default SearchGroup;