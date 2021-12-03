import React from "react";

import { NavBarDropDownView } from "./NavBarDropDownView";

export default {
  title: "Interactive Components/NavBarDropDownView",
  component: NavBarDropDownView,
};

const Template = (args) => <NavBarDropDownView {...args} />;

export const Default = Template.bind({});
Default.args = {
  navBarDropDown: {
    airlineName: "Airline Name",
    bidTypesPath: "/airline/bidtypes",
    pilotsPath: "/airline/pilots",
  },
};

export const AmericanAirlines = Template.bind({});
AmericanAirlines.args = {
  navBarDropDown: {
    airlineName: "American Airlines",
    bidTypesPath: "/american-airlines/bidTypes",
    pilotsPath: "/american-airlines/pilots",
  },
};

export const AlaskanAirlines = Template.bind({});
AlaskanAirlines.args = {
  navBarDropDown: {
    airlineName: "Alaska Airlines",
    bidTypesPath: "/alaska-airlines/bidTypes",
    pilotsPath: "/alaska-airlines/pilots",
  },
};

export const FrontierAirlines = Template.bind({});
FrontierAirlines.args = {
  navBarDropDown: {
    airlineName: "Frontier Airlines",
    bidTypesPath: "/frontier-airlines/bidTypes",
    pilotsPath: "/frontier-airlines/pilots",
  },
};

export const UPS = Template.bind({});
UPS.args = {
  navBarDropDown: {
    airlineName: "UPS",
    bidTypesPath: "/UPS/bidTypes",
    pilotsPath: "/UPS/pilots",
  },
};
