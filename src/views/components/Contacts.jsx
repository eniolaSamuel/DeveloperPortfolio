import "../../styles/components/Contact.css"
import LOGO from "../../assets/svg/monogram-logo.svg"

const Contacts = () =>{
    return(
        <div className="contact-main-frame">
            <div className="inner-frame">
                <img src={LOGO} alt={LOGO}/>
                <h1>"Logging out with pixels of passion, code in my heart,
                    and dreams in my design. See you in the next click!"</h1>

            </div>
        </div>
    )
}

export default Contacts;