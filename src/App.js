import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Intro/firstPage";
import { useEffect, useState } from "react";
import AnimatingPages from "./animatingPages";
import Speaker from "./assets/audio/intro-speech.mp3";
import TypingSound from "./assets/audio/typing.mp3";
import BackgroundAudio from './assets/audio/background.mp3';
import RouteIndex from "./routes";
import AOS from "aos";

import "aos/dist/aos.css";
import { useSelector } from "react-redux";
function App() {
  const ourTeamSpinner = useSelector(state => state.ourTeamStore.ourTeamSpinner)
  const [spaceAudio, setSpaceAudio] = useState(new Audio(BackgroundAudio));
  const audioEvent = (e) => {
    spaceAudio.play();
    spaceAudio.loop = true;
  };
  const [displayMainPage, setDisplayMainPage] = useState(false);
  const [displaySecondLoadingPage, setDisplaySecondLoadingPage] =
    useState(false);
  const [displayFirstLoadingPage, setDisplayFirstLoadingPage] = useState(
    sessionStorage.getItem("opened") ? false : true
  );
  const [playSpaceAudio, setPlaySpaceAudio] = useState(false);

  const [speakerAudio, setSpeakerAudio] = useState(new Audio(Speaker));
  const [typingAudio, setTypingAudio] = useState(new Audio(TypingSound));

  const moveToMainScreen = () => {
    setDisplayMainPage(true);
  };

  useEffect(() => {
    if (displayMainPage) {
      setTypingAudio(null);
      setSpeakerAudio(null);
    }
  }, [displayMainPage]);
  const speakerAudioPlaying = () => {
    console.log("hi");
    if (displayMainPage) {
      speakerAudio.pause()
      spaceAudio.play();
    }
  };
  useEffect(() => {
    AOS.init({});
    // AOS.refresh();
  }, []);
  useEffect(() => {

    speakerAudio.addEventListener("ended", moveToMainScreen);
    speakerAudio.addEventListener("playing", speakerAudioPlaying);

    return () => {
      speakerAudio.removeEventListener("ended", moveToMainScreen);
      speakerAudio.removeEventListener("playing", speakerAudioPlaying);
    };
  }, []);

  return (
    <div>
      <div className="nonVisible"></div>
      {displayMainPage || !displayFirstLoadingPage ? (
        <RouteIndex speakerAudio={speakerAudio} typingAudio={typingAudio} playSpaceAudio={playSpaceAudio} />
      ) : (
        <FirstPage
          playSpaceAudio={playSpaceAudio}
          setPlaySpaceAudio={setPlaySpaceAudio}
          speakerAudio={speakerAudio}
          setSpeakerAudio={setSpeakerAudio}
          typingAudio={typingAudio}
          setTypingAudio={setTypingAudio}
          setDisplayMainPage={setDisplayMainPage}
          displayMainPage={displayMainPage}
          audioEvent={audioEvent}
        />

      )
      }

    </div>
  );
}

export default App;
