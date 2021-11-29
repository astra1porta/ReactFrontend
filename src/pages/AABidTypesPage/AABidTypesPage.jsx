import React from "react";
import PropTypes from "prop-types";
import HeaderView from "../../components/HeaderView";
import { BidTypesListView } from "../../components/BidTypesListView/BidTypesListView";


export function AABidTypesPage({bidTypes, navBarDropDowns}) {
  return (
    <>
    <header>
      <HeaderView navBarDropDowns={navBarDropDowns} />
    </header>
      <BidTypesListView bidTypes = {bidTypes} />
    </>
  );
}
AABidTypesPage.propTypes = {
  navBarDropDowns: PropTypes.shape({
    airlineName: PropTypes.string.isRequired,
    bidTypesPath: PropTypes.string.isRequired,
    pilotsPath: PropTypes.string.isRequired,
  }),
  bidTypes: PropTypes.shape({
    Id: PropTypes.string.isRequired,
    fleet: PropTypes.string.isRequired,
    seet: PropTypes.string.isRequired,
    domicile: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired,
    bidPeriods: PropTypes.number.isRequired,
    imported: PropTypes.string.isRequired,
  }),
};