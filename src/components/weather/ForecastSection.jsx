import React from "react";

import {Row, Col} from "react-grid-system";
import DailyForecast from "./DailyForecast";

class ForecastSection extends React.Component {

    render() {
        return (
            <Row className="text-center text-white">
                <Col>
                    <DailyForecast/>
                </Col>
                <Col>
                    <DailyForecast/>
                </Col>
                <Col>
                    <DailyForecast/>
                </Col>
                <Col>
                    <DailyForecast/>
                </Col>
            </Row>
        );
    }

}

export default ForecastSection;