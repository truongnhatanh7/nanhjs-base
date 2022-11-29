import React from 'react';
import { storiesOf } from "@storybook/react"
import { Tabs } from "./Tabs"
import { Tab } from "./Tab"


const story = storiesOf("Component/Tabs", module);

story.add("Default", () => (
  <Tabs>
    <Tab title="One">
      One is red
    </Tab>

    <Tab title="Two">
      Two is blue
    </Tab>

    <Tab title="Three">
      <h1>lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maxime ipsum similique nesciunt suscipit voluptatem accusantium et commodi blanditiis corrupti.</p>
    </Tab>

  </Tabs>
))