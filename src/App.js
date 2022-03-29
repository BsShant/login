import "./App.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Intro/firstPage";
import { useEffect, useState } from "react";
import AnimatingPages from "./animatingPages";
import Speaker from "./assets/audio/intro-speech.mp3";
import TypingSound from "./assets/audio/typing.mp3";
import RouteIndex from "./routes";
function App() {
  const [displayMainPage, setDisplayMainPage] = useState(false);
  const [displaySecondLoadingPage, setDisplaySecondLoadingPage] =
    useState(false);
  const [displayFirstLoadingPage, setDisplayFirstLoadingPage] = useState(
    sessionStorage.getItem("opened") ? false : true
  );
  const [playSpaceAudio, setPlaySpaceAudio] = useState(true);
  const [spaceAudio, setSpaceAudio] = useState(
    new Audio("https://login.com/front/sounds/background.mp3")
  );
  const [speakerAudio, setSpeakerAudio] = useState(new Audio(Speaker));
  const [typingAudio, setTypingAudio] = useState(new Audio(TypingSound));
  useEffect(() => {
    if (playSpaceAudio) {
      spaceAudio.play();
      spaceAudio.loop = true;
    } else {
      spaceAudio.pause();
    }
  }, [playSpaceAudio]);
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
      speakerAudio.pause();
    }
  };
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
      {displayMainPage ? (
        <RouteIndex speakerAudio={speakerAudio} typingAudio={typingAudio} />
      ) : displayFirstLoadingPage ? (
        <FirstPage
          playSpaceAudio={playSpaceAudio}
          setPlaySpaceAudio={setPlaySpaceAudio}
          speakerAudio={speakerAudio}
          setSpeakerAudio={setSpeakerAudio}
          typingAudio={typingAudio}
          setTypingAudio={setTypingAudio}
          setDisplayMainPage={setDisplayMainPage}
          displayMainPage={displayMainPage}
        />
      ) : (
        <div>
          <AnimatingPages setDisplayMainPage={setDisplayMainPage}/>
        </div>
      )}
    </div>
  );
}

export default App;
