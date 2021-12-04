import React from "react";

import { AABidTypesPage } from "./AABidTypesPage";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

export default {
  component: AABidTypesPage,
  title: "Pages | BidTypes/American Airlines Bid Types Page",
};

//Mock redux store
const store = {
  getState: () => {
    return {
      bidTypes: [
        {
          Id: "1",
          fleet: "73G",
          seat: "CAPTAIN",
          domicile: "ANC",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
        {
          Id: "2",
          fleet: "73G",
          seat: "CAPTAIN",
          domicile: "LAX",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
        {
          Id: "3",
          fleet: "73G",
          seat: "CAPTAIN",
          domicile: "PDX",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
        {
          Id: "4",
          fleet: "73G",
          seat: "CAPTAIN",
          domicile: "SEA",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
        {
          Id: "5",
          fleet: "73G",
          seat: "FIRST OFFICER",
          domicile: "ANC",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
        {
          Id: "6",
          fleet: "73G",
          seat: "FIRST OFFICER",
          domicile: "LAX",
          status: "CURRENT",
          numOfBidPeriods: 1,
          imported: "Nov 1 2017 12:00AM",
        },
      ],
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => (
  <Provider store={store}>
    <AABidTypesPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  navBarDropDowns: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidTypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidTypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
    {
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidTypes",
      pilotsPath: "/frontier-airlines/pilots",
    },
    {
      airlineName: "UPS",
      bidTypesPath: "/UPS/bidTypes",
      pilotsPath: "/UPS/pilots",
    },
  ],
};
