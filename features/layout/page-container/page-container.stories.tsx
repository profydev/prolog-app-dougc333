import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { PageContainer } from "./page-container";
import { Routes } from "@config/routes";

export default {
  title: "UI/PageContainer",
  component: PageContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof PageContainer>;

const Template: StoryFn<typeof PageContainer> = ({ children }) => (
  <div style={{ padding: 50 }}>
    <PageContainer title={"PageContainerTitle"} info="PageContainerInfo">
      {children}
    </PageContainer>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: [],
};
Default.parameters = {
  viewMode: "docs",
  route: Routes.issues,
};
