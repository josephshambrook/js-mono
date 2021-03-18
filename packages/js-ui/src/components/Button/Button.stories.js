import React from "react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "clicked",
    },
    children: {
      type: {
        name: "string",
        required: true,
      },
      defaultValue: "Button",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
