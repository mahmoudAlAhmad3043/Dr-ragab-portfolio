import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <div className="logo">
        Dr.Ragab
          {/* <img
            src="/logo.png"
            alt="logo"
          /> */}
        </div>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://linkedin.com/in/pedro-sales-muniz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
