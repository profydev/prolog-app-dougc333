import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TestButton, Size, Hierarchy, State } from "./TestButton";

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
  hierarchy,
  state,
  children,
}) => (
  <div style={{ padding: 50 }}>
    <TestButton hierarchy={hierarchy} size={size} state={state}>
      {children}
    </TestButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: Size.sm,
  hierarchy: Hierarchy.Primary,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};

export const Default_Medium = Template.bind({});
Default.args = {
  size: Size.md,
  hierarchy: Hierarchy.Primary,
  state: State.default,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
