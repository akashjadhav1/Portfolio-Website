import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import WebSlider from "./components/WebSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import TechSkill from "./components/TechSkill";
import ContactUs from "./components/ContactUs";





function App() {
  

  return (
    
    <div className="">
    
      <Navbar />
      <LandingPage />
      <WebSlider />
      <TechSkill />
      <Projects />
      <AboutUs />
      <ContactUs/>
      <Footer />
    </div>

  
    
  
  
  );
}

export default App;
