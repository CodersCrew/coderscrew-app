import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {story()}
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
