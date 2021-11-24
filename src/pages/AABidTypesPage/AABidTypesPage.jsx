import React from "react";
import HeaderView from "../../components/HeaderView";
import { BidTypesListView } from "../../components/BidTypesListView/BidTypesListView";


export function AABidTypesPage({navBarDropDowns, bidTypes}) {
  return (
    <header>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <BidTypesListView bidTypes = {bidTypes} />
    </header>
  );
}