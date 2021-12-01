import React from "react";
import {NavDropdown} from "react-bootstrap";
import PropTypes from "prop-types";

export const NavBarDropDownView = ({
  navBarDropDown: { airlineName, bidTypesPath, pilotsPath },
}) => {
  return (
    <div>
      <NavDropdown
        title={airlineName}
        id="collasible-nav-dropdown"
        menuVariant="light"
        align='end'
     >
       <NavDropdown.Item href={bidTypesPath}>
          Bid Types
        </NavDropdown.Item>
        <NavDropdown.Item href={pilotsPath}>
          Pilots
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

NavBarDropDownView.propTypes = {
  navBarDropDown: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired
  }).isRequired,

};