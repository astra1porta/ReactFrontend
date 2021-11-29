import React from "react";
import PropTypes from "prop-types";
import {HeaderView} from "../../components/HeaderView/HeaderView";
import {FooterView} from "../../components/FooterView/FooterView";
import { PilotsListView } from "../../components/PilotsListView/PilotsListView";

export function PilotsPage({ pilots, navBarDropDowns }) {
  return (
    <>
      <header>
        <HeaderView navBarDropDowns={navBarDropDowns} />
      </header>
      <PilotsListView pilots={pilots} />
      <FooterView />
    </>
  );
}

PilotsPage.propTypes = {
  pilots: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address2: PropTypes.number.isRequired,
    city: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seat: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
  }),
  navBarDropDowns: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  }),
};
