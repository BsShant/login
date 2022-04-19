import React from "react";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPhoneSquare,
  faInfo,
  faUserGroup,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import MenuListItem from "../menuListItem/menuListItem";
const Menu = () => {
  return (
    <ul id="myMenu" className="menu leftMenu d-md-block d-none">
      <MenuListItem
        data-menuanchor="homePage"
        // className="active"
        href="#homePage"
        icon={<FontAwesomeIcon icon={faHouse} className="icon" />}
        name="Home"
      />
      <MenuListItem
        data-menuanchor="aboutPage"
        href="#aboutPage"
        icon={<FontAwesomeIcon icon={faInfo} className="icon" />}
        name="About"
      />
       <MenuListItem
        data-menuanchor="companyPage"
        href="#companyPage"
        icon={<FontAwesomeIcon icon={faBuildingColumns} className="icon" />}
        name="Our Companies"
      />
      <MenuListItem
        data-menuanchor="Testimonials"
        href="#Testimonials"
        icon={<FontAwesomeIcon icon={faUserGroup} className="icon" />}
        name="Testimonials"
      />{" "}
      <MenuListItem
        data-menuanchor="contactUs"
        href="#contactUs"
        icon={<FontAwesomeIcon icon={faPhoneSquare} className="icon" />}
        name="Contacts"
      />
    </ul>
  );
};

export default Menu;
