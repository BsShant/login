import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Particle from "../components/particle/particle";
import FirstPage from "./firstpage";
import SecondPage from "./Leaderships";
import ThirdPage from "./Team";
import FourthPage from "./additionalMember";
import Navigation from "../components/Navigationbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollSound from '../assets/audio/slideGem.mp3';
import './ourTeam.css';

const OurTeamPage = ()=>{
  const [audio, setAudio] = useState(new Audio(ScrollSound));
  const [normalRotate, setNormalRotate] = useState(false)

    const anchors = [
        "ourTeam",
        "Leaderships",
        "teamMembers",
        "additionalMembers",
        "fifthPage",
      ];

    return(
        <div className="teamPage teamPageContainer" > 
         <Particle/>
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
        onLeave={()=>{
          audio.play()
          setTimeout(()=>{
            setNormalRotate(false)
          },10)
          setTimeout(()=>{
          },500)
        }}
        afterLoad={()=>{
          setNormalRotate(true)

        }}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="container">
              <FirstPage fullpageApi={fullpageApi} />
              <SecondPage fullpageApi={fullpageApi} normalRotate={normalRotate} setNormalRotate={setNormalRotate}/>
              <ThirdPage fullpageApi={fullpageApi}  normalRotate={normalRotate}  setNormalRotate={setNormalRotate} />
              <FourthPage fullpageApi={fullpageApi}  normalRotate={normalRotate}  setNormalRotate={setNormalRotate} />
              {/* <div className="aboutSection"></div> */}
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