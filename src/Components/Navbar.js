import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleMobileNavbar = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };
  return (
    <div className="header">
      <nav>
        <div className="hamburger-icon" onClick={toggleMobileNavbar}>
          <Hamburger />
        </div>

        <ul className={`right-nav-list ${showMobileNavbar && `mobile`}`}>
          <a href="#" className="logo">
            Sneackers
          </a>
          <div className="menu-list">
            <li className="list-item">
              <a href="#">Collection</a>
            </li>
            <li className="list-item">
              <a href="#">Men</a>
            </li>
            <li className="list-item">
              <a href="#">Women</a>
            </li>
          </div>
        </ul>

        <ul className="left-nav-list">
          <a href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#000000", width: "30px", height: "30px" }}
            />
          </a>
          <a className="avatar" href="">
            <img src="/images/image-avatar.png" alt="" />
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
