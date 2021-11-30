import React from "react";

import PropTypes from "prop-types";
import { Navbar, Container } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {  } from "react-bootstrap";
import {LogoView} from "../LogoView/LogoView";
import NavBarView from "../NavBarView";
import {NavBarDropDownView} from "../NavBarDropDownView/NavBarDropDownView";

export function HeaderView({navBarDropDowns}) {
  navBarDropDowns = navBarDropDowns || [];
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container fluid className="bg-bidpro ">
        <Navbar.Brand  >
          <NavLink to="/">
            <LogoView />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavBarView navBarDropDowns={navBarDropDowns}  />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

HeaderView.propTypes = {
  navBarDropDowns: PropTypes.arrayOf(NavBarDropDownView.propTypes.navBarDropDown).isRequired,
};

