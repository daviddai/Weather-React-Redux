import React from "react";
import {InputGroup} from "../input/InputGroup";
import {AppendingSection} from "../input/AppendingSection";
import {SearchIcon} from "../icon/Icon";

export const SearchGroup = () => {
    return (
        <InputGroup btnclassName="btn btn-outline-secondary">
            <input id="search"
                   className="form-control"
                   type="text"
            />
            <AppendingSection>
                <button className="btn btn-outline-secondary">
                    <SearchIcon/>
                </button>
            </AppendingSection>
        </InputGroup>
    );
};