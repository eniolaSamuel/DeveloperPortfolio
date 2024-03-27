import "../../styles/components/Project.css"
import CocoaLogo from "../../assets/svg/cocoalate-project-logo.svg"
import SKBLogo from "../../assets/svg/skb-project-logo.svg"
import Link from "../../assets/svg/icons8-link.svg"

const Project = ()=>{
    return (
        <div className="project-main-frame">
            <p className="work-text"> MY RECENT WORK</p>
            <h1 className="project-work-text">Here are a few projects I've worked on.</h1>

            <div className="project-cards">
                <div className="cocoa-product">
                    <img  className="cocoa-logo" src={CocoaLogo} alt={CocoaLogo}/>
                    <h1> A Simple Product Landing Page for an Hair Growth Oil Company</h1>
                    <a><button><img src={Link} alt={Link}/></button></a>
                </div>
                <div className="skb-backend">
                    <img  className="skb-logo" src={SKBLogo} alt={SKBLogo}/>
                    <h1> An Apartment Booking Application for a Short-let Company </h1>
                    <a><button><img src={Link} alt={Link}/></button></a>
                </div>
            </div>

        </div>
    )
}

export default Project;