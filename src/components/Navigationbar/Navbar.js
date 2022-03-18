import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faGears,
  faUserGroup,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navigation = () => {
  return (
    <Navbar bg="transparent" className="navbarZIndex" expand={false}>
      <Container fluid>
        <Navbar.Brand href="">
          <div className="logo">
          <img
            src="https://logindesigns.com/front/Login logo/logo-white.png"
            width="100"
          ></img>
</div>
          <button className="team d-md-block d-none">
            <a href="https://logindesigns.com/our-team">Our Team</a>
          </button>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="d-md-none d-block closeButton"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="top"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <button className="teambtn">
                <a href="https://logindesigns.com/our-team">Our Team</a>
              </button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className=" justify-content-end flex-grow-1 pe-3">
              <Nav.Link id="linkit" href="#firstPage">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Nav.Link>
              <Nav.Link id="linkit" href="#secondPage">
                <FontAwesomeIcon icon={faInfoCircle} />
                About
              </Nav.Link>
              <Nav.Link id="linkit" href="#thirdPage">
                <FontAwesomeIcon icon={faGears} />
                Services
              </Nav.Link>
              <Nav.Link id="linkit" href="#fourthPage">
                <FontAwesomeIcon icon={faUserGroup} />
                Alumini
              </Nav.Link>
              <Nav.Link id="linkit" href="#fifthPage">
                <FontAwesomeIcon icon={faPhoneSquare} />
                Contacts
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
