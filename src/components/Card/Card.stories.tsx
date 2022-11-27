import React from 'react';
import { styled, globalStyle } from "../../design/stitches.config"
import { Card } from "./Card"
import { storiesOf } from "@storybook/react"

const story = storiesOf("Component/Card", module);

const GridWrapper = styled("div", {
  width: 800,
  display: "grid",
  gridTemplateColumns: "300px 300px",
  gap: "$x3",
  gridAutoRows: "400px"
})

story.add("Default", () => (
  <GridWrapper>
    <Card 
      image="https://img.freepik.com/free-vector/psychedelic-hand-drawn-groovy-background_23-2149086366.jpg?w=2000"
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
        <Card 
      image="https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      title="Lorem ipsum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageArea="small"
    />
  </GridWrapper>
))