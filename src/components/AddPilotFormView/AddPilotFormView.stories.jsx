import React from "react";

import { AddPilotFormView } from "./AddPilotFormView";
import { store } from "../../redux/store";
import {Provider} from 'react-redux';

export default {
  title: "Interactive Components/AddPilotFormView",
  component: AddPilotFormView,
};

const Template = (args) => (<Provider store={store}><AddPilotFormView {...args} /></Provider>);

export const Default = Template.bind({});

