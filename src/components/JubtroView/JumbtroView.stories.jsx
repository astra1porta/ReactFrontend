import React from "react";

import { JumbtroView } from "./JumbtroView";

export default {
  title: "Components/JumbtroView",
  component: JumbtroView,
};

 const Template = (args) => <JumbtroView {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Bill Smith",
  version: "1.0.0",
};