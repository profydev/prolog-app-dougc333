import "normalize.css";
import "../styles/global.scss";
import React from "react";
import { Story as StoryType } from "@storybook/react";
import { NavigationProvider } from "../features/layout";
import { decorator as mockRouterDecorator } from "../__mocks__/next/router";
import { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// export const preview: Preview = {
//   parameters: {
//     viewport: {
//       viewports: INITIAL_VIEWPORTS,
//     },
//   },
// };

export const decorators = [
  (Story: StoryType) => (
    <NavigationProvider>
      <Story />
    </NavigationProvider>
  ),
  mockRouterDecorator,
];

export const parameters = {
  options: {
    showPanel: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
