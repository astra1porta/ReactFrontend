import React from "react";

import { NavBarView } from "./NavBarView";

export default {
  title: "Interactive Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;

//Test on load Behaviour
export const Loaded = Template.bind({});
Loaded.args = {
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
