import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input, State, Icon, Label, Hint, Error } from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: { onClick: { action: "click" } },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({
  icon,
  label,
  hint,
  error,
  state,
  children,
}) => (
  <div style={{ padding: 50 }}>
    <Input icon={icon} label={label} hint={hint} error={error} state={state}>
      {children}
    </Input>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Label",
  state: State.empty,
  label: Label.nolabel,
  icon: Icon.noicon,
  hint: Hint.nohint,
  error: Error.noerror,
};
Default.parameters = {
  viewMode: "docs",
};
