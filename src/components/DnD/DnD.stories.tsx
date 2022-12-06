import React from 'react';
import { storiesOf } from "@storybook/react"
import { styled } from "../../design/stitches.config"
import { useForm, Controller } from "react-hook-form"
import { DragItem } from "./DragItem"

const story = storiesOf("Component/DnD", module);

story.add("Drag Item", () => (
  <Playground>
    <DragItem>
      <div
        style={{
          width: "300px",
          maxWidth: "300px",
          color: "white",
          padding: "16px",
          border: "1px solid white",
        }}
      >
        <h1>This text can be dragged</h1>
      </div>
    </DragItem>
  </Playground>
))

const Playground = styled("div", {
  width: 800,
  height: 500,
  background: "$accent2",
  margin: 0,
  padding: 0,
})
