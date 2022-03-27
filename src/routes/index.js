import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
function RouteIndex() {
  const [audio, setAudio] = useState(new Audio('https://logindesigns.com/front/sounds/background.mp3'));
  useEffect(()=>{
    audio.play()
    audio.loop = true
    },[])
  

  const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];

  return (
    
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
      </Routes>
        

    
  );
}

export default RouteIndex;
