import "./style.css";

import ReactFullpage from "@fullpage/react-fullpage";
import ReactAudioPlayer from "react-audio-player";
import Particle from "../../components/particle/particle";
import Navigation from "../../components/Navigationbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/heroSection/heroSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import PortofolioSection from "../../components/portofolio/portofolioSection";
import ServicesSection from "../../components/servicesSection/servicesSection";
import AluminiSection from "../../components/aluminiSection/aluminiSection";
import ContactSection from "../../components/contactSection/contactSection";
import ScrollSound from "../../assets/audio/slideGem.mp3";
import Menu from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import AOS from "aos";

function HomePage() {
  const [audio, setAudio] = useState(new Audio(ScrollSound));

  const anchors = [
    "homePage",
    "aboutPage",
    "Services",
    "Testimonials",
    "contactUs",
  ];
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="Appmenu Section_top" /* style={{background:"url('./assets/images/backgroundimage.webp')"}}*/
    >
      <Particle />
      <Navigation navigateTo="/our-team" navigationToName="Our Team" />
      <Menu />
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
        onLeave={() => {
          audio.play();
          $(".section [data-aos]").removeClass("aos-animate");
          // setTimeout(()=>{
          //   setNormalRotate(false)
          // },10)
        }}
        onSlideLeave={function () {
          $(".slide [data-aos]").removeClass("aos-animate");
        }}
        afterSlideLoad={function () {
          $(".slide.active [data-aos]").addClass("aos-animate");
        }}
        afterLoad={() => {
          $(".section.active [data-aos]").addClass("aos-animate");
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="container">
                <HeroSection fullpageApi={fullpageApi} />
                <AboutSection fullpageApi={fullpageApi} />
                <ServicesSection fullpageApi={fullpageApi} />
                <AluminiSection fullpageApi={fullpageApi} />
                <ContactSection fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      );
      <Footer />
    </div>
  );
}

export default HomePage;
