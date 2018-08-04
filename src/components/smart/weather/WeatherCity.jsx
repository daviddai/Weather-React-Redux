import React from "react";
import PropTypes from "prop-types";
import {Heading} from "../../presentational/framework/heading/Heading";

export const WeatherCity = (props) => {

    return (
        <Heading headingTag="h1"
                 className="align-content-center font-weight-bold display-3 text-white">
            {props.city}
        </Heading>
    );

};

WeatherCity.propTypes = {
    city: PropTypes.string
};