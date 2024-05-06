import "../../styles/components/Project.css"
import CocoaLogo from "../../assets/svg/cocoalate-project-logo.svg"
import SKBLogo from "../../assets/svg/skb-project-logo.svg"
import LinkIcon from "../../assets/svg/icons8-link.svg"
import {Link} from "react-router-dom"
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import React from "react";


const Project = ()=>{
    return (
        <div className="project-main-frame">
            <hr/>
            <div className="project-texts">
                <motion.div variants={textVariant()}>
                    <p className="work-text"> MY RECENT WORK</p>
                    <h1 className="project-work-text">Here are personal projects I've worked on.</h1>
                </motion.div>
            </div>

            <div className="project-cards">
                <div className="cocoa-product">
                    <img  className="cocoa-logo" src={CocoaLogo} alt={CocoaLogo}/>
                    <h1 className="cocoa-logo-text"> A Simple Product Landing Page for an Hair Growth Oil Company</h1>
                        <a href="https://cocoalate-oil.vercel.app/">
                            <img className="link-button" src={LinkIcon} alt={LinkIcon}/>
                        </a>
                </div>
                <div className="skb-backend">
                    <img  className="skb-logo" src={SKBLogo} alt={SKBLogo}/>
                    <h1 className="skb-logo-text"> An Apartment Booking Application for a Short-let Company </h1>
                    <Link to={{pathname: "https://github.com/eniolaSamuel/skbHousing"}}>
                        <img className="link-button" src={LinkIcon} alt={LinkIcon}/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Project;