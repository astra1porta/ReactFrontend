import React from "react";
import {NavDropdown} from "react-bootstrap";
import PropTypes from "prop-types";

export const NavBarDropDownView = ({
  navBarDropDown: { airlineName, bidTypesPath, pilotsPath },
}) => {
  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title={airlineName}
      menuVariant="light"
    >
      <NavDropdown.Item href={bidTypesPath}>Bid Types</NavDropdown.Item>
      <NavDropdown.Item href={pilotsPath}>Pilots</NavDropdown.Item>
    </NavDropdown>
  );
};

NavBarDropDownView.propTypes = {
  navBarDropDown: PropTypes.func.isRequired,

};