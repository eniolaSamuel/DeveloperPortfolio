import Navbar from "./Navbar";
import HomeScreen from "./HomeScreen";
import About from "./About";
import Technologies from "./Technologies";
import Project from "./Project";
import Collaborations from "./Collaborations";

const PortfolioMainPage = () => {
    return(
        <>
            <Navbar />
            <HomeScreen />
            <About />
            <Technologies />
            <Project />
            <Collaborations/>
        </>
    )
 }

 export default PortfolioMainPage;