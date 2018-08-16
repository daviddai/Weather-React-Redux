import React from "react";
import {Container} from "../../components/presentational/framework/layout/Container";

import "./playgroud.css";

class PlayGround extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flipped: true
        };
    }

    flip = () => {
        const flipped = this.state.flipped;
        this.setState({
            flipped: !flipped
        });
    };

    render() {
        const flipped = this.state.flipped ? "" : "flipped";
        return (
            <Container>
                <div className={"flippable-card text-center " + flipped} onClick={this.flip}>
                    <div className="front">
                        abc
                    </div>
                    <div className="back">
                        123
                    </div>
                </div>
            </Container>
        );
    }


}

export default PlayGround;