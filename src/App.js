import "./App.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactAudioPlayer from 'react-audio-player';
import Particle from "./components/particle/particle";
import Navigation from "./components/Navigationbar/Navbar";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/heroSection/heroSection";
import AboutSection from "./components/aboutSection/aboutSection";
import ServicesSection from "./components/servicesSection/servicesSection";
import AluminiSection from './components/aluminiSection/aluminiSection';
import ContactSection from "./components/contactSection/contactSection";
import Menu from "./components/Menu/Menu";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import OurTeamPage from "./pages/ourTeam";
import RouteIndex from "./routes";
function App() {
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
    
    <div>
     <RouteIndex />
        

    
      </div>
  );
}

export default App;
