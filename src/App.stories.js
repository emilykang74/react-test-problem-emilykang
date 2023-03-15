// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories


import React from "react";

import App from "./App";

export default {
  title: "App",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Clicked = Template.bind({});
Clicked.args = {
  thanksMessage: true,
};

export const Default = Template.bind({});
Default.args = {
  thanksMessage: false,
};