import "../../styles/components/Contact.css"
import LOGO from "../../assets/svg/monogram-logo.svg"

const Contacts = () =>{
    return(
        <div className="contact-main-frame">
            <div className="inner-frame">
                <img src={LOGO}/>
            </div>
        </div>
    )
}

export default Contacts;