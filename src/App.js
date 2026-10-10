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
import Experience from "./components/Experience";
import ContactUs from "./components/ContactUs";
import ScrollToTop from "./components/ScrollToTop";
import GitHubStats from "./components/GitHubStats";





function App() {
  

  return (
    
    <div className="">
    
      <Navbar />
      <LandingPage />
      <WebSlider />
      <TechSkill />
      <Experience />
      <Projects />
      <GitHubStats />
      <AboutUs />
      <ContactUs/>
      <Footer />
      <ScrollToTop />
    </div>

  
    
  
  
  );
}

export default App;
