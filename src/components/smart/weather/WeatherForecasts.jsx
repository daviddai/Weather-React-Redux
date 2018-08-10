import React from "react";

import {Row, Col} from "react-grid-system";
import {DailyForecast} from "./DailyForecast";

export const WeatherForecasts = (props) => {

    return (
        <Row className="text-center text-white">
            <Col>
                <DailyForecast day="Mon"
                               temperature={18}
                               type={1}
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature={18}
                               type={1}
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature={18}
                               type={2}
                />
            </Col>
            <Col>
                <DailyForecast day="Mon"
                               temperature={18}
                               type={2}
                />
            </Col>
        </Row>
    );

};