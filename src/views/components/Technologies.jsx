import JavascriptIcon from '../../assets/svg/icons8-javascript.svg';
import React from "react";
import Html from '../../assets/svg/icons8-html.svg';
import CSS from '../../assets/svg/icons8-css.svg'
import Figma from '../../assets/svg/icons8-figma.svg'
import MySQL from '../../assets/svg/icons8-mysql.svg'
import "../../styles/components/Technologies.css"
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import REACT from '../../assets/svg/icons8-react-js.svg'
import JAVA from '../../assets/svg/icons8-java.svg'
import SPRINGBOOT from '../../assets/svg/icons8-spring-boot (1).svg'
import Postman from '../../assets/svg/postman.svg'
import Python from '../../assets/svg/icons8-python.svg'
import frontend from "../../assets/svg/frontend.svg";


function Technologies() {
    return (
        <div className="tech-main-frame">
            <hr/>
            <div className="tech-text-box-frame">
                <motion.div variants={textVariant()}>
                    <p className="Skills-text">MY SKILLS</p>
                    <h2 className="Technologies-text">Technologies.</h2>
                </motion.div>
            </div>
            <div className="tech-skill-frame">
                <div className="frontend-skill-frame">
                    <div className="skill-frame">
                        <div><img src={Html} alt={Html}/></div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={CSS} alt={CSS}/></div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={JavascriptIcon} alt={JavascriptIcon}/></div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={REACT} alt={REACT}/></div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={Figma} alt={Figma}/> </div>
                    </div>
                </div>

                <div className="backend-skill-frame">
                    <div className="skill-frame">
                        <div><img src={JAVA} alt={JAVA}/> </div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={Python} alt={Python}/> </div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={SPRINGBOOT} alt={SPRINGBOOT}/> </div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={MySQL} alt={MySQL}/> </div>
                    </div>

                    <div className="skill-frame">
                        <div><img src={Postman} alt={MySQL}/> </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;