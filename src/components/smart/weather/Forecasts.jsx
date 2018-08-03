import React from "react";

import {Row, Col} from "react-grid-system";
import {DailyForecast} from "./DailyForecast";

export const Forecasts = (props) => {

    return (
        <Row className="text-center text-white">
            <Col>
                <DailyForecast day="Mon"
                               temperature="18"
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature="18"
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature="18"
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature="18"
                />
            </Col>
        </Row>
    );

};