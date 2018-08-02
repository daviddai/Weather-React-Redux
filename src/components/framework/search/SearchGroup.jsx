import React from "react";
import {InputGroup} from "../input/InputGroup";
import {AppendingSection} from "../input/AppendingSection";
import {SearchIcon} from "../icon/Icon";
import PropTypes from "prop-types";

export const SearchGroup = (props) => {
    return (
        <InputGroup>
            <input className="form-control"
                   type="text"
                   onChange={props.updateSearchTerm}
            />
            <AppendingSection>
                <button type="submit"
                        className="btn btn-outline-secondary"
                >
                    <SearchIcon/>
                </button>
            </AppendingSection>
        </InputGroup>
    );
};

SearchGroup.propTypes = {
    updateSearchTerm: PropTypes.func
};