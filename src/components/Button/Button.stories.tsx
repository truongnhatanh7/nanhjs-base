import React from 'react';
import { globalStyle } from "../../design/stitches.config"
import { Button } from "./Button"
import { storiesOf } from "@storybook/react"

globalStyle()
const story = storiesOf("Component/Button", module);

// export default {
//   title: "ButtonComponent",
//   component: Button,
// };

// const ButtonDefault = () => <Button>Click me</Button>
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

story.add("Disabled", () => <Button type="disabled">Click me</Button>)

story.add("Primary", () => <Button type="primary">Click me</Button>)

story.add("Danger", () => <Button type="danger">Click me</Button>)

story.add("Warning", () => <Button type="warning">Click me</Button>)



