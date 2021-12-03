import React from "react";

import { HeaderView } from "./HeaderView";

export default {
  title: "Interactive Components/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

//Test on load Behaviour
export const Default = Template.bind({});
Default.args = {
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
