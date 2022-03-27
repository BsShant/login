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
import { Link } from "react-router-dom";
import { MenuListItem } from "../menuListItem/menuListItem";

const Navigation = (props) => {
  const {navigateTo, navigationToName} = props
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
          <Link to={navigateTo}>{navigationToName}</Link>
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
              <button className="teambtn" style={{borderStyle:"solid"}}>
              <Link to={navigateTo}>{navigationToName}</Link>
              </button>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul id="linkit" className="links">
       <MenuListItem data-menuanchor="firstPage" className="active"  href="#firstPage" icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
       name="Home"
       />
         <MenuListItem data-menuanchor="secondPage" href="#secondPage" icon={ <FontAwesomeIcon icon={faInfoCircle} className="icon" />}
       name="About"
       />  <MenuListItem data-menuanchor="thirdPage"   href="#thirdPage" icon={ <FontAwesomeIcon icon={faGears} className="icon" />}
       name="Services"
       />  <MenuListItem data-menuanchor="fourthPage"  href="#fourthPage" icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
       name="Testimonials"
       />  <MenuListItem data-menuanchor="fifthPage"  href="#fifthPage" icon={  <FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
       name="Contacts"
       />
      </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
