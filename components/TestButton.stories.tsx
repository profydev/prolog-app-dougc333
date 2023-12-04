import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TestButton, Size, Hierarchy, State, IconState } from "./TestButton";

export default {
  title: "UI/Button",
  component: TestButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof TestButton>;

const Template: StoryFn<typeof TestButton> = ({
  size,
  icon,
  hierarchy,
  state,
  children,
}) => (
  <div style={{ padding: 50 }}>
    <TestButton icon={icon} hierarchy={hierarchy} size={size} state={state}>
      {children}
    </TestButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: Size.sm,
  state: State.default,
  icon: IconState.None,
  hierarchy: Hierarchy.Primary,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
