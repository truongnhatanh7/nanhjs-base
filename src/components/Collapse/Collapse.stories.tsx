import React from 'react';
import { storiesOf } from "@storybook/react"
import { Collapse } from "./Collapse"

const story = storiesOf("Component/Collapse", module);

story.add("Default", () => (
  <>
    <Collapse
      title="Lorem ipsum"
    >
      <h1 style={{
        padding: "8px"
      }}>lorem ipsum</h1>
      <h1>lorem ipsum</h1>
      <h1 style={{
        padding: "16px",
        background: "blue",
      }}
      >lorem ipsum</h1>
      <div>
        lorem ipsum
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>    
      </div>
      <h1>lorem ipsum</h1>
    </Collapse>
    <div
      style={{
        marginTop: "16px",
        color: "white",
        fontSize: "14px",
      }}
    >
      TEST TEXT TO OBSERVE COLLAPSE'S BEHAVIOR<br></br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </>

))
