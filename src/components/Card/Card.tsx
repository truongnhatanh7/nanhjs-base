import React from "react"
import { styled } from "../../design/stitches.config"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>

interface CardProps extends PrimitiveProps {
  image?: string,
  title?: string,
  description?: string,
  imageArea?: "auto" | "small" | "medium" | "large",
}

export const Card: React.FC<CardProps> = React.forwardRef<HTMLButtonElement, CardProps>((props, ref) => {

  return (<Wrapper ref={ref}>
    <Content>
      {
        props.image &&
        <ImageWrapper height={props.imageArea}>
          <Image src={props.image} alt="card-image" />
        </ImageWrapper>
      }
      {
        props.title &&
        <Title>
          {props.title}
        </Title>
      }
      {
        props.description &&
        <Description>
          {props.description}
        </Description>
      }
      {
        props.children
      }
    </Content>

  </Wrapper>)
})


const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: ".2s",
})

const Wrapper = styled("button", {
  width: "100%",
  height: "fit-content",
  padding: "$x3",
  border: "1px solid $white",
  background: "$black",
  borderRadius: "$borderRadius$br",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  transition: ".1s",
  margin: 0,
  "&:hover": {
    cursor: "pointer",
  },
  [`&:hover ${Image}`]: {
    transform: "scale(1.02)"
  },
  "&:focus-visible": {
    outline: "2px solid $white"
  },
  "&:active": {
    opacity: 0.8
  }
})

const ImageWrapper = styled("div", {
  height: "100%",
  width: "100%",
  overflow: "hidden",
  margin: 0,
  variants: {
    height: {
      auto: {
      },
      small: {
        minHeight: "300px",
        height: "300px",
        maxHeight: "300px"
      },
      medium: {
        minHeight: "600px",
        height: "600px",
        maxHeight: "600px"
      },
      large: {
        minHeight: "800px",
        height: "800px",
        maxHeight: "800px"
      }
    }
  }

})

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "$x2",
  height: "fit-content",
  color: "$white",
  margin: 0,

})

const Title = styled("h1", {
  fontWeight: "$semiBold",
  fontSize: "$18px",
  textAlign: "left",
  margin: 0,
})

const Description = styled("p", {
  margin: 0,
  fontSize: "$14px",
  fontWeight: "$normal",
  width: "100%",
  whiteSpace: "wrap",
  overflow: "hidden",
  textAlign: "left",
  textOverflow: "ellipsis"
})




