import React from "react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

import { BidTypeView } from "./BidTypeView";

export default {
  title: "Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => (
  <Provider store={store}>
    <BidTypeView {...args} />
  </Provider>
);

//Test on load Behaviour
export const Default = Template.bind({});
Default.args = {
  bidType: {
    status: "CURRENT",
    id: 1,
    seat: "CPT",
    domicile: "GEG",
    fleet: "73G",
    numOfBidPeriods: 3,
    lastImported: "Nov 1 2017 12:00 AM",
  },
};
export const Importing = Template.bind({});
Importing.args = {
  bidType: {
    status: "IMPORTING",
    id: 1,
    seat: "CPT",
    domicile: "GEG",
    fleet: "73G",
    numOfBidPeriods: 3,
    lastImported: "Nov 1 2017 12:00 AM",
  },
};
