
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Interest from "./components/Interest";
import Education from "./components/Education";



function App() {
  return (
    <div>
      
      <Navbar />
      <Home />
      
      <About />
      <Experience />
      <SocialLinks />
      <Education />
      <Interest />
    </div>
  );
}

export default App;
