import React from "react"
import { Button } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"

export interface BtnProps {
  size?: "xs" | "sm" | "md" | "lg"
  color?: string
  variant?: "solid" | "outline" | "ghost" | "link"
  isLoading?: boolean
  loadingText?: string
  text?: string
}

const chakraButton: React.FC<BtnProps> = ({
  size,
  color = "blue",
  variant,
  isLoading = false,
  loadingText = "Loading",
  text = "Button",
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Button
        size={size}
        colorScheme={color}
        variant={variant}
        isLoading={isLoading}
        loadingText={loadingText}
      >
        {text}
      </Button>
    </ChakraProvider>
  )
}

export default chakraButton
