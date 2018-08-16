import React from "react";
import {Container} from "../../components/presentational/framework/layout/Container";
import FlippableDiv from "../../components/presentational/framework/animation/flippable-div/FlippableDiv";
import {Front} from "../../components/presentational/framework/animation/flippable-div/Front";
import {Back} from "../../components/presentational/framework/animation/flippable-div/Back";
import UserLoginForm from "../../components/smart/user/login/UserLoginForm";

// import "./playgroud.css";
//
// class PlayGround extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             flipped: true
//         };
//     }
//
//     flip = () => {
//         const flipped = this.state.flipped;
//         this.setState({
//             flipped: !flipped
//         });
//     };
//
//     render() {
//         const flipped = this.state.flipped ? "" : "flipped";
//         return (
//             <Container className="mt-2">
//                 <div className="row align-items-center justify-content-center">
//                     <div className={"flippable-card text-center " + flipped} onClick={this.flip}>
//                         <div className="front">
//                             abc
//                         </div>
//                         <div className="back">
//                             123
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         );
//     }
//
//
// }
//
// export default PlayGround;

export const PlayGround = (props) => {

    return (
        <Container className="mt-2">
            <div className="row align-items-center justify-content-center">
                <FlippableDiv>
                    <Front className="text-center">
                        abc
                    </Front>
                    <Back className="text-center">
                        def
                    </Back>
                </FlippableDiv>
            </div>
        </Container>
    );

};