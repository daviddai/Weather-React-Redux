import React from "react";
import FlippableDiv from "../../components/presentational/framework/animation/flippable-div/FlippableDiv";

import "./playgroud.css";
import {Front} from "../../components/presentational/framework/animation/flippable-div/Front";
import {Back} from "../../components/presentational/framework/animation/flippable-div/Back";

class PlayGround extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlippableDiv>
                <Front>
                    <div className="front-page">Front</div>
                </Front>
                <Back>
                    <div className="back-page">Back</div>
                </Back>
            </FlippableDiv>
        );
    }

}

export default PlayGround;