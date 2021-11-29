import React from "react";

import { BidTypeView } from "./BidTypeView";
import * as DropDownStories from "../NavBarDropDownView/NavBarDropDownView.stories";

export default {
  title: "Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  bidTypes: []
}
//Test on load Behaviour
export const Loaded = Template.bind({});
Loaded.args = {
  bidTypes: [
    {
      Id: "1",
      fleet: "73G",
      seat: "CAPTAIN",
      domicile: "ANC",
      status: 1,
      bidPeriods: 1,
      imported: "Nov 1 2017 12:00AM",
    }
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