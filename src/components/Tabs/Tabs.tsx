import React from "react"
import { styled } from "../../design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

export const Tabs: React.FC<PrimitiveProps> = React.forwardRef<HTMLDivElement, PrimitiveProps>((props, ref) => {
  return (<Wrapper>

  </Wrapper>)
})

const Wrapper = styled("div", {

})

