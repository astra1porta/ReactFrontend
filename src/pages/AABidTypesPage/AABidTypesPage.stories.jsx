import React from "react";

import { AABidTypesPage } from "./AABidTypesPage";
import * as DropDownStories from "../../components/BidTypeView/BidTypeView.stories"

export default {
  title: "Page/American Airlines BidTypes",
  component: AABidTypesPage,
};

const Template = (args) => <AABidTypesPage {...args} />;

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
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidTypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidTypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "Frontier Airlines",
      bidTypesPath: "frontier-airlines/bidTypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      ...DropDownStories.Default.args.navBarDropDowns,
      airlineName: "UPS",
      bidTypesPath: "UPS/bidTypes",
      pilotsPath: "UPS/pilots",
    },
  ],
};