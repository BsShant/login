import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
function IndexRoute() {
  const [spaceAudio, setSpaceAudio] = useState(
    new Audio("https://login.com/front/sounds/background.mp3")
  );
  useEffect(() => {
    sessionStorage.setItem("opened", "yes");
    spaceAudio.play();
    spaceAudio.loop = true;
  
  }, []);
   
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
    </Routes>
  );
}

export default IndexRoute;
