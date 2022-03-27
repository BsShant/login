import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../components/particle/particle";
import FirstPage from "./firstpage";
import SecondPage from "./Leaderships";
import ThirdPage from "./Team";
import FourthPage from "./additionalMember";
import Navigation from "../components/Navigationbar/Navbar";
import Footer from "../components/Footer/Footer";

const OurTeamPage = ()=>{

    const anchors = [
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "fifthPage",
      ];

    return(
        <div className="teamPage teamPageContainer" > 
            <Particle />
            <Navigation navigateTo='/' navigationToName="Home"/>
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
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="team-container">
              <FirstPage fullpageApi={fullpageApi} />
              <SecondPage fullpageApi={fullpageApi} />
              <ThirdPage fullpageApi={fullpageApi} />
              <FourthPage fullpageApi={fullpageApi} />
              <div className="aboutSection"></div>
              </div>
             
            </ReactFullpage.Wrapper>
          );
        }}
      />
         <Footer/>
        </div>
    )
}

export default OurTeamPage;