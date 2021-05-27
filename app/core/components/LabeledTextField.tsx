import { forwardRef, PropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react"

export interface LabeledTextFieldProps extends PropsWithoutRef<InputProps> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledTextField = forwardRef<InputProps, LabeledTextFieldProps>(
  ({ label, outerProps, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? errors[name].join(", ")
      : errors[name]?.message || errors[name]

    return (
      <FormControl isInvalid={error} {...outerProps}>
        <FormLabel>
          {label}
          <Input isDisabled={isSubmitting} {...register(name)} {...props} />
        </FormLabel>

        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    )
  }
)

export default LabeledTextField
