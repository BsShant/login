import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Particle from "./components/particle/particle";
import Navigation from "./components/Navigationbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/heroSection/heroSection";
import AboutSection from "./components/aboutSection/aboutSection";
import ServicesSection from "./components/servicesSection/servicesSection";
import AluminiSection from './components/aluminiSection/aluminiSection';
import ContactSection from "./components/contactSection/contactSection";
import Menu from "./components/Menu/Menu";
function App() {
 
  const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];
 
  return (
    <div className="Appmenu">
      <Particle />
      <Navigation/>
     <Menu/>
      <ReactFullpage
        //fullpage options
        lockAnchors={false}
        anchors={anchors}
        navigation={true}
        navigationPosition={"right"}
        navigationTooltips={["firstSlide", "secondSlide"]}
        showActiveTooltip={false}
        slidesNavigation={true}
        slidesNavPosition={"top"}
        licenseKey={"YOUR_KEY_HERE"}
        menu={"#myMenu"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
             <HeroSection fullpageApi={fullpageApi} />
             <AboutSection fullpageApi={fullpageApi} />
             <ServicesSection fullpageApi={fullpageApi} />
             <AluminiSection fullpageApi={fullpageApi} />
              <ContactSection fullpageApi={fullpageApi}/>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      );
      <Footer/>
    </div>
  );
}

export default App;
