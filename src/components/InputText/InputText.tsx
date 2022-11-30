import React from "react"
import { styled } from "../../design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

export const InputText: React.FC<PrimitiveProps> = React.forwardRef<HTMLInputElement, PrimitiveProps>((props, ref) => {
  return (<Wrapper ref={ref} {...props} />)
})

const Wrapper = styled("input", {
  padding: "$x2 $x3",
  border: "1px solid $white",
  borderRadius: "$borderRadius$br",
  background: "$black",
  color: "$white",
  "&:focus-visible": {
    outline: "2px solid $white",
  }
})

