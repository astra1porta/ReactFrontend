import React from "react";
import { HomePage } from "./HomePage";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

export default {
  title: "Pages | Common/HomePage",
  component: HomePage,
};

const Template = (args) => (<Provider store={store}><HomePage {...args} /></Provider>);

export const Default = Template.bind({});
Default.args = {
  name: "Bill Smith",
  version: "1.0.0",
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
