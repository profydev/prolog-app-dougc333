import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select2, State, Icon, Label, Hint, Error } from "./Select2";

export default {
  title: "UI/Select2",
  component: Select2,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "click" } },
} as Meta<typeof Select2>;

const Template: StoryFn<typeof Select2> = ({
  state,
  icon,
  label,
  hint,
  error,
}) => (
  <div style={{ padding: 50 }}>
    <Select2
      state={state}
      icon={icon}
      label={label}
      hint={hint}
      error={error}
    ></Select2>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  state: State.empty,
  icon: Icon.noIcon,
  label: Label.noLabel,
  hint: Hint.noHint,
  error: Error.noError,
};
Default.parameters = {
  viewMode: "docs",
};
