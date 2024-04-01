import "../../styles/components/Contact.css"
import LOGO from "../../assets/svg/monogram-logo.svg"
import LINKEDIN from "../../assets/svg/linkedin-icon.svg"
import TWITTER from "../../assets/svg/twitter-icon.svg"
import MAIL from "../../assets/svg/mail.svg"
import GITHUB from "../../assets/svg/github.svg"

const Contacts = () =>{
    return(
        <div className="contact-main-frame">
            <div className="inner-frame">
                <img className="inner-frame-logo" src={LOGO} alt={LOGO}/>
                <h1>Logging out with pixels of passion, code in my heart,
                    and dreams in my design. See you in the next click!
                </h1>

                <div className="socials-frame">
                    <a href="https://www.linkedin.com/in/eniola-samuel-6074a6244/">
                        <div className="social-circle"><img src={LINKEDIN} alt={LINKEDIN}/></div>
                    </a>

                    <a href="https://www.twitter.com/__cocoalate">
                        <div className="social-circle"><img src={TWITTER} alt={TWITTER}/></div>
                    </a>

                    <a href="https://github.com/eniolaSamuel">
                        <div className="social-circle"><img src={GITHUB} alt={GITHUB}/></div>
                    </a>


                    <div className="social-circle"><img src={MAIL} alt={MAIL}/></div>

                </div>

            </div>
        </div>
    )
}

export default Contacts;