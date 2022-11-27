import React from 'react';
import { storiesOf } from "@storybook/react"
import { Select } from "./Select"

const story = storiesOf("Component/Select", module);

story.add("Default", () => (
  <Select 
    items={[
      "Carrot",
      "Banana",
      "Apple"
    ]}
  />
))
