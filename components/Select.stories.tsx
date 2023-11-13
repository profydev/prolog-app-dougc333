import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select, State } from "./Select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "click" } },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({ state }) => (
  <div style={{ padding: 50 }}>
    <Select state={state}></Select>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  state: State.empty,
};
Default.parameters = {
  viewMode: "docs",
};
