import React from "react";

import { AirlineView } from "./AirlineView";

export default {
  title: "Interactive Components/AirlineView",
  component: AirlineView,
};

const Template = (args) => <AirlineView {...args} />;

export const Default = Template.bind({});
Default.args = {
  airlineName: "American Airlines",
  airlinePath: "american-airlines/bidtypes",
};
