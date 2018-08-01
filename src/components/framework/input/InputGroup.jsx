import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";
import {Input} from "./Input";
import {SearchIcon} from "../icon/Icon";

export const InputGroup = (props) => {
    return (
        <Container classNames="input-group">
            <Input id=""
                   classNames="form-control"
                   type="text" />
            <div className="input-group-append">
                <button className={props.btnClassNames}>
                    <SearchIcon/>
                </button>
            </div>
        </Container>
    );
};

InputGroup.propTypes = {
    btnClassNames: PropTypes.string,
    spanClassNames: PropTypes.string
};