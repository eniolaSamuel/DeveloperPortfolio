import JavascriptIcon from '../../assets/svg/icons8-javascript.svg';
import React from "react";
import Html from '../../assets/svg/icons8-html.svg';
import CSS from '../../assets/svg/icons8-css.svg'
import Figma from '../../assets/svg/icons8-figma.svg'
import MySQL from '../../assets/svg/icons8-mysql.svg'


function Technologies() {
    return (
        <div className="tech-main-frame">
            <h1>MY SKILLS</h1>
            <p>Technologies</p>
            <div>
                <div><img src={Html} alt={Html}/> </div>
                <div><img src={CSS} alt={CSS}/> </div>
                <div><img src={JavascriptIcon} alt={JavascriptIcon}/> </div>
                <div><img src={MySQL} alt={MySQL}/> </div>
                <div><img src={JavascriptIcon} alt={JavascriptIcon}/> </div>

            </div>

        </div>
    );
}

export default Technologies;