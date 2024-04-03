import { Meta, StoryFn } from "@storybook/react";
import { ButtonAction, ButtonActionProps } from "../components/button/Button";

export default {
  title: "Components/ButtonAction",
  component: ButtonAction,
  argTypes: {
    customColor: { control: "color" },
    size: { control: "radio", options: ["small", "medium", "large"] },
  },
} as Meta;

const Template: StoryFn<ButtonActionProps> = (args: ButtonActionProps) => (
  <ButtonAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Pobierz dane",
  customColor: "#ab9990",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Primary.args,
  customColor: "#ff00ff",
};
export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Primary.args,
  size: "large",
};
