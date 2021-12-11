import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Navbar, Container } from "react-bootstrap";
import { LogoView } from "../LogoView/LogoView";
import NavBarView from "../NavBarView";
import { Link } from "react-router-dom";

export function HeaderView({ navBarDropDowns }) {
  navBarDropDowns = useSelector((state) => state.navBarDropDowns);
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
      <Container fluid className="bg-bidpro ">
        <Navbar.Brand as={Link} to="/">
          <LogoView />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavBarView navBarDropDowns={navBarDropDowns} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

HeaderView.propTypes = {
  navBarDropDowns: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string.isRequired,
      bidTypesPath: PropTypes.string.isRequired,
      pilotsPath: PropTypes.string.isRequired,
    })
  ),
};
