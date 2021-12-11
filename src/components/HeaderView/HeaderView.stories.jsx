import React from "react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

import { HeaderView } from "./HeaderView";

export default {
  title: "Interactive Components/HeaderView",
  component: HeaderView,
};

const Template = (args) => (<Provider store={store}><HeaderView {...args} /></Provider>);

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
