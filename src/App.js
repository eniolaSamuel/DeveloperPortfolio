import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./views/components/Navbar";
import HomeScreen from "./views/components/HomeScreen";
import About from "./views/components/About";
import PortfolioMainPage from "./views/components/PortfolioMainPage";
import Technologies from "./views/components/Technologies";
import Project from "./views/components/Project";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PortfolioMainPage />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/techSkills" element={<Technologies />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
