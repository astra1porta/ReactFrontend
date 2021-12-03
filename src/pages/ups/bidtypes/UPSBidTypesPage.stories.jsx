import React from "react";

import { UPSBidTypesPage } from "./UPSBidTypesPage";

export default {
  component: UPSBidTypesPage,
  title: "Pages | BidTypes/UPS Bid Types Page",
};

const Template = (args) => <UPSBidTypesPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  bidTypes: [
    {
      Id: "1",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "ANC",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "2",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "LAX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "3",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "PDX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "4",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "SEA",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "5",
      fleet: "73G",
      seat: "FIRST OFFICER",
      domicile: "ANC",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
    {
      Id: "6",
      fleet: "73G",
      seat: "FIRST OFFICER",
      domicile: "LAX",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    },
  ],
  navBarDropDowns: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidTypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidTypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      airlineName: "Frontier Airlines",
      bidTypesPath: "frontier-airlines/bidTypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      airlineName: "UPS",
      bidTypesPath: "UPS/bidTypes",
      pilotsPath: "UPS/pilots",
    },
  ],
};
