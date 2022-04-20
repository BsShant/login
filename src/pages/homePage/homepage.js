import "./style.css";

import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../../components/particle/particle";
import Navigation from "../../components/Navigationbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/heroSection/heroSection";
import AboutSection from "../../components/aboutSection/aboutSection";
import CareersSection from "../../components/careersSection/careersSection";
import CompanySection from "../../components/companySection/companySection";
import ContactSection from "../../components/contactSection/contactSection";
import ScrollSound from "../../assets/audio/slideGem.mp3";
import BackgroundAudio from "../../assets/audio/background.mp3";
import Menu from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import $ from "jquery";
import AOS from "aos";
import AnimatingPages from "../../animatingPages";
import { useSelector } from "react-redux";

function HomePage(props) {
  const [audio, setAudio] = useState(new Audio(ScrollSound));
  const [spaceAudio, setSpaceAudio] = useState(new Audio(BackgroundAudio));
  const playAudio = () => {
    spaceAudio.play();
    spaceAudio.loop = true;
  };
  const [displayAnimatingPage, setDisplayAnimatingPage] = useState(
    sessionStorage.getItem("opened") ? true : false
  );

  useEffect(() => {
    if (sessionStorage.getItem("playSound")) {
      playAudio();
    }
  }, []);

  const anchors = [
    "homePage",
    "aboutPage",
    "companyPage",
    "careersPage",
    "contactUs",
  ];
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {displayAnimatingPage ? (
        <AnimatingPages setDisplayAnimatingPage={setDisplayAnimatingPage} />
      ) : (
        <div className="Appmenu Section_top">
          <Particle />
          <Navigation navigateTo="/our-team" navigationToName="Our Team" />
          <Menu />
          <ReactFullpage
            //fullpage options
            lockAnchors={false}
            anchors={anchors}
            navigation={true}
            navigationPosition={"right"}
            showActiveTooltip={false}
            slidesNavigation={true}
            slidesNavPosition={"top"}
            licenseKey={"YOUR_KEY_HERE"}
            menu={"#myMenu"}
            scrollingSpeed={1000} /* Options here */
            onLeave={() => {
              audio.play();
              $(".section [data-aos]").removeClass("aos-animate");
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
                    <CompanySection  fullpageApi={fullpageApi} />
                    <CareersSection fullpageApi={fullpageApi} />
                    <ContactSection fullpageApi={fullpageApi} />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
          );
          <Footer />
        </div>
      )}
    </>
  );
}

export default HomePage;
