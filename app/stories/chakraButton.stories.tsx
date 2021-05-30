import React from "react"
import { Story, Meta } from "@storybook/react"

import ChakraButton, { BtnProps } from "./chakraButton"

export default {
  title: "Components/Button",
  component: ChakraButton,
} as Meta

const Template: Story<BtnProps> = (args) => <ChakraButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: "lg",
  color: "blue",
  text: "button",
}
