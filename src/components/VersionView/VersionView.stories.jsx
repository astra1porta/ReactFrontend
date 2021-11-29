import React from "react";

import { VersionView } from "./VersionView";

export default {
  title: "Components/VersionView",
  component: VersionView,
};

const Template = (args) => <VersionView {...args} />;

export const Default = Template.bind({});
Default.args = {
  version: '1.0.0'
}
