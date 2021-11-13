import React from "react";

import { NavBarView } from "./NavBarView";
import * as DropDownStories from "../NavBarDropDownView/NavBarDropDownView.stories";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;

export const Default = Template.bind({});

//Test on load Behaviour
export const Loaded = Template.bind({});
Loaded.args = {
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
