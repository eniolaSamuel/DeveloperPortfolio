import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import frontend from '../../assets/svg/frontend.svg';
import backend from '../../assets/svg/icons8-backend-developer.svg';
import { fadeIn, textVariant } from '../utils/motion';
import  SectionWrapper  from '../../hoc/SectionWrapper';
import "../../styles/components/About.css";


const About = () => {
    return (
        <div className="about-us-main-frame">
            <div className="text-box-frame">
                <motion.div variants={textVariant()}>
                    <p className="Introduction-text">INTRODUCTION</p>
                    <h2 className="Overview-text">Overview.</h2>
                </motion.div>

                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="summary-text">
                    Welcome to my portfolio!
                    I specialize in both React.js frontend and Java backend development.
                    With expertise in crafting seamless user experiences and building robust server-side solutions,
                    I aim to deliver high-quality software solutions that meet user needs and business objectives.
                    Explore my work to see examples of my skills in action.

                    Let's build something amazing together!
                </motion.p>
            </div>

            <div className="card-frame">
                <div className="frontend-frame">
                    <div className="frontend-card" > <img src={frontend} alt={frontend}/></div>
                    <br/><h1>FRONTEND DEVELOPER</h1>
                </div>

                <div className="backend-frame">
                    <div className="backend-card" > <img src={backend} alt={backend}/></div>
                    <br/><h1>BACKEND DEVELOPER</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');