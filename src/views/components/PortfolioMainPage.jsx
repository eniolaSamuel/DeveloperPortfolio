import Navbar from "./Navbar";
import HomeScreen from "./HomeScreen";
import About from "./About";
import Technologies from "./Technologies";
import Project from "./Project";
import Collaborations from "./Collaborations";
import Contacts from "./Contacts";

const PortfolioMainPage = () => {
    return(
        <>
            <Navbar />
            <HomeScreen />
            <About />
            <Technologies />
            <Project />
            <Collaborations/>
            <Contacts/>
        </>
    )
 }

 export default PortfolioMainPage;