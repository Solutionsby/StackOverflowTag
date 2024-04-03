import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "../components/input/Input";


export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => (
  <Input {...args} />
);

export const Primary = Template.bind({}); 
Primary.args = {
    status:false,
    label:"String Input",
    type:"string",
    helperText:"Error Text"

};
export const Error = Template.bind({}); 
Error.args = {
    status:true,
    label:"Number Input",
    type:"number",
    value: 0,
    helperText:"Error Text"

};


