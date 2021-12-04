import React from "react";
import { NotFoundPage } from "./NotFoundPage";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

export default {
  title: "Pages | Common/NotFoundPage",
  component: NotFoundPage,
};
const Template = (args) => (
  <Provider store={store}>
    <NotFoundPage {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
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
