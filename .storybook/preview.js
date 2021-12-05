import "bootstrap/dist/css/bootstrap.min.css";
import "../src/global.css";
import React from 'react';
import {addDecorator} from "@storybook/react";
import {MemoryRouter} from "react-router";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  passArgsFirst: false,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
