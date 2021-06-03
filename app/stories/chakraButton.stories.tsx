import React from "react"
import { Story, Meta } from "@storybook/react"

import ChakraButton, { BtnProps } from "./chakraButton"

export default {
  title: "Components/Buttons",
  component: ChakraButton,
} as Meta

const Template: Story<BtnProps> = (args) => <ChakraButton {...args} />

export const BasicButton = Template.bind({})

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  color: "red",
  variant: "outline",
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  isLoading: true,
}
