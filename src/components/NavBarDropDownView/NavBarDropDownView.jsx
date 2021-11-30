import React from "react";
import {NavDropdown} from "react-bootstrap";
import PropTypes from "prop-types";

export const NavBarDropDownView = ({
  navBarDropDown: { airlineName, bidTypesPath, pilotsPath },
}) => {
  return (
    <div classname="text-white">
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
  navBarDropDown: PropTypes.func.isRequired,

};