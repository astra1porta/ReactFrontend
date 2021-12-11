import React from "react";
import { AddPilotPage } from "./AddPilotPage";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

export default {
  title: "Pages | Common/AddPilotPage",
  component: AddPilotPage,
};

const Template = (args) => (
  <Provider store={store}>
    <AddPilotPage {...args} />
  </Provider>
);

export const AmericanAirlines = Template.bind({});
AmericanAirlines.args = {
  airline: "AA",
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
export const AlaskaAirlines = Template.bind({});
AlaskaAirlines.args = { ...AmericanAirlines.args, airline: "AS" };

export const FrontierAirlines = Template.bind({});
FrontierAirlines.args = { ...AmericanAirlines.args, airline: "FA" };

export const UPS = Template.bind({});
UPS.args = { ...AmericanAirlines.args, airline: "UP" };
