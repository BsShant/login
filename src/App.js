
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faBars, faPhoneSquare, faCircleInfo, faGears, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const anchors = ["firstPage", "secondPage", "thirdPage","fourthPage","fifthPage"];
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="Appmenu">
  <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <div class="logo fixed-top">
        <a href="">
          <img src="https://logindesigns.com/front/Login logo/logo-white.png" width="100"></img>
        </a>
</div >
<div class="mobile-navBtn">
  <button type="button" class="navbar-toggle btn-transparent" data-toggle="collapse" data-target="#myNavbar">
  <FontAwesomeIcon icon={faBars}/>
  </button>
</div>
      
      <ul id="myMenu">
	<li data-menuanchor="firstPage" className="active"><a id="link" href="#firstPage">
  <FontAwesomeIcon icon={faHouse} className="icon" />Home</a></li>
	<li data-menuanchor="secondPage"><a  id="link" href="#secondPage">
  <FontAwesomeIcon icon={faCircleInfo} className="icon"/>About</a></li>
	<li data-menuanchor="thirdPage"><a  id="link" href="#thirdPage">
  <FontAwesomeIcon icon={faUserGroup} className="icon" />Alumini</a></li>
	<li data-menuanchor="fourthPage"><a  id="link" href="#fourthPage">
  <FontAwesomeIcon icon={faGears} className="icon" />Services</a></li>
  <li data-menuanchor="fifthPage"><a  id="link" href="#fifthPage">
  <FontAwesomeIcon icon={faPhoneSquare} className="icon"/>Contacts</a></li>

</ul>    
      <ReactFullpage
        //fullpage options
        lockAnchors={false}
        anchors={anchors}
        navigation={true}
        navigationPosition={"right"}
        navigationTooltips={["firstSlide", "secondSlide"]}
        showActiveTooltip={false}
        slidesNavigation={true}
        slidesNavPosition={"top"}
        licenseKey={"YOUR_KEY_HERE"}
        menu={'#myMenu'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
                     <div className="section">
                <p><h1>Welcome to our website</h1></p>
                <button class="bt1" onClick={() => fullpageApi.moveSectionDown()}>
                <p><i class="arrow down"></i></p>
                </button>
              </div>
          <div className="section">
                <p><h1>Welcome to our website</h1></p>
                <button class="bt1" onClick={() => fullpageApi.moveSectionDown()}>
                <p><i class="arrow down"></i></p>
                </button>
              </div>
              <div className="section">
              <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                <p><i class="arrow up"></i></p>
                </button>
                <p><h1>Section 2</h1></p>
                <button class="bt1" onClick={() => fullpageApi.moveSectionDown()}>
                <p><i class="arrow down"></i></p>
                </button>
              </div>
              <div className="section">
              <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                <p><i class="arrow up"></i></p>
                </button>
                <p><h1>Section 3</h1></p>
                <button class="bt1" onClick={() => fullpageApi.moveSectionDown()}>
                <p><i class="arrow down"></i></p>
                </button>
              </div>
              <div className="section">
              <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                <p><i class="arrow up"></i></p>
                </button>
                <p><h1>Section 4</h1></p>
                <button class="bt1" onClick={() => fullpageApi.moveSectionDown()}>
                <p><i class="arrow down"></i></p>
                </button>
              </div>
            
            </ReactFullpage.Wrapper>
          );
        }}
      />
        );        


    </div>
          );
}

export default App;
