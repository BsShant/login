import React from "react";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faInfo,
  faGears,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import MenuListItem from "../menuListItem/menuListItem";
const Menu = () => {
  return (
    <ul id="myMenu" className="menu leftMenu d-md-block d-none">
      <MenuListItem
        data-menuanchor="firstPage"
        className="active"
        href="#firstPage"
        icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
        name="Home"
      />
      <MenuListItem
        data-menuanchor="secondPage"
        href="#secondPage"
        icon={<FontAwesomeIcon icon={faInfo} className="icon" />}
        name="About"
      />
      <MenuListItem
        data-menuanchor="thirdPage"
        href="#thirdPage"
        icon={<FontAwesomeIcon icon={faInfo} className="icon" />}
        name="Portofolio"
      />{" "}
      <MenuListItem
        data-menuanchor="fourthPage"
        href="#fourthPage"
        icon={<FontAwesomeIcon icon={faGears} className="icon" />}
        name="Services"
      />{" "}
      <MenuListItem
        data-menuanchor="fifthPage"
        href="#fifthPage"
        icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
        name="Testimonials"
      />{" "}
      <MenuListItem
        data-menuanchor="sixthPage"
        href="#sixthPage"
        icon={<FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
        name="Contacts"
      />
    </ul>
  );
};

export default Menu;
