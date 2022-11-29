import React from 'react';
import { styled } from "../../design/stitches.config"

type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  currentTab: number;
}

export const TabHeader: React.FC<Props> = ({ title, index, setSelectedTab, currentTab }) => {
  return (
    <ListItem>
      <ItemButton
        onClick={() => {
          setSelectedTab(index)
        }}
        selectMode={currentTab === index ? "isSelected" : "notSelected"}
      >
        {title}
      </ItemButton>
    </ListItem>
  )
}

const ListItem = styled("li", {

})

const ItemButton = styled("button", {
  padding: "$x2 $x3",
  fontSize: "$14px",
  border: "1px solid $white",
  background: "$black",
  color: "$white",
  borderRadius: "$borderRadius$br \ $borderRadius$br \ 0px \ 0px",
  "&:hover": {
    cursor: "pointer",
  },
  "&:active": {
    background: "$accent2",
  },
  "&:focus-visible": {
    outline: "2px solid $white",
  },
    variants: {
    selectMode: {
      isSelected: {
        background: "$white",
        color: "$black",
      },
      notSelected: {
        background: "$black",
        color: "$white",
      }
    }
  }
})