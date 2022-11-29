import React from 'react';
import { globalStyle } from "../../design/stitches.config"
import { Button } from "./Button"
import { storiesOf } from "@storybook/react"

globalStyle()
const story = storiesOf("Component/Button", module);

story.add("Small", () => (
  <Button
    onClick={() => {
      console.log("Button clicked")
    }}
  >
    Click me
  </Button>
))

story.add("Medium", () => <Button size="medium">Click me</Button>)

story.add("Large", () => <Button size="large">Click me</Button>)

story.add("Rect", () => <Button shape="rect">Click me</Button>)

story.add("Circle", () => <Button shape="pill">Click me</Button>)

story.add("Disabled", () => <Button mode="disabled">Click me</Button>)

story.add("Primary", () => <Button mode="primary">Click me</Button>)

story.add("Danger", () => <Button mode="danger">Click me</Button>)

story.add("Warning", () => <Button mode="warning">Click me</Button>)



