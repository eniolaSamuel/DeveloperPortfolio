import JavascriptIcon from '../../assets/svg/icons8-javascript.svg';
import React from "react";
import Html from '../../assets/svg/icons8-html.svg';
import CSS from '../../assets/svg/icons8-css.svg'
import Figma from '../../assets/svg/icons8-figma.svg'
import MySQL from '../../assets/svg/icons8-mysql.svg'
import "../../styles/components/Technologies.css"
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import frontend from "../../assets/svg/frontend.svg";


function Technologies() {
    return (
        <div className="tech-main-frame">
            <div className="tech-skill-frame">
                <div className="skill-frame">
                    <div><img src={Html} alt={Html}/></div>
                    <br/><h1>HTML</h1>
                </div>

                <div className="skill-frame">
                    <div><img src={CSS} alt={CSS}/></div>
                    <br/><h1>CSS</h1>
                </div>

                <div className="skill-frame">
                    <div><img src={JavascriptIcon} alt={JavascriptIcon}/></div>
                    <br/><h1>JAVASCRIPT</h1>
                </div>

                <div className="skill-frame">
                    <div><img src={MySQL} alt={MySQL}/> </div>
                    <br/><h1>MySQL</h1>
                </div>

                <div className="skill-frame">
                    <div><img src={Figma} alt={Figma}/> </div>
                    <br/><h1>MySQL</h1>
                </div>

            </div>

            <div className="tech-text-box-frame">
                <motion.div variants={textVariant()}>
                    <p className="Skills-text">MY SKILLS</p>
                    <h2 className="Technologies-text">Technologies.</h2>
                </motion.div>
            </div>
        </div>
    );
}

export default Technologies;