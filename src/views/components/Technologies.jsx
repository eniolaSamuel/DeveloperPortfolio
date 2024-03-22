import JavascriptIcon from '../../assets/svg/icons8-javascript.svg';
import React from "react";
import Html from '../../assets/svg/icons8-html.svg';


function Technologies() {
    return (
        <div className="tech-main-frame">
            <h1>MY SKILLS</h1>
            <p>Technologies</p>
            <div>
                <div><img src={Html} alt={Html}/> </div>
                <div><img src={Html} alt={Html}/> </div>
                <div><img src={JavascriptIcon} alt={JavascriptIcon}/> </div>

            </div>

        </div>
    );
}

export default Technologies;