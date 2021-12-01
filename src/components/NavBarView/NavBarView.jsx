import React from "react";

import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import {NavBarDropDownView} from "../NavBarDropDownView/NavBarDropDownView";

export function NavBarView({navBarDropDowns}) {
  navBarDropDowns = navBarDropDowns || [];
  return (
 <>

          <Nav className="ms-auto bg-bidpro text-light">
            {
              navBarDropDowns.map((navBarDropDown, ctr) => 
              <NavBarDropDownView key={ctr} navBarDropDown={navBarDropDown} />
              )
            }
          </Nav>
        
</>
  );
};

NavBarView.propTypes = {
  navBarDropDowns: PropTypes.arrayOf(
    PropTypes.shape({
      airlineName: PropTypes.string.isRequired,
      bidTypesPath: PropTypes.string.isRequired,
      pilotsPath: PropTypes.string.isRequired,
    })
  ),
};

