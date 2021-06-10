import React from "react"
import { Button } from "@chakra-ui/react"

export interface BtnProps {
  size?: "xs" | "sm" | "md" | "lg"
  color?: string
  variant?: "solid" | "outline" | "ghost" | "link"
  isLoading?: boolean
  loadingText?: string
  text?: string
}

const chakraButton: React.FC<BtnProps> = ({
  size = "lg",
  color = "blue",
  variant = "solid",
  isLoading = false,
  loadingText = "Loading",
  text = "Button",
}) => {
  return (
    <Button
      size={size}
      colorScheme={color}
      variant={variant}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text}
    </Button>
  )
}

export default chakraButton
