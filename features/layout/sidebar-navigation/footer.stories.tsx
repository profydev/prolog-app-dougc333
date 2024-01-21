import { Footer } from "./footer";
import React from "react";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = ({ dataCy = "aaaa" }) => (
  <div style={{ padding: 50 }}>
    <Footer dataCy={dataCy}></Footer>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
