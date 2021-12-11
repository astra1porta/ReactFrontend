import React from "react";

import { ButtonView } from "./ButtonView";


export default {
  title: "Components/Buttons/ButtonView",
  component: ButtonView,
};

const Template = (args) => <ButtonView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "btn-primary",
  onClick: undefined,
  label: "Retry Import",
};

export const bidPeriods = Template.bind({});
bidPeriods.args = {
  ...Primary.args,
  backgroundColor: 'btn-info',
  label: "Bid Periods",
};

export const ImportHistory = Template.bind({});
ImportHistory.args = {
  ...bidPeriods.args,
  label: "Import History",
};

export const Delete = Template.bind({});
Delete.args = {
  ...Primary.args,
  backgroundColor: "btn-danger",
  label: "Delete",
};

