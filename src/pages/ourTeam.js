import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../components/particle/particle";
import FirstPage from "./firstpage";
import SecondPage from "./Leaderships";
import ThirdPage from "./Team";
import FourthPage from "./additionalMember";
import Navigation from "../components/Navigationbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollSound from "../assets/audio/slideGem.mp3";
import "./ourTeam.css";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { fetchingOurTeamContentWithSpinnerStarts } from "../store/ourTeamStore/ourTeamAction";
import AOS from "aos";
const OurTeamPage = () => {
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio(ScrollSound));

  const anchors = [
    "ourTeam",
    "Leaderships",
    "teamMembers",
    "additionalMembers",
    "fifthPage",
  ];
  useEffect(() => {
    dispatch(fetchingOurTeamContentWithSpinnerStarts());
    AOS.init({ duration: 1500, once: false });
  });
  return (
    <div className="teamPage teamPageContainer">
      <Particle />
      <Navigation navigateTo="/" navigationToName="Home" />
      <ReactFullpage
        //fullpage options
        lockAnchors={false}
        anchors={anchors}
        sectionSelector={".aboutSection"}
        navigation={true}
        navigationPosition={"right"}
        navigationTooltips={["firstSlide", "secondSlide"]}
        showActiveTooltip={false}
        slidesNavigation={true}
        slidesNavPosition={"top"}
        licenseKey={"YOUR_KEY_HERE"}
        onLeave={() => {
          audio.play();
          $(".aboutSection [data-aos]").removeClass("aos-animate");
         
        }}
        onSlideLeave={function () {
          $(".slide [data-aos]").removeClass("aos-animate");
        }}
        afterSlideLoad={function () {
          $(".slide.active [data-aos]").addClass("aos-animate");
        }}
        afterLoad={() => {
          $(".aboutSection.active [data-aos]").addClass("aos-animate");
        }}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="container">
                <FirstPage fullpageApi={fullpageApi} />
                <SecondPage
                  fullpageApi={fullpageApi}
                 
                />
                <ThirdPage
                  fullpageApi={fullpageApi}
              
                />
                <FourthPage
                  fullpageApi={fullpageApi}
                 
                />
                <div className="aboutSection"></div>
                <div className="aboutSection"></div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
    </div>
  );
};

export default OurTeamPage;
