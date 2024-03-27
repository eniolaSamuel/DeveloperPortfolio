import "../../styles/components/Project.css"
import CocoaLogo from "../../assets/svg/cocoalate-project-logo.svg"
import SKBLogo from "../../assets/svg/skb-project-logo.svg"
import LinkIcon from "../../assets/svg/icons8-link.svg"
import {Link} from "react-router-dom"


const Project = ()=>{
    return (
        <div className="project-main-frame">
            <div className="project-texts">
                <p className="work-text"> MY RECENT WORK</p>
                <h1 className="project-work-text">Here are a few projects I've worked on.</h1>
            </div>

            <div className="project-cards">
                <div className="cocoa-product">
                    <img  className="cocoa-logo" src={CocoaLogo} alt={CocoaLogo}/>
                    <h1 className="cocoa-logo-text"> A Simple Product Landing Page for an Hair Growth Oil Company</h1>
                    <Link to={{pathname: "https://github.com/eniolaSamuel/CocoalateOil"}}>
                        <img className="link-button" src={LinkIcon} alt={LinkIcon}/>
                    </Link>
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