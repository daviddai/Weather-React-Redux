import React from "react";

import PropTypes from "prop-types";

export const Icon = (props) => {
    const {
        IconType,
        ...otherProps
    } = props;

    return (
        <IconType className={props.className}
                  {...otherProps}
        />
    );
};

Icon.propTyps = {
    IconType: PropTypes.func.isRequired
};