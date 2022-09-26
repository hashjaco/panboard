import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "../styles.scss";

const imageStyleDefault = {
  height: 40,
  width: 40,
  marginRight: 10,
};

const appBarMenuItemStyleDefault = {
  display: "flex",
  justifyContent: "flex-end",
};

const AppBar = ({
  brand = "",
  dropdownOptions = [],
  imageUrl = "",
  imageAlt = "",
  style = imageStyleDefault,
  navbarLinkOptions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="app-bar">
      <Navbar style={{ borderBottom: "#000 solid .5px" }}>
        <NavbarBrand>
          {imageUrl ? (
            <img alt={imageAlt} src={imageUrl} style={style} />
          ) : null}
          PanBoard
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {navbarLinkOptions.map(option => (
              <NavItem key={option.name}>
                <NavLink
                  style={{ display: "flex", justifyContent: "flex-end" }}
                  href={option.url}>
                  {option.name}
                </NavLink>
              </NavItem>
            ))}
            <UncontrolledDropdown navbar="true" inNavbar>
              <DropdownToggle style={appBarMenuItemStyleDefault} nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu className="me-auto" style={{ border: "none" }}>
                {dropdownOptions.map(option => (
                  <DropdownItem key={option.name}>
                    <NavLink
                      style={appBarMenuItemStyleDefault}
                      className="appbar-dd-nav-link"
                      href={option.url}>
                      {option.name}
                    </NavLink>
                  </DropdownItem>
                ))}
                <DropdownItem
                  divider
                  style={{
                    width: 150,
                    display: "flex",
                    justifyContent: "flex-end",
                    float: "right",
                  }}
                />
                <DropdownItem>
                  <NavLink style={appBarMenuItemStyleDefault} href="/logout">
                    Logout
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppBar;
