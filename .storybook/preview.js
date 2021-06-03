import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"

import { ChakraProvider } from "@chakra-ui/react"
import themeCh from "../app/theme"

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ChakraProvider theme={themeCh}>{story()}</ChakraProvider>
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
