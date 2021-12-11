import React from "react";

import { BidTypeListView } from "./BidTypeListView";
import * as BidTypeStories from "../BidTypeView/BidTypeView.stories";

export default {
  title: "Components/BidTypeListView",
  component: BidTypeListView,
};
const Template = (args) => <BidTypeListView {...args} />;
export const Default = Template.bind({});
Default.args = {
  bidTypes: [
    { ...BidTypeStories.Default.args.bidType },
    { ...BidTypeStories.Default.args.bidType, id: 2},
    { ...BidTypeStories.Default.args.bidType, id: 3 },
    { ...BidTypeStories.Default.args.bidType, id: 4 },
    { ...BidTypeStories.Default.args.bidType, id: 5 },
  ],
};