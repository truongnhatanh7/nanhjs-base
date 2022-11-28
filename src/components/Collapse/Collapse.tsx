import React from "react"
import { styled } from "../../design/stitches.config"
import ChevronDown from "./ChevronDown"

type PrimitiveProps = React.ComponentProps<typeof Wrapper>;

interface CollapseProps extends PrimitiveProps {
  title: string;
}


export const Collapse: React.FC<CollapseProps> = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  return (<Wrapper ref={ref} >
    <Heading onClick={handleToggle}>
      <Title>{props.title}</Title>
      <StyledChevronDown toggle={open ? "isToggled" : "isClosed"}>
        <ChevronDown />
      </StyledChevronDown>
    </Heading>
    <Content toggle={open ? "isToggled" : "isClosed"}>
      <CellList>
        {
          React.Children.map(props.children, (child, index) => (<Cell key={index} tabIndex={index}>{child}</Cell>))
        }
      </CellList>
    </Content>
  </Wrapper>
  )
})

const Wrapper = styled("div", {

})

const StyledChevronDown = styled("div", {
  transition: ".2s",
  transform: "rotateZ(0deg)",
  variants: {
    toggle: {
      isToggled: {
        transform: "rotateZ(180deg)",
      },
      isClosed: {
        transform: "rotateZ(0deg)",
      }
    }
  }
})

const Heading = styled("button", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "$black",
  color: "$white",
  padding: "$x2 $x3",
  width: "100%",
  border: "1px solid $white",
  outline: "none",
  "&:hover": {
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "2px solid $white"
  }
})

const Title = styled("h1", {
  fontSize: "$18px",
  fontWeight: "$semiBold",
})

const Content = styled("div", {
  display: "grid",
  overflow: "hidden",
  gridTemplateRows: "0fr",
  transition: "0.2s",
  variants: {
    toggle: {
      isToggled: {
        gridTemplateRows: "1fr"
      },
      isClosed: {
        gridTemplateRows: "0fr",
      }
    }
  }
})

const CellList = styled("ul", {
  minHeight: 0,
  
})

const Cell = styled("li", {
  border: "1px solid $white",
  borderTop: 'none',
  background: "$black",
  color: "$white",
  outline: "none",
  "&:focus-visible": {
    // outline: "2px solid $white",
  }

})

