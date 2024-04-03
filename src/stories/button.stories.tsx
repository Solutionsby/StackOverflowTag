import { Meta, StoryFn } from "@storybook/react";
import { ButtonAction, ButtonActionProps } from "../components/button/Button";


export default {
  title: "Components/ButtonAction",
  component: ButtonAction,
  argTypes: {
    color:{control:"select" ,options:["success","error",'primary']},
    size: { control: "radio", options: ["small", "medium", "large"] },
    variant:{control:"select", options:["text","outlined","contained"]}
  },
} as Meta;

const Template: StoryFn<ButtonActionProps> = (args: ButtonActionProps) => (
  <ButtonAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Pobierz dane",
  variant:'outlined',
  color:'primary'
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  ...Primary.args,
  size: "large",
}

