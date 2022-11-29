import React from "react"
import { styled } from "../../design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

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
  outline: "none",
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "2px solid $success",
  },
  "&:active": {
    opacity: 0.7
  },
  variants: {
    mode: {
      disabled: {
        background: "$accent4",
        "&:hover": {
          cursor: "not-allowed",
          opacity: 1,
        },
        "&:focus-visible": {
          outline: "none",
        },
      },
      primary: {
        background: "$success",
        color: "$white",
        "&:focus-visible": {
          outline: "2px solid $white",
        },
      },
      danger: {
        background: "$danger",
        color: "$white",
        "&:focus-visible": {
          outline: "2px solid $white",
        },
      },
      warning: {
        background: "$warning",
        color: "$white",
        "&:focus-visible": {
          outline: "2px solid $white",
        },
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