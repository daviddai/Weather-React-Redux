import React from "react";
import PropTypes from "prop-types";
import {Container} from "../layout/Container";
import {Input} from "./Input";
import {SearchIcon} from "../icon/Icon";

export const InputGroup = (props) => {
    return (
        <Container className="input-group">
            <Input id=""
                   className="form-control"
                   type="text" />
            <div className="input-group-append">
                <button className={props.btnclassName}>
                    <SearchIcon/>
                </button>
            </div>
        </Container>
    );
};

InputGroup.propTypes = {
    btnclassName: PropTypes.string,
    spanclassName: PropTypes.string
};