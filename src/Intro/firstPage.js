import React, { useEffect, useState } from "react";
import "./firstpage.css";
import ImageInt from "../assets/images/login.png";
import Typing from "react-typing-animation";

const FirstPage = (props) => {
  const {
    setDisplayMainPage,
    setPlaySpaceAudio,
    typingAudio,
    speakerAudio,
    setSpeakerAudio,
    displayMainPage,
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const [secondParagraph, setSecondParagraph] = useState(false);

  return (
    <div className="titleFrontPage">
      {!showDetails ? (
        <>
          <h3>Hello, Welcome To Login!</h3>
          <p> Would you like to experience website with sound ?</p>
          <div className="forbtn">
            <button
              class="btn1 "
              onClick={() => {
                setShowDetails(true);
              }}
            >
              __________Yes please !
            </button>

            <button
              class="btn1 "
              onClick={() => {
                setPlaySpaceAudio(false);
                setDisplayMainPage(true);
              }}
            >
              No !
            </button>
          </div>
        </>
      ) : (
        <div className="Login">
          <div className="login">
            <img src={ImageInt} height="113px" width={"330px"} />
          </div>
          {!displayMainPage ? (
            <Typing
              speed={120}
              hideCursor={true}
              onStartedTyping={() => {
                typingAudio.play();
              }}
              onFinishedTyping={() => {
                setSecondParagraph(true);
                typingAudio.pause();
              }}
            >
              <h2>Everyone has Story to Tell</h2>
            </Typing>
          ) : null}

          {secondParagraph ? (
            <Typing
              speed={50}
              hideCursor={true}
              onStartedTyping={() => {
                speakerAudio.play();
              }}
              onFinishedTyping={() => {
                // setDisplayMainPage(true);
              }}
            >
              <p>
                In the end of the 5th century before our time the first jewels
                were brought to Europe. Since then many have tried to recreate
                something similar in value and in beauty. Some have achieved,
                however many have failed because of their lack of knowledge time
                or other resources. To this day jewels are thought to be one of
                the most precious gems on earth. Although we don't create
                jewels, we do imagine ourselves as jewelers. Just from a
                different angle.
              </p>
            </Typing>
          ) : null}
          <button
            class="btn1 "
            onClick={() => {
              setDisplayMainPage(true);
              typingAudio.pause();
              speakerAudio.pause();
            }}
          >
            __________Skip our Story
          </button>
        </div>
      )}
    </div>
  );
};
export default FirstPage;
