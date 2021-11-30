import React from "react";

import {AdministrationView}  from "./AdministrationView";

export default {
  title: "Components/AdministrationView",
  component: AdministrationView,
};

 const Template = (args) => <AdministrationView {...args}/>;

export const Example_With_Name = Template.bind({});
Example_With_Name.args = 
  {name: "Bill Smith",};
