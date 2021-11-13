import React from "react";

import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";
import {LogoView} from "../LogoView/LogoView";
import {NavBarDropDownView} from "../NavBarDropDownView/NavBarDropDownView";

export function NavBarView({navBarDropDowns}) {
  navBarDropDowns = navBarDropDowns || [];
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid className="bg-bidpro ">
        <Navbar.Brand href="/">{<LogoView />}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav >
            {
              navBarDropDowns.map((navBarDropDown) => 
              <NavBarDropDownView key={navBarDropDown.bidTypesPath} navBarDropDown={navBarDropDown} />
              )
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavBarView.propTypes = {
  navBarDropDowns: PropTypes.arrayOf(NavBarDropDownView.propTypes.navBarDropDown).isRequired,
};

