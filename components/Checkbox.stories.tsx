import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, DynamicState, Size, CheckStates } from "./Checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "click" } },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  size,
  state,
  dynamicState,
  children,
}) => (
  <div style={{ padding: 50 }}>
    <Checkbox size={size} state={state} dynamicState={dynamicState}>
      {children}
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: Size.sm,
  children: "Label",
  state: CheckStates.unchecked,
  dynamicState: DynamicState.default,
};
Default.parameters = {
  viewMode: "docs",
};
