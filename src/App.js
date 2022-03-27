import "./App.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import RouteIndex from "./routes";
function App() {
  const [audio, setAudio] = useState(new Audio('https://login.com/front/sounds/background.mp3'));
  useEffect(()=>{
    audio.play()
    audio.loop = true
    },[])
  

  
  return (
    
    <div>
     <RouteIndex />
        

    
      </div>
  );
}

export default App;
