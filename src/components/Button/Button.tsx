import React from "react"
import { styled } from "../../design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

// type Props = {
//   ...PrimitiveProps,
//   size?: "small" | "medium" | "large",
//   shape?: "circle" | "rect",
//   type?: "disabled" | "primary" | "danger" | "warning",
// }

export const Button: React.FC<PrimitiveProps> = React.forwardRef<HTMLButtonElement, PrimitiveProps>((props, ref) => {
  return (<Wrapper ref={ref} {...props}>
    {
      props.children
    }
  </Wrapper>)
})

const Wrapper = styled("button", {
  padding: "$x2 $x3",
  background: "$white",
  border: "none",
  borderRadius: "$borderRadius$br",
  color: "$black",
  transition: "0.1s",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.7
  },
  variants: {
    type: {
      disabled: {
        background: "$accent4",
        "&:hover": {
          cursor: "not-allowed",
          opacity: 1,
        }
      },
      primary: {
        background: "$success",
        color: "$white"
      },
      danger: {
        background: "$danger",
        color: "$white"
      },
      warning: {
        background: "$warning",
        color: "$white"
      }
    },
    size: {
      small: {
        padding: "$x2 $x3",
      },
      medium: {
        padding: "$x3 $x4",
      },
      large: {
        padding: "$x4 $x6",
      }
    },
    shape: {
      rect: {
        borderRadius: "$borderRadius$br",
      },
      pill: {
        borderRadius: 1000,
      }
    }
  }
})