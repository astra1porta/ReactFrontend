import React from "react";
import { NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavBarDropDownView = ({
  navBarDropDown: { airlineName, bidTypesPath, pilotsPath },
}) => (
  <div>
    <NavDropdown
      title={airlineName}
      id="collasible-nav-dropdown"
      menuVariant="light"
      align="end"
    >
      <NavDropdown.Item as={Link} to={bidTypesPath}>
        Bid Types
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to={pilotsPath}>
        Pilots
      </NavDropdown.Item>
    </NavDropdown>
  </div>
);

NavBarDropDownView.propTypes = {
  navBarDropDown: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  }).isRequired,
};
