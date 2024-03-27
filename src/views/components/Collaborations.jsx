import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import React from "react";
import eReach from "../../assets/svg/e-reach-logo.svg";
import coopera from "../../assets/svg/coopera-logo.svg";
import cocoa from "../../assets/svg/cocoalate-project-logo.svg"
import skb from "../../assets/svg/skb-project-logo.svg"
import "../../styles/components/Collaborations.css"

const Collaborations = () =>{
    return(
        <div className="collaborations-main-frame">
            <hr/>
            <div className="collab-texts">
                <motion.div variants={textVariant()}>
                    <p className="collabo-text"> MY COLLABORATIONS</p>
                    <h1 className="collabo-work-text">I'm proud to have collaborated with these awesome companies: </h1>
                </motion.div>
            </div>

            <div className="collab-cards">
                <div className="e-reach">
                    <img  className="e-reach-logo" src={eReach} alt={eReach}/>
                </div>
                <div className="coopera">
                    <img  className="coopera-logo" src={coopera} alt={coopera}/>
                </div>
                <div className="cocoalate">
                    <img  className="cocoa-logo" src={cocoa} alt={cocoa}/>
                </div>
                <div className="skb">
                    <img  className="skb-logo" src={skb} alt={skb}/>
                </div>
            </div>
        </div>
    )
}

export default Collaborations;