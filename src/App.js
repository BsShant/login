import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactFullpage from "@fullpage/react-fullpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
 
  faPhoneSquare,
  faCircleInfo,
  faGears,
  faUserGroup,
  faInfoCircle,
  faGear,
 faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Particles from "react-tsparticles";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];
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
              value: "white",
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
              speed: 4,
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
      <Navbar bg="transparent" className="navbarZIndex" expand={false}>
        <Container fluid>
          <Navbar.Brand href="">
        
          <img src="https://logindesigns.com/front/Login logo/logo-white.png" width="100"></img>

          <button className="team d-md-block d-none"><a href="https://logindesigns.com/our-team">Our Team</a></button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="d-md-none d-block"  />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#firstPage"><FontAwesomeIcon icon={faHouse}/>Home</Nav.Link>
                <Nav.Link href="#secondPage"><FontAwesomeIcon icon={faInfoCircle}/>About</Nav.Link>
                <Nav.Link href="#thirdPage"><FontAwesomeIcon icon={faGears}/>Services</Nav.Link>
                <Nav.Link href="#fourthPage"><FontAwesomeIcon icon={faUserGroup}/>Alumini</Nav.Link>
                <Nav.Link href="#fifthPage"><FontAwesomeIcon icon={faPhoneSquare}/>Contacts</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <ul id="myMenu">
        <li data-menuanchor="firstPage" className="active">
          <a id="link" href="#firstPage">
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Home
          </a>
        </li>
        <li data-menuanchor="secondPage">
          <a id="link" href="#secondPage">
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            About
          </a>
        </li>
        <li data-menuanchor="thirdPage">
          <a id="link" href="#thirdPage">
            <FontAwesomeIcon icon={faGears} className="icon" />
            Services
          </a>
        </li>
        <li data-menuanchor="fourthPage">
          <a id="link" href="#fourthPage">
            <FontAwesomeIcon icon={faUserGroup} className="icon" />
           Alumini
          </a>
        </li>
        <li data-menuanchor="fifthPage">
          <a id="link" href="#fifthPage">
            <FontAwesomeIcon icon={faPhoneSquare} className="icon" />
            Contacts
          </a>
        </li>
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
        menu={"#myMenu"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>
                  <h1>
                    Your Bad Time Can Give You All The Knowledge, That Your
                    School Can't
                  </h1>
                </p>
                <button
                  class="bt1"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p>
                    <i class="arrow down"></i>
                  </p>
                </button>
              </div>
              <div className="section">
                <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                  <p>
                    <i class="arrow up"></i>
                  </p>
                </button>
                <p>
                  <h1>If There Is No Need To Decide Then Don't Decide</h1>
                </p>
                <button
                  class="bt1"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p>
                    <i class="arrow down"></i>
                  </p>
                </button>
              </div>
              <div className="section">
                <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                  <p>
                    <i class="arrow up"></i>
                  </p>
                </button>
                <p>
                  <h1>
                    The More You Fear Something, The More You Are Pushing
                    Yourself To Happen That Things.
                  </h1>
                </p>
                <button
                  class="bt1"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p>
                    <i class="arrow down"></i>
                  </p>
                </button>
              </div>
              <div className="section">
                <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                  <p>
                    <i class="arrow up"></i>
                  </p>
                </button>
                <p>
                  <h1>Follow Your Heart But Take Your Brain With You</h1>
                </p>
                <button
                  class="bt1"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  <p>
                    <i class="arrow down"></i>
                  </p>
                </button>
              </div>
              <div className="section">
                <button class="bt1" onClick={() => fullpageApi.moveSectionUp()}>
                  <p>
                    <i class="arrow up"></i>
                  </p>
                </button>
                <p>
                  <h1>Remember If You Play Small, You Stay Small</h1>
                </p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      );
      <footer class="copyright">
        <div class="copy"><FontAwesomeIcon icon={faCopyright}/>Copyright Login Corporation</div>
    <div class="items">
      <a class="social" href="https://www.facebook.com/Login-Designs-2284503471807329/" target="_blank">
        <FontAwesomeIcon icon={faFacebookF}/>
      </a>
     <a class="social" href="https://www.linkedin.com/in/login-pvt-ltd-4b93a7172" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn}/>
      </a>
      <a class="social" href="https://www.twitter.com/LoginLtd" target="_blank">
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a class="social" href="https://www.instagram.com/loginpvtltd/?hl=en" target="_blank">
      <FontAwesomeIcon icon={faInstagram}/>
      </a>
    </div>
    </footer>
    </div>
  );
  
}

export default App;
